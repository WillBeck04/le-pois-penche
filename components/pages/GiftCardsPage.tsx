import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import FramedSection from "@/components/FramedSection";

export default function GiftCardsPage({ lang }: { lang: Lang }) {
  const t = content[lang].giftCards;
  return (
    <>
      <Hero photo={pageHeroes.giftCards} lang={lang} title={t.title} eyebrow={site.name} />
      <div data-reveal className="mx-auto max-w-3xl px-4 py-20 sm:px-8 md:py-28">
        <FramedSection title={t.title}>
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="font-heading text-[clamp(20px,2.2vw,28px)] font-semibold uppercase leading-[1.15] text-wine">{t.tagline}</p>
            <Button href={site.links.giftCards} variant="solid">{t.buy}</Button>
            <p className="text-ink-soft">{t.inStore}</p>
          </div>
        </FramedSection>
      </div>
    </>
  );
}
