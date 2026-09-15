import Image from "next/image";
import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import EnquiryForm from "@/components/EnquiryForm";
import FramedSection from "@/components/FramedSection";
import Reveal from "@/components/Reveal";

export default function PrivateDiningPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <>
      <Hero photo={pageHeroes.privateDining} lang={lang} title={t.privateDining.title} />

      <Reveal>
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <p className="text-lg md:text-xl leading-relaxed">{t.privateDining.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={site.links.brochure}>{t.privateDining.brochure}</Button>
            <Button href="#enquiry-private" variant="solid">{t.privateDining.request}</Button>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="relative aspect-[16/9] max-h-[70vh] w-full overflow-hidden">
          <Image src={pageHeroes.privateDining2.src} alt={pageHeroes.privateDining2.alt[lang]} fill sizes="100vw" className="object-cover object-center" />
        </div>
      </Reveal>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 space-y-16">
        <Reveal>
          <FramedSection title={t.privateDining.floorPlans}>
            <div className="relative mx-auto max-w-3xl aspect-[4/3]">
              <Image src={pageHeroes.floorPlan.src} alt={t.privateDining.floorPlanAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-contain" />
            </div>
          </FramedSection>
        </Reveal>

        <Reveal>
          <FramedSection title={t.form.title}>
            <EnquiryForm lang={lang} kind="private" />
          </FramedSection>
        </Reveal>
      </div>
    </>
  );
}
