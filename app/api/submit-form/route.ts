import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

console.log('環境変数チェック:');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('GMAIL_CLIENT_ID:', process.env.GMAIL_CLIENT_ID ? '設定されています' : '設定されていません');
console.log('GMAIL_CLIENT_SECRET:', process.env.GMAIL_CLIENT_SECRET ? '設定されています' : '設定されていません');
console.log('GMAIL_REFRESH_TOKEN:', process.env.GMAIL_REFRESH_TOKEN ? '設定されています' : '設定されていません');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});

interface Formdata {
  name: string;
  furigana: string;
  email: string;
  tel: string;
  inquiryType: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  returnLocation: string;
  carTypes: string[];
  remarks: string;
  pickupLocationOther?: string;
  returnLocationOther?: string;
  options?: string[];
  driverAge: string;
  licenseType: string;
  specialRequests?: string;
}

export async function POST(request: NextRequest) {
  try {
    console.log('APIルート: リクエスト受信');
    const formData: Formdata = await request.json();
    console.log('フォームデータ:', formData);

    // 簡単なバリデーション
    if (!formData.name || !formData.email || !formData.inquiryType) {
      return NextResponse.json({ message: '必須フィールドが不足しています' }, { status: 400 });
    }

    const result = await sendEmail(formData);

    if (result.success) {
      console.log('メール送信成功');
      return NextResponse.json({ message: '送信成功' }, { status: 200 });
    } else {
      console.error('メール送信失敗:', result.error);
      return NextResponse.json({ message: '送信失敗', error: result.error?.message }, { status: 500 });
    }
  } catch (error) {
    console.error('APIルートエラー:', error);
    return NextResponse.json({ message: 'サーバーエラー', error: (error as Error).message }, { status: 500 });
  }
}

const sendEmail = async (formData: Formdata): Promise<{ success: boolean; error?: Error }> => {
  try {
    const accessToken = await new Promise<string>((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.error('アクセストークン取得エラー:', err);
          reject('Failed to create access token');
        } else if (token) {
          console.log('アクセストークン取得成功');
          resolve(token);
        } else {
          reject('No token received');
        }
      });
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken
      },
      logger: true,
      debug: true
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'gajumaru.renta2024@gmail.com',
      cc: process.env.EMAIL_USER,
      subject: 'レンタカー予約・お問い合わせ',
      text: `
        名前: ${formData.name}
        フリガナ: ${formData.furigana}
        メールアドレス: ${formData.email}
        電話番号: ${formData.tel}
        お問い合わせ内容: ${formData.inquiryType}
        貸出日時: ${formData.pickupDate}
        返却日時: ${formData.returnDate}
        貸出場所: ${formData.pickupLocation}${formData.pickupLocationOther ? ` (${formData.pickupLocationOther})` : ''}
        返却場所: ${formData.returnLocation}${formData.returnLocationOther ? ` (${formData.returnLocationOther})` : ''}
        運転者の年齢: ${formData.driverAge}
        運転免許証の種類: ${formData.licenseType}
        オプション: ${formData.options?.join(', ') || 'なし'}
        特記事項・ご要望: ${formData.specialRequests || 'なし'}
      `,
    };

    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      cc: 'gajumaru.renta2024@gmail.com', // ここにCCを追加
      subject: 'お問い合わせありがとうございます',
      text: `
        ${formData.name} 様

        この度は小豆島ガジュマルレンタカーにお問い合わせいただき、誠にありがとうございます。

        お問い合わせ内容: ${formData.inquiryType}
        貸出日時: ${formData.pickupDate}
        返却日時: ${formData.returnDate}
        貸出場所: ${formData.pickupLocation}${formData.pickupLocationOther ? ` (${formData.pickupLocationOther})` : ''}
        返却場所: ${formData.returnLocation}${formData.returnLocationOther ? ` (${formData.returnLocationOther})` : ''}
        運転者の年齢: ${formData.driverAge}
        運転免許証の種類: ${formData.licenseType}
        オプション: ${formData.options?.join(', ') || 'なし'}

        内容を確認の上、担当者より折り返しご連絡させていただきます。
        今しばらくお待ちくださいますようお願い申し上げます。

        ※このメールは自動送信されています。このメールへの返信はできませんので、ご了承ください。

        小豆島ガジュマルレンタカー
        TEL: 0120-544-960
        営業時間: 8:30～19:00
      `,
    };

    console.log('メール送信開始');
    const [adminMailResult, autoReplyResult] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    console.log('管理者メール結果:', adminMailResult);
    console.log('自動返信メール結果:', autoReplyResult);

    return { success: true };
  } catch (error) {
    console.error('詳細なメール送信エラー:', error);
    if (error instanceof Error) {
      console.error('エラーメッセージ:', error.message);
      console.error('エラースタック:', error.stack);
    }
    if ('response' in (error as any)) {
      console.error('SMTP応答:', (error as any).response);
    }
    return { success: false, error: error as Error };
  }
};