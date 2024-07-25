import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type FormData = {
  name: string;
  furigana: string;
  email: string;
  tel: string;
  inquiryType: string;
  pickupDate: string;
  returnDate: string;
  carTypes: string[];
  pickupLocation: string;
  returnLocation: string;
  options: string[];
  driverAge: string;
  licenseType: string;
  remarks: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("API ルートにリクエストが届きました"); // ← 追加
  if (req.method === "POST") {
    const formData = req.body as FormData;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    try {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // 送信先メールアドレス (管理者のアドレス)
        subject: `【${formData.inquiryType}】${formData.name}様より`,
        html: `
          <p>【お問い合わせ内容】${formData.inquiryType}</p>
          <p>【お名前】${formData.name}</p>
          <p>【フリガナ】${formData.furigana}</p>
          <p>【メールアドレス】${formData.email}</p>
          <p>【電話番号】${formData.tel}</p>
          <p>【貸出日時】${formData.pickupDate}</p>
          <p>【返却日時】${formData.returnDate}</p>
          <p>【希望車種】${formData.carTypes.join(', ')}</p>
          <p>【出発場所】${formData.pickupLocation}</p>
          <p>【返却場所】${formData.returnLocation}</p>
          <p>【オプション】${formData.options.join(', ')}</p>
          <p>【運転者の年齢】${formData.driverAge}</p>
          <p>【運転免許証の種類】${formData.licenseType}</p>
          <p>【特記事項・ご要望】${formData.remarks}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "メールを送信しました。" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "メールの送信に失敗しました。" });
    }
  } else {
    res.status(405).end();
  }
}