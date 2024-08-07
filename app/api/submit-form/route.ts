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
  email: string;
  tel: string;
  inquiryType: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  returnLocation: string;
  remarks: string;
  pickupLocationOther?: string;
  returnLocationOther?: string;
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

    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      cc: 'gajumaru.renta2024@gmail.com',
      subject: 'レンタカー予約・お問い合わせ受付完了',
      html: `
        <h2>${formData.name} 様</h2>

        <p>この度は小豆島ガジュマルレンタカーにお問い合わせいただき、誠にありがとうございます。</p>

        <p>以下の内容で予約・お問い合わせを承りました。</p>

        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">項目</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">内容</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">お名前</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">メールアドレス</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.email}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">電話番号</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.tel}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">お問い合わせ内容</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.inquiryType}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">貸出日時</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.pickupDate}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">返却日時</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.returnDate}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">貸出場所</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.pickupLocation}${formData.pickupLocationOther ? ` (${formData.pickupLocationOther})` : ''}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">返却場所</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.returnLocation}${formData.returnLocationOther ? ` (${formData.returnLocationOther})` : ''}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">備考</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${formData.remarks || 'なし'}</td>
          </tr>
        </table>

        <p>内容を確認の上、担当者より折り返しご連絡させていただきます。今しばらくお待ちくださいますようお願い申し上げます。</p>

        <p>※このメールは自動送信されています。このメールへの返信はできませんので、ご了承ください。</p>

        <p>
        小豆島ガジュマルレンタカー<br>
        TEL: 0120-544-960<br>
        営業時間: 8:30～19:00
        </p>
      `,
    };

    console.log('メール送信開始');
    const autoReplyResult = await transporter.sendMail(autoReplyOptions);

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