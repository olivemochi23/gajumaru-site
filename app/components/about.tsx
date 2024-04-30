import Image from 'next/image'
import Section from '@/app/components/section'

export default function About() {
  return (
    <div>

<Section
        title="私たちの強み"
        subTitle="ガジュマルの特徴"
        className="px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/お問合せ背景.png')"
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-white rounded-3xl p-6 shadow space-y-4 ">
            <h4 className="text-xl font-bold">上質な施設</h4>
            <p>
              地中海の雰囲気に包まれた上質な施設で、リラックスした時間をお過ごしいただけます。
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow space-y-4">
            <h4 className="text-xl font-bold">きめ細かなサービス</h4>
            <p>
              お客様一人ひとりのニーズに合わせた、きめ細かなサービスをご提供します。
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow space-y-4">
            <h4 className="text-xl font-bold">豊かな自然</h4>
            <p>
              小豆島の豊かな自然に囲まれた環境で、心身ともにリフレッシュできます。
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}