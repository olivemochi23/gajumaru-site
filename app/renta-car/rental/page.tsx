import React from 'react';
import Section from '../../components/section';

const RentalPage = () => {
  return (
    <Section
      title="お貸出方法"
      subTitle="お客様のご都合に合わせて、以下の方法でお貸出しいたします"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">お貸出方法の種類</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="font-bold">〇直接ご来店の場合</h4>
            <p>店舗内のカウンターでご契約手続きをいたします。回送料金のご負担がなく、キャンペーン実施時にお得な場合があります。</p>
          </li>
          <li>
            <h4 className="font-bold">〇港やホテルの場合</h4>
            <p>各所の指定された場所でご契約手続きをいたします。（各所により所定の回送料金が追加となります）</p>
          </li>
          <li>
            <h4 className="font-bold">〇送迎の場合</h4>
            <p>ご指定場所へ送迎をいたします。ご契約手続きは店舗で行います。（回送料金よりお得にご利用いただけます）</p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default RentalPage;