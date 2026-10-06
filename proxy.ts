import { NextResponse, type NextRequest } from "next/server";
import { resolveHome, resolveOldUrl } from "@/lib/redirects";
import { site } from "@/lib/site";

const CANONICAL_HOST = new URL(site.url).host; // lepoispenche.com

/**
 * Runs before every page request.
 * 1. www.lepoispenche.com -> lepoispenche.com (one 301, path kept or translated).
 * 2. The home page: / -> /fr, /?lang=en -> /en, old /?p=123 links -> their page.
 * 3. Old-site URLs (with or without trailing slash, with or without ?lang=en) get one 301 to the new page.
 * 4. Any other URL with a trailing slash is normalized, e.g. /fr/menu-lunch/ -> /fr/menu-lunch
 * 5. Preview hosts (Replit, Vercel) are kept out of Google so they never compete with the real domain.
 */
export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const isWww = host === `www.${CANONICAL_HOST}`;
  const origin = isWww ? site.url : req.nextUrl.origin;
  const wantsEnglish = (searchParams.get("lang") ?? searchParams.get("l") ?? "").toLowerCase().startsWith("en");

  const redirect = (target: string) =>
    NextResponse.redirect(target.startsWith("http") ? new URL(target) : new URL(target, origin), 301);

  // A plain visit to / is a language choice (307, may change later); old query links (/?lang=en, /?p=123) are permanent
  if (pathname === "/") {
    if (searchParams.size === 0 && !isWww) return NextResponse.redirect(new URL("/fr", origin), 307);
    return redirect(resolveHome(searchParams));
  }

  const target = resolveOldUrl(pathname, wantsEnglish);
  if (target) return redirect(target);

  if (pathname.length > 1 && pathname.endsWith("/")) {
    // Use a plain URL: NextURL.clone() remembers the trailing slash and would put it back
    const url = new URL(req.url);
    url.pathname = pathname.replace(/\/+$/, "");
    if (isWww) url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, isWww ? 301 : 308);
  }

  if (isWww) return redirect(pathname + req.nextUrl.search);

  const res = NextResponse.next();
  if (host && host !== CANONICAL_HOST && host !== "localhost" && host !== "127.0.0.1") {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/|api/|images/|pdf/|logo/|icon\\.png|apple-touch-icon\\.png|icon-192\\.png|favicon\\.ico|sitemap\\.xml|robots\\.txt|llms\\.txt).*)"],
};
