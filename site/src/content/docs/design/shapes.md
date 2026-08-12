---
title: Shapes
description: The border radius scale, photography and imagery guidance, and iconography — the official patterson-icons font and the two-tone spot illustrations.
sidebar:
  order: 6
---

## Border radius scale

| Token | Value | Use |
|---|---|---|
| xs | 2px | Micro elements — chart bars, progress fills |
| sm | 4px | Checkboxes, small tags, table cell wells |
| md | 6px | Inputs, selects, textareas, code blocks |
| lg | 10px | **Cards** — the system's signature container radius |
| xl | 16px | Large media containers, image frames |
| 2xl | 24px | Feature panels, oversized hero cards |
| pill | 999px | **Buttons, badges, switches, avatars, icon buttons** |

The rule: **interactive → pill; container → 10px; field → 6px.** No interactive element
is ever square-cornered. See the [base token page](/tokens/base/) for the generated
radius values.

## Photography & imagery

Warm, authentic, natural-light photography of practitioners at work, animals, and
distribution operations. Real people, real practices — never abstract stock, never 3D
render, never illustration. When text must sit on an image, apply the navy scrim at
~55% rather than darkening the photo or adding a gradient. Available brand imagery in
[`assets/brand/`](https://github.com/patterson-agents/patterson-design-system/tree/main/assets/brand):
`photo-markets.webp`, `value-prop.webp`, `wave-bg-navy.webp` (the wave watermark).

## Iconography

**Line icons, 2px stroke, rounded caps and joins, 16–24px, colored via
`currentColor`.** No filled icons, no duotone, no gradient icons. **No emoji and no
unicode glyph substitutes** — off-brand for a clinical B2B company, without exception.

**The official icon set is bundled.** The [icons token page](/tokens/icons/) registers
**`patterson-icons`** — the real Patterson icon webfont lifted from the production
storefront pattern library: **93 glyphs**, 1024 units-per-em, private-use codepoints
from `U+E900`. This **replaces Lucide**. Because it is a font, glyphs inherit `color`
and scale with `font-size` — there is no stroke to set. See the full
[icon library](/icons/) for every glyph rendered inline.

Use it as `<i class="pat-i pat-i-cart">` or via the [`Icon`](/components/icon/)
component (`<Icon name="cart" size="sm" />`). The set covers navigation (chevrons and
arrows in regular + `_light` weights), commerce (`cart`, `tag-price`,
`tag-percentage`, `promotion`, `previouslypurchased`), veterinary and dental specifics
(`pedigree`, `prescription`, `formulary-list`, `hazmat`, `shiponice`, `shipping`),
documents (`pdf`, `excel`, `document`), account and UI (`user`/`user_alt`/`user_bold`,
`gear`, `filter`, `toggle-gridview`, `toggle-listview`), and the full social set.
Production renders inline glyphs at **0.875rem (14px)**, filled navy, white, or cool
gray.

Pair every glyph with a text label or an `aria-label` — the codepoints are private-use
and read as nothing to a screen reader.

**Spot illustrations are two-tone.** The production PNGs (`truck.png`,
`veterinarian.png`, `tooth.png`) are **navy-and-sky two-tone line illustrations** — a
navy primary contour with sky used for the interior highlight (the wave on the van, the
animal outline, the tooth's smile). They are not single-color `currentColor` glyphs.
Strokes are heavy (≈3–4px at ~100px), with rounded caps and joins, drawn as generous
open shapes.

Two icon tiers therefore exist:

- **Spot illustrations** — 64–120px, navy + sky two-tone raster or SVG, used to head a
  card or capability block. Not covered by the icon font.
- **UI glyphs** — 14–24px, single-color, from the official `patterson-icons` font. This
  is the tier the font covers, and it is authoritative.
