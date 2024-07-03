import React from 'react';
import Image from 'next/image';
import Section from '../../components/section';

export default function Hero() {
  return (
    <Section
      title="ガジュマルテラスへようこそ"
      subTitle="小豆島の自然に囲まれた癒しの空間"
      className="text-center text-pink-800 rounded-3xl"
    >
      <div className="mt-8">
        <Image src="/cafe-hero.jpg" alt="カフェの外観" width={1200} height={800} className="rounded-3xl shadow-lg mx-auto w-full object-cover h-96" />
      </div>
    </Section>
  );
}