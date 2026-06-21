import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, verifySessionToken } from "@/lib/auth";

export const config = {
  // Both the admin UI pages AND the admin API routes need the gate.
  // The page-only matcher this used to have left every mutating
  // endpoint (create/edit/delete/upload) reachable with no auth at all.
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

// These have to stay reachable by unauthenticated requests — they're how
// you get authenticated in the first place.
const PUBLIC_PATHS = ["/admin/login", "/api/admin/login", "/api/admin/logout"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

console.log("middleware hit:", pathname);
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const valid = await verifySessionToken(token);

  if (!valid) {
    // API callers want a 401, not a redirect to an HTML login page.
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
