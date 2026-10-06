"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Page motion, run once per page view:
 * - fades in [data-reveal] blocks and staggers the children of [data-stagger] as they scroll into view
 * - drives a soft parallax on .plx elements (data-speed sets the strength)
 * Without JavaScript, or with reduced motion, everything simply shows.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    document.documentElement.classList.add("motion");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("in");
      else io.observe(el);
    });

    const plx = Array.from(document.querySelectorAll<HTMLElement>(".plx"));
    let raf = 0;
    const onScroll = () => {
      if (!plx.length) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        plx.forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const speed = Number(el.dataset.speed ?? 0.14);
          el.style.setProperty("--py", String(-(r.top + r.height / 2 - vh / 2) * speed));
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
