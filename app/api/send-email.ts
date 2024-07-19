import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, furigana, email, tel, inquiryType, pickupDate, returnDate, pickupLocation, returnLocation, carTypes, remarks } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'gajumaru.renta2024@gmail.com',
      subject: 'レンタカー予約・お問い合わせ',
      text: `
        名前: ${name}
        フリガナ: ${furigana}
        メールアドレス: ${email}
        電話番号: ${tel}
        お問い合わせ内容: ${inquiryType}
        貸出日時: ${pickupDate}
        返却日時: ${returnDate}
        貸出場所: ${pickupLocation}
        返却場所: ${returnLocation}
        希望車種: ${carTypes.join(', ')}
        備考: ${remarks}
      `,
    };

    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'お問い合わせありがとうございます',
      text: `
        ${name} 様

        この度は小豆島ガジュマルレンタカーにお問い合わせいただき、誠にありがとうございます。
        以下の内容でお問い合わせを承りました。

        お問い合わせ内容: ${inquiryType}
        貸出日時: ${pickupDate}
        返却日時: ${returnDate}
        貸出場所: ${pickupLocation}
        返却場所: ${returnLocation}
        希望車種: ${carTypes.join(', ')}

        内容を確認の上、担当者より折り返しご連絡させていただきます。
        今しばらくお待ちくださいますようお願い申し上げます。

        ※このメールは自動送信されています。このメールへの返信はできませんので、ご了承ください。

        小豆島ガジュマルレンタカー
        TEL: 0120-544-960
        営業時間: 8:30～19:00
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}