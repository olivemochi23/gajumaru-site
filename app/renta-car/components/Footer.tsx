import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="h-20 px-4 sm:px-6 lg:px-8 sticky bottom-0 border-t font-bold bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center flex-col">
      <div className="absolute inset-0 bg-pink-400 bg-opacity-60" />
      <Image
        src="/ガジュマルロゴ.png"
        alt="株式会社ガジュマル"
        width={50}
        height={50}
        className="relative flex items-center justify-center flex-col"
      />
      <p className="relative text-center text-xs text-white font-bold">&copy; 2024 株式会社ガジュマル All rights reserved</p>
    </footer>
  )
}

export default Footer