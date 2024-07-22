"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const navItems = [
  { label: 'ホーム', href: '#' },
  { label: 'レンタカーの特徴', href: '#features' },
  { label: 'ご利用案内', href: '#guide' },
  { label: '車種と料金', href: '#cars' },
  { label: 'アクセス', href: '#access' },
];

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
          <p className="bg-orange-600 text-white font-bold text-xs px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-pink-400">Tel : 0120-544-960<br />受付時間 : 8:00-20:00</p>
        </div>
        <Button className="md:hidden bg-pink-600 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <MdClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </Button>
      </div>
      <nav className="hidden md:block mt-4">
        <ul className="flex flex-wrap justify-center sm:justify-around px-4 sm:px-8 font-bold">
          {navItems.map((item) => (
            <li key={item.label} className="m-1">
              <Link href={item.href} className="bg-pink-500 text-white text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-pink-400 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-pink-100 rounded-b-3xl shadow-md">
          <nav>
            <ul className="flex flex-col items-center gap-2 py-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-1 text-lg font-bold text-pink-800"
                  >
                    {item.label}
                  </a>
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