// app/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/app/components/hero'
import Services from './components/services'
import Contact from './components/contact'
import { Button } from "@/components/ui/button"
import { useEffect } from 'react'
import About from './components/about'

const navItems = [
  { label: 'Top', href: '/' },
  { label: 'Services', href: 'services' },
  { label: 'Contact', href: 'contact' },
]

export default function Home() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const targetSection = document.getElementById(href)
    targetSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置に応じてナビゲーションの背景色を変更する処理があればここに記述
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <header className=" px-4 sm:px-6 lg:px-8 bg-transparent h-16 flex items-center justify-between font-bold absolute top-0 left-0 right-0 z-10 pl-4 pr-4">
          <div className="flex items-center md:mr-4">
            <Link href="/" onClick={scrollToTop}>
              <Image
                src="/ガジュマルロゴ.png"
                alt="株式会社ガジュマル"
                width={50}
                height={50}
                className="md:mr-2"
              />
            </Link>
            <Link href="/" onClick={scrollToTop} className="flex flex-col">
              <span className="text-sm md:text-xl">株式会社</span>
              <span className="text-sm md:text-xl">ガジュマル</span>
            </Link>
          </div>
          <ul className="flex gap-4 font-bold md:ml-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <div className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center">
          <div className="container mx-auto text-center">
            <Hero />
          </div>
        </div>
      </div>

      <main>
      <section id="services" className='w-screen px-0'>
          <About />
        </section>

        <section id="services" className='w-screen px-0'>
          <Services />
        </section>

        <section id="contact" className='w-screen px-0'>  
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