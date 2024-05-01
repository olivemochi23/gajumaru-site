// Services.tsx
import Image from "next/image";
import Section from "./section";

export default function Services() {
  return (
    <Section className=" px-4 sm:px-6 lg:px-8" title="サービス一覧" 
    subTitle="" 
    style={{
      ///backgroundImage: "url('/お問合せ背景.png')"
    }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="border relative rounded-3xl p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
            <Image
              src="/海の家AI.jpeg" // 画像のパスを指定
              alt="海の家"
              layout="responsive" // 'fill'から'layout="responsive"'に変更
              width={500} // 画像の幅を指定
              height={300} // 画像の高さを指定
              className="object-cover rounded-3xl" // 画像を丸く表示
            />
          </div>
          <h2 className="text-xl font-bold">海の家</h2>
          <p>地中海のようなオーシャンビューに位置する海の家です</p>
        </div>

        <div className="border relative rounded-3xl p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
            <Image
              src="/マリンジェット.jpeg" // 画像のパスを指定
              alt="マリンジェット"
              layout="responsive" // 'fill'から'layout="responsive"'に変更
              width={500} // 画像の幅を指定
              height={300} // 画像の高さを指定
              className="object-cover rounded-3xl" // 画像を丸く表示
            />
          </div>
          <h2 className="text-xl font-bold">マリンジェットレンタル</h2>
          <p>瀬戸内の素敵な海でマリンスポーツを楽しむことができます</p>
        </div>

        <div className="border relative rounded-3xl p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
            <Image
              src="/パンケーキ.jpeg" // 画像のパスを指定
              alt="パンケーキ"
              layout="responsive" // 'fill'から'layout="responsive"'に変更
              width={500} // 画像の幅を指定
              height={300} // 画像の高さを指定
              className="object-cover rounded-3xl" // 画像を丸く表示
            />
          </div>
          <h2 className="text-xl font-bold">エンジェルパンケーキ</h2>
          <p>オーシャンビューでふんわり食感のパンケーキを楽しめます</p>
        </div>

        <div className="border relative rounded-3xl p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
          <Image
            src="/レンタカー.jpeg" // 画像のパスを指定
            alt="レンタカー"
            layout="responsive" // 'fill'から'layout="responsive"'に変更
            width={500} // 画像の幅を指定
            height={300} // 画像の高さを指定
            className="object-cover rounded-3xl" // 画像を丸く表示
          />
          </div>
          <h2 className="text-xl font-bold">レンタカー</h2>
          <p>小豆島の風を感じながら快適に移動できます</p>
        </div>

      </div>
    </Section>
  );
}