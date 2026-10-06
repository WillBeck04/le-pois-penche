// Generates public/sitemap.xml and public/robots.txt after every build.
const siteUrl = "https://lepoispenche.com";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  // hreflang pairs: the slugs differ per language, so we list them by hand from lib/routes.ts
  transform: async (config, path) => {
    const pairs = {
      "/fr": "/en",
      "/fr/menu-lunch": "/en/lunch-menu",
      "/fr/menu-souper": "/en/dinner-menu",
      "/fr/menu-brunch": "/en/brunch-menu",
      "/fr/soupez-tot": "/en/dine-early",
      "/fr/menu-desserts": "/en/dessert-menu",
      "/fr/heures-et-adresse": "/en/hours-and-address",
      "/fr/notre-histoire": "/en/our-story",
      "/fr/evenements-prives": "/en/private-dining",
      "/fr/traiteur": "/en/catering",
      "/fr/galerie": "/en/gallery",
      "/fr/cartes-cadeaux": "/en/gift-cards",
      "/fr/carrieres": "/en/careers",
      "/fr/faq": "/en/faq",
    };
    const enToFr = Object.fromEntries(Object.entries(pairs).map(([fr, en]) => [en, fr]));
    const fr = pairs[path] ? path : enToFr[path];
    const en = pairs[path] ? pairs[path] : enToFr[path] ? path : undefined;
    if (!fr || !en) return null;
    return {
      loc: path,
      changefreq: path === "/fr" || path === "/en" ? "weekly" : "monthly",
      priority: path === "/fr" || path === "/en" ? 1.0 : path.includes("menu") || path.includes("brunch") || path.includes("dine") || path.includes("soupez") ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `${siteUrl}${fr}`, hreflang: "fr-CA", hrefIsAbsolute: true },
        { href: `${siteUrl}${en}`, hreflang: "en-CA", hrefIsAbsolute: true },
        { href: `${siteUrl}${fr}`, hreflang: "x-default", hrefIsAbsolute: true },
      ],
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    additionalSitemaps: [],
  },
};
