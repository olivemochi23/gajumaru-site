import React from 'react';
import Section from '../../components/section';

export default function Menu() {
  return (
    <Section
      title="メニュー"
      subTitle="地元の食材を使用した季節のメニュー"
      className="text-pink-800"
    >
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-pink-50 p-6 rounded-2xl">
          <h3 className="font-bold mb-4 text-xl text-pink-700">ドリンク</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between"><span>〇〇〇〇〇〇</span><span>¥500</span></li>
            <li className="flex justify-between"><span>〇〇〇〇〇〇</span><span>¥600</span></li>
            <li className="flex justify-between"><span>〇〇〇〇〇〇</span><span>¥700</span></li>
          </ul>
        </div>
        <div className="bg-pink-50 p-6 rounded-2xl">
          <h3 className="font-bold mb-4 text-xl text-pink-700">フード</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between"><span>〇〇〇〇〇〇</span><span>¥800</span></li>
            <li className="flex justify-between"><span>〇〇〇〇〇〇</span><span>¥1,000</span></li>
            <li className="flex justify-between"><span>〇〇〇〇〇〇</span><span>¥1,200</span></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}