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
        <p className="flex items-center"><span className="material-icons mr-2">schedule</span>営業時間: 10:00 - 18:00（L.O. 17:30）</p>
        <p className="flex items-center"><span className="material-icons mr-2">event_busy</span>定休日: 毎週水曜日</p>
        <p className="flex items-center"><span className="material-icons mr-2">chair</span>座席数: 30席（テラス席あり）</p>
      </div>
    </Section>
  );
}