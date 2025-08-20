// import { auth } from "../auth";
// import { NextResponse } from "next/server";

import { NextResponse } from "next/server";
import { auth } from "../auth";

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

export default auth((req) => {
  console.log("🔍 Middleware auth session:", req.auth);

  if (
    !req.auth &&
    (req.nextUrl.pathname.startsWith("/generate-program") ||
      req.nextUrl.pathname.startsWith("/profile"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});
