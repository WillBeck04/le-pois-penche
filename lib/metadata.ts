// What Google shows for each page: the tab title, the description under it, and the share image.
// Keep titles under ~60 characters and descriptions under ~155.

import type { Lang, PageKey } from "./routes";

type PageMeta = { title: string; description: string; ogImage: string };

const fr: Record<PageKey, PageMeta> = {
  home: {
    title: "Le Pois Penché | Brasserie française au centre-ville de Montréal",
    description:
      "Brasserie parisienne au cœur du Mille carré doré depuis 2008. Classiques de la cuisine française, steaks d'exception et plateaux de fruits de mer. Lunch, souper et brunch. Réservez en ligne.",
    ogImage: "/images/og/home.jpg",
  },
  lunch: {
    title: "Menu Lunch | Le Pois Penché, brasserie française à Montréal",
    description:
      "Le lunch d'affaires du centre-ville : plats du jour, soupe à l'oignon gratinée, tartares, onglet et fruits de mer. Mardi au vendredi, 11 h 30 à 15 h.",
    ogImage: "/images/og/lunch.jpg",
  },
  dinner: {
    title: "Menu Souper | Le Pois Penché, brasserie française à Montréal",
    description:
      "Plateaux de fruits de mer, canard confit, bouillabaisse et côte de bœuf vieillie à sec : le menu du soir du Pois Penché, brasserie parisienne à Montréal.",
    ogImage: "/images/og/dinner.jpg",
  },
  brunch: {
    title: "Menu Brunch | Le Pois Penché, brasserie française à Montréal",
    description:
      "Bénédictines au saumon fumé maison, croque-madame, pancakes et bar à huîtres. Brunch le samedi et le dimanche de 10 h 30 à 15 h au centre-ville de Montréal.",
    ogImage: "/images/og/brunch.jpg",
  },
  dineEarly: {
    title: "Soupez tôt, 2 services à 49 $ | Le Pois Penché, Montréal",
    description:
      "Arrivez entre 17 h et 17 h 45 et savourez un menu deux services à 49 $ : entrée au choix, puis canard confit, moules frites ou cavatelli maison.",
    ogImage: "/images/og/dine-early.jpg",
  },
  desserts: {
    title: "Menu Desserts | Le Pois Penché, brasserie française à Montréal",
    description:
      "Crème brûlée flambée au Grand Marnier, profiteroles, moelleux au chocolat, île flottante et glaces maison. Les desserts du Pois Penché à Montréal.",
    ogImage: "/images/og/desserts.jpg",
  },
  hours: {
    title: "Heures et adresse | Le Pois Penché, Montréal",
    description:
      "Le Pois Penché, 1230 boul. De Maisonneuve Ouest, Montréal, à deux pas du métro Peel. Heures d'ouverture, itinéraire, stationnement et coordonnées. 514-667-5050.",
    ogImage: "/images/og/hours.jpg",
  },
  story: {
    title: "Notre histoire | Le Pois Penché, brasserie parisienne à Montréal",
    description:
      "Le rêve du restaurateur Imad Nabwani : une ambassade montréalaise de la joie de vivre française. Reconnu parmi les meilleurs restaurants français de Montréal.",
    ogImage: "/images/og/story.jpg",
  },
  privateDining: {
    title: "Événements privés | Le Cellier du Pois Penché, Montréal",
    description:
      "Réservez Le Cellier, notre salle privée pour 20 à 80 convives, ou tout le restaurant jusqu'à 120 convives, pour vos réunions d'affaires et célébrations au centre-ville de Montréal.",
    ogImage: "/images/og/private.jpg",
  },
  catering: {
    title: "Traiteur français à Montréal | Le Pois Penché",
    description:
      "Le traiteur français par excellence à Montréal. Cocktails dînatoires, banquets et buffets, chez vous, au bureau ou ailleurs, pour des événements de toute taille.",
    ogImage: "/images/og/catering.jpg",
  },
  gallery: {
    title: "Galerie | Le Pois Penché, brasserie française à Montréal",
    description: "La salle, la cuisine, la terrasse et les assiettes du Pois Penché, brasserie parisienne du centre-ville de Montréal, en photos.",
    ogImage: "/images/og/gallery.jpg",
  },
  giftCards: {
    title: "Cartes-cadeaux | Le Pois Penché, Montréal",
    description: "Offrez la joie de vivre du Pois Penché. Cartes-cadeaux en ligne ou au restaurant, pour un lunch, un souper ou un brunch au centre-ville de Montréal.",
    ogImage: "/images/og/gift-cards.jpg",
  },
  careers: {
    title: "Carrières | Le Pois Penché, Montréal",
    description: "Joignez-vous à l'équipe du Pois Penché : emploi bien rémunéré, milieu de travail respectueux, repas gratuits et horaire flexible. Envoyez votre CV.",
    ogImage: "/images/og/careers.jpg",
  },
  faq: {
    title: "FAQ | Le Pois Penché, brasserie française à Montréal",
    description: "Réponses aux questions fréquentes : adresse, brunch, terrasse, enfants, événements privés, traiteur, stationnement et réservations au Pois Penché.",
    ogImage: "/images/og/faq.jpg",
  },
};

