import RampartOne from './fonts/RampartOne'

export default function Hero() {
  return (
    <div className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center">
      <div className="container mx-auto text-center">
        <RampartOne>
          <h1 className="font-bold text-8xl mb-5 xl:text-8xl text-white">小豆島のリゾート事業会社</h1>
        </RampartOne>
        <p className="text-2xl text-white mb-6">地中海の雰囲気に包まれた上質な体験をお届けします</p>
      </div>
    </div>
  )
}