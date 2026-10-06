// 301 redirects from every past version of lepoispenche.com, so no backlink or Google result lands on a 404.
// Sources: the live WordPress site (sitemaps + REST API, Oct 2026) and the Wayback Machine history of the domain,
// which includes two older sites: /lpp/... (2016-2018, /lpp/fr/ and /lpp/en/) and /mtl2015/... (2015-2016).
// The 2026 WordPress site served French at the root and English as "?lang=en" on an English slug.
//
// To add one, add a row: oldFr = old French paths, oldEn = old English paths (lowercase, no trailing slash, no query).
// proxy.ts reads these tables and answers every old URL with a single 301.

type Rule = { fr: string; en: string; oldFr: string[]; oldEn: string[] };

export const OLD_SITE: Rule[] = [
  { fr: "/fr", en: "/en", oldFr: ["/home", "/nouvelles-delicieuses", "/feed", "/blog", "/index.html", "/index_.html", "/indexhome.html", "/index.php", "/lpp", "/lpp/index.php", "/lpp/fr", "/mtl2015", "/mtl2015/nouvelles"], oldEn: ["/tasty-news", "/lpp/en", "/mtl2015/en", "/mtl2015/en/nouvelles"] },
  { fr: "/fr/menu-lunch", en: "/en/lunch-menu", oldFr: ["/menu-lunch", "/le-meilleur-lunch-daffaires-au-centre-ville-de-montreal", "/the-rebellious-power-of-a-slow-lunch", "/lpp/menu-midi", "/lpp/lunch", "/lpp/fr/menu-midi"], oldEn: ["/lunch", "/best-business-lunch-in-downtown-montreal", "/lpp/en/lunch", "/lpp/en/lunch-menu"] },
  { fr: "/fr/menu-souper", en: "/en/dinner-menu", oldFr: ["/menu-souper", "/souper", "/menu-souper/souper", "/best-french-dishes-in-montreal", "/best-steak-restaurants-in-montreal-masters-of-the-meat-game", "/menu", "/menus", "/lpp/menu-soir", "/lpp/menus-2", "/lpp/fin-de-soiree", "/lpp/late-night-menu", "/lpp/vins-et-spirtiueux", "/lpp/wines-spirits", "/lpp/fr/menu-soir", "/lpp/fr/menus", "/lpp/fr/classiques", "/lpp/fr/fin-de-soiree", "/lpp/fr/menu-fin-de-soiree", "/lpp/fr/vins-et-spirtiueux", "/mtl2015/menu", "/mtl2015/vins"], oldEn: ["/dinner", "/lpp/dinner-menu", "/lpp/en/dinner-menu", "/lpp/en/menus", "/lpp/en/menus-2", "/lpp/en/menus-2-2", "/lpp/en/classiques", "/lpp/en/late-night-menu", "/lpp/en/fin-de-soiree", "/lpp/en/wines-spirits", "/mtl2015/en/menu", "/mtl2015/en/vins"] },
  { fr: "/fr/menu-brunch", en: "/en/brunch-menu", oldFr: ["/menu-brunch", "/lpp/brunch", "/lpp/fr/brunch", "/lpp/fr/menu-brunch"], oldEn: ["/brunch", "/holiday-menus", "/lpp/brunch-menu", "/lpp/en/brunch", "/lpp/en/brunch-menu"] },
  { fr: "/fr/soupez-tot", en: "/en/dine-early", oldFr: ["/soupez-tot-17h-17h45-2", "/menus-des-fetes-2022"], oldEn: ["/holiday-menus-2022"] },
  { fr: "/fr/evenements-prives", en: "/en/private-dining", oldFr: ["/evenements-prives", "/renseignement-evenements-prives", "/lpp/evenements-prives", "/lpp/fr/evenements-prives"], oldEn: ["/private-events", "/query-private-dining", "/party", "/vos-fetes-au-pois-penche", "/lpp/en/private-events", "/lpp/en/evenements-prives"] },
  { fr: "/fr/traiteur", en: "/en/catering", oldFr: ["/traiteur", "/le-pois-penches-elite-catering-services"], oldEn: ["/catering"] },
  { fr: "/fr/notre-histoire", en: "/en/our-story", oldFr: ["/le-pois-penche", "/lpp/a-propos", "/lpp/equipe", "/lpp/team-2", "/lpp/fr/a-propos", "/lpp/fr/histoire", "/lpp/fr/equipe"], oldEn: ["/about", "/lpp/about", "/lpp/en/about", "/lpp/en/story", "/lpp/en/team", "/lpp/en/team-2"] },
  { fr: "/fr/galerie", en: "/en/gallery", oldFr: ["/gallerie"], oldEn: ["/gallery"] },
  { fr: "/fr/carrieres", en: "/en/careers", oldFr: ["/carrieres"], oldEn: ["/careers"] },
  { fr: "/fr/cartes-cadeaux", en: "/en/gift-cards", oldFr: ["/cartes-cadeaux", "/lpp/fr/cheques-cadeaux"], oldEn: ["/gift-cards"] },
  { fr: "/fr/heures-et-adresse", en: "/en/hours-and-address", oldFr: ["/nous-joindre", "/lpp/adresse-horaires", "/lpp/contact", "/lpp/fr/adresse-horaires", "/lpp/fr/contact"], oldEn: ["/contact", "/lpp/en/contact"] },
];

