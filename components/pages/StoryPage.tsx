import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export default function StoryPage({ lang }: { lang: Lang }) {
  const t = content[lang].story;
  return (
    <>
      <Hero photo={pageHeroes.story} lang={lang} title={t.title} />
      <Reveal>
        <article className="mx-auto max-w-3xl px-6 py-16 md:py-24 space-y-6 text-lg md:text-xl leading-relaxed">
          {t.paragraphs.map((p, i) => (
            <p key={i} className={i === t.paragraphs.length - 1 ? "font-heading text-wine uppercase text-base tracking-[0.14em] pt-4" : ""}>
              {p}
            </p>
          ))}
        </article>
      </Reveal>
    </>
  );
}
