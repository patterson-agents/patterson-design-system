---
title: Responsive behavior, iteration guide, and known gaps
description: The remaining DESIGN.md sections beyond the eight core ones — breakpoints, touch targets, the iteration guide, working with Google Stitch, and known gaps.
sidebar:
  order: 10
---

`DESIGN.md` has four sections beyond the eight core ones covered elsewhere in this
guide. They're collected here rather than dropped.

## Responsive behavior

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav, utility bar collapses; display 72→44px; hero stacks single-column (copy first, media below); card grids 1-up; stat rows 2-up; footer 4 cols → accordion; section padding 96→48px |
| Tablet | 768–1024px | Nav stays horizontal and tightens; card grids 2-up; stat rows 2-up; storefront product grid 3-up; section padding 96→64px |
| Desktop | 1024–1440px | Full nav with flyouts; card grids 3-up; stat rows 4-up; storefront grid 4–5-up |
| Wide | > 1440px | Same as desktop; content caps at 1240px, gutter opens to 64px |

### Touch targets

- Primary buttons and all form controls at 44px — the WCAG floor, and the default
  rather than a large variant.
- Icon buttons at exactly 44 × 44px. Compact controls use the 34px small control height
  **only** in dense table toolbars where a larger padded wrapper carries the real
  target.
- Entire cards are tappable when interactive.

### Collapsing strategy

- Nav collapses to a hamburger below 768px, opening as a full-height white sheet;
  category flyouts become nested accordions.
- Hero splits collapse to single-column — headline, lead, buttons, then media.
- Card grids **reduce columns**; they never scale cards below their padding.
- Stat rows go 4-up → 2-up, never 1-up — the row reads as a set.
- Tables become stacked label/value cards below 768px rather than scrolling
  horizontally, except in storefront catalogs where horizontal scroll inside the card
  is correct.

### Image behavior

- Hero photography crops taller on mobile (16:9 → 4:3) rather than shrinking; the navy
  scrim strengthens slightly to hold headline contrast.
- The wave watermark scales with the band and is dropped below 768px rather than
  cropped.
- Fluid type (`clamp()`) handles display / h1–h3 / stat automatically — do not add
  per-breakpoint font-size overrides for those tokens.

## Iteration guide

1. Focus on ONE component at a time; reference its contract in the
   [component reference](/components/).
2. State variants live as separate entries (`-active`, `-disabled`, `-focused`,
   `-checked`, `-error`).
3. Use token references everywhere — never inline a hex value.
4. Document Default and Active/Pressed only. Hover is not a documented state (touch
   surfaces have none).
5. Navy + sky + white is the trinity. Adding a fourth surface tone breaks the system.
6. When emphasis is needed: **bigger and bolder in navy, or sky-colored** — never both
   at once, and never a new color.
7. Every new interactive element inherits: pill radius, 44px minimum, the sky focus
   ring, a 120–320ms transition.
