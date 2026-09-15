// Facts about the restaurant that appear in more than one place.
// Change them here and they update everywhere (footer, hours page, structured data, llms.txt).

export const site = {
  name: "Le Pois Penché",
  legalName: "Le Pois Penché",
  url: "https://lepoispenche.com",
  founded: "2008",

  address: {
    street: "1230 boul. De Maisonneuve Ouest",
    city: "Montréal",
    region: "QC",
    postalCode: "H3G 1M2",
    country: "CA",
  },
  // Corner of De Maisonneuve Ouest and Drummond
  geo: { lat: 45.4998, lng: -73.5752 },

  phone: "514-667-5050",
  phoneHref: "tel:+15146675050",
  email: "info@lepoispenche.com",
  careersEmail: "manager@lepoispenche.com",

  links: {
    openTable: {
      fr: "https://www.opentable.ca/r/le-pois-penche-reservations-montreal?restref=25942&lang=fr-CA&ot_source=Restaurant%20website",
      en: "https://www.opentable.ca/r/le-pois-penche-reservations-montreal?restref=25942&lang=en-CA&ot_source=Restaurant%20website",
    },
    pickup: "https://order.chkplzapp.com/pois-penche/menus",
    giftCards: "https://www.freebeespay.com/fr/PointSale/Purchase/3804",
    instagram: "https://www.instagram.com/lepoispenche/",
    facebook: "https://www.facebook.com/LePoisPenche/",
    linkedin: "https://ca.linkedin.com/company/le-pois-penche",
    googleMaps: "https://www.google.com/maps/dir/?api=1&destination=Le+Pois+Pench%C3%A9+1230+boul.+De+Maisonneuve+Ouest+Montr%C3%A9al",
    // Google Maps embed needs no API key
    mapEmbed:
      "https://www.google.com/maps?q=Le+Pois+Pench%C3%A9,+1230+boul.+De+Maisonneuve+Ouest,+Montr%C3%A9al,+QC+H3G+1M2&z=16&output=embed",
    // Leave empty until the client picks a newsletter platform. The "Get our news" button hides while empty.
    newsletter: "",
    brochure: "/pdf/brochure-evenements-prives.pdf",
    cateringMenu: { fr: "/pdf/menu-traiteur-fr.pdf", en: "/pdf/catering-menu-en.pdf" },
    privacy: { fr: "/pdf/politique-confidentialite-fr.pdf", en: "/pdf/privacy-policy-en.pdf" },
  },

  // Used for schema.org openingHoursSpecification. Times are 24h.
  hours: [
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:30", closes: "15:00", service: "lunch" },
    { days: ["Sunday", "Monday", "Tuesday", "Wednesday"], opens: "17:00", closes: "22:00", service: "dinner" },
    { days: ["Thursday", "Friday", "Saturday"], opens: "17:00", closes: "23:00", service: "dinner" },
    { days: ["Saturday", "Sunday"], opens: "10:30", closes: "15:00", service: "brunch" },
  ],

  analytics: { ga4: process.env.NEXT_PUBLIC_GA_ID ?? "G-336FLXB9W6" },
} as const;

export function fullAddress(separator = ", ") {
  const a = site.address;
  return [a.street, `${a.city}, ${a.region} ${a.postalCode}`].join(separator);
}
