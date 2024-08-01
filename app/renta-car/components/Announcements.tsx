// 必要なモジュールとコンポーネントをインポート
import React from 'react';
import Section from './section';
import Link from 'next/link';
import { getArticles } from '@/lib/newt';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

// Announcementsコンポーネントを非同期関数として定義
const Announcements = async () => {
  // getArticles関数を呼び出して記事データを取得
  const articles = await getArticles();

  return (
    // Sectionコンポーネントを使用してお知らせセクションを作成
    <Section
      title="小豆島ガジュマルレンタカーからのお知らせ"
      subTitle=""
      className="bg-pink-200 text-pink-600 p-4 sm:p-8 rounded-3xl my-8 mx-4"
    >
      <div className="w-full max-w-4xl mx-auto">
        <ul className="space-y-6">
          {/* 取得した記事データをマップして表示 */}
          {articles.map((article) => (
            <li key={article._id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* 各記事へのリンクを作成 */}
              <Link href={`articles/${article.slug}`} className="block">
                {/* 記事タイトルを表示 */}
                <h3 className="font-bold text-xl text-pink-600 mb-2 hover:text-pink-700 transition-colors">
                  {article.title}
                </h3>
                {/* 記事本文を表示 */}
                <div className="text-gray-600 mt-2 prose prose-sm max-w-none">
                <ReactMarkdown
                remarkPlugins={[remarkGfm]}
              >
                {article.body}
              </ReactMarkdown>
                </div>
               
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

// Announcementsコンポーネントをエクスポート
export default Announcements;