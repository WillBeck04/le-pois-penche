import { content } from "@/lib/content";
import { menus } from "@/lib/menus";
import { menuSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import type { Lang, MenuKey } from "@/lib/routes";
import Hero from "@/components/Hero";
import MenuNav from "@/components/MenuNav";
import MenuList from "@/components/MenuList";
import JsonLd from "@/components/JsonLd";
import Button from "@/components/Button";

export default function MenuPage({ lang, menuKey }: { lang: Lang; menuKey: MenuKey }) {
  const menu = menus[menuKey];
  const t = content[lang];

  return (
    <>
      <JsonLd data={menuSchema(menuKey, lang)} />
      <Hero photo={{ src: menu.hero, alt: menu.heroAlt }} lang={lang} title={menu.title[lang]} subtitle={menu.subtitle?.[lang]} eyebrow={t.nav.menus} />

      <div className="border-b border-line bg-cream px-4 py-5">
        <MenuNav lang={lang} current={menuKey} />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div data-reveal className="mx-auto flex max-w-3xl flex-col items-center gap-7 py-14 text-center md:py-20">
          <p className="text-[17px] leading-[1.6] md:text-[19px]">{menu.intro[lang]}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={site.links.openTable[lang]} variant="solid">{t.common.reserve}</Button>
            {menuKey !== "dineEarly" && <Button href={site.links.pickup}>{t.common.order}</Button>}
          </div>
        </div>

        <MenuList menu={menu} lang={lang} />

        <p className="mt-10 text-center text-sm text-ink-soft">{t.common.pricesNote}</p>
      </div>

      <div className="mt-16 border-t border-line bg-cream-deep px-4 py-10 md:mt-24">
        <p className="mb-4 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">{t.common.otherMenus}</p>
        <MenuNav lang={lang} current={menuKey} />
      </div>
    </>
  );
}
