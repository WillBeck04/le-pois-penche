// One table maps every page to its French and English URL.
// The language switcher, hreflang tags, sitemap and navigation all read from here.

export const langs = ["fr", "en"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "fr";

export const routes = {
  home: { fr: "", en: "" },
  lunch: { fr: "menu-lunch", en: "lunch-menu" },
  dinner: { fr: "menu-souper", en: "dinner-menu" },
  brunch: { fr: "menu-brunch", en: "brunch-menu" },
  dineEarly: { fr: "soupez-tot", en: "dine-early" },
  desserts: { fr: "menu-desserts", en: "dessert-menu" },
  hours: { fr: "heures-et-adresse", en: "hours-and-address" },
  story: { fr: "notre-histoire", en: "our-story" },
  privateDining: { fr: "evenements-prives", en: "private-dining" },
  catering: { fr: "traiteur", en: "catering" },
  gallery: { fr: "galerie", en: "gallery" },
  giftCards: { fr: "cartes-cadeaux", en: "gift-cards" },
  careers: { fr: "carrieres", en: "careers" },
  faq: { fr: "faq", en: "faq" },
} as const;

export type PageKey = keyof typeof routes;
export const pageKeys = Object.keys(routes) as PageKey[];
export const menuKeys = ["lunch", "dinner", "brunch", "dineEarly", "desserts"] as const satisfies readonly PageKey[];
export type MenuKey = (typeof menuKeys)[number];

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

/** Path for a page in a language, e.g. href("en", "lunch") -> "/en/lunch-menu" */
export function href(lang: Lang, key: PageKey): string {
  const slug = routes[key][lang];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

/** Find which page a slug belongs to, in a given language. */
export function pageFromSlug(lang: Lang, slug: string): PageKey | undefined {
  return pageKeys.find((key) => routes[key][lang] === slug);
}

/** Same page, other language. Falls back to the other home page. */
export function alternateHref(lang: Lang, pathname: string): string {
  const other: Lang = lang === "fr" ? "en" : "fr";
  const slug = pathname.replace(new RegExp(`^/${lang}/?`), "").replace(/\/$/, "");
  const key = slug ? pageFromSlug(lang, slug) : "home";
  return href(other, key ?? "home");
}

export function otherLang(lang: Lang): Lang {
  return lang === "fr" ? "en" : "fr";
}
