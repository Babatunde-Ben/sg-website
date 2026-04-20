# Stephanie George — Personal Brand Site

The official website for **Stephanie George** — event host, moderator, speaker, and podcast creator. Live at [www.stephaniegeorge.co](https://www.stephaniegeorge.co).

## Stack

- **Framework:** Next.js 16 (App Router, React 19, Turbopack)
- **Styling:** Tailwind CSS v4 + custom design tokens (primary/secondary/tertiary palettes in `app/globals.css`)
- **CMS:** Sanity (embedded studio at `/studio` + hosted studio)
- **Email:** Resend + React Email templates
- **Animation:** Motion (formerly Framer Motion) v12
- **Forms:** react-hook-form + zod
- **UI primitives:** Radix UI + custom design system

## Project structure

```
app/
  _assets/            — SVGs, images, Lottie files
  _components/        — page-specific components (home, about, gallery, podcast, shared)
  _docs/              — legal markdown (privacy, TOS)
  api/                — route handlers (contact, story, newsletter, revalidate)
  studio/             — embedded Sanity Studio
  <route>/page.tsx    — one file per page
components/
  emails/             — Resend email templates (shared _EmailShell)
  gallery/            — InfiniteGalleryGrid
  ui/                 — Radix-based primitives (button, dialog, input, etc.)
lib/
  sanity/             — Sanity client + GROQ queries
  seo.ts              — metadata helpers (buildPageMetadata, getBaseUrl)
  notification-recipients.ts — parses CONTACT_EMAIL_TO into a clean array
sanity/
  schemaTypes/        — schema definitions
  structure.ts        — studio navigation (uses orderable gallery)
```

## Getting started

```bash
pnpm install
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000). The embedded Sanity Studio runs at `/studio`.

### Environment variables

Copy the keys below into `.env` (or `.env.local`):

```
NEXT_PUBLIC_BASE_URL="https://www.stephaniegeorge.co"

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_STUDIO_PROJECT_ID="..."
SANITY_STUDIO_DATASET="production"
SANITY_REVALIDATE_SECRET="..."

# Resend
RESEND_API_KEY="re_..."
CONTACT_EMAIL_TO="stephgeorge28@gmail.com,babatundeben110@gmail.com"
CONTACT_EMAIL_FROM="Stephanie George <hello@stephaniegeorge.co>"
CONTACT_EMAIL_AUTOREPLY_FROM="Stephanie George <no-reply@stephaniegeorge.co>"

# Newsletter (Google Apps Script webhook)
GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL="https://script.google.com/..."
```

`CONTACT_EMAIL_TO` accepts a comma-separated list. Quotes and whitespace are stripped by the parser.

## Scripts

| Script | What it does |
|---|---|
| `pnpm dev` | Next dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |
| `pnpm typegen` | Regenerate Sanity type defs into `sanity.types.ts` |
| `pnpm studio` | Local Sanity Studio at `:3333` |
| `pnpm dlx email dev --dir components/emails --port 3005` | Preview email templates |

## Sanity

- Schemas live in `sanity/schemaTypes/`
- Gallery images use `@sanity/orderable-document-list` for drag-and-drop ordering in the studio
- First visit to the Gallery Images list after a schema change may trigger a one-time backfill of `orderRank`
- Revalidation is wired via `app/api/revalidate/route.ts` + `SANITY_REVALIDATE_SECRET` (Sanity webhook)

### Deploying the hosted studio

The client accesses the studio via Sanity's hosted viewer. To push schema or plugin changes:

```bash
pnpm dlx sanity deploy
```

This is **separate** from deploying the Next.js app. Deploy the studio when schemas change; deploy the Next app when queries or UI change.

## Email templates

All three templates share a single shell at `components/emails/_EmailShell.tsx` — header band, flourish, content area, footer. Edit the shell to change all emails at once.

| Template | Sent when |
|---|---|
| `ContactFormEmail` | Contact form submitted (to admin) |
| `ContactAutoReplyEmail` | Contact form submitted (to submitter, from no-reply) |
| `StoryFormEmail` | Podcast story submitted (to admin) |

Preview locally with `pnpm dlx email dev --dir components/emails --port 3005`.

## SEO

- Metadata is built centrally via `lib/seo.ts` → `buildPageMetadata()`. Every page passes `{ title, description, path }`.
- Root layout injects JSON-LD for `WebSite` and `Person` schemas.
- `app/sitemap.ts` + `app/robots.ts` are auto-served by Next.
- `app/opengraph-image.png` is Next's default OG image for every page.

## Deployment

- **Host:** Vercel (production branch: `main`)
- On push to `main`, Vercel builds and deploys automatically
- Env vars must be set in **Vercel → Project → Settings → Environment Variables** — `.env` is not uploaded
- After setting env vars, trigger a redeploy so the build picks them up

## Layout notes

- Site width caps at **1536px** on `<main>`, `<Navbar>`, and `<Footer>`, centered with `mx-auto`
- Design tokens live in `app/globals.css` under `@theme inline` — extend the palette there
