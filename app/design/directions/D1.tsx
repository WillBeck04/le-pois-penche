import Image from "next/image";
import { copy, dishes, hours, img, menus, nav, press, OPENTABLE } from "../data";

// 1 · Grande Brasserie — cream, burgundy, Le Rock's framed sections
const C = { cream: "#FBF6E6", deep: "#F1E9D2", ink: "#1B1512", soft: "#5C4F47", wine: "#800008", gold: "#B8955A", line: "#DDD2B8" };

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ position: "relative", border: `3px solid ${C.wine}`, outline: `1px solid ${C.wine}`, outlineOffset: -8, borderRadius: 20, padding: "clamp(44px, 5vw, 60px) clamp(20px, 4vw, 56px) clamp(32px, 4vw, 48px)" }}>
      <h2 className="h" style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", margin: 0, background: C.cream, padding: "0 18px", fontSize: "clamp(20px, 2.2vw, 30px)", fontWeight: 600, color: C.wine, whiteSpace: "nowrap" }}>{title}</h2>
      {children}
    </section>
  );
}

const btn = (solid: boolean): React.CSSProperties => ({
  display: "inline-block", fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textDecoration: "none", border: `2px solid ${C.wine}`, borderRadius: 2, padding: "14px 28px", color: solid ? C.cream : C.ink, background: solid ? C.wine : "transparent",
});