8. Machine-readable source of truth is
   [`theme.json`](https://github.com/patterson-agents/patterson-design-system/blob/main/theme.json)
   (see the generated [tokens reference](/tokens/) on this site); the CSS truth is
   `tokens/*.css`. **Edit both together** — the framework adapters in
   [`integrations/`](https://github.com/patterson-agents/patterson-design-system/tree/main/integrations)
   are generated from `theme.json`.

## Working with Google Stitch

[Google Stitch](https://stitch.withgoogle.com) is a Google Labs tool that generates UI
from natural-language prompts and images. It generates HTML and CSS for the visual
layout of a design — not a fully interactive prototype, but a solid starting point for
development. It is a useful front-end to this design system: generate a screen in
Stitch, then port it onto Patterson tokens.

:::note[Documentation note]
`https://stitch.withgoogle.com/docs/llms.txt` currently serves **only page
metadata** — front-matter (title, description, Open Graph and Twitter tags) with no
body content. It is not a usable spec for agents. The substantive guidance lives in
Google's community Stitch Prompt Guide. Recorded here so nobody re-fetches it expecting
instructions.
:::

### What the Stitch docs actually say

Choose to start with a broad concept or specific details; for complex apps, start
high-level and then drill down screen by screen. The prompt guide calls this the
"zoom-out-zoom-in" framework — start with broad context about your product and target
user, then zoom in to screen-level details.

Google recommends making specific, incremental changes — one major change per prompt;
instead of requesting five modifications together, write five separate prompts.
Bundling many variables into one prompt is the documented failure mode.

Other documented behavior worth knowing:

- **Medium and model are choices.** You pick App or Web design, and an AI model.
  Thinking mode (Gemini 2.5 Pro) handles visual input at higher fidelity but consumes
  experimental model credits.
- **Image input works.** Stitch can take any image — a screenshot or a hand-drawn
  sketch — and generate a UI from it via the image upload icon next to the text input.
  Rough sketches are enough: boxes, arrows and labels; Stitch reads spatial
  relationships, not artistic quality.
- **Variants.** The Create Variant button generates alternative versions without
  losing the current design. Prompted Variants let you guide iterations with a custom
  prompt — specify UI changes or describe higher-level goals; leaving the prompt blank
  lets Stitch reimagine the screen on its own.
- **Be literal about color and screens.** Specify color values — "blue" is vague,
  "#3B82F6" gets exactly what you want. Use screen names rather than "the page." When
  changing colors, add "ensure all icons and images match this new color scheme" so
  the theme shifts globally.
- **Name dynamic content.** If a design depends on prices, status changes or avatars,
  say so explicitly — even dummy data helps.
- **Known limits.** Stitch generates static designs — no working hover states, no form
  validation, no animated transitions. It is a design tool, not a prototyping tool.
  Output defaults toward desktop; responsive behavior needs explicit prompting and
  results vary. Sessions can reset unexpectedly — save screenshots of successful
  generations.

### Patterson prompt preamble for Stitch

Paste this ahead of any screen prompt so Stitch generates on-brand output, then port
the result onto real tokens.

```text
Brand: Patterson Companies — corporate B2B healthcare distribution (dental and
veterinary). Calm, clinical, trustworthy. Not flashy.

Colors — use these exact hex values and no others:
  navy #003767 (headings, nav, primary buttons, hero/footer bands)
  sky #00A8E1 (accent, focus, statistics, active tab underline, card top stripe)
  blue #147EC2 (inline links)
  body text #58585B   near-black headings #1d1d20
  page background #FFFFFF   subtle band #f6f7f8   hairline borders #e2e2e4

Type: one sans family only — Proxima Nova, fallback Figtree, fallback Arial.
Headlines bold 700-800, tightly tracked, navy. Body 400 at 1.6 line-height in
#58585B. Uppercase letter-spaced sky eyebrow labels above section headings.

Shape: all buttons and badges are fully rounded pills. Cards 10px radius with a
1px #e2e2e4 border and a soft navy-tinted shadow rgba(0,55,103,0.08). Inputs
6px radius, 44px tall.

Rules: primary buttons are navy and turn sky #00A8E1 on interaction. All
controls at least 44px tall. Backgrounds are white or navy — never gradients,
textures, or glass/blur effects. Line icons at 2px stroke with rounded caps —
absolutely no emoji. Statistics render as oversized sky-blue numbers with a
small gray caption beneath. Generous whitespace, 96px between sections,
content capped at 1240px wide. Ensure all icons and images match this scheme.
```

### Porting Stitch output back

1. Replace every literal hex with the matching Patterson or semantic token from the
   [tokens reference](/tokens/).
2. Swap generated buttons, inputs, cards, tabs, badges and alerts for the real
   components on `window.PattersonCompaniesDesignSystem_3534f9`.
3. Re-apply the pieces Stitch cannot generate: focus rings, the navy→sky button
   transition, the 3px card lift, and 120–320ms timings.
4. Strip any emoji, filled icons, gradients, or blur Stitch introduced.
5. Replace hard-coded spacing with the 4px spacing scale and cap the container at the
   layout max-width token.

## Known gaps

- ~~Proxima Nova licensing~~ **RESOLVED** — the official kit is bundled. The system
  self-hosts 400 / 700 / 400-italic from the licensed files and can load from Adobe
  instead by swapping one `@import` in the fonts token stylesheet. **New gap in its
  place:** the kit has no 500, 600 or 800 face, so the production theme's
  `font-weight: 800` headings are faux bold. To get real heavier weights, add Proxima
  Nova variations to the Typekit kit.
- **Patterson Dental / Patterson Veterinary horizontal lockups** (`logo-dental.svg`,
  `logo-vet.svg`) are still not bundled. The Patterson **Veterinary** favicon set now
  ships, so small-format Veterinary branding is covered; the wide lockups are not.
- ~~Icon set unconfirmed~~ **RESOLVED** — the official 93-glyph `patterson-icons` font
  is bundled. **Remaining gap:** the font covers the UI-glyph tier only; the navy/sky
  two-tone **spot illustrations** are still loose PNGs with no documented library, and
  the font has no dental-specific tooth glyph (only `tooth.png`).
- **The Brand Guide 2025 PDF was not machine-readable** (>30 MB). Logo clear-space
  rules, co-branding rules, and detailed imagery direction are inferred from the
  production websites, the supplied color-palette page, and the official
  `PDCO_template.potx`.
- **Dark mode is not defined** for the design system proper. The shadcn theme
  integration carries a navy-ground `.dark` contract, and the `patterson-docs` template
  has a dark theme, but there is no canonical dark token set.
- **Data-visualization specifics** — chart type conventions, axis and gridline
  styling, series ordering within the tertiary palette — are not specified beyond
  "tertiary colors, infographics only."
- **Motion detail** beyond durations and easings (page transitions, skeleton loading,
  flyout choreography) is unspecified.
- **Storefront density rules** are described qualitatively; the storefront template is
  the reference implementation rather than a documented sub-scale.
- **Token reconciliation is partial by design.** Production-accurate values are now
  first-class — the production radius and type-scale tokens, the interaction-state and
  warm-gray colors, the download shadow, the production color aliases, and a
  production opt-in class. The system's own conventions (the pill radius token,
  navy-tinted shadows, the fluid type scale, tracking tokens, 1.6 leading, the 44px
  floor) remain alongside them and are labelled. Headings and the eyebrow default were
  switched to production truth (navy, no tracking, 14px/500 sentence-case eyebrow); an
  accent eyebrow variant preserves the old uppercase-sky treatment.
- **Only the corporate WordPress theme was inspected.** The storefront (pattern
  library v5.7.2) ships a separate stylesheet that was not supplied; storefront radii,
  densities and control heights may differ again from both this system and the
  corporate theme.
- **`theme-scripts.min.js` v3.2.2 was not audited** for interaction behavior (flyout
  choreography, carousel timing, accordion easing).
- **The icon font's own metrics are undocumented upstream.** Optical sizing, intended
  pairings, and which of the near-duplicate glyphs are canonical (`user` vs `user_alt`
  vs `user_bold`; `close` / `close_light` / `close_medium`; `chevron-*` vs
  `chevron-*_light`) are inferred from the names, not specified.

---

*Verified against production 2026-07-30 — theme CSS, Typekit kit `rul6mjk`, 93-glyph
icon font, Veterinary favicons.* · *Namespace for components:*
`window.PattersonCompaniesDesignSystem_3534f9` · *Token source:*
[`tokens/`](https://github.com/patterson-agents/patterson-design-system/tree/main/tokens)
· *Machine-readable theme:*
[`theme.json`](https://github.com/patterson-agents/patterson-design-system/blob/main/theme.json)
