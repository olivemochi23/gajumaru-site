import Image from 'next/image'
import Section from '@/app/components/section'

export default function About() {
  return (
    <div>

<Section
        title="ガジュマルについて"
        subTitle=""
        className="px-4 sm:px-6 lg:px-8 "
        style={{
          
            }}
      >
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="py-20 bg-green-100 rounded-3xl">
    <h4 className="text-xl font-bold text-center mb-2">上質な施設</h4>
    <p className="px-4">
      地中海の雰囲気に包まれた上質な施設で、リラックスした時間をお過ごしいただけます。
    </p>
  </div>
  <div className="py-20 bg-green-100 rounded-3xl">
    <h4 className="text-xl font-bold text-center mb-2">きめ細かなサービス</h4>
    <p className="px-4">
      お客様一人ひとりのニーズに合わせた、きめ細かなサービスをご提供します。
    </p>
  </div>
  <div className="py-20 bg-green-100 rounded-3xl">
    <h4 className="text-xl font-bold text-center mb-2">豊かな自然</h4>
    <p className="px-4">
      小豆島の豊かな自然に囲まれた環境で、心身ともにリフレッシュできます。
    </p>
  </div>
</div>
      </Section>
    </div>
  )
}