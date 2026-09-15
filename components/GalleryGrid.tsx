"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/images";
import type { Lang } from "@/lib/routes";

type Labels = { open: string; close: string; prev: string; next: string };

export default function GalleryGrid({ photos, lang, labels }: { photos: Photo[]; lang: Lang; labels: Labels }) {
  const [current, setCurrent] = useState<number | null>(null);

  const close = useCallback(() => setCurrent(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setCurrent((c) => (c === null ? c : (c + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, close, step]);

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {photos.map((photo, i) => (
          <li key={photo.src} className={i % 7 === 0 ? "col-span-2 md:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`${labels.open}: ${photo.alt[lang]}`}
              className="group relative block w-full aspect-[16/10] overflow-hidden bg-cream-deep"
            >
              <Image
                src={photo.src}
                alt={photo.alt[lang]}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      {current !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[current].alt[lang]}
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[current].src} alt={photos[current].alt[lang]} fill sizes="100vw" className="object-contain" priority />
          </div>
          <p className="absolute bottom-6 inset-x-0 text-center text-cream/80 text-sm px-6">{photos[current].alt[lang]}</p>
          <button type="button" onClick={close} aria-label={labels.close} className="absolute top-4 right-4 text-cream text-3xl leading-none p-2 hover:text-gold">
            ×
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label={labels.prev} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-cream text-4xl p-3 hover:text-gold">
            ‹
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label={labels.next} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-cream text-4xl p-3 hover:text-gold">
            ›
          </button>
        </div>
      )}
    </>
  );
}
