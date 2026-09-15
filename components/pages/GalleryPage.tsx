import { content } from "@/lib/content";
import { gallery } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage({ lang }: { lang: Lang }) {
  const t = content[lang].gallery;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl text-wine">{t.title}</h1>
        <p className="mt-4 text-ink-soft">{t.intro}</p>
      </header>
      <GalleryGrid photos={gallery} lang={lang} labels={{ open: t.open, close: t.close, prev: t.prev, next: t.next }} />
    </div>
  );
}
