// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// Patterson-branded Starlight documentation site.
//
// Branding is applied entirely through `src/styles/patterson.css`, which remaps
// Starlight's `--sl-*` custom properties onto Patterson brand tokens. No Starlight
// component is ejected, so the theme survives Starlight upgrades.
//
// https://astro.build/config
export default defineConfig({
  // The custom domain this site is deployed to. Drives canonical URLs, the
  // sitemap, and social previews. Served from the domain root, so no `base`.
  site: 'https://ds.patterson.sh',

  // Astro's default image service compiles sharp, which carries an open advisory.
  // The passthrough service copies images through untouched — no native binary,
  // no optimization. Docs sites rarely need the pipeline.
  image: { service: passthroughImageService() },

  integrations: [
    starlight({
      title: 'Patterson Design System',
      description:
        'Authoring project — tokens, components, guidelines, and templates for the Patterson Companies design system.',
      tagline: 'Authoring project — tokens, components, guidelines, templates',
      logo: {
        light: './src/assets/patterson-logo-navy.svg',
        dark: './src/assets/patterson-logo-white.svg',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/patterson.css'],
      // Proxima Nova is served by Adobe Fonts kit uth1qfm. Load it from the kit
      // only — Adobe's terms do not permit re-hosting Typekit payloads, so never
      // commit font binaries or @font-face declarations for it.
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://use.typekit.net/uth1qfm.css',
          },
        },
      ],
      social: [
        {
          icon: 'external',
          label: 'Patterson Companies',
          href: 'https://www.pattersoncompanies.com',
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagination: true,
      expressiveCode: {
        // Copy button on code frames; Patterson borders and radius come from
        // src/styles/patterson.css.
        frames: { showCopyToClipboardButton: true },
      },
      // Sections below map onto the authoring project's own layout: the design
      // guide (from DESIGN.md), a generated tokens reference, component
      // contracts, the icon library, and passthrough specimens. Every
      // directory autogenerates its sidebar group, so a new page appears
      // with no config change.
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Overview', link: '/' },
            { label: 'Getting started', link: '/getting-started/' },
          ],
        },
        {
          label: 'Design guide',
          items: [{ autogenerate: { directory: 'design' } }],
        },
        {
          label: 'Tokens',
          items: [{ autogenerate: { directory: 'tokens' } }],
        },
        {
          label: 'Components',
          items: [{ autogenerate: { directory: 'components' } }],
        },
        {
          label: 'Icons',
          items: [{ label: 'Icon library', link: '/icons/' }],
        },
        {
          label: 'Specimens',
          items: [{ autogenerate: { directory: 'specimens' } }],
        },
        {
          label: 'About this site',
          items: [{ autogenerate: { directory: 'guides' } }],
        },
      ],
    }),
  ],
});
