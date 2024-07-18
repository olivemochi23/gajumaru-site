import React from 'react';
import Section from '../../components/section';
import Link from 'next/link';

const ReservationPage = () => {
  return (
    <Section
      title="予約方法"
      subTitle="簡単な手順でレンタカーを予約できます"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">予約の流れ</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="font-bold">〇お電話でのお問い合わせ（受付時間／8:30～19:00）</h4>
            <p>0120-544-960　0879-61-9080</p>
          </li>
          <li>
            <h4 className="font-bold">〇メールでのお問い合わせ　（受付時間／24時間）</h4>
            <p>営業時間外の場合は24時間受付のメールフォームをご利用ください。メールフォームからのお問い合わせではご予約は完了しません。追って当店より、電話かメールにて折り返しのご連絡をさせていただきます。</p>
            <Link href="/renta-car/form">
              <button className="mt-2 bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors">
                メールフォームへ
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ReservationPage;