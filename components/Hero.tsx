import Image from "next/image";
import type { Photo } from "@/lib/images";
import type { Lang } from "@/lib/routes";

/** Full-bleed photo with an optional title. Photos are 16:9 with the subject centred, so cover/center crops safely on phones. */
export default function Hero({
  photo,
  lang,
  title,
  subtitle,
  tall = false,
}: {
  photo: Photo;
  lang: Lang;
  title?: string;
  subtitle?: string;
  tall?: boolean;
}) {
  return (
    <section className={`relative w-full overflow-hidden ${tall ? "h-[calc(100svh-120px)] min-h-[420px]" : "h-[52svh] min-h-[320px] md:h-[62svh]"}`}>
      <Image
        src={photo.src}
        alt={photo.alt[lang]}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center animate-kenburns"
      />
      {title && (
        <div className="absolute inset-0 bg-ink/45 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase drop-shadow">
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-cream/90 text-base md:text-lg max-w-2xl">{subtitle}</p>}
        </div>
      )}
    </section>
  );
}
