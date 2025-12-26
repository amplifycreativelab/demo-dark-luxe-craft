# Development Tasks - Dark-Luxe-Craft (INK//RITUAL Tattoo Studio)

Source docs:

- `Dark-Luxe-Craft/Dark-Luxe-Craft.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [ ] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [ ] Confirm studio name/branding placeholders and contact details (Perth, WA).
- [ ] Confirm primary conversions and page routes:
  - [ ] Book a consultation
  - [ ] Artist enquiry (artist-specific)
- [ ] Choose heading font: Cormorant Garamond OR Fraunces.
- [ ] Confirm if Zod runtime validation is included for data (optional in brief).
- [ ] Confirm whether gallery filtering uses a small island (and pick Solid/Preact if yes).
- [ ] Confirm portfolio display style: masonry vs strict grid (allowed by brief).

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [ ] Create Astro 4 project (static output / SSG).
- [ ] Configure `astro.config.mjs` with `site` + `base` placeholders for GitHub Pages.
- [ ] Enable View Transitions globally (for calm crossfade + slight vertical drift).
- [ ] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [ ] Add/verify scripts: `dev`, `build`, `preview`.
- [ ] Set up `astro:assets` (or image pipeline) and add placeholder images:
  - [ ] hero/ambient texture
  - [ ] artist portraits
  - [ ] portfolio images
  - [ ] OG image

## Phase 2 - Design System (Ink + Metal)

- [ ] Implement design tokens (CSS variables or Tailwind theme):
  - [ ] Charcoal `#0B0C0F` (global background)
  - [ ] Surface `#12131A` (cards/panels/sections)
  - [ ] Warm Grey `#B7B0A6` (secondary text/metadata)
  - [ ] Ink Text `#F2F0ED` (primary text)
  - [ ] Metallic Accent `#C8A46B` (CTAs/dividers/highlights)
  - [ ] Divider `rgba(255,255,255,0.10)` (hairline separators)
- [ ] Enforce color rules:
  - [ ] Metallic accent never dominates (keep under ~5% of the screen)
  - [ ] No pure black or pure white
  - [ ] No gradients except ultra-soft spotlight fades at section transitions
- [ ] Typography system:
  - [ ] Headings font (Cormorant Garamond/Fraunces) used sparingly, tight tracking
  - [ ] Body font Inter with line-height `1.6-1.75`
  - [ ] Hierarchy: fewer headings, more whitespace, long vertical rhythm
  - [ ] Avoid stacking bold + italic + accent color
- [ ] Surfaces & texture:
  - [ ] Subtle grain overlay (opacity `0.02-0.04`)
  - [ ] No visible borders; rely on spacing and contrast
- [ ] Implement focus-visible styles for links/buttons/inputs.
- [ ] Implement `prefers-reduced-motion` baseline (disable non-essential motion).

## Phase 3 - Core Layout & Shared Components

- [ ] Create `src/layouts/MainLayout.astro` (or equivalent) with:
  - [ ] Skip link
  - [ ] Calm header/nav (minimal, restrained)
  - [ ] Footer with local trust info + hours/contact placeholders
  - [ ] SEO meta slots/placeholders (title/description/canonical/OG/Twitter)
  - [ ] Global grain overlay + base styles
- [ ] Build core components:
  - [ ] `InkHeading.astro` (mask/clip reveal support + reduced motion fallback)
  - [ ] `ArtistCard.astro` (collectible/archival feel; hover reveals detail, not buttons)
  - [ ] `GalleryMasonry.astro` (or strict grid) with keyboard-navigable items
  - [ ] `BookingForm.astro` (single-column, calm validation, reassurance success state)
- [ ] Optional island:
  - [ ] `GalleryFilterIsland.tsx` (minimal JS; no SPA behavior)

## Phase 4 - Data Layer (Typed + SEO-safe Slugs)

- [ ] Create typed data sources:
  - [ ] `src/data/artists.ts`
  - [ ] `src/data/styles.ts`
  - [ ] `src/data/portfolio.ts`
