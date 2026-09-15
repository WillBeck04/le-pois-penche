import { content } from "@/lib/content";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";

/** Two buttons pinned to the bottom of every page: Reserve (OpenTable) and Get our news. */
export default function StickyBar({ lang }: { lang: Lang }) {
  const t = content[lang].common;
  const newsletter = site.links.newsletter;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-wine text-cream">
      <div className="mx-auto max-w-7xl grid grid-cols-2 gap-px bg-cream/30">
        <a
          href={site.links.openTable[lang]}
          target="_blank"
          rel="noopener"
          className="bg-wine hover:bg-wine-deep transition-colors text-center font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] py-4"
        >
          {t.reserve}
        </a>
        {newsletter ? (
          <a
            href={newsletter}
            target="_blank"
            rel="noopener"
            className="bg-wine hover:bg-wine-deep transition-colors text-center font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] py-4"
          >
            {t.news}
          </a>
        ) : (
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(t.news)}`}
            className="bg-wine hover:bg-wine-deep transition-colors text-center font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] py-4"
          >
            {t.news}
          </a>
        )}
      </div>
    </div>
  );
}
