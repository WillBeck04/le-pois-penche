import { notFound } from "next/navigation";
import { designs } from "../data";
import Switcher from "../Switcher";
import Reveal from "../Reveal";
import D1 from "../directions/D1";
import D2 from "../directions/D2";
import D3 from "../directions/D3";
import D4 from "../directions/D4";
import D5 from "../directions/D5";
import D6 from "../directions/D6";
import D7 from "../directions/D7";
import D8 from "../directions/D8";

const pages = { 1: D1, 2: D2, 3: D3, 4: D4, 5: D5, 6: D6, 7: D7, 8: D8 } as const;

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
      <Switcher current={num} />
      <Reveal />
      <Page />
    </>
  );
}
