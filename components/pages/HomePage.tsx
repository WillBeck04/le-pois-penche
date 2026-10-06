import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { homeHero, homeBand, homeStrip, homeTerrace, homeCellier, dishPhotos, type Photo } from "@/lib/images";
import { menus, type MenuItem } from "@/lib/menus";
import { href, menuKeys, type Lang, type MenuKey } from "@/lib/routes";
import HeroCarousel from "@/components/HeroCarousel";
import FramedSection from "@/components/FramedSection";
import Button from "@/components/Button";

// Signature dishes on the home page. Names and prices are read from lib/menus.ts so they never drift from the menus.
const signature: { menu: MenuKey; name: string; photo: Photo }[] = [
  { menu: "dinner", name: "Soupe à l'oignon gratinée au Louis d'Or", photo: dishPhotos.soupe },
  { menu: "dinner", name: "Le Parisien (2 pers.)", photo: dishPhotos.parisien },
  { menu: "dinner", name: "Canard confit", photo: dishPhotos.canard },
  { menu: "dinner", name: "La côte de bœuf « Prime Canadien » (32 oz)", photo: dishPhotos.cote },
];

function findDish(menu: MenuKey, frName: string): MenuItem | undefined {
  for (const section of menus[menu].sections) {
    const item = section.items.find((i) => i.name.fr === frName);
    if (item) return item;
  }
}