- [ ] Define types for artists/portfolio items (ids, names, specialties, yearsExperience, images, style tags).
- [ ] Ensure slugs are human-readable and SEO-safe (use in `/artists/[slug]/` routes).
- [ ] If using Zod: validate data on import/build and fail fast on schema errors.

## Phase 5 - Pages (IA + Intent)

### Home (`src/pages/index.astro`)

- [ ] Atmosphere-first hero:
  - [ ] Studio ethos statement (quiet, professional tone)
  - [ ] One primary CTA: Book consultation
  - [ ] Optional ambient texture/image (subtle, not loud)
- [ ] Trust modules: featured artists + selected portfolio preview.

### Artists (`src/pages/artists/index.astro`)

- [ ] List artists from `src/data/artists.ts` using `ArtistCard.astro`.
- [ ] Keep copy minimal; present specialty + experience clearly.

### Artist Detail (`src/pages/artists/[slug].astro`)

- [ ] Artist portfolio + artist-specific enquiry entry point.
- [ ] Render portfolio items filtered by artist from `src/data/portfolio.ts`.
- [ ] Add enquiry form UI (non-functional OK) with accessible labels.

### Gallery (`src/pages/gallery/index.astro`)

- [ ] Core visual proof: masonry/strict grid with large images and minimal captions.
- [ ] Ensure keyboard navigation works; optional restrained focus mode (lightbox) if used.
- [ ] If `GalleryFilterIsland.tsx` exists, wire filtering to style/tags without SPA behavior.

### Styles (`src/pages/styles/index.astro`)

- [ ] Educational, confidence-building content driven by `src/data/styles.ts`.
- [ ] Clear, calm descriptions (no hype language).

### Aftercare (`src/pages/aftercare/index.astro`)

- [ ] Clean checklist layout with "printable" feel.
- [ ] Reinforce professionalism and trust.

### Contact (`src/pages/contact/index.astro`)

- [ ] Booking funnel: calm single-column form + contact details + hours.
- [ ] Clear success state copy (reassurance).

## Phase 6 - Motion (Ink Reveal) + Reduced Motion

- [ ] Headings reveal via mask/clip (vertical or organic edge).
- [ ] Page transitions: crossfade + 6-12px vertical drift (View Transitions).
- [ ] Gallery hover: subtle vignette/torchlight following cursor:
  - [ ] Desktop only
  - [ ] Disabled on touch devices
  - [ ] Disabled under reduced motion
- [ ] Avoid forbidden motion: parallax, infinite loops, spring/elastic, scroll-jacking.
- [ ] Ensure `prefers-reduced-motion` disables non-essential motion everywhere.

## Phase 7 - Forms & Conversion UX

- [ ] Forms are calm and single-column (consultation + enquiry).
- [ ] No aggressive validation; show helpful, minimal error text when needed.
- [ ] Subtle focus states; clear affordances for required fields.
- [ ] Success state includes reassurance and next steps (mock flow acceptable).

## Phase 8 - SEO & Local Trust (Perth)

- [ ] Set per-page titles + meta descriptions (adult, minimal tone).
- [ ] Canonical URLs respect `site` + `base`.
- [ ] Add OpenGraph + Twitter meta with placeholder OG image.
- [ ] Inject JSON-LD:
  - [ ] `LocalBusiness`
  - [ ] `Service` (tattoo services)
- [ ] Local intent copy includes: Perth, Northbridge, Leederville, Mount Lawley (natural mentions only).

## Phase 9 - Accessibility, Performance & Deployment

- [ ] Accessibility QA: one H1 per page, logical headings, keyboard nav, focus-visible, contrast compliance.
- [ ] Gallery accessibility: keyboard navigation, focus management (especially if using a focus mode/lightbox).
- [ ] Performance QA:
  - [ ] image optimization + lazy loading
  - [ ] keep JS minimal; no JS-heavy effects
- [ ] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [ ] Add `README.md` with install/dev/build/preview + GitHub Pages base path notes + motion rules.

## Optional / Bonus

- [ ] Add a print stylesheet for Aftercare (minimal ink, clean spacing).
- [ ] Add basic gallery "focus mode" with strict restraint (no flashy transitions).
