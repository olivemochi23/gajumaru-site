import Image from 'next/image';
import Link from 'next/link';

const MainCar = () => {
  const car = {
    id: 1,
    src: '/mini.jpg',
    alt: 'BMV Mini オープンカー',
    name: 'オープンカー',
    description: 'BMW Miniのオープンカーを小豆島で初めて採用しました。まるで、小豆島の自然の中に溶け込んだかのような走りが楽しめます。折角のご旅行、移動中も楽しまなきゃ勿体ないです！',
  };

  return (
    <div className="bg-pink-200 p-4 sm:p-8 rounded-3xl my-8 mx-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-pink-600">おすすめレンタカー</h2>
      <Link href="/renta-car/cars">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              src={car.src}
              alt={car.alt}
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 text-pink-500">車種と料金</h3>
            <p className="text-gray-600">話題のMiniオープンカーからかわいい軽自動車までをラインナップ</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainCar;