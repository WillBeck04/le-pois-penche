import Image from "next/image";
import { copy, hours, img, menus, navShort, press, OPENTABLE } from "../data";

// 3 · Nuit à Montréal — warm near-black, cream, gold
const C = { bg: "#14100E", cream: "#F1E8D5", muted: "#D9CDB6", dim: "#A89B87", gold: "#C9A96A", line: "rgba(201,169,106,0.35)" };
const eye: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 12, fontWeight: 600, letterSpacing: "0.3em", color: C.gold };
const btnGold: React.CSSProperties = { display: "inline-block", fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", color: C.bg, background: C.gold, padding: "15px 28px", textDecoration: "none" };
const btnLine: React.CSSProperties = { ...btnGold, color: C.cream, background: "transparent", border: "1px solid rgba(241,232,213,0.5)" };
const plates = [
  { name: "Côte de bœuf Prime 32 oz, vieillie 30 jours", price: "190", img: img.cote },
  { name: "Le Parisien, plateau pour deux", price: "160", img: img.chefCrabe },
  { name: "Canard confit, sauce aux poivres", price: "42", img: img.canard },
];

export default function D3() {
  return (
    <main style={{ background: C.bg, color: C.cream, fontFamily: "var(--font-figtree)" }}>
      <section style={{ position: "relative", height: "min(920px, 100vh)", overflow: "hidden" }}>
        <Image src={img.barNuit} alt="Le bar le soir" fill priority sizes="100vw" className="img kb" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,14,0.6) 0%, rgba(20,16,14,0) 30%, rgba(20,16,14,0.2) 55%, rgba(20,16,14,0.97) 100%)" }} />
        <header style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "clamp(60px, 6vw, 30px) clamp(20px, 4vw, 56px) 0" }}>
          <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 44, width: "auto", filter: "brightness(0) invert(1) opacity(0.94)" }} />
          <nav className="h" style={{ display: "flex", alignItems: "center", gap: "8px 26px", fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {navShort.map((n) => <a key={n} href="#" style={{ color: C.cream, textDecoration: "none" }} className="d3-nav">{n}</a>)}
            <a href={OPENTABLE} style={{ color: C.gold, border: `1px solid ${C.gold}`, padding: "11px 22px", textDecoration: "none" }}>Réservez</a>
          </nav>
        </header>
        <div style={{ position: "absolute", left: "clamp(20px, 4vw, 56px)", right: "clamp(20px, 4vw, 56px)", bottom: "clamp(32px, 5vw, 64px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px 60px", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}><span style={eye}>Depuis 2008 · Mille carré doré · Montréal</span><h1 className="h" style={{ margin: 0, fontSize: "clamp(40px, 5.5vw, 80px)", fontWeight: 700, lineHeight: 0.96, letterSpacing: "-0.01em", textWrap: "balance" }}>La brasserie parisienne du centre-ville</h1></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, paddingBottom: 8 }}><p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.muted }}>Classiques français aux accents montréalais, steaks d&apos;exception et plateaux de fruits de mer, servis avec une joie de vivre des plus chaleureuses.</p><div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} style={btnGold}>Réservez</a><a href="#menus" style={btnLine}>Nos menus</a></div></div>
        </div>
      </section>

      <div className="h" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 40px", padding: "22px clamp(20px, 4vw, 56px)", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", color: C.dim }}>
        {press.map((p) => <span key={p.source}><span style={{ color: C.gold }}>{p.source.split(" · ")[0]}</span> · {p.quote}</span>)}
      </div>

      <section data-reveal style={{ padding: "clamp(60px, 7vw, 100px) clamp(20px, 4vw, 56px) 0", display: "flex", flexDirection: "column", gap: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}><span style={eye}>Ce soir, à la carte</span><span style={{ fontSize: 16, color: C.dim }}>Souper tous les soirs dès 17 h</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
          {plates.map((p) => <div key={p.name} style={{ position: "relative", aspectRatio: "1/1" }}><Image src={p.img} alt={p.name} fill sizes="(min-width: 900px) 33vw, 100vw" className="img" /><div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,14,0) 50%, rgba(20,16,14,0.85) 100%)" }} /><div style={{ position: "absolute", left: 24, right: 24, bottom: 22, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}><span className="h" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.06em" }}>{p.name}</span><span style={{ color: C.gold, fontSize: 18 }}>{p.price}</span></div></div>)}
        </div>
      </section>

      <section id="menus" data-reveal style={{ padding: "clamp(64px, 8vw, 110px) clamp(20px, 8vw, 120px) clamp(64px, 7vw, 100px)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 26, flexWrap: "wrap", gap: 12 }}><span style={eye}>Nos menus</span><a href="#" className="h" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", color: C.dim, textDecoration: "none" }}>Commandez pour emporter</a></div>
        {menus.map((m, i) => <div key={m.name} style={{ display: "grid", gridTemplateColumns: "minmax(140px, 300px) 1fr auto", gap: "12px 40px", alignItems: "baseline", padding: "28px 0", borderTop: `1px solid ${C.line}`, borderBottom: i === menus.length - 1 ? `1px solid ${C.line}` : "none" }}><span className="h" style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 600 }}>{m.name}</span><span style={{ fontSize: 17, color: C.dim }}>{m.desc}</span><span style={{ fontSize: 16, color: C.gold, whiteSpace: "nowrap" }}>{m.whenShort}</span></div>)}
      </section>

      <section data-reveal style={{ position: "relative", height: "min(640px, 80vh)" }}>
        <Image src={img.salleRouge} alt="Le Cellier" fill sizes="100vw" className="img" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(20,16,14,0.92) 0%, rgba(20,16,14,0.55) 45%, rgba(20,16,14,0) 100%)" }} />
        <div style={{ position: "absolute", left: "clamp(20px, 8vw, 120px)", right: 20, top: "50%", transform: "translateY(-50%)", maxWidth: 560, display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={eye}>Événements privés · Traiteur</span>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.05 }}>{copy.cellierTitle}</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.muted }}>Réunions d&apos;affaires et célébrations dans notre salle de banquet, ou notre gastronomie française livrée chez vous, au bureau ou ailleurs.</p>
          <a href="#" style={{ ...btnGold, alignSelf: "flex-start" }}>Demandez des infos</a>
        </div>
      </section>

      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div style={{ position: "relative", minHeight: 420 }}><Image src={img.imad} alt="Imad Nabwani" fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 24, padding: "clamp(40px, 6vw, 80px) clamp(24px, 8vw, 120px)" }}>
          <span style={eye}>Notre histoire</span>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 600, lineHeight: 1.12 }}>Une ambassade montréalaise de la joie de vivre à la française</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: C.muted }}>{copy.story}</p>
          <a href="#" className="h" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", color: C.gold, textDecoration: "none", borderBottom: `1px solid ${C.gold}`, paddingBottom: 5, alignSelf: "flex-start" }}>Lire notre histoire</a>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, padding: "clamp(60px, 7vw, 90px) clamp(20px, 8vw, 120px) 80px", borderTop: `1px solid ${C.line}` }}>
        {hours.map((h) => <div key={h.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={eye}>{h.label}</span><span style={{ fontSize: 17, lineHeight: 1.5, color: C.muted }}>{h.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</span></div>)}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={eye}>Adresse</span><span style={{ fontSize: 17, lineHeight: 1.5, color: C.muted }}>{copy.address}<br />{copy.phone}</span></div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, padding: "0 12px 12px" }}>
        {[img.huitres, img.pass, img.tartare, img.creme, img.cellier, img.terrasse].map((s) => <div key={s} style={{ position: "relative", aspectRatio: "1" }}><Image src={s} alt="" fill sizes="16vw" className="img" /></div>)}
      </section>

      <footer>
        <div className="h" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, padding: "26px clamp(20px, 8vw, 120px)", borderTop: `1px solid ${C.line}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: C.dim }}><span>© Le Pois Penché · Politique de confidentialité</span><span>Instagram · Facebook · LinkedIn</span></div>
        <div className="h" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#800008", color: C.cream, textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em" }}><a href={OPENTABLE} style={{ color: "inherit", textDecoration: "none", padding: "18px 0", borderRight: "1px solid rgba(241,232,213,0.25)" }}>Réservez</a><a href="#" style={{ color: "inherit", textDecoration: "none", padding: "18px 0" }}>Recevez nos nouvelles</a></div>
      </footer>
    </main>
  );
}
