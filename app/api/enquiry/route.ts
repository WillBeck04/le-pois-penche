import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Receives the private-dining and catering enquiry forms and emails them.
 * Needs three secrets: RESEND_API_KEY, ENQUIRY_TO_PRIVATE, ENQUIRY_TO_CATERING.
 * Without them it answers 501 and the form falls back to opening the visitor's mail app.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const esc = (s: unknown) => String(s ?? "").replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] ?? c);

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toPrivate = process.env.ENQUIRY_TO_PRIVATE;
  const toCatering = process.env.ENQUIRY_TO_CATERING;
  const from = process.env.ENQUIRY_FROM ?? "Le Pois Penché <site@lepoispenche.com>";

  if (!apiKey || !toPrivate || !toCatering) {
    return NextResponse.json({ ok: false, configured: false }, { status: 501 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Honeypot filled in: silently accept so bots stop trying
  if (body.website) return NextResponse.json({ ok: true });

  const kind = body.kind === "catering" ? "catering" : "private";
  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  if (!name || !email || !phone || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const fields: [string, string | undefined][] = [
    ["Nom / Name", name],
    ["Compagnie / Company", body.company],
    ["Téléphone / Phone", phone],
    ["Courriel / Email", email],
    ["Date", body.date],
    ["Heure / Time", body.time],
    ["Adresse / Address", body.address],
    ["Type d'événement / Event type", body.eventType],
    ["Type de service / Service type", body.serviceType],
    ["Invités / Guests", body.guests],
    ["Autres infos / Other", body.other],
    ["Langue / Language", body.lang],
  ];

  const rows = fields
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#5c4f47;white-space:nowrap;vertical-align:top"><strong>${esc(k)}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join("");

  const subject = kind === "catering" ? `Demande traiteur / Catering request — ${name}` : `Demande événement privé / Private dining request — ${name}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: kind === "catering" ? toCatering : toPrivate,
      replyTo: email,
      subject,
      html: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#1b1512"><h2 style="color:#800008">${esc(subject)}</h2><table>${rows}</table></div>`,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("enquiry email failed", e);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
