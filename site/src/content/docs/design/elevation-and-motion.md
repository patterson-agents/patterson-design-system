---
title: Elevation and motion
description: The shadow scale, focus rings, motion durations and easings, and the transparency and blur policy.
sidebar:
  order: 5
---

## Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Content bands, navy bands, footer |
| Hairline | 1px hairline | Dividers, table rows, sub-nav |
| xs | 0 1px 2px navy @6% | Chips, subtle inline surfaces |
| sm | 0 1px 3px navy @8% | **Default card resting state**, sticky header |
| md | 0 4px 12px navy @10% | Dropdowns, flyout menus, popovers |
| lg | 0 12px 28px navy @12% | Card hover lift (paired with `translateY(-3px)`) |
| xl | 0 24px 48px navy @16% | Modals, full-screen sheets |

Elevation is **gentle**. This system tints every shadow `rgba(0,55,103,…)` for cool
consistency. **Production instead uses neutral black at very low alpha** — its only
elevation token is a download shadow (`0 4px 8px rgba(0,0,0,0.08), 0 0 4px
rgba(0,0,0,0.04), 0 1px 1px rgba(0,0,0,0.12)`), applied to download and external-link
buttons. Both readings are acceptable; what matters is that alpha stays very low. Never
a hard 1px offset shadow, and never a dark or high-contrast one. See the
[effects token page](/tokens/effects/) for the generated shadow values.

## Focus & rings

A 3px sky ring at 45% alpha is the universal focus indicator on buttons, inputs, links,
tabs, and cards. Its red counterpart appears on invalid inputs. **Focus rings are never
removed**, including on navy surfaces where the sky ring still reads clearly.

## Motion

120–320ms only. The standard ease-in-out timing handles state changes, and a spring-out
ease handles entrances. Permitted: color transitions, opacity fades, short (≤8px)
slides, the 3px card lift, the 1px button press. **Not permitted:** bounces, springs,
infinite loops, parallax, scroll-jacking, decorative animation.

## Transparency & blur

Sparing. A navy overlay scrim at 55% over photography; an optional blur panel
(`saturate(140%) blur(12px)`) on sticky headers. **Patterson is not a glassmorphism
brand** — frosted panels, translucent cards, and blurred backdrops beyond the sticky
header are off-brand.
