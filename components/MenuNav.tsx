import Link from "next/link";
import { content } from "@/lib/content";
import { href, type Lang, type MenuKey } from "@/lib/routes";

/** Links to the five menus, with the current one highlighted. */
export default function MenuNav({ lang, current }: { lang: Lang; current?: MenuKey }) {
  const items = content[lang].nav.menuItems;
  return (
    <nav aria-label={content[lang].nav.menus} className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {items.map((item) => {
        const active = item.key === current;
        return (
          <Link
            key={item.key}
            href={href(lang, item.key)}
            aria-current={active ? "page" : undefined}
            className={`font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.16em] py-2 border-b-2 transition-colors ${
              active ? "text-wine border-wine" : "text-ink border-transparent hover:text-wine"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
