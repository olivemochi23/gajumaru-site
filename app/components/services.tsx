// Services.tsx
import Image from "next/image";
import Section from "./section";

export default function Services() {
  return (
    <Section className="bg-teal-100"  title="サービス一覧" subTitle="私達のサービス一覧です">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="border relative rounded-md p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
            <Image
              src="/海の家.jpg" // 画像のパスを指定
              alt="海の家"
              fill // 親要素の大きさに合わせて画像を拡大/縮小
              className="object-cover rounded-md" // 画像を丸く表示
            />
          </div>
          <h2 className="text-xl font-bold">海の家</h2>
          <p>地中海のようなオーシャンビューに位置する海の家です</p>
        </div>

        <div className="border relative rounded-md p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
            <Image
              src="/マリンジェット.jpeg" // 画像のパスを指定
              alt="マリンジェット"
              fill // 親要素の大きさに合わせて画像を拡大/縮小
              className="object-cover rounded-md" // 画像を丸く表示
            />
          </div>
          <h2 className="text-xl font-bold">マリンジェットレンタル</h2>
          <p>瀬戸内の素敵な海でマリンスポーツを楽しむことができます</p>
        </div>

        <div className="border relative rounded-md p-6 shadow space-y-3 bg-white">
          <div className="aspect-video bg-muted relative">
            <Image
              src="/パンケーキ.jpeg" // 画像のパスを指定
              alt="パンケーキ"
              fill // 親要素の大きさに合わせて画像を拡大/縮小
              className="object-cover rounded-md" // 画像を丸く表示
            />
          </div>
          <h2 className="text-xl font-bold">エンジェルパンケーキ</h2>
          <p>オーシャンビューでふんわり食感のパンケーキを楽しめます</p>
        </div>
      </div>
    </Section>
  );
}