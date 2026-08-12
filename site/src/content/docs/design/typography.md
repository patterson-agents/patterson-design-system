---
title: Typography
description: Font family, the hierarchy scale, principles verified against production, and the note on font substitutes.
sidebar:
  order: 3
---

## Font family

One family does everything. **Proxima Nova** is the real brand face (Adobe Fonts /
Typekit); **Figtree** is the loaded open fallback; **Arial** is the PowerPoint-safe
substitute named in the official template. The stack is `proxima-nova, Figtree,
system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif`. The code typeface uses IBM
Plex Mono, and only inside documentation and code surfaces.

There is no display/body split. Hierarchy comes from **size and weight**, not from a
second typeface — which is exactly why the weight discipline below matters.

## Hierarchy

| Token | Size (min → max) | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| Display | 44 → 72px | 800 | 1.05 | -0.02em | Hero headline, deck covers |
| Stat | 40 → 64px | 800 | 1.05 | -0.02em | Big sky-blue numbers — the signature device |
| H1 | 36 → 52px | 700 | 1.15 | -0.02em | Page title |
| H2 | 28 → 40px | 700 | 1.15 | -0.01em | Section head |
| H3 | 22 → 28px | 700 | 1.2 | -0.01em | Sub-section, card group head |
| H4 | 20px | 600 | 1.2 | 0 | Card title |
| H5 | 17px | 600 | 1.2 | 0 | Small card title, list label |
| Lead | 20px | 400 | 1.6 | 0 | Hero sub-headline, section intro |
| Body md | 16px | 400 | 1.6 | 0 | Default running text |
| Body sm | 14px | 400 | 1.6 | 0 | Footer, metadata, table cells |
| Caption | 12px | 500 | 1.4 | 0 | Fine print, badge labels |
| Eyebrow | 12px | 700 | 1.4 | 0.08em | Uppercase overline above section heads |
| Nav link | 15px | 600 | 1.4 | 0 | Nav items |
| Button | 16px | 600 | 1.0 | 0 | Button labels |
| Code | 14px | 400 | 1.6 | 0 | Code — IBM Plex Mono |

Display, h1–h3, and stat are fluid (CSS `clamp()`); everything below h3 is fixed. See
the [typography token page](/tokens/typography/) for the generated custom-property
values.

## Principles

**Production reality, verified:** only **h1 (2.75rem / 44px) and h2 (2.25rem / 36px)
are weight 800**. **h3 and h4 are both 1.5rem / 24px at weight 400** — regular, not
bold. Body is **1.125rem / 18px at 1.5rem (24px) line-height** — a 1.33 ratio, tighter
than this system's 1.6. Buttons are 0.9375rem / 15px at weight 600 with 15px × 30px
padding (≈50px tall). Production sets **no `letter-spacing` anywhere in the
stylesheet** — not on display sizes, not on uppercase labels.

So hierarchy in production comes from a **hard size drop with a weight drop** (800 at
h1/h2, 400 from h3 down), not from a continuous bold ramp. This system's 700 weights at
h3 and its negative tracking are conventions layered on top; the 800/400 split is the
brand truth.

**Sky-blue is the emphasis mechanism inside type**, but sparingly: statistics, accent
strokes, active underlines. Production **eyebrows are navy at 0.875rem / 14px weight
500**, not sky and not letter-spaced. Never bold-plus-color at the same time — pick
one.

**Casing:** sentence case for body and most headings. Title Case only for the brand
promise and product brand names ("Patterson Dental", "Patterson Veterinary", "Advantage
Rewards"). Eyebrows and overlines are uppercase at the eyebrow tracking. All-caps never
runs longer than a short label.

## Note on font substitutes

Proxima Nova requires an Adobe Fonts embed. Until one is added, **Figtree** renders — a
close humanist geometric with similar proportions and a compatible bold.
**Montserrat** is a weaker third option (wider, rounder). **Arial** is correct and
expected in PowerPoint. Never substitute Inter (too neutral/UI), Roboto, or any serif.
