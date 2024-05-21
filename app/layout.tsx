import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Zen_Kaku_Gothic_New } from 'next/font/google'

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gajumaru-site.vercel.app/'), // ここにあなたのドメインを設定します
  title: "株式会社ガジュマル - 海の家、レンタカー、ジェットスキーレンタル",
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
      <body className={cn(zenKakuGothicNew.className, 'min-h-dvh flex flex-col')}>
        {children}
      </body>
    </html>
  )
}