import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Zen_Kaku_Gothic_New, RocknRoll_One } from 'next/font/google'
import Script from 'next/script'

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
  metadataBase: new URL('https://gajumaru0403.com/'),
  title: "株式会社ガジュマル - カフェ、レンタカー",
  description: "小豆島で最高のリゾート体験を提供する観光事業を行っている会社です。小豆島観光におすすめのBMWMINIのオープンカーがレンタルできるレンタカーや南国リゾート風のカフェを営業しているのでぜひご利用ください！小豆島のレンタカー会社で高級車がレンタルできるのは小豆島ガジュマルレンタカーだけ！",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16659582141"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16659582141');
          `}
        </Script>
      </head>
      <body className={cn(zenKakuGothicNew.className, rocknRollOne.variable, 'min-h-dvh flex flex-col')}>
        {children}
      </body>
    </html>
  )
}