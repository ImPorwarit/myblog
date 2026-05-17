# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

To use Webpack instead of the default Turbopack: `next dev --webpack` or `next build --webpack`.

## Next.js 16 breaking changes

This project uses **Next.js 16** — read `node_modules/next/dist/docs/` before writing any code. Key differences from older versions:

- **`next build` no longer runs the linter** — run `npm run lint` separately.
- **Turbopack is the default bundler** (not Webpack).
- **`next lint` is removed** — use `eslint` directly (already in scripts).
- The path alias `@/*` maps to the project root (`./*`), not `src/`.

## Architecture

This is a **Next.js App Router** blog + portfolio site with an **editorial design system** (warm cream/ink palette, terracotta `oklch` accent, serif display + mono labels). TypeScript; Tailwind CSS 4 is imported but the UI is driven by a hand-written semantic CSS system, not utilities.

- [app/layout.tsx](my-blog/app/layout.tsx) — Root layout: Source Serif / IBM Plex Sans / JetBrains Mono via `next/font` (exposed as `--font-serif|sans|mono`), site metadata, pre-paint theme script, wraps pages with `<Nav>` + `<Footer>`.
- [app/page.tsx](my-blog/app/page.tsx) — Home: hero, featured essay, recent rows, work preview, logbook.
- [app/blog/page.tsx](my-blog/app/blog/page.tsx) (filter chips via client `BlogList`) + [app/blog/\[slug\]/page.tsx](my-blog/app/blog/[slug]/page.tsx) — editorial post (drop-cap lede, pull quotes, reading progress).
- [app/work/page.tsx](my-blog/app/work/page.tsx) + [app/work/\[slug\]/page.tsx](my-blog/app/work/[slug]/page.tsx) — project grid + detail. [app/about/page.tsx](my-blog/app/about/page.tsx), [app/contact/page.tsx](my-blog/app/contact/page.tsx).
- Dynamic routes are SSG via `generateStaticParams`; `params` is a `Promise` in Next 16 — `await` it.
- [app/lib/site.ts](my-blog/app/lib/site.ts) — profile, projects (with detail fields), notes/timeline. [app/lib/posts.ts](my-blog/app/lib/posts.ts) — posts as typed `Block[]` (`lede`/`p`/`h2`/`pull`/`ul`), no markdown dep.
- [app/components/](my-blog/app/components/) — `Nav`, `ThemeToggle`, `BlogList`, `ContactForm` (client); `Footer`, `ImgSlot`, `ArticleRow`, `ProjectCard`, `ReadingProgress`.
- [app/globals.css](my-blog/app/globals.css) — design tokens on `:root` / `[data-theme="dark"]`, all semantic classes (`.hero`, `.article-row`, `.featured`, `.proj-card`, `.prose`, …).

**Content lives in `app/lib/`** — edit `site.ts` / `posts.ts` to change copy; no component changes needed.

Dark mode is **attribute-based** (`<html data-theme="dark">`), toggled by `ThemeToggle`, persisted in `localStorage`, and applied pre-paint by the inline script in the layout to avoid a flash.

File-system routing: add routes by creating `page.tsx` files under `app/`. Shared UI goes in layouts.

Server Components are the default — add `"use client"` only when you need browser APIs, event handlers, or React state/effects.
