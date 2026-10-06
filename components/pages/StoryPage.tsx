import Image from "next/image";
import { content } from "@/lib/content";
import { gallery, pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";

export default function StoryPage({ lang }: { lang: Lang }) {
  const t = content[lang].story;
  const [first, ...rest] = t.paragraphs;
  const closing = rest.pop();
  const photos = [gallery.find((p) => p.src.includes("11-salle"))!, gallery.find((p) => p.src.includes("05-cuisine"))!];
  return (
    <>
      <Hero photo={pageHeroes.story} lang={lang} title={t.title} eyebrow={`${site.name} · ${content[lang].common.since} ${site.founded}`} />

      <section data-reveal className="mx-auto grid max-w-[1440px] items-start gap-x-[90px] gap-y-8 px-6 py-16 sm:px-12 md:grid-cols-2 md:py-24 lg:px-[120px]">
        <p className="font-heading text-[clamp(24px,2.8vw,40px)] font-semibold uppercase leading-[1.08] text-wine">{t.pullQuote}</p>
        <p className="text-[17px] leading-[1.6] md:text-[clamp(18px,1.5vw,21px)]">{first}</p>
      </section>

      <section data-stagger className="grid gap-1.5 md:grid-cols-2">
        {photos.map((p) => (
          <div key={p.src} className="lift relative aspect-[4/3]">
            <Image src={p.src} alt={p.alt[lang]} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      <article data-reveal className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-[17px] leading-[1.65] md:py-24 md:text-[19px]">
        {rest.map((p, i) => <p key={i}>{p}</p>)}
        {closing && <p className="pt-4 font-heading text-base font-semibold uppercase tracking-[0.16em] text-wine">{closing}</p>}
      </article>
    </>
  );
}
