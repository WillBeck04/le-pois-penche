import Image from "next/image";
import { copy, hours, img, menus, press, OPENTABLE } from "../data";

// 4 · Carte Postale — editorial, Cormorant italics, numbered captions, a masthead
const C = { bg: "#F9F4E8", ink: "#221A16", soft: "#4A3F39", lab: "#5C4F47", wine: "#800008", line: "#D9CDB6" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.26em" };
const Cap = ({ n, children }: { n: string; children: React.ReactNode }) => <span style={{ fontSize: 19, fontStyle: "italic", color: C.soft }}><span style={{ ...lab, fontSize: 10, letterSpacing: "0.28em", color: C.wine, marginRight: 10, fontStyle: "normal" }}>{n}</span>{children}</span>;
const Fig = ({ src, alt, ratio, n, cap, style, sizes = "(min-width: 900px) 50vw, 100vw" }: { src: string; alt: string; ratio: string; n: string; cap: string; style?: React.CSSProperties; sizes?: string }) => (
  <figure data-reveal style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12, ...style }}><div className="lift" style={{ position: "relative", aspectRatio: ratio }}><Image src={src} alt={alt} fill sizes={sizes} className="img" /></div><figcaption><Cap n={n}>{cap}</Cap></figcaption></figure>
);

export default function D4() {
  return (
    <main className="cg" style={{ background: C.bg, color: C.ink }}>
      {/* Masthead */}
      <header style={{ borderBottom: `1px solid ${C.ink}` }}>
        <div className="rise" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px clamp(20px, 4vw, 64px)", flexWrap: "wrap", borderBottom: `1px solid ${C.line}` }}>
          <span style={{ ...lab, color: C.lab }}>Brasserie parisienne · Montréal</span>
          <span style={{ ...lab, color: C.lab }}>N° 1230 · Depuis 2008</span>
        </div>
        <div className="rise-2" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px clamp(20px, 4vw, 64px)", flexWrap: "wrap" }}>
          <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 50, width: "auto" }} />
          <nav style={{ ...lab, display: "flex", gap: "8px 26px", flexWrap: "wrap" }}>{["Menus", "Heures", "Histoire", "Événements", "Traiteur"].map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}<a href={OPENTABLE} className="ul" style={{ color: C.wine }}>Réservez</a></nav>
        </div>
      </header>

      {/* Hero spread */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
        <div className="lift" style={{ position: "relative", minHeight: "min(760px, 74vh)", overflow: "hidden" }}><div className="plx" data-speed="0.1" style={{ position: "absolute", inset: "-8% 0" }}><Image src={img.table} alt="Table dressée" fill priority sizes="(min-width: 900px) 55vw, 100vw" className="img kb" /></div></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 30, padding: "clamp(44px, 6vw, 72px) clamp(24px, 6vw, 88px)" }}>
          <span className="rise-2" style={{ ...lab, letterSpacing: "0.32em", color: C.wine }}>Édition automne · Mille carré doré</span>
          <h1 className="rise-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", textTransform: "none", margin: 0, fontSize: "clamp(52px, 6.6vw, 96px)", fontWeight: 500, fontStyle: "italic", lineHeight: 0.96, letterSpacing: "-0.015em", textWrap: "balance" }}>Les plaisirs de la table, à la parisienne.</h1>
          <p className="rise-4" style={{ margin: 0, fontSize: 23, lineHeight: 1.5, color: C.soft, maxWidth: 500 }}>Une institution du centre-ville de Montréal : classiques français aux accents montréalais, steaks d&apos;exception et plateaux de fruits de mer.</p>
          <div className="rise-4" style={{ display: "flex", flexWrap: "wrap", gap: 30, alignItems: "center" }}><a href={OPENTABLE} className="btn" style={{ ...lab, letterSpacing: "0.28em", color: C.bg, background: C.wine, padding: "17px 32px" }}>Réservez</a><a href="#sommaire" className="ul" style={{ ...lab, letterSpacing: "0.28em", color: C.ink }}>Voir les menus</a></div>
        </div>
      </section>

      {/* Press */}
      <section data-stagger className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, padding: "56px clamp(20px, 4vw, 64px)", borderTop: `1px solid ${C.ink}`, borderBottom: `1px solid ${C.ink}`, margin: "0 clamp(20px, 4vw, 64px)" }}>
        {press.map((p) => <div key={p.source} style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={{ fontSize: 26, fontStyle: "italic", lineHeight: 1.3 }}>« {p.quote} »</span><span style={{ ...lab, fontSize: 10, letterSpacing: "0.28em", color: C.lab }}>{p.source}</span></div>)}
      </section>

      {/* Collage one */}
      <section className="wrap d4-grid" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 4vw, 64px) 40px" }}>
        <Fig src={img.soupe} alt="Soupe à l'oignon" ratio="4/3" n="I" cap="La soupe à l'oignon gratinée au Louis d'Or · 21" style={{ gridColumn: "1 / span 5" }} />
        <Fig src={img.chefCrabe} alt="Le chef et le crabe" ratio="4/3" n="II" cap="Le chef Josserand et le plateau de fruits de mer, au passe" style={{ gridColumn: "7 / span 6", marginTop: 130 }} />
        <Fig src={img.creme} alt="Crème brûlée" ratio="4/3" n="III" cap="Crème brûlée à la vanille de Bourbon, flambée au Grand Marnier · 14 + 6" style={{ gridColumn: "2 / span 4", marginTop: -40 }} sizes="(min-width: 900px) 33vw, 100vw" />
        <div data-reveal style={{ gridColumn: "7 / span 5", marginTop: 48, display: "flex", flexDirection: "column", gap: 20, paddingRight: 40 }}>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", textTransform: "none", margin: 0, fontSize: "clamp(34px, 3.6vw, 50px)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.08 }}>Une joie de vivre des plus chaleureuses</h2>
          <p style={{ margin: 0, fontSize: 21, lineHeight: 1.55, color: C.soft }}>Le Pois Penché est une institution familiale fréquentée par de fidèles habitués et par des voyageurs venus des quatre coins du monde. {copy.story}</p>
          <a href="#" className="ul" style={{ ...lab, letterSpacing: "0.28em", color: C.ink, alignSelf: "flex-start" }}>Notre histoire</a>
        </div>
      </section>

      {/* Collage two */}
      <section className="wrap d4-grid" style={{ padding: "60px clamp(20px, 4vw, 64px) 110px", alignItems: "end" }}>
        <Fig src={img.huitres} alt="Huîtres" ratio="4/3" n="IV" cap="Huîtres, prix du marché" style={{ gridColumn: "1 / span 4" }} sizes="(min-width: 900px) 33vw, 100vw" />
        <Fig src={img.cote} alt="Côte de bœuf" ratio="5/4" n="V" cap="La côte de bœuf Prime canadien, 32 oz, vieillie à sec 30 jours · 190" style={{ gridColumn: "5 / span 5" }} />
        <Fig src={img.canard} alt="Canard confit" ratio="3/4" n="VI" cap="Canard confit · 42" style={{ gridColumn: "10 / span 3" }} sizes="(min-width: 900px) 25vw, 100vw" />
      </section>

      {/* Sommaire */}
      <section id="sommaire" data-reveal className="wrap" style={{ padding: "72px clamp(20px, 4vw, 64px) 96px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, borderTop: `1px solid ${C.ink}`, margin: "0 clamp(20px, 4vw, 64px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}><span style={{ ...lab, letterSpacing: "0.32em", color: C.wine }}>Sommaire</span><h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", textTransform: "none", margin: 0, fontSize: "clamp(38px, 3.8vw, 52px)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.05 }}>Nos cinq menus</h2><p style={{ margin: "8px 0 0", fontSize: 19, lineHeight: 1.5, color: C.soft }}>Servis en salle, sur la terrasse à la belle saison, ou pour emporter.</p></div>
        <div data-stagger style={{ display: "flex", flexDirection: "column", gridColumn: "span 2" }}>
          {menus.map((m) => <div key={m.name} className="d4-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px 0", borderBottom: `1px solid ${C.line}`, gap: 20, flexWrap: "wrap", transition: "padding-left 0.4s" }}><span style={{ fontSize: 32, fontWeight: 600 }}>{m.name}</span><span style={{ fontSize: 18, fontStyle: "italic", color: C.soft, flex: 1, minWidth: 200 }}>{m.desc}</span><span style={{ ...lab, fontSize: 11, letterSpacing: "0.22em", color: C.lab, fontWeight: 500 }}>{m.whenShort}</span></div>)}
        </div>
      </section>

      {/* Cellier spread */}
      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", margin: "0 clamp(20px, 4vw, 64px) 110px", borderTop: `1px solid ${C.ink}` }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, padding: "72px clamp(0px, 4vw, 60px) 72px 0" }}>
          <span style={{ ...lab, letterSpacing: "0.32em", color: C.wine }}>Événements privés</span>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", textTransform: "none", margin: 0, fontSize: "clamp(40px, 4.4vw, 62px)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.0 }}>Le Cellier, de vingt à quatre-vingts convives.</h2>
          <p style={{ margin: 0, fontSize: 21, lineHeight: 1.55, color: C.soft }}>L&apos;ensemble du restaurant accueille jusqu&apos;à 120 convives. Et notre traiteur français se déplace chez vous, au bureau ou ailleurs.</p>
          <a href="#" className="btn" style={{ ...lab, letterSpacing: "0.28em", color: C.bg, background: C.wine, padding: "17px 32px", alignSelf: "flex-start" }}>Demandez des infos</a>
        </div>
        <div className="lift" style={{ position: "relative", minHeight: 480, marginTop: 44 }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="(min-width: 900px) 55vw, 100vw" className="img" /></div>
      </section>

      <section data-stagger className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, padding: "0 clamp(20px, 4vw, 64px) 96px" }}>
        {hours.map((h) => <div key={h.label}><span style={{ ...lab, display: "block", fontSize: 10, letterSpacing: "0.28em", color: C.wine, marginBottom: 10 }}>{h.label}</span><span style={{ fontSize: 21, lineHeight: 1.4 }}>{h.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</span></div>)}
        <div><span style={{ ...lab, display: "block", fontSize: 10, letterSpacing: "0.28em", color: C.wine, marginBottom: 10 }}>Adresse</span><span style={{ fontSize: 21, lineHeight: 1.4 }}>{copy.addressShort}, à l&apos;angle de Drummond · métro Peel · {copy.phone}</span></div>
      </section>

      <footer style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "30px clamp(20px, 4vw, 64px)", borderTop: `1px solid ${C.ink}` }}>
        <span style={{ fontSize: 19, fontStyle: "italic", color: C.soft }}>Le Pois Penché · Montréal · {copy.email}</span>
        <span style={{ ...lab, color: C.lab }}>Instagram · Facebook · LinkedIn · Recevez nos nouvelles</span>
      </footer>
      <style>{`.d4-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:start}.d4-row:hover{padding-left:12px}@media(max-width:900px){.d4-grid{display:flex;flex-direction:column;gap:36px}.d4-grid>*{margin-top:0!important;padding-right:0!important}}`}</style>
    </main>
  );
}
