import type { Metadata } from "next";
import { Montserrat, Figtree, Cinzel, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import "./design.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-montserrat", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-figtree", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-cinzel", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });

export const metadata: Metadata = {
  title: "Le Pois Penché · Directions de design",
  robots: { index: false, follow: false },
};

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${montserrat.variable} ${figtree.variable} ${cinzel.variable} ${cormorant.variable}`}>
      <body className="design-body">{children}</body>
    </html>
  );
}
