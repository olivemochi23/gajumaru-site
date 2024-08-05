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
  metadataBase: new URL('https://gajumaru0403.com/'), // ここにあなたのドメインを設定します
  title: "株式会社ガジュマル - カフェ、レンタカー",
  description: "小豆島で最高のリゾート体験を提供する観光事業を行っている会社です。小豆島観光におすすめのBMWMINIのオープンカーがレンタルできるレンタカーや南国リゾート風のカフェを営業しているのでぜひご利用ください！小豆島のレンタカー会社で高級車がレンタルできるのは小豆島ガジュマルレンタカーだけ！",
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
      <head>
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5NWCTM56');</script>
      <!-- End Google Tag Manager -->

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
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NWCTM56"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
        {children}
      </body>
    </html>
  )
}