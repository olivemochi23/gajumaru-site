import React from 'react';
import Section from '../../components/section';

const ReturnPage = () => {
  return (
    <Section
      title="ご返却方法"
      subTitle="お客様のご都合に合わせて、以下の方法でご返却いただけます"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">ご返却方法の種類</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="font-bold">〇直接店舗へご返却の場合</h4>
            <p>店舗にて車両をご返却ください。スタッフが車両の確認を行います。</p>
          </li>
          <li>
            <h4 className="font-bold">〇港やホテルでのご返却の場合</h4>
            <p>指定の場所にて車両をご返却ください。スタッフが現地で車両の確認を行います。（各所により所定の回送料金が追加となります）</p>
          </li>
          <li>
            <h4 className="font-bold">〇時間外のご返却の場合</h4>
            <p>営業時間内でのご返却が原則となります。詳細は別途スタッフにお尋ねください。</p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ReturnPage;