# Contributing to patterson-design-system

This repo follows the same house conventions as
[`patterson-corp/CONTRIBUTING.md`](https://github.com/patterson-agents/patterson-corp/blob/main/CONTRIBUTING.md)
— conventional commits, no emoji on brand surfaces, `[TBD: …]` instead of an invented answer.
Read that document first; this one only covers what's specific to an authoring project.

## Repo-specific notes

- **This is the authoring project, not the published marketplace.** `design-plugins/` (a fork of
  `patterson-design-plugins`) is generated *from* an earlier snapshot of this system and has
  since diverged — see [README.md § Canonicity](README.md#canonicity) and
  [REFERENCES.md](REFERENCES.md). Do not assume a change here is automatically true of the
  published plugins, and do not "fix" the published plugins by copying files from here without
  going through the reconciliation this repo's own docs flag as an open decision.
- **The runtime namespace is `window.PattersonCompaniesDesignSystem_3534f9`.** It's a truncated
  slug of this project's UUID (`3534f94f-a7e6-4612-81d4-6e830716f07d`), read by `_ds_bundle.js`
  and every component/template that binds to it. See [REFERENCES.md](REFERENCES.md) before
  renaming anything that touches it.
- **Raster brand assets are capped at 2560px wide and shipped as `.webp`**, re-encoded from the
  original export PNGs rather than from any previously-crushed copy — see
  [README.md § Brand asset re-encode](README.md#brand-asset-re-encode-2026-08-12). The one
  documented exception is `color-palette.webp`, a flat-color reference card upscaled instead of
  downscaled to stay crisp at full width.
- **Font binaries are excluded pending a license ruling** on self-hosted Proxima Nova — see
  [README.md § Exclusions](README.md#exclusions). Don't re-add `.woff2`/`.woff`/`.ttf` files
  without resolving that first.

## Before opening a PR

There is no build step and no test suite here — verify by hand:

```bash
# every README <img src> and relative link should resolve on disk
grep -oE '<img src="[^"]+"' README.md
```

See [CLAUDE.md](CLAUDE.md) for agent-facing conventions (note its own staleness warning) and
[DESIGN.md](DESIGN.md) for the full system rationale.
