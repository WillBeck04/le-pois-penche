import { NextResponse, type NextRequest } from "next/server";
import { resolveOldUrl } from "@/lib/redirects";

/**
 * Runs before every page request.
 * 1. Old-site URLs (with or without trailing slash, with or without ?lang=en) get one 301 to the new page.
 * 2. Any other URL with a trailing slash is normalized, e.g. /fr/menu-lunch/ -> /fr/menu-lunch
 */
export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  const target = resolveOldUrl(pathname, searchParams.get("lang") === "en");
  if (target) {
    const url = target.startsWith("http") ? new URL(target) : new URL(target, req.nextUrl.origin);
    return NextResponse.redirect(url, 301);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    // Use a plain URL: NextURL.clone() remembers the trailing slash and would put it back
    const url = new URL(req.url);
    url.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|images/|pdf/|logo/|design|icon\\.png|apple-touch-icon\\.png|icon-192\\.png|sitemap\\.xml|robots\\.txt|llms\\.txt).*)"],
};
