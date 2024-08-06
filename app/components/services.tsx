// Services.tsx
import Image from "next/image";
import Section from "./section";
import Link from 'next/link';

export default function Services() {
  return (
    <Section className=" py-4 px-4 sm:px-6 lg:px-8" title="サービス一覧" 
    subTitle="" 
    style={{
      
    }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
      <Link href="/cafe" className="block border relative rounded-3xl p-6 shadow space-y-3 bg-white hover:shadow-lg transition-shadow duration-300">
  <div className="aspect-video bg-muted relative">
    <Image
      src="/cafe-hero.jpg"
      alt="ガジュマルテラス"
      layout="responsive"
      width={500}
      height={300}
      className="object-cover rounded-3xl"
    />
  </div>
  <h2 className="text-xl font-bold">ガジュマルテラス</h2>
  <p>地中海のようなオーシャンビューに位置するカフェです</p>
</Link>

<Link href="/renta-car" className="block">
  <div className="border relative rounded-3xl p-6 shadow space-y-3 bg-white hover:shadow-lg transition-shadow duration-300">
    <div className="aspect-video bg-muted relative">
      <Image
        src="/レンタカー.jpg"
        alt="レンタカー"
        layout="responsive"
        width={500}
        height={300}
        className="object-cover rounded-3xl"
      />
    </div>
    <h2 className="text-xl font-bold">レンタカー</h2>
    <p>小豆島の風を感じながら快適に移動できます</p>
  </div>
</Link>

{/*
        <div className="border relative rounded-3xl p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
            <Image
              //src="/マリンジェット.jpeg" // 画像のパスを指定
              src="/comming_soon.png"
              alt="マリンジェット"
              layout="responsive" // 'fill'から'layout="responsive"'に変更
              width={500} // 画像の幅を指定
              height={300} // 画像の高さを指定
              className="object-cover rounded-3xl" // 画像を丸く表示
            />
          </div>
          <h2 className="text-xl font-bold">ジェットスキーレンタル</h2>
          <p>瀬戸内の素敵な海でマリンスポーツを楽しむことができます</p>
        </div>
*/}




      </div>
    </Section>
  );
}
