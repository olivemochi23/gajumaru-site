"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pink-300 py-2 sm:py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center">
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
      </div>
        <div className="hidden sm:block">
          <p className="bg-orange-600 text-white font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-pink-400 mb-2 text-xs">ご予約はメール<br />または<br />お電話にて承ります</p>
          <p className="bg-orange-600 text-white font-bold text-xs px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-pink-400">Tel : 000-0000-0000<br />受付時間 : 8:00-20:00</p>
        </div>
        <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className="hidden sm:block mt-4">
        <ul className="flex flex-wrap justify-center sm:justify-around px-4 sm:px-8 font-bold">
          {['ホーム', 'レンタカーの特徴', 'ご利用案内', '車種と料金', 'アクセス'].map((item) => (
            <li key={item} className="m-1">
              <Link href="#" className="bg-pink-500 text-white text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-pink-400 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default Header