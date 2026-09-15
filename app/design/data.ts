// Shared content for the eight design directions. One place for copy, photos and prices
// so every mockup shows the same facts.

export const img = {
  salleRouge: "/images/private/cellier-02.jpg",
  cellierTable: "/images/private/cellier-01.jpg",
  cellier: "/images/home/carousel-08-cellier.jpg",
  facade: "/images/home/carousel-01-salle.jpg",
  salle: "/images/home/carousel-02-salle.jpg",
  salleSoir: "/images/gallery/11-salle.jpg",
  barNuit: "/images/home/carousel-06-bar.jpg",
  barBw: "/images/home/bar.jpg",
  service: "/images/home/service.jpg",
  terrasse: "/images/gallery/14-terrasse.jpg",
  chefCrabe: "/images/gallery/04-chef-josserand-crabe.jpg",
  pass: "/images/gallery/09-short-rib-pass.jpg",
  table: "/images/gallery/08-poisson-table.jpg",
  soupe: "/images/home/carousel-03-soupe-a-l-oignon.jpg",
  canard: "/images/home/carousel-04-canard-confit.jpg",
  huitres: "/images/home/carousel-05-huitres.jpg",
  cote: "/images/gallery/03-cote-de-boeuf.jpg",
  creme: "/images/gallery/18-creme-brulee.jpg",
  tartare: "/images/gallery/10-tartare-saumon.jpg",
  moules: "/images/gallery/17-moules-frites.jpg",
  steak: "/images/home/steak-frites.jpg",
  imad: "/images/story/imad-nabwani.jpg",
  baguettes: "/images/faq/baguettes.jpg",
} as const;

export const copy = {
  address: "1230 boul. De Maisonneuve Ouest, Montréal, QC H3G 1M2",
  addressShort: "1230 boul. De Maisonneuve Ouest, Montréal",
  phone: "514-667-5050",
  email: "info@lepoispenche.com",
  welcomeTitle: "Bienvenue dans la brasserie parisienne préférée du centre-ville de Montréal.",
  welcome:
    "Fondé en 2008, Le Pois Penché est une institution bien-aimée du Mille carré doré. On y trouve les grands classiques de la cuisine française aux accents montréalais, des steaks d'exception et des plateaux de fruits de mer spectaculaires, le tout servi dans un lieu charmant et avec une joie de vivre des plus chaleureuses.",
  hoursBlurb:
    "Nous vous accueillons le midi dès 11 h 30 du mardi au vendredi, tous les soirs dès 17 h, et pour le brunch la fin de semaine dès 10 h 30. Notre terrasse est ouverte au printemps et en été, si la météo le permet.",
  location: "À l'angle de De Maisonneuve Ouest et de Drummond, à quelques pas du métro Peel. Valet et stationnement à l'hôtel Le Mount Stephen.",
  story:
    "Le rêve du restaurateur Imad Nabwani : partager les plaisirs de la gastronomie française qui l'ont enchanté dans sa jeunesse à Paris. Depuis 2011, une institution familiale fréquentée par de fidèles habitués et des voyageurs venus des quatre coins du monde.",
  cellierTitle: "Le Cellier, de 20 à 80 convives. Le restaurant entier, jusqu'à 120.",
  cellier:
    "L'un des meilleurs lieux du centre-ville pour vos réunions d'affaires privées et vos célébrations. Notre traiteur français se déplace aussi chez vous, au bureau ou ailleurs.",
};

export const press = [
  { quote: "Parmi les meilleurs restaurants français de Montréal", source: "Time Out Worldwide · Tourisme Montréal" },
  { quote: "L'une des meilleures adresses pour un steak à Montréal", source: "The Main" },
  { quote: "Parmi les brunchs les plus populaires au Canada", source: "OpenTable" },
];

