---
title: Colors
description: Brand and accent colors, interaction-state tokens, tints, surface, text, semantic colors, and the PowerPoint theme mapping.
sidebar:
  order: 2
---

## Brand & accent

- **Navy** (`#003767`, PMS 540): Headings, nav chrome, primary button fill, hero and
  footer surfaces. Reads as clear thought and trust. The brand's spine.
- **Sky** (`#00A8E1`, PMS 2995): The accent. Focus ring, statistics, card accent
  stripes, active tab underline, and the highlight stroke in two-tone icons. Reads as
  intelligence and communication.
- **Blue** (`#147EC2`, PMS 7683): Secondary depth; the default inline link color.
- **Blue Light** (`#6DCFF6`, PMS 297): **The secondary-button fill in production** —
  solid `#6DCFF6` with a navy label, hovering to `#96DBF6`. Also depth on navy surfaces
  and chart fills.

## Interaction-state tokens (from production)

`--primary-hover` `#315D83` · `--primary-disabled` `#93A9BC` · `--secondary-hover`
`#96DBF6` · `--secondary-disabled` `#DAEDF5` · `--color-medium-grey` `#AFA593` (a
**warm taupe**, used for input borders — the one non-cool gray in the brand) ·
`--color-slider-nav` `#D9D9D9`.

## Tertiary — infographics only

`#7BC24D` (green, PMS 369) · `#00817D` (teal, PMS 7718) · `#522E91` (purple, PMS 7679).
These exist **for charts, infographics, and presentation data only**. They never appear
as page chrome, button fills, or section backgrounds.

## Tints

Navy and sky each carry a 5-step tint ramp for washes, disabled states, and on-navy
layering: navy-80, navy-60, navy-40, navy-20, navy-10, and sky-80 through sky-10.
Navy-10 (`#e5ebf0`) is the standard ghost-control hover wash. See the
[colors token page](/tokens/colors/) for the full ramp.

## Surface

- **Canvas** (`#FFFFFF`): The page floor. Pure white — a clinical brand earns pure
  white.
- **Surface Subtle** (`#f6f7f8`): Barely-there band separation.
- **Surface Muted** (`#ECECEC`, Cool Gray 1 @ 50%): The brand's official light-gray
  accent for web and email bands.
- **Surface Brand** (`#003767`): Navy emphasis bands — hero, CTA, footer.
- **Hairline** (`#e2e2e4`): The 1px structural border on white.
- **Hairline Strong** (`#c9c9cc`): Input borders and stronger dividers.
- **Overlay scrim** — `rgba(0,55,103,0.55)`: A **navy** scrim, ~55%, over photography
  when text must sit on an image. Never a black scrim.

## Text

- **Ink** (`#1d1d20`): Near-black for dense headings on light surfaces.
- **Navy**: Display headlines, section heads, emphasized headings. The preferred
  heading color.
- **Body** (`#58585B`, Cool Gray 11): The default running-text color at 1.6 leading.
  Confirmed from production capture.
- **Muted** (`#7c7c80`): Captions, metadata, fine print.
- **On Brand** (`#FFFFFF`): Text on navy and sky surfaces.

## Semantic

- **Success** (`#00817D`, teal) on `#e5f2f1`
- **Info** (`#147EC2`, blue) on `#e7f1f9`
- **Warning** (`#d98a00`, amber) on `#fbf1df`
- **Danger** (`#c0392b`, red) on `#f8eae8`

Semantics are drawn from — or harmonized to — the tertiary palette rather than imported
from a generic status set, so alerts never look foreign on a Patterson page.

## PowerPoint theme mapping

The official `PDCO_template.potx` slide master confirms the set: accent1 `#003767` ·
accent2 `#00A8E1` · accent3 `#147EC2` · accent4 `#7BC24D` · accent5 `#00817D` · accent6
`#522E91` · dk2 `#58585B` · lt2 `#ECECEC`.

### Slide master — reversed from the corporate PVV deck [V]

[`assets/deck/patterson-slides.css`](https://github.com/patterson-agents/patterson-design-system/blob/main/assets)
is the corporate *Purpose. Vision. Values.* PowerPoint master rebuilt on a 1920 × 1080
canvas (13.333in × 7.5in ⇒ 1in = 144px, 1pt = 2px). All three deck templates use it.

**Layouts** — `.lay-cover` (white copy column 27.65% + navy icon-collage panel, sky
logo flag) · `.lay-bar` (navy icon rail 15.3% + `.well` at padding-left 383px — the
workhorse) · `.lay-navy` (full-bleed navy, pattern bleeding off the left edge, sky
`.peyebrow` top-right — section dividers) · `.lay-wave-navy` · `.lay-wave-light` ·
`.lay-plain`.

**Type**, verbatim from `slideMaster1` — title **48pt bold UPPERCASE** in *secondary*
blue `#147EC2` (not navy; the one place blue outranks navy) · body **18pt bold** navy ·
statement 24pt · section word **72pt** white · footer **7pt** gray right-aligned,
`©YEAR Patterson Companies | pattersoncompanies.com | #`.

**Do** keep slide shapes as **flat rectangles** — the master has no rounded corners
anywhere, so the web radius scale does not apply to slides. **Do** stack overlapping
definition cards as a descending stair (navy → blue → sky). **Don't** put two Patterson
logos on one slide — the rail and the cover panel already carry the mark.

**Values panel colours** (lifted from the deck's own artwork, and the only sanctioned
use of tertiary colour as a full-bleed field): Passionate `#41B8DA` · Focused `#7BC24D`
· People-First `#522E91` · Always Advancing `#147EC2`.
