"use client";

import Info from './components/info';
import Menu from './components/menu';
import Hero from './components/hero';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const CafePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [logoSize, setLogoSize] = React.useState(80);

  React.useEffect(() => {
    const handleResize = () => {
      setLogoSize(window.innerWidth < 450 ? 80 : 300);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      <header className="bg-pink-200 p-4 rounded-b-3xl shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/ガジュマルロゴ.png"
              alt="株式会社ガジュマル"
              width={logoSize}
              height={logoSize}
              className="rounded-full"
            />
          </Link>
          <h1 className="text-2xl font-bold text-pink-800 ml-4">ガジュマルテラス</h1>
        </div>
        <Button className="md:hidden text-pink-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <MdClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </Button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-pink-100 rounded-b-3xl shadow-md">
          <nav>
            <ul className="flex flex-col items-center gap-4 p-4">
              <li><a href="#hero" className="text-lg font-bold text-pink-800">ホーム</a></li>
              <li><a href="#info" className="text-lg font-bold text-pink-800">カフェ情報</a></li>
              <li><a href="#menu" className="text-lg font-bold text-pink-800">メニュー</a></li>
              <li><a href="#access" className="text-lg font-bold text-pink-800">アクセス</a></li>
              <li><a href="#contact" className="text-lg font-bold text-pink-800">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      )}

      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
        <section id="hero" className="col-span-full rounded-3xl">
          <Hero />
        </section>

        <section id="info" className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <Info />
        </section>

        <section id="menu" className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <Menu />
        </section>

        <section id="access" className="col-span-full bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-pink-800">アクセス</h2>
          <p className="text-lg mb-4 text-gray-600">〒761-4434 香川県小豆郡小豆島町西村甲1490-1</p>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13156.940217841357!2d134.2807738!3d34.4715609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355479004e74d17f%3A0xe455c7a42f07c8f2!2z44Ks44K444Ol44Oe44Or44OG44Op44K5!5e0!3m2!1sja!2sjp!4v1716864241649!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section id="contact" className="col-span-full bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-pink-800">お問い合わせ</h2>
          <p className="text-lg mb-4 text-gray-600">ご予約・お問い合わせは以下のSNSからお気軽にどうぞ。</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/gajumaru_0403?igsh=eWg3dTk3dTgxb2Ez" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300">
              Instagram
            </a>
            <a href="https://lin.ee/0uS5Fcz" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300">
              LINE
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-pink-200 text-pink-800 text-center p-6 rounded-t-3xl">
        <p>&copy; 2024 ガジュマルテラス All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CafePage;