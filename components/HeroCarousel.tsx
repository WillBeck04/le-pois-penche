"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Photo } from "@/lib/images";
import type { Lang } from "@/lib/routes";

const INTERVAL_MS = 6000;

/** Textless full-screen slideshow (Le Rock style). Cross-fades every 6 s with a slow zoom. */
export default function HeroCarousel({ photos, lang }: { photos: Photo[]; lang: Lang }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <section className="relative w-full h-[calc(100svh-120px)] min-h-[420px] overflow-hidden bg-ink" aria-roledescription="carousel">
      {photos.map((photo, i) => {
        const active = i === index;
        return (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={!active}
          >
            <Image
              src={photo.src}
              alt={photo.alt[lang]}
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className={`object-cover object-center ${active ? "animate-kenburns" : ""}`}
            />
          </div>
        );
      })}
      <ol className="absolute bottom-5 inset-x-0 flex justify-center gap-2" aria-label="Slides">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1} / ${photos.length}`}
              aria-current={i === index}
              className={`block h-2 w-2 rounded-full transition-colors ${i === index ? "bg-cream" : "bg-cream/40 hover:bg-cream/70"}`}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
