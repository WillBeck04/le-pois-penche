"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "lpp-consent";

/** Quebec Law 25: analytics only load after the visitor accepts. */
export default function ConsentBanner({ text, gaId }: { text: { text: string; accept: string; decline: string }; gaId: string }) {
  const [choice, setChoice] = useState<"unknown" | "accepted" | "declined">("unknown");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "accepted" || saved === "declined") setChoice(saved);
    } catch {}
    setReady(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    try { localStorage.setItem(KEY, value); } catch {}
    setChoice(value);
  }

  return (
    <>
      {choice === "accepted" && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {ready && choice === "unknown" && (
        <div role="region" aria-label="Cookies" className="fixed bottom-16 inset-x-3 sm:inset-x-auto sm:right-4 sm:max-w-sm z-40 rounded-[2px] border border-line bg-cream shadow-lg p-4 text-sm">
          <p className="text-ink-soft">{text.text}</p>
          <div className="mt-3 flex gap-3">
            <button type="button" onClick={() => decide("accepted")} className="rounded-[2px] bg-wine px-4 py-2 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-cream hover:bg-wine-deep">
              {text.accept}
            </button>
            <button type="button" onClick={() => decide("declined")} className="rounded-[2px] border border-line px-4 py-2 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-ink hover:border-wine">
              {text.decline}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
