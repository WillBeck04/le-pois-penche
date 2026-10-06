import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { href, type Lang } from "@/lib/routes";

const linkCls = "ul self-start hover:text-wine";

/** Design 1 footer: logo and address, hours, links, socials, then the burgundy Réservez / Nouvelles bar. */
export default function Footer({ lang }: { lang: Lang }) {
  const t = content[lang];
  const year = new Date().getFullYear();
  const newsHref = site.links.newsletter || `mailto:${site.email}?subject=${encodeURIComponent(t.common.news)}`;

  return (
    <footer className="border-t-[3px] border-wine bg-cream">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pt-14 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-24 text-[15px] leading-relaxed text-ink-soft">
        <div>
          <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} className="mb-4 h-[34px] w-auto" />
          <address className="not-italic">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
            <br />
            <a href={site.phoneHref} className="hover:text-wine">{site.phone}</a> · <a href={`mailto:${site.email}`} className="hover:text-wine">{site.email}</a>
          </address>
          <a href={site.links.googleMaps} target="_blank" rel="noopener" className="ul mt-4 inline-block font-heading text-xs font-semibold uppercase tracking-[0.16em] text-wine">
            {t.common.directions}
          </a>
        </div>

        <div>
          <p className="mb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{t.common.hoursTitle}</p>
          <dl className="space-y-2">
            <div><dt className="font-semibold text-ink">{t.common.lunch}</dt><dd>{t.common.lunchHours}</dd></div>
            <div><dt className="font-semibold text-ink">{t.common.dinner}</dt><dd>{t.common.dinnerHours1}</dd><dd>{t.common.dinnerHours2}</dd></div>
            <div><dt className="font-semibold text-ink">{t.common.brunch}</dt><dd>{t.common.brunchHours}</dd></div>
          </dl>
        </div>

        <ul className="flex flex-col gap-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-ink">
          <li><a href={site.links.openTable[lang]} target="_blank" rel="noopener" className={linkCls}>{t.common.reserve}</a></li>
          <li><a href={site.links.pickup} target="_blank" rel="noopener" className={linkCls}>{t.common.order}</a></li>
          <li><Link href={href(lang, "giftCards")} className={linkCls}>{t.giftCards.title}</Link></li>
          <li><Link href={href(lang, "privateDining")} className={linkCls}>{t.privateDining.title}</Link></li>
          <li><Link href={href(lang, "catering")} className={linkCls}>{t.catering.title}</Link></li>
          <li><Link href={href(lang, "careers")} className={linkCls}>{t.careers.title}</Link></li>
          <li><Link href={href(lang, "faq")} className={linkCls}>{t.faq.title}</Link></li>
        </ul>

        <div className="flex flex-col gap-2">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{t.common.followUs}</p>
          <ul className="flex flex-col gap-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            <li><a href={site.links.instagram} target="_blank" rel="noopener" className={linkCls}>Instagram</a></li>
            <li><a href={site.links.facebook} target="_blank" rel="noopener" className={linkCls}>Facebook</a></li>
            <li><a href={site.links.linkedin} target="_blank" rel="noopener" className={linkCls}>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-2 border-t border-line px-6 py-4 text-xs text-ink-soft lg:px-24">
        <span>© {year} {site.name}. {t.common.rights}</span>
        <a href={site.links.privacy[lang]} target="_blank" rel="noopener" className="hover:text-wine">{t.common.privacy}</a>
      </div>

      {/* The same two buttons as the sticky bar; StickyBar hides itself when this one is on screen */}
      <div id="footer-bar" className="grid grid-cols-2 bg-wine text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-cream">
        <a href={site.links.openTable[lang]} target="_blank" rel="noopener" className="border-r border-cream/30 py-5 hover:bg-wine-deep">{t.common.reserve}</a>
        <a href={newsHref} target={site.links.newsletter ? "_blank" : undefined} rel="noopener" className="py-5 hover:bg-wine-deep">{t.common.news}</a>
      </div>
    </footer>
  );
}
