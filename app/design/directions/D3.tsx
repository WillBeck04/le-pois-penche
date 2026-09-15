import Image from "next/image";
import { copy, hours, img, menus, navShort, press, OPENTABLE } from "../data";

// 3 · Nuit à Montréal — warm near-black, cream type, gold, cinematic
const C = { bg: "#14100E", cream: "#F1E8D5", muted: "#D9CDB6", dim: "#A89B87", gold: "#C9A96A", line: "rgba(201,169,106,0.35)" };
const eye: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 12, fontWeight: 600, letterSpacing: "0.32em", color: C.gold };
const btnGold: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", color: C.bg, background: C.gold, padding: "16px 30px" };
const btnLine: React.CSSProperties = { ...btnGold, color: C.cream, background: "transparent", border: "1px solid rgba(241,232,213,0.5)" };
const plates = [
  { name: "Côte de bœuf Prime 32 oz, vieillie 30 jours", price: "190", img: img.cote },
  { name: "Le Parisien, plateau pour deux", price: "160", img: img.chefCrabe },
  { name: "Canard confit, sauce aux poivres", price: "42", img: img.canard },
];

export default function D3() {
  return (
    <main style={{ background: C.bg, color: C.cream, fontFamily: "var(--font-figtree)" }}>
      {/* Full-screen hero */}
      <section style={{ position: "relative", height: "100svh", minHeight: 620, overflow: "hidden" }}>
        <div className="plx" data-speed="0.2" style={{ position: "absolute", inset: "-15% 0" }}><Image src={img.barNuit} alt="Le bar le soir" fill priority sizes="100vw" className="img kb" /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,14,0.65) 0%, rgba(20,16,14,0) 30%, rgba(20,16,14,0.15) 55%, rgba(20,16,14,0.98) 100%)" }} />
        <header className="rise" style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "30px clamp(20px, 4vw, 56px) 0", zIndex: 2 }}>
          <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 46, width: "auto", filter: "brightness(0) invert(1) opacity(0.94)" }} />
          <nav className="h" style={{ display: "flex", alignItems: "center", gap: "8px 28px", fontSize: 12, fontWeight: 600, letterSpacing: "0.24em", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {navShort.map((n) => <a key={n} href="#" className="ul" style={{ color: C.cream }}>{n}</a>)}
            <a href={OPENTABLE} className="btn" style={{ color: C.gold, border: `1px solid ${C.gold}`, padding: "12px 24px" }}>Réservez</a>
          </nav>
        </header>
        <div style={{ position: "absolute", left: "clamp(20px, 4vw, 56px)", right: "clamp(20px, 4vw, 56px)", bottom: "clamp(36px, 6vw, 72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px 60px", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}><span className="rise-2" style={eye}>Depuis 2008 · Mille carré doré · Montréal</span><h1 className="h rise-3" style={{ margin: 0, fontSize: "clamp(44px, 6.4vw, 96px)", fontWeight: 700, lineHeight: 0.94, letterSpacing: "-0.015em", textWrap: "balance" }}>La brasserie parisienne du centre-ville</h1></div>
          <div className="rise-4" style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 10 }}><p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: C.muted, maxWidth: "min(460px, 100%)" }}>Classiques français aux accents montréalais, steaks d&apos;exception et plateaux de fruits de mer, servis avec une joie de vivre des plus chaleureuses.</p><div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} className="btn" style={btnGold}>Réservez</a><a href="#menus" className="btn" style={btnLine}>Nos menus</a></div></div>
        </div>
      </section>

      {/* Press marquee */}
      <div className="marquee h" style={{ padding: "20px 0", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.28em", color: C.dim }}>
        <div>{[...press, ...press, ...press].map((p, i) => <span key={i} style={{ padding: "0 32px" }}><span style={{ color: C.gold }}>{p.source.split(" · ")[0]}</span> · {p.quote} <span style={{ color: C.gold, marginLeft: 32 }}>✦</span></span>)}</div>
      </div>

      {/* Ce soir */}
      <section data-reveal style={{ padding: "clamp(72px, 8vw, 110px) clamp(20px, 4vw, 56px) 0", display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}><span style={eye}>Ce soir, à la carte</span><span style={{ fontSize: 16, color: C.dim }}>Souper tous les soirs dès 17 h</span></div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
          {plates.map((p) => <div key={p.name} className="lift" style={{ position: "relative", aspectRatio: "1/1" }}><Image src={p.img} alt={p.name} fill sizes="(min-width: 900px) 33vw, 100vw" className="img" /><div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,14,0) 50%, rgba(20,16,14,0.88) 100%)" }} /><div style={{ position: "absolute", left: 26, right: 26, bottom: 24, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}><span className="h" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.08em" }}>{p.name}</span><span style={{ color: C.gold, fontSize: 20 }}>{p.price}</span></div></div>)}
        </div>
      </section>

      {/* Menus as big rows */}
      <section id="menus" data-reveal style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 8vw, 120px) clamp(72px, 8vw, 110px)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 28, flexWrap: "wrap", gap: 12 }}><span style={eye}>Nos menus</span><a href="#" className="h ul" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", color: C.dim }}>Commandez pour emporter</a></div>
        <div data-stagger>
          {menus.map((m, i) => <div key={m.name} className="d3-row" style={{ display: "grid", gridTemplateColumns: "minmax(140px, 300px) 1fr auto", gap: "12px 40px", alignItems: "baseline", padding: "30px 0", borderTop: `1px solid ${C.line}`, borderBottom: i === menus.length - 1 ? `1px solid ${C.line}` : "none" }}><span className="h" style={{ fontSize: "clamp(28px, 3.4vw, 50px)", fontWeight: 600, transition: "color 0.3s" }}>{m.name}</span><span style={{ fontSize: 17, color: C.dim }}>{m.desc}</span><span style={{ fontSize: 16, color: C.gold, whiteSpace: "nowrap" }}>{m.whenShort}</span></div>)}
        </div>
      </section>

      {/* Le Cellier */}
      <section data-reveal style={{ position: "relative", height: "min(700px, 85vh)", overflow: "hidden" }}>
        <div className="plx" data-speed="0.14" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.salleRouge} alt="Le Cellier" fill sizes="100vw" className="img" /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(20,16,14,0.94) 0%, rgba(20,16,14,0.6) 45%, rgba(20,16,14,0.05) 100%)" }} />
        <div style={{ position: "absolute", left: "clamp(20px, 8vw, 120px)", right: 20, top: "50%", transform: "translateY(-50%)", maxWidth: 600, display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={eye}>Événements privés · Traiteur</span>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 46px)", fontWeight: 700, lineHeight: 1.04 }}>{copy.cellierTitle}</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: C.muted }}>Réunions d&apos;affaires et célébrations dans notre salle de banquet, ou notre gastronomie française livrée chez vous, au bureau ou ailleurs.</p>
          <a href="#" className="btn" style={{ ...btnGold, alignSelf: "flex-start" }}>Demandez des infos</a>
        </div>
      </section>

      {/* Story */}
      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div className="lift" style={{ position: "relative", minHeight: 460 }}><Image src={img.imad} alt="Imad Nabwani" fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 26, padding: "clamp(48px, 7vw, 96px) clamp(24px, 8vw, 120px)" }}>
          <span style={eye}>Notre histoire</span>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(26px, 2.8vw, 38px)", fontWeight: 600, lineHeight: 1.1 }}>Une ambassade montréalaise de la joie de vivre à la française</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: C.muted }}>{copy.story}</p>
          <a href="#" className="h ul" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", color: C.gold, alignSelf: "flex-start" }}>Lire notre histoire</a>
        </div>
      </section>

      <section data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, padding: "clamp(64px, 8vw, 100px) clamp(20px, 8vw, 120px) 80px", borderTop: `1px solid ${C.line}` }}>
        {hours.map((h) => <div key={h.label} style={{ display: "flex", flexDirection: "column", gap: 10 }}><span style={eye}>{h.label}</span><span style={{ fontSize: 17, lineHeight: 1.55, color: C.muted }}>{h.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</span></div>)}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}><span style={eye}>Adresse</span><span style={{ fontSize: 17, lineHeight: 1.55, color: C.muted }}>{copy.address}<br />{copy.phone}</span></div>
      </section>

      <section data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, padding: "0 12px 12px" }}>
        {[img.huitres, img.pass, img.tartare, img.creme, img.cellier, img.terrasse].map((s) => <div key={s} className="lift" style={{ position: "relative", aspectRatio: "1" }}><Image src={s} alt="" fill sizes="16vw" className="img" /></div>)}
      </section>

      <footer>
        <div className="h" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, padding: "28px clamp(20px, 8vw, 120px)", borderTop: `1px solid ${C.line}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", color: C.dim }}><span>© Le Pois Penché · Politique de confidentialité</span><span>Instagram · Facebook · LinkedIn</span></div>
        <div className="h" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#800008", color: C.cream, textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.22em" }}><a href={OPENTABLE} style={{ color: "inherit", textDecoration: "none", padding: "20px 0", borderRight: "1px solid rgba(241,232,213,0.25)" }}>Réservez</a><a href="#" style={{ color: "inherit", textDecoration: "none", padding: "20px 0" }}>Recevez nos nouvelles</a></div>
      </footer>
      <style>{`.d3-row:hover > span:first-child{color:${C.gold}}@media(max-width:700px){.d3-row{grid-template-columns:1fr!important}}`}</style>
    </main>
  );
}
