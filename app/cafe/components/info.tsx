import React from 'react';
import Section from '../../components/section';

export default function Info() {
  return (
    <Section
      title="カフェ情報"
      subTitle="ゆったりとした時間をお過ごしください"
      className="text-pink-800"
    >
    <div className="mt-6 space-y-4 text-gray-600">
      <p className="flex items-center"><span className="material-icons mr-2"></span>営業時間: 10:00 - 16:00 <br />※L.O. 変動あり</p>
      <p className="flex items-center"><span className="material-icons mr-2"></span>定休日: 不定休</p>
      <p className="flex items-center"><span className="material-icons mr-2"></span>座席数: 20席（テラス席）</p>
    </div>
    </Section>
  );
}