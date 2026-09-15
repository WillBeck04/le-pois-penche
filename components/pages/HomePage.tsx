import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { homeCarousel, homeBlurbs } from "@/lib/images";
import { menus } from "@/lib/menus";
import { href, menuKeys, type Lang } from "@/lib/routes";
import HeroCarousel from "@/components/HeroCarousel";
import Reveal from "@/components/Reveal";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <HeroCarousel photos={homeCarousel} lang={lang} />

      {/* Blurb 1 */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <h1 className="text-2xl md:text-4xl text-wine">{t.home.blurb1Title}</h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed">{t.home.blurb1}</p>
        </section>
      </Reveal>

      {/* Photos 6-8 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {homeBlurbs.slice(0, 3).map((photo, i) => (
          <Reveal key={photo.src} delay={i * 120}>
            <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden">
              <Image src={photo.src} alt={photo.alt[lang]} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-center" />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Blurb 2 */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-2xl md:text-4xl text-wine">{t.home.blurb2Title}</h2>
          <p className="mt-8 text-lg md:text-xl leading-relaxed">{t.home.blurb2}</p>
        </section>
      </Reveal>

      {/* Menus */}
      <section className="relative">
        <div className="relative h-[60svh] min-h-[360px] overflow-hidden">
          <Image src={homeBlurbs[3].src} alt={homeBlurbs[3].alt[lang]} fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-cream text-3xl md:text-5xl">{t.home.menusTitle}</h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {menuKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={href(lang, key)}
                    className="inline-block border-2 border-cream text-cream rounded-[2px] px-5 py-3 font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-cream hover:text-wine transition-colors"
                  >
                    {menus[key].title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
