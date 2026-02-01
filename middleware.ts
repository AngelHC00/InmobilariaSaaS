import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const url = request.nextUrl.clone();
  if (!host) {
    return NextResponse.next();
  }
  const [subdomain] = host.split('.');
  if (subdomain && !['www', 'inmobilaria', 'localhost'].includes(subdomain)) {
    url.pathname = `/t/${subdomain}${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)']
};
