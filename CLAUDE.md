# Skill Hunter — Marketing Website

> Static marketing site for Skill Hunter's hotel English training platform.  
> Live at **hotels.skillhunter.jp**

## What This Is

The public-facing marketing website for Skill Hunter — a story-based English learning platform for hotel staff in Japan. This site converts hotel HR departments and individual hospitality workers into free-trial signups.

**Not a template.** This is the production marketing site.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 + React 19 (static export) |
| Styling | Tailwind CSS v4 + shadcn/ui (new-york style) |
| Icons | Lucide React |
| Animations | tw-animate-css |
| Colors | OKLch color space via CSS custom properties |
| Deploy | Static export → VPS (`192.227.184.217`) at `/var/www/hotels/` |

## Commands

```bash
npm run dev          # Local dev server
npm run build        # Static export to out/
npm run setup        # First-time: clone + install on VPS
npm run deploy       # Push → pull on VPS → build → deploy to /var/www/hotels/ (BROKEN — see below)
npm run lint         # ESLint
```

**Deploy workaround:** `npm run deploy` OOM-kills on the VPS during `next build`. Use local build + rsync instead:

```bash
npm run build
rsync -az --delete out/ root@192.227.184.217:/var/www/hotels/
```

Remember to `git push origin main` separately so the VPS repo stays in sync.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Main landing page — hero, problem, courses, method, testimonials, founder story, pricing, CTA |
| `/compare` | Comparison hub — Skill Hunter vs 5 competitors (Berlitz, ECC, GABA, apps, in-house) |
| `/compare/berlitz` | Detailed head-to-head vs Berlitz |
| `/compare/ecc` | Detailed head-to-head vs ECC |
| `/compare/gaba` | Detailed head-to-head vs GABA |
| `/signup` | In-site free trial signup — embeds GHL form `X4j0pD0U3hPp3S4PZedh` |

## External Links (CTAs)

- **Free trial:** internal `/signup` page (embeds GHL form). Underlying form: `https://link.skillhunter.jp/widget/form/X4j0pD0U3hPp3S4PZedh`
- **Corporate inquiry:** `https://skillhunter.jp/inquiry678052`
- **Login:** `https://login.skillhunter.jp`
- **Main platform:** `https://skillhunter.jp`

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (fonts, metadata, theme provider)
    page.tsx            # Landing page (~716 lines, 9 sections)
    globals.css         # Tailwind v4 config + OKLch design tokens
    error.tsx           # Error boundary
    not-found.tsx       # 404 page
    compare/
      page.tsx          # Competitor comparison hub
      berlitz/page.tsx
      ecc/page.tsx
      gaba/page.tsx
  components/
    ui/                 # shadcn/ui primitives (button, card, badge, table, tabs, etc.)
    shared/
      loading-spinner.tsx
  lib/
    constants.ts        # APP_NAME, APP_DESCRIPTION, APP_AUTHOR
    utils.ts            # cn() utility
public/
  images/               # Course photos, avatars, hotel brand logos, backgrounds
```

## Design Conventions

**Colors:**
- Primary navy: `#1a1a2e` (backgrounds, text)
- Accent gold: `#c9a03c` (buttons, highlights, CTAs)
- Light sections: `#fafaf8`
- White/opacity modifiers for text on dark (`text-white/60`, `bg-white/10`)

**Layout:**
- Max-width: `max-w-5xl`
- Section padding: `px-6`, `py-16 sm:py-24`
- Grid: `sm:grid-cols-2` or `sm:grid-cols-3` with `gap-6`
- Sticky nav: `sticky top-0 z-50`

**Content:**
- Bilingual (Japanese + English) throughout
- Sections use semantic IDs for anchor navigation (`#courses`, `#about`, etc.)
- All pages are fully static — no client-side data fetching
