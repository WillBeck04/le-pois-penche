import Image from "next/image";
import { copy, hours, img, menus, press, OPENTABLE } from "../data";

// 4 · Carte Postale — editorial, Cormorant italics, numbered captions
const C = { bg: "#F9F4E8", ink: "#221A16", soft: "#4A3F39", lab: "#5C4F47", wine: "#800008", line: "#D9CDB6" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.24em" };
const Cap = ({ n, children }: { n: string; children: React.ReactNode }) => <span className="cg" style={{ fontSize: 19, fontStyle: "italic", color: C.soft }}><span style={{ ...lab, fontSize: 10, letterSpacing: "0.26em", color: C.wine, marginRight: 10, fontStyle: "normal" }}>{n}</span>{children}</span>;
const Fig = ({ src, alt, ratio, n, cap, style }: { src: string; alt: string; ratio: string; n: string; cap: string; style?: React.CSSProperties }) => (
  <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12, ...style }}><div style={{ position: "relative", aspectRatio: ratio }}><Image src={src} alt={alt} fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div><figcaption><Cap n={n}>{cap}</Cap></figcaption></figure>
);

export default function D4() {
  return (
    <main className="cg" style={{ background: C.bg, color: C.ink }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px clamp(20px, 4vw, 64px)", borderBottom: `1px solid ${C.ink}`, flexWrap: "wrap" }}>
        <span style={{ ...lab, color: C.lab }} className="d4-hide-sm">Brasserie parisienne · Montréal · N° 1230</span>
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 44, width: "auto" }} />
        <nav style={{ ...lab, display: "flex", gap: "8px 24px", flexWrap: "wrap" }}>{["Menus", "Heures", "Histoire", "Événements", "Traiteur"].map((n) => <a key={n} href="#" style={{ color: C.ink, textDecoration: "none" }}>{n}</a>)}<a href={OPENTABLE} style={{ color: C.wine, textDecoration: "none" }}>Réservez</a></nav>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
        <div style={{ position: "relative", minHeight: "min(720px, 70vh)" }}><Image src={img.table} alt="Table dressée" fill priority sizes="(min-width: 900px) 55vw, 100vw" className="img" /></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28, padding: "clamp(40px, 5vw, 64px) clamp(24px, 5.5vw, 80px)" }}>
          <span style={{ ...lab, letterSpacing: "0.3em", color: C.wine }}>Depuis 2008 · Mille carré doré</span>
          <h1 style={{ margin: 0, fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 500, fontStyle: "italic", lineHeight: 0.98, letterSpacing: "-0.01em", textWrap: "balance" }}>Les plaisirs de la table, à la parisienne.</h1>
          <p style={{ margin: 0, fontSize: 22, lineHeight: 1.5, color: C.soft, maxWidth: 480 }}>Une institution du centre-ville de Montréal : classiques français aux accents montréalais, steaks d&apos;exception et plateaux de fruits de mer.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center" }}><a href={OPENTABLE} style={{ ...lab, letterSpacing: "0.26em", color: C.bg, background: C.wine, padding: "16px 30px", textDecoration: "none" }}>Réservez</a><a href="#sommaire" style={{ ...lab, letterSpacing: "0.26em", color: C.ink, borderBottom: `1px solid ${C.ink}`, paddingBottom: 4, textDecoration: "none" }}>Voir les menus</a></div>
        </div>
      </section>

      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, padding: "56px clamp(20px, 4vw, 64px)", borderTop: `1px solid ${C.ink}`, borderBottom: `1px solid ${C.ink}`, margin: "0 clamp(20px, 4vw, 64px)" }}>
        {press.map((p) => <div key={p.source} style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={{ fontSize: 24, fontStyle: "italic", lineHeight: 1.3 }}>« {p.quote} »</span><span style={{ ...lab, fontSize: 10, letterSpacing: "0.26em", color: C.lab }}>{p.source}</span></div>)}
      </section>

      <section data-reveal className="wrap d4-grid" style={{ padding: "clamp(60px, 8vw, 110px) clamp(20px, 4vw, 64px) 40px" }}>
        <Fig src={img.soupe} alt="Soupe à l'oignon" ratio="4/3" n="I" cap="La soupe à l'oignon gratinée au Louis d'Or · 21" style={{ gridColumn: "1 / span 5" }} />
        <Fig src={img.chefCrabe} alt="Le chef et le crabe" ratio="4/3" n="II" cap="Le chef Josserand et le plateau de fruits de mer, au passe" style={{ gridColumn: "7 / span 6", marginTop: 120 }} />
        <Fig src={img.creme} alt="Crème brûlée" ratio="4/3" n="III" cap="Crème brûlée à la vanille de Bourbon, flambée au Grand Marnier · 14 + 6" style={{ gridColumn: "2 / span 4", marginTop: -40 }} />
        <div style={{ gridColumn: "7 / span 5", marginTop: 40, display: "flex", flexDirection: "column", gap: 18, paddingRight: 40 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(32px, 3.4vw, 44px)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.1 }}>Une joie de vivre des plus chaleureuses</h2>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, color: C.soft }}>Le Pois Penché est une institution familiale fréquentée par de fidèles habitués et par des voyageurs venus des quatre coins du monde. {copy.story}</p>
          <a href="#" style={{ ...lab, letterSpacing: "0.26em", color: C.ink, borderBottom: `1px solid ${C.ink}`, paddingBottom: 4, alignSelf: "flex-start", textDecoration: "none" }}>Notre histoire</a>
        </div>
      </section>

      <section data-reveal className="wrap d4-grid" style={{ padding: "60px clamp(20px, 4vw, 64px) 100px", alignItems: "end" }}>
        <Fig src={img.huitres} alt="Huîtres" ratio="4/3" n="IV" cap="Huîtres, prix du marché" style={{ gridColumn: "1 / span 4" }} />
        <Fig src={img.cote} alt="Côte de bœuf" ratio="5/4" n="V" cap="La côte de bœuf Prime canadien, 32 oz, vieillie à sec 30 jours · 190" style={{ gridColumn: "5 / span 5" }} />
        <Fig src={img.canard} alt="Canard confit" ratio="3/4" n="VI" cap="Canard confit · 42" style={{ gridColumn: "10 / span 3" }} />
      </section>

      <section id="sommaire" data-reveal className="wrap" style={{ padding: "70px clamp(20px, 4vw, 64px) 90px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, borderTop: `1px solid ${C.ink}`, margin: "0 clamp(20px, 4vw, 64px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}><span style={{ ...lab, letterSpacing: "0.3em", color: C.wine }}>Sommaire</span><h2 style={{ margin: 0, fontSize: "clamp(36px, 3.6vw, 48px)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.05 }}>Nos cinq menus</h2><p style={{ margin: "8px 0 0", fontSize: 18, lineHeight: 1.5, color: C.soft }}>Servis en salle, sur la terrasse à la belle saison, ou pour emporter.</p></div>
        <div style={{ display: "flex", flexDirection: "column", gridColumn: "span 2" }}>
          {menus.map((m) => <div key={m.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "18px 0", borderBottom: `1px solid ${C.line}`, gap: 20, flexWrap: "wrap" }}><span style={{ fontSize: 30, fontWeight: 600 }}>{m.name}</span><span style={{ fontSize: 18, fontStyle: "italic", color: C.soft, flex: 1, minWidth: 200 }}>{m.desc}</span><span style={{ ...lab, fontSize: 11, letterSpacing: "0.22em", color: C.lab, fontWeight: 500 }}>{m.whenShort}</span></div>)}
        </div>
      </section>

      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", margin: "0 clamp(20px, 4vw, 64px) 100px", borderTop: `1px solid ${C.ink}` }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 18, padding: "70px clamp(0px, 4vw, 60px) 70px 0" }}>
          <span style={{ ...lab, letterSpacing: "0.3em", color: C.wine }}>Événements privés</span>
          <h2 style={{ margin: 0, fontSize: "clamp(38px, 4vw, 56px)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.02 }}>Le Cellier, de vingt à quatre-vingts convives.</h2>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, color: C.soft }}>L&apos;ensemble du restaurant accueille jusqu&apos;à 120 convives. Et notre traiteur français se déplace chez vous, au bureau ou ailleurs.</p>
          <a href="#" style={{ ...lab, letterSpacing: "0.26em", color: C.bg, background: C.wine, padding: "16px 30px", alignSelf: "flex-start", textDecoration: "none" }}>Demandez des infos</a>
        </div>
        <div style={{ position: "relative", minHeight: 460, marginTop: 40 }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="(min-width: 900px) 55vw, 100vw" className="img" /></div>
      </section>

      <section className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, padding: "0 clamp(20px, 4vw, 64px) 90px" }}>
        {hours.map((h) => <div key={h.label}><span style={{ ...lab, display: "block", fontSize: 10, letterSpacing: "0.26em", color: C.wine, marginBottom: 10 }}>{h.label}</span><span style={{ fontSize: 20, lineHeight: 1.4 }}>{h.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</span></div>)}
        <div><span style={{ ...lab, display: "block", fontSize: 10, letterSpacing: "0.26em", color: C.wine, marginBottom: 10 }}>Adresse</span><span style={{ fontSize: 20, lineHeight: 1.4 }}>{copy.addressShort}, à l&apos;angle de Drummond · métro Peel · {copy.phone}</span></div>
      </section>

      <footer style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "28px clamp(20px, 4vw, 64px)", borderTop: `1px solid ${C.ink}` }}>
        <span style={{ fontSize: 18, fontStyle: "italic", color: C.soft }}>Le Pois Penché · Montréal · {copy.email}</span>
        <span style={{ ...lab, color: C.lab }}>Instagram · Facebook · LinkedIn · Recevez nos nouvelles</span>
      </footer>
      <style>{`.d4-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:start}@media(max-width:900px){.d4-grid{display:flex;flex-direction:column;gap:32px}.d4-grid>*{margin-top:0!important;padding-right:0!important}.d4-hide-sm{display:none}}`}</style>
    </main>
  );
}
