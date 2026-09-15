import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLang, langs, pageFromSlug, pageKeys, routes, type Lang, type PageKey } from "@/lib/routes";
import { buildMetadata } from "@/lib/buildMetadata";
import { content } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

import MenuPage from "@/components/pages/MenuPage";
import HoursPage from "@/components/pages/HoursPage";
import StoryPage from "@/components/pages/StoryPage";
import PrivateDiningPage from "@/components/pages/PrivateDiningPage";
import CateringPage from "@/components/pages/CateringPage";
import GalleryPage from "@/components/pages/GalleryPage";
import GiftCardsPage from "@/components/pages/GiftCardsPage";
import CareersPage from "@/components/pages/CareersPage";
import FaqPage from "@/components/pages/FaqPage";

/** Pre-render every page in both languages at build time. */
export function generateStaticParams() {
  return langs.flatMap((lang) =>
    pageKeys.filter((key) => key !== "home").map((key) => ({ lang, slug: routes[key][lang] })),
  );
}

export const dynamicParams = false;

async function resolve(params: Promise<{ lang: string; slug: string }>): Promise<{ lang: Lang; key: PageKey } | null> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return null;
  const key = pageFromSlug(lang, slug);
  if (!key || key === "home") return null;
  return { lang, key };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  return buildMetadata(r.lang, r.key);
}

function pageTitle(lang: Lang, key: PageKey): string {
  const t = content[lang];
  const nav = [...t.nav.menuItems, ...t.nav.items].find((i) => i.key === key);
  return nav?.label ?? key;
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const r = await resolve(params);
  if (!r) notFound();
  const { lang, key } = r;

  let page;
  switch (key) {
    case "lunch":
    case "dinner":
    case "brunch":
    case "dineEarly":
    case "desserts":
      page = <MenuPage lang={lang} menuKey={key} />;
      break;
    case "hours":
      page = <HoursPage lang={lang} />;
      break;
    case "story":
      page = <StoryPage lang={lang} />;
      break;
    case "privateDining":
      page = <PrivateDiningPage lang={lang} />;
      break;
    case "catering":
      page = <CateringPage lang={lang} />;
      break;
    case "gallery":
      page = <GalleryPage lang={lang} />;
      break;
    case "giftCards":
      page = <GiftCardsPage lang={lang} />;
      break;
    case "careers":
      page = <CareersPage lang={lang} />;
      break;
    case "faq":
      page = <FaqPage lang={lang} />;
      break;
    default:
      notFound();
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema(lang, key, pageTitle(lang, key))} />
      {page}
    </>
  );
}
