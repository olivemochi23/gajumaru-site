import Image from 'next/image';

const MainCar = () => {
  const cars = [
    { id: 1, src: '/car1.jpg', alt: 'おすすめ車種1', name: 'コンパクトカー', description: '小回りが利いて運転しやすい！' },
    { id: 2, src: '/car2.jpg', alt: 'おすすめ車種2', name: 'ミニバン', description: '大人数でのお出かけに最適！' },
    { id: 3, src: '/car3.jpg', alt: 'おすすめ車種3', name: 'オープンカー', description: '爽快なドライブを楽しめる！' },
  ];

  return (
    <div className="bg-pink-200 p-4 sm:p-8 rounded-3xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-pink-600">おすすめレンタカー</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src={car.src}
                alt={car.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-pink-500">{car.name}</h3>
              <p className="text-gray-600">{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCar;