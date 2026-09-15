"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { content } from "@/lib/content";
import { href, type Lang } from "@/lib/routes";
import LanguageSwitcher from "./LanguageSwitcher";
import NavPanel from "./NavPanel";

export default function Header({ lang }: { lang: Lang }) {
  const t = content[lang].nav;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu when the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while the panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-line">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 h-[72px] md:h-[88px]">
        <Link href={href(lang, "home")} aria-label={t.home} className="shrink-0">
          <Image
            src="/logo/le-pois-penche.png"
            alt="Le Pois Penché"
            width={1200}
            height={253}
            priority
            className="h-9 md:h-12 w-auto"
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <LanguageSwitcher lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? t.closeMenu : t.openMenu}
            className="group flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:text-wine transition-colors"
          >
            <span className="hidden md:inline">{open ? t.closeMenu.split(" ")[0] : "Menu"}</span>
            <span className="relative block h-5 w-7" aria-hidden="true">
              <span className={`absolute left-0 h-[2px] w-7 bg-wine transition-all duration-300 ${open ? "top-[9px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[9px] h-[2px] w-7 bg-wine transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-[2px] w-7 bg-wine transition-all duration-300 ${open ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
            </span>
          </button>
        </div>
      </div>

      <NavPanel lang={lang} open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
