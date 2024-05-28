'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero from '@/app/components/hero'
import Services from './components/services'
import Contact from './components/contact'
import About from './components/about'
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Button } from "@/components/ui/button"
import Access from './components/accsess'




const navItems = [
  { label: 'ガジュマルについて', href: 'about' }, 
  { label: 'サービス', href: 'services' },
  { label: 'アクセス', href: 'accsess' },
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

  const [logoSize, setLogoSize] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setLogoSize(80);
      } else {
        setLogoSize(300);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
      <header className="px-4 sm:px-6 lg:px-8 bg-transparent h-24 flex items-center justify-between font-bold absolute top-0 left-0 right-0 z-10">

        <div className="flex items-center mt-8">
        <div onClick={scrollToTop} className="cursor-pointer">
          <Image
            src="/ガジュマルロゴ.png"
            alt="株式会社ガジュマル"
            width={logoSize}
            height={logoSize}
          />
        </div>
          <div onClick={scrollToTop} className="flex flex-col ml-2 cursor-pointer md:flex md:flex-nowrap">
            <span className="text-lg md:text-2xl whitespace-nowrap">株式会社ガジュマル</span>
          </div>
        </div>

        <Button className="md:hidden text-white mt-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <MdClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </Button>

          <ul className={`absolute top-full left-0 w-full bg-slate-300 bg-opacity-50 md:bg-transparent md:static md:flex md:justify-end gap-4 font-bold md:ml-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
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

      <main className="relative  bg-contact-background  bg-center ">
        <section id="about" className='w-screen px-0 relative '>
          <div className="relative z-10 ">
            <About />
          </div>
          <div className="absolute inset-0  ">
            <div className="absolute inset-0 "></div>
          </div>
        </section>

        <section id="services" className='w-screen px-0 relative'>
          <div className="relative z-10">
            <Services />
          </div>
          <div className="absolute inset-0 ">
            <div className="absolute inset-0 "></div>
          </div>
        </section>
        <section id="acssess" className='w-screen px-0 relative'>
          <div className="relative z-10 items-center">
          <Access/>
          </div>
          <div className=" ">
            <div className="absolute inset-0 "></div>
          </div>
        </section>

        <section id="contact" className='w-screen px-0 relative'>
          <div className="relative z-10">
            <Contact />
          </div>
          <div className=" ">
            <div className="absolute inset-0 bg-green-100 opacity-80"></div>
          </div>
        </section>
      </main>

      <footer className="h-20 px-4 sm:px-6 lg:px-8 sticky top-full border-t font-bold bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center flex-col">
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        <Image
          src="/ガジュマルロゴ.png"
          alt="株式会社ガジュマル"
          width={50}
          height={50}
          className="relative flex items-center justify-center flex-col"
        />
        <p className="relative text-center text-xs ">&copy; 2024 株式会社ガジュマル All rights reserved</p>
      </footer>
    </div>
  )
}