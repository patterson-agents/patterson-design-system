# Patterson icon set — vector source

93 SVG icons, one file per glyph, extracted from the official Patterson
icon font (`patterson-icons`). This directory is the vector source of
truth for `tokens/icons.css`; the icon **font** binaries (woff/ttf) are
intentionally not committed (see "Font binary" below).

## Provenance

The font was shipped in three formats by the original design-authoring
export: `.woff`, `.ttf`, `.svg` (an IcoMoon-generated SVG font — XML
text, not binary). Only the `.svg` format survived the no-binaries import
filter and is already tracked at
`patterson-design-system/assets/fonts/patterson-icons.svg` (commit
`2e9b907`, "feat: import Patterson design system authoring project").
The same file (byte-identical, sha256
`a095db60f1a63588a491a4481fa31fdbf7487175c37e98fcc64aaa5931fff3f2`) also
exists at `downloads/patterson/uploads/icons/icons.svg`, alongside the
excluded `icons.woff` / `icons.ttf` siblings.

These 93 files were generated from that already-tracked SVG font by
extracting each `<glyph>` outline and re-wrapping it as a standalone
`<svg>`. No new licensed asset was introduced; this only re-expresses
data already in the repo in a more directly consumable form (individual
icons instead of one font).

### The math (for regeneration)

Font metrics: `units-per-em=1024`, `ascent=960`, `descent=-64`
(see the header comment in `tokens/icons.css`). SVG-font glyphs are
authored y-up with the baseline at `y=0`; standalone SVGs need y-down
coordinates. Each glyph's `d` path is reused verbatim inside:

```html
<svg viewBox="0 0 <advX> 1024">
  <path d="<original d>" transform="matrix(1 0 0 -1 0 960)"/>
</svg>
```

`matrix(1 0 0 -1 0 960)` sends baseline (y=0) to 960 (leaving the 64
units of descender room down to the 1024 bottom edge) and ascent (y=960)
to 0 (top edge) — exactly filling a `0 0 <advX> 1024` box. `advX` is
1024 for all but 9 glyphs that carry a non-default `horiz-adv-x`
(narrower/wider glyphs like `mail` at 1418 or `trash` at 878); those
use their own advance width as the viewBox width instead of 1024.

Verified by rendering `search`, `cart`, `house`, and `mail`
(the widest non-square glyph) to PNG with `rsvg-convert` and inspecting
the result — all four render correctly (magnifying glass, shopping cart,
house, envelope).

## Regenerating

