// import { auth } from "./auth";
// import { NextResponse } from "next/server";

// export default auth((req) => {
//   const path = req.nextUrl.pathname;

//   console.log("Middleware called.");

//   // Protect /generate-program/*
//   if (!req.auth && path.startsWith("/generate-program")) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // Protect /profile/*
//   if (!req.auth && path.startsWith("/profile")) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/generate-program/:path*", "/profile/:path*"],
// };

import { NextResponse } from "next/server";

export function middleware(req: Request) {
  console.log("MIDDLEWARE is running on:", req.url);
  return NextResponse.next();
}
