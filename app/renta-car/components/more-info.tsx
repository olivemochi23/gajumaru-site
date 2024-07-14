import React from 'react';
import Section from './section';
import Link from 'next/link';

const MoreInfo = () => {
  const infoSections = [
    {
      title: '車種と料金',
      content: 'コンパクトカー：5,000円/日〜、ミニバン：8,000円/日〜、オープンカー：10,000円/日〜',
    },
    {
      title: '出発可能場所',
      content: '土庄港、池田港にて車両をお渡しします。',
    },
    {
      title: 'ガジュマルレンタカー概要',
      content: '小豆島に特化したレンタカーサービスを提供しています。',
    },
  ];

  const guideButtons = [
    { title: '予約方法', href: '/renta-car/reservation' },
    { title: 'お貸出方法', href: '/renta-car/rental' },
    { title: 'ご返却方法', href: '/renta-car/return' },
    { title: '運転免許証について', href: '/renta-car/license' },
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
  <Link key={index} href={button.href} className="block">
    <div className="bg-pink-100 p-4 rounded-xl text-center cursor-pointer hover:bg-pink-200 transition-colors">
      <span className="text-pink-600 font-bold">{button.title}</span>
    </div>
  </Link>
))}
      </div>
    </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4">
        {infoSections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-pink-600 mb-3">{section.title}</h3>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
  <h3 className="text-xl font-bold text-pink-600 mb-3">プライバシーポリシー</h3>
  <p className="mb-4">
    当社は個人情報保護の重要性を認識し、適切に利用し、保護することが社会的責任であると考え、個人情報の保護に努めることをお約束いたします。
  </p>
  <h4 className="font-bold mb-2">個人情報の定義</h4>
  <p className="mb-4">
    個人情報とは、個人に関する情報であり、氏名、生年月日、性別、電話番号、電子メールアドレス、職業、勤務先等、特定の個人を識別し得る情報をいいます。
  </p>
  <h4 className="font-bold mb-2">個人情報の収集・利用</h4>
  <p className="mb-4">
    当社は、お客様に有益かつ必要と思われる情報の提供、業務遂行上で必要となる問い合わせ、確認、およびサービス向上のための意見収集、各種のお問い合わせ対応に使用いたします。
  </p>
  <h4 className="font-bold mb-2">個人情報の第三者提供</h4>
  <p className="mb-4">
    当社は、法令に基づく場合等正当な理由によらない限り、事前に本人の同意を得ることなく、個人情報を第三者に開示・提供することはありません。
  </p>
</div>

<div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
  <h3 className="text-xl font-bold text-pink-600 mb-3">免責補償制度</h3>
  <h4 className="font-bold mb-2">スタンダード 免責補償制度</h4>
  <p className="mb-4">1日24時間 1,100円でご加入いただけます。</p>
  <h4 className="font-bold mb-2">フルカバー 免責補償制度</h4>
  <p className="mb-4">1日24時間 2,200円でご加入いただけます。</p>
  <h4 className="font-bold mb-2">自損事故について</h4>
  <p className="mb-4">
    車両対車両の事故ではない事故を「自損事故」といいます。車両対車両の事故でも、相手車両が特定できない場合は「自損事故」とみなします。
  </p>
  <h4 className="font-bold mb-2">保険補償制度が適用できないケース</h4>
  <ul className="list-disc list-inside mb-4">
    <li>事故時に警察および当社への連絡など所定の手続きがなかった場合</li>
    <li>貸渡約款に違反している場合（飲酒運転、無免許運転など）</li>
    <li>故意による事故</li>
    <li>使用、管理上の落ち度があった場合</li>
  </ul>
  <p className="text-sm text-gray-600">
    ※詳細な補償内容や免責事項については、スタッフにお問い合わせください。
  </p>
</div>

    </Section>

    

  );
};

export default MoreInfo;