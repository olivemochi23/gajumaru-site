'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/app/components/hero'
import Services from './components/services'
import Contact from './components/contact'
import About from './components/about'

const navItems = [
  { label: 'ガジュマルについて', href: 'about' }, 
  { label: '提供サービス', href: 'services' },
  { label: 'お問合せ', href: 'contact' },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    // スムーススクロールを実現するために、ページのトップへのリンクではない場合のみ処理を行う
    if (href !== '/') {
      const targetSection = document.getElementById(href)
      targetSection?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // トップへのリンクの場合は、ページの最上部にスクロール
      scrollToTop()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <header className="px-4 sm:px-6 lg:px-8 bg-transparent h-16 flex items-center justify-between font-bold absolute top-0 left-0 right-0 z-10">

        <div className="flex items-center">
          <div onClick={scrollToTop} className="cursor-pointer">
            <Image
              src="/ガジュマルロゴ.png"
              alt="株式会社ガジュマル"
              width={50}
              height={50}
            />
          </div>
          <div onClick={scrollToTop} className="flex flex-col ml-2 flex-grow cursor-pointer">
            <span className="text-sm md:text-xl">株式会社ガジュマル</span>
          </div>
        </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>

          <ul className={`absolute top-full left-0 w-full bg-slate-300 md:bg-transparent md:static md:flex md:justify-end gap-4 font-bold md:ml-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
            {navItems.map((item) => (
              <li key={item.label} className="text-black md:text-black text-center">
                <a
                  href={`#${item.href}`}
                  onClick={(e) => {
                    handleClick(e, item.href);
                    setIsMenuOpen(false); // Close menu after selection on mobile
                  }}
                  className="block px-4 py-2 text-lg font-bold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4 p-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => {
                      handleClick(e, item.href);
                      setIsMenuOpen(false); // Close menu after selection on mobile
                    }}
                    className="text-lg font-bold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center">
          <div className="container mx-auto text-center">
            <Hero />
          </div>
        </div>
      </div>

      <main>
        <section id="about" className='w-screen px-0'>
          <About />
        </section>

        <section id="services" className='w-screen px-0'>
          <Services />
        </section>

        <section id="contact" className='w-screen px-0 '>  
          <Contact />
        </section>
      </main>

      <footer className="h-20 px-4 sm:px-6 lg:px-8 sticky top-full border-t font-bold bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center flex-col">
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>
        <Image
          src="/ガジュマルロゴ.png"
          alt="株式会社ガジュマル"
          width={50}
          height={50}
          className="relative flex items-center justify-center flex-col"
        />
        <p className="relative text-center text-xs">&copy; 株式会社ガジュマル</p>
      </footer>
    </div>
  )
}