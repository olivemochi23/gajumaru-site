import Section from "./section";

export default function Contact() {
  return (
    <Section
      title="お問合せ"
      subTitle="気軽にご連絡ください"
      className="bg-gray-100" // 背景色を追加
    >
      <div className="flex flex-col items-center justify-center text-center">
        <p className="mb-2">電話番号：000-0000-0000</p>
        <p>メールアドレス：example@example.com</p>
      </div>
    </Section>
  );
}