# Le Pois Penché site

Part of the GSMH project; the full brief is in `../../CLAUDE.md` and the build plan in `../BUILD-PLAN.md`.

- Next.js 16 App Router, TypeScript, Tailwind 4 (tokens in `app/globals.css`).
- All copy in `lib/content.ts`, menus in `lib/menus.ts`, facts in `lib/site.ts`, URLs in `lib/routes.ts`.
- Pages are pre-rendered from `app/[lang]/[slug]/page.tsx` via the routes table. Keep components flat.
- Never commit the 8000px originals: they live in `../assets/`; run `npm run images` to regenerate `public/images`.
