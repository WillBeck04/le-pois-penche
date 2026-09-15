import type { Menu } from "@/lib/menus";
import type { Lang } from "@/lib/routes";
import FramedSection from "./FramedSection";

function Price({ value, lang }: { value?: string | { fr: string; en: string }; lang: Lang }) {
  if (!value) return null;
  const text = typeof value === "string" ? value : value[lang];
  return <span className="shrink-0 tabular-nums text-gold font-medium">{text}</span>;
}

export default function MenuList({ menu, lang }: { menu: Menu; lang: Lang }) {
  return (
    <div className="space-y-14">
      {menu.sections.map((section) => (
        <FramedSection key={section.title[lang]} title={section.title[lang]}>
          {section.note && <p className="text-center text-ink-soft italic mb-6">{section.note[lang]}</p>}
          <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">
            {section.items.map((item) => (
              <li key={item.name[lang]} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-heading text-[15px] md:text-base font-semibold uppercase leading-snug">
                    {item.name[lang]}
                    {item.tags?.map((tag) => (
                      <span key={tag} className="ml-2 align-middle rounded-full border border-gold px-1.5 py-px text-[10px] font-medium normal-case tracking-wide text-gold">
                        {tag}
                      </span>
                    ))}
                  </span>
                  <Price value={item.price} lang={lang} />
                </div>
                {item.desc && <p className="mt-1 text-[15px] md:text-base text-ink-soft leading-snug">{item.desc[lang]}</p>}
                {item.variants && (
                  <ul className="mt-1 space-y-0.5">
                    {item.variants.map((v) => (
                      <li key={v.name[lang]} className="flex items-baseline justify-between gap-4 text-[15px] md:text-base text-ink-soft">
                        <span>{v.name[lang]}</span>
                        <Price value={v.price} lang={lang} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </FramedSection>
      ))}
    </div>
  );
}