export default function D1() {
  return (
    <main style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <div className="h" style={{ background: C.wine, color: C.cream, textAlign: "center", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", padding: "9px 16px" }}>{copy.addressShort} · {copy.phone}</div>

      <header style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "26px 24px 20px", borderBottom: `1px solid ${C.line}` }}>
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 56, width: "auto" }} />
        <nav className="h" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px 22px", fontSize: 12, fontWeight: 600, letterSpacing: "0.14em" }}>
          {nav.map((n) => <a key={n} href="#" style={{ color: C.ink, textDecoration: "none" }}>{n}</a>)}
          <a href={OPENTABLE} style={{ ...btn(false), padding: "10px 22px", color: C.wine }}>Réservez</a>
          <a href="#" style={{ color: C.soft, textDecoration: "none" }}>EN</a>
        </nav>
      </header>

      <section style={{ position: "relative", height: "min(780px, 80vh)", overflow: "hidden", background: C.ink }}>
        <Image src={img.salleRouge} alt="La salle du Pois Penché" fill priority sizes="100vw" className="img kb" style={{ objectPosition: "center 60%" }} />
        <div className="h" style={{ position: "absolute", left: 24, bottom: 32, background: C.cream, color: C.wine, fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", padding: "12px 18px" }}>Brasserie parisienne · Mille carré doré · depuis 2008</div>
      </section>

      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px 80px", padding: "clamp(64px, 8vw, 110px) clamp(24px, 8vw, 120px) clamp(64px, 7vw, 100px)", alignItems: "start" }}>
        <h1 className="h" style={{ margin: 0, fontSize: "clamp(30px, 3.6vw, 52px)", fontWeight: 600, lineHeight: 1.04, color: C.wine, textWrap: "balance" }}>{copy.welcomeTitle}</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6 }}>{copy.welcome}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} style={btn(true)}>Réservez une table</a><a href="#menus" style={btn(false)}>Voir les menus</a></div>
        </div>
      </section>

      <section style={{ background: C.wine, color: C.cream }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32, padding: "40px clamp(24px, 8vw, 120px)" }}>
          {press.map((p) => (
            <div key={p.source} style={{ borderLeft: "1px solid rgba(251,246,230,0.35)", paddingLeft: 22, display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 17, lineHeight: 1.4, fontStyle: "italic" }}>« {p.quote} »</span>
              <span className="h" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: "#E4C98F" }}>{p.source}</span>
            </div>
          ))}
        </div>
      </section>

      <div data-reveal className="wrap" style={{ padding: "clamp(64px, 8vw, 110px) clamp(16px, 8vw, 120px) 0" }}>
        <Frame title="Les incontournables">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 28 }}>
            {dishes.slice(0, 4).map((d) => (
              <div key={d.name} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ position: "relative", aspectRatio: "4/3" }}><Image src={d.img} alt={d.name} fill sizes="(min-width: 900px) 25vw, 50vw" className="img" /></div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}><span className="h" style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{d.name}</span><span style={{ color: C.gold, fontWeight: 500 }}>{d.price}</span></div>
              </div>
            ))}
          </div>
        </Frame>
      </div>

      <div id="menus" data-reveal className="wrap" style={{ padding: "clamp(56px, 7vw, 90px) clamp(16px, 8vw, 120px) 0" }}>
        <Frame title="Nos menus">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "26px 72px" }}>
            {menus.map((m) => (
              <div key={m.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}><a href="#" className="h" style={{ fontSize: 18, fontWeight: 600, color: C.ink, textDecoration: "none" }}>{m.name}</a><span style={{ color: C.gold, fontSize: 15 }}>{m.when}</span></div>
                <p style={{ margin: 0, color: C.soft, fontSize: 16, lineHeight: 1.5 }}>{m.desc}</p>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "flex-end" }}><a href="#" className="h" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", color: C.wine, textDecoration: "none", borderBottom: `2px solid ${C.wine}`, paddingBottom: 4 }}>Commandez pour emporter</a></div>
          </div>
        </Frame>
      </div>

      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", marginTop: "clamp(64px, 8vw, 110px)" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 22, padding: "clamp(40px, 6vw, 72px) clamp(24px, 7vw, 96px)", background: C.deep }}>
          <span className="h" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", color: C.gold }}>Événements privés</span>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 600, color: C.wine, lineHeight: 1.08 }}>{copy.cellierTitle}</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.soft }}>{copy.cellier}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href="#" style={btn(false)}>Demandez des infos</a></div>
        </div>
        <div style={{ position: "relative", minHeight: 420 }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div>
      </section>

      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
        <div style={{ position: "relative", minHeight: 420 }}><Image src={img.terrasse} alt="La terrasse" fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 24, padding: "clamp(40px, 6vw, 64px) clamp(24px, 7vw, 96px)" }}>
          <h2 className="h" style={{ margin: 0, fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 600, color: C.wine }}>Heures et adresse</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px 32px", fontSize: 17, lineHeight: 1.5 }}>
            {hours.map((h) => <div key={h.label}><span className="h" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", display: "block" }}>{h.label}</span><span style={{ color: C.soft }}>{h.lines.join(" · ")}</span></div>)}
          </div>
          <p style={{ margin: 0, fontSize: 17, color: C.soft, lineHeight: 1.55 }}>{copy.addressShort}. {copy.location} Terrasse au printemps et en été.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><a href={OPENTABLE} style={btn(true)}>Réservez</a><a href="#" style={btn(false)}>Itinéraire</a></div>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 4, paddingTop: 4 }}>
        {[img.huitres, img.pass, img.tartare, img.barBw, img.moules, img.facade].map((s) => <div key={s} style={{ position: "relative", aspectRatio: "1" }}><Image src={s} alt="" fill sizes="16vw" className="img" /></div>)}
      </section>

      <footer style={{ borderTop: `3px solid ${C.wine}`, background: C.deep }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, padding: "52px clamp(24px, 7vw, 96px) 44px", fontSize: 15, lineHeight: 1.6, color: C.soft }}>
          <div><span className="h" style={{ display: "block", fontSize: 16, fontWeight: 600, color: C.wine, marginBottom: 10 }}>Le Pois Penché</span>{copy.address}<br />{copy.phone} · {copy.email}</div>
          <div className="h" style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", color: C.ink }}><span>Réservez</span><span>Commandez pour emporter</span><span>Cartes-cadeaux</span><span>Événements privés</span><span>Traiteur</span><span>Carrières</span></div>
          <div className="h" style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", color: C.gold }}>Suivez-nous</span><span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", color: C.ink }}>Instagram · Facebook · LinkedIn</span></div>
        </div>
        <div className="h" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: C.wine, color: C.cream, textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em" }}><a href={OPENTABLE} style={{ color: "inherit", textDecoration: "none", padding: "18px 0", borderRight: "1px solid rgba(251,246,230,0.3)" }}>Réservez</a><a href="#" style={{ color: "inherit", textDecoration: "none", padding: "18px 0" }}>Recevez nos nouvelles</a></div>
      </footer>
    </main>
  );
}
