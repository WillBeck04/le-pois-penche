// 301 redirects from the old WordPress site (lepoispenche.com before 2026).
// The old site served French at the root and English as "?lang=en" on an English slug.
// To add one, add a row: oldFr = old French paths, oldEn = old English paths (no trailing slash, no query).
// proxy.ts reads this table and answers every old URL with a single 301.

type Rule = { fr: string; en: string; oldFr: string[]; oldEn: string[] };

export const OLD_SITE: Rule[] = [
  { fr: "/fr", en: "/en", oldFr: ["/home", "/nouvelles-delicieuses"], oldEn: ["/tasty-news"] },
  { fr: "/fr/menu-lunch", en: "/en/lunch-menu", oldFr: ["/menu-lunch", "/le-meilleur-lunch-daffaires-au-centre-ville-de-montreal", "/the-rebellious-power-of-a-slow-lunch"], oldEn: ["/lunch", "/best-business-lunch-in-downtown-montreal"] },
  { fr: "/fr/menu-souper", en: "/en/dinner-menu", oldFr: ["/menu-souper", "/souper", "/best-french-dishes-in-montreal", "/best-steak-restaurants-in-montreal-masters-of-the-meat-game"], oldEn: ["/dinner"] },
  { fr: "/fr/menu-brunch", en: "/en/brunch-menu", oldFr: ["/menu-brunch"], oldEn: ["/brunch", "/holiday-menus"] },
  { fr: "/fr/soupez-tot", en: "/en/dine-early", oldFr: ["/soupez-tot-17h-17h45-2", "/menus-des-fetes-2022"], oldEn: ["/holiday-menus-2022"] },
  { fr: "/fr/evenements-prives", en: "/en/private-dining", oldFr: ["/evenements-prives", "/renseignement-evenements-prives"], oldEn: ["/private-events", "/query-private-dining", "/party", "/vos-fetes-au-pois-penche"] },
  { fr: "/fr/traiteur", en: "/en/catering", oldFr: ["/traiteur", "/le-pois-penches-elite-catering-services"], oldEn: ["/catering"] },
  { fr: "/fr/notre-histoire", en: "/en/our-story", oldFr: ["/le-pois-penche"], oldEn: ["/about"] },
  { fr: "/fr/galerie", en: "/en/gallery", oldFr: ["/gallerie"], oldEn: ["/gallery"] },
  { fr: "/fr/carrieres", en: "/en/careers", oldFr: ["/carrieres"], oldEn: ["/careers"] },
  { fr: "/fr/cartes-cadeaux", en: "/en/gift-cards", oldFr: ["/cartes-cadeaux"], oldEn: ["/gift-cards"] },
  { fr: "/fr/heures-et-adresse", en: "/en/hours-and-address", oldFr: ["/nous-joindre"], oldEn: ["/contact"] },
];

/** Old paths that start with these go to the home page (blog categories and author archives). */
export const OLD_PREFIXES = ["/category/", "/author/"];

/** Old pages that now live on another website. */
export const EXTERNAL: Record<string, string> = {
  "/couchez-avec-nous": "https://hotelchezswann.com/",
  "/sleep-with-us": "https://hotelchezswann.com/",
};

/** Returns the new URL for an old path, or null if the path is not from the old site. */
export function resolveOldUrl(path: string, wantsEnglish: boolean): string | null {
  const p = path.replace(/\/+$/, "").toLowerCase() || "/";
  if (EXTERNAL[p]) return EXTERNAL[p];
  for (const rule of OLD_SITE) {
    if (rule.oldEn.includes(p)) return rule.en;
    if (rule.oldFr.includes(p)) return wantsEnglish ? rule.en : rule.fr;
  }
  if (OLD_PREFIXES.some((prefix) => p.startsWith(prefix))) return wantsEnglish ? "/en" : "/fr";
  return null;
}
