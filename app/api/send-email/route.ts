import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, furigana, email, tel, inquiryType, pickupDate, returnDate, pickupLocation, returnLocation, carTypes, remarks, pickupLocationOther, returnLocationOther, options, driverAge, licenseType, specialRequests } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // ユーザーへの自動返信メールのみ送信
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'お問い合わせありがとうございます',
      text: `
        ${name}様

        小豆島ガジュマルレンタカーにお問い合わせいただき、誠にありがとうございます。
        以下の内容で承っております：

        お名前: ${name}
        フリガナ: ${furigana}
        メールアドレス: ${email}
        電話番号: ${tel}
        お問い合わせ内容: ${inquiryType}
        貸出日時: ${pickupDate}
        返却日時: ${returnDate}
        貸出場所: ${pickupLocation}${pickupLocationOther ? ` (${pickupLocationOther})` : ''}
        返却場所: ${returnLocation}${returnLocationOther ? ` (${returnLocationOther})` : ''}
        ご希望の車種: ${carTypes.join(', ')}
        運転者の年齢: ${driverAge}
        運転免許証の種類: ${licenseType}
        オプション: ${options?.join(', ') || 'なし'}
        特記事項・ご要望: ${specialRequests || 'なし'}

        内容を確認の上、担当者より折り返しご連絡させていただきます。
        今しばらくお待ちくださいますようお願い申し上げます。

        ※このメールは自動送信されています。このメールへの返信はできませんので、ご了承ください。

        小豆島ガジュマルレンタカー
        TEL: 0120-544-960
        営業時間: 8:30～19:00
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}