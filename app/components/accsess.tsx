import React from 'react';
import Section from '@/app/components/section';

export default function Access() {
  return (
    <div>
      <Section
        title="アクセス"
        subTitle={
          <>
            〒761-4434 香川県小豆郡小豆島町西村甲1490-1<br />
            営業時間： 10:00 - 18:00
          </>
        }
        className="px-4 sm:px-6 lg:px-8"
        style={{
          textAlign: 'left',
          whiteSpace: 'pre-wrap',
        }}
      >
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.3087636317799!2d134.28012872856186!3d34.47156089830564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355479004e74d17f%3A0xe455c7a42f07c8f2!2z44Ks44K444Ol44Oe44Or44OG44Op44K5!5e0!3m2!1sja!2sjp!4v1716795532227!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
          />
        </div>
      </Section>
    </div>
  );
}