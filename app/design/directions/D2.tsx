import Image from "next/image";
import { copy, hours, img, menus, press, OPENTABLE } from "../data";

// 2 · Belle Époque — Cinzel capitals, gold hairlines, printed carte
const C = { cream: "#F7F0DF", deep: "#F1E7CF", ink: "#2A1F1A", soft: "#5C4F47", wine: "#7A0A12", gold: "#B8955A" };
const gold: React.CSSProperties = { border: `1px solid ${C.gold}`, outline: `1px solid ${C.gold}`, outlineOffset: 6 };
const Orn = ({ w = 120 }: { w?: number }) => (
  <svg width={w} height="14" viewBox="0 0 120 14" fill="none" stroke={C.gold} strokeWidth="1.2" strokeLinecap="round" aria-hidden="true"><path d="M2 7 H44" /><path d="M76 7 H118" /><path d="M52 7 c3 -6 9 -6 9 0 c0 6 6 6 9 0" /></svg>
);
const Rule = () => <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}><div style={{ height: 1, background: C.gold }} /><div style={{ height: 1, background: C.gold }} /></div>;
const H2 = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 44 }}><Rule /><h2 className="cz" style={{ margin: "18px 0 0", fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 600, letterSpacing: "0.16em", color: C.wine, textAlign: "center" }}>{children}</h2><Orn /></div>
);
const btn = (solid: boolean): React.CSSProperties => ({ display: "inline-block", fontFamily: "var(--font-cinzel)", textTransform: "uppercase", fontSize: 12, fontWeight: 600, letterSpacing: "0.28em", textDecoration: "none", padding: "15px 34px", color: solid ? C.cream : C.wine, background: solid ? C.wine : "transparent", border: `1px solid ${C.wine}` });
const plates = [
  { name: "Le Parisien", desc: "½ homard, 8 huîtres, 4 crevettes, moules, ceviche de pétoncles, anchois d'Espagne · pour deux, 160", img: img.chefCrabe },
  { name: "La côte de bœuf", desc: "Prime canadien 32 oz, vieillie à sec 30 jours, choix de sauce et deux accompagnements · 190", img: img.cote },
  { name: "La soupe à l'oignon", desc: "Gratinée au Louis d'Or, comme à Paris, midi et soir · 21", img: img.soupe },
];

