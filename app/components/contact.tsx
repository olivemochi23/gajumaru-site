import Section from "./section";
import { Button } from "@/components/ui/button"
import { FaInstagram, FaLine } from "react-icons/fa";


export function ButtonWithIcon() {
  return (
    <div className="relative z-10 flex justify-center items-center space-x-4">
      <a href="https://www.instagram.com/gajumaru_0403?igsh=eWg3dTk3dTgxb2Ez" target="_blank" rel="noopener noreferrer">
        <Button className="bg-orange-500 active:bg-orange-500 hover:bg-orange-500 z-10 text-white rounded-full">
          <FaInstagram className="mr-2 h-4 w-4" /> Instagram
        </Button>
      </a>
      <a href="https://lin.ee/0uS5Fcz" target="_blank" rel="noopener noreferrer">
        <Button className="bg-green-500 active:bg-green-500 hover:bg-green-500 z-10 text-white rounded-full">
          <FaLine className="mr-2 h-4 w-4" /> LINE
        </Button>
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