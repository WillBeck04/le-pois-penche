import Image from "next/image";
import { copy, hours, img, menus, press, OPENTABLE } from "../data";
import PinnedGallery from "./PinnedGallery";

// 8 · Vitrine — split screen, pinned photo swaps on scroll
const C = { cream: "#FBF6E6", ink: "#1B1512", soft: "#4A3F39", wine: "#800008", gold: "#B8955A", line: "#DDD2B8" };
const h = (extra: React.CSSProperties = {}): React.CSSProperties => ({ fontFamily: "var(--font-montserrat)", textTransform: "uppercase", ...extra });
const eye = h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.32em", color: C.gold });
const row: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "22px 0", borderTop: `1px solid ${C.line}`, gap: 16, flexWrap: "wrap" };
const frames = [
  { src: img.salleRouge, label: "01 · La salle", cap: "Velours rouge, nappes blanches, joie de vivre" },
  { src: img.chefCrabe, label: "02 · La cuisine", cap: "Le chef Josserand et le plateau de fruits de mer" },
  { src: img.cellierTable, label: "03 · Le Cellier", cap: "De 20 à 80 convives" },
  { src: img.imad, label: "04 · Imad Nabwani", cap: "Le rêve d'un restaurateur, depuis 2011" },
  { src: img.terrasse, label: "05 · La terrasse", cap: "Au printemps et en été, si la météo le permet" },
];

export default function D8() {
  return (
    <main className="d8" style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))" }}>
      <div className="d8-left" style={{ background: C.ink, overflow: "hidden" }}>
        <PinnedGallery frames={frames} />
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority className="rise" style={{ position: "absolute", top: 40, left: 32, height: 48, width: "auto", filter: "brightness(0) invert(1) opacity(0.95)", zIndex: 2 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <nav className="rise" style={h({ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "36px clamp(20px, 4vw, 56px) 0", fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", flexWrap: "wrap" })}>
          <div style={{ display: "flex", gap: "6px 22px", flexWrap: "wrap" }}>{["Menus", "Heures", "Histoire", "Événements", "Traiteur"].map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}</div>
          <a href={OPENTABLE} className="btn" style={{ border: `2px solid ${C.wine}`, color: C.wine, padding: "11px 20px" }}>Réservez</a>
        </nav>

        <section data-index="0" style={{ display: "flex", flexDirection: "column", gap: 26, padding: "clamp(80px, 14vh, 190px) clamp(20px, 4vw, 56px) 130px" }}>
          <span className="rise-2" style={eye}>Brasserie parisienne · depuis 2008</span>
          <h1 className="rise-3" style={h({ margin: 0, fontSize: "clamp(34px, 4vw, 58px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.01em", color: C.wine, textWrap: "balance" })}>{copy.welcomeTitle}</h1>
          <p className="rise-4" style={{ margin: 0, fontSize: 19, lineHeight: 1.65, color: C.soft }}>{copy.welcome}</p>
          <div className="rise-4" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} className="btn" style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", background: C.wine, color: C.cream, padding: "17px 30px" })}>Réservez</a><a href="#" className="btn" style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", border: `2px solid ${C.wine}`, color: C.wine, padding: "15px 28px" })}>Commandez</a></div>
          <div data-stagger style={h({ display: "flex", flexDirection: "column", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: "#5C4F47", paddingTop: 24 })}>{press.map((p) => <span key={p.source}><span style={{ color: C.wine }}>{p.source.split(" · ")[0]}</span> · {p.quote}</span>)}</div>
        </section>

        <section data-index="1" data-reveal style={{ display: "flex", flexDirection: "column", padding: "0 clamp(20px, 4vw, 56px) 130px" }}>
          <span style={{ ...eye, paddingBottom: 20 }}>02 · Nos menus</span>
          <div data-stagger>{menus.map((m, i) => <div key={m.name} style={{ ...row, borderBottom: i === menus.length - 1 ? `1px solid ${C.line}` : "none" }}><span style={h({ fontSize: 26, fontWeight: 600 })}>{m.name}</span><span style={{ fontSize: 15, color: "#5C4F47" }}>{m.whenShort}</span></div>)}</div>
          <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16, paddingTop: 44 }}>
            {[{ s: img.soupe, n: "Soupe à l'oignon gratinée", p: "21" }, { s: img.cote, n: "Côte de bœuf 32 oz", p: "190" }, { s: img.canard, n: "Canard confit", p: "42" }, { s: img.creme, n: "Crème brûlée", p: "14" }].map((x) => <div key={x.s} style={{ display: "flex", flexDirection: "column", gap: 8 }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={x.s} alt={x.n} fill sizes="25vw" className="img" /></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>{x.n}</span><span style={{ color: C.gold }}>{x.p}</span></div></div>)}
          </div>
        </section>

        <section data-index="2" data-reveal style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 clamp(20px, 4vw, 56px) 130px" }}>
          <span style={eye}>03 · Événements privés</span>
          <h2 style={h({ margin: 0, fontSize: "clamp(26px, 2.8vw, 36px)", fontWeight: 700, lineHeight: 1.06, color: C.wine })}>{copy.cellierTitle}</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: C.soft }}>{copy.cellier}</p>
          <a href="#" className="ul" style={h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", alignSelf: "flex-start", color: C.wine })}>Demandez des infos</a>
        </section>

        <section data-index="3" data-reveal style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 clamp(20px, 4vw, 56px) 130px" }}>
          <span style={eye}>04 · Notre histoire</span>
          <h2 style={h({ margin: 0, fontSize: "clamp(24px, 2.4vw, 30px)", fontWeight: 600, lineHeight: 1.1 })}>Une ambassade montréalaise de la joie de vivre à la française</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: C.soft }}>{copy.story}</p>
          <a href="#" className="ul" style={h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", alignSelf: "flex-start", color: C.wine })}>Lire la suite</a>
        </section>

        <section data-index="4" data-reveal style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 clamp(20px, 4vw, 56px) 100px" }}>
          <span style={eye}>05 · Heures et adresse</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, fontSize: 16, lineHeight: 1.55, color: C.soft }}>{hours.map((x) => <div key={x.label}><span style={h({ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: C.ink, marginBottom: 6 })}>{x.label}</span>{x.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</div>)}</div>
          <span style={{ fontSize: 16, color: C.soft }}>{copy.address} · {copy.phone} · {copy.email}</span>
          <a href={OPENTABLE} className="btn" style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", background: C.wine, color: C.cream, padding: "17px 30px", alignSelf: "flex-start", marginTop: 8 })}>Réservez une table</a>
        </section>

        <footer style={h({ marginTop: "auto", display: "flex", justifyContent: "space-between", gap: 12, padding: "26px clamp(20px, 4vw, 56px)", borderTop: `1px solid ${C.line}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", color: "#5C4F47", flexWrap: "wrap" })}><span>© Le Pois Penché</span><span>Instagram · Facebook · LinkedIn</span></footer>
      </div>
    </main>
  );
}
