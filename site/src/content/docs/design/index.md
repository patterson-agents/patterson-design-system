---
title: Overview
description: How Patterson's navy/sky voltage, surface pacing, and key characteristics work together — the top of DESIGN.md.
sidebar:
  order: 1
---

Patterson Companies is a **corporate healthcare-distribution** brand — an international
distributor for the oral-health (dental) and animal-health (veterinary and production)
industries, founded 1877. The interface reads as **calm, clinical, and trustworthy**:
predominantly white canvas, navy structure, sky-blue voltage, and a great deal of white
space. It is deliberately *not* expressive. Where a consumer brand reaches for gradients
and texture, Patterson reaches for a hairline, a soft navy-tinted shadow, and a bigger
number.

Brand promise: **Trusted Expertise. Unrivaled Support.**
Purpose: **We strengthen the people who keep us and our animals healthy.**

The system's voltage is the **navy / sky relationship**. Two notes on how production
actually spends it — both verified against the live `theme-styles.min.css` (see
[Verification against production](/design/verification-against-production/)):

1. **Primary buttons darken-lighten within navy on hover** — `#003767` → `#315d83`.
   They do *not* flip to sky. The **secondary** button is the one carrying blue: a
   filled light-blue `#6DCFF6` with a navy label, hovering to `#96DBF6`.
2. **Statistics render as oversized numerals** — proof, not decoration. *86,000,000
   households. 98% of customers in 1-to-2-day shipping. 60 fulfillment centers. Since
   1877.*

Surface pacing alternates between three modes:

1. **White canvas** — the default floor, and by far the dominant one
2. **Subtle gray band** — quiet section separation
3. **Navy band** — hero, pre-footer CTA, footer; the emphasis surface

## Key characteristics

- White-dominant canvas with navy structure. White is the brand's ground, not a neutral
  default.
- Navy `#003767` for headings, chrome, and emphasis surfaces; sky `#00A8E1` for accent,
  focus, links-in-emphasis, and statistics.
- **Radii are small and restrained.** Production runs 5–6px on buttons and 2px on
  fields. **Patterson is not a pill brand** — the pill radius token in this system is a
  deliberate divergence, not brand truth.
- **Shadows are soft and sparing.** Production uses neutral black at very low alpha
  (`rgba(0,0,0,0.04–0.12)`); this system tints them navy. Either reads correctly; the
  tint is a system choice.
- **Focus is a visible 3px sky ring** — an accessibility improvement this system adds.
  Production ships no branded focus style.
- **No letter-spacing.** Production sets none, anywhere — including on uppercase
  labels. The negative display tracking in this system is a system choice.
- Single humanist sans across display and body — Proxima Nova, Figtree fallback, Arial
  for PowerPoint. No serif, no display face, no second family.
- Section rhythm at 96px, container capped at 1240px, text measure at 720px.
- Photography is warm, authentic, natural-light — practitioners, animals, operations.
  Never stock-abstract, never illustration.

:::note[Machine-readable source]
`DESIGN.md` carries this same information as a machine-readable YAML front matter block
— colors, typography, spacing, shadows, motion, layout, and a full component contract
map. The [tokens reference](/tokens/) on this site is generated straight from
`tokens/*.css` and `theme.json`, which are the living source of truth; treat the YAML in
`DESIGN.md` as documentation of that same data, not a second source.
:::

Read on: [Colors](/design/colors/) · [Typography](/design/typography/) ·
[Layout](/design/layout/) · [Elevation and motion](/design/elevation-and-motion/) ·
[Shapes](/design/shapes/) · [Components](/design/components/) ·
[Do's and don'ts](/design/dos-and-donts/) ·
[Verification against production](/design/verification-against-production/)
