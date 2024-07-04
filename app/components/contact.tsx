import Section from "./section";
import { Button } from "@/components/ui/button"
import { FaInstagram, FaLine } from "react-icons/fa";


export function ButtonWithIcon() {
  return (
    <div className="flex space-x-4">
    <a href="https://www.instagram.com/gajumaru_0403?igsh=eWg3dTk3dTgxb2Ez" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300">
      Instagram
    </a>
    <a href="https://lin.ee/0uS5Fcz" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300">
      LINE
    </a>
  </div>
  );
}

export default function Contact() {
  return (
    <Section
      title="お問合せ"
      subTitle="お問合せのご連絡はInstagram、公式ラインにて受け付けております。ご不明点等ございましたらお気軽にお問合せください。"
      className="relative px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
      style={{}}
    >
      <ButtonWithIcon />
    </Section>
  );
}