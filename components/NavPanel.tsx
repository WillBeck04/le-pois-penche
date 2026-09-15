"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { content } from "@/lib/content";
import { site, fullAddress } from "@/lib/site";
import { href, type Lang } from "@/lib/routes";

export default function NavPanel({ lang, open, onClose }: { lang: Lang; open: boolean; onClose: () => void }) {
  const t = content[lang];
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      id="site-nav"
      aria-hidden={!open}
      className={`fixed inset-x-0 top-0 bottom-0 z-30 bg-cream overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(.77,0,.175,1)] ${
        open ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-28 grid gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_0.8fr]">
        {/* Menus group */}
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">{t.nav.menus}</p>
          <ul className="space-y-1">
            {t.nav.menuItems.map((item) => {
              const path = href(lang, item.key);
              return (
                <li key={item.key}>
                  <Link
                    href={path}
                    onClick={onClose}
                    aria-current={isActive(path) ? "page" : undefined}
                    className={`block font-heading text-2xl md:text-3xl font-semibold uppercase tracking-wide py-1 transition-colors hover:text-wine ${isActive(path) ? "text-wine" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Other pages */}
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">{site.name}</p>
          <ul className="space-y-1">
            {t.nav.items.map((item) => {
              const path = href(lang, item.key);
              return (
                <li key={item.key}>
                  <Link
                    href={path}
                    onClick={onClose}
                    aria-current={isActive(path) ? "page" : undefined}
                    className={`block font-heading text-lg md:text-xl font-semibold uppercase tracking-wide py-1 transition-colors hover:text-wine ${isActive(path) ? "text-wine" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact and socials */}
        <div className="text-sm text-ink-soft space-y-5 md:col-span-2 lg:col-span-1">
          <a
            href={site.links.openTable[lang]}
            target="_blank"
            rel="noopener"
            className="inline-block border-2 border-wine text-wine font-heading text-sm font-semibold uppercase tracking-[0.14em] px-6 py-3 rounded-[2px] hover:bg-wine hover:text-cream transition-colors"
          >
            {t.common.reserve}
          </a>
          <address className="not-italic leading-relaxed">
            <strong className="text-ink">{site.name}</strong>
            <br />
            {fullAddress()}
            <br />
            <a href={site.phoneHref} className="hover:text-wine">{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-wine">{site.email}</a>
          </address>
          <ul className="flex gap-5 font-heading text-xs font-semibold uppercase tracking-[0.14em]">
            <li><a href={site.links.instagram} target="_blank" rel="noopener" className="hover:text-wine">Instagram</a></li>
            <li><a href={site.links.facebook} target="_blank" rel="noopener" className="hover:text-wine">Facebook</a></li>
            <li><a href={site.links.linkedin} target="_blank" rel="noopener" className="hover:text-wine">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
