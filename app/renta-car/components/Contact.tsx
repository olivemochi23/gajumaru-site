import React from 'react';
import Section from './section';
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Section
      title="お問合せ"
      subTitle="ご質問やご不明点がございましたら、お気軽にお問い合わせください。"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <div className="w-full max-w-md space-y-4 mx-auto">
          <Button variant="outline" className="w-full justify-start hover:bg-pink-100" asChild>
            <a href="tel:0120-544-960">
              <Phone className="mr-2 h-4 w-4 text-pink-600" />
              <span>0120-544-960</span>
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start hover:bg-pink-100" asChild>
            <a href="mailto:gajumaru.renta2024@gmail.com">
              <Mail className="mr-2 h-4 w-4 text-pink-600" />
              <span>gajumaru.renta2024@gmail.com</span>
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Contact;