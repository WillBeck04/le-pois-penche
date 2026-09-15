// Resizes the client's original photos (8000x4500) into web-ready JPEGs in public/images.
// Run: npm run images
// Source folders live outside the repo in ../assets so the 8 MB originals are never committed.
import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public", "images");
const CLIENT = path.resolve(ROOT, "..", "assets", "photos", "2026 Web selections");
const OLD = path.resolve(ROOT, "..", "assets", "old-site");
const LOGO = path.resolve(ROOT, "..", "assets", "logo", "Logo_web_Le_Pois_Penche_transparent.png");

const WIDTH = 2560; // masters; next/image serves smaller sizes on demand
const QUALITY = 80;

// source file (relative to CLIENT unless absolute) -> output name (relative to public/images)
const MAP = {
  // Home carousel
  "01 Landing page/01 Carousel/01-le-pois-penché-montreal.jpeg": "home/carousel-01-salle.jpg",
  "01 Landing page/01 Carousel/02-le-pois-penché-montreal.jpeg": "home/carousel-02-salle.jpg",
  "01 Landing page/01 Carousel/03-soupe-à-l'oignon-le-pois-penché.jpeg": "home/carousel-03-soupe-a-l-oignon.jpg",
  "01 Landing page/01 Carousel/04-canard-confit-le-pois-penché.jpeg": "home/carousel-04-canard-confit.jpg",
  "01 Landing page/01 Carousel/05-huîtres-le-pois-penché.jpeg": "home/carousel-05-huitres.jpg",
  "01 Landing page/01 Carousel/06-le-pois-penché-montreal-bar.jpeg": "home/carousel-06-bar.jpg",
  "01 Landing page/01 Carousel/07-le-pois-penché-montreal.jpeg": "home/carousel-07-salle.jpg",
  "01 Landing page/01 Carousel/08-le-pois-penché-cellier-vin.jpeg": "home/carousel-08-cellier.jpg",
  // Home, between text blocks
  '01 Landing page/02 Photos entre "blurbs"/01 Steak-frites-le-pois-penché.jpeg': "home/steak-frites.jpg",
  '01 Landing page/02 Photos entre "blurbs"/02-le-pois-penché-bar-salle.jpg': "home/bar-salle.jpg",
  '01 Landing page/02 Photos entre "blurbs"/03-le-pois-penché-service-01.jpeg': "home/service.jpg",
  '01 Landing page/02 Photos entre "blurbs"/04-le-pois-penché-bar-01.jpeg': "home/bar.jpg",
  // Pages
  "02 Notre histoire/01-imad-nabwani-le-pois-penché.jpg": "story/imad-nabwani.jpg",
  "03 Événements privés/01 événements-privés-le-pois-penché.jpeg": "private/cellier-01.jpg",
  "03 Événements privés/02 événements-privés-le-pois-penché.jpeg": "private/cellier-02.jpg",
  "04 Traiteur/01 traiteur-Catering-le-pois-penché.jpeg": "catering/traiteur-01.jpg",
  "04 Traiteur/02 traiteur-Catering-le-pois-penché.jpg": "catering/traiteur-02.jpg",
  "06 Carrières/01 équipe-team-imad-nabwani-le-pois-penché.jpeg": "careers/equipe.jpg",
  "07 FAQ/01 baguettes-le-pois-penché.jpeg": "faq/baguettes.jpg",
  // Gallery
  "05 Galerie/01 soupe-à-l'oignon-le-pois-penché.jpeg": "gallery/01-soupe-a-l-oignon.jpg",
  "05 Galerie/02 baguettes-service-le-pois-penché.jpeg": "gallery/02-baguettes-service.jpg",
  "05 Galerie/03 côte-de-bœuf-rib-steak-le-pois-penché.jpeg": "gallery/03-cote-de-boeuf.jpg",
  "05 Galerie/04 chef-josserand-crabe-le-pois-penché.jpeg": "gallery/04-chef-josserand-crabe.jpg",
  "05 Galerie/05 cuisine-le-pois-penché.jpeg": "gallery/05-cuisine.jpg",
  "05 Galerie/06 saumon-bagels-le-pois-penché.jpeg": "gallery/06-saumon-bagels.jpg",
  "05 Galerie/07 maître-d'hôtel-le-pois-penché.jpeg": "gallery/07-maitre-d-hotel.jpg",
  "05 Galerie/08 poisson-table-le-pois-penché.jpeg": "gallery/08-poisson-table.jpg",
  "05 Galerie/09 short-rib-pass-le-pois-penché.jpeg": "gallery/09-short-rib-pass.jpg",
  "05 Galerie/10 tartare-saumon-le-pois-penché.jpg": "gallery/10-tartare-saumon.jpg",
  "05 Galerie/11 le-pois-penché.jpeg": "gallery/11-salle.jpg",
  "05 Galerie/12 huîtres-oysters-le-pois-penché.jpeg": "gallery/12-huitres.jpg",
  "05 Galerie/13 raw-bar-le-pois-penché.jpeg": "gallery/13-raw-bar.jpg",
  "05 Galerie/14 terrasse-le-pois-penché.jpeg": "gallery/14-terrasse.jpg",
  "05 Galerie/16 benedicts-saumon-le-pois-penché.jpeg": "gallery/16-benedicts-saumon.jpg",
  "05 Galerie/17 moules-frites-le-pois-penché.jpeg": "gallery/17-moules-frites.jpg",
  "05 Galerie/18 crème-brûlée-le-pois-penché.jpeg": "gallery/18-creme-brulee.jpg",
  // Old-site photos reused as menu heroes (also 8000x4500)
  [path.join(OLD, "hero-souper-steak-frites.jpg")]: "menus/lunch-steak-frites.jpg",
  [path.join(OLD, "hero-brunch-salmon-benedict.jpeg")]: "menus/brunch-salmon-benedict.jpg",
  [path.join(OLD, "hero-souper-canard-confit.jpg")]: "menus/dine-early-canard-confit.jpg",
  [path.join(OLD, "salle-a-manger-bw.jpg")]: "gift-cards/salle-a-manger-bw.jpg",
  [path.join(OLD, "floor-plan-cellier.jpg")]: "private/floor-plan-cellier.jpg",
};

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function main() {
  let done = 0;
  for (const [src, out] of Object.entries(MAP)) {
    const from = path.isAbsolute(src) ? src : path.join(CLIENT, src);
    // Some client filenames use decomposed accents (macOS). Try both normalizations.
    const candidates = [from, from.normalize("NFD"), from.normalize("NFC")];
    const found = (await Promise.all(candidates.map(exists))).findIndex(Boolean);
    if (found < 0) { console.warn("MISSING", src); continue; }
    const to = path.join(OUT, out);
    await mkdir(path.dirname(to), { recursive: true });
    const img = sharp(candidates[found]).rotate();
    const meta = await img.metadata();
    const width = Math.min(WIDTH, meta.width ?? WIDTH);
    await img.resize({ width, withoutEnlargement: true }).jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toFile(to);
    const size = (await stat(to)).size;
    console.log(`${out}  ${width}w  ${(size / 1024).toFixed(0)} KB`);
    done++;
  }

  // Open Graph images (1200x630) for the pages that share a hero
  const OG = {
    "home/carousel-05-huitres.jpg": "og/home.jpg",
    "menus/lunch-steak-frites.jpg": "og/lunch.jpg",
    "home/carousel-04-canard-confit.jpg": "og/dinner.jpg",
    "menus/brunch-salmon-benedict.jpg": "og/brunch.jpg",
    "menus/dine-early-canard-confit.jpg": "og/dine-early.jpg",
    "gallery/18-creme-brulee.jpg": "og/desserts.jpg",
    "home/bar-salle.jpg": "og/hours.jpg",
    "story/imad-nabwani.jpg": "og/story.jpg",
    "private/cellier-01.jpg": "og/private.jpg",
    "catering/traiteur-01.jpg": "og/catering.jpg",
    "gallery/11-salle.jpg": "og/gallery.jpg",
    "gift-cards/salle-a-manger-bw.jpg": "og/gift-cards.jpg",
    "careers/equipe.jpg": "og/careers.jpg",
    "faq/baguettes.jpg": "og/faq.jpg",
  };
  await mkdir(path.join(OUT, "og"), { recursive: true });
  for (const [src, out] of Object.entries(OG)) {
    const from = path.join(OUT, src);
    if (!(await exists(from))) { console.warn("MISSING for OG", src); continue; }
    await sharp(from).resize(1200, 630, { fit: "cover", position: "centre" }).jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(OUT, out));
  }

  // Logo: trimmed transparent PNG at 1200px wide for the header
  if (await exists(LOGO)) {
    await mkdir(path.join(ROOT, "public", "logo"), { recursive: true });
    await sharp(LOGO).trim().resize({ width: 1200 }).png({ compressionLevel: 9 }).toFile(path.join(ROOT, "public", "logo", "le-pois-penche.png"));
    await sharp(LOGO).trim().resize({ width: 480 }).png({ compressionLevel: 9 }).toFile(path.join(ROOT, "public", "logo", "le-pois-penche-480.png"));
    console.log("logo written");
  }
  console.log(`\n${done} photos + ${Object.keys(OG).length} OG images written to public/images`);
}

main().catch((e) => { console.error(e); process.exit(1); });
