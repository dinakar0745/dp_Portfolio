import type { CaseStudy } from "@/content/types";

const architecture = `
# NEXUS OS

┌──────────────────────────────────────────────────┐
│            Bootable Linux Distribution           │
│                                                  │
│   base image ──► services ──► agent runtime      │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│                 FastAPI Server                   │
│                                                  │
│   /chat   /skills   /jobs   /health              │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│            ReAct Agent Orchestrator              │
│                                                  │
│   observe ──► think ──► act ──► observe ...      │
│                  │                               │
│                  ▼                               │
│           permission model gate                  │
│      (each skill call checked before run)        │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│  Skill Registry   │   │  Capability Modules  │
│                   │   │                      │
│  auto-discovery   │   │  vision · RAG        │
│  from skills/ dir │   │  scheduler           │
│  schema + docs    │   │  homelab monitoring  │
└───────────────────┘   └──────────────────────┘
`;

const caseStudy: CaseStudy = {
  slug: "nexus-os",
  title: "NEXUS OS",
  lead:
    "A bootable AI operating environment — a ReAct-style agent orchestrator with skill auto-discovery, a permission model, and a FastAPI server, shipped as a Linux distribution rather than an app.",
  tags: ["FastAPI", "Linux", "Agents", "RAG", "Vision"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Problem",
      body:
        "Agent frameworks generally assume they are a library inside someone else's application. That leaves the interesting parts — what the agent is allowed to touch, how new capabilities get registered, what happens on reboot — as the host application's problem. NEXUS OS inverts that: the agent runtime is the system, the machine boots into it, and skills and permissions are first-class parts of the environment rather than configuration passed in at call time.",
    },
    {
      kind: "prose",
      heading: "Approach",
      points: [
        "A ReAct-style orchestrator drives the observe → think → act loop, with each action routed through a permission gate before execution",
        "Skills are auto-discovered from disk: drop a module into the skills directory and its schema and documentation are registered without editing the orchestrator",
        "A FastAPI server exposes chat, skill listing, job control, and health endpoints, so the environment is drivable over HTTP as well as locally",
        "Capability modules extend the base loop with vision, retrieval-augmented generation, scheduling, and homelab monitoring",
        "The whole stack is packaged as a bootable Linux distribution so the environment is reproducible on bare metal or a VM",
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
        { name: "FastAPI", desc: "Server & agent API" },
        { name: "Python", desc: "Orchestrator & skills" },
        { name: "Linux", desc: "Bootable base image" },
        { name: "systemd", desc: "Service supervision" },
        { name: "RAG stack", desc: "Retrieval over local corpora" },
        { name: "Local LLM", desc: "Inference backend" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
        {
          title: "Permissions without paralysis",
          desc: "A gate on every action is only useful if it is granular enough to say yes safely. Skills declare what they touch, so the model can be scoped per capability rather than as a single all-or-nothing switch.",
        },
        {
          title: "Auto-discovery vs. predictability",
          desc: "Loading arbitrary modules from disk is convenient and fragile in equal measure. Skills are validated against a schema at registration, so a malformed one fails loudly at boot rather than mid-loop.",
        },
        {
          title: "Packaging a live system",
          desc: "Turning a running stack into a bootable image means pinning the model runtime, service ordering, and GPU drivers together — the pieces most likely to drift independently.",
        },
      ],
    },
  ],
};

export default caseStudy;
