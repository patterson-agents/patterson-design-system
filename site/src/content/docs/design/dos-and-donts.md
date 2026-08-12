---
title: Do's and don'ts
description: Verified, system, and corrected rules for what to do and not do, plus the voice guide checked against live copy.
sidebar:
  order: 8
---

Every rule below is tagged with its evidence level: **[V]** verified in production
(`theme-styles.min.css`, live sites, or supplied brand assets) · **[S]** a system
convention this design system adds on top · **[C]** corrected — the earlier draft of
this document had it wrong.

## Do

- **[V]** Anchor pages on **white**. White plus space is the brand; navy and sky are
  punctuation.
- **[V]** Use navy for **all** headings and structure. Production sets the primary
  dark-blue color on h1, h2, h3, h4, eyebrow and caption alike — headings are never
  gray, never black.
- **[V]** Set body copy in body gray (`#58585B`) — confirmed as the primary cool-grey
  variable on `body`.
- **[V]** Use a **single family**: `proxima-nova, sans-serif`. Production declares
  exactly one font variable and no second family.
- **[C]** Keep primary-button hover **inside navy** — `#003767` → `#315D83`. The
  navy→sky flip is *not* the brand's interaction.
- **[C]** Make the **secondary button a filled light blue** (`#6DCFF6`) with a navy
  label, hovering to `#96DBF6`. Not a navy outline.
- **[C]** Use **small radii on interactive elements** — 5px buttons, 6px elevated
  buttons, 2px fields. Reserve larger radii for containers.
- **[V]** Drop to **weight 400 at h3 and below**. Only h1/h2 carry weight 800.
- **[V]** Keep uppercase for **small labels only** — 14px at weight 500, used on
  eyebrows, filter labels, pagination and card kickers.
- **[V]** Keep motion **fast and plain**: production uses 100–200ms with `ease-in-out`,
  `ease`, or `linear`, on `background-color`, `border-color`, `color`, `transform` and
  `height` only.
- **[V]** Cap content around **1240–1260px** (production `max-width: 1259px`).
- **[V]** Use warm, authentic photography of practitioners, animals, and operations.
- **[V]** Draw spot illustrations as **navy + sky two-tone line art** with heavy
  rounded strokes.
- **[V]** Take UI glyphs from the **official `patterson-icons` font** (93 glyphs) —
  `<i class="pat-i pat-i-cart">` or `<Icon name="cart" />`. Production renders them at
  14px.
- **[V]** Set headings navy at **every** level, with **no letter-spacing**.
- **[V]** Use the **warm taupe `#AFA593`** for field borders. It is deliberate, not a
  mistake.
- **[V]** Render statistics oversized. Numbers are how this brand proves things.
- **[S]** Show a **3px sky focus ring** on everything focusable. Production has no
  branded focus style — this is an accessibility improvement worth keeping.
- **[S]** Tint shadows navy for cool consistency, keeping alpha very low.
- **[S]** Alternate white → subtle-gray → navy bands, ~96px apart, for pacing.

## Don't

- **[V]** Don't introduce a second typeface. Hierarchy comes from size and weight.
- **[V]** Don't use the **tertiary palette** (green `#7BC24D` / teal `#00817D` / purple
  `#522E91`) as page chrome. Production names them as tertiary variables and confines
  them to data and infographics.
- **[V]** Don't apply a **gradient**, texture, or pattern fill. The production
  stylesheet contains **zero** gradient declarations — this rule is absolute.
- **[C]** Don't make everything a **pill**. Production has no `border-radius: 999px`
  anywhere. If you want the pill look, own it as a house convention, not as Patterson
  brand.
- **[C]** Don't add **letter-spacing** — negative on display or positive on caps.
  Production declares none at all.
- **[C]** Don't set body copy at **1.6 line-height** if you're matching production; it
  ships 18px/24px (1.33).
- **[C]** Don't bold h3/h4. They are weight 400.
- **[V]** Don't build glassmorphic panels, translucent cards, or blurred backdrops — no
  `backdrop-filter` appears in production.
- **[V]** Don't use **emoji or unicode glyphs**. Icons come from the official
  `patterson-icons` font or as two-tone illustrations.
- **[C]** Don't reach for Lucide, Feather, or any third-party icon set — the official
  Patterson font is bundled and covers the UI tier.
- **[C]** Don't specify weight **800, 600, 500, 300 or 900** and assume a real face
  renders. Only **400 and 700** are licensed; everything else is faux bold.
- **[V]** Don't add bounce, spring, parallax, infinite loops, or decorative animation —
  production motion is confined to color, transform and height.
- **[V]** Don't crowd corporate or marketing surfaces. Density is permitted on
  storefront catalogs only.
- **[V]** Don't put sky-blue on large background fills. Sky is accent-scale; navy is
  surface-scale.
- **[S]** Don't scrim photography with black — use navy at ~55%.
- **[S]** Don't remove or restyle the focus ring.

## Voice — verified against live copy

Confirmed on pattersondental.com, pattersonveterinary.com and pattersoncompanies.com:

- **[V]** **The brand promise is used as section furniture.** "Trusted expertise" and
  "Unrivaled support" appear verbatim as section eyebrows above content blocks. Use
  them that way.
- **[V]** **"We" for Patterson, "you / your" for the customer**, partnership-framed:
  *"our trusted experts will guide and support you at every step"*; *"Together, we'll
  identify your needs."*
- **[V]** **Verb-first, specific CTAs**: "Explore solutions", "Learn about our
  support", "Discover practice management software", "Create my account". Never "Click
  here", never "Learn more" alone.
- **[V]** **Benefit bullets over paragraphs** in offer blocks — short, parallel, no
  terminal punctuation.
- **[V]** **Attributed testimonials** in the form *Name, Credential | City, State*.
- **[V]** **Title Case for product and program brands**: Advantage Rewards, Revolve
  Software, Eaglesoft, Dental Intelligence. Sentence case for everything else.
- **[C]** **Questions are allowed as headings.** The earlier "confident statements, not
  questions" rule is wrong — production leads with *"Need technical service or
  equipment repair?"* and *"Why not?"*. Rhetorical questions that set up an answer are
  on-brand; keep them short.
- **[V]** **No emoji, ever** — none appear on any Patterson surface.
- **[V]** Vocabulary confirmed in use: support, trusted, expertise, solutions,
  practice, grow, modernize, streamline, unwavering, responsive, partner.
