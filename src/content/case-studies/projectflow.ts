import type { CaseStudy } from "@/content/types";

const architecture = `
# ProjectFlow

┌──────────────────────────────────────────────────┐
│                Frontend (Next.js)                │
│                                                  │
│   Projects ──► Boards ──► Tasks ──► Activity     │
└────────────────────────┬─────────────────────────┘
                         │ REST
                         ▼
┌──────────────────────────────────────────────────┐
│                Backend (FastAPI)                 │
│                                                  │
│   OTP auth ──► sessions ──► RBAC ──► handlers    │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│   PostgreSQL      │   │   Email (OTP)        │
│                   │   │                      │
│  Alembic-managed  │   │  one-time codes      │
│  schema history   │   │  short TTL           │
└───────────────────┘   └──────────────────────┘

            ── deployment path ──

   push ──► GitHub Actions ──► build ──► VM
              tests + image        docker compose up
`;

const caseStudy: CaseStudy = {
  slug: "projectflow",
  title: "ProjectFlow",
  lead:
    "A self-hosted project tracker built and shipped at Systems Group — OTP email authentication, Alembic-managed migrations, GitHub Actions CI, and VM deployment.",
  tags: ["FastAPI", "PostgreSQL", "Next.js", "Docker", "GitHub Actions"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Context",
      body:
        "Systems Group needed project tracking for internal teams and for client work, on infrastructure it controlled. Hosted trackers were ruled out on data-residency grounds, and the usual self-hosted options carried more surface area than the teams would use. ProjectFlow is the narrower thing: the tracking model the organisation actually works in, deployed to its own VM, with a migration and CI story that makes it maintainable by one engineer.",
    },
    {
      kind: "prose",
      heading: "What It Does",
      points: [
        "Passwordless sign-in by one-time code sent to email, with short-TTL codes and server-side sessions",
        "Projects, boards, and tasks with assignment, status transitions, and an activity trail",
        "FastAPI backend over PostgreSQL, with the schema history managed end-to-end by Alembic migrations",
        "Next.js frontend served alongside the API",
        "GitHub Actions pipeline running tests and building the image on every push, deploying to a VM via Docker",
      ],
    },
    {
      kind: "diagram",
      heading: "Architecture",
    },
    {
      kind: "stack",
      heading: "Tech Stack",
      items: [
        { name: "FastAPI", desc: "Backend API" },
        { name: "PostgreSQL", desc: "Primary datastore" },
        { name: "Alembic", desc: "Schema migrations" },
        { name: "Next.js", desc: "Frontend application" },
        { name: "Docker", desc: "Packaging & deployment" },
        { name: "GitHub Actions", desc: "CI and release pipeline" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
        {
          title: "OTP as the only auth path",
          desc: "Dropping passwords removes a class of problems and adds another: code replay, delivery latency, and users requesting codes in a loop. Short TTLs, single-use codes, and rate limiting per address cover the practical cases.",
        },
        {
          title: "Migrations on a live deployment",
          desc: "Schema changes had to be applied to a running instance without a maintenance window, which meant keeping Alembic revisions additive and ordering deploys so the new code tolerates the old schema.",
        },
        {
          title: "One-engineer maintainability",
          desc: "CI is the substitute for a second pair of eyes. Every push runs the test suite and builds the deployable image, so the only manual step left is the deploy itself.",
        },
      ],
    },
  ],
};

export default caseStudy;
