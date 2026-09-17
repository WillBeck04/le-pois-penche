import Image from "next/image";
import { copy, hours, img, OPENTABLE } from "../data";

// 7 · Terrasse — bright, awning stripe, pills, summer in Montréal
const C = { bg: "#FFFDF8", ink: "#1B1512", soft: "#4A3F39", red: "#B5121B", line: "#EADFCB", gold: "#E4C98F" };
const h = (extra: React.CSSProperties = {}): React.CSSProperties => ({ fontFamily: "var(--font-montserrat)", textTransform: "uppercase", ...extra });
const Awning = () => <div style={{ height: 14, background: `repeating-linear-gradient(90deg, ${C.red} 0 28px, ${C.bg} 28px 56px)` }} aria-hidden="true" />;
const pill = (dark = false): React.CSSProperties => h({ border: `2px solid ${C.ink}`, padding: "15px 28px", borderRadius: 999, fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", color: dark ? C.bg : C.ink, background: dark ? C.ink : "transparent" });
const moments = [
  { img: img.table, eye: "Lunch · mar. – ven. 11 h 30", title: "Le lunch d'affaires du centre-ville", text: "Plats du jour, soupe à l'oignon gratinée, tartares et onglet à l'échalote, servis vite et bien." },
  { img: img.cote, eye: "Souper · tous les soirs 17 h", title: "Les classiques, avec joie de vivre", text: "Plateaux de fruits de mer, canard confit, bouillabaisse et côte de bœuf vieillie 30 jours." },
  { img: img.huitres, eye: "Brunch · sam. – dim. 10 h 30", title: "Un des brunchs les plus populaires au Canada", text: "Bénédictines au saumon fumé maison, croque-madame, pancakes « Papa Joss » et bar à huîtres." },
];

export default function D7() {
  return (
    <main style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <Awning />
      <header className="rise" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px clamp(20px, 4vw, 56px)", borderBottom: `1px solid ${C.line}`, flexWrap: "wrap" }}>
        <Image src="/logo/le-pois-penche.png" alt="Le Pois Penché" width={1200} height={253} priority style={{ height: 46, width: "auto" }} />
        <nav style={h({ display: "flex", alignItems: "center", gap: "8px 26px", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", flexWrap: "wrap" })}>{["Menus", "Heures", "Notre histoire", "Événements privés", "Traiteur", "Galerie", "FAQ"].map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}<a href={OPENTABLE} className="btn" style={{ background: C.red, color: C.bg, padding: "13px 26px", borderRadius: 999 }}>Réservez</a></nav>
      </header>

      <section style={{ position: "relative", height: "min(800px, 84vh)", minHeight: 540, overflow: "hidden" }}>
        <div className="plx" data-speed="0.16" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.facade} alt="La façade et la terrasse" fill priority sizes="100vw" className="img kb" style={{ objectPosition: "center 30%" }} /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,21,18,0) 40%, rgba(27,21,18,0.65) 100%)" }} />
        <div style={{ position: "absolute", left: "clamp(20px, 4vw, 56px)", right: "clamp(20px, 4vw, 56px)", bottom: "clamp(28px, 5vw, 64px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 60px", color: C.bg, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 860 }}><span className="rise-2" style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.28em" })}>Terrasse ouverte · Mille carré doré · depuis 2008</span><h1 className="rise-3" style={h({ margin: 0, fontSize: "clamp(38px, 5.4vw, 76px)", fontWeight: 700, lineHeight: 0.98, letterSpacing: "-0.01em", textWrap: "balance" })}>La brasserie parisienne préférée du centre-ville</h1></div>
          <a href={OPENTABLE} className="btn rise-4" style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", background: C.bg, color: C.red, padding: "19px 34px", borderRadius: 999, whiteSpace: "nowrap" })}>Réservez une table</a>
        </div>
      </section>

      <section data-stagger className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, padding: "clamp(64px, 8vw, 100px) clamp(20px, 4vw, 56px) 40px" }}>
        {moments.map((m) => <div key={m.eye} style={{ display: "flex", flexDirection: "column", gap: 16 }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={m.img} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" className="img" /></div><span style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.26em", color: C.red })}>{m.eye}</span><h2 style={h({ margin: 0, fontSize: 25, fontWeight: 700, lineHeight: 1.1 })}>{m.title}</h2><p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: C.soft }}>{m.text}</p></div>)}
      </section>

      <div style={{ padding: "64px clamp(20px, 4vw, 56px) 0" }}><Awning /></div>
      <section data-reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26, padding: "72px clamp(20px, 4vw, 56px) 96px", textAlign: "center" }}>
        <h2 style={h({ margin: 0, fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 700, color: C.red })}>Nos menus</h2>
        <div data-stagger style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>{["Lunch", "Souper", "Brunch", "Soupez tôt · 49 $", "Desserts"].map((m) => <a key={m} href="#" className="btn" style={pill()}>{m}</a>)}<a href="#" className="btn" style={pill(true)}>Commandez pour emporter</a></div>
        <p style={{ margin: 0, maxWidth: 720, fontSize: 19, lineHeight: 1.6, color: C.soft }}>Fondé en 2008, Le Pois Penché est une institution bien-aimée du Mille carré doré, à quelques pas du métro Peel. Reconnu par Time Out, The Main et OpenTable.</p>
      </section>

      <section data-stagger className="keep2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 4 }}>
        {[img.soupe, img.chefCrabe, img.canard, img.creme].map((s) => <div key={s} className="lift" style={{ position: "relative", aspectRatio: "1" }}><Image src={s} alt="" fill sizes="(max-width: 720px) 50vw, 25vw" className="img" /></div>)}
      </section>

      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div style={{ background: C.ink, color: C.bg, padding: "clamp(44px, 6vw, 72px) clamp(24px, 5vw, 64px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 22 }}>
          <span style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.26em", color: C.gold })}>Événements privés · Traiteur</span>
          <h2 style={h({ margin: 0, fontSize: "clamp(26px, 2.8vw, 36px)", fontWeight: 700, lineHeight: 1.04 })}>Le Cellier, 20 à 80 convives. Le restaurant, jusqu&apos;à 120.</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, opacity: 0.85 }}>Réunions d&apos;affaires, célébrations, et notre traiteur français chez vous, au bureau ou ailleurs.</p>
          <a href="#" className="btn" style={h({ fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", background: C.bg, color: C.ink, padding: "15px 28px", borderRadius: 999, alignSelf: "flex-start" })}>Demandez des infos</a>
        </div>
        <div className="lift" style={{ position: "relative", minHeight: 460 }}><Image src={img.cellierTable} alt="Le Cellier" fill sizes="(min-width: 900px) 58vw, 100vw" className="img" /></div>
      </section>

      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div className="lift" style={{ position: "relative", minHeight: 460 }}><Image src={img.terrasse} alt="La terrasse le midi" fill sizes="(min-width: 900px) 58vw, 100vw" className="img" /></div>
        <div style={{ background: C.red, color: C.bg, padding: "clamp(44px, 6vw, 72px) clamp(24px, 5vw, 64px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
          <h2 style={h({ margin: 0, fontSize: 30, fontWeight: 700 })}>Heures et adresse</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 17, lineHeight: 1.55 }}>{hours.map((x) => <span key={x.label}><strong style={h({ fontSize: 12, letterSpacing: "0.22em", display: "block", marginBottom: 2 })}>{x.label}</strong>{x.lines.join(" · ")}</span>)}</div>
          <span style={{ fontSize: 16, opacity: 0.9 }}>{copy.addressShort} · {copy.phone}</span>
        </div>
      </section>

      <footer style={h({ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, padding: "28px clamp(20px, 4vw, 56px)", borderTop: `1px solid ${C.line}`, fontSize: 11, fontWeight: 600, letterSpacing: "0.26em", color: "#6B655C" })}><span>© Le Pois Penché · Montréal</span><span>Instagram · Facebook · LinkedIn</span><span style={{ color: C.red }}>Recevez nos nouvelles</span></footer>
      <Awning />
    </main>
  );
}
