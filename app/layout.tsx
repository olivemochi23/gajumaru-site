import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


import { Zen_Maru_Gothic } from 'next/font/google'

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '700'], // 必要なウェイトを指定
  subsets: ['cyrillic', 'latin'], // 必要な文字セットを指定
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navItems = [
  { label: 'Top' , href: '/' },
  { label: 'Services' , href: '/services' },
  { label: 'Contact' , href: '/contact' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
<body className={cn(zenMaruGothic.className, 'min-h-dvh flex flex-col')}>
  <header className="bg-green-400 h-16 flex items-center border-b justify-between font-bold">
    <h1 className="px-8">株式会社ガジュマル</h1>
    <ul className="flex gap-4 font-bold">
      {navItems.map((item) => (
        <li key={item.label}>
          <Button variant="ghost" asChild>
            <a href={item.href} className="font-bold">{item.label}</a>
          </Button>
        </li>
      ))}
    </ul>
  </header>

  <main>{children}</main>

        <footer className="font-bold container sticky top-full h-16 flex items-center border-t justify-between">
          <p>&copy; 株式会社ガジュマル</p>
        </footer>
      </body>
    </html>
  );
}
