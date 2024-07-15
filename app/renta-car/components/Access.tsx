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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d205.57728106204752!2d134.2806733!3d34.4715243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35547912dcdd52a3%3A0x4330c58c805048c5!2z5bCP6LGG5bO244Ks44K444Ol44Oe44Or44Os44Oz44K_44Kr44O8!5e0!3m2!1sja!2sjp!4v1721032725627!5m2!1sja!2sjp"
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