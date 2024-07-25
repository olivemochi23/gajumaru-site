import React from 'react';
import Image from 'next/image';
import Section from '../components/section';
import Link from 'next/link';


interface CarType {
  id: string;  // この行を追加
  name: string;
  capacity: number;
  image: string;
  prices: {
    sixHours: number;
    twelveHours: number;
    twentyFourHours: number;
    extension: number;
  };
}

const carTypes: CarType[] = [
  {
    id: 'mini-convertible',  // この行を追加
    name: 'BMW Mini コンバーチブル',
    capacity: 5,
    image: '/mini.jpg',
    prices: {
      sixHours: 6900,
      twelveHours: 7900,
      twentyFourHours: 9800,
      extension: 1800,
    },
  },
  {
    id: 'kei', 
    name: '軽自動車',
    capacity: 4,
    image: '/kei.jpg',
    prices: {
      sixHours: 4900,
      twelveHours: 5900,
      twentyFourHours: 7800,
      extension: 1300,
    },
  },
  {
    id: 'compact',
    name: 'コンパクトタイプ',
    capacity: 5,
    image: '/compact.jpg',
    prices: {
      sixHours: 5900,
      twelveHours: 6900,
      twentyFourHours: 8800,
      extension: 1500,
    },
  },
  /*
  {
    id: 'onebox',
    name: 'ワンボックス',
    capacity: 8,
    image: '/onebox.jpg',
    prices: {
      sixHours: 9400,
      twelveHours: 10400,
      twentyFourHours: 12300,
      extension: 2400,
    },
  },
  */
];

const additionalFees = [
  { name: 'チャイルドシート／ジュニアシート', price: 550, unit: '24時間毎' },
  { name: 'ハイシーズン料金', price: 700, unit: '24時間毎' },
  { name: '免責補償制度（スタンダード）', price: 1100, unit: '24時間毎' },
  { name: '免責補償制度（フルカバー）', price: 2200, unit: '24時間毎' },
];

export default function CarsPage() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <Section
        title="車種と料金"
        subTitle="多様な車種をご用意しております"
        className="bg-pink-200 p-4 sm:p-8 rounded-3xl my-8 mx-4"
      >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {carTypes.map((car) => (
              <div key={car.name} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="relative aspect-w-16 aspect-h-9">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-pink-600">{car.name}</h3>
                  <p className="text-gray-600 mb-2">乗車人数: {car.capacity}人</p>
                  <ul className="text-sm text-gray-700 mb-4">
                    <li>6時間コース: ¥{car.prices.sixHours.toLocaleString()}</li>
                    <li>12時間コース: ¥{car.prices.twelveHours.toLocaleString()}</li>
                    <li>24時間コース: ¥{car.prices.twentyFourHours.toLocaleString()}</li>
                    <li>契約時間延長: ¥{car.prices.extension.toLocaleString()}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
      </Section>

      <Section
        title="追加料金"
        subTitle="オプションおよび特別料金"
        className="bg-pink-200 p-4 sm:p-8 rounded-3xl my-8 mx-4"
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
          <ul className="space-y-2">
            {additionalFees.map((fee) => (
              <li key={fee.name} className="flex justify-between items-center">
                <span>{fee.name}</span>
                <span className="font-semibold">¥{fee.price.toLocaleString()} ({fee.unit})</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        title="配車・お引き取り費用"
        subTitle="各港および主要ホテルへの配車・引き取りサービス"
        className="bg-pink-200 p-4 sm:p-8 rounded-3xl my-8 mx-4"
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="p-2 text-left">各港</th>
                <th className="p-2 text-right">片道料金</th>
                <th className="p-2 text-right">往復料金</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">池田港、草壁港、土庄港</td>
                <td className="p-2 text-right">¥1,000</td>
                <td className="p-2 text-right">¥1,500</td>
              </tr>
              <tr>
                <td className="p-2">坂手港</td>
                <td className="p-2 text-right">¥1,500</td>
                <td className="p-2 text-right">¥2,500</td>
              </tr>
              <tr>
                <td className="p-2">福田港、大部港</td>
                <td className="p-2 text-right">¥2,500</td>
                <td className="p-2 text-right">¥4,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="その他の情報"
        subTitle="ご利用にあたっての注意事項"
        className="bg-pink-200 p-4 sm:p-8 rounded-3xl my-8 mx-4"
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
          <h4 className="font-bold text-lg mb-2 text-pink-600">キャンセル料金</h4>
          <ul className="list-disc list-inside mb-4">
            <li>前日又は前々日: 基本料金の30%</li>
            <li>貸渡当日: 基本料金の50%</li>
          </ul>

          <h4 className="font-bold text-lg mb-2 text-pink-600">特典</h4>
          <p className="mb-4">ご来店の貸渡および返却の場合、ガジュマルテラスソフトドリンクをお一人様一杯ずつプレゼント</p>

          <h4 className="font-bold text-lg mb-2 text-pink-600">免責補償制度 加入不可条件</h4>
          <ul className="list-disc list-inside">
            <li>21歳未満の方</li>
            <li>免許を取得してから1年経過していない方</li>
            <li>過去に事故歴があり当社が不適当と認めた方</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}