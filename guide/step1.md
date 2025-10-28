# Step 1 — Project Setup

Goal: Scaffold a Next.js app with TypeScript and Tailwind, install core libraries, and run the dev server.

## Prerequisites
- Node.js ≥ 18.x and npm ≥ 9.x installed
- Windows PowerShell or Git Bash

## Create the project
```bash
# From: c:\Users\Abrar\Documents\Projects\real-estate-website-builder
npx create-next-app@latest real-estate-web --ts --tailwind
cd real-estate-web
```

## Install libraries
```bash
npm install zustand react-hook-form zod next-seo framer-motion lucide-react
# Optional UI helpers if using shadcn/ui
npm install sonner class-variance-authority tailwind-merge
```

## Verify Tailwind
- Tailwind is auto-configured by the scaffold; ensure `globals.css` imports Tailwind directives.
- Confirm `tailwind.config.ts` exists and content paths include `./app/**/*` and `./components/**/*`.

## Run the dev server
```bash
npm run dev
# Open http://localhost:3000
```

## Deliverables
- Working Next.js app in `real-estate-web`
- Tailwind functional
- Packages installed

---

Next: Base layout, theme tokens, and initial pages (Home + Listings).