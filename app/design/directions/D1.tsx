import Image from "next/image";
import { copy, dishes, hours, img, menus, nav, press, OPENTABLE } from "../data";

// 1 · Grande Brasserie — cream, burgundy, the Le Rock system done with conviction
const C = { cream: "#FBF6E6", deep: "#F1E9D2", ink: "#1B1512", soft: "#5C4F47", wine: "#800008", gold: "#B8955A", line: "#DDD2B8" };
const btn = (solid: boolean, invert = false): React.CSSProperties => ({
  fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", border: `2px solid ${invert ? C.cream : C.wine}`, borderRadius: 2, padding: "15px 30px",
  color: solid ? (invert ? C.wine : C.cream) : invert ? C.cream : C.ink, background: solid ? (invert ? C.cream : C.wine) : "transparent",
});
const Frame = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ position: "relative", border: `3px solid ${C.wine}`, outline: `1px solid ${C.wine}`, outlineOffset: -8, borderRadius: 20, padding: "clamp(48px, 5vw, 64px) clamp(20px, 4vw, 56px) clamp(36px, 4vw, 52px)" }}>
    <h2 className="h" style={{ position: "absolute", top: -22, left: "50%", transform: "translateX(-50%)", margin: 0, background: C.cream, padding: "0 20px", fontSize: "clamp(22px, 2.4vw, 32px)", fontWeight: 600, color: C.wine, whiteSpace: "nowrap" }}>{title}</h2>
    {children}
  </section>
);
const slides = [img.salleRouge, img.facade, img.chefCrabe, img.barNuit, img.table];

