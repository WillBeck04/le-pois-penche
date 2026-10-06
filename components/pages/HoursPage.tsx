import Link from "next/link";
import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site, fullAddress } from "@/lib/site";
import { href, type Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";

const label = "mb-1 block font-heading text-xs font-semibold uppercase tracking-[0.16em] text-ink";

export default function HoursPage({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <Hero photo={pageHeroes.hours} lang={lang} title={t.hours.title} eyebrow={site.name} />

      <section data-reveal className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-7 bg-cream-deep px-6 py-14 sm:px-12 md:px-[clamp(24px,7vw,96px)] md:py-[clamp(48px,7vw,96px)]">
          <h2 className="text-[clamp(24px,2.6vw,34px)] text-wine">{t.common.hoursTitle}</h2>
          <div className="grid gap-x-8 gap-y-5 text-[17px] leading-normal sm:grid-cols-2 2xl:grid-cols-3">
            <div><span className={label}>{t.common.lunch}</span><span className="text-ink-soft">{t.common.lunchHours}</span></div>
            <div><span className={label}>{t.common.dinner}</span><span className="block text-ink-soft">{t.common.dinnerHours1}</span><span className="block text-ink-soft">{t.common.dinnerHours2}</span></div>
            <div><span className={label}>{t.common.brunch}</span><span className="text-ink-soft">{t.common.brunchHours}</span></div>
          </div>
          <address className="not-italic text-[17px] leading-relaxed">
            <span className={label}>{site.name}</span>
            {fullAddress()}
            <br />
            <a href={site.phoneHref} className="hover:text-wine">{site.phone}</a> · <a href={`mailto:${site.email}`} className="hover:text-wine">{site.email}</a>
          </address>
          <div className="flex flex-wrap gap-3">
            <Button href={site.links.openTable[lang]} variant="solid">{t.common.reserve}</Button>
            <Button href={site.links.googleMaps}>{t.common.directions}</Button>
          </div>
        </div>
        <MapEmbed title={`${site.name} – ${fullAddress()}`} className="min-h-[360px] md:min-h-[480px]" />
      </section>

      <section data-reveal className="mx-auto grid max-w-[1440px] gap-x-[90px] gap-y-10 px-6 py-16 sm:px-12 md:grid-cols-3 md:py-24 lg:px-[120px]">
        <div className="flex flex-col gap-3">
          <h2 className="text-[22px] text-wine">{t.hours.gettingHere}</h2>
          <p className="text-ink-soft">{t.hours.gettingHereText}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[22px] text-wine">{t.hours.parking}</h2>
          <p className="text-ink-soft">{t.hours.parkingText}</p>
          <p className="text-ink-soft">{t.hours.parkingText2}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[22px] text-wine">{t.privateDining.title} · {t.catering.title}</h2>
          <p className="text-ink-soft">
            {t.hours.contactNote}{" "}
            <Link href={href(lang, "privateDining")} className="text-wine underline underline-offset-4">{t.privateDining.title}</Link>{" "}
            {t.hours.contactNoteAnd}{" "}
            <Link href={href(lang, "catering")} className="text-wine underline underline-offset-4">{t.catering.title}</Link>
            {t.hours.contactNoteEnd}
          </p>
        </div>
      </section>
    </>
  );
}
