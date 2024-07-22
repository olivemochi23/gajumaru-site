import React from 'react';
import Section from './section';
import Link from 'next/link';

const MoreInfo = () => {
  const infoSections = [
    {
      title: '車種と料金',
      content: '話題のMiniオープンカーからかわいい軽自動車までをラインナップ',
      link: '/renta-car/cars'
    },
    {
      title: 'ガジュマルレンタカー概要',
      content: '小豆島に特化したレンタカーサービスを提供しています。',
      link: '/renta-car/about'
    },
  ];

  const guideButtons = [
    { title: '予約方法', href: 'https://docs.google.com/forms/d/1E1L7l_3BIlZInI4gdCtPV8wMXhvtLnGXMjJNToub3CI/edit' },
    { title: 'お貸出方法', href: '/renta-car/rental' },
    { title: 'ご返却方法', href: '/renta-car/return' },
    { title: '運転免許証について', href: '/renta-car/license' },
    { title: 'プライバシーポリシー', href: '/renta-car/privacy-policy' },
  ];

  return (
    <Section
      title="詳細情報"
      subTitle=""
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">ご利用案内</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {guideButtons.map((button, index) => (
            <a 
              key={index} 
              href={button.href} 
              target={button.href.startsWith('http') ? "_blank" : "_self"}
              rel={button.href.startsWith('http') ? "noopener noreferrer" : ""}
              className="block"
            >
              <div className="bg-pink-100 p-4 rounded-xl text-center cursor-pointer hover:bg-pink-200 transition-colors">
                <span className="text-pink-600 font-bold">{button.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4">
        {infoSections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-pink-600 mb-3">{section.title}</h3>
            <p className="text-gray-700 mb-4">{section.content}</p>
            {section.link && (
              <Link href={section.link}>
                <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors">
                  詳細はこちら
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MoreInfo;