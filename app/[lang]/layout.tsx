import type { Metadata } from "next";
import { Montserrat, Figtree } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { isLang, langs, type Lang } from "@/lib/routes";
import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { restaurantSchema } from "@/lib/schema";

import AddressStrip from "@/components/AddressStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Announcement from "@/components/Announcement";
import ConsentBanner from "@/components/ConsentBanner";
import JsonLd from "@/components/JsonLd";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-montserrat", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
};

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang: Lang = raw;
  const t = content[lang];

  return (
    <html lang={lang === "fr" ? "fr-CA" : "en-CA"} className={`${montserrat.variable} ${figtree.variable}`}>
      <body className="min-h-screen flex flex-col pb-16">
        <JsonLd data={restaurantSchema(lang)} />
        <AddressStrip />
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <StickyBar lang={lang} />
        <Announcement lang={lang} />
        <ConsentBanner text={t.common.consent} gaId={site.analytics.ga4} />
      </body>
    </html>
  );
}
