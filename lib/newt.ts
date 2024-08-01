/*
// サーバーサイドでのみ実行されることを保証するためのインポート
import 'server-only'

// Newtクライアントを作成するための関数をインポート
import { createClient } from 'newt-client-js'

// Reactのキャッシュ機能をインポート
import { cache } from 'react'

// 記事の型定義をインポート
import type { Article } from '@/types/article'

// Newtクライアントの設定
const client = createClient({
  // 環境変数からスペースUIDを取得し、文字列に変換
  spaceUid: process.env.NEWT_SPACE_UID + '',
  // 環境変数からCDN APIトークンを取得し、文字列に変換
  token: process.env.NEWT_CDN_API_TOKEN + '',
  // APIタイプをCDNに設定
  apiType: 'cdn',
})

// 記事を取得する関数をエクスポートし、Reactのキャッシュ機能を適用
export const getArticles = cache<() => Promise<Article[]>>(async () => {
    // Newtクライアントを使用してコンテンツを取得
    const { items } = await client.getContents({
      appUid: 'updates',
      modelUid: 'article',
      query: {
        // 取得するフィールドを指定
        select: ['_id', 'title', 'slug', 'body'],
      },
    })
    // 取得したアイテムをArticle型の配列として返す
    return items as Article[]
})

*/