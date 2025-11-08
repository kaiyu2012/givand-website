# Repository Guidelines

## Project Structure & Module Organization
All React+TypeScript code lives in `src/`. Components sit in `src/components/`, shared styles in `src/index.css`, and entry points in `src/main.tsx` and `src/App.tsx`. Static assets belong in `public/` (served as-is); production bundles land in `dist/` and should never be committed. Build and styling config lives at the repo root (`vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `tsconfig*.json`)—edit these centrally so Vite, Tailwind, and TypeScript stay in sync.

## Build, Test, and Development Commands
- `npm install`: install or refresh dependencies after pulling.
- `npm run dev`: Vite dev server with fast refresh at `http://localhost:5173`.
- `npm run build`: Type-check via `tsc`, then emit optimized assets to `dist/`.
- `npm run preview`: Serve the built output locally; run before every PR.
- `npm run lint`: ESLint (TypeScript + React hooks rules) with zero tolerated warnings.
- `npm run cf-build`: Cloudflare Pages install + build workflow used in CI.

## Coding Style & Naming Conventions
Use 2-space indentation, single quotes in TSX, and Tailwind utilities for layout before reaching for custom CSS. Components are `PascalCase.tsx`, hooks/utilities `camelCase.ts`, and assets `kebab-case.ext`. Keep component files focused on one responsibility, type props explicitly, and prefer semantic HTML elements for accessibility.

## Testing Guidelines
There is no automated suite yet, so linting plus manual verification form the release gate. When you add tests, colocate them as `<Component>.test.tsx` or use `src/__tests__/` with Vitest + React Testing Library (works with the existing Vite config). Smoke-test hero animations, services cards, and the contact CTA in Chromium and WebKit, and re-check breakpoints via `npm run preview`.

## Commit & Pull Request Guidelines
Git history favors short, imperative subjects (`logo update`, `fix bug`). Follow that pattern, keep each commit narrowly scoped, and run `npm run lint && npm run preview` beforehand. PRs should link to issues/tasks, summarize intent, attach screenshots or short videos for UI work, and note deployment or Cloudflare config impacts. Wait for the Pages preview/CI to pass before merging.

## Security & Configuration Notes
Do not store credentials in the repo; use Vite `.env` files (ignored by Git) and reference them via `import.meta.env`. Optimize any new assets (SVG, WebP) before placing them in `public/`. When bumping dependencies, finish with `npm run cf-build` to ensure the Cloudflare pipeline still produces a deterministic `dist/`.
