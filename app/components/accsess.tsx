import { GoogleMapsEmbed } from '@next/third-parties/google'
import Section from '@/app/components/section'

export default function Access() {
  return (
    <div>
      <Section
        title="アクセス"
        subTitle={
          <>
            〒761-4434 香川県小豆郡小豆島町西村甲1490-1<br />
            営業時間： 10:00 - 18:00
          </>
        }
        className="px-4 sm:px-6 lg:px-8"
        style={{
          textAlign: 'left',
          whiteSpace: 'pre-wrap',
        }}
      >
        <div className="">
          <GoogleMapsEmbed
            apiKey="AIzaSyDf5vxFKOvYRh1pywfhlbyoGBrAu1Rnd3U"
            height={400}
            width="100%"
            mode="place"
            q="香川県小豆郡小豆島町西村甲1490-1"
          />
        </div>
      </Section>
    </div>
  )
}