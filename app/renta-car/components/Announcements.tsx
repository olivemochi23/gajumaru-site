// 必要なモジュールとコンポーネントをインポート
import React from 'react';
import Section from './section';

// Announcementsコンポーネントを定義
const Announcements = () => {
  return (
    // Sectionコンポーネントを使用してお知らせセクションを作成
    <Section
      title="小豆島ガジュマルレンタカーからのお知らせ"
      subTitle=""
      className="bg-pink-200 text-pink-600 p-4 sm:p-8 rounded-3xl my-8 mx-4"
    >
      <div className="w-full max-w-4xl mx-auto">
        <p>現在、お知らせはありません。</p>
      </div>
    </Section>
  );
};

// Announcementsコンポーネントをエクスポート
export default Announcements;