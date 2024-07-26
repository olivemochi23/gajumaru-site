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
      subject: '小豆島ガジュマルレンタカー：お問い合わせありがとうございます',
      html: `
        <h2>${name}様</h2>
    
        <p>小豆島ガジュマルレンタカーにお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容で承っております：</p>
    
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">項目</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">内容</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>お名前</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>フリガナ</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${furigana}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>メールアドレス</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>電話番号</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${tel}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>お問い合わせ内容</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${inquiryType}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>貸出日時</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${pickupDate}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>返却日時</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${returnDate}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>貸出場所</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${pickupLocation}${pickupLocationOther ? ` (${pickupLocationOther})` : ''}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>返却場所</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${returnLocation}${returnLocationOther ? ` (${returnLocationOther})` : ''}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>ご希望の車種</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${carTypes.join(', ')}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>運転者の年齢</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${driverAge}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>運転免許証の種類</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${licenseType}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>オプション</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${options?.join(', ') || 'なし'}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>特記事項・ご要望</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">${specialRequests || 'なし'}</td>
          </tr>
        </table>
    
        <p>内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
        <p>今しばらくお待ちくださいますようお願い申し上げます。</p>
    
        <p><strong>※このメールは自動送信されています。このメールへの返信はできませんので、ご了承ください。</strong></p>
    
        <hr>
    
        <h3>小豆島ガジュマルレンタカー</h3>
        <p>TEL: 0120-544-960</p>
        <p>営業時間: 8:30～19:00</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}