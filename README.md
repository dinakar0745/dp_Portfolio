# dp.ntechx.dev

Personal site of Dinakar Pathakota. Next.js (App Router, static export), Tailwind CSS and Framer Motion.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server at http://localhost:3000 |
| `npm run build` | Static export into `out/` |
| `npm run start` | Serve the built `out/` folder |
| `npm run check` | Lint, typecheck and build — run before pushing |

## Where things live

```
src/
  app/            Routes. Pages are thin: they pull content and compose components.
  components/
    home/         Home page sections (Hero, Research, Experience, …)
    projects/     Project cards and case-study sections
    blog/         Post cards and MDX building blocks
    layout/       Navbar and footer
    motion/       Reveal, TiltCard, ScrollProgress — all animation lives here
    ui/           Tag, Section, PageShell and shared class strings
  content/        Everything you'd edit to change what the site says
  fonts/          Self-hosted Inter and JetBrains Mono (SIL OFL)
  lib/            Metadata helper
```

## Editing content

- **Home page text** (status line, research, experience, skills, education): `src/content/home.ts`
- **Name, links, email, resume path, nav**: `src/content/site.ts`
- **Add a project**: add an entry to `src/content/projects.ts`. Set `featured: true` to show it on the home page.
- **Add a case study**: create `src/content/case-studies/<slug>.ts`, register it in `src/content/case-studies/index.ts`, and give the project the same `slug`.
- **Add a blog post**: add an entry to `src/content/posts.ts` and write the body in `src/content/blog/<slug>.mdx`. Use `<Callout title="…">` for titled boxes.
- **Resume**: replace `public/utils/DinakarPathakota_Resume.pdf`.

## Motion

All animation respects the visitor's reduced-motion setting, and the 3D tilt only runs for mouse pointers. The hero's slide pyramid is plain CSS 3D transforms driven by Framer Motion — no WebGL.