export const dishes = [
  { name: "Soupe à l'oignon gratinée au Louis d'Or", price: "21", img: img.soupe },
  { name: "Le Parisien, plateau pour deux", price: "160", img: img.chefCrabe },
  { name: "Canard confit, sauce aux poivres", price: "42", img: img.canard },
  { name: "Côte de bœuf Prime 32 oz, vieillie 30 jours", price: "190", img: img.cote },
  { name: "Crème brûlée à la vanille de Bourbon", price: "14", img: img.creme },
  { name: "Tartare de saumon au gingembre", price: "42", img: img.tartare },
];

export const menus = [
  { name: "Lunch", when: "Mardi au vendredi, 11 h 30 – 15 h", whenShort: "Mar. – ven. · 11 h 30 – 15 h", desc: "Plats du jour, soupe à l'oignon gratinée, tartares et onglet à l'échalote." },
  { name: "Souper", when: "Tous les soirs dès 17 h", whenShort: "Tous les soirs · dès 17 h", desc: "Plateaux de fruits de mer, canard confit, bouillabaisse, côte de bœuf vieillie 30 jours." },
  { name: "Brunch", when: "Samedi et dimanche, 10 h 30 – 15 h", whenShort: "Sam. – dim. · 10 h 30 – 15 h", desc: "Bénédictines au saumon fumé maison, croque-madame, pancakes « Papa Joss », bar à huîtres." },
  { name: "Soupez tôt", when: "17 h – 17 h 45 · 2 services, 49 $", whenShort: "17 h – 17 h 45 · 49 $", desc: "Entrée au choix, puis canard confit, moules frites ou cavatelli maison." },
  { name: "Desserts", when: "Midi et soir", whenShort: "Midi et soir", desc: "Crème brûlée flambée au Grand Marnier, profiteroles, île flottante, glaces maison." },
];

export const hours = [
  { label: "Lunch", lines: ["Mardi au vendredi", "11 h 30 à 15 h"] },
  { label: "Souper", lines: ["Dim. – mer., 17 h à 22 h", "Jeu. – sam., 17 h à 23 h"] },
  { label: "Brunch", lines: ["Samedi et dimanche", "10 h 30 à 15 h"] },
];

export const nav = ["Menus", "Heures et adresse", "Notre histoire", "Événements privés", "Traiteur", "Galerie", "Cartes-cadeaux", "Carrières", "FAQ"];
export const navShort = ["Menus", "Heures", "Histoire", "Événements", "Traiteur", "Galerie"];

export const OPENTABLE = "https://www.opentable.ca/r/le-pois-penche-reservations-montreal?restref=25942&lang=fr-CA";

export const designs = [
  { n: 1, slug: "design1", name: "Grande Brasserie", tagline: "Le Rock's system with the brand burgundy. Cream, centred logo, framed menu card.", theme: "light" },
  { n: 2, slug: "design2", name: "Belle Époque", tagline: "Cinzel capitals, gold hairlines, a printed carte. Paris 1900.", theme: "light" },
  { n: 3, slug: "design3", name: "Nuit à Montréal", tagline: "Warm near-black, cream type, gold. The evening out.", theme: "dark" },
  { n: 4, slug: "design4", name: "Carte Postale", tagline: "Editorial magazine. Cormorant italics, offset collages, numbered captions.", theme: "light" },
  { n: 5, slug: "design5", name: "Zinc", tagline: "Brutally minimal. One giant wordmark, hairlines, photos left to breathe.", theme: "light" },
  { n: 6, slug: "design6", name: "Rouge", tagline: "Colour-block poster. Burgundy ground, cream blocks, pure brand.", theme: "dark" },
  { n: 7, slug: "design7", name: "Terrasse", tagline: "Bright summer in Montréal. Awning stripe, pill buttons, three service moments.", theme: "light" },
  { n: 8, slug: "design8", name: "Vitrine", tagline: "Split screen. Pinned photo on the left that swaps as you scroll.", theme: "light" },
] as const;
