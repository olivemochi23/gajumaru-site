import React from 'react';
import Image from 'next/image';
import Section from '../../components/section';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <>
      <Section
        title="ガジュマルテラスへようこそ"
        subTitle="小豆島の自然に囲まれた癒しの空間"
        className="text-center text-pink-800 rounded-3xl"
      >
        <div className="mt-8">
          <Image src="/cafe-hero.jpg" alt="カフェの外観" width={1200} height={800} className="rounded-3xl shadow-lg mx-auto w-full object-cover h-96" />
        </div>
      </Section>

      <Section
        title="お知らせ"
        subTitle="最新の情報はInstagramへ"
        className="text-center text-pink-800 rounded-3xl mt-8 bg-white"
      >
        <div className="mt-4">
          <Link href="https://www.instagram.com/gajumaru_terrace/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300">
            <FaInstagram className="mr-2" />
            Instagram
          </Link>
        </div>
      </Section>
    </>
  );
}