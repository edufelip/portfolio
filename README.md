<h1 align="center">Eduardo's Portfolio</h1>

<p align="center">
  <a href="https://medium.com/@eduardofelipi"><img alt="Medium" src="https://img.shields.io/static/v1?label=Medium&message=@edu_santos&color=gray&logo=medium"/></a>
  <a href="https://www.youtube.com/channel/UCYcwwX7nDU_U0FP-TsXMwVg"><img alt="Profile" src="https://img.shields.io/static/v1?label=Youtube&message=edu_santos&color=red&logo=youtube"/></a> 
  <a href="https://github.com/edufelip"><img alt="Profile" src="https://img.shields.io/static/v1?label=Github&message=edufelip&color=white&logo=github"/></a> 
  <a href="https://www.linkedin.com/in/eduardo-felipe-dev/"><img alt="Linkedin" src="https://img.shields.io/static/v1?label=Linkedin&message=edu_santos&color=blue&logo=linkedin"/></a> 
</p>

<p align="center">  
🗡️ This is my portfolio where I show my projects and my work!
</p>

<p align="center">
<img src="https://github.com/edufelip/portfolio/assets/34727187/2a911e8c-272d-489e-bf89-82cab3693082"/>
</p>

## See it

Go to this [Link](https://portfolio-edufelip.vercel.app/) to access my portfolio.

## Stack

- Next.js (pages router)
- React 18
- TypeScript
- Styled‑components
- Framer Motion 12
- Firebase (Analytics GA4; optional via provider)
- ESLint + Prettier + Husky (pre‑commit)
- Jest + Testing Library (unit tests)

## Getting Started

- Install deps: `yarn install`
- Copy envs: `cp .env.example .env` and fill values (see below)
- Dev server: `yarn dev` → http://localhost:3000
- Production build: `yarn build` then `yarn start`

## Environment

These keys enable GA4 analytics (optional for local dev):

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

Analytics provider (defaults to GA4 when valid Firebase config is present):

- `NEXT_PUBLIC_ANALYTICS_PROVIDER=ga4` (set another provider later as needed)

If envs are missing, analytics falls back to a safe no‑op.

## Architecture

- `src/pages/` — Next.js routes
- `src/components/` — reusable UI (e.g., `Header`, `MobileMenu`)
- `src/styles/` — styled‑components + `global.ts` (global CSS)
- `src/lib/` — framework‑agnostic code
  - `lib/analytics/` — provider‑based analytics (GA4 client + Noop)
  - `lib/firebase/` — Firebase bootstrap
- `src/hooks/` — custom hooks (e.g., `useScrollMemory`)
- `src/types/` — shared TypeScript types

## Scripts

- `yarn dev` — run locally
- `yarn build` / `yarn start` — production build/serve
- `yarn typecheck` — TypeScript only
- `yarn lint` / `yarn format` — code quality
- `yarn test` — unit tests (Jest + RTL)

## Analytics Provider (extensible)

The app uses a SOLID‑friendly provider pattern:

- Implement `Analytics` (see `src/lib/analytics/types.ts`).
- Add a client under `src/lib/analytics/clients/`.
- Select via `NEXT_PUBLIC_ANALYTICS_PROVIDER` or extend the provider switch.

## Maintainers

This project is mantained by:

- [Eduardo Felipe](http://github.com/edufelip)

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push your branch (git push origin my-new-feature)
5. Create a new Pull Request
