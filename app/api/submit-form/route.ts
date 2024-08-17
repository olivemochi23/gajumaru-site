import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});

async function getAccessToken() {
  const { token } = await oauth2Client.getAccessToken();
  return token;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const accessToken = await getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      cc: process.env.EMAIL_USER,
      subject: '小豆島ガジュマルレンタカー 予約・お問い合わせ受付確認',
      html: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { width: 100%; max-width: 600px; margin: 0 auto; }
              h1 { color: #4a4a4a; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; margin-bottom: 20px; }
              th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
              th { background-color: #f2f2f2; font-weight: bold; }
              .footer { margin-top: 20px; font-size: 0.9em; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>${formData.name} 様</h1>
              <p>この度は小豆島ガジュマルレンタカーにお問い合わせいただき、誠にありがとうございます。</p>
              <p>以下の内容で予約・お問い合わせを承りました。</p>
              
              <table>
                <tr>
                  <th>項目</th>
                  <th>内容</th>
                </tr>
                <tr>
                  <td>お名前</td>
                  <td>${formData.name}</td>
                </tr>
                <tr>
                  <td>メールアドレス</td>
                  <td>${formData.email}</td>
                </tr>
                <tr>
                  <td>電話番号</td>
                  <td>${formData.tel}</td>
                </tr>
                <tr>
                  <td>車種のご希望</td>
                  <td>${formData.carType}</td>
                </tr>
                <tr>
                  <td>お問い合わせ内容</td>
                  <td>${formData.inquiryType}</td>
                </tr>
                <tr>
                  <td>貸出日時</td>
                  <td>${formData.pickupDate}</td>
                </tr>
                <tr>
                  <td>返却日時</td>
                  <td>${formData.returnDate}</td>
                </tr>
                <tr>
                  <td>出発場所</td>
                  <td>${formData.pickupLocation}${formData.pickupLocation === 'その他' ? ` (${formData.pickupLocationOther})` : ''}</td>
                </tr>
                <tr>
                  <td>返却場所</td>
                  <td>${formData.returnLocation}${formData.returnLocation === 'その他' ? ` (${formData.returnLocationOther})` : ''}</td>
                </tr>
                <tr>
                  <td>特記事項・ご要望</td>
                  <td>${formData.specialRequests || 'なし'}</td>
                </tr>
              </table>
              
              <p>内容を確認の上、担当者より折り返しご連絡させていただきます。今しばらくお待ちくださいますようお願い申し上げます。</p>
              
              <p><strong>※このメールは自動送信されています。このメールへの返信はできませんので、ご了承ください。</strong></p>
              
              <div class="footer">
                <p>
                  小豆島ガジュマルレンタカー<br>
                  TEL: 0120-544-960<br>
                  営業時間: 8:30～19:00
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'フォームが正常に送信されました' });
  } catch (error) {
    console.error('フォーム送信エラー:', error);
    return NextResponse.json({ error: 'フォームの送信に失敗しました' }, { status: 500 });
  }
}