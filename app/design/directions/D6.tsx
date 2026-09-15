import Image from "next/image";
import { copy, hours, img, menus, navShort, press, OPENTABLE } from "../data";

// 6 · Rouge — burgundy ground, cream blocks, poster energy
const C = { wine: "#800008", cream: "#FBF6E6", ink: "#1B1512", soft: "#4A3F39", tint: "#F1DFC8", gold: "#E4C98F" };
const h = (extra: React.CSSProperties = {}): React.CSSProperties => ({ fontFamily: "var(--font-montserrat)", textTransform: "uppercase", ...extra });
const plates = [
  { name: "Soupe à l'oignon", price: "21", img: img.soupe }, { name: "Côte de bœuf 32 oz", price: "190", img: img.cote, up: true },
  { name: "Canard confit", price: "42", img: img.canard }, { name: "Crème brûlée", price: "14", img: img.creme, up: true },
];

export default function D6() {
  return (
    <main style={{ background: C.wine, color: C.cream, fontFamily: "var(--font-figtree)" }}>
      <header className="rise" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "26px clamp(20px, 4vw, 56px)", flexWrap: "wrap" }}>
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 46, width: "auto", filter: "brightness(0) invert(0.96) sepia(0.25)" }} />
        <nav style={h({ display: "flex", alignItems: "center", gap: "8px 28px", fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", flexWrap: "wrap" })}>{navShort.map((n) => <a key={n} href="#" className="ul" style={{ color: C.cream }}>{n}</a>)}<a href={OPENTABLE} className="btn" style={{ background: C.cream, color: C.wine, padding: "13px 26px" }}>Réservez</a></nav>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", height: "min(820px, 88vh)", minHeight: 560, overflow: "hidden" }}>
        <div className="plx" data-speed="0.16" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.chefCrabe} alt="Le chef et le plateau" fill priority sizes="100vw" className="img kb" /></div>
        <span className="rise-2" style={h({ position: "absolute", right: "clamp(12px, 3vw, 48px)", top: 8, fontSize: "clamp(72px, 15vw, 220px)", maxWidth: "calc(100% - 24px)", overflow: "hidden", fontWeight: 800, lineHeight: 1, color: "rgba(251,246,230,0.2)", letterSpacing: "-0.05em", mixBlendMode: "screen" })} aria-hidden="true">2008</span>
        <div className="rise-3" style={{ position: "absolute", left: 0, bottom: 0, width: "min(740px, 100%)", background: C.cream, color: C.ink, padding: "clamp(30px, 4vw, 52px) clamp(20px, 4vw, 60px) clamp(30px, 4vw, 48px)", display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.32em", color: C.wine })}>Brasserie parisienne · Mille carré doré</span>
          <h1 style={h({ margin: 0, fontSize: "clamp(38px, 4.8vw, 66px)", fontWeight: 800, lineHeight: 0.96, letterSpacing: "-0.01em", color: C.wine, textWrap: "balance" })}>Le centre-ville a sa brasserie.</h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: C.soft }}>Classiques français aux accents montréalais, steaks d&apos;exception, plateaux de fruits de mer. Au plaisir de vous servir !</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} className="btn" style={h({ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", color: C.cream, background: C.wine, padding: "16px 30px" })}>Réservez</a><a href="#menus" className="btn" style={h({ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", color: C.wine, border: `2px solid ${C.wine}`, padding: "14px 28px" })}>Nos menus</a></div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" style={h({ padding: "18px 0", borderTop: "1px solid rgba(251,246,230,0.25)", borderBottom: "1px solid rgba(251,246,230,0.25)", fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", color: C.gold })}>
        <div>{Array.from({ length: 4 }).map((_, i) => <span key={i} style={{ padding: "0 28px" }}>Lunch ✦ Souper ✦ Brunch ✦ Terrasse ✦ Le Cellier ✦ Traiteur ✦ Depuis 2008 ✦ Mille carré doré ✦</span>)}</div>
      </div>

      {/* Statement + plates */}
      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px 80px", padding: "clamp(72px, 9vw, 120px) clamp(20px, 8vw, 120px) clamp(72px, 8vw, 110px)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={h({ margin: 0, fontSize: "clamp(32px, 3.8vw, 52px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.01em", textWrap: "balance" })}>Lunch dès 11 h 30, souper tous les soirs, brunch la fin de semaine.</h2>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: C.tint }}>{copy.location} Terrasse ouverte au printemps et en été. Le Cellier pour vos événements de 20 à 80 convives.</p>
          <div style={h({ display: "flex", flexDirection: "column", gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", color: C.gold })}>{press.map((p) => <span key={p.source}>{p.source.split(" · ")[0]} · {p.quote}</span>)}</div>
        </div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          {plates.map((p) => <div key={p.name} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: p.up ? 60 : 0 }}><div className="lift" style={{ position: "relative", aspectRatio: "1" }}><Image src={p.img} alt={p.name} fill sizes="(min-width: 900px) 25vw, 50vw" className="img" /></div><div style={h({ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em" })}><span>{p.name}</span><span style={{ color: C.gold }}>{p.price}</span></div></div>)}
        </div>
      </section>

      {/* Menus on cream */}
      <section id="menus" data-reveal style={{ background: C.cream, color: C.ink }}>
        <div className="wrap" style={{ padding: "clamp(64px, 8vw, 110px) clamp(20px, 8vw, 120px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px 80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.32em", color: C.wine })}>Nos menus</span>
            <h2 style={h({ margin: 0, fontSize: "clamp(32px, 3.6vw, 48px)", fontWeight: 800, lineHeight: 1.0, color: C.wine })}>Cinq cartes, une cuisine</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#5C4F47" }}>Menus en salle, sur la terrasse et pour emporter. Les prix et les plats changent avec les arrivages.</p>
            <a href="#" className="ul" style={h({ fontSize: 11, fontWeight: 700, letterSpacing: "0.26em", color: C.wine, alignSelf: "flex-start" })}>Commandez pour emporter</a>
            <div className="lift" style={{ position: "relative", aspectRatio: "16/10", marginTop: 20 }}><Image src={img.table} alt="" fill sizes="(min-width: 900px) 35vw, 100vw" className="img" /></div>
          </div>
          <div data-stagger style={{ display: "flex", flexDirection: "column" }}>
            {menus.map((m, i) => <div key={m.name} className="d6-row" style={{ display: "grid", gridTemplateColumns: "minmax(120px, 200px) 1fr auto", gap: "8px 24px", alignItems: "baseline", padding: "24px 0", borderTop: `2px solid ${C.wine}`, borderBottom: i === menus.length - 1 ? `2px solid ${C.wine}` : "none" }}><span style={h({ fontSize: "clamp(22px, 2.2vw, 28px)", fontWeight: 800 })}>{m.name}</span><span style={{ fontSize: 16, color: "#5C4F47" }}>{m.desc}</span><span style={{ fontSize: 15, color: C.wine, whiteSpace: "nowrap" }}>{m.whenShort}</span></div>)}
          </div>
        </div>
      </section>

      {/* Cellier */}
      <section data-reveal style={{ position: "relative", height: "min(700px, 85vh)", overflow: "hidden" }}>
        <div className="plx" data-speed="0.14" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="100vw" className="img" /></div>
        <div style={{ position: "absolute", right: 0, bottom: 0, width: "min(660px, 100%)", background: C.cream, color: C.ink, padding: "clamp(30px, 4vw, 48px) clamp(20px, 4vw, 60px)", display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={h({ fontSize: 11, fontWeight: 600, letterSpacing: "0.32em", color: C.wine })}>Événements privés · Traiteur</span>
          <h2 style={h({ margin: 0, fontSize: "clamp(26px, 2.8vw, 38px)", fontWeight: 800, lineHeight: 1.0, color: C.wine })}>Le Cellier, 20 à 80 convives. Le restaurant, jusqu&apos;à 120.</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: C.soft }}>Réunions d&apos;affaires, célébrations, et notre traiteur français chez vous, au bureau ou ailleurs.</p>
          <a href="#" className="btn" style={h({ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", color: C.cream, background: C.wine, padding: "15px 28px", alignSelf: "flex-start" })}>Demandez des infos</a>
        </div>
      </section>

      <section data-stagger className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, padding: "clamp(64px, 8vw, 110px) clamp(20px, 8vw, 120px)" }}>
        {[{ s: img.steak, c: "NY steak frites Angus « Prime » · 62" }, { s: img.huitres, c: "Le bar à huîtres · prix du marché" }, { s: img.tartare, c: "Tartare de saumon au gingembre · 42" }].map((x) => <div key={x.s} style={{ display: "flex", flexDirection: "column", gap: 12 }}><div className="lift" style={{ position: "relative", aspectRatio: "5/4" }}><Image src={x.s} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" className="img" /></div><span style={h({ fontSize: 11, fontWeight: 700, letterSpacing: "0.26em", color: C.tint })}>{x.c}</span></div>)}
      </section>

      <section data-stagger className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, padding: "0 clamp(20px, 8vw, 120px) 110px", color: C.tint }}>
        {hours.map((x) => <div key={x.label}><span style={h({ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", color: C.gold, marginBottom: 8 })}>{x.label}</span><span style={{ fontSize: 17, lineHeight: 1.55 }}>{x.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</span></div>)}
        <div><span style={h({ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", color: C.gold, marginBottom: 8 })}>Adresse</span><span style={{ fontSize: 17, lineHeight: 1.55 }}>{copy.addressShort} · métro Peel<br />{copy.phone}</span></div>
      </section>

      <footer style={{ background: C.cream, color: C.ink, padding: "48px clamp(20px, 8vw, 120px) 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, fontSize: 15, lineHeight: 1.6 }}>
        <div style={{ color: "#5C4F47" }}><Image src="/logo/le-pois-penche.png" alt="" width={1200} height={253} style={{ height: 34, width: "auto", marginBottom: 12 }} />{copy.address}<br />{copy.phone} · {copy.email}</div>
        <div style={h({ fontSize: 11, fontWeight: 700, letterSpacing: "0.26em", display: "flex", flexDirection: "column", gap: 8 })}><span>Cartes-cadeaux</span><span>Carrières</span><span>FAQ</span><span>Politique de confidentialité</span></div>
        <div style={h({ fontSize: 11, fontWeight: 700, letterSpacing: "0.26em", display: "flex", flexDirection: "column", gap: 8 })}><span>Instagram · Facebook · LinkedIn</span><span style={{ color: C.wine }}>Recevez nos nouvelles</span></div>
      </footer>
      <style>{`@media(max-width:700px){.d6-row{grid-template-columns:1fr!important}}`}</style>
    </main>
  );
}
