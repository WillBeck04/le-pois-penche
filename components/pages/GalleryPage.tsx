import { content } from "@/lib/content";
import { gallery, pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage({ lang }: { lang: Lang }) {
  const t = content[lang].gallery;
  const hero = gallery.find((p) => p.src.includes("11-salle")) ?? pageHeroes.hours;
  return (
    <>
      <Hero photo={hero} lang={lang} title={t.title} eyebrow={site.name} />
      <p data-reveal className="mx-auto max-w-2xl px-6 pt-14 pb-10 text-center text-[17px] text-ink-soft md:text-[19px]">{t.intro}</p>
      <div className="pb-1.5">
        <GalleryGrid photos={gallery} lang={lang} labels={{ open: t.open, close: t.close, prev: t.prev, next: t.next }} />
      </div>
    </>
  );
}
