import { NextResponse, NextRequest } from "next/server";
const publicPaths = ["/login", "/"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  const isPublicPath = publicPaths.includes(pathname);

    // const requestHeaders = new Headers(request.headers);

    // if (token) {
    //   requestHeaders.set("Authorization", `Bearer ${token}`);
    // }

  if (pathname === "/" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!token && !isPublicPath) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && isPublicPath) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }
 
  return NextResponse.next();

// return NextResponse.next({
//   request: {
//     headers: requestHeaders,
//   },
// });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets|images).*)"], // middleware hanya untuk root "/"
};
