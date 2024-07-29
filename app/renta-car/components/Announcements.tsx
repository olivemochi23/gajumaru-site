import React from 'react';
import Section from './section';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: '小豆島へご旅行を計画されている皆様へ',
      content: '初めまして、小豆島ガジュマルレンタカーと申します。\n本日2024年7月27日よりレンタカー事業を開業致します。\n素敵な旅の思い出となりますよう、お手伝いさせて頂きます。\nスタッフ一同、皆様のご利用心よりお待ちしております。\n\n**ハイシーズン料金**\n\n誠に勝手ながら、次の期間は夏季ハイシーズン料金として、24時間毎700円を頂戴しております。ご了承のほどよろしくお願いいたします。\n\n7月27日（土）より　8月25日（日）まで\n\n※この期間のご出発、ご帰着が絡むご予約が対象です',
    },
  ];

  return (
    <Section
      title="小豆島ガジュマルレンタカーからのお知らせ"
      subTitle=""
      className="bg-pink-200  text-pink-600 p-4 sm:p-8 rounded-3xl my-8 mx-4"
    >
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-lg text-pink-600">{announcement.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {announcement.content.split('**').map((part, index) => 
                index % 2 === 0 ? part : <strong key={index}>{part}</strong>
              )}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Announcements;