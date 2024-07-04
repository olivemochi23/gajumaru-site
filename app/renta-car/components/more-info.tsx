import React from 'react';
import Section from './section';

const MoreInfo = () => {
  const infoSections = [
    {
      title: 'ご利用案内',
      content: '24時間営業。事前予約制。運転免許証と身分証明書が必要です。',
    },
    {
      title: '車種と料金',
      content: 'コンパクトカー：5,000円/日〜、ミニバン：8,000円/日〜、オープンカー：10,000円/日〜',
    },
    {
      title: '出発可能場所',
      content: '小豆島空港、土庄港、池田港にて車両をお渡しします。',
    },
    {
      title: 'ガジュマルレンタカー概要',
      content: '創業2020年。小豆島に特化したレンタカーサービスを提供しています。',
    },
  ];

  return (
    <Section
      title="詳細情報"
      subTitle="ガジュマルレンタカーのサービス詳細"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 mx-4">
        {infoSections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-pink-600 mb-3">{section.title}</h3>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MoreInfo;