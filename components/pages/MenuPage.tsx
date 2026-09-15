import { content } from "@/lib/content";
import { menus } from "@/lib/menus";
import { menuSchema } from "@/lib/schema";
import type { Lang, MenuKey } from "@/lib/routes";
import Hero from "@/components/Hero";
import MenuNav from "@/components/MenuNav";
import MenuList from "@/components/MenuList";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";

export default function MenuPage({ lang, menuKey }: { lang: Lang; menuKey: MenuKey }) {
  const menu = menus[menuKey];
  const t = content[lang];

  return (
    <>
      <JsonLd data={menuSchema(menuKey, lang)} />
      <Hero photo={{ src: menu.hero, alt: menu.heroAlt }} lang={lang} title={menu.title[lang]} subtitle={menu.subtitle?.[lang]} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="py-8 border-b border-line">
          <MenuNav lang={lang} current={menuKey} />
        </div>

        <Reveal>
          <p className="mx-auto max-w-3xl py-12 text-center text-lg md:text-xl leading-relaxed">{menu.intro[lang]}</p>
        </Reveal>

        <MenuList menu={menu} lang={lang} />

        <p className="mt-10 text-center text-sm text-ink-soft">{t.common.pricesNote}</p>

        <div className="mt-16 pt-8 border-t border-line">
          <p className="mb-4 text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t.common.otherMenus}</p>
          <MenuNav lang={lang} current={menuKey} />
        </div>
      </div>
    </>
  );
}
