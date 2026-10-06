"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { content } from "@/lib/content";
import { alternateHref, type Lang } from "@/lib/routes";

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const t = content[lang].nav;
  return (
    <Link
      href={alternateHref(lang, pathname)}
      hrefLang={lang === "fr" ? "en-CA" : "fr-CA"}
      aria-label={t.switchLang}
      className="ul font-heading text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:text-wine transition-colors"
    >
      {t.switchLangShort}
    </Link>
  );
}
