import Section from "./section";
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export function ButtonWithIcon() {
  return (
    <div className="relative z-10">
      <Button className="bg-orange-400 text-white rounded-full hover:bg-opacity-80 active:bg-opacity-100 transition-opacity duration-300">
        <PhoneCall className="mr-2 h-4 w-4" /> 000-0000-0000
      </Button>
    </div>
  );
}

export default function Contact() {
  return (
    <Section
      title="お問合せ"
      subTitle="お問合せのご連絡はお電話にて受け付けております。ご不明点等ございましたらお気軽にお問合せください。"
      className="relative px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/お問合せ背景.png')",
      }}
    >
      <ButtonWithIcon />
    </Section>
  );
}