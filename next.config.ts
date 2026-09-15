import type { NextConfig } from "next";

/**
 * 301 redirects from the old WordPress site.
 * The old site served French at the root and English as "?lang=en" on an English slug.
 * To add a redirect, add a row here: oldFr = old French paths, oldEn = old English paths (without the query).
 */
const PAGES = [
  { fr: "", en: "", oldFr: ["/home"], oldEn: [] },
  { fr: "menu-lunch", en: "lunch-menu", oldFr: ["/menu-lunch", "/le-meilleur-lunch-daffaires-au-centre-ville-de-montreal", "/the-rebellious-power-of-a-slow-lunch"], oldEn: ["/lunch", "/best-business-lunch-in-downtown-montreal"] },
  { fr: "menu-souper", en: "dinner-menu", oldFr: ["/menu-souper", "/souper", "/best-french-dishes-in-montreal", "/best-steak-restaurants-in-montreal-masters-of-the-meat-game"], oldEn: ["/dinner"] },
  { fr: "menu-brunch", en: "brunch-menu", oldFr: ["/menu-brunch"], oldEn: ["/brunch", "/holiday-menus"] },
  { fr: "soupez-tot", en: "dine-early", oldFr: ["/soupez-tot-17h-17h45-2", "/menus-des-fetes-2022"], oldEn: ["/holiday-menus-2022"] },
  { fr: "evenements-prives", en: "private-dining", oldFr: ["/evenements-prives", "/renseignement-evenements-prives"], oldEn: ["/private-events", "/query-private-dining", "/party", "/vos-fetes-au-pois-penche"] },
  { fr: "traiteur", en: "catering", oldFr: ["/traiteur", "/le-pois-penches-elite-catering-services"], oldEn: ["/catering"] },
  { fr: "notre-histoire", en: "our-story", oldFr: ["/le-pois-penche"], oldEn: ["/about"] },
  { fr: "galerie", en: "gallery", oldFr: ["/gallerie"], oldEn: ["/gallery"] },
  { fr: "carrieres", en: "careers", oldFr: ["/carrieres"], oldEn: ["/careers"] },
  { fr: "cartes-cadeaux", en: "gift-cards", oldFr: ["/cartes-cadeaux"], oldEn: ["/gift-cards"] },
  { fr: "heures-et-adresse", en: "hours-and-address", oldFr: ["/nous-joindre"], oldEn: ["/contact"] },
  // Old blog index and archives go to the home page
  { fr: "", en: "", oldFr: ["/nouvelles-delicieuses", "/category/:path*", "/author/:path*"], oldEn: ["/tasty-news"] },
];

const LANG_EN = [{ type: "query" as const, key: "lang", value: "en" }];

function oldSiteRedirects() {
  const rules: { source: string; destination: string; permanent: boolean; has?: typeof LANG_EN }[] = [];
  for (const p of PAGES) {
    const toFr = p.fr ? `/fr/${p.fr}` : "/fr";
    const toEn = p.en ? `/en/${p.en}` : "/en";
    for (const src of p.oldFr) {
      rules.push({ source: src, has: LANG_EN, destination: toEn, permanent: true });
      rules.push({ source: src, destination: toFr, permanent: true });
    }
    for (const src of p.oldEn) {
      rules.push({ source: src, destination: toEn, permanent: true });
    }
  }
  return rules;
}

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560],
  },
  async redirects() {
    return [
      // Root and old-style language switch
      { source: "/", has: LANG_EN, destination: "/en", permanent: false },
      { source: "/", destination: "/fr", permanent: false },
      ...oldSiteRedirects(),
      // Hotel promo pages on the old site
      { source: "/couchez-avec-nous", destination: "https://hotelchezswann.com/", permanent: true },
      { source: "/sleep-with-us", destination: "https://hotelchezswann.com/", permanent: true },
      // Old sitemap files
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:name-sitemap.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
