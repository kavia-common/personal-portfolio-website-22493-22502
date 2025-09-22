# Ocean Professional Portfolio (Nuxt 3)

A modern, minimalist portfolio with blue and amber accents. Responsive layout includes navigation, hero, projects grid, about/skills panels, and a contact form footer.

- Tech: Nuxt 3, Vue 3, Vite
- Theme: Ocean Professional (blue & amber accents, gradients, rounded corners, subtle shadows)

## Setup

Install dependencies:

```bash
npm install
# or pnpm install / yarn install / bun install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

## Structure

- `layouts/default.vue` — Navigation + footer with contact form (mobile menu included)
- `pages/index.vue` — Landing page composing sections
- `components/` — HeroSection, ProjectGrid, AboutSkills, ContactForm, LogoMark
- `assets/css/main.css` — Ocean Professional theme tokens and utilities
- `public/favicon.svg` — App icon used by nuxt.config

## Accessibility

- Skip-to-content link
- Focus-visible styles for interactive elements
- Semantic headings and labels on form controls

## Theming

Colors are defined via CSS variables in `assets/css/main.css`:
- Primary: `#2563EB`
- Secondary: `#F59E0B`
- Error: `#EF4444`
- Background: `#f9fafb`
- Surface: `#ffffff`
- Text: `#111827`

Gradients, rounded corners, and subtle shadows are applied throughout for a clean, professional aesthetic.
