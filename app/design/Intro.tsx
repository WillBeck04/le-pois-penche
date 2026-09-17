"use client";

import { useEffect, useState } from "react";

const TEXT = "Le Pois Penché";
const KEY = "lpp-intro-seen";

type Palette = { bg: string; ink: string; accent: string; font: string };

/**
 * Opening curtain: types "Le Pois Penché" letter by letter, holds, then slides away to reveal the page.
 * Runs once per browser session. A click or any key skips it. Reduced-motion users never see it.
 */
export default function Intro({ palette }: { palette: Palette }) {
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
    const ch = TEXT[count];
    const delay = ch === " " ? 90 : 34 + Math.random() * 30;
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
    const t = setTimeout(() => { setPhase("done"); document.body.style.overflow = ""; try { sessionStorage.setItem(KEY, "1"); } catch {} }, 800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "hidden" || phase === "done" || phase === "leaving") return;
    const skip = () => setPhase("leaving");
    window.addEventListener("click", skip);
    window.addEventListener("keydown", skip);
    return () => { window.removeEventListener("click", skip); window.removeEventListener("keydown", skip); };
  }, [phase]);

  if (phase === "hidden" || phase === "done") return null;

  const leaving = phase === "leaving";
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 200, background: palette.bg, display: "flex", alignItems: "center", justifyContent: "center", transform: leaving ? "translateY(-100%)" : "none", transition: "transform 0.8s cubic-bezier(.76,0,.24,1)", cursor: "pointer" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22, width: "100%", padding: "0 28px", boxSizing: "border-box", textAlign: "center", opacity: leaving ? 0 : 1, transition: "opacity 0.5s" }}>
        <span style={{ fontFamily: palette.font, fontSize: "clamp(26px, 8vw, 84px)", fontWeight: 600, letterSpacing: "0.02em", color: palette.ink, lineHeight: 1, whiteSpace: "pre", display: "inline-flex", alignItems: "baseline" }}>
          {TEXT.slice(0, count)}
          <span style={{ display: "inline-block", width: "0.06em", height: "0.95em", marginLeft: "0.08em", background: palette.accent, transform: "translateY(0.1em)", animation: "lpp-blink 0.9s steps(1) infinite" }} />
        </span>
        <span style={{ fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.34em", lineHeight: 1.9, maxWidth: 340, color: palette.accent, opacity: count >= TEXT.length ? 1 : 0, transition: "opacity 0.6s" }}>Brasserie parisienne · Montréal · depuis 2008</span>
      </div>
      <style>{`@keyframes lpp-blink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }`}</style>
    </div>
  );
}