const en: Record<PageKey, PageMeta> = {
  home: {
    title: "Le Pois Penché | French Restaurant in Downtown Montreal",
    description:
      "Parisian brasserie in the heart of the Golden Square Mile since 2008. French classics, exceptional steaks and spectacular seafood platters. Lunch, dinner and brunch. Book online.",
    ogImage: "/images/og/home.jpg",
  },
  lunch: {
    title: "Lunch Menu | Le Pois Penché, French Brasserie in Montreal",
    description:
      "Downtown's business lunch: daily specials, gratinéed onion soup, tartares, hanger steak and seafood. Tuesday to Friday, 11:30 a.m. to 3 p.m.",
    ogImage: "/images/og/lunch.jpg",
  },
  dinner: {
    title: "Dinner Menu | Le Pois Penché, French Brasserie in Montreal",
    description:
      "Seafood platters, duck confit, bouillabaisse and dry-aged prime rib: the evening menu at Le Pois Penché, Parisian brasserie in Montreal.",
    ogImage: "/images/og/dinner.jpg",
  },
  brunch: {
    title: "Brunch Menu | Le Pois Penché, French Brasserie in Montreal",
    description:
      "House-smoked salmon Benedicts, croque-madame, pancakes and an oyster bar. Brunch Saturday and Sunday from 10:30 a.m. to 3 p.m. in downtown Montreal.",
    ogImage: "/images/og/brunch.jpg",
  },
  dineEarly: {
    title: "Dine Early, 2 Courses for $49 | Le Pois Penché, Montreal",
    description:
      "Arrive between 5:00 and 5:45 p.m. for a two-course menu at $49: a starter of your choice, then duck confit, moules frites or house-made cavatelli.",
    ogImage: "/images/og/dine-early.jpg",
  },
  desserts: {
    title: "Dessert Menu | Le Pois Penché, French Brasserie in Montreal",
    description:
      "Crème brûlée flambéed with Grand Marnier, profiteroles, molten chocolate cake, île flottante and house-made ice cream. Desserts at Le Pois Penché, Montreal.",
    ogImage: "/images/og/desserts.jpg",
  },
  hours: {
    title: "Hours & Address | Le Pois Penché, Montreal",
    description:
      "Le Pois Penché, 1230 De Maisonneuve Blvd West, Montreal, steps from Peel metro. Opening hours, directions, parking and contact details. 514-667-5050.",
    ogImage: "/images/og/hours.jpg",
  },
  story: {
    title: "Our Story | Le Pois Penché, Parisian Brasserie in Montreal",
    description:
      "Restaurateur Imad Nabwani's dream: a Montreal embassy of French joie de vivre. Named among Montreal's best French restaurants by Time Out and Tourisme Montréal.",
    ogImage: "/images/og/story.jpg",
  },
  privateDining: {
    title: "Private Dining | Le Cellier at Le Pois Penché, Montreal",
    description:
      "Reserve Le Cellier, our private room for 20 to 80 guests, or the entire restaurant for up to 120 guests, for business meetings and celebrations in downtown Montreal.",
    ogImage: "/images/og/private.jpg",
  },
  catering: {
    title: "French Catering in Montreal | Le Pois Penché",
    description:
      "Montreal's premier French caterer. Cocktail receptions, banquets and buffets at your home, office or elsewhere, for events of all sizes.",
    ogImage: "/images/og/catering.jpg",
  },
  gallery: {
    title: "Gallery | Le Pois Penché, French Brasserie in Montreal",
    description: "The dining room, the kitchen, the terrace and the plates at Le Pois Penché, Parisian brasserie in downtown Montreal, in photos.",
    ogImage: "/images/og/gallery.jpg",
  },
  giftCards: {
    title: "Gift Cards | Le Pois Penché, Montreal",
    description: "Give the joie de vivre of Le Pois Penché. Gift cards online or at the restaurant, for a lunch, dinner or brunch in downtown Montreal.",
    ogImage: "/images/og/gift-cards.jpg",
  },
  careers: {
    title: "Careers | Le Pois Penché, Montreal",
    description: "Join the team at Le Pois Penché: well-paid positions, a respectful workplace, free staff meals and flexible schedules. Send us your CV.",
    ogImage: "/images/og/careers.jpg",
  },
  faq: {
    title: "FAQ | Le Pois Penché, French Brasserie in Montreal",
    description: "Answers to common questions: address, brunch, terrace, kids, private events, catering, parking and reservations at Le Pois Penché.",
    ogImage: "/images/og/faq.jpg",
  },
};

export const metadataByLang: Record<Lang, Record<PageKey, PageMeta>> = { fr, en };
