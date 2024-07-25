import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';


export async function POST(request: NextRequest) {
  try {
    console.log('APIルート: リクエスト受信');
    const formData: Formdata = await request.json();
    console.log('フォームデータ:', formData);
    const result = await sendEmail(formData);

    if (result.success) {
      console.log('メール送信成功');
      return NextResponse.json({ message: '送信成功' }, { status: 200 });
    } else {
      console.error('メール送信失敗:', result.error);
      return NextResponse.json({ message: '送信失敗', error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error('APIルートエラー:', error);
    return NextResponse.json({ message: 'サーバーエラー', error: error.message }, { status: 500 });
  }
}

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
  carTypes: string[]; // carTypes を配列として定義
  remarks: string;
}

const createTransporter = async (): Promise<nodemailer.Transporter> => {
  const oauth2Client = new OAuth2Client(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      accessToken: accessToken.token!,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });
};

const sendEmail = async (
  formData: Formdata
): Promise<{ success: boolean; error?: Error }> => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'magnis.corporation@gmail.com', // 管理者メールアドレス
      subject: 'レンタカー予約・お問い合わせ',
      text: `
        名前: ${formData.name}
        フリガナ: ${formData.furigana}
        メールアドレス: ${formData.email}
        電話番号: ${formData.tel}
        お問い合わせ内容: ${formData.inquiryType}
        貸出日時: ${formData.pickupDate}
        返却日時: ${formData.returnDate}
        貸出場所: ${formData.pickupLocation}
        返却場所: ${formData.returnLocation}
        希望車種: ${formData.carTypes.join(', ')} // carTypes をカンマ区切りで表示
        備考: ${formData.remarks}
      `,
    };

    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'お問い合わせありがとうございます',
      text: `
        ${formData.name} 様

        この度は小豆島ガジュマルレンタカーにお問い合わせいただき、誠にありがとうございます。
        以下の内容でお問い合わせを承りました。

        お問い合わせ内容: ${formData.inquiryType}
        貸出日時: ${formData.pickupDate}
        返却日時: ${formData.returnDate}
        貸出場所: ${formData.pickupLocation}
        返却場所: ${formData.returnLocation}
        希望車種: ${formData.carTypes.join(', ')} // carTypes をカンマ区切りで表示

        内容を確認の上、担当者より折り返しご連絡させていただきます。
        今しばらくお待ちくださいますようお願い申し上げます。

        ※このメールは自動送信されています。このメールへの返信はできませんので、ご了承ください。

        小豆島ガジュマルレンタカー
        TEL: 0120-544-960
        営業時間: 8:30～19:00
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return { success: true };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return { success: false, error };
  }
};

