# Le Pois Penché — website

Bilingual (FR/EN) Next.js site for lepoispenche.com. Runs on Replit.

## Where things live

| To change… | Edit |
|---|---|
| Any text on the site | `lib/content.ts` (French first, English below) |
| A dish, a price, a menu section | `lib/menus.ts` |
| Hours, address, phone, links (OpenTable, gift cards, socials, newsletter) | `lib/site.ts` |
| Page titles and descriptions for Google | `lib/metadata.ts` |
| A page's URL in French or English | `lib/routes.ts` |
| Photos and their alt text | `lib/images.ts` (files in `public/images`) |
| The pop-up announcement | `lib/content.ts` → `announcement.enabled = true` |
| Redirects from old URLs | `next.config.ts` → `PAGES` table |

Pages are in `components/pages/`. Shared pieces (header, footer, hero, forms) are in `components/`.

## Adding a photo

1. Drop the original in `../assets/photos/…` (outside the repo) and add a row in `scripts/optimize-images.mjs`.
2. Run `npm run images`. A 2560px web version lands in `public/images/`.
3. Reference it in `lib/images.ts` with a descriptive alt text in both languages.

Photos should be landscape (16:9) with the subject centred so they crop well on phones.

## Forms

The private-dining and catering forms email through Resend. Set these Secrets on Replit:
`RESEND_API_KEY`, `ENQUIRY_TO_PRIVATE`, `ENQUIRY_TO_CATERING`. Until they are set, the form opens the visitor's mail app instead.

## Commands

```
npm run dev      # local development on http://localhost:3000
npm run build    # production build (also writes sitemap.xml and robots.txt)
npm start        # serve the production build
npm run images   # regenerate web photos from the originals
```

Replit uses `npm run build` then `npm start` (see `.replit`).
