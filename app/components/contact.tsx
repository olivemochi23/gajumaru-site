import Section from "./section";
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export function ButtonWithIcon() {
  return (
    <div className="relative z-10 flex justify-center items-center">
      <Button className="bg-orange-500 active:bg-orange-500 hover:bg-orange-500 z-10 text-white rounded-full">
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
      style={{}}
    >
      <ButtonWithIcon /> {/* この行を追加 */}
    </Section>
  );
}