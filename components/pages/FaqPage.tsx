import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { faqSchema } from "@/lib/schema";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export default function FaqPage({ lang }: { lang: Lang }) {
  const t = content[lang].faq;
  return (
    <>
      <JsonLd data={faqSchema(lang)} />
      <Hero photo={pageHeroes.faq} lang={lang} title={t.title} />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <FaqAccordion items={t.items} />
      </section>
    </>
  );
}