The generator script is not checked in (one-off, no runtime dependency).
To redo it: parse `assets/fonts/patterson-icons.svg`'s `<glyph
unicode="..." glyph-name="..." [horiz-adv-x="..."] d="...">` lines in
document order, zip them 1:1 against `tokens/icons.css`'s
`.pat-i-<name>:before{content:"\e<hex>"}` selectors in document order
(both lists are 93 entries long and already in the same order — verify
name equality before trusting the zip), and write each glyph per the
formula above. `icons-manifest.json` in this directory is the
machine-readable version of the table below.

## Mapping (glyph -> file -> unicode -> advance width)

| CSS class | File | Unicode | horiz-adv-x |
| --- | --- | --- | --- |
| `pat-i-alert` | `alert.svg` | U+E900 | 1024 (default) |
| `pat-i-arrow-down` | `arrow-down.svg` | U+E901 | 1024 (default) |
| `pat-i-arrow-left` | `arrow-left.svg` | U+E902 | 1024 (default) |
| `pat-i-arrow-right` | `arrow-right.svg` | U+E903 | 1024 (default) |
| `pat-i-arrow-up` | `arrow-up.svg` | U+E904 | 1024 (default) |
| `pat-i-chevron-down` | `chevron-down.svg` | U+E905 | 1024 (default) |
| `pat-i-chevron-left` | `chevron-left.svg` | U+E906 | 1024 (default) |
| `pat-i-chevron-right` | `chevron-right.svg` | U+E907 | 1024 (default) |
| `pat-i-chevron-up` | `chevron-up.svg` | U+E908 | 1024 (default) |
| `pat-i-facebook` | `facebook.svg` | U+E909 | 1024 (default) |
| `pat-i-filter` | `filter.svg` | U+E90A | 1024 (default) |
| `pat-i-help` | `help.svg` | U+E90B | 1024 (default) |
| `pat-i-house` | `house.svg` | U+E90C | 1024 (default) |
| `pat-i-instagram` | `instagram.svg` | U+E90D | 1024 (default) |
| `pat-i-linkedin` | `linkedin.svg` | U+E90E | 1024 (default) |
| `pat-i-menu-dots` | `menu-dots.svg` | U+E90F | 1024 (default) |
| `pat-i-menu-lines` | `menu-lines.svg` | U+E910 | 1024 (default) |
| `pat-i-pause` | `pause.svg` | U+E911 | 1024 (default) |
| `pat-i-play` | `play.svg` | U+E912 | 1024 (default) |
| `pat-i-reddit` | `reddit.svg` | U+E913 | 1024 (default) |
| `pat-i-remove` | `remove.svg` | U+E914 | 1024 (default) |
| `pat-i-search` | `search.svg` | U+E915 | 1024 (default) |
| `pat-i-snapchat` | `snapchat.svg` | U+E916 | 1024 (default) |
| `pat-i-twitter` | `twitter.svg` | U+E917 | 1024 (default) |
| `pat-i-youtube` | `youtube.svg` | U+E918 | 1024 (default) |
| `pat-i-check` | `check.svg` | U+E919 | 1024 (default) |
| `pat-i-mail` | `mail.svg` | U+E91A | 1418 |
| `pat-i-list` | `list.svg` | U+E91B | 1024 (default) |
| `pat-i-user` | `user.svg` | U+E91C | 1024 (default) |
| `pat-i-grid` | `grid.svg` | U+E91D | 1024 (default) |
| `pat-i-question-mark` | `question-mark.svg` | U+E91E | 1024 (default) |
| `pat-i-chevron-up_light` | `chevron-up-light.svg` | U+E91F | 1024 (default) |
| `pat-i-chevron-right_light` | `chevron-right-light.svg` | U+E920 | 1024 (default) |
| `pat-i-external-link` | `external-link.svg` | U+E921 | 1024 (default) |
| `pat-i-user_alt` | `user-alt.svg` | U+E922 | 977 |
| `pat-i-linkedin_filled` | `linkedin-filled.svg` | U+E923 | 1024 (default) |
| `pat-i-chevron-left_light` | `chevron-left-light.svg` | U+E924 | 1024 (default) |
| `pat-i-chevron-down_light` | `chevron-down-light.svg` | U+E925 | 1024 (default) |
| `pat-i-document` | `document.svg` | U+E926 | 1205 |
| `pat-i-speech-bubbles` | `speech-bubbles.svg` | U+E927 | 914 |
| `pat-i-close` | `close.svg` | U+E928 | 1024 (default) |
| `pat-i-close_light` | `close-light.svg` | U+E929 | 1024 (default) |
| `pat-i-map-pin_alt_outline` | `map-pin-alt-outline.svg` | U+E92A | 1004 |
| `pat-i-search_alt` | `search-alt.svg` | U+E92B | 1024 (default) |
| `pat-i-menu-lines_thin` | `menu-lines-thin.svg` | U+E92C | 1024 (default) |
| `pat-i-down-caret` | `down-caret.svg` | U+E92D | 1024 (default) |
| `pat-i-download` | `download.svg` | U+E92E | 1024 (default) |
| `pat-i-down-right-arrow` | `down-right-arrow.svg` | U+E92F | 1024 (default) |
| `pat-i-email` | `email.svg` | U+E930 | 1024 (default) |
| `pat-i-excel` | `excel.svg` | U+E931 | 1024 (default) |
| `pat-i-formulary-list` | `formulary-list.svg` | U+E932 | 1024 (default) |
| `pat-i-gear` | `gear.svg` | U+E933 | 1024 (default) |
| `pat-i-hazmat` | `hazmat.svg` | U+E934 | 1024 (default) |
| `pat-i-locator` | `locator.svg` | U+E935 | 1024 (default) |
| `pat-i-cart` | `cart.svg` | U+E936 | 1024 (default) |
| `pat-i-close_medium` | `close-medium.svg` | U+E937 | 1024 (default) |
| `pat-i-trash` | `trash.svg` | U+E938 | 878 |
| `pat-i-collapse` | `collapse.svg` | U+E939 | 1024 (default) |
| `pat-i-expand` | `expand.svg` | U+E93A | 916 |
| `pat-i-list-1` | `list-1.svg` | U+E93D | 1024 (default) |
| `pat-i-chat_alt` | `chat-alt.svg` | U+E93E | 1024 (default) |
| `pat-i-pdf` | `pdf.svg` | U+E940 | 1024 (default) |
| `pat-i-pedigree` | `pedigree.svg` | U+E941 | 1024 (default) |
| `pat-i-phone` | `phone.svg` | U+E943 | 1024 (default) |
| `pat-i-prescription` | `prescription.svg` | U+E944 | 1024 (default) |
| `pat-i-previouslypurchased` | `previouslypurchased.svg` | U+E945 | 1024 (default) |
| `pat-i-promotion` | `promotion.svg` | U+E946 | 1024 (default) |
| `pat-i-shiponice` | `shiponice.svg` | U+E952 | 1024 (default) |
| `pat-i-upload` | `upload.svg` | U+E95F | 1024 (default) |
| `pat-i-toggle-gridview` | `toggle-gridview.svg` | U+E962 | 1024 (default) |
| `pat-i-toggle-listview` | `toggle-listview.svg` | U+E963 | 1024 (default) |
| `pat-i-up-caret` | `up-caret.svg` | U+E967 | 1024 (default) |
| `pat-i-action-play` | `action-play.svg` | U+E968 | 1024 (default) |
| `pat-i-check_alt` | `check-alt.svg` | U+E969 | 1024 (default) |
| `pat-i-facebook_alt_bold` | `facebook-alt-bold.svg` | U+E96D | 1024 (default) |
| `pat-i-info` | `info.svg` | U+E96E | 1024 (default) |
| `pat-i-plus_circle` | `plus-circle.svg` | U+E96F | 1024 (default) |
| `pat-i-map-pin` | `map-pin.svg` | U+E971 | 1024 (default) |
| `pat-i-locked` | `locked.svg` | U+E972 | 832 |
| `pat-i-tag-percentage` | `tag-percentage.svg` | U+E973 | 1024 (default) |
| `pat-i-tag-price` | `tag-price.svg` | U+E974 | 1024 (default) |
| `pat-i-user_bold` | `user-bold.svg` | U+E975 | 1024 (default) |
| `pat-i-facebook_alt` | `facebook-alt.svg` | U+E977 | 1024 (default) |
| `pat-i-youtube_alt` | `youtube-alt.svg` | U+E978 | 1024 (default) |
| `pat-i-instagram_alt` | `instagram-alt.svg` | U+E979 | 1024 (default) |
| `pat-i-pinterest` | `pinterest.svg` | U+E97B | 1024 (default) |
| `pat-i-pinterest_alt` | `pinterest-alt.svg` | U+E97C | 1024 (default) |
| `pat-i-instagram_outline` | `instagram-outline.svg` | U+E97D | 1028 |
| `pat-i-twitter_alt` | `twitter-alt.svg` | U+E97E | 1024 (default) |
| `pat-i-action-gallery` | `action-gallery.svg` | U+E97F | 1024 (default) |
| `pat-i-action-lightbox` | `action-lightbox.svg` | U+E980 | 1024 (default) |
| `pat-i-chat` | `chat.svg` | U+E981 | 1024 (default) |
| `pat-i-shipping` | `shipping.svg` | U+E98E | 1024 (default) |

## Coverage

All 93 glyphs defined in `tokens/icons.css` have a corresponding SVG
here (93/93 — full coverage). Total size: 91.9 KB for all 93 files combined (SVGs, not optimized further —
`svgo` was not available in this environment; sizes are already small,
largest under 3 KB, so no optimization pass was needed).

## Font binary (woff/ttf) — not vendored

`icons.woff` and `icons.ttf` (same font, binary formats) live at
`downloads/patterson/uploads/icons/icons.woff` and `.ttf` in this
workspace checkout. They are **not** committed to this repository:
the workspace's no-binaries rule excludes binary font formats, and the
license under which Patterson's storefront pattern library ships this
font has not been confirmed (same open question as `proxima-nova` in
`assets/fonts/README.md`).

| File | SHA-256 |
| --- | --- |
| `icons.woff` | `ac2adc36ae0f01ee4c436c3c442c8375a61a7502dbbfcb668af8213348b3a28f` |
| `icons.ttf` | `af2ea259b5ab3c9c3be7c8874ae6b9f0bdf02c7041457e203a86c430fafacf50` |
| `icons.svg` (already tracked, see above) | `a095db60f1a63588a491a4481fa31fdbf7487175c37e98fcc64aaa5931fff3f2` |

Once licensing is confirmed, vendor the binaries with:

```sh
cp downloads/patterson/uploads/icons/icons.woff patterson-design-system/assets/fonts/patterson-icons.woff
cp downloads/patterson/uploads/icons/icons.ttf  patterson-design-system/assets/fonts/patterson-icons.ttf
```

`tokens/icons.css`'s `@font-face` block already points at those exact
paths — copying the two files in is the only step needed to make the
`.pat-i` font tier render instead of relying on this SVG set.

## Related but NOT the same asset: `downloads/Icons/` and `downloads/Logos/`

The workspace also has `downloads/Icons/` (216 files) and
`downloads/Logos/` (45 files) — both **flat directories of PNGs only**,
no subfolders, no SVGs, no font. (`downloads/patterson/Icons/` is a
byte-for-byte duplicate of `downloads/Icons/`, from the OneDrive/export
mirroring in this workspace — not a second source.)

- `downloads/Icons/*.png` — a raster **marketing/brand icon library**
  (`Icon_Toothbrush.png`, `Icon_Stethoscope.png`, `Icon_Equine.png`,
  `Icon_Pharmacy.png`, etc.), themed around dental/vet/distribution
  imagery for decks and brochures. Checked for name overlap against the
  93 `.pat-i-*` glyphs: only 6 coincidental name matches out of 216
  (`email`, `gear`, `phone`, `search`, `tag-percentage`, `tag-price`),
  and those are unrelated raster artwork in a different visual style, not
  the same icon — not a substitute for any font glyph. **No bulk import
  performed**; this is a separate asset library serving a separate
  purpose (marketing collateral, not UI chrome) and out of scope for the
  `.pat-i` glyph tier.
- `downloads/Logos/*.png` — Patterson entity/brand lockups and badges
  (`PDCO_logo(black).png`, `PDSI_Swoop_Badge_Navy.png`,
  `AHI_logo_vert_2color.png`, `BrandPromise_*.png`, etc.) — logo marks,
  not icons. Out of scope here; belongs with brand assets
  (`patterson-design-system/assets/brand/` or the `patterson-brand`
  plugin), not this directory.

Neither PNG set was searched for a plugin/skill home in this pass beyond
confirming no `patterson-icons` skill or plugin already exists anywhere
in the workspace (checked via a workspace-wide grep — the only
`patterson-icons` hits are copies of this same `tokens/icons.css` /
`patterson-icons.svg` pair replicated into `ds/` snapshots, archived CLI
packages, and handoff-zip extracts — all downstream copies of this one
source, not a competing implementation).

## Recommended long-term home: here (patterson-design-system), not a plugin

Every `patterson-icons` hit found anywhere in the workspace — the
`ds/` snapshots under `design-plugins/plugins/*/ds`, the archived
`cli/packages/design/assets/snapshot`, `patterson-labs`' and
`lab-workshop`'s `_ds/` bundles — is a downstream *copy* of
`patterson-design-system/tokens/icons.css` +
`patterson-design-system/assets/fonts/patterson-icons.svg`. This repo
is already the canonical origin everything else replicates from, so
`assets/icons/` belongs right where it now lives, next to the font and
the CSS that defines the glyph map. 93 small SVGs (94 KB total) don't
carry enough independent surface area — no commands, no agents, no
standalone install story — to justify a dedicated plugin, and
duplicating them again into `patterson-brand` would just add a fourth
copy to keep in sync instead of fixing the sync problem. If a plugin
ever needs the icons, it should pull from this directory the same way
the `ds/` snapshots already pull `tokens/icons.css` — not fork a copy.
