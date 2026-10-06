import Image from "next/image";
import type { Photo } from "@/lib/images";
import type { Lang } from "@/lib/routes";

/**
 * Design 1 page hero: full-bleed photo with a slow Ken Burns settle, a dark fade at the bottom,
 * and the page title in cream capitals over it. Photos are 16:9 with the subject centred, so cover/center crops safely on phones.
 */
export default function Hero({ photo, lang, title, subtitle, eyebrow }: { photo: Photo; lang: Lang; title?: string; subtitle?: string; eyebrow?: string }) {
  return (
    <section className="relative h-[clamp(340px,58svh,640px)] w-full overflow-hidden bg-ink">
      <Image src={photo.src} alt={photo.alt[lang]} fill priority sizes="100vw" className="kb object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,21,18,0.05)_35%,rgba(27,21,18,0.68)_100%)]" />
      {title && (
        <div className="rise absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-5 pb-[clamp(28px,5vw,56px)] text-center text-cream">
          {eyebrow && <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E4C98F]">{eyebrow}</span>}
          <h1 className="text-[clamp(32px,5vw,64px)] leading-[1.02] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">{title}</h1>
          {subtitle && <p className="max-w-2xl font-heading text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-cream/85">{subtitle}</p>}
        </div>
      )}
    </section>
  );
}
