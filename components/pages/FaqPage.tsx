import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import FaqAccordion from "@/components/FaqAccordion";
import FramedSection from "@/components/FramedSection";
import JsonLd from "@/components/JsonLd";

export default function FaqPage({ lang }: { lang: Lang }) {
  const t = content[lang].faq;
  return (
    <>
      <JsonLd data={faqSchema(lang)} />
      <Hero photo={pageHeroes.faq} lang={lang} title={t.title} eyebrow={site.name} />
      <div data-reveal className="mx-auto max-w-4xl px-4 py-16 sm:px-8 md:py-24">
        <FramedSection title={t.heading}>
          <FaqAccordion items={t.items} />
        </FramedSection>
      </div>
    </>
  );
}
