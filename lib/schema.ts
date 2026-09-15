// Builders for schema.org JSON-LD. Google reads these to show hours, menus and FAQs in search results.

import { site, fullAddress } from "./site";
import { content } from "./content";
import { menus } from "./menus";
import { href, routes, type Lang, type MenuKey, type PageKey } from "./routes";

const abs = (path: string) => `${site.url}${path}`;

export function restaurantSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    url: abs(href(lang, "home")),
    image: [abs("/images/og/home.jpg"), abs("/images/og/dinner.jpg"), abs("/images/og/brunch.jpg")],
    logo: abs("/logo/le-pois-penche.png"),
    telephone: "+1-514-667-5050",
    email: site.email,
    foundingDate: site.founded,
    servesCuisine: ["French", "Brasserie", "Seafood", "Steakhouse"],
    priceRange: "$$$",
    acceptsReservations: site.links.openTable[lang],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMenu: (Object.keys(menus) as MenuKey[]).map((key) => abs(href(lang, key))),
    sameAs: [site.links.instagram, site.links.facebook, site.links.linkedin, site.links.openTable[lang]],
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: site.links.openTable[lang], inLanguage: lang === "fr" ? "fr-CA" : "en-CA" },
      result: { "@type": "Reservation", name: lang === "fr" ? "Réservation de table" : "Table reservation" },
    },
  };
}

export function menuSchema(key: MenuKey, lang: Lang) {
  const menu = menus[key];
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${abs(href(lang, key))}#menu`,
    name: `${menu.title[lang]} | ${site.name}`,
    description: menu.intro[lang],
    inLanguage: lang === "fr" ? "fr-CA" : "en-CA",
    url: abs(href(lang, key)),
    hasMenuSection: menu.sections.map((section) => ({
      "@type": "MenuSection",
      name: section.title[lang],
      hasMenuItem: section.items.map((item) => {
        const price = typeof item.price === "string" && /^[\d.]+$/.test(item.price) ? item.price : undefined;
        return {
          "@type": "MenuItem",
          name: item.name[lang],
          ...(item.desc ? { description: item.desc[lang] } : {}),
          ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "CAD" } } : {}),
        };
      }),
    })),
  };
}

export function faqSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content[lang].faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(lang: Lang, key: PageKey, label: string) {
  if (key === "home") return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: abs(href(lang, "home")) },
      { "@type": "ListItem", position: 2, name: label, item: abs(`/${lang}/${routes[key][lang]}`) },
    ],
  };
}

export { fullAddress };
