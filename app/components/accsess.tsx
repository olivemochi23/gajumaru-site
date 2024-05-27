// accsess.tsx
import React from 'react';
import Section from '@/app/components/section';
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Access() {
  return (
    <Section
      title="アクセス"
      subTitle={
        <>
          {"〒761-4434 香川県小豆郡小豆島町西村甲1490-1 "}
          <br />
          営業時間： 10:00 - 18:00  
        </>
      }
      className="px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full h-96">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          height="100%"
          width="100%"
          mode="place"
          q="株式会社ガジュマル"
        />
      </div>
    </Section>
  );
}