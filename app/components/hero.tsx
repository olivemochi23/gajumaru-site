import RampartOne from './fonts/RampartOne'

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center">
      <div className="mx-auto text-center">
        <RampartOne>
          <h1 className="font-bold text-4xl mb-5 text-white sm:text-5xl md:text-6xl lg:text-8xl">小豆島で<br />最高の<br />リゾート体験を</h1>
        </RampartOne>
      </div>
    </div>
  )
}