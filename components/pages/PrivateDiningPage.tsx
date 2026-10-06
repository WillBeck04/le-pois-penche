import Image from "next/image";
import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import EnquiryForm from "@/components/EnquiryForm";
import FramedSection from "@/components/FramedSection";

export default function PrivateDiningPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <>
      <Hero photo={pageHeroes.privateDining} lang={lang} title={t.privateDining.title} eyebrow={site.name} />

      <section data-reveal className="mx-auto grid max-w-[1440px] items-start gap-x-[90px] gap-y-8 px-6 py-16 sm:px-12 md:grid-cols-2 md:py-24 lg:px-[120px]">
        <p className="font-heading text-[clamp(24px,2.8vw,40px)] font-semibold uppercase leading-[1.08] text-wine">{t.privateDining.headline}</p>
        <div className="flex flex-col gap-7">
          <p className="text-[17px] leading-[1.6] md:text-[19px]">{t.privateDining.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="#enquiry-private" variant="solid">{t.privateDining.request}</Button>
            <Button href={site.links.brochure}>{t.privateDining.brochure}</Button>
          </div>
        </div>
      </section>

      <section data-reveal className="grid bg-cream-deep md:grid-cols-2">
        <div className="lift relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
          <Image src={pageHeroes.privateDining2.src} alt={pageHeroes.privateDining2.alt[lang]} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 px-6 py-12 md:px-12">
          <h2 className="text-[clamp(22px,2.4vw,32px)] text-wine">{t.privateDining.floorPlans}</h2>
          <div className="relative aspect-[4/3] w-full max-w-xl bg-cream">
            <Image src={pageHeroes.floorPlan.src} alt={t.privateDining.floorPlanAlt} fill sizes="(min-width: 768px) 576px, 100vw" className="object-contain" />
          </div>
        </div>
      </section>

      <div data-reveal className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24">
        <FramedSection title={t.form.title}>
          <EnquiryForm lang={lang} kind="private" />
        </FramedSection>
      </div>
    </>
  );
}
