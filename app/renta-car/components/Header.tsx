"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ContactInfo = () => (
  <div className=" p-2 rounded-lg flex flex-col">
    <div className="bg-pink-500 pb-2 mb-2 rounded-3xl">
      <p className="text-white text-sm font-bold text-center">お電話はこちら</p>
      <a href="tel:0120-544-960" className="text-white text-sm px-2 py-1 rounded-full hover:bg-pink-400 transition mt-2 flex items-center justify-center">
        0120-544-960
      </a>
    </div>
    <div className="bg-pink-500 pb-2 mb-2 rounded-3xl">
      <p className="text-white text-sm font-bold text-center mb-1">メールはこちら</p>
      <a href="mailto:gajumaru.renta2024@gmail.com" className="text-white text-sm px-2 py-1 rounded-full hover:bg-pink-400 transition flex items-center justify-center">
        gajumaru.renta2024@gmail.com
      </a>
    </div>
  </div>
);

const navItems = [
  { label: 'お知らせ', href: '#announcements' },
  { label: '車種と料金', href: '/renta-car/cars' },
  { label: '小豆島おすすめスポット', href: '#guide' },
  { label: '詳細情報', href: '#moreInfo' },
  { label: 'アクセス', href: '#access' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pink-300 py-2 sm:py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/renta-car" className="flex items-center">
          <Image
            src="/ガジュマルロゴ.png"
            alt="小豆島ガジュマルレンタカー"
            width={60}
            height={60}
            className="mr-2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white whitespace-nowrap">
            小豆島ガジュマルレンタカー
          </h1>
        </Link>
      </div>
     
      <nav className="hidden md:flex items-center justify-between mt-4 bg-pink-300 py-2 px-4">
  <ul className="flex flex-1 justify-around font-bold mr-4">
    {navItems.map((item) => (
      <li key={item.label}>
        <Link href={item.href} className="bg-pink-500 text-white text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-pink-400 transition">
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
  <ContactInfo />
</nav>


      {isMenuOpen && (
        <div className="md:hidden bg-pink-100 rounded-b-3xl shadow-md">
          <nav>
            <ul className="flex flex-col items-center gap-2 py-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-1 text-lg font-bold text-pink-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header