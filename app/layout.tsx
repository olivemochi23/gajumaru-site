import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Zen_Kaku_Gothic_New, RocknRoll_One } from 'next/font/google'

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const rocknRollOne = RocknRoll_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rocknroll-one',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gajumaru-site.vercel.app/'), // ここにあなたのドメインを設定します
  title: "株式会社ガジュマル - カフェ、レンタカー",
  description: "小豆島で最高のリゾート体験を提供する観光事業を行っている会社です。",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "株式会社ガジュマル",
    description: "小豆島で最高のリゾート体験を提供する観光事業を行っている会社です。",
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
      <body className={cn(zenKakuGothicNew.className, rocknRollOne.variable, 'min-h-dvh flex flex-col')}>        {children}
      </body>
    </html>
  )
}
