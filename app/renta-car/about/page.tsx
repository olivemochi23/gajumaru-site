import React from 'react';
import Section from '../../components/section';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <Section
      title="ガジュマルレンタカー概要"
      subTitle="小豆島に特化したレンタカーサービス"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">ガジュマルレンタカーについて</h3>
        <p className="mb-4">
          ガジュマルレンタカーは、小豆島の魅力を最大限に楽しんでいただくために特化したレンタカーサービスです。
          島の自然や観光スポットを存分に楽しめるよう、多様な車種を取り揃えています。
        </p>
        
        <h4 className="font-bold text-lg mb-2 text-pink-600">特徴</h4>
        <ul className="list-disc list-inside mb-4">
          <li>小豆島に特化したサービス</li>
          <li>BMWミニコンバーチブルから軽自動車まで多様な車種</li>
          <li>柔軟な貸出・返却方法</li>
          <li>充実した保険オプション</li>
        </ul>

        <h4 className="font-bold text-lg mb-2 text-pink-600">サービス内容</h4>
        <ul className="list-disc list-inside mb-4">
          <li><Link href="/renta-car/cars" className="text-pink-600 hover:underline">車種と料金</Link></li>
          <li><Link href="/renta-car/rental" className="text-pink-600 hover:underline">お貸出方法</Link></li>
          <li><Link href="/renta-car/return" className="text-pink-600 hover:underline">ご返却方法</Link></li>
          <li><Link href="/renta-car/license" className="text-pink-600 hover:underline">運転免許証について</Link></li>
        </ul>

        <h4 className="font-bold text-lg mb-2 text-pink-600">お問い合わせ</h4>
        <p className="mb-4">
          ご質問やご不明点がございましたら、以下の連絡先までお気軽にお問い合わせください。
        </p>
        <div className="space-y-2">
          <p><strong>電話番号：</strong> 0120-544-960</p>
          <p><strong>メールアドレス：</strong>gajumaru.renta2024@gmail.com </p>
        </div>
    </div>
    </Section>
  );
};

export default AboutPage;