// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Get the token (JWT) from cookies
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Allow requests if:
  // 1. It's a public path (e.g. login, register, api/auth)
  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register")
  ) {
    return NextResponse.next();
  }

  // 2. If no token → redirect to login
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Otherwise, allow
  return NextResponse.next();
}

// Tell Next.js which routes should run middleware
export const config = {
  matcher: ["/generate-program/:path*", "/profile/:path*"], // protect these routes
};
