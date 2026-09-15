import type { Metadata } from "next";
import { metadataByLang } from "./metadata";
import { href, type Lang, type PageKey } from "./routes";
import { site } from "./site";

/** Builds the <head> tags for a page: title, description, canonical, hreflang and Open Graph. */
export function buildMetadata(lang: Lang, key: PageKey): Metadata {
  const m = metadataByLang[lang][key];
  const fr = `${site.url}${href("fr", key)}`;
  const en = `${site.url}${href("en", key)}`;
  const canonical = lang === "fr" ? fr : en;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: { "fr-CA": fr, "en-CA": en, "x-default": fr },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      siteName: site.name,
      locale: lang === "fr" ? "fr_CA" : "en_CA",
      alternateLocale: lang === "fr" ? "en_CA" : "fr_CA",
      type: "website",
      images: [{ url: m.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [m.ogImage],
    },
  };
}
