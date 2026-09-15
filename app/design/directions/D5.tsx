import Image from "next/image";
import { copy, hours, img, menus, navShort, press, OPENTABLE } from "../data";

// 5 · Zinc — brutally minimal, one giant wordmark, hairlines
const C = { bg: "#FAF8F2", ink: "#111111", soft: "#6B655C", wine: "#800008" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", color: C.soft };
const Row = ({ label, children, pad = "clamp(80px, 9vw, 120px)" }: { label: string; children: React.ReactNode; pad?: string }) => (
  <section data-reveal className="wrap d5-row" style={{ padding: `${pad} clamp(20px, 4vw, 56px) 0` }}><span style={lab}>{label}</span><div>{children}</div></section>
);
const plates = [
  { name: "Côte de bœuf Prime, 32 oz", price: "190", img: img.cote },
  { name: "Soupe à l'oignon gratinée", price: "21", img: img.soupe },
  { name: "Tartare de saumon au gingembre", price: "42", img: img.tartare },
];

export default function D5() {
  return (
    <main style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <header className="h rise" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "28px clamp(20px, 4vw, 56px)", fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", flexWrap: "wrap" }}>
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 32, width: "auto" }} />
        <nav style={{ display: "flex", gap: "8px 34px", flexWrap: "wrap" }}>{navShort.map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}<a href="#" className="ul" style={{ color: C.ink }}>EN</a></nav>
        <a href={OPENTABLE} className="btn" style={{ border: `1px solid ${C.ink}`, padding: "13px 26px", color: C.ink }}>Réservez</a>
      </header>

      {/* Wordmark hero */}
      <section style={{ padding: "clamp(40px, 5vw, 64px) clamp(20px, 4vw, 56px) 0", display: "flex", flexDirection: "column" }}>
        <h1 className="h rise-2" style={{ margin: 0, fontSize: "clamp(80px, 14.5vw, 210px)", fontWeight: 800, lineHeight: 0.84, letterSpacing: "-0.035em" }}>Pois<br />Penché</h1>
        <div className="rise-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 36, gap: "24px 80px", flexWrap: "wrap" }}>
          <p style={{ margin: 0, maxWidth: 560, fontSize: 21, lineHeight: 1.5 }}>Brasserie parisienne au centre-ville de Montréal, depuis 2008. Classiques français, steaks d&apos;exception, plateaux de fruits de mer.</p>
          <span style={lab}>{copy.addressShort} · {copy.phone}</span>
        </div>
      </section>
      <section data-stagger style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 24, padding: "44px clamp(20px, 4vw, 56px) 0", alignItems: "end" }} className="d5-hero">
        <div className="lift" style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}><div className="plx" data-speed="0.08" style={{ position: "absolute", inset: "-6% 0" }}><Image src={img.salleRouge} alt="La salle" fill priority sizes="(min-width: 900px) 60vw, 100vw" className="img" /></div></div>
        <div className="lift" style={{ position: "relative", aspectRatio: "6/5" }}><Image src={img.chefCrabe} alt="Le plateau" fill priority sizes="(min-width: 900px) 35vw, 100vw" className="img" /></div>
      </section>

      <Row label="Distinctions" pad="clamp(64px, 7vw, 96px)">
        {press.map((p, i) => <div key={p.source} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 32, padding: "20px 0", borderTop: `1px solid ${C.ink}`, borderBottom: i === press.length - 1 ? `1px solid ${C.ink}` : "none", flexWrap: "wrap" }}><span style={{ fontSize: 23 }}>{p.quote}</span><span style={{ ...lab, color: C.ink, whiteSpace: "nowrap" }}>{p.source}</span></div>)}
      </Row>

      <Row label="Menus">
        {menus.map((m, i) => <div key={m.name} className="d5-menu" style={{ display: "grid", gridTemplateColumns: "minmax(120px, 1fr) minmax(0, 1.6fr) auto", gap: "8px 32px", alignItems: "baseline", padding: "26px 0", borderTop: `1px solid ${C.ink}`, borderBottom: i === menus.length - 1 ? `1px solid ${C.ink}` : "none", transition: "padding-left 0.4s" }}><span className="h" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500 }}>{m.name}</span><span style={{ fontSize: 17, color: C.soft }}>{m.desc}</span><span style={{ fontSize: 15, whiteSpace: "nowrap" }}>{m.whenShort}</span></div>)}
      </Row>

      <section data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, padding: "clamp(72px, 8vw, 110px) clamp(20px, 4vw, 56px) 0" }}>
        {plates.map((p) => <div key={p.name} style={{ display: "flex", flexDirection: "column", gap: 14 }}><div className="lift" style={{ position: "relative", aspectRatio: "1" }}><Image src={p.img} alt={p.name} fill sizes="(min-width: 900px) 33vw, 100vw" className="img" /></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 17 }}><span>{p.name}</span><span>{p.price}</span></div></div>)}
      </section>

      <Row label="Événements privés">
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 500, lineHeight: 1.04, letterSpacing: "-0.01em" }}>{copy.cellierTitle}</h2>
          <div className="lift" style={{ position: "relative", aspectRatio: "16/10" }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="(min-width: 900px) 60vw, 100vw" className="img" /></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 40, flexWrap: "wrap" }}><p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: C.soft, maxWidth: 620 }}>Réunions d&apos;affaires, célébrations, et notre traiteur français chez vous, au bureau ou ailleurs.</p><a href="#" className="ul" style={{ ...lab, color: C.ink, whiteSpace: "nowrap" }}>Demandez des infos</a></div>
        </div>
      </Row>

      <Row label="Heures">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, fontSize: 17, lineHeight: 1.55, paddingBottom: "clamp(72px, 8vw, 110px)" }}>
          {hours.map((h) => <div key={h.label}><span style={{ ...lab, display: "block", marginBottom: 8, color: C.ink }}>{h.label}</span>{h.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</div>)}
        </div>
      </Row>

      <footer className="h" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, padding: "28px clamp(20px, 4vw, 56px)", borderTop: `1px solid ${C.ink}`, fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", color: C.soft }}>
        <span>© Le Pois Penché · Montréal</span><span>Instagram · Facebook · LinkedIn</span><a href={OPENTABLE} className="ul" style={{ color: C.wine }}>Réservez</a>
      </footer>
      <style>{`.d5-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:24px 80px}.d5-menu:hover{padding-left:12px}@media(max-width:800px){.d5-row{grid-template-columns:1fr}.d5-hero{grid-template-columns:1fr!important}.d5-menu{grid-template-columns:1fr!important}}`}</style>
    </main>
  );
}
