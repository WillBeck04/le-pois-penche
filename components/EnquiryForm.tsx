"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/lib/content";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import Button from "./Button";

export type EnquiryKind = "private" | "catering";

const field = "w-full rounded-[2px] border border-line bg-cream px-3 py-2.5 text-ink focus:border-wine focus:outline-none";
const label = "block font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft mb-1";

export default function EnquiryForm({ lang, kind }: { lang: Lang; kind: EnquiryKind }) {
  const t = content[lang].form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind, lang }),
      });
      if (res.status === 501) {
        // Email sending is not configured yet: open the visitor's mail app with the details prefilled.
        const body = Object.entries(data)
          .filter(([k]) => k !== "website")
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${t.title} (${kind})`)}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p role="status" className="rounded-[2px] border border-gold bg-cream-deep px-5 py-4 text-ink">{t.success}</p>;
  }

  return (
    <form id={`enquiry-${kind}`} onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <p className="sm:col-span-2 text-ink-soft">{t.intro}</p>

      {/* Honeypot: bots fill this, people never see it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`website-${kind}`}>Website</label>
        <input id={`website-${kind}`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor={`name-${kind}`} className={label}>{t.name} *</label>
        <input id={`name-${kind}`} name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor={`company-${kind}`} className={label}>{t.company}</label>
        <input id={`company-${kind}`} name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor={`phone-${kind}`} className={label}>{t.phone} *</label>
        <input id={`phone-${kind}`} name="phone" type="tel" required autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor={`email-${kind}`} className={label}>{t.email} *</label>
        <input id={`email-${kind}`} name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor={`date-${kind}`} className={label}>{t.date}</label>
        <input id={`date-${kind}`} name="date" type="date" className={field} />
      </div>
      <div>
        <label htmlFor={`time-${kind}`} className={label}>{t.time}</label>
        <input id={`time-${kind}`} name="time" type="time" step={900} className={field} />
      </div>

      {kind === "catering" && (
        <div className="sm:col-span-2">
          <label htmlFor="address-catering" className={label}>{t.address}</label>
          <input id="address-catering" name="address" autoComplete="street-address" className={field} />
        </div>
      )}

      <div>
        <label htmlFor={`eventType-${kind}`} className={label}>{t.eventType}</label>
        <select id={`eventType-${kind}`} name="eventType" className={field} defaultValue="">
          <option value="" disabled>—</option>
          {t.eventTypes.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      {kind === "catering" ? (
        <div>
          <label htmlFor="serviceType-catering" className={label}>{t.serviceType}</label>
          <select id="serviceType-catering" name="serviceType" className={field} defaultValue="">
            <option value="" disabled>—</option>
            {t.serviceTypes.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      ) : null}

      <div>
        <label htmlFor={`guests-${kind}`} className={label}>{t.guests}</label>
        <input id={`guests-${kind}`} name="guests" type="number" min={1} max={kind === "private" ? 120 : 1000} className={field} />
        {kind === "private" && <p className="mt-1 text-xs text-ink-soft">{t.guestsHint}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`other-${kind}`} className={label}>{t.other}</label>
        <textarea id={`other-${kind}`} name="other" rows={5} className={field} />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <Button type="submit" variant="solid" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.send}
        </Button>
        {status === "error" && (
          <p role="alert" className="text-wine">
            {t.error} <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
          </p>
        )}
      </div>
    </form>
  );
}
