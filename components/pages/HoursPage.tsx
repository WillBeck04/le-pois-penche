import Link from "next/link";
import { content } from "@/lib/content";
import { pageHeroes } from "@/lib/images";
import { site, fullAddress } from "@/lib/site";
import { href, type Lang } from "@/lib/routes";
import Hero from "@/components/Hero";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function HoursPage({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <Hero photo={pageHeroes.hours} lang={lang} title={t.hours.title} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid gap-14 md:grid-cols-2">
        <Reveal>
          <div className="space-y-10">
            <section>
              <h2 className="text-xl text-wine">{t.common.hoursTitle}</h2>
              <dl className="mt-5 space-y-4 text-lg">
                <div>
                  <dt className="font-heading text-sm font-semibold uppercase tracking-[0.14em]">{t.common.lunch}</dt>
                  <dd className="text-ink-soft">{t.common.lunchHours}</dd>
                </div>
                <div>
                  <dt className="font-heading text-sm font-semibold uppercase tracking-[0.14em]">{t.common.dinner}</dt>
                  <dd className="text-ink-soft">{t.common.dinnerHours1}</dd>
                  <dd className="text-ink-soft">{t.common.dinnerHours2}</dd>
                </div>
                <div>
                  <dt className="font-heading text-sm font-semibold uppercase tracking-[0.14em]">{t.common.brunch}</dt>
                  <dd className="text-ink-soft">{t.common.brunchHours}</dd>
                </div>
              </dl>
            </section>

            <section>
              <h2 className="text-xl text-wine">{site.name}</h2>
              <address className="mt-4 not-italic text-lg leading-relaxed">
                {fullAddress()}
                <br />
                <a href={site.phoneHref} className="hover:text-wine">{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`} className="hover:text-wine">{site.email}</a>
              </address>
              <p className="mt-5 text-ink-soft">
                {t.hours.contactNote}{" "}
                <Link href={href(lang, "privateDining")} className="text-wine underline underline-offset-4">{t.privateDining.title}</Link>{" "}
                {t.hours.contactNoteAnd}{" "}
                <Link href={href(lang, "catering")} className="text-wine underline underline-offset-4">{t.catering.title}</Link>
                {t.hours.contactNoteEnd}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={site.links.openTable[lang]}>{t.common.reserve}</Button>
                <Button href={site.links.googleMaps}>{t.common.directions}</Button>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-wine">{t.hours.gettingHere}</h2>
              <p className="mt-4 text-ink-soft">{t.hours.gettingHereText}</p>
            </section>

            <section>
              <h2 className="text-xl text-wine">{t.hours.parking}</h2>
              <p className="mt-4 text-ink-soft">{t.hours.parkingText}</p>
              <p className="text-ink-soft">{t.hours.parkingText2}</p>
            </section>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <MapEmbed title={`${site.name} – ${fullAddress()}`} />
        </Reveal>
      </div>
    </>
  );
}
