import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request) {
  // get token from cookie
  const token = request.cookies.get("token")?.value;

  // protected routes
  const protectedRoutes = ["/course"];

  // check if route is protected
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  // block if no token
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  // verify token
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return NextResponse.redirect(new URL("/Login", request.url));
    }
  }

  return NextResponse.next();
}

// config
export const config = {
  matcher: ["/course/:path*"],
};
