# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern React + Vite codebase using AI coding agents. The Vite + React Router + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** React 19 + Vite (client-side SPA, TypeScript strict)
- **Routing:** React Router (`react-router-dom`) — routes declared in `src/App.tsx`
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel, static build (`dist/` output, SPA rewrite in `vercel.json`)

This project does NOT use Next.js. There is no App Router, no Server Components, no Route Handlers, no Server Actions, no middleware, and no `next/*` imports (`next/link`, `next/image`, `next/navigation`, `next/font`, etc.) — use `react-router-dom`'s `Link`/`Navigate`/`useNavigate` and plain `<img>` instead. Environment variables use Vite's convention: `import.meta.env.VITE_*` (not `process.env.NEXT_PUBLIC_*`), defined via `.env`/`.env.local` files, and must be prefixed `VITE_` to be exposed to client code.

## Commands
- `npm run dev` — Start Vite dev server
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview the production build locally
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  main.tsx          # Vite entry point (mounts <App /> in <BrowserRouter>)
  App.tsx           # React Router route definitions
  app/              # Route-level page components (one folder per route)
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

@docs/research/INSPECTION_GUIDE.md
