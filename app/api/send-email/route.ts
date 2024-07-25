import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, carModel, startDate, endDate } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 管理者への通知メール
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '新しい予約リクエスト',
      text: `
        新しい予約リクエストが届きました：
        名前: ${name}
        メール: ${email}
        車種: ${carModel}
        開始日: ${startDate}
        終了日: ${endDate}
      `,
    });

    // ユーザーへの自動返信メール
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '予約リクエストを受け付けました',
      text: `
        ${name}様

        レンタカーの予約リクエストを受け付けました。
        以下の内容で承っております：

        車種: ${carModel}
        開始日: ${startDate}
        終了日: ${endDate}

        内容を確認の上、改めてご連絡いたします。
        ご予約ありがとうございます。

        レンタカー会社
      `,
    });

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}