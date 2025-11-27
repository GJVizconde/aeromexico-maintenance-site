# Aeroméxico Maintenance Experience

Single-page maintenance experience built with Vue 3 + TypeScript + Vite. It renders a full-page banner and a detailed maintenance modal with support contact info for Aeroméxico Business visitors.

## Tech stack

- Vue 3 with `<script setup>` + TypeScript
- Vite for dev/build
- Tailwind CSS 4 (utility-first CSS)

## Project structure (high level)

- `src/features/maintenance/` — Maintenance page and modal (`MaintenancePage.vue`, `MaintenanceModal.vue`, `Support.vue`)
- `src/components/ui/` — Base UI atoms (e.g., `BaseButton.vue`, `BaseCard.vue`)
- `src/components/layout/` — Shared layout pieces (e.g., `Footer.vue`)
- `src/assets/` — Icons and images

## Getting started

Prerequisites: Node 18+ and pnpm (recommended) or npm.

```bash
pnpm install
pnpm dev    # start dev server
pnpm build  # type-check + production build
pnpm preview
```

If using npm:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Available scripts

- `pnpm dev` — Run Vite dev server.
- `pnpm build` — Type-check with `vue-tsc` and generate the production build.
- `pnpm preview` — Preview the production build locally.
# aeromexico-maintenance-site
