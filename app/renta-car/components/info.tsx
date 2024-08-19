import Link from 'next/link'
import { getArticles } from '@/lib/newt'
import type { Metadata } from 'next'
import Section from './section'

export const metadata: Metadata = {
  title: '小豆島ガジュマルレンタカー',
  description: '小豆島ガジュマルレンタカーからのお知らせです。',
}

export const revalidate = 60 

export default async function Info() {
  const articles = await getArticles()
  return (
    <Section
      title="小豆島ガジュマルレンタカーからのお知らせ"
      subTitle="最新情報をチェックしてください"
      className="bg-pink-200 text-pink-600 p-4 sm:p-8 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md">
        <ul className="space-y-8">
          {articles.map((article) => {
            const publishDate = article._sys?.createdAt
              ? new Date(article._sys.createdAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              : '';
            
            return (
              <li key={article._id} className="border-b pb-8 last:border-b-0">
                <Link href={`articles/${article.slug}`} className="block">
                  <h3 className="text-black font-bold text-xl hover:text-pink-800 mb-2">
                    {article.title}
                  </h3>
                  {publishDate && <p className="text-gray-500 text-sm mb-2">{publishDate}</p>}
                  <div 
                    className="text-gray-600 mt-4"
                    dangerouslySetInnerHTML={{ __html: article.body || '' }}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}