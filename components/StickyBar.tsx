"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";

/**
 * Réservez + Recevez nos nouvelles, pinned to the bottom of every page (client doc).
 * It slides away when the identical bar at the bottom of the footer comes into view, so the two never stack.
 */
export default function StickyBar({ lang }: { lang: Lang }) {
  const t = content[lang].common;
  const [hidden, setHidden] = useState(false);
  const newsHref = site.links.newsletter || `mailto:${site.email}?subject=${encodeURIComponent(t.news)}`;

  useEffect(() => {
    const target = document.getElementById("footer-bar");
    if (!target) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0 });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 bg-wine text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-[0_-6px_20px_rgba(27,21,18,0.15)] transition-transform duration-300 ${hidden ? "translate-y-full" : ""}`}
    >
      <a href={site.links.openTable[lang]} target="_blank" rel="noopener" tabIndex={hidden ? -1 : undefined} className="border-r border-cream/30 py-4 hover:bg-wine-deep">
        {t.reserve}
      </a>
      <a href={newsHref} target={site.links.newsletter ? "_blank" : undefined} rel="noopener" tabIndex={hidden ? -1 : undefined} className="py-4 hover:bg-wine-deep">
        {t.news}
      </a>
    </div>
  );
}
