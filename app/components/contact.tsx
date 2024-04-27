import Section from "./section";


export default function Contact() {
  return (
    <Section
      title="お問合せ" 
      subTitle=""
      className="relative px-4 sm:px-6 lg:px-8 flex items-center bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/お問合せ背景.png')"
      }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-40"></div>
          <div className="relative flex flex-col items-center justify-center text-center">
            <p className="mb-2">電話番号：000-0000-0000</p>
            <p>メールアドレス：example@example.com</p>
          </div>
    </Section>
  );
}