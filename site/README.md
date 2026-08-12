# Site

The design system's own front end — a landing page, documentation, a demo gallery and a
kitchen sink. Plain HTML: link [`../styles.css`](../styles.css) and, where components are
rendered, [`../_ds_bundle.js`](../_ds_bundle.js). No build step.

| File | What it is |
| --- | --- |
| [`index.html`](index.html) | Landing page — what the system is, foundations at a glance, the twelve corrections, template gallery. |
| [`docs.html`](docs.html) | Documentation — install, tokens, colour, type, shape, icons, components, templates, adapters, brand rules, gotchas, contributing. |
| [`demos.html`](demos.html) | Every template with a description and a link, plus all twenty-three specimen cards. |
| [`kitchen-sink.html`](kitchen-sink.html) | Every component in every variant and state, rendered live from the bundle. Logic in [`kitchen-sink.jsx`](kitchen-sink.jsx). |
| [`site.css`](site.css) | Shared chrome — nav, footer, buttons, cards, code blocks, tables. |

## Conventions

The site is built with the same rules it documents, so it doubles as a reference
implementation: 5px buttons, navy headings with no letter-spacing, the official icon font,
the wave watermark as the only decorative mark, and no gradients anywhere.

`site.css` deliberately uses plain classes rather than the React components — the pages need
to work as static HTML, and the chrome is not part of the system's public surface. Anything
that *is* part of the public surface (every component in the kitchen sink) is rendered from
the real bundle, so a regression there shows up on the page.

## Editing

- Adding a component? Add a `<Sec>` to `kitchen-sink.jsx` and a sidebar link in
  `kitchen-sink.html`.
- Adding a template? Add a `.demo` block to `demos.html` and a row to the table in
  `docs.html#templates`.
- Changing a brand rule? It appears in three places — [`../DESIGN.md`](../DESIGN.md),
  `docs.html` and the landing page's corrections list. `DESIGN.md` is the source of truth.
