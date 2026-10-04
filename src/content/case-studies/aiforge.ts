import type { CaseStudy } from "@/content/types";

const architecture = `
# AIForge Platform Architecture

┌──────────────────────────────────────────────────┐
│                  Frontend (React/Vite)            │
│                                                  │
│   Browse Models ──► Download ──► Run Locally     │
│   Publish Model ──► Upload  ──► Set Metadata     │
└────────────────────────┬─────────────────────────┘
                         │ REST API
                         ▼
┌──────────────────────────────────────────────────┐
│              Backend API (Django)                │
│                                                  │
│  Auth ──► Model Registry ──► Storage ──► Jobs   │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│  Model Hosting    │   │  File Storage        │
│  Server           │   │  (S3 / local)        │
│                   │   │                      │
│  Container each   │   │  .pkl, .pt, .onnx    │
│  model version    │   │  model weights       │
└───────────────────┘   └──────────────────────┘
            │
            ▼
┌───────────────────┐
│  Local Execution  │
│  Environment      │
│                   │
│  CLI / Python SDK │
│  Docker runner    │
└───────────────────┘
`;

const caseStudy: CaseStudy = {
  slug: "aiforge",
  title: "AIForge",
  lead:
    "An open platform for sharing, downloading, and running AI agents and machine learning models locally — a developer-first model marketplace.",
  tags: ["Django", "React", "Vite", "Docker", "REST API"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Problem",
      body:
        "The ML community lacks a unified, open platform where developers can publish models and users can discover and run them locally without vendor lock-in. Existing solutions either require cloud execution or lack a cohesive developer experience for model sharing and local deployment.",
    },
    {
      kind: "prose",
      heading: "Solution",
      body:
        "AIForge is designed as an open marketplace with a developer-first philosophy. Users can publish models with metadata, download them via CLI or SDK, and execute them locally inside isolated Docker containers:",
      points: [
        "Django REST backend with JWT authentication and model registry",
        "React/Vite frontend for browsing, searching, and publishing models",
        "Containerized model execution for isolation and reproducibility",
        "Python SDK for programmatic model discovery and local execution",
        "S3-compatible storage for model artifacts and versioning",
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
        { name: "Django", desc: "Backend API & ORM" },
        { name: "React + Vite", desc: "Frontend marketplace" },
        { name: "Docker", desc: "Model execution isolation" },
        { name: "PostgreSQL", desc: "Registry & user data" },
        { name: "Django REST", desc: "API framework" },
        { name: "S3", desc: "Model artifact storage" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
        {
          title: "Local Execution Isolation",
          desc: "Running arbitrary model code safely required containerization with resource limits and network isolation per execution.",
        },
        {
          title: "Model Format Diversity",
          desc: "Supporting .pt, .pkl, .onnx and other formats required a unified interface abstraction with format-specific runners.",
        },
        {
          title: "Dependency Management",
          desc: "Each model has unique Python dependencies. Solved by storing requirements.txt per model and building images on-demand.",
        },
      ],
    },
  ],
};

export default caseStudy;