export default function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const h = t.home;

  return (
    <>
      <HeroCarousel photos={homeHero} lang={lang} captionLeft={h.captionLeft} captionRight={h.captionRight} />

      {/* Statement */}
      <section data-reveal className="mx-auto grid max-w-[1440px] items-start gap-x-[90px] gap-y-8 px-6 py-16 sm:px-12 md:grid-cols-2 md:py-[clamp(72px,9vw,130px)] lg:px-[120px]">
        <h1 className="text-[clamp(30px,4.2vw,60px)] leading-[1.04] text-wine">{h.blurb1Title}</h1>
        <div className="flex flex-col gap-7 md:pt-2">
          <p className="text-[17px] leading-[1.6] md:text-[clamp(18px,1.5vw,21px)]">{h.blurb1}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={site.links.openTable[lang]} variant="solid">{h.reserveTable}</Button>
            <Button href="#menus">{t.common.seeMenus}</Button>
          </div>
        </div>
      </section>

      {/* Press band */}
      <section className="border-y border-cream/20 bg-wine py-[22px] text-cream" aria-label={lang === "fr" ? "Presse" : "Press"}>
        <div className="marquee">
          <div>
            {[...h.press, ...h.press].map((p, i) => (
              <span key={i} aria-hidden={i >= h.press.length} className="inline-flex items-center gap-7 px-7 font-heading text-xs font-semibold uppercase tracking-[0.26em]">
                <span className="text-[#E4C98F]">{p.source}</span>
                <span className="font-body text-[17px] font-normal normal-case italic tracking-normal">« {p.quote} »</span>
                <span className="text-[#E4C98F]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Three-photo band */}
      <section data-stagger className="grid gap-1.5 pt-1.5 md:grid-cols-3">
        {homeBand.map((p) => (
          <div key={p.src} className="lift relative aspect-[4/3]">
            <Image src={p.src} alt={p.alt[lang]} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      {/* Signature dishes */}
      <div data-reveal className="mx-auto max-w-[1440px] px-4 pt-20 sm:px-12 md:pt-[clamp(72px,9vw,120px)] lg:px-[120px]">
        <FramedSection title={h.dishesTitle}>
          <div data-stagger className="grid grid-cols-2 gap-x-4 gap-y-7 md:gap-7 lg:grid-cols-4">
            {signature.map((d) => {
              const item = findDish(d.menu, d.name);
              if (!item) return null;
              return (
                <Link key={d.name} href={href(lang, d.menu)} className="group flex flex-col gap-3">
                  <div className="lift relative aspect-[4/3]">
                    <Image src={d.photo.src} alt={d.photo.alt[lang]} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-heading text-[12px] md:text-[13px] font-semibold uppercase leading-[1.3] group-hover:text-wine">{item.name[lang]}</span>
                    {typeof item.price === "string" && <span className="text-[17px] font-medium text-gold">{item.price}</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </FramedSection>
      </div>

      {/* Menus */}
      <div id="menus" data-reveal className="mx-auto max-w-[1440px] scroll-mt-24 px-4 pt-16 sm:px-12 md:pt-[clamp(64px,8vw,100px)] lg:px-[120px]">
        <FramedSection title={h.menusTitle}>
          <div className="grid gap-x-[72px] gap-y-7 md:grid-cols-2">
            {menuKeys.map((key) => (
              <div key={key} className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <Link href={href(lang, key)} className="ul font-heading text-[19px] font-semibold uppercase text-ink hover:text-wine">{menus[key].title[lang]}</Link>
                  <span className="text-[15px] text-gold">{key === "desserts" ? h.dessertsWhen : menus[key].subtitle?.[lang]}</span>
                </div>
                <p className="text-base leading-[1.55] text-ink-soft">{h.menuBlurbs[key]}</p>
              </div>
            ))}
            <div className="flex items-end">
              <a href={site.links.pickup} target="_blank" rel="noopener" className="ul font-heading text-xs font-semibold uppercase tracking-[0.18em] text-wine">{t.common.order}</a>
            </div>
          </div>
        </FramedSection>
      </div>

      {/* Le Cellier: full-bleed photo with a cream card (on phones the card sits under the photo) */}
      <section data-reveal className="relative mt-20 md:mt-[clamp(72px,9vw,120px)] md:h-[min(720px,85vh)] md:overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
          <div className="plx absolute inset-x-0 -inset-y-[12%]" data-speed="0.14">
            <Image src={homeCellier.src} alt={homeCellier.alt[lang]} fill sizes="100vw" className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(27,21,18,0.35)_0%,rgba(27,21,18,0)_60%)] md:block" />
        <div className="relative flex flex-col gap-4 border-l-4 border-wine bg-cream p-7 md:absolute md:bottom-[clamp(24px,6vw,72px)] md:left-[clamp(20px,6vw,96px)] md:w-[min(560px,calc(100%-40px))] md:p-11">
          <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">{h.cellierEyebrow}</span>
          <h2 className="text-[clamp(22px,2.4vw,32px)] leading-[1.08] text-wine">{h.cellierTitle}</h2>
          <p className="text-[17px] leading-[1.6] text-ink-soft">{h.cellier}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={href(lang, "privateDining")}>{t.privateDining.request}</Button>
            <Link href={href(lang, "catering")} className="ul self-center font-heading text-xs font-semibold uppercase tracking-[0.18em] text-wine">{h.cellierCatering}</Link>
          </div>
        </div>
      </section>

      {/* Hours + terrace */}
      <section data-reveal className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 bg-cream-deep px-6 py-14 sm:px-12 md:px-[clamp(24px,7vw,96px)] md:py-[clamp(48px,7vw,96px)]">
          <h2 className="text-[clamp(24px,2.6vw,34px)] text-wine">{t.hours.title}</h2>
          <div className="grid gap-x-8 gap-y-5 text-[17px] leading-normal sm:grid-cols-2 2xl:grid-cols-3">
            {[
              { label: t.common.lunch, lines: [t.common.lunchHours] },
              { label: t.common.dinner, lines: [t.common.dinnerHours1, t.common.dinnerHours2] },
              { label: t.common.brunch, lines: [t.common.brunchHours] },
            ].map((x) => (
              <div key={x.label}>
                <span className="mb-1 block font-heading text-xs font-semibold uppercase tracking-[0.16em]">{x.label}</span>
                {x.lines.map((l) => <span key={l} className="block text-ink-soft">{l}</span>)}
              </div>
            ))}
          </div>
          <p className="text-[17px] leading-[1.6] text-ink-soft">{site.address.street}, {site.address.city}. {h.location}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={site.links.openTable[lang]} variant="solid">{t.common.reserve}</Button>
            <Button href={site.links.googleMaps}>{t.common.directions}</Button>
          </div>
        </div>
        <div className="lift relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
          <Image src={homeTerrace.src} alt={h.terraceAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Photo strip */}
      <section data-stagger className="grid grid-cols-3 gap-1.5 pt-1.5 lg:grid-cols-6">
        {homeStrip.map((p) => (
          <Link key={p.src} href={href(lang, "gallery")} className="lift relative aspect-square">
            <Image src={p.src} alt={p.alt[lang]} fill sizes="(min-width: 1024px) 16vw, 33vw" className="object-cover" />
          </Link>
        ))}
      </section>
    </>
  );
}
