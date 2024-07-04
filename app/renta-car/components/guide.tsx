import Image from 'next/image';

const Guide = () => {
  const spots = [
    { id: 1, src: '/spot1.jpg', alt: '寒霞渓', name: '寒霞渓', description: '日本三大渓谷美の一つ。紅葉の名所としても有名。' },
    { id: 2, src: '/spot2.jpg', alt: 'エンジェルロード', name: 'エンジェルロード', description: '干潮時にのみ現れる砂の道。恋人の聖地として人気。' },
    { id: 3, src: '/spot3.jpg', alt: 'オリーブ公園', name: 'オリーブ公園', description: '日本のオリーブ発祥の地。美しい景色と癒しの空間。' },
  ];

  return (
    <div className="bg-pink-200 p-4 sm:p-8 rounded-3xl my-8 mx-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-pink-600">小豆島おすすめスポット</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {spots.map((spot) => (
          <div key={spot.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src={spot.src}
                alt={spot.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-pink-600">{spot.name}</h3>
              <p className="text-gray-600">{spot.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-pink-600 font-bold">
        ガジュマルレンタカーで島内の観光スポットを巡りましょう！
      </p>
    </div>
  );
};

export default Guide;