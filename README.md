# MeriAgent Landing

React + Vite marketing website for MeriAgent, an AI hotel management platform.

## Page content

- Coded SVG hotel atrium hero with CSS lighting, slideshow controls, and reduced-motion support. The hero does not load background photographs.
- Benefit-focused copy for hotel owners, managers, and teams.
- All six product screenshots from `public/scc/` appear after the three cards beneath the executive headline in alternating layouts, with benefit copy, scroll reveals, reduced-motion support, and an accessible full-size screenshot dialog.
- Existing animated cards, briefing carousel, department accordions, comparison panels, and demo request form.
- English and Amharic content.
- Standalone documentation site at `/docs/` with a searchable sidebar, individual guides, on-page navigation, and copyable API examples. Covers backend architecture, JWT authentication, hotel isolation, REST resources, approvals, and onboarding. API routes are grounded in the backend source; examples use placeholder environment variables.
- Briefing figures and approval interactions are explicitly illustrative, not live hotel data or verified customer outcomes.

## Development

```sh
npm install
npm run dev
```

## Validation and production build

```sh
npm run lint
npm run build
npm run preview
```

Vite outputs the landing page into `dist/index.html` and the separate documentation page into `dist/docs/index.html`, with separate page bundles. Deploy the entire `dist/` directory so `/docs/` works on static hosting without a single-page-app rewrite. Individual guides use shareable hashes such as `/docs/#api`. Use a Node.js version compatible with the installed Vite release.

## Demo requests

The existing EmailJS integration uses `VITE_PUBLIC_KEY`, `VITE_SERVICE_ID`, and `VITE_TEMPLATE_ID`, with the existing fallback configuration retained. Do not submit the demo form while testing unless an actual contact request is intended.

## Main files

- `src/App.jsx`: marketing copy, existing UI components, interactions, and localization.
- `src/HeroScene.jsx`: decorative hotel scene drawn as SVG.
- `src/ProductShowcase.jsx` and `src/showcase.css`: screenshot stories, animations, and full-size viewer.
- `docs/index.html` and `src/docs-main.jsx`: standalone documentation entry point.
- `src/Docs.jsx`: searchable documentation, guides, and API reference.
- `src/docs.css`: documentation layout and responsive navigation.
- `src/index.css`: styles, responsive layouts, and animation preferences.
