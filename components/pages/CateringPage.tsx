import Image from "next/image";
import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import EnquiryForm from "@/components/EnquiryForm";
import FramedSection from "@/components/FramedSection";

export default function CateringPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <>
      <Hero photo={pageHeroes.catering} lang={lang} title={t.catering.title} eyebrow={site.name} />

      <section data-reveal className="mx-auto grid max-w-[1440px] items-start gap-x-[90px] gap-y-8 px-6 py-16 sm:px-12 md:grid-cols-2 md:py-24 lg:px-[120px]">
        <p className="font-heading text-[clamp(24px,2.8vw,40px)] font-semibold uppercase leading-[1.08] text-wine">{t.catering.headline}</p>
        <div className="flex flex-col gap-7">
          <p className="text-[17px] leading-[1.6] md:text-[19px]">{t.catering.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="#enquiry-catering" variant="solid">{t.catering.request}</Button>
            <Button href={site.links.cateringMenu[lang]}>{t.catering.menuPdf}</Button>
          </div>
        </div>
      </section>

      <div data-reveal className="lift relative aspect-[16/9] max-h-[75vh] w-full overflow-hidden">
        <Image src={pageHeroes.catering2.src} alt={pageHeroes.catering2.alt[lang]} fill sizes="100vw" className="object-cover" />
      </div>

      <div data-reveal className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24">
        <FramedSection title={t.form.title}>
          <EnquiryForm lang={lang} kind="catering" />
        </FramedSection>
      </div>
    </>
  );
}
