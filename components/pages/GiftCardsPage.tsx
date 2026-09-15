import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function GiftCardsPage({ lang }: { lang: Lang }) {
  const t = content[lang].giftCards;
  return (
    <>
      <Hero photo={pageHeroes.giftCards} lang={lang} title={t.title} />
      <Reveal>
        <section className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-2xl md:text-3xl text-wine">{t.tagline}</h2>
          <div className="mt-10">
            <Button href={site.links.giftCards} variant="solid">{t.buy}</Button>
          </div>
          <p className="mt-6 text-ink-soft">{t.inStore}</p>
        </section>
      </Reveal>
    </>
  );
}
