"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { href, type Lang } from "@/lib/routes";
import LanguageSwitcher from "./LanguageSwitcher";
import NavPanel from "./NavPanel";

/**
 * Design 1 header.
 * Desktop: centred logo, then one row of uppercase links (Menus opens the five menus) and an outlined Réservez button.
 * Phone and tablet: logo, language, Réservez and a hamburger that opens the full-screen NavPanel.
 */
export default function Header({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu when the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while the panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const reserve = (
    <a
      href={site.links.openTable[lang]}
      target="_blank"
      rel="noopener"
      className="btn inline-flex items-center rounded-[2px] border-2 border-wine px-4 py-2.5 lg:px-6 lg:py-[11px] font-heading text-[11px] lg:text-xs font-semibold uppercase tracking-[0.16em] text-wine hover:bg-wine hover:text-cream"
    >
      {t.common.reserve}
    </a>
  );
  const menuActive = t.nav.menuItems.some((m) => href(lang, m.key) === pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream lg:static">
      {/* Phone / tablet bar */}
      <div className="flex h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:hidden">
        <Link href={href(lang, "home")} aria-label={t.nav.home} className="shrink-0">
          <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority className="h-8 sm:h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher lang={lang} />
          {reserve}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="relative block h-5 w-7"
          >
            <span className={`absolute left-0 h-[2px] w-7 bg-wine transition-all duration-300 ${open ? "top-[9px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[9px] h-[2px] w-7 bg-wine transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-[2px] w-7 bg-wine transition-all duration-300 ${open ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
          </button>
        </div>
      </div>

      {/* Desktop: centred logo over an inline nav */}
      <div className="hidden lg:flex flex-col items-center gap-[22px] px-6 pt-[30px] pb-[22px]">
        <Link href={href(lang, "home")} aria-label={t.nav.home}>
          <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority className="h-16 w-auto" />
        </Link>
        <nav aria-label={t.nav.home} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 font-heading text-xs font-semibold uppercase tracking-[0.16em]">
          <div className="group relative">
            <Link href={`${href(lang, "home")}#menus`} aria-haspopup="true" aria-current={menuActive ? "page" : undefined} className={`ul ${menuActive ? "text-wine" : "text-ink"}`}>
              {t.nav.menus} <span aria-hidden="true" className="text-gold">▾</span>
            </Link>
            <ul className="invisible absolute left-1/2 top-full z-50 mt-3 min-w-[220px] -translate-x-1/2 border border-line bg-cream py-3 opacity-0 shadow-[0_12px_30px_rgba(27,21,18,0.12)] transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
              {t.nav.menuItems.map((m) => (
                <li key={m.key}>
                  <Link href={href(lang, m.key)} aria-current={href(lang, m.key) === pathname ? "page" : undefined} className="block px-5 py-2 text-ink hover:text-wine aria-[current=page]:text-wine">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {t.nav.items.map((item) => {
            const path = href(lang, item.key);
            const active = path === pathname;
            return (
              <Link key={item.key} href={path} aria-current={active ? "page" : undefined} className={`ul ${active ? "text-wine" : "text-ink"}`}>
                {item.label}
              </Link>
            );
          })}
          <LanguageSwitcher lang={lang} />
          {reserve}
        </nav>
      </div>

      <NavPanel lang={lang} open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
