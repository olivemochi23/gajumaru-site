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
        <div className=" gap-4 ">
          <div className="  py-20">
            <h4 className=" text-xl font-bold">上質な施設</h4>
            <p>
              地中海の雰囲気に包まれた上質な施設で、リラックスした時間をお過ごしいただけます。
            </p>
          </div>
          <div className=" py-20">
            <h4 className=" text-xl font-bold">きめ細かなサービス</h4>
            <p>
              お客様一人ひとりのニーズに合わせた、きめ細かなサービスをご提供します。
            </p>
          </div>
          <div className=" py-20">
            <h4 className=" text-xl font-bold">豊かな自然</h4>
            <p>
              小豆島の豊かな自然に囲まれた環境で、心身ともにリフレッシュできます。
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}