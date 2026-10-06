import Image from "next/image";
import { content } from "@/lib/content";
import { gallery, pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import FramedSection from "@/components/FramedSection";

export default function CareersPage({ lang }: { lang: Lang }) {
  const t = content[lang].careers;
  const side = gallery.find((p) => p.src.includes("07-maitre-d-hotel"))!;
  return (
    <>
      <Hero photo={pageHeroes.careers} lang={lang} title={t.title} eyebrow={site.name} />

      <div data-reveal className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24">
        <FramedSection title={t.reasonsTitle}>
          <ol data-stagger className="mx-auto max-w-3xl space-y-5">
            {t.reasons.map((r, i) => (
              <li key={r} className="flex gap-5 text-[17px] leading-relaxed md:text-lg">
                <span className="shrink-0 font-heading text-sm font-semibold text-gold">0{i + 1}</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <Button href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(t.title)}`} variant="solid">{t.sendCv}</Button>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-wine">{t.closing}</p>
          </div>
        </FramedSection>
      </div>

      <div data-reveal className="lift relative aspect-[16/9] max-h-[70vh] w-full">
        <Image src={side.src} alt={side.alt[lang]} fill sizes="100vw" className="object-cover" />
      </div>
    </>
  );
}
