import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-96">
        <Image src="/maincar.jpg" alt="小豆島のイラスト" layout="fill" objectFit="cover" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4 rounded-lg">
        <h2 className="text-2xl font-bold text-pink-500 text-shadow-white-outline">
          小豆島の観光体験をもっと快適に！<br />
          どこでも借りられるガジュマルレンタカー！
        </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;