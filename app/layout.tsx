import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Zen_Maru_Gothic } from 'next/font/google'

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "株式会社ガジュマル - 海の家、レンタカー、パンケーキ、マリンジェットレンタル",
  description: "小豆島で海の家、レンタカー、パンケーキ、マリンジェットレンタルを提供する観光会社。小豆島での最高の体験をご提供します。",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "株式会社ガジュマル",
    description: "小豆島で海の家、レンタカー、パンケーキ、マリンジェットレンタルを提供する観光会社です。",
    images: "/og-image.jpg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={cn(zenMaruGothic.className, 'min-h-dvh flex flex-col')}>
        {children}
      </body>
    </html>
  )
}