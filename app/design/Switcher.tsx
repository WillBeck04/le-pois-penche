import Link from "next/link";
import { designs } from "./data";

export default function Switcher({ current }: { current: number }) {
  const d = designs.find((x) => x.n === current);
  return (
    <nav className="dswitch" aria-label="Directions de design">
      <Link href="/design" className="dname">{d ? `${current} · ${d.name}` : "Directions"}</Link>
      {designs.map((x) => (
        <Link key={x.n} href={`/${x.slug}`} aria-current={x.n === current ? "page" : undefined}>{x.n}</Link>
      ))}
    </nav>
  );
}
