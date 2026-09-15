import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function CareersPage({ lang }: { lang: Lang }) {
  const t = content[lang].careers;
  return (
    <>
      <Hero photo={pageHeroes.careers} lang={lang} title={t.title} />
      <Reveal>
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="text-center">
            <Button href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(t.title)}`} variant="solid">{t.sendCv}</Button>
          </div>
          <h2 className="mt-16 text-2xl md:text-3xl text-wine text-center">{t.reasonsTitle}</h2>
          <ol className="mt-8 space-y-4 text-lg leading-relaxed">
            {t.reasons.map((r) => (
              <li key={r} className="flex gap-4">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{r}</span>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center font-heading text-wine uppercase text-base tracking-[0.14em]">{t.closing}</p>
        </section>
      </Reveal>
    </>
  );
}
