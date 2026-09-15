import Link from "next/link";

import { content } from "@/lib/content";
import { site, fullAddress } from "@/lib/site";
import { href, type Lang } from "@/lib/routes";

export default function Footer({ lang }: { lang: Lang }) {
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t-[3px] border-wine bg-cream-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold uppercase text-wine">{site.name}</p>
          <address className="not-italic mt-3 leading-relaxed text-ink-soft">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
            <br />
            <a href={site.phoneHref} className="hover:text-wine">{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-wine">{site.email}</a>
          </address>
          <a
            href={site.links.googleMaps}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block font-heading text-xs font-semibold uppercase tracking-[0.14em] text-wine hover:underline underline-offset-4"
          >
            {t.common.directions}
          </a>
        </div>

        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t.common.hoursTitle}</p>
          <dl className="mt-3 space-y-2 text-ink-soft">
            <div>
              <dt className="font-semibold text-ink">{t.common.lunch}</dt>
              <dd>{t.common.lunchHours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">{t.common.dinner}</dt>
              <dd>{t.common.dinnerHours1}</dd>
              <dd>{t.common.dinnerHours2}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">{t.common.brunch}</dt>
              <dd>{t.common.brunchHours}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-6">
          <ul className="space-y-2 font-heading text-xs font-semibold uppercase tracking-[0.14em]">
            <li><a href={site.links.openTable[lang]} target="_blank" rel="noopener" className="hover:text-wine">{t.common.reserve}</a></li>
            <li><a href={site.links.pickup} target="_blank" rel="noopener" className="hover:text-wine">{t.common.order}</a></li>
            <li><Link href={href(lang, "giftCards")} className="hover:text-wine">{t.giftCards.title}</Link></li>
            <li><Link href={href(lang, "privateDining")} className="hover:text-wine">{t.privateDining.title}</Link></li>
            <li><Link href={href(lang, "catering")} className="hover:text-wine">{t.catering.title}</Link></li>
            <li><Link href={href(lang, "careers")} className="hover:text-wine">{t.careers.title}</Link></li>
          </ul>
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t.common.followUs}</p>
            <ul className="mt-2 flex gap-5 font-heading text-xs font-semibold uppercase tracking-[0.14em]">
              <li><a href={site.links.instagram} target="_blank" rel="noopener" className="hover:text-wine">Instagram</a></li>
              <li><a href={site.links.facebook} target="_blank" rel="noopener" className="hover:text-wine">Facebook</a></li>
              <li><a href={site.links.linkedin} target="_blank" rel="noopener" className="hover:text-wine">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-wine text-cream/90 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-wrap justify-between gap-2">
          <span>© {year} {site.name}. {t.common.rights}</span>
          <a href={site.links.privacy[lang]} target="_blank" rel="noopener" className="hover:underline underline-offset-4">
            {t.common.privacy}
          </a>
        </div>
      </div>
      <span className="sr-only">{fullAddress()}</span>
    </footer>
  );
}
