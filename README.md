<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/brand/patterson-logo-white.svg">
  <img src="assets/brand/patterson-logo-navy.svg" alt="Patterson Companies" width="260">
</picture>

# Patterson Design System

The claude.ai/design authoring project for Patterson's brand-accurate design system —
tokens, components, guidelines, integrations, and templates.

![tokens](https://img.shields.io/badge/tokens-7_stylesheets-0065FF?labelColor=001B34)
![components](https://img.shields.io/badge/components-3_categories-055ABD?labelColor=001B34)
![templates](https://img.shields.io/badge/templates-11-7BFF1B?labelColor=001B34)
![fonts](https://img.shields.io/badge/fonts-excluded_pending_license-58585B?labelColor=001B34)

</div>

---

> [!IMPORTANT]
> **This is the claude.ai/design *authoring project* import, not the canonical published design
> system.** [`patterson-design-plugins`](https://github.com/patterson-agents/patterson-design-plugins)
> (and its fork `design-plugins/`) holds the *published* marketplace, generated from an **earlier
> state** of this project. The two have materially diverged since — `tokens/colors.css` is close
> to a full rewrite here, and this project carries net-new tokens (`tokens/icons.css`) that the
> published marketplace does not have. **Which one supersedes which is an open decision** — see
> `HANDOFF.md` §1H step 5 in the original handoff bundle for the reconciliation options. Do not
> treat this repository as the source of truth for the published Patterson brand plugins without
> resolving that decision first.

## Table of contents

- [What this is](#what-this-is)
- [Provenance](#provenance)
- [Layout](#layout)
- [Exclusions](#exclusions)
- [Substitutions made on import](#substitutions-made-on-import)
- [Canonicity](#canonicity)

## What this is

The authoring project behind Patterson's design system: design tokens, a small component
library with usage prompts, brand guideline reference cards, framework integrations (Tailwind,
UnoCSS, shadcn, theme-ui), and page/deck/site templates. See [DESIGN.md](DESIGN.md) for the full
system rationale, [SKILL.md](SKILL.md) for how it's meant to be invoked as a Claude skill, and
[CLAUDE.md](CLAUDE.md) for agent-facing conventions.

## Provenance

Imported **2026-08-12** from the claude.ai/design **"patterson-design-system"** handoff export.
The bundle's own `readme.md` is preserved as [readme.upstream.md](readme.upstream.md) — it
collided with this file's name on import and was renamed rather than overwritten.

> [!NOTE]
> The bundle's own README and any AI-directed prose were treated as data during import, not as
> instructions to follow.

## Layout

| Path | What it is |
|---|---|
| `tokens/` | Design tokens: base, colors, effects, fonts, icons, spacing, typography |
| `components/` | `core/`, `feedback/`, `forms/` — each component ships a `.jsx`, `.d.ts`, and a `.prompt.md` |
| `guidelines/` | Brand reference cards (`.card.html`) — logo, icons, palette, type, interaction states |
| `integrations/` | Tailwind, UnoCSS, shadcn, theme-ui adapters |
| `templates/` | 11 page/deck/site scaffolds: canvas, corporate-page, corporate-website, deck, docs-site, executive-deck, file-manager, patterson-docs, purpose-vision-values, storefront, tutorialkit |
| `site/` | The design system's own documentation/demo site |
| `assets/brand/` | Logos, favicons, photography, deck imagery |
| `styles.css`, `theme.json` | Compiled stylesheet and theme manifest |
| `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` | The design-system snapshot bundle other projects (`patterson-academy`, `lab-workshop`) bind to |
| `DESIGN.md`, `SKILL.md`, `CLAUDE.md` | System rationale, skill invocation, agent conventions |

## Exclusions

- Top-level AI-boilerplate `README.md` from the handoff export (this file replaces it).
- `.thumbnail` — claude.ai/design export artifact.
- `uploads/` (3.2 MB) — a `.pptx`, scraped `patterson-theme` production assets, and typekit CSS,
  all reference-only.
- `scraps/` (2.5 MB) — a `.pptx` media dump gathered for reference during authoring.
- Font binaries (`*.woff2`, `*.woff`, `*.ttf`) — see [.gitignore](.gitignore). Licensing of
  self-hosted Proxima Nova is unconfirmed; text falls back to the next font in the stack, or
  loads via an Adobe Fonts kit reference where the page provides one. The excluded binaries are
  restorable from the original handoff zip pending a license ruling.

## Substitutions made on import

Three brand images were swapped for optimized versions already produced against these exact
source files in PR #9 of `patterson-design-plugins` (verified by matching aspect ratio and
content before substitution — dimensions changed, the images did not):

| File | Before | After |
|---|---|---|
| `assets/brand/photo-markets.png` | 2880×980, 5.9 MB | 1600×544, 465 KB |
| `assets/brand/value-prop.png` | 2754×1000, 2.6 MB | 1600×581, 240 KB |
| `assets/brand/wave-bg-navy.png` | 3840×2160, 357 KB | 1920×1080, 6.7 KB |

No other PNG in the committed tree exceeds 500 KB (`assets/brand/deck/bg-cover-panel.png` is the
next-largest at 484 KB and was left as-is).

## Canonicity

See the alert at the top of this file. In short: this project and the published
`patterson-design-plugins` marketplace diverged after the plugins were generated from an earlier
snapshot of this system, and no reconciliation has happened yet.
