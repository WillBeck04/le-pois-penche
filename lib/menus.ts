// The five menus. Prices are strings so "Prix du marché" and "+6" work too.
// To change a dish or price, edit it here; the page and the Google menu data update together.

import type { MenuKey } from "./routes";

export type Bilingual = { fr: string; en: string };
export type MenuItem = {
  name: Bilingual;
  desc?: Bilingual;
  price?: string | Bilingual;
  /** Options with their own price, e.g. rigatoni with shrimp / with lobster */
  variants?: { name: Bilingual; price: string }[];
  /** Optional dietary tags shown as small labels, e.g. ["végé"] — fill in when the kitchen confirms */
  tags?: string[];
};
export type MenuSection = { title: Bilingual; note?: Bilingual; items: MenuItem[] };
export type Menu = {
  key: MenuKey;
  title: Bilingual;
  subtitle?: Bilingual;
  /** One descriptive sentence shown above the menu. Search engines and AI answer engines read this. */
  intro: Bilingual;
  hero: string;
  heroAlt: Bilingual;
  sections: MenuSection[];
};

const MARKET: Bilingual = { fr: "Prix du marché", en: "Market price" };

export const menus: Record<MenuKey, Menu> = {
  lunch: {
    key: "lunch",
    title: { fr: "Lunch", en: "Lunch" },
    subtitle: { fr: "Mardi au vendredi, 11 h 30 à 15 h", en: "Tuesday to Friday, 11:30 a.m. to 3 p.m." },
    intro: {
      fr: "Le midi, la brasserie propose des plats du jour, la soupe à l'oignon gratinée, le tartare, l'onglet à l'échalote et une sélection de fruits de mer, servis en toute simplicité pour les lunchs d'affaires du centre-ville.",
      en: "At lunch the brasserie serves daily specials, gratinéed onion soup, tartare, hanger steak with shallots and a selection of seafood, ideal for a downtown business lunch.",
    },
    hero: "/images/menus/lunch-steak-frites.jpg",
    heroAlt: { fr: "Steak frites servi au lunch au Pois Penché, brasserie française du centre-ville de Montréal", en: "Steak frites served at lunch at Le Pois Penché, French brasserie in downtown Montreal" },
    sections: [
      {
        title: { fr: "Plats du jour", en: "Daily specials" },
        items: [
          { name: { fr: "Magret de canard, carottes nantaises, sauce vin rouge", en: "Duck breast, Nantes carrots, red wine sauce" }, price: "37" },
          { name: { fr: "Truite amandine, purée de petits pois", en: "Trout amandine, pea purée" }, price: "35" },
          { name: { fr: "Gnocchi alla nerano, sauce courgette, citron, parmesan", en: "Gnocchi alla nerano, zucchini sauce, lemon, parmesan" }, price: "32" },
        ],
      },
      {
        title: { fr: "Fruits de mer", en: "Seafood" },
        items: [
          { name: { fr: "Huîtres", en: "Oysters" }, price: MARKET },
          { name: { fr: "Le Parisien (2 pers.)", en: "Le Parisien (2 people)" }, desc: { fr: "½ homard, 8 huîtres assorties, 4 crevettes, ½ lb moules, ceviche de pétoncles, anchois d'Espagne", en: "½ lobster, 8 assorted oysters, 4 shrimp, ½ lb mussels, scallop ceviche, Spanish anchovies" }, price: "160" },
          { name: { fr: "Demi-homard en coquille", en: "Half lobster in the shell" }, price: "42" },
          { name: { fr: "Cocktail de crevettes, sauce au cognac", en: "Shrimp cocktail, cognac sauce" }, price: "26" },
        ],
      },
      {
        title: { fr: "Entrées", en: "Starters" },
        items: [
          { name: { fr: "Soupe du jour", en: "Soup of the day" }, price: "14" },
          { name: { fr: "Entrée du jour", en: "Starter of the day" }, price: "14" },
          { name: { fr: "Salade panachée", en: "Mixed green salad" }, price: "18" },
          { name: { fr: "Soupe à l'oignon au Louis d'Or", en: "Onion soup with Louis d'Or cheese" }, price: "21" },
          { name: { fr: "Escargots au beurre persillé", en: "Escargot in parsley butter" }, price: "19" },
          { name: { fr: "Petit tartare de saumon ou bœuf", en: "Small salmon or beef tartare" }, price: "25" },
          { name: { fr: "Beignets de morue", en: "Cod fritters" }, price: "25" },
          { name: { fr: "Terrine de foie gras, confiture de figues & d'amandes", en: "Foie gras terrine, fig and almond preserve" }, price: "36" },
        ],
      },
      {
        title: { fr: "Plats principaux", en: "Main courses" },
        items: [
          { name: { fr: "Salade Niçoise avec thon confit maison", en: "Niçoise salad with house-made confit tuna" }, price: "31" },
          { name: { fr: "Salade César au poulet grillé, croûtons, parmigiano", en: "Caesar salad with grilled chicken, croutons, Parmigiano" }, price: "30", variants: [{ name: { fr: "avec crabe des neiges", en: "with snow crab" }, price: "45" }] },
          { name: { fr: "Moules frites", en: "Mussels and fries" }, price: "32" },
          { name: { fr: "Saumon atlantique, vinaigrette au babeurre, avocat", en: "Atlantic salmon, buttermilk vinaigrette, avocado" }, price: "40" },
          { name: { fr: "Guédille au crabe des neiges", en: "Snow crab roll" }, price: "40" },
          { name: { fr: "Steak d'agneau de l'Alberta, frites ou salade", en: "Alberta lamb steak, fries or salad" }, price: "49" },
          { name: { fr: "Tartare de saumon ou bœuf", en: "Salmon or beef tartare" }, price: "42" },
          { name: { fr: "Onglet échalotes", en: "Hanger steak with shallots" }, price: "42" },
          { name: { fr: "NY steak frites certifié Angus", en: "NY strip steak frites, certified Angus" }, price: "62" },
          { name: { fr: "Hamburger LPP", en: "LPP Burger" }, price: "34" },
          { name: { fr: "Aubergine Saïgon", en: "Saigon Eggplant" }, desc: { fr: "Laquée au soja, cajous, crème de tofu", en: "Soy-glazed, cashews, tofu cream" }, price: "32" },
        ],
      },
      {
        title: { fr: "Desserts", en: "Desserts" },
        items: [
          { name: { fr: "Crème brûlée vanille Bourbon", en: "Bourbon vanilla crème brûlée" }, price: "13" },
          { name: { fr: "Pêche Melba", en: "Peach Melba" }, price: "14" },
          { name: { fr: "Dessert du jour", en: "Dessert of the day" }, price: MARKET },
        ],
      },
    ],
  },

  dinner: {
    key: "dinner",
    title: { fr: "Souper", en: "Dinner" },
    subtitle: { fr: "Dimanche à mercredi, 17 h à 22 h · Jeudi au samedi, 17 h à 23 h", en: "Sunday to Wednesday, 5 p.m. to 10 p.m. · Thursday to Saturday, 5 p.m. to 11 p.m." },
    intro: {
      fr: "Le soir, Le Pois Penché sert les grands classiques de la brasserie parisienne : plateaux de fruits de mer, soupe à l'oignon gratinée au Louis d'Or, canard confit, bouillabaisse, et des steaks d'exception dont la côte de bœuf vieillie à sec 30 jours.",
      en: "In the evening, Le Pois Penché serves the great classics of the Parisian brasserie: seafood platters, onion soup gratinéed with Louis d'Or, duck confit, bouillabaisse, and exceptional steaks including a 30-day dry-aged prime rib.",
    },
    hero: "/images/home/carousel-04-canard-confit.jpg",
    heroAlt: { fr: "Canard confit, plat signature du souper au Pois Penché, brasserie française à Montréal", en: "Duck confit, a signature dinner dish at Le Pois Penché, French brasserie in Montreal" },
    sections: [
      {
        title: { fr: "Les plateaux de fruits de mer", en: "Seafood platters" },
        items: [
          { name: { fr: "Le Petit Plateau (1-2 pers.)", en: "Le Petit Plateau (1-2 people)" }, desc: { fr: "6 huîtres cocktail, 3 crevettes, tartare de saumon", en: "6 cocktail oysters, 3 shrimp, salmon tartare" }, price: "58" },
          { name: { fr: "Le Parisien (2 pers.)", en: "Le Parisien (2 people)" }, desc: { fr: "½ homard, 8 huîtres, 4 crevettes, ½ lb moules, ceviche de pétoncles, anchois d'Espagne", en: "½ lobster, 8 oysters, 4 shrimp, ½ lb mussels, scallop ceviche, Spanish anchovies" }, price: "160" },
          { name: { fr: "Le Pois Penché (3-4 pers.)", en: "Le Pois Penché (3-4 people)" }, desc: { fr: "1 homard, 12 huîtres, 8 crevettes, 1 lb moules, ceviche de pétoncles, tartare de saumon, anchois d'Espagne", en: "1 lobster, 12 oysters, 8 shrimp, 1 lb mussels, scallop ceviche, salmon tartare, Spanish anchovies" }, price: "235" },
          { name: { fr: "Huîtres", en: "Oysters" }, price: MARKET },
          { name: { fr: "Demi-homard en coquille", en: "Half lobster in the shell" }, price: "42" },
          { name: { fr: "Cocktail de crevettes, sauce au cognac", en: "Shrimp cocktail, cognac sauce" }, price: "26" },
          { name: { fr: "Ceviche épicé de pétoncles", en: "Spicy scallop ceviche" }, price: "34" },
          { name: { fr: "Moules à la crème", en: "Mussels in cream sauce" }, price: "26" },
          { name: { fr: "Caviar Grand Béluga, crème sure et blinis", en: "Grand Beluga caviar, sour cream and blinis" }, price: "180" },
        ],
      },
      {
        title: { fr: "Les entrées et salades", en: "Starters and salads" },
        items: [
          { name: { fr: "Soupe à l'oignon gratinée au Louis d'Or", en: "French onion soup gratinéed with Louis d'Or cheese" }, price: "21" },
          { name: { fr: "Soupe du jour", en: "Soup of the day" }, price: "14" },
          { name: { fr: "Salade panachée aux fines herbes", en: "Mixed green salad with fine herbs" }, price: "18" },
          { name: { fr: "Salade Waldorf LPP", en: "LPP Waldorf Salad" }, desc: { fr: "Pommes vertes, lardons de canard, noix de pécan, fromage bleu", en: "Green apples, duck bacon lardons, pecans, blue cheese" }, price: "23" },
          { name: { fr: "Escargots au beurre persillé", en: "Escargot in parsley butter" }, price: "19" },
          { name: { fr: "Calamar grillé et chorizo maison, coulis de poivrons", en: "Grilled squid and house-made chorizo, pepper coulis" }, price: "26" },
          { name: { fr: "Terrine de foie gras, confiture de figues et d'amandes", en: "Foie gras terrine, fig and almond preserve" }, price: "36" },
          { name: { fr: "Beignets de morue & aïoli de pistou", en: "Cod fritters & pistou aioli" }, price: "25" },
          { name: { fr: "Le petit tartare", en: "Tartare appetizer" }, desc: { fr: "Bœuf classique ou saumon au gingembre", en: "Classic beef or ginger salmon" }, price: "25" },
          { name: { fr: "Burrata, tomates anciennes, miel truffé, pistaches", en: "Burrata, heirloom tomatoes, truffle honey, pistachios" }, price: "36" },
          { name: { fr: "Plateau de fromages du Québec (3)", en: "Quebec cheese board (3)" }, price: "27" },
          { name: { fr: "Planche de cochonnailles maison", en: "House-made charcuterie board" }, price: "34" },
        ],
      },
      {
        title: { fr: "Les plats", en: "Mains" },
        items: [
          { name: { fr: "Bouillabaisse façon LPP", en: "LPP-style bouillabaisse" }, desc: { fr: "Pétoncle, moules, crevettes, saumon, poisson du jour", en: "Scallop, mussels, shrimp, salmon, catch of the day" }, price: "42" },
          { name: { fr: "Saumon atlantique canadien", en: "Canadian Atlantic salmon" }, desc: { fr: "Vinaigrette au babeurre, sucrine, avocat", en: "Buttermilk vinaigrette, little gem lettuce, avocado" }, price: "40" },
          { name: { fr: "Quenelles de doré lyonnaises", en: "Lyonnaise-style walleye quenelles" }, desc: { fr: "Bisque de homard", en: "Lobster bisque" }, price: "38" },
          { name: { fr: "Poisson entier grillé", en: "Whole grilled fish" }, price: "110" },
          { name: { fr: "Moules frites", en: "Moules frites" }, price: "32" },
          { name: { fr: "Rigatoni maison avec bisque de homard", en: "House-made rigatoni with lobster bisque" }, variants: [{ name: { fr: "aux crevettes tigrées", en: "with tiger shrimp" }, price: "46" }, { name: { fr: "au homard", en: "with lobster" }, price: "64" }] },
          { name: { fr: "Tartare de bœuf classique ou de saumon au gingembre", en: "Classic beef tartare or ginger salmon tartare" }, desc: { fr: "Frites ou salade", en: "Fries or salad" }, price: "42" },
          { name: { fr: "Canard confit", en: "Duck confit" }, desc: { fr: "Pommes de terre rattes, choux de Bruxelles, lardons de canard fumé, sauce aux poivres", en: "Fingerling potatoes, Brussels sprouts, smoked duck bacon, peppercorn sauce" }, price: "42" },
          { name: { fr: "Steak d'agneau de l'Alberta", en: "Alberta lamb steak" }, desc: { fr: "Chimichurri, gratin dauphinois", en: "Chimichurri, gratin dauphinois" }, price: "49" },
          { name: { fr: "Hamburger LPP", en: "LPP Burger" }, desc: { fr: "Oignons au vin rouge, fromage douanier, frites ou salade", en: "Red wine onions, “douanier” cheese, fries or salad" }, price: "34" },
          { name: { fr: "Cavatelli maison aux champignons", en: "House-made cavatelli with mushrooms" }, desc: { fr: "Crème de cèpes et truffe", en: "Porcini mushroom cream and truffle" }, price: "36" },
          { name: { fr: "Aubergine Saïgon", en: "Saigon Eggplant" }, desc: { fr: "Laquée à la sauce soja, noix de cajou, crème de tofu", en: "Soy-glazed, cashews, tofu cream" }, price: "32" },
        ],
      },
      {
        title: { fr: "Les steaks", en: "Steaks" },
        items: [
          { name: { fr: "Onglet à l'échalote, sauce vin rouge", en: "Hanger steak with shallots, red wine sauce" }, price: "42" },
          { name: { fr: "NY steak frites Angus certifié « Prime »", en: "NY strip steak frites, “Prime”-certified Angus" }, price: "62" },
          { name: { fr: "Wagyu A5 Miyazaki (Japon)", en: "Wagyu A5 Miyazaki (Japan)" }, desc: { fr: "Sauce au vin rouge, purée de pommes de terre, champignons", en: "Red wine sauce, mashed potatoes, mushrooms" }, price: "150" },
          { name: { fr: "La côte de bœuf « Prime Canadien » (32 oz)", en: "“Canadian Prime” prime rib (32 oz)" }, desc: { fr: "Vieillie à sec 30 jours, choix de sauce et deux accompagnements", en: "Dry-aged 30 days, choice of sauce and two side dishes" }, price: "190" },
        ],
      },
    ],
  },

  brunch: {
    key: "brunch",
    title: { fr: "Brunch", en: "Brunch" },
    subtitle: { fr: "Samedi et dimanche, 10 h 30 à 15 h", en: "Saturday and Sunday, 10:30 a.m. to 3 p.m." },
    intro: {
      fr: "La fin de semaine, le brunch réunit les bénédictines au saumon fumé maison sur bagel Saint-Viateur, le croque-madame au jambon du Rang 4, les pancakes « Papa Joss » et le bar à huîtres, nommé parmi les brunchs les plus populaires au Canada par OpenTable.",
      en: "On weekends, brunch brings together house-smoked salmon Benedicts on a Saint-Viateur bagel, croque-madame with Rang 4 ham, “Papa Joss” pancakes and the oyster bar, named among Canada's most popular brunches by OpenTable.",
    },
    hero: "/images/menus/brunch-salmon-benedict.jpg",
    heroAlt: { fr: "Bénédictine au saumon fumé maison servie au brunch du Pois Penché à Montréal", en: "House-smoked salmon Benedict served at brunch at Le Pois Penché in Montreal" },
    sections: [
      {
        title: { fr: "Fruits de mer", en: "Seafood" },
        items: [
          { name: { fr: "Huîtres", en: "Oysters" }, price: MARKET },
          { name: { fr: "Le Parisien (2 pers.)", en: "Le Parisien (2 people)" }, desc: { fr: "½ homard, 8 huîtres assorties, 4 crevettes, ½ lb moules, ceviche de pétoncles, anchois d'Espagne", en: "½ lobster, 8 assorted oysters, 4 shrimp, ½ lb mussels, scallop ceviche, Spanish anchovies" }, price: "160" },
          { name: { fr: "Demi-homard en coquille", en: "Half lobster in the shell" }, price: "42" },
          { name: { fr: "Cocktail de crevettes, sauce au cognac", en: "Shrimp cocktail, cognac sauce" }, price: "26" },
          { name: { fr: "Plateau de caviar et bagel (2 pers.)", en: "Caviar and bagel platter (2 people)" }, desc: { fr: "Caviar beluga 50 g, saumon fumé maison, bagel Saint-Viateur et fromage à la crème", en: "50 g beluga caviar, house-smoked salmon, Saint-Viateur bagel and cream cheese" }, price: "220" },
        ],
      },
      {
        title: { fr: "Entrées", en: "Starters" },
        items: [
          { name: { fr: "Salade panachée", en: "Mixed salad" }, price: "18" },
          { name: { fr: "Soupe à l'oignon au Louis d'Or", en: "Onion soup with Louis d'Or cheese" }, price: "21" },
          { name: { fr: "Petit tartare de saumon", en: "Small salmon tartare" }, price: "25" },
        ],
      },
      {
        title: { fr: "Les œufs & les autres", en: "Eggs & more" },
        items: [
          { name: { fr: "Le Paysan", en: "The Peasant" }, desc: { fr: "Œufs au plat, bacon & saucisse maison, pomme croquette, haricots pistou", en: "Fried eggs, bacon & house-made sausage, potato croquette, pistou beans" }, price: "26" },
          { name: { fr: "Bénédictine Saint-Viateur", en: "Saint-Viateur Benedict" }, desc: { fr: "Saumon fumé maison et fromage à la crème sur bagel", en: "House-smoked salmon and cream cheese on a bagel" }, price: "34" },
          { name: { fr: "Bénédictine au bœuf bourguignon, lardons et sauce vigneronne", en: "Beef Bourguignon Benedict, bacon lardons and vigneronne sauce" }, price: "28" },
          { name: { fr: "Croissant « grilled cheese » au crabe des neiges, avec frites ou salade", en: "Snow crab “grilled cheese” croissant, with fries or salad" }, price: "39" },
          { name: { fr: "Halloumi et avocat sur croissant, œuf au plat, zaatar", en: "Halloumi and avocado on a croissant, fried egg, za'atar" }, price: "26" },
          { name: { fr: "Croque-madame, jambon du Rang 4 (Qc)", en: "Croque-madame, Rang 4 ham (Qc)" }, price: "25" },
          { name: { fr: "Pain doré yuzu-citron, crème fouettée au fromage à la crème", en: "Yuzu-lemon French toast, whipped cream cheese" }, price: "25" },
          { name: { fr: "Pancakes « Papa Joss »", en: "“Papa Joss” Pancakes" }, desc: { fr: "Pommes caramélisées, noix de pécan, glace maison au babeurre", en: "Caramelized apples, pecans, house-made buttermilk ice cream" }, price: "25" },
        ],
      },
      {
        title: { fr: "Les classiques", en: "Classics" },
        items: [
          { name: { fr: "Salade César au poulet grillé", en: "Caesar salad with grilled chicken" }, price: "30" },
          { name: { fr: "Tartare de saumon au gingembre, frites ou salade", en: "Ginger salmon tartare, fries or salad" }, price: "42" },
          { name: { fr: "Steak & œuf NY Angus, pomme croquette", en: "NY Angus steak & egg, potato croquette" }, price: "62" },
          { name: { fr: "Cavatelli maison aux champignons", en: "House-made cavatelli with mushrooms" }, price: "36" },
          { name: { fr: "Moules frites", en: "Moules frites" }, price: "32" },
        ],
      },
    ],
  },

  dineEarly: {
    key: "dineEarly",
    title: { fr: "Soupez tôt", en: "Dine Early" },
    subtitle: { fr: "17 h à 17 h 45 · 2 services, 49 $ par personne", en: "5:00 p.m. to 5:45 p.m. · 2 courses, $49 per person" },
    intro: {
      fr: "Arrivez entre 17 h et 17 h 45 et profitez d'un menu deux services à prix fixe : une entrée au choix, puis le canard confit, les moules frites ou les cavatelli maison aux champignons.",
      en: "Arrive between 5:00 and 5:45 p.m. for a two-course prix fixe: a starter of your choice, then duck confit, moules frites or house-made cavatelli with mushrooms.",
    },
    hero: "/images/menus/dine-early-canard-confit.jpg",
    heroAlt: { fr: "Canard confit du menu Soupez tôt au Pois Penché, brasserie parisienne à Montréal", en: "Duck confit from the Dine Early menu at Le Pois Penché, Parisian brasserie in Montreal" },
    sections: [
      {
        title: { fr: "Entrée (au choix)", en: "Starter (choice of)" },
        items: [
          { name: { fr: "Escargots au beurre persillé", en: "Escargot in parsley butter" } },
          { name: { fr: "Beignets de morue & aïoli de pistou", en: "Cod fritters & pistou aioli" } },
          { name: { fr: "Salade panachée aux fines herbes", en: "Mixed green salad with fine herbs" } },
        ],
      },
      {
        title: { fr: "Plat principal (au choix)", en: "Main course (choice of)" },
        items: [
          { name: { fr: "Canard confit", en: "Duck confit" }, desc: { fr: "Pommes rattes, choux de Bruxelles, lardons de canard fumé, sauce aux poivres", en: "Fingerling potatoes, Brussels sprouts, smoked duck bacon, peppercorn sauce" } },
          { name: { fr: "Moules frites", en: "Moules frites" }, desc: { fr: "Crème, vin blanc", en: "Cream, white wine" } },
          { name: { fr: "Cavatelli maison aux champignons", en: "House-made cavatelli with mushrooms" }, desc: { fr: "Crème de cèpes et truffe", en: "Porcini mushroom cream and truffle" } },
        ],
      },
    ],
  },

  desserts: {
    key: "desserts",
    title: { fr: "Desserts", en: "Desserts" },
    intro: {
      fr: "Pour finir, les desserts de la brasserie : crème brûlée à la vanille de Bourbon flambée au Grand Marnier, profiteroles, moelleux au chocolat, île flottante et glaces maison.",
      en: "To finish, the brasserie's desserts: Bourbon vanilla crème brûlée flambéed with Grand Marnier, profiteroles, molten chocolate cake, île flottante and house-made ice cream.",
    },
    hero: "/images/gallery/18-creme-brulee.jpg",
    heroAlt: { fr: "Crème brûlée à la vanille de Bourbon au Pois Penché, brasserie française à Montréal", en: "Bourbon vanilla crème brûlée at Le Pois Penché, French brasserie in Montreal" },
    sections: [
      {
        title: { fr: "Desserts", en: "Desserts" },
        items: [
          { name: { fr: "Crème brûlée à la vanille de Bourbon", en: "Bourbon vanilla crème brûlée" }, price: "14", variants: [{ name: { fr: "Flambée au Grand Marnier", en: "Flambéed with Grand Marnier" }, price: "+6" }] },
          { name: { fr: "Profiteroles, glace vanille maison, sauce au chocolat noir", en: "Profiteroles, house-made vanilla ice cream, dark chocolate sauce" }, price: "18" },
          { name: { fr: "Moelleux au chocolat, glace vanille maison", en: "Molten chocolate cake, house-made vanilla ice cream" }, price: "18", variants: [{ name: { fr: "Flambé au Grand Marnier", en: "Flambéed with Grand Marnier" }, price: "+6" }] },
          { name: { fr: "Île flottante pistache fraise, eau de rose, crème anglaise", en: "Pistachio-strawberry île flottante, rose water, crème anglaise" }, price: "16" },
          { name: { fr: "Pêche Melba, coulis fraise-yuzu, amandes, glace vanille, chantilly", en: "Peach Melba, strawberry-yuzu coulis, almonds, vanilla ice cream, whipped cream" }, price: "14" },
          { name: { fr: "Glaces maison (3 boules)", en: "House-made ice cream (3 scoops)" }, price: "14", variants: [{ name: { fr: "Ajoutez une boule", en: "Add a scoop" }, price: "5.5" }] },
          { name: { fr: "Fromages du Québec (3)", en: "Quebec cheeses (3)" }, price: "27" },
        ],
      },
    ],
  },
};
