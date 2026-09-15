"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Frame = { src: string; label: string; cap: string };

/** Left column of design 8: cross-fades between photos as the right column's sections scroll past. */
export default function PinnedGallery({ frames }: { frames: Frame[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-index]"));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.index));
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -20% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {frames.map((f, i) => (
        <div key={f.src} style={{ position: "absolute", inset: 0, opacity: i === active ? 1 : 0, transition: "opacity 0.9s ease" }} aria-hidden={i !== active}>
          <Image src={f.src} alt={f.cap} fill priority={i === 0} sizes="50vw" className="img" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,21,18,0.5) 0%, rgba(27,21,18,0) 25%, rgba(27,21,18,0) 75%, rgba(27,21,18,0.6) 100%)" }} />
          <div style={{ position: "absolute", left: 32, bottom: 36, color: "#FBF6E6", display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", opacity: 0.85 }}>{f.label}</span>
            <span style={{ fontSize: 16, fontStyle: "italic", opacity: 0.85 }}>{f.cap}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
