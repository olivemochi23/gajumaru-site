import React from 'react';
import Section from '../../components/section';

export default function Hero() {
  return (
    <Section
      title="ガジュマルテラスへようこそ"
      subTitle="小豆島の自然に囲まれた癒しの空間"
      className="text-center text-pink-800"
    >
      <div className="mt-8">
        <img src="/cafe-hero.jpg" alt="カフェの外観" className="shadow-lg mx-auto w-full object-cover h-96" />
      </div>
    </Section>
  );
}