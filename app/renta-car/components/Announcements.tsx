import React from 'react';
import Section from './section';

const Announcements = () => {
  return (
    <Section
      title="小豆島ガジュマルレンタカーからのお知らせ"
      subTitle=""
      className="bg-pink-200 text-pink-600 p-4 sm:p-8 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white w-full max-w-4xl mx-auto text-black rounded-3xl p-6 sm:p-8">
  <h3 className="text-pink-600 text-xl font-bold mb-4">小豆島へご旅行を計画されている皆様へ</h3>
  <p className="mb-6">
    初めまして、小豆島ガジュマルレンタカーと申します。<br />
    本日2024年7月27日よりレンタカー事業を開業いたします。<br />
    素敵な旅の思い出となりますよう、お手伝いさせていただきます。<br />
    スタッフ一同、皆様のご利用心よりお待ちしております。
  </p>

  <h4 className="text-lg font-bold mt-8 mb-3 text-pink-600">ハイシーズン料金</h4>
  <p className="mb-4">
    誠に勝手ながら、次の期間は夏季ハイシーズン料金として、24時間毎700円を頂戴しております。<br />
    ご了承のほどよろしくお願いいたします。
  </p>

  <p className="font-bold mb-3">7月27日（土）より8月25日（日）まで</p>

  <p className="text-sm italic">
    ※この期間のご出発、ご帰着が絡むご予約が対象です
  </p>
</div>
    </Section>
  );
};

export default Announcements;