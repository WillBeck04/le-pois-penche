// Every visible sentence on the site, in French then English.
// To change text, edit it here. Menus live in lib/menus.ts, page titles for Google in lib/metadata.ts.

import type { PageKey } from "./routes";

export type NavItem = { key: PageKey; label: string };

const fr = {
  nav: {
    menus: "Menus",
    menuItems: [
      { key: "lunch", label: "Lunch" },
      { key: "dinner", label: "Souper" },
      { key: "brunch", label: "Brunch" },
      { key: "dineEarly", label: "Soupez tôt 17 h" },
      { key: "desserts", label: "Desserts" },
    ] as NavItem[],
    items: [
      { key: "hours", label: "Heures et adresse" },
      { key: "story", label: "Notre histoire" },
      { key: "privateDining", label: "Événements privés" },
      { key: "catering", label: "Traiteur" },
      { key: "gallery", label: "Galerie" },
      { key: "giftCards", label: "Cartes-cadeaux" },
      { key: "careers", label: "Carrières" },
      { key: "faq", label: "FAQ" },
    ] as NavItem[],
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchLang: "English",
    switchLangShort: "EN",
    home: "Accueil",
  },

  common: {
    reserve: "Réservez",
    news: "Recevez nos nouvelles",
    order: "Commandez pour emporter",
    directions: "Itinéraire",
    download: "Téléchargez",
    seeMenus: "Voir les menus",
    since: "depuis",
    otherMenus: "Nos autres menus",
    backHome: "Retour à l'accueil",
    notFound: "Cette page n'existe pas.",
    hoursTitle: "Heures d'ouverture",
    lunch: "Lunch",
    dinner: "Souper",
    brunch: "Brunch",
    lunchHours: "Mardi au vendredi, 11 h 30 à 15 h",
    dinnerHours1: "Dimanche à mercredi, 17 h à 22 h",
    dinnerHours2: "Jeudi au samedi, 17 h à 23 h",
    brunchHours: "Samedi et dimanche, 10 h 30 à 15 h",
    followUs: "Suivez-nous",
    privacy: "Politique de confidentialité",
    rights: "Tous droits réservés.",
    pricesNote: "Taxes et service en sus. Les prix et les plats peuvent changer selon les arrivages.",
    marketPrice: "Prix du marché",
    consent: {
      text: "Nous utilisons des témoins (cookies) pour mesurer la fréquentation du site.",
      accept: "Accepter",
      decline: "Refuser",
    },
  },

  announcement: {
    // Set enabled to true to show the pop-up on every page until the visitor closes it.
    enabled: false,
    title: "Menu des fêtes",
    body: "Réservez dès maintenant pour vos célébrations de fin d'année au Cellier.",
    cta: "Réservez",
    href: "", // leave empty to use the OpenTable link
    close: "Fermer",
  },

  home: {
    blurb1Title: "Bienvenue dans la brasserie parisienne préférée du centre-ville de Montréal.",
    blurb1:
      "Fondé en 2008, Le Pois Penché est une institution bien-aimée du Mille carré doré. On y trouve les grands classiques de la cuisine française aux accents montréalais, des steaks d'exception et des plateaux de fruits de mer spectaculaires, le tout servi dans un lieu charmant et avec une joie de vivre des plus chaleureuses. Au plaisir de vous servir !",
    blurb2Title: "Lunch, souper, brunch et terrasse",
    blurb2:
      "Nous vous accueillons le midi dès 11 h 30 du mardi au vendredi, tous les soirs dès 17 h, et pour le brunch la fin de semaine dès 10 h 30. Notre terrasse est ouverte au printemps et en été, si la météo le permet. Vous nous trouverez à l'angle du boulevard De Maisonneuve Ouest et de la rue Drummond, à quelques pas de la station de métro Peel et de toutes les attractions du centre-ville.",
    menusTitle: "Nos menus",
    // Caption bar along the bottom of the photo carousel
    captionLeft: "Brasserie parisienne · Mille carré doré · depuis 2008",
    captionRight: "Lunch · Souper · Brunch · Terrasse",
    reserveTable: "Réservez une table",
    // Press quotes in the scrolling band
    press: [
      { quote: "Parmi les meilleurs restaurants français de Montréal", source: "Time Out Worldwide · Tourisme Montréal" },
      { quote: "L'une des meilleures adresses pour un steak à Montréal", source: "The Main" },
      { quote: "Parmi les brunchs les plus populaires au Canada", source: "OpenTable" },
    ],
    dishesTitle: "Les incontournables",
    // Short description under each menu in the "Nos menus" frame. Hours come from lib/menus.ts.
    menuBlurbs: {
      lunch: "Plats du jour, soupe à l'oignon gratinée, tartares et onglet à l'échalote.",
      dinner: "Plateaux de fruits de mer, canard confit, bouillabaisse, côte de bœuf vieillie 30 jours.",
      brunch: "Bénédictines au saumon fumé maison, croque-madame, pancakes « Papa Joss », bar à huîtres.",
      dineEarly: "Entrée au choix, puis canard confit, moules frites ou cavatelli maison.",
      desserts: "Crème brûlée flambée au Grand Marnier, profiteroles, île flottante, glaces maison.",
    },
    dessertsWhen: "Midi et soir",
    cellierEyebrow: "Événements privés · Traiteur",
    cellierTitle: "Le Cellier, de 20 à 80 convives. Le restaurant entier, jusqu'à 120.",
    cellier:
      "L'un des meilleurs lieux du centre-ville pour vos réunions d'affaires privées et vos célébrations. Notre traiteur français se déplace aussi chez vous, au bureau ou ailleurs.",
    cellierCatering: "Service traiteur",
    location:
      "À l'angle de De Maisonneuve Ouest et de Drummond, à quelques pas du métro Peel. Valet et stationnement à l'hôtel Le Mount Stephen. Terrasse au printemps et en été.",
    terraceAlt: "La terrasse d'été du Pois Penché sur le boulevard De Maisonneuve, Montréal",
    introTagline: "Brasserie parisienne · Montréal · depuis 2008",
  },

  hours: {
    title: "Heures et adresse",
    contactNote:
      "Pour des questions concernant nos réservations de groupes ou notre service traiteur, veuillez utiliser les formulaires de contact disponibles dans nos pages",
    contactNoteAnd: "et",
    contactNoteEnd: ". Merci.",
    gettingHere: "Se rendre",
    gettingHereText:
      "Le Pois Penché se trouve au cœur du centre-ville de Montréal, dans le Mille carré doré, à quelques minutes de marche de la station de métro Peel (lignes verte et orange).",
    parking: "Stationnement",
    parkingText: "Valet et stationnement payant à l'hôtel Le Mount Stephen, à côté du restaurant : 1440 rue Drummond.",
    parkingText2: "Parcomètres dans les rues environnantes.",
  },

  story: {
    title: "Notre histoire",
    pullQuote: "Une ambassade montréalaise de la joie de vivre à la française.",
    paragraphs: [
      "Le Pois Penché est l'accomplissement du rêve du restaurateur Imad Nabwani : partager les plaisirs de la gastronomie française qui l'ont enchanté dans sa jeunesse à Paris.",
      "Après s'être installé à Montréal dans les années 1990, Imad a fait carrière dans quelques-uns des restaurants les plus réputés de la ville. En 2011, il a quitté son poste, a fait l'acquisition du Pois Penché et s'est consacré entièrement à en faire une ambassade montréalaise de la joie de vivre à la française et des plaisirs de la table.",
      "Aujourd'hui, Le Pois Penché est une institution familiale fréquentée par de fidèles habitués et par des voyageurs venus des quatre coins du monde. Notre réputation repose sur une cuisine délicieuse et réconfortante, ainsi que sur un sens de l'hospitalité qui transforme rapidement les visiteurs en amis.",
      "Le Pois Penché a été reconnu parmi les meilleurs restaurants français de Montréal par Time Out Worldwide et Tourisme Montréal, cité comme l'une des meilleures adresses pour un steak à Montréal par The Main, et nommé parmi les brunchs les plus populaires au Canada par OpenTable.",
      "Nous sommes fiers de soutenir des organismes philanthropiques qui embellissent Montréal et améliorent la vie des Montréalais.",
      "Au plaisir de vous accueillir.",
    ],
  },

  privateDining: {
    title: "Événements privés",
    headline: "Le Cellier, de 20 à 80 convives. Le restaurant entier, jusqu'à 120.",
    intro:
      "Le Pois Penché est l'un des meilleurs lieux du centre-ville de Montréal pour accueillir vos réunions d'affaires privées et vos célébrations. Vous pouvez réserver Le Cellier, notre salle de banquet pouvant accueillir de 20 à 80 convives, ou l'ensemble de notre restaurant, pour un maximum de 120 convives.",
    brochure: "Téléchargez notre brochure",
    request: "Demandez des infos",
    floorPlans: "Plans de salle",
    floorPlanAlt: "Plan de salle du Cellier, la salle privée du Pois Penché",
  },

  catering: {
    title: "Traiteur",
    headline: "Le traiteur français par excellence à Montréal",
    intro:
      "Nous sommes le traiteur français par excellence à Montréal. Veuillez nous contacter pour vos réunions d'affaires ou célébrations de toute taille, chez vous, au bureau, ou ailleurs. Il nous fera plaisir d'y amener notre gastronomie française raffinée et notre hospitalité chaleureuse au grand bonheur de vos invités.",
    menuPdf: "Consultez notre menu traiteur (PDF)",
    request: "Demandez des infos",
  },

  form: {
    title: "Demandez des infos",
    intro:
      "Veuillez nous donner le plus de détails possible, même si votre date et le nombre d'invités sont approximatifs. Nous vous contacterons dans les plus brefs délais. Merci !",
    name: "Nom",
    company: "Compagnie",
    phone: "Téléphone",
    email: "Courriel",
    date: "Date de votre événement",
    time: "Heure de votre événement",
    address: "Adresse où l'événement aura lieu",
    eventType: "Type d'événement",
    eventTypes: ["Affaires", "Fête"],
    serviceType: "Type de service",
    serviceTypes: ["Cocktail dînatoire", "Banquet", "Cocktail + Banquet", "Buffet"],
    guests: "Nombre d'invités",
    guestsHint: "Le Cellier : 20 à 80 · Restaurant : 120 max.",
    other: "Autres infos",
    send: "Envoyer",
    sending: "Envoi en cours…",
    success: "Merci ! Votre demande a bien été envoyée. Nous vous répondrons rapidement.",
    error: "Une erreur est survenue. Écrivez-nous directement à",
    required: "Ce champ est requis.",
  },

  gallery: {
    title: "Galerie",
    intro: "Un aperçu de la salle, de la cuisine et des assiettes du Pois Penché.",
    open: "Agrandir la photo",
    close: "Fermer",
    prev: "Photo précédente",
    next: "Photo suivante",
  },

  giftCards: {
    title: "Cartes-cadeaux",
    tagline: "Donnez la joie de vivre du Pois Penché en cadeau",
    buy: "Achetez votre carte-cadeau",
    inStore: "Aussi disponible au restaurant",
  },

  careers: {
    title: "Carrières",
    sendCv: "Envoyez votre CV",
    reasonsTitle: "Cinq bonnes raisons de vous joindre à notre équipe",
    reasons: [
      "Un emploi très bien rémunéré, digne d'une table excellente du centre-ville.",
      "Un milieu de travail joyeux et respectueux, aux standards élevés, au sein d'une équipe fière de pratiquer son métier, et avec qui il fait plaisir de travailler.",
      "50 % d'escompte sur vos repas de loisir, y compris ceux de votre famille proche.",
      "Repas de travail gratuits.",
      "Horaire flexible.",
    ],
    closing: "Au plaisir de vous rencontrer !",
  },

  faq: {
    title: "FAQ",
    heading: "Questions fréquentes",
    items: [
      {
        q: "Que faut-il savoir sur Le Pois Penché, restaurant français du centre-ville de Montréal ?",
        a: "Le Pois Penché est une institution depuis 2008. Située dans le Mille carré doré, notre brasserie parisienne sert les grands classiques de la cuisine française, des steaks d'exception et des plateaux de fruits de mer, dans une ambiance chaleureuse et conviviale. Au fil des années, elle est devenue une adresse favorite de nombreux Montréalais et voyageurs, et a été reconnue parmi les meilleurs restaurants français de la ville par Time Out Worldwide et Tourisme Montréal.",
      },
      {
        q: "Où se trouve Le Pois Penché ?",
        a: "Le Pois Penché est situé au 1230, boulevard De Maisonneuve Ouest, à l'angle de la rue Drummond, au cœur du centre-ville de Montréal (Mille carré doré), à quelques minutes de marche de la station de métro Peel.",
      },
      { q: "Est-ce que Le Pois Penché accueille les enfants ?", a: "Oui." },
      { q: "Le Pois Penché sert-il le brunch ?", a: "Oui. Le brunch est servi le samedi et le dimanche, de 10 h 30 à 15 h." },
      { q: "Le Pois Penché a-t-il une terrasse ?", a: "Oui. Notre belle terrasse est ouverte au printemps et en été, selon la météo." },
      {
        q: "Le Pois Penché convient-il aux groupes et événements privés ?",
        a: "Oui. Nous accueillons les événements privés dans Le Cellier, notre salle de banquet pour 20 à 80 invités, ou dans l'ensemble du restaurant pour un maximum de 120 invités — idéal pour les réunions d'affaires comme pour les célébrations.",
      },
      {
        q: "Le Pois Penché offre-t-il un service de traiteur ?",
        a: "Oui. Nous offrons un service de traiteur français pour les réunions d'affaires et célébrations de toute taille, chez vous, au bureau ou ailleurs.",
      },
      {
        q: "Où puis-je stationner près du Pois Penché ?",
        a: "Un service de valet et un stationnement payant sont disponibles à l'hôtel Le Mount Stephen, juste à côté, au 1440 rue Drummond. Des parcomètres sont aussi disponibles dans les rues environnantes.",
      },
      {
        q: "Comment réserver une table au Pois Penché ?",
        a: "Les réservations se font en ligne via OpenTable, directement depuis le bouton « Réservez » présent sur chaque page de notre site.",
      },
    ],
  },
};

export type Content = typeof fr;

const en: Content = {
  nav: {
    menus: "Menus",
    menuItems: [
      { key: "lunch", label: "Lunch" },
      { key: "dinner", label: "Dinner" },
      { key: "brunch", label: "Brunch" },
      { key: "dineEarly", label: "Dine Early 5 pm" },
      { key: "desserts", label: "Desserts" },
    ],
    items: [
      { key: "hours", label: "Hours & Address" },
      { key: "story", label: "Our Story" },
      { key: "privateDining", label: "Private Dining" },
      { key: "catering", label: "Catering" },
      { key: "gallery", label: "Gallery" },
      { key: "giftCards", label: "Gift Cards" },
      { key: "careers", label: "Careers" },
      { key: "faq", label: "FAQ" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Français",
    switchLangShort: "FR",
    home: "Home",
  },

  common: {
    reserve: "Reserve",
    news: "Get our news",
    order: "Order pickup",
    directions: "Directions",
    download: "Download",
    seeMenus: "See the menus",
    since: "since",
    otherMenus: "Our other menus",
    backHome: "Back to home",
    notFound: "This page does not exist.",
    hoursTitle: "Opening hours",
    lunch: "Lunch",
    dinner: "Dinner",
    brunch: "Brunch",
    lunchHours: "Tuesday to Friday, 11:30 a.m. to 3 p.m.",
    dinnerHours1: "Sunday to Wednesday, 5 p.m. to 10 p.m.",
    dinnerHours2: "Thursday to Saturday, 5 p.m. to 11 p.m.",
    brunchHours: "Saturday and Sunday, 10:30 a.m. to 3 p.m.",
    followUs: "Follow us",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    pricesNote: "Taxes and gratuity not included. Prices and dishes may change with the season.",
    marketPrice: "Market price",
    consent: {
      text: "We use cookies to measure site traffic.",
      accept: "Accept",
      decline: "Decline",
    },
  },

  announcement: {
    enabled: false,
    title: "Holiday menu",
    body: "Book now for your year-end celebrations in Le Cellier.",
    cta: "Reserve",
    href: "",
    close: "Close",
  },

  home: {
    blurb1Title: "Welcome to downtown Montreal's favourite Parisian brasserie.",
    blurb1:
      "Founded in 2008, Le Pois Penché is a beloved Golden Square Mile institution. You'll find the great classics of French cuisine with Montreal touches, as well as exceptional steaks and spectacular seafood platters — all served in a charming setting with delightfully warm joie de vivre. We look forward to hosting you!",
    blurb2Title: "Lunch, dinner, brunch and the terrace",
    blurb2:
      "We serve lunch from 11:30 a.m., Tuesday through Friday, dinner every evening from 5 p.m., and weekend brunch from 10:30 a.m. Our sidewalk terrace is open in spring and summer, weather permitting. You will find us at the corner of De Maisonneuve Boulevard West and Drummond Street, just steps from Peel metro station and all downtown attractions.",
    menusTitle: "Our menus",
    captionLeft: "Parisian brasserie · Golden Square Mile · since 2008",
    captionRight: "Lunch · Dinner · Brunch · Terrace",
    reserveTable: "Reserve a table",
    press: [
      { quote: "Among Montreal's best French restaurants", source: "Time Out Worldwide · Tourisme Montréal" },
      { quote: "One of the best places for steak in Montreal", source: "The Main" },
      { quote: "Among Canada's most popular brunches", source: "OpenTable" },
    ],
    dishesTitle: "The classics",
    menuBlurbs: {
      lunch: "Daily specials, gratinéed onion soup, tartares and hanger steak with shallots.",
      dinner: "Seafood platters, duck confit, bouillabaisse, 30-day dry-aged prime rib.",
      brunch: "House-smoked salmon Benedict, croque-madame, \"Papa Joss\" pancakes, raw bar.",
      dineEarly: "Your choice of starter, then duck confit, moules frites or house-made cavatelli.",
      desserts: "Crème brûlée flambéed with Grand Marnier, profiteroles, île flottante, house-made ice cream.",
    },
    dessertsWhen: "Lunch and dinner",
    cellierEyebrow: "Private dining · Catering",
    cellierTitle: "Le Cellier, for 20 to 80 guests. The whole restaurant, up to 120.",
    cellier:
      "One of downtown Montreal's best venues for private business meetings and celebrations. Our French catering also comes to you, at home, at the office or elsewhere.",
    cellierCatering: "Catering",
    location:
      "At the corner of De Maisonneuve West and Drummond, steps from Peel metro. Valet and parking at hotel Le Mount Stephen. Terrace open in spring and summer.",
    terraceAlt: "The summer terrace at Le Pois Penché on De Maisonneuve Boulevard, Montreal",
    introTagline: "Parisian brasserie · Montréal · since 2008",
  },

  hours: {
    title: "Hours & Address",
    contactNote: "For questions about group reservations or catering services, please use the contact forms in our",
    contactNoteAnd: "and",
    contactNoteEnd: " pages. Thank you.",
    gettingHere: "Getting here",
    gettingHereText:
      "Le Pois Penché is located in the heart of downtown Montreal's Golden Square Mile, a short walk from Peel metro station (Green and Orange lines).",
    parking: "Parking",
    parkingText: "Valet and paid parking at hotel Le Mount Stephen, next to the restaurant: 1440 Drummond St.",
    parkingText2: "Parking meters in surrounding streets.",
  },

  story: {
    title: "Our Story",
    pullQuote: "A Montreal embassy of French joie de vivre.",
    paragraphs: [
      "Le Pois Penché is the fulfilment of restaurateur Imad Nabwani's desire to share the pleasures of French gastronomy, which enchanted him as a young man in Paris.",
      "After relocating to Montreal in the 1990s, Imad set about building a career in some of the city's most celebrated restaurants. In 2011, he left his position, acquired Le Pois Penché, and devoted himself entirely to transforming it into a Montreal embassy of French joie de vivre and culinary delights.",
      "Today, Le Pois Penché is a family-owned institution frequented by loyal regulars and travellers from all corners of the world. Our reputation is built on delicious, comforting food and a sense of hospitality that quickly turns visitors into old friends.",
      "Le Pois Penché has been named among Montreal's best French restaurants by Time Out Worldwide and Tourisme Montréal, called one of the best places for steak in Montreal by The Main, and recognized among Canada's most popular brunches by OpenTable.",
      "We are proud to support philanthropic organizations that improve Montreal and the lives of Montrealers.",
      "We look forward to welcoming you.",
    ],
  },

  privateDining: {
    title: "Private Dining",
    headline: "Le Cellier, for 20 to 80 guests. The whole restaurant, up to 120.",
    intro:
      "Le Pois Penché is one of downtown Montreal's best venues to host your private business meetings and celebrations. You may reserve Le Cellier, our banquet room for 20 to 80 guests, or our entire restaurant for up to 120 guests.",
    brochure: "Download our brochure",
    request: "Request information",
    floorPlans: "Floor plans",
    floorPlanAlt: "Floor plan of Le Cellier, the private room at Le Pois Penché",
  },

  catering: {
    title: "Catering",
    headline: "Montreal's premier French caterer",
    intro:
      "We are Montreal's premier French caterer. Please contact us for your business events or parties of all sizes, at your home, your office, or elsewhere. We'll be delighted to bring our refined French gastronomy and warm hospitality for the pleasure of your guests.",
    menuPdf: "See our catering menu (PDF)",
    request: "Request information",
  },

  form: {
    title: "Request information",
    intro:
      "Please give us as many details as possible, even if your date and number of guests are approximate. We'll contact you as soon as possible. Thank you!",
    name: "Name",
    company: "Company",
    phone: "Phone",
    email: "Email",
    date: "Date of your event",
    time: "Time of your event",
    address: "Address where the event will take place",
    eventType: "Type of event",
    eventTypes: ["Business", "Party"],
    serviceType: "Type of service",
    serviceTypes: ["Cocktail reception", "Banquet", "Cocktail + Banquet", "Buffet"],
    guests: "Number of guests",
    guestsHint: "Le Cellier: 20 to 80 · Restaurant: 120 max.",
    other: "Other information",
    send: "Send",
    sending: "Sending…",
    success: "Thank you! Your request has been sent. We'll get back to you shortly.",
    error: "Something went wrong. Please write to us directly at",
    required: "This field is required.",
  },

  gallery: {
    title: "Gallery",
    intro: "A look at the dining room, the kitchen and the plates at Le Pois Penché.",
    open: "Enlarge photo",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
  },

  giftCards: {
    title: "Gift Cards",
    tagline: "Give the gift of Le Pois Penché's joie de vivre",
    buy: "Buy your gift card",
    inStore: "Also available at the restaurant",
  },

  careers: {
    title: "Careers",
    sendCv: "Send us your CV",
    reasonsTitle: "Five good reasons to join our team",
    reasons: [
      "A well paid position, befitting a top-tier downtown restaurant.",
      "A cheerful, respectful work environment with high standards, featuring a team that takes pride in its craft — and is a pleasure to work with.",
      "A 50% discount on personal meals, including for your immediate family.",
      "Free staff meals.",
      "Flexible schedule.",
    ],
    closing: "We look forward to meeting you!",
  },

  faq: {
    title: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "What should I know about Le Pois Penché, a French restaurant in downtown Montreal?",
        a: "Le Pois Penché has been a Montreal institution since 2008. Located in the Golden Square Mile, our Parisian brasserie serves the great classics of French cuisine, exceptional steaks, and spectacular seafood platters, in a warm and welcoming setting. Over the years, it has become a favourite address for Montrealers and travellers alike, and has been recognized among the city's best French restaurants by Time Out Worldwide and Tourisme Montréal.",
      },
      {
        q: "Where is Le Pois Penché located?",
        a: "Le Pois Penché is located at 1230 De Maisonneuve Boulevard West, at the corner of Drummond Street, in the heart of downtown Montreal's Golden Square Mile — a short walk from Peel metro station.",
      },
      { q: "Does Le Pois Penché welcome kids?", a: "Yes." },
      { q: "Does Le Pois Penché serve brunch?", a: "Yes. Brunch is served Saturday and Sunday, from 10:30 a.m. to 3 p.m." },
      { q: "Does Le Pois Penché have a terrace?", a: "Yes — our beautiful sidewalk terrace is open in spring and summer, weather permitting." },
      {
        q: "Is Le Pois Penché suitable for groups and private events?",
        a: "Yes. We host private events in Le Cellier, our banquet room for 20 to 80 guests, or in the full restaurant for up to 120 guests — ideal for business meetings as well as celebrations.",
      },
      {
        q: "Does Le Pois Penché offer catering?",
        a: "Yes, we offer French catering for business events and parties of all sizes, at your home, office, or elsewhere.",
      },
      {
        q: "Where can I park near Le Pois Penché?",
        a: "Valet and paid parking are available next door at hotel Le Mount Stephen, 1440 Drummond Street. Parking meters are also available on surrounding streets.",
      },
      {
        q: "How do I book a table at Le Pois Penché?",
        a: "Reservations are made online via OpenTable, directly from the \"Reserve\" button present on every page of our site.",
      },
    ],
  },
};

export const content = { fr, en } as const;
