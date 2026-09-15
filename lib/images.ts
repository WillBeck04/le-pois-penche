// Photos used on the site with their descriptive alt text in both languages.
// All originals are 8000x4500 (16:9); public/images holds 2560px web versions made by scripts/optimize-images.mjs.

export type Photo = { src: string; alt: { fr: string; en: string }; width?: number; height?: number };

const W = 2560;
const H = 1440;

export const homeCarousel: Photo[] = [
  { src: "/images/home/carousel-01-salle.jpg", width: W, height: H, alt: { fr: "Salle à manger du Pois Penché, brasserie parisienne du centre-ville de Montréal", en: "Dining room at Le Pois Penché, Parisian brasserie in downtown Montreal" } },
  { src: "/images/home/carousel-02-salle.jpg", width: W, height: H, alt: { fr: "Tables dressées et banquettes du Pois Penché à Montréal", en: "Set tables and banquettes at Le Pois Penché in Montreal" } },
  { src: "/images/home/carousel-03-soupe-a-l-oignon.jpg", width: W, height: H, alt: { fr: "Soupe à l'oignon gratinée au Louis d'Or du Pois Penché, brasserie française à Montréal", en: "Onion soup gratinéed with Louis d'Or cheese at Le Pois Penché, French brasserie in Montreal" } },
  { src: "/images/home/carousel-04-canard-confit.jpg", width: W, height: H, alt: { fr: "Canard confit, pommes rattes et choux de Bruxelles au Pois Penché à Montréal", en: "Duck confit with fingerling potatoes and Brussels sprouts at Le Pois Penché in Montreal" } },
  { src: "/images/home/carousel-05-huitres.jpg", width: W, height: H, alt: { fr: "Huîtres fraîches du bar à huîtres du Pois Penché, Montréal", en: "Fresh oysters from the raw bar at Le Pois Penché, Montreal" } },
  { src: "/images/home/carousel-06-bar.jpg", width: W, height: H, alt: { fr: "Le bar du Pois Penché, brasserie parisienne à Montréal", en: "The bar at Le Pois Penché, Parisian brasserie in Montreal" } },
  { src: "/images/home/carousel-07-salle.jpg", width: W, height: H, alt: { fr: "Ambiance de la salle du Pois Penché au centre-ville de Montréal", en: "Atmosphere of the dining room at Le Pois Penché in downtown Montreal" } },
  { src: "/images/home/carousel-08-cellier.jpg", width: W, height: H, alt: { fr: "Le Cellier, salle privée et cave à vin du Pois Penché à Montréal", en: "Le Cellier, private room and wine cellar at Le Pois Penché in Montreal" } },
];

export const homeBlurbs: Photo[] = [
  { src: "/images/home/steak-frites.jpg", width: W, height: H, alt: { fr: "Steak frites, un classique de brasserie au Pois Penché, Montréal", en: "Steak frites, a brasserie classic at Le Pois Penché, Montreal" } },
  { src: "/images/home/bar-salle.jpg", width: W, height: H, alt: { fr: "Vue du bar et de la salle du Pois Penché, brasserie française à Montréal", en: "View of the bar and dining room at Le Pois Penché, French brasserie in Montreal" } },
  { src: "/images/home/service.jpg", width: W, height: H, alt: { fr: "Service en salle au Pois Penché, brasserie parisienne du centre-ville de Montréal", en: "Table service at Le Pois Penché, Parisian brasserie in downtown Montreal" } },
  { src: "/images/home/bar.jpg", width: W, height: H, alt: { fr: "Le comptoir du bar du Pois Penché à Montréal", en: "The bar counter at Le Pois Penché in Montreal" } },
];

export const pageHeroes = {
  hours: { src: "/images/home/bar-salle.jpg", width: W, height: H, alt: { fr: "Salle et bar du Pois Penché, 1230 boulevard De Maisonneuve Ouest, Montréal", en: "Dining room and bar at Le Pois Penché, 1230 De Maisonneuve Boulevard West, Montreal" } },
  story: { src: "/images/story/imad-nabwani.jpg", width: W, height: H, alt: { fr: "Imad Nabwani, propriétaire du Pois Penché, brasserie parisienne à Montréal", en: "Imad Nabwani, owner of Le Pois Penché, Parisian brasserie in Montreal" } },
  privateDining: { src: "/images/private/cellier-01.jpg", width: W, height: H, alt: { fr: "Le Cellier, salle de réception privée du Pois Penché pour 20 à 80 convives, Montréal", en: "Le Cellier, private event room at Le Pois Penché for 20 to 80 guests, Montreal" } },
  privateDining2: { src: "/images/private/cellier-02.jpg", width: W, height: H, alt: { fr: "Table dressée pour un événement privé dans Le Cellier du Pois Penché", en: "Table set for a private event in Le Cellier at Le Pois Penché" } },
  floorPlan: { src: "/images/private/floor-plan-cellier.jpg", width: 1920, height: 1440, alt: { fr: "Plan de salle du Cellier au Pois Penché", en: "Floor plan of Le Cellier at Le Pois Penché" } },
  catering: { src: "/images/catering/traiteur-01.jpg", width: W, height: H, alt: { fr: "Service traiteur français du Pois Penché pour événements à Montréal", en: "French catering service by Le Pois Penché for events in Montreal" } },
  catering2: { src: "/images/catering/traiteur-02.jpg", width: W, height: H, alt: { fr: "Plateaux du traiteur Le Pois Penché, cuisine française à Montréal", en: "Catering platters by Le Pois Penché, French cuisine in Montreal" } },
  giftCards: { src: "/images/gift-cards/salle-a-manger-bw.jpg", width: W, height: 1707, alt: { fr: "Salle à manger du Pois Penché en noir et blanc, brasserie parisienne à Montréal", en: "Dining room at Le Pois Penché in black and white, Parisian brasserie in Montreal" } },
  careers: { src: "/images/careers/equipe.jpg", width: W, height: H, alt: { fr: "L'équipe du Pois Penché avec Imad Nabwani, brasserie française à Montréal", en: "The team at Le Pois Penché with Imad Nabwani, French brasserie in Montreal" } },
  faq: { src: "/images/faq/baguettes.jpg", width: W, height: H, alt: { fr: "Baguettes fraîches servies au Pois Penché, brasserie parisienne à Montréal", en: "Fresh baguettes served at Le Pois Penché, Parisian brasserie in Montreal" } },
} satisfies Record<string, Photo>;

