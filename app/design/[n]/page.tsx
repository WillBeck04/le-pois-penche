import { notFound } from "next/navigation";
import { designs } from "../data";
import Switcher from "../Switcher";
import Reveal from "../Reveal";
import Intro from "../Intro";
import D1 from "../directions/D1";
import D2 from "../directions/D2";
import D3 from "../directions/D3";
import D4 from "../directions/D4";
import D5 from "../directions/D5";
import D6 from "../directions/D6";
import D7 from "../directions/D7";
import D8 from "../directions/D8";

const pages = { 1: D1, 2: D2, 3: D3, 4: D4, 5: D5, 6: D6, 7: D7, 8: D8 } as const;

// Intro curtain colours per direction so the typing screen matches the page behind it
const M = "var(--font-montserrat), sans-serif";
const palettes = {
  1: { bg: "#FBF6E6", ink: "#800008", accent: "#B8955A", font: M },
  2: { bg: "#F7F0DF", ink: "#7A0A12", accent: "#B8955A", font: "var(--font-cinzel), Georgia, serif" },
  3: { bg: "#14100E", ink: "#F1E8D5", accent: "#C9A96A", font: M },
  4: { bg: "#F9F4E8", ink: "#221A16", accent: "#800008", font: "var(--font-cormorant), Georgia, serif" },
  5: { bg: "#FAF8F2", ink: "#111111", accent: "#800008", font: M },
  6: { bg: "#800008", ink: "#FBF6E6", accent: "#E4C98F", font: M },
  7: { bg: "#FFFDF8", ink: "#B5121B", accent: "#1B1512", font: M },
  8: { bg: "#FBF6E6", ink: "#800008", accent: "#B8955A", font: M },
} as const;

export function generateStaticParams() {
  return designs.map((d) => ({ n: String(d.n) }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const d = designs.find((x) => String(x.n) === n);
  return { title: d ? `${d.n} · ${d.name} — Le Pois Penché` : "Le Pois Penché" };
}

export default async function DesignPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const num = Number(n) as keyof typeof pages;
  const Page = pages[num];
  if (!Page) notFound();
  return (
    <>
      <Intro palette={palettes[num]} />
      <Switcher current={num} />
      <Reveal />
      <Page />
    </>
  );
}
