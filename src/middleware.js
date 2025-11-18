import {NextResponse} from "next/server";

const locales = ["en", "fa","ar"];

export function middleware(request) {
  const {pathname} = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.match(/^\/.*\.(png|jpg|jpeg|gif|svg|webp|ico)$/)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = "fa";
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

// export const config = {
//   matcher: [
//     "/((?!_next|favicon.ico|robots.txt|.*\\.(png|jpg|jpeg|gif|svg|webp|ico)).*)",
//   ],
// };