export const gallery: Photo[] = [
  { src: "/images/gallery/01-soupe-a-l-oignon.jpg", width: W, height: H, alt: { fr: "Soupe à l'oignon gratinée du Pois Penché, brasserie française à Montréal", en: "Gratinéed onion soup at Le Pois Penché, French brasserie in Montreal" } },
  { src: "/images/gallery/02-baguettes-service.jpg", width: W, height: H, alt: { fr: "Baguettes servies à table au Pois Penché, Montréal", en: "Baguettes served at the table at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/03-cote-de-boeuf.jpg", width: W, height: H, alt: { fr: "Côte de bœuf Prime canadien vieillie à sec 30 jours au Pois Penché, Montréal", en: "Canadian Prime rib steak dry-aged 30 days at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/04-chef-josserand-crabe.jpg", width: W, height: H, alt: { fr: "Le chef Josserand prépare le crabe des neiges au Pois Penché, Montréal", en: "Chef Josserand preparing snow crab at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/05-cuisine.jpg", width: W, height: H, alt: { fr: "La cuisine du Pois Penché en plein service, brasserie parisienne à Montréal", en: "The kitchen at Le Pois Penché during service, Parisian brasserie in Montreal" } },
  { src: "/images/gallery/06-saumon-bagels.jpg", width: W, height: H, alt: { fr: "Saumon fumé maison et bagels Saint-Viateur au brunch du Pois Penché", en: "House-smoked salmon and Saint-Viateur bagels at brunch at Le Pois Penché" } },
  { src: "/images/gallery/07-maitre-d-hotel.jpg", width: W, height: H, alt: { fr: "Le maître d'hôtel accueille les convives au Pois Penché, Montréal", en: "The maître d' welcoming guests at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/08-poisson-table.jpg", width: W, height: H, alt: { fr: "Poisson entier grillé servi à table au Pois Penché, brasserie française à Montréal", en: "Whole grilled fish served tableside at Le Pois Penché, French brasserie in Montreal" } },
  { src: "/images/gallery/09-short-rib-pass.jpg", width: W, height: H, alt: { fr: "Short rib au passe de la cuisine du Pois Penché, Montréal", en: "Short rib at the kitchen pass at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/10-tartare-saumon.jpg", width: W, height: H, alt: { fr: "Tartare de saumon au gingembre du Pois Penché, brasserie parisienne à Montréal", en: "Ginger salmon tartare at Le Pois Penché, Parisian brasserie in Montreal" } },
  { src: "/images/gallery/11-salle.jpg", width: W, height: H, alt: { fr: "La salle à manger du Pois Penché, brasserie parisienne du Mille carré doré", en: "The dining room at Le Pois Penché, Parisian brasserie in the Golden Square Mile" } },
  { src: "/images/gallery/12-huitres.jpg", width: W, height: H, alt: { fr: "Plateau d'huîtres fraîches au Pois Penché, Montréal", en: "Platter of fresh oysters at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/13-raw-bar.jpg", width: W, height: H, alt: { fr: "Le bar à huîtres et fruits de mer du Pois Penché, Montréal", en: "The raw bar with oysters and seafood at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/14-terrasse.jpg", width: W, height: H, alt: { fr: "La terrasse d'été du Pois Penché sur le boulevard De Maisonneuve, Montréal", en: "The summer terrace at Le Pois Penché on De Maisonneuve Boulevard, Montreal" } },
  { src: "/images/gallery/16-benedicts-saumon.jpg", width: W, height: H, alt: { fr: "Œufs bénédictine au saumon fumé au brunch du Pois Penché, Montréal", en: "Smoked salmon eggs Benedict at brunch at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/17-moules-frites.jpg", width: W, height: H, alt: { fr: "Moules frites, classique de brasserie au Pois Penché, Montréal", en: "Moules frites, a brasserie classic at Le Pois Penché, Montreal" } },
  { src: "/images/gallery/18-creme-brulee.jpg", width: W, height: H, alt: { fr: "Crème brûlée à la vanille de Bourbon au Pois Penché, brasserie française à Montréal", en: "Bourbon vanilla crème brûlée at Le Pois Penché, French brasserie in Montreal" } },
];
