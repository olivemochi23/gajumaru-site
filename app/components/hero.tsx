import RampartOne from './fonts/RampartOne'

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center">
      <div className=" mx-auto text-center">
        <RampartOne>
          <h1 className="font-bold text-6xl mb-5 xl:text-8xl text-white ">小豆島で最高のリゾート体験を</h1>
        </RampartOne>
        <p className="text-1xl text-white mb-6 ">地中海の雰囲気に包まれた上質な体験をお届けします</p>
      </div>
    </div>
  )
}