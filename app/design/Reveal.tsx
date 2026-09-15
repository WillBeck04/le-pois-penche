"use client";

import { useEffect } from "react";

/**
 * Motion for the design directions:
 * - adds "in" to [data-reveal] and [data-stagger] as they scroll into view
 * - drives a soft parallax on .plx elements via the --py custom property
 * - cross-fades .xfade children on a timer
 */
export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("in"); else io.observe(el); });

    const plx = Array.from(document.querySelectorAll<HTMLElement>(".plx"));
    let raf = 0;
    const onScroll = () => {
      if (reduce || !plx.length) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        plx.forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const speed = Number(el.dataset.speed ?? 0.18);
          const centre = r.top + r.height / 2 - vh / 2;
          el.style.setProperty("--py", String(-centre * speed));
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const fades = Array.from(document.querySelectorAll<HTMLElement>(".xfade"));
    const timers = fades.map((f) => {
      const kids = Array.from(f.children) as HTMLElement[];
      if (kids.length < 2 || reduce) return 0;
      let i = 0;
      return window.setInterval(() => { kids[i].classList.remove("on"); i = (i + 1) % kids.length; kids[i].classList.add("on"); }, Number(f.dataset.interval ?? 5500));
    });

    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); timers.forEach((t) => t && clearInterval(t)); };
  }, []);
  return null;
}
