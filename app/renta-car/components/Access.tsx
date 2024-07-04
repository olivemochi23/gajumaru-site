import React from 'react';
import Section from './section';

const Access: React.FC = () => {
  return (
    <Section
      title="アクセス"
      subTitle=""
      className=" rounded-3xl my-8 mx-4"
    >
      <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13156.940217841357!2d134.2807738!3d34.4715609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355479004e74d17f%3A0xe455c7a42f07c8f2!2z44Ks44K444Ol44Oe44Or44OG44Op44K5!5e0!3m2!1sja!2sjp!4v1716864241649!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
};

export default Access;