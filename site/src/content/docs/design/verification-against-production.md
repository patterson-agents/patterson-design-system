---
title: Verification against production
description: What was checked against the live Patterson theme, what was confirmed exactly, what was corrected, and which divergences were kept on purpose.
sidebar:
  order: 9
---

Checked on 2026-07-30 against the supplied production theme
(`uploads/patterson-theme/styles/theme-styles.min.css`, `theme-scripts.min.js` v3.2.2,
and the `tooth` / `truck` / `veterinarian` spot icons) plus live copy from
pattersoncompanies.com, pattersondental.com, pattersonveterinary.com / pattersonvet.com,
and pattersonfoundation.net.

## New evidence in this pass

Three further production artifacts were supplied and have now been folded into the
system:

1. **The official Typekit kit** (kit `rul6mjk`, published 2024-08-01). This resolves
   the typeface question — Proxima Nova is licensed and the kit is in hand. It also
   surfaces a **new correction**: the kit serves exactly **four faces — 400, 400
   italic, 700, 700 italic**. There is no 500, 600 or 800 face. The production theme
   nevertheless asks for `font-weight: 800` on h1/h2, `600` on `.btn` and `500` on
   `.eyebrow`, so **the live sites render synthesized (faux) bold** at those weights.
   Treat **700 as the real bold ceiling**.
2. **The official icon font** (`icons.woff` / `.ttf` / `.svg` — **93 glyphs**, PUA
   `U+E900`+), now bundled in the [icons token page](/tokens/icons/) and the
   [`Icon`](/components/icon/) component. This closes the icon-set gap and retires
   Lucide.
3. **Patterson Veterinary favicons** (manifest name `PVcom`) — the square navy lockup
   at 16px→192px, plus `safari-pinned-tab.svg`. Confirms the square navy mark is the
   correct small-format lockup.

Also confirmed from the full theme read: **h1 steps to 4rem/4.25rem and h2 to
2.75rem/3rem at desktop** (the values previously documented were the mobile step), h3
steps to 2.25rem/2.5rem while staying weight 400, `.eyebrow` is navy 0.875rem/500,
`.caption` is navy 0.875rem/400, and the theme's only `border-radius` values are 5px,
6px, 3px and 2px.

## Confirmed exactly

The **entire color palette** matches token-for-token — primary dark blue `#003767`,
primary light blue `#00a8e1`, primary cool grey `#58585b`, secondary dark blue
`#147ec2`, secondary light blue `#6dcff6`, secondary cool grey `#ececec`, tertiary green
`#7bc24d`, tertiary teal `#00817d`, tertiary purple `#522e91`. Also confirmed: Proxima
Nova as the sole family, navy on every heading level, no gradients, no backdrop blur,
fast plain transitions, ~1259px container, SVG-only iconography, and the voice patterns
documented in [Do's and don'ts](/design/dos-and-donts/).

## Corrected in this document

| Claim (earlier draft) | Production truth |
|---|---|
| Everything interactive is a pill | `.btn` 5px · `.btn-download`/`.btn-external` 6px · inputs/selects 2px · **no pill radius exists** |
| Primary hover shifts navy → sky | `--primary-hover: #315D83` — a lighter navy |
| Secondary is a navy outline that fills | `.btn-secondary` is a **solid #6DCFF6 fill** with navy label, hover #96DBF6 |
| Shadows are navy-tinted | Neutral black at 4–12% alpha (`--download-shadow`) |
| Headlines are 700–800 throughout | h1/h2 = 800; **h3/h4 = 400** |
| Body is 16px at 1.6 | **18px at 24px line-height (1.33)** |
| Display is tracked −0.02em; caps +0.08em | **No `letter-spacing` in the stylesheet at all** |
| Eyebrow is sky, 12px, weight 700, letter-spaced | **Navy, 14px, weight 500, no tracking** |
| Buttons are 44px tall | 15px × 30px padding on 20px line-height ≈ **50px** |
| All grays are cool | `--color-medium-grey: #AFA593` is a **warm taupe** (input borders) |
| Icons are single-color `currentColor` | Spot illustrations are **navy + sky two-tone**; UI glyphs come from a 93-glyph **icon font** |
| Lucide is the working icon set | The **official 93-glyph Patterson icon font** is bundled; Lucide is retired |
| Weights 300–900 are all available | Kit `rul6mjk` ships **only 400 and 700** (+ italics); the rest are faux |
| h1 is 2.75rem, h3 is small | Those are the MOBILE step; desktop is h1 4rem, h2 2.75rem, h3 2.25rem |
| Eyebrow is sky and uppercase | `.eyebrow` is **navy, 0.875rem, weight 500, sentence case** |
| Confident statements, not questions | Questions are used as headings |

## Intentional divergences (kept)

These are this system's own conventions, not brand truth, and are marked **[S]** in
[Do's and don'ts](/design/dos-and-donts/): the pill radius token, navy-tinted shadows,
the 3px sky focus ring, negative display tracking, the 4px spacing scale, the 44px
control floor, and 1.6 body leading. They make the system more consistent and more
accessible than production. **Decide explicitly whether to keep them** — if the goal is
pixel-matching Patterson's live surfaces, the pill radius and the navy→sky button hover
are the two that will read as off-brand, and the spacing and effects tokens would need
updating to match.

More: [Responsive behavior, iteration guide, and known gaps](/design/appendix/) covers
what falls outside the eight sections above.
