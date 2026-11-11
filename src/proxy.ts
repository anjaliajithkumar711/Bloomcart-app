import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  console.log("Requested URL:", path);

  // Example protected route
  if (path.startsWith("/admin")) {
    const session = request.cookies.get("bloomcart_session");

    if (!session) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};