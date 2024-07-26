import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createCsrfMiddleware } from '@edge-csrf/nextjs';

const csrfProtect = createCsrfMiddleware({
  cookie: {
    secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
  },
})

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Check CSRF token
  const csrfError = await csrfProtect(req)
  if (csrfError) return new NextResponse('invalid csrf token', { status: 403 })

  return res
}

export const config = {}