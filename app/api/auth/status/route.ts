import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // ここで実際の認証状態を確認するロジックを実装します
  // 例: クッキーやセッションをチェックするなど
  const isAuthenticated = false; // 仮の実装

  return NextResponse.json({ isAuthenticated });
}