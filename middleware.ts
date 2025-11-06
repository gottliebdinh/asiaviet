import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next()
  }

  const protoHeader = request.headers.get('x-forwarded-proto')
  const currentProtocol = protoHeader ?? request.nextUrl.protocol.replace(':', '')

  if (currentProtocol !== 'https') {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}

