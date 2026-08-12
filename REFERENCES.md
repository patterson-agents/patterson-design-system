# References

## Import provenance

This repository is the claude.ai/design **"patterson-design-system"** authoring project,
exported **2026-08-12** and imported at that same commit. The project's canonical identifier is
the UUID **`3534f94f-a7e6-4612-81d4-6e830716f07d`**.

That UUID surfaces in a truncated slug form throughout the runtime bundle and every component
that reads from it — `window.PattersonCompaniesDesignSystem_3534f9` — rather than the full UUID.
Grep for `3534f9` (not the full UUID) to find every load-bearing reference: `_ds_bundle.js`,
`_ds_manifest.json`, `theme.json`, `SKILL.md`, `DESIGN.md`, every `*.card.html` guideline card,
and the `templates/` and `components/` READMEs all bind to this namespace. Do not rename it
without re-copying the change everywhere it's read.

`lab-workshop`'s `_ds/patterson-design-system-3534f94f-a7e6-4612-81d4-6e830716f07d/` snapshot
directory uses the **full** UUID as a directory-name slug — a second, independent slug variant
of the same project identifier, chosen for that repo's own snapshot-naming convention. The two
slugs (truncated JS namespace vs. full-UUID directory name) refer to the same source project;
neither is a typo of the other.

## Canonicity

See the `[!IMPORTANT]` alert at the top of [README.md](README.md#canonicity): this project and
the published `patterson-design-plugins` marketplace (and its fork, `design-plugins/`) diverged
after the plugins were generated from an earlier snapshot of this system. This repository is the
newer, actively-diverged authoring project, **not** an automatic source of truth for the
published plugins — reconciliation between the two is an open decision, not something to infer
from file dates.

## Brand asset re-encode (2026-08-12)

`assets/brand/{wave-bg-navy,photo-markets,value-prop,color-palette}.webp` were re-encoded
directly from the claude.ai/design export's original PNGs — **not** from the already-lossy
optimized versions [PR #9 of `patterson-design-plugins`](https://github.com/patterson-agents/patterson-design-plugins/pull/9)
produced — because PR #9's variants were over-crushed for this project's full-width usage (see
[README.md § Substitutions made on import](README.md#substitutions-made-on-import) for the
historical PR #9 figures this supersedes, and
[README.md § Brand asset re-encode](README.md#brand-asset-re-encode-2026-08-12) for the current
before/after table).

Three of the four rasters were capped at 2560px wide (`magick … -resize '2560>'`); the fourth,
`color-palette.webp`, is a flat-color reference card rather than a photograph and was instead
Lanczos-upscaled 2x from its export original so it stays crisp at full-width display — a
deliberate, documented exception to the "cap at 2560px" rule, not an oversight.
