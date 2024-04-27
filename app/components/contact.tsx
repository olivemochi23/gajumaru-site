import Section from "./section";

export default function Contact() {
  return (
<Section
  title="お問合せ" 
  subTitle="気軽にご連絡ください"
  className="flex items-center bg-center bg-no-repeat bg-cover bg-blend-multiply bg-white bg-opacity-20"
  style={{
    backgroundImage: "url('/お問合せ背景.png')"
  }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <p className="mb-2">電話番号：000-0000-0000</p>
        <p>メールアドレス：example@example.com</p>
      </div>
    </Section>
  );
}