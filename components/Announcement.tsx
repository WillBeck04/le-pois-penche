"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Button from "./Button";

const KEY = "lpp-announcement-dismissed";

/** Pop-up for events. Turn it on in lib/content.ts: announcement.enabled = true. */
export default function Announcement({ lang }: { lang: Lang }) {
  const a = content[lang].announcement;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!a.enabled) return;
    try {
      if (sessionStorage.getItem(KEY) === a.title) return;
    } catch {}
    const id = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(id);
  }, [a.enabled, a.title]);

  if (!show) return null;

  const dismiss = () => {
    try { sessionStorage.setItem(KEY, a.title); } catch {}
    setShow(false);
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="announcement-title" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 animate-fade-in" onClick={dismiss}>
      <div className="relative w-full max-w-md rounded-[4px] bg-cream p-8 text-center shadow-2xl border-[3px] border-wine" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={dismiss} aria-label={a.close} className="absolute top-2 right-3 text-2xl leading-none text-ink-soft hover:text-wine">×</button>
        <h2 id="announcement-title" className="text-2xl text-wine">{a.title}</h2>
        <p className="mt-4 text-ink-soft">{a.body}</p>
        <div className="mt-6">
          <Button href={a.href || site.links.openTable[lang]} variant="solid">{a.cta}</Button>
        </div>
      </div>
    </div>
  );
}
