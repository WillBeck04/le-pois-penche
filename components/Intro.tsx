"use client";

import { useEffect, useState } from "react";

const TEXT = "Le Pois Penché";
const KEY = "lpp-intro-seen";

/**
 * Opening curtain: types "Le Pois Penché" letter by letter, holds, then slides up to reveal the page.
 * Once per browser session. A click or any key skips it. Reduced-motion visitors never see it.
 * Renders nothing on the server, so search engines always get the page itself.
 */
export default function Intro({ tagline }: { tagline: string }) {
  const [phase, setPhase] = useState<"hidden" | "typing" | "hold" | "leaving" | "done">("hidden");
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {}
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPhase("typing");
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    if (count >= TEXT.length) { const t = setTimeout(() => setPhase("hold"), 220); return () => clearTimeout(t); }
    const delay = TEXT[count] === " " ? 90 : 34 + Math.random() * 30;
    const t = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [phase, count]);

  useEffect(() => {
    if (phase !== "hold") return;
    const t = setTimeout(() => setPhase("leaving"), 420);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      try { sessionStorage.setItem(KEY, "1"); } catch {}
    }, 800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing" && phase !== "hold") return;
    const skip = () => setPhase("leaving");
    window.addEventListener("click", skip);
    window.addEventListener("keydown", skip);
    return () => { window.removeEventListener("click", skip); window.removeEventListener("keydown", skip); };
  }, [phase]);

  if (phase === "hidden" || phase === "done") return null;

  const leaving = phase === "leaving";
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex cursor-pointer items-center justify-center bg-cream"
      style={{ transform: leaving ? "translateY(-100%)" : "none", transition: "transform 0.8s cubic-bezier(.76,0,.24,1)" }}
    >
      <div className="flex w-full flex-col items-center gap-[22px] px-7 text-center" style={{ opacity: leaving ? 0 : 1, transition: "opacity 0.5s" }}>
        <span className="inline-flex items-baseline whitespace-pre font-heading font-semibold leading-none text-wine" style={{ fontSize: "clamp(26px, 8vw, 84px)", letterSpacing: "0.02em" }}>
          {TEXT.slice(0, count)}
          <span className="ml-[0.08em] inline-block bg-gold" style={{ width: "0.06em", height: "0.95em", transform: "translateY(0.1em)", animation: "lpp-blink 0.9s steps(1) infinite" }} />
        </span>
        <span
          className="max-w-[340px] font-heading text-[11px] font-semibold uppercase leading-[1.9] tracking-[0.34em] text-gold"
          style={{ opacity: count >= TEXT.length ? 1 : 0, transition: "opacity 0.6s" }}
        >
          {tagline}
        </span>
      </div>
      <style>{`@keyframes lpp-blink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }`}</style>
    </div>
  );
}