export default function D2() {
  return (
    <main style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <div className="cz" style={{ textAlign: "center", fontSize: 11, fontWeight: 600, letterSpacing: "0.32em", color: C.wine, padding: "12px 16px", borderBottom: `1px solid ${C.gold}` }}>{copy.addressShort} · {copy.phone}</div>
      <header style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "30px 24px 22px" }}>
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 72, width: "auto" }} />
        <svg width="260" height="18" viewBox="0 0 260 18" fill="none" stroke={C.gold} strokeWidth="1.2" strokeLinecap="round" aria-hidden="true"><path d="M4 9 H106" /><path d="M154 9 H256" /><path d="M118 9 c4 -8 12 -8 12 0 c0 8 8 8 12 0" /><circle cx="130" cy="9" r="1.6" fill={C.gold} stroke="none" /></svg>
        <nav className="cz" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 14px", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em" }}>
          {["Menus", "Heures", "Notre histoire", "Événements privés", "Traiteur", "Galerie", "FAQ"].map((n, i) => <span key={n} style={{ display: "contents" }}>{i > 0 && <span style={{ color: C.gold }}>·</span>}<a href="#" style={{ color: C.ink, textDecoration: "none" }}>{n}</a></span>)}
          <span style={{ color: C.gold }}>·</span><a href="#" style={{ color: C.wine, textDecoration: "none" }}>EN</a>
        </nav>
      </header>

      <section style={{ position: "relative", height: "min(720px, 75vh)", marginBottom: "clamp(240px, 26vw, 200px)" }}>
        <Image src={img.facade} alt="La façade du Pois Penché" fill priority sizes="100vw" className="img kb" />
        <div style={{ ...gold, position: "absolute", left: "50%", bottom: "clamp(-220px, -18vw, -140px)", transform: "translateX(-50%)", width: "min(860px, calc(100% - 48px))", background: C.cream, padding: "clamp(28px, 4vw, 46px) clamp(20px, 5vw, 60px) clamp(28px, 4vw, 42px)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
          <span className="cz" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.34em", color: C.gold }}>Mille carré doré · Montréal · depuis 2008</span>
          <h1 className="cz" style={{ margin: 0, fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 600, letterSpacing: "0.08em", color: C.wine, lineHeight: 1.15 }}>Brasserie parisienne</h1>
          <p style={{ margin: 0, maxWidth: 640, fontSize: 18, lineHeight: 1.6, fontStyle: "italic", color: C.soft }}>Les grands classiques de la cuisine française aux accents montréalais, des steaks d&apos;exception et des plateaux de fruits de mer spectaculaires, servis avec une joie de vivre des plus chaleureuses.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 8 }}><a href={OPENTABLE} style={btn(true)}>Réservez une table</a><a href="#carte" style={btn(false)}>La carte</a></div>
        </div>
      </section>

      <section data-reveal className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30, padding: "20px clamp(24px, 8vw, 120px) 100px" }}>
        <span className="cz" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.34em", color: C.wine }}>Distinctions</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", width: "100%" }}>
          {press.map((p, i) => <div key={p.source} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center", padding: "10px 32px", borderRight: i < 2 ? `1px solid ${C.gold}` : "none" }}><span style={{ fontSize: 19, lineHeight: 1.45, fontStyle: "italic" }}>« {p.quote} »</span><span className="cz" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.26em", color: C.gold }}>{p.source}</span></div>)}
        </div>
      </section>

      <section data-reveal className="wrap" style={{ padding: "0 clamp(24px, 8vw, 120px) 110px" }}>
        <H2>Les incontournables</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 40 }}>
          {plates.map((p) => <div key={p.name} style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "center", alignItems: "center" }}><div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}><Image src={p.img} alt={p.name} fill sizes="(min-width: 900px) 33vw, 100vw" className="img" /></div><span className="cz" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.14em" }}>{p.name}</span><span style={{ fontStyle: "italic", color: C.soft, fontSize: 16, lineHeight: 1.5 }}>{p.desc}</span></div>)}
        </div>
      </section>

      <section id="carte" data-reveal className="wrap" style={{ padding: "0 clamp(24px, 12vw, 200px) 110px" }}>
        <H2>La carte</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "34px 80px" }}>
          {menus.map((m) => <div key={m.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}><div style={{ display: "flex", alignItems: "baseline", gap: 10 }}><span className="cz" style={{ fontSize: 17, fontWeight: 600, letterSpacing: "0.14em" }}>{m.name}</span><span style={{ flex: 1, borderBottom: `1px dotted ${C.gold}`, transform: "translateY(-5px)" }} /><span style={{ fontSize: 15, color: C.wine, textAlign: "right" }}>{m.whenShort}</span></div><p style={{ margin: 0, fontStyle: "italic", color: C.soft, fontSize: 16, lineHeight: 1.5 }}>{m.desc}</p></div>)}
          <div style={{ display: "flex", alignItems: "flex-end" }}><a href="#" className="cz" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.28em", color: C.wine, textDecoration: "none", borderBottom: `1px solid ${C.wine}`, paddingBottom: 5 }}>Commandez pour emporter</a></div>
        </div>
      </section>

      <section data-reveal className="wrap" style={{ padding: "0 clamp(24px, 8vw, 120px) 110px" }}>
        <div style={{ ...gold, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", background: C.deep }}>
          <div style={{ position: "relative", minHeight: 400 }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="(min-width: 900px) 55vw, 100vw" className="img" /></div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 18, padding: "clamp(32px, 5vw, 56px) clamp(24px, 5vw, 60px)" }}>
            <span className="cz" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: C.gold }}>Événements privés</span>
            <h2 className="cz" style={{ margin: 0, fontSize: 26, fontWeight: 600, letterSpacing: "0.1em", color: C.wine }}>Le Cellier</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: C.soft, fontStyle: "italic" }}>Notre salle de banquet accueille de 20 à 80 convives ; l&apos;ensemble du restaurant, jusqu&apos;à 120. Réunions d&apos;affaires, célébrations, et notre traiteur français chez vous, au bureau ou ailleurs.</p>
            <a href="#" style={{ ...btn(true), alignSelf: "flex-start", padding: "14px 28px" }}>Demandez des infos</a>
          </div>
        </div>
      </section>

      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, padding: "0 clamp(24px, 8vw, 120px) 110px", alignItems: "center" }}>
        <div style={{ position: "relative", aspectRatio: "4/3" }}><Image src={img.terrasse} alt="La terrasse" fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div>
        <div style={{ ...gold, padding: "40px clamp(24px, 4vw, 48px)", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <h2 className="cz" style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: "0.2em", color: C.wine }}>Heures et adresse</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18, width: "100%", fontSize: 15, lineHeight: 1.5, color: C.soft }}>
            {hours.map((h) => <div key={h.label}><span className="cz" style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", color: C.ink, marginBottom: 6 }}>{h.label}</span>{h.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}</div>)}
          </div>
          <p style={{ margin: 0, fontSize: 15, color: C.soft, fontStyle: "italic" }}>{copy.addressShort} · à l&apos;angle de Drummond, métro Peel · Terrasse au printemps et en été</p>
          <a href="#" style={{ ...btn(false), padding: "13px 28px" }}>Itinéraire</a>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18, padding: "0 clamp(24px, 8vw, 120px) 100px" }} className="wrap">
        {[img.huitres, img.canard, img.salleRouge, img.creme, img.service].map((s) => <div key={s} style={{ position: "relative", aspectRatio: "4/3", border: `1px solid ${C.gold}`, padding: 5 }}><div style={{ position: "relative", width: "100%", height: "100%" }}><Image src={s} alt="" fill sizes="20vw" className="img" /></div></div>)}
      </section>

      <footer style={{ background: C.wine, color: C.cream, padding: "34px clamp(24px, 7vw, 96px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span className="cz" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.28em" }}>Le Pois Penché · Montréal · depuis 2008</span>
        <span className="cz" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", color: "#E4C98F" }}>Instagram · Facebook · LinkedIn</span>
        <a href={OPENTABLE} className="cz" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", border: "1px solid #E4C98F", padding: "10px 22px", color: "inherit", textDecoration: "none" }}>Réservez</a>
      </footer>
    </main>
  );
}
