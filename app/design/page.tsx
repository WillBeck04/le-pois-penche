import Image from "next/image";
import Link from "next/link";
import { designs, img } from "./data";

const heroes: Record<number, string> = {
  1: img.salleRouge, 2: img.facade, 3: img.barNuit, 4: img.table, 5: img.salle, 6: img.chefCrabe, 7: img.terrasse, 8: img.salleSoir,
};

export default function DesignIndex() {
  return (
    <main style={{ background: "#FBF6E6", color: "#1B1512", minHeight: "100vh", padding: "64px 24px 96px" }}>
      <div className="wrap" style={{ maxWidth: 1200 }}>
        <p className="h" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: "#B8955A", margin: 0 }}>Le Pois Penché · Site web 2026</p>
        <h1 className="h" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#800008", margin: "12px 0 8px", lineHeight: 1.05 }}>Huit directions pour la page d&apos;accueil</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#5C4F47", maxWidth: 720, margin: "0 0 40px" }}>
          Chaque direction est une vraie page, avec les textes, les menus, les prix et les photos du restaurant. Cliquez pour l&apos;ouvrir en plein écran. Le petit sélecteur en haut permet de passer de l&apos;une à l&apos;autre.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {designs.map((d) => (
            <li key={d.n}>
              <Link href={`/${d.slug}`} style={{ display: "block", color: "inherit", textDecoration: "none", border: "1px solid #DDD2B8", background: "#fff", overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "16/10" }}>
                  <Image src={heroes[d.n]} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" className="img" style={{ filter: d.theme === "dark" ? "brightness(0.7)" : "none" }} />
                  <span className="h" style={{ position: "absolute", left: 14, top: 14, background: "#800008", color: "#FBF6E6", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", padding: "6px 10px" }}>{d.n}</span>
                </div>
                <div style={{ padding: "16px 18px 20px" }}>
                  <h2 className="h" style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#800008" }}>{d.name}</h2>
                  <p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.5, color: "#5C4F47" }}>{d.tagline}</p>
                  <span className="h" style={{ display: "inline-block", marginTop: 12, fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", color: "#800008", borderBottom: "2px solid #800008", paddingBottom: 2 }}>Ouvrir /{d.slug}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
