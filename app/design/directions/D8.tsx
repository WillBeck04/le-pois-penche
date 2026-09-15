import Image from "next/image";
import { copy, hours, img, menus, press, OPENTABLE } from "../data";
import PinnedGallery from "./PinnedGallery";

// 8 · Vitrine — split screen with a pinned photo that swaps on scroll
const C = { cream: "#FBF6E6", ink: "#1B1512", soft: "#4A3F39", wine: "#800008", gold: "#B8955A", line: "#DDD2B8" };
const h = (extra: React.CSSProperties = {}): React.CSSProperties => ({ fontFamily: "var(--font-montserrat)", textTransform: "uppercase", ...extra });
const eye = h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: C.gold });
const row: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px 0", borderTop: `1px solid ${C.line}`, gap: 16, flexWrap: "wrap" };
const frames = [
  { src: img.salleRouge, label: "01 · La salle", cap: "Velours rouge, nappes blanches, joie de vivre" },
  { src: img.chefCrabe, label: "02 · La cuisine", cap: "Le chef Josserand et le plateau de fruits de mer" },
  { src: img.cellierTable, label: "03 · Le Cellier", cap: "De 20 à 80 convives" },
  { src: img.terrasse, label: "04 · La terrasse", cap: "Au printemps et en été, si la météo le permet" },
];

export default function D8() {
  return (
    <main style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))" }}>
      <div className="d8-left" style={{ background: C.ink, overflow: "hidden" }}>
        <PinnedGallery frames={frames} />
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ position: "absolute", top: 40, left: 32, height: 48, width: "auto", filter: "brightness(0) invert(1) opacity(0.95)", zIndex: 2 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <nav style={h({ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "36px clamp(20px, 4vw, 56px) 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", flexWrap: "wrap" })}>
          <div style={{ display: "flex", gap: "6px 20px", flexWrap: "wrap" }}>{["Menus", "Heures", "Histoire", "Événements", "Traiteur"].map((n) => <a key={n} href="#" style={{ color: C.ink, textDecoration: "none" }}>{n}</a>)}</div>
          <a href={OPENTABLE} style={{ border: `2px solid ${C.wine}`, color: C.wine, padding: "10px 18px", textDecoration: "none" }}>Réservez</a>
        </nav>

        <section data-index="0" style={{ display: "flex", flexDirection: "column", gap: 24, padding: "clamp(80px, 12vh, 170px) clamp(20px, 4vw, 56px) 120px" }}>
          <span style={eye}>Brasserie parisienne · depuis 2008</span>
          <h1 style={h({ margin: 0, fontSize: "clamp(32px, 3.8vw, 54px)", fontWeight: 700, lineHeight: 1.02, color: C.wine, textWrap: "balance" })}>{copy.welcomeTitle}</h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: C.soft }}>{copy.welcome}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", background: C.wine, color: C.cream, padding: "16px 28px", textDecoration: "none" })}>Réservez</a><a href="#" style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", border: `2px solid ${C.wine}`, color: C.wine, padding: "14px 26px", textDecoration: "none" })}>Commandez</a></div>
          <div style={h({ display: "flex", flexDirection: "column", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", color: "#5C4F47", paddingTop: 20 })}>{press.map((p) => <span key={p.source}><span style={{ color: C.wine }}>{p.source.split(" · ")[0]}</span> · {p.quote}</span>)}</div>
        </section>

        <section data-index="1" style={{ display: "flex", flexDirection: "column", padding: "0 clamp(20px, 4vw, 56px) 120px" }}>
          <span style={{ ...eye, paddingBottom: 18 }}>02 · Nos menus</span>
          {menus.map((m, i) => <div key={m.name} style={{ ...row, borderBottom: i === menus.length - 1 ? `1px solid ${C.line}` : "none" }}><span style={h({ fontSize: 24, fontWeight: 600 })}>{m.name}</span><span style={{ fontSize: 15, color: "#5C4F47" }}>{m.whenShort}</span></div>)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16, paddingTop: 40 }}>
            {[{ s: img.soupe, n: "Soupe à l'oignon gratinée", p: "21" }, { s: img.cote, n: "Côte de bœuf 32 oz", p: "190" }, { s: img.canard, n: "Canard confit", p: "42" }, { s: img.creme, n: "Crème brûlée", p: "14" }].map((x) => <div key={x.s} style={{ display: "flex", flexDirection: "column", gap: 8 }}><div style={{ position: "relative", aspectRatio: "4/3" }}><Image src={x.s} alt={x.n} fill sizes="25vw" className="img" /></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>{x.n}</span><span style={{ color: C.gold }}>{x.p}</span></div></div>)}
          </div>
        </section>

        <section data-index="2" style={{ display: "flex", flexDirection: "column", gap: 18, padding: "0 clamp(20px, 4vw, 56px) 120px" }}>
          <span style={eye}>03 · Événements privés</span>
          <h2 style={h({ margin: 0, fontSize: "clamp(24px, 2.6vw, 32px)", fontWeight: 700, lineHeight: 1.08, color: C.wine })}>{copy.cellierTitle}</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.soft }}>{copy.cellier}</p>
          <a href="#" style={h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", borderBottom: `2px solid ${C.wine}`, paddingBottom: 4, alignSelf: "flex-start", color: C.wine, textDecoration: "none" })}>Demandez des infos</a>
        </section>

        <section data-index="3" style={{ display: "flex", flexDirection: "column", gap: 18, padding: "0 clamp(20px, 4vw, 56px) 120px" }}>
          <span style={eye}>04 · Notre histoire</span>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.soft }}>{copy.story}</p>
          <div style={{ position: "relative", aspectRatio: "16/9" }}><Image src={img.imad} alt="Imad Nabwani" fill sizes="50vw" className="img" /></div>
          <a href="#" style={h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", borderBottom: `2px solid ${C.wine}`, paddingBottom: 4, alignSelf: "flex-start", color: C.wine, textDecoration: "none" })}>Lire la suite</a>
        </section>

        <section data-index="3" style={{ display: "flex", flexDirection: "column", gap: 18, padding: "0 clamp(20px, 4vw, 56px) 90px" }}>
          <span style={eye}>05 · Heures et adresse</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, fontSize: 16, lineHeight: 1.5, color: C.soft }}>{hours.map((x) => <div key={x.label}><span style={h({ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", color: C.ink, marginBottom: 6 })}>{x.label}</span>{x.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</div>)}</div>
          <span style={{ fontSize: 16, color: C.soft }}>{copy.address} · {copy.phone} · {copy.email}</span>
        </section>

        <footer style={h({ marginTop: "auto", display: "flex", justifyContent: "space-between", gap: 12, padding: "24px clamp(20px, 4vw, 56px)", borderTop: `1px solid ${C.line}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", color: "#5C4F47", flexWrap: "wrap" })}><span>© Le Pois Penché</span><span>Instagram · Facebook · LinkedIn</span></footer>
      </div>
    </main>
  );
}