/** Old paths that start with these go to the home page (blog categories, author archives, the two retired sites). */
export const OLD_PREFIXES = ["/category/", "/author/", "/tag/", "/lpp/", "/mtl2015/"];

/** Old pages that now live on another website. */
export const EXTERNAL: Record<string, string> = {
  "/couchez-avec-nous": "https://hotelchezswann.com/",
  "/sleep-with-us": "https://hotelchezswann.com/",
};

/** Old WordPress links by post ID (/?p=17159, /?page_id=17159). */
export const OLD_IDS: Record<string, string> = {
  "17159": "/fr/soupez-tot",
  "17160": "/en/dine-early",
  "199": "/fr/menu-brunch",
};

/**
 * Old PDFs (menus, brochures, privacy policy) from /wp-content/uploads/, /menus/, /cartes/ and the retired sites.
 * Matched by keyword in the file name, first match wins. Privacy policies go to the new PDFs; the rest go to the page
 * that replaced them.
 */
export const OLD_PDFS: [RegExp, string][] = [
  [/politique|confidentialit/, "/pdf/politique-confidentialite-fr.pdf"],
  [/personal-information|privacy/, "/pdf/privacy-policy-en.pdf"],
  [/catering/, "/en/catering"],
  [/traiteur/, "/fr/traiteur"],
  [/brochure|evenement|événement|event/, "/fr/evenements-prives"],
  [/brunch/, "/fr/menu-brunch"],
  [/dessert/, "/fr/menu-desserts"],
  [/lunch|midi|tdh|table-dhote/, "/fr/menu-lunch"],
  [/soir|night|souper|dinner|wine|vin|special|valentin|grand-prix|spectacles/, "/fr/menu-souper"],
];

/** Returns the new URL for an old path, or null if the path is not from the old site. */
export function resolveOldUrl(path: string, wantsEnglish: boolean): string | null {
  let p = path;
  try {
    // Old upload names use decomposed accents (E + U+0301); compare them in composed form
    p = decodeURIComponent(path).normalize("NFC");
  } catch {}
  p = p.replace(/\/+$/, "").toLowerCase() || "/";
  if (p === "/") return null;

  if (EXTERNAL[p]) return EXTERNAL[p];

  if (p.endsWith(".pdf")) {
    const file = p.slice(p.lastIndexOf("/") + 1);
    for (const [pattern, target] of OLD_PDFS) if (pattern.test(file)) return target;
    return wantsEnglish ? "/en" : "/fr";
  }

  for (const rule of OLD_SITE) {
    if (rule.oldEn.includes(p)) return rule.en;
    if (rule.oldFr.includes(p)) return wantsEnglish ? rule.en : rule.fr;
  }
  if (OLD_PREFIXES.some((prefix) => p.startsWith(prefix))) return wantsEnglish || p.includes("/en/") ? "/en" : "/fr";
  return null;
}

/**
 * The home page with an old query string: /?lang=en, /?p=123, /?page_id=123, /index.html?l=en.
 * Returns the new URL, or "/fr" for a plain visit.
 */
export function resolveHome(params: URLSearchParams): string {
  const id = params.get("p") ?? params.get("page_id");
  if (id && OLD_IDS[id]) return OLD_IDS[id];
  const lang = (params.get("lang") ?? params.get("l") ?? "").toLowerCase();
  return lang.startsWith("en") ? "/en" : "/fr";
}
