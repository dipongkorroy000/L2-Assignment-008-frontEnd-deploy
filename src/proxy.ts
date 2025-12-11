"use server";

import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {type JwtPayload} from "jsonwebtoken";
import {deleteCookie, getCookie} from "./utils/serverToken";
import {UserRole} from "./types";
import {verifyToken} from "./utils/jsonwebtoken";
import {getDefaultDashboardRoute, getRouteOwner} from "./utils/auth-utils";

const authRoutes = ["/login", "/register", "/forgot-password"];
const isAuthRoute = (pathname: string) => authRoutes.some((route: string) => route === pathname);

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let userRole: UserRole | null = null;
  const accessToken = (await getCookie("accessToken")) || null;

  if (accessToken) {
    const verifiedToken: JwtPayload | string = await verifyToken(accessToken, process.env.ACCESS_TOKEN_SECRET as string);

    if (typeof verifiedToken === "string") {
      await deleteCookie("accessToken");
      await deleteCookie("refreshToken");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    userRole = verifiedToken.payload?.role;
  }

  // Rule 1 : User is logged in and trying to access auth route. Redirect to default dashboard
  if (accessToken && isAuthRoute(pathname)) return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));

  // Rule 2 : User is trying to access open public route
  if (getRouteOwner(pathname) === null) return NextResponse.next();

  // Rule 1 & 2 for open public routes and auth routes

  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Rule 4 : User is trying to access common protected route
  if (getRouteOwner(pathname) === "COMMON") return NextResponse.next();

  if (
    (getRouteOwner(pathname) === "ADMIN" || getRouteOwner(pathname) === "GUIDE" || getRouteOwner(pathname) === "TOURIST") &&
    getRouteOwner(pathname) !== userRole
  )
    return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)"],
};
