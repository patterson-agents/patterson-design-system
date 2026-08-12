---
title: Components
description: Navigation, buttons, cards and containers, bands, data and emphasis, inputs and forms, and feedback — the narrative component contract from DESIGN.md.
sidebar:
  order: 7
---

Available as React primitives on `window.PattersonCompaniesDesignSystem_3534f9`. This
page is the narrative contract from `DESIGN.md`; for the per-component API see the
[component reference](/components/).

## Navigation

**Top nav** — White sticky header, 80px tall, `sm` shadow. Patterson lockup at left,
nav-link items in navy center, right-side cluster ending in a primary button. Optional
utility bar (navy, 40px, body-sm) above it on storefront surfaces carrying account,
locale, and support links.

**Tab / tab-active** — Inactive: transparent, body-color text. Active: navy text with a
**3px sky bottom border**. Padding 12px × 20px. The sky underline is the active signal
— never a filled pill tab. See the [Tabs](/components/tabs/) contract.

## Buttons

**Button primary** — The signature control. Solid navy fill, white label, button
typography, **pill radius**, 0 × 28px padding, 44px tall. Active state **shifts the
fill to sky** and nudges 1px down. The navy→sky shift is the most recognizable
Patterson interaction; do not replace it with a darken.

**Button secondary** — Transparent with a **2px navy outline** and navy label, same
pill/padding/height. Active fills solid navy with a white label.

**Button ghost** — Transparent, navy label, no border. Active washes to navy-10.

**Button on navy** — The inversion used inside navy bands: white fill, navy label,
pill. The only correct primary on a navy surface.

**Icon button** — 44 × 44px pill hit area, navy `currentColor` line icon, navy-10 wash
on interaction. 44px is a floor, not a suggestion. See the
[IconButton](/components/iconbutton/) contract.

**Text link** — Inline links in blue, moving to navy on interaction. On navy surfaces
links run sky → white.

Buttons are **confident, never tiny** — 44px is the default height and the minimum hit
target. See the [Button](/components/button/) contract.

## Cards & containers

**Card** — White surface, 1px hairline, `sm` shadow, 10px radius, 32px padding. The
system's workhorse container. See the [Card](/components/card/) contract.

**Card interactive-active** — Interactive cards **lift 3px to the `lg` shadow**. The
whole card is the target.

**Card accent-stripe** — Same card with a **4px sky top stripe**. Used to mark a
featured or categorized card without changing its fill.

**Card on-navy** — Inside navy bands, cards go navy-80 with white text and no shadow
(shadow is invisible on navy — use the tint step instead).

## Bands

**Hero band navy** — Full-bleed navy band, display-size white headline, lead sub-line,
button row using button-on-navy. Often carries the `wave-bg-navy.webp` watermark at low
contrast.

**Hero band photo** — Full-bleed photography with the navy scrim at 55%, white display
headline over it.

**Content band / content band subtle** — White and surface-subtle content bands at 96px
vertical padding. Alternate them for quiet rhythm.

**CTA band navy** — Pre-footer navy CTA band, h2-size white head, 64px padding,
button-on-navy CTA.

**Footer** — Navy footer closing every page. Navy-20 body text, white column heads,
4-column link list at desktop, 64px padding. The footer never inverts to light.

## Data & emphasis

**Stat** — The signature device. An oversized numeral in stat typography (40 → 64px,
weight 800) colored sky, with a stat-label caption in body color below. Used in 4-up
rows. Numbers are proof — render them big. See the [Stat](/components/stat/) contract.

**Eyebrow** — Uppercase eyebrow overline in sky sitting above a section head. The
standard way to label a band.

**Badge / badge-accent** — Pill labels. Default: navy-10 fill with navy text. Accent:
solid sky with white text for "New" and featured markers. 4px × 12px padding. See the
[Badge](/components/badge/) contract.

## Inputs & forms

**Input** — White fill, 1px hairline-strong border, 6px radius, 44px tall, 0 × 14px
padding, body-md in ink. See the [Input](/components/input/) contract.

**Input focused** — Border shifts to sky plus the 3px sky focus ring.

**Input error** — Border danger-color plus the red ring, with helper text in
danger-color below.

**Select** — Matches input geometry with a 2px-stroke chevron in body color. See the
[Select](/components/select/) contract.

**Checkbox / checkbox-checked** — 20px, 4px radius. Checked fills navy with a white 2px
check. See the [Checkbox](/components/checkbox/) contract.

**Radio / radio-checked** — 20px pill. Checked shows a navy border with a navy center
dot. See the [Radio](/components/radio/) contract.

**Switch / switch-checked** — 44 × 24px pill track. Off: gray-400. On: sky — the one
control where sky is the *resting* on-state fill. See the
[Switch](/components/switch/) contract.

Labels sit above fields at body-sm weight 600 in navy. Helper text below at caption
size in muted gray.

## Feedback

**Alert info / success / warning / danger** — Tinted background from the matching `-bg`
token, a left or full 1px border in the semantic hue, a 2px-stroke line icon, body-sm
body in ink, 6px radius, 16px padding. See the [Alert](/components/alert/) contract.