export default function D1() {
  return (
    <main style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <div className="h" style={{ background: C.wine, color: C.cream, textAlign: "center", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", padding: "9px 16px" }}>{copy.addressShort} · {copy.phone}</div>

      <header style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22, padding: "30px 24px 22px", borderBottom: `1px solid ${C.line}` }}>
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 64, width: "auto" }} />
        <nav className="h" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px 24px", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em" }}>
          {nav.map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}
          <a href={OPENTABLE} className="btn" style={{ ...btn(false), padding: "11px 24px", color: C.wine }}>Réservez</a>
        </nav>
      </header>

      {/* Hero: textless cross-fade carousel, Le Rock style, with a burgundy caption bar */}
      <section style={{ position: "relative", height: "calc(100svh - 150px)", minHeight: 520, maxHeight: 860, overflow: "hidden", background: C.ink }}>
        <div className="xfade" data-interval="5000" style={{ position: "absolute", inset: 0 }}>
          {slides.map((s, i) => <div key={s} className={i === 0 ? "on" : ""}><Image src={s} alt="" fill priority={i < 2} loading={i < 2 ? "eager" : "lazy"} sizes="100vw" className={`img ${i === 0 ? "kb" : ""}`} /></div>)}
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,21,18,0) 60%, rgba(27,21,18,0.55) 100%)" }} />
        <div className="rise-2" style={{ position: "absolute", left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "0 clamp(20px, 4vw, 48px) clamp(24px, 4vw, 44px)", gap: 24, flexWrap: "wrap", color: C.cream }}>
          <span className="h" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.3em" }}>Brasserie parisienne · Mille carré doré · depuis 2008</span>
          <span className="h" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.3em", opacity: 0.8 }}>Lunch · Souper · Brunch · Terrasse</span>
        </div>
      </section>

      {/* Statement */}
      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px 90px", padding: "clamp(72px, 9vw, 130px) clamp(24px, 8vw, 120px) clamp(72px, 8vw, 110px)", alignItems: "start" }}>
        <h1 className="h" style={{ margin: 0, fontSize: "clamp(34px, 4.2vw, 60px)", fontWeight: 600, lineHeight: 1.02, color: C.wine, textWrap: "balance" }}>{copy.welcomeTitle}</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingTop: 8 }}>
          <p style={{ margin: 0, fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.6 }}>{copy.welcome}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} className="btn" style={btn(true)}>Réservez une table</a><a href="#menus" className="btn" style={btn(false)}>Voir les menus</a></div>
        </div>
      </section>

      {/* Press band with marquee */}
      <section style={{ background: C.wine, color: C.cream, padding: "22px 0", borderTop: `1px solid rgba(251,246,230,0.2)`, borderBottom: `1px solid rgba(251,246,230,0.2)` }}>
        <div className="marquee"><div>{[...press, ...press].map((p, i) => <span key={i} className="h" style={{ display: "inline-flex", alignItems: "center", gap: 28, padding: "0 28px", fontSize: 12, fontWeight: 600, letterSpacing: "0.26em" }}><span style={{ color: "#E4C98F" }}>{p.source}</span><span style={{ fontFamily: "var(--font-figtree)", textTransform: "none", letterSpacing: 0, fontSize: 17, fontStyle: "italic", fontWeight: 400 }}>« {p.quote} »</span><span style={{ color: "#E4C98F" }}>✦</span></span>)}</div></div>
      </section>

      {/* Three-photo band with parallax */}
      <section data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 6, padding: "6px 0 0" }}>
        {[img.chefCrabe, img.salle, img.pass].map((s) => <div key={s} className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={s} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" className="img" /></div>)}
      </section>

      {/* Signature dishes */}
      <div data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(16px, 8vw, 120px) 0" }}>
        <Frame title="Les incontournables">
          <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 28 }}>
            {dishes.slice(0, 4).map((d) => (
              <div key={d.name} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={d.img} alt={d.name} fill sizes="(min-width: 900px) 25vw, 50vw" className="img" /></div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}><span className="h" style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{d.name}</span><span style={{ color: C.gold, fontWeight: 500, fontSize: 17 }}>{d.price}</span></div>
              </div>
            ))}
          </div>
        </Frame>
      </div>

      {/* Menus */}
      <div id="menus" data-reveal className="wrap" style={{ padding: "clamp(64px, 8vw, 100px) clamp(16px, 8vw, 120px) 0" }}>
        <Frame title="Nos menus">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px 72px" }}>
            {menus.map((m) => (
              <div key={m.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}><a href="#" className="h ul" style={{ fontSize: 19, fontWeight: 600, color: C.ink }}>{m.name}</a><span style={{ color: C.gold, fontSize: 15 }}>{m.when}</span></div>
                <p style={{ margin: 0, color: C.soft, fontSize: 16, lineHeight: 1.55 }}>{m.desc}</p>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "flex-end" }}><a href="#" className="h ul" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color: C.wine }}>Commandez pour emporter</a></div>
          </div>
        </Frame>
      </div>

      {/* Le Cellier: full-bleed with parallax and a cream card */}
      <section data-reveal style={{ position: "relative", height: "min(720px, 85vh)", overflow: "hidden", marginTop: "clamp(72px, 9vw, 120px)" }}>
        <div className="plx" data-speed="0.14" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="100vw" className="img" /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(27,21,18,0.35) 0%, rgba(27,21,18,0) 60%)" }} />
        <div style={{ position: "absolute", left: "clamp(20px, 6vw, 96px)", bottom: "clamp(24px, 6vw, 72px)", width: "min(560px, calc(100% - 40px))", background: C.cream, padding: "clamp(28px, 4vw, 44px)", display: "flex", flexDirection: "column", gap: 16, borderLeft: `4px solid ${C.wine}` }}>
          <span className="h" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.28em", color: C.gold }}>Événements privés · Traiteur</span>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(22px, 2.4vw, 32px)", fontWeight: 600, color: C.wine, lineHeight: 1.08 }}>{copy.cellierTitle}</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: C.soft }}>{copy.cellier}</p>
          <a href="#" className="btn" style={{ ...btn(false), alignSelf: "flex-start" }}>Demandez des infos</a>
        </div>
      </section>

      {/* Hours + terrace */}
      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 26, padding: "clamp(48px, 7vw, 96px) clamp(24px, 7vw, 96px)", background: C.deep }}>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 600, color: C.wine }}>Heures et adresse</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px 32px", fontSize: 17, lineHeight: 1.5 }}>
            {hours.map((h) => <div key={h.label}><span className="h" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", display: "block", marginBottom: 4 }}>{h.label}</span><span style={{ color: C.soft }}>{h.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</span></div>)}
          </div>
          <p style={{ margin: 0, fontSize: 17, color: C.soft, lineHeight: 1.6 }}>{copy.addressShort}. {copy.location} Terrasse au printemps et en été.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} className="btn" style={btn(true)}>Réservez</a><a href="#" className="btn" style={btn(false)}>Itinéraire</a></div>
        </div>
        <div className="lift" style={{ position: "relative", minHeight: 480 }}><Image src={img.terrasse} alt="La terrasse" fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div>
      </section>

      <section data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 6, padding: "6px 0 0" }}>
        {[img.huitres, img.soupe, img.tartare, img.barBw, img.moules, img.creme].map((s) => <div key={s} className="lift" style={{ position: "relative", aspectRatio: "1" }}><Image src={s} alt="" fill sizes="16vw" className="img" /></div>)}
      </section>

      <footer style={{ borderTop: `3px solid ${C.wine}`, background: C.cream }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, padding: "56px clamp(24px, 7vw, 96px) 48px", fontSize: 15, lineHeight: 1.6, color: C.soft }}>
          <div><Image src="/logo/le-pois-penche.png" alt="" width={1200} height={253} style={{ height: 34, width: "auto", marginBottom: 14 }} />{copy.address}<br />{copy.phone} · {copy.email}</div>
          <div className="h" style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", color: C.ink }}><span>Réservez</span><span>Commandez pour emporter</span><span>Cartes-cadeaux</span><span>Événements privés</span><span>Traiteur</span><span>Carrières</span></div>
          <div className="h" style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: C.gold }}>Suivez-nous</span><span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", color: C.ink }}>Instagram · Facebook · LinkedIn</span></div>
        </div>
        <div className="h" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: C.wine, color: C.cream, textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em" }}><a href={OPENTABLE} style={{ color: "inherit", textDecoration: "none", padding: "20px 0", borderRight: "1px solid rgba(251,246,230,0.3)" }}>Réservez</a><a href="#" style={{ color: "inherit", textDecoration: "none", padding: "20px 0" }}>Recevez nos nouvelles</a></div>
      </footer>
    </main>
  );
}
