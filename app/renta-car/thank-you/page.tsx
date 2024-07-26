import React from 'react';
import Section from '../../components/section';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <Section
      title="お問い合わせありがとうございます"
      subTitle="ご連絡を承りました"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <p className="mb-4 text-lg">
          お問い合わせいただき、ありがとうございます。内容を確認の上、担当者より折り返しご連絡させていただきます。
        </p>
        <p className="mb-4">
          しばらくお待ちいただいても連絡がない場合は、お手数ですが再度お問い合わせください。
        </p>
        <div className="mt-8">
          <Link href="/renta-car" className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition-colors">
            レンタカーページに戻る
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ThankYouPage;