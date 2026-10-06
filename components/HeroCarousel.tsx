"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Photo } from "@/lib/images";
import type { Lang } from "@/lib/routes";

const INTERVAL_MS = 5000;

/** Design 1 home hero: textless cross-fade slideshow with a slow zoom, and a caption bar along the bottom. */
export default function HeroCarousel({ photos, lang, captionLeft, captionRight }: { photos: Photo[]; lang: Lang; captionLeft: string; captionRight: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <section className="relative h-[min(75svh,620px)] min-h-[420px] w-full overflow-hidden bg-ink lg:h-[calc(100svh-190px)] lg:max-h-[860px] lg:min-h-[520px]" aria-roledescription="carousel">
      {photos.map((photo, i) => {
        const active = i === index;
        return (
          <div key={photo.src} className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${active ? "opacity-100" : "opacity-0"}`} aria-hidden={!active}>
            <Image
              src={photo.src}
              alt={photo.alt[lang]}
              fill
              priority={i < 2}
              loading={i < 2 ? "eager" : "lazy"}
              sizes="100vw"
              className={`object-cover ${active ? "kb" : ""}`}
              style={{ objectPosition: "center 55%" }}
            />
          </div>
        );
      })}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,21,18,0)_55%,rgba(27,21,18,0.6)_100%)]" />
      <div className="rise absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 px-5 pb-6 sm:px-12 sm:pb-11 font-heading text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-cream">
        <span>{captionLeft}</span>
        <span className="hidden opacity-80 sm:inline">{captionRight}</span>
      </div>
      <ol className="absolute right-5 top-5 flex gap-2 sm:right-12 sm:top-auto sm:bottom-[76px]" aria-label="Slides">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1} / ${photos.length}`}
              aria-current={i === index}
              className={`block h-[3px] w-6 transition-colors ${i === index ? "bg-cream" : "bg-cream/40 hover:bg-cream/70"}`}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
