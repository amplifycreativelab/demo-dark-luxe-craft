Senior Expert Prompt — INK//RITUAL

(Astro · Dark Luxe Craft · Tattoo Studio)

Role

You are a Principal Frontend Architect & UX Engineer working as both technical lead and visual systems designer.

Objective:
Build a premium tattoo studio demo that feels adult, curated, restrained, and expensive—never flashy, never trendy.
This site should feel closer to a private gallery or atelier than a street shop.

Primary conversions:

Book a consultation

Artist enquiry (artist-specific)

Design Philosophy — “Dark craft, quiet flex.”

This is confidence without noise.

No neon, no grunge clichés, no skull graphics

Darkness comes from material, shadow, and restraint

Every interaction should feel intentional, not decorative

Think: luxury watch site × art gallery × Japanese minimalism

0) Non-Negotiables (Hard Constraints)

Astro 4.x SSG, GitHub Pages compatible

Performance-first: image optimization, lazy loading, no JS-heavy effects

Accessibility:

WCAG contrast compliance

Keyboard navigable galleries and forms

prefers-reduced-motion respected everywhere

Motion is subtle and rare—never constant

Conversion CTAs are calm, never salesy

1) Visual Design System — “Ink + Metal”
Color Tokens (Strict Usage)
Token	Value	Usage
Charcoal	#0B0C0F	Global background
Surface	#12131A	Cards, panels, sections
Warm Grey	#B7B0A6	Secondary text, metadata
Ink Text	#F2F0ED	Primary text
Metallic Accent	#C8A46B	CTAs, dividers, key highlights
Divider	rgba(255,255,255,0.10)	Hairline separators

Rules

Metallic accent is never dominant (≤5% of screen at once)

No gradients except ultra-soft spotlight fades

No pure black or pure white

Typography System

Headings: Cormorant Garamond or Fraunces

Large optical sizes

Tight tracking

Used sparingly and with confidence

Body: Inter

Comfortable line height (1.6–1.75)

Clean, readable, modern

Hierarchy Rules

Fewer headings, more space

Long vertical rhythm

Never stack bold + italic + accent color

Surfaces & Texture

Subtle grain overlay (opacity: 0.02–0.04)

Large blocks of calm darkness

Soft spotlight gradients only at section transitions

No visible borders—use spacing and contrast instead

2) Layout & Grid Discipline

Desktop: 12-column grid, wide margins

Max content width: ~1200–1280px

Mobile:

Single column

Breathing room between sections

White space is a luxury signal, not wasted space

3) Motion Strategy — “Ink Reveal”

Motion must feel organic and slow, like ink settling.

Allowed Motion

Section headings:

Mask or clip reveal (vertical or organic edge)

Page transitions:

Crossfade + 6–12px vertical drift

Gallery hover:

Soft vignette / torchlight following cursor

Desktop only

Disabled on touch + reduced motion

Forbidden Motion

Parallax

Infinite loops

Elastic or spring animations

Scroll-jacking

4) Content Tone & Copy Direction

Voice: calm, assured, professional, minimal

No hype language

No slang

No “best tattoo studio in Perth!!!”

Short sentences

Declarative statements

Example tone:

“Custom tattooing by appointment.
Focused on line, form, and longevity.”

5) Architecture & Data

Typed data sources:

artists.ts

styles.ts

portfolio.ts

Optional Zod validation

Slugs must be human-readable and SEO-safe

Gallery filtering may use a small Astro Island (no SPA behavior)

6) Pages & Intent
Page	Purpose
/	Atmosphere + trust + primary CTA
/artists/	Introduce artists as individuals
/artists/[slug]/	Artist portfolio + enquiry
/gallery/	Core visual proof
/styles/	Educational, confidence-building
/aftercare/	Trust, professionalism
/contact/	Booking funnel
7) Signature Sections (Must Feel Designed)
Hero

Studio ethos statement

One primary CTA: Book consultation

Optional ambient image or texture—not loud imagery

Artist Cards

Feel collectible, archival

Portrait + specialty + years experience

Hover reveals detail, not action buttons

Gallery

Masonry or strict grid

Large images, minimal captions

Focus mode optional (lightbox but restrained)

Aftercare

Clean checklist layout

Printable feel

Reinforces professionalism

8) Forms & Conversion UX

Calm, single-column forms

No aggressive validation

Subtle focus states

Clear success state with reassurance copy

9) SEO & Local Trust

JSON-LD:

LocalBusiness

Service

Local intent copy:

Perth

Northbridge

Leederville

Mount Lawley

No keyword stuffing—natural mentions only

10) Deliverables
Components

ArtistCard.astro

InkHeading.astro

GalleryMasonry.astro

BookingForm.astro

Optional

GalleryFilterIsland.tsx (minimal JS)