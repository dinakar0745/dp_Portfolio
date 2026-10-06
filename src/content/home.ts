import type { Job, Manuscript, ResearchThread } from "./types";

export const hero = {
  status: "Independent research in computational pathology",
  intro:
    "Building deep-learning systems and large-scale image pipelines for digital pathology.",
  body: "I work on whole-slide image analysis and the infrastructure that makes it run — GPU-accelerated ML systems, gigapixel image pipelines, and graph neural networks. My long-term interest is building clinically useful, deployable models for digital pathology.",
};

/** The published report — one place for its title and links. */
export const paper = {
  title:
    "Is It the Encoder or the Probe? Acquisition-Artifact Robustness of Pathology Foundation Models",
  venue: "Zenodo technical report",
  date: "Oct 2026",
  doi: "10.5281/zenodo.23162508",
  url: "https://doi.org/10.5281/zenodo.23162508",
  code: "https://github.com/dinakar0745/encoder-or-probe",
};

export const research: {
  title: string;
  subtitle: string;
  period: string;
  threads: ResearchThread[];
} = {
  title: "Independent Research — Computational Pathology",
  subtitle:
    "Self-directed program building toward doctoral work in medical-imaging ML",
  period: "2026 — Present",
  threads: [
    {
      title: "Is it the encoder or the probe?",
      body: "How much of a pathology foundation model's accuracy loss under blur, JPEG compression, and stain shift belongs to the frozen encoder, and how much to the linear probe. Across Phikon, Phikon-v2, Kaiko ViT-B/16, and DINOv2-L on NCT-CRC-HE and PatchCamelyon, a probe trained on a mix of clean and degraded embeddings recovers most of the loss — Phikon-v2 at JPEG quality 15 goes from 76.3% to 92.5% balanced accuracy — and changes which encoder looks most robust.",
      status: "Published · Zenodo technical report, Oct 2026",
      published: true,
      links: [
        { label: "Paper", href: paper.url },
        { label: "Code", href: paper.code },
      ],
    },
    {
      title: "WSI inference platform",
      body: "Running detection models over gigapixel slides — tumour-cell and mitotic-figure detection — covering slide ingestion, tiling, model execution, and region-level result aggregation.",
      status: "In progress",
    },
    {
      title: "Lymph-node metastasis detection (CAMELYON)",
      body: "A deep-learning study on metastasis detection in whole-slide images from the CAMELYON dataset, targeting a preprint.",
      status: "Targeting preprint",
    },
    {
      title: "Vertical WSI/ML for veterinary & toxicologic pathology",
      body: "A technical and market brief on preclinical, non-regulated pathology — gigapixel imaging demands comparable to the clinical setting, with far lower regulatory friction. Moving from scoping into implementation.",
      status: "Scoping → build",
    },
  ],
};

export const venture = {
  title: "NTechX",
  role: "Founder",
  roleNote: "(applied research in AI/ML and security)",
  bullets: [
    "Led the venture end-to-end: research direction, model development, and technical execution",
  ],
};

export const manuscripts: Manuscript[] = [
  {
    title: paper.title,
    note: `${paper.venue}, ${paper.date} · sole author · DOI ${paper.doi}`,
    status: "published",
    published: true,
    href: paper.url,
  },
  {
    title:
      "Deep-learning detection of lymph-node metastases on whole-slide images (CAMELYON)",
    note: "Study in progress",
    status: "ongoing",
  },
];

export const experience: Job[] = [
  {
    role: "Software Development Engineer",
    org: "Systems Group",
    orgNote: "Hyderabad, India",
    period: "Jun 2026 — Sep 2026",
    current: false,
    bullets: [
      "Built scalable internal applications and backend systems; shipped production services with FastAPI, PostgreSQL, and Docker",
      "Delivered ProjectFlow, a self-hosted project tracker (FastAPI + PostgreSQL + Next.js) with OTP email auth, Alembic migrations, GitHub Actions CI, and VM deployment",
      "Built in-house software for the parent company, Saridena Constructions, alongside customized tools for client requirements",
    ],
    tech: ["FastAPI", "PostgreSQL", "Docker", "Next.js", "GitHub Actions"],
  },
  {
    role: "Engineering Intern — Whole-Slide Imaging Pipelines",
    org: "Evident Microscopy",
    orgNote: "formerly Pramana.ai",
    period: "May 2025 — May 2026",
    current: false,
    bullets: [
      "Engineered DICOM-based ingestion and processing pipelines for gigapixel whole-slide histopathology images, supporting both sparse and fully-tiled acquisition modes",
      "Built GPU assignment and scheduling scripts to distribute tile-processing workloads across devices, improving throughput on large slide volumes",
      "Designed RabbitMQ message routing across Python microservices to coordinate acquisition, tiling, and downstream image-processing stages",
      "Contributed C++ acquisition modules interfacing with microscopy hardware, integrated into the end-to-end imaging pipeline",
    ],
    tech: ["Python", "C++", "DICOM", "RabbitMQ", "GPU Scheduling", "Linux"],
  },
];

export const wsi = {
  title: "Whole-Slide Imaging Pipelines",
  paragraphs: [
    "WSI scanners capture pathology images that routinely exceed gigapixel resolution. Nothing about them fits in memory, so the work is in the pipeline: DICOM ingestion, tiling into pyramid levels, and distributing tile workloads across GPUs.",
    "On top of that sits inference — detection models scoring individual tiles, then aggregation back up to slide- and region-level results a pathologist can actually read.",
  ],
  steps: [
    "Slide ingestion (DICOM)",
    "Tiling & pyramid build",
    "GPU assignment",
    "Model inference",
    "Region aggregation",
    "Storage & retrieval",
  ],
};

export const skills = [
  {
    category: "ML & Research",
    items: ["Deep learning", "Graph neural nets", "RAG", "Agent orchestration"],
  },
  {
    category: "Medical Imaging",
    items: [
      "WSI / gigapixel",
      "DICOM",
      "Image tiling",
      "Object detection",
      "Dataset curation",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "TypeScript", "SQL"],
  },
  {
    category: "Systems",
    items: [
      "Docker",
      "FastAPI",
      "PostgreSQL",
      "RabbitMQ",
      "Linux / systemd",
      "GitHub Actions",
    ],
  },
  {
    category: "Cloud & Compute",
    items: ["AWS", "GCP", "Azure", "GPU compute", "Distributed inference"],
  },
];

export const education = {
  degree: "B.Tech (Honors), Computer Science & Engineering",
  school: "KL University, Hyderabad",
  period: "2022 — 2026",
  bullets: [
    "First Class with Distinction — CGPA 8.86 / 10, 202.5 credits. Graduated April 2026",
    "Specialization in Cyber Security & Blockchain",
    "Coursework: machine learning, DSA, computer vision & image processing, distributed systems, cryptography & security",
  ],
};

export const certifications = [
  "AWS Certified Cloud Practitioner (CLF-C02)",
  "Microsoft Certified: Azure Fundamentals",
  "Google Associate Cloud Engineer",
  "Automation Anywhere Certified Advanced RPA Professional",
  "GitHub Foundations",
];

export const leadership = [
  "Head, Cybersecurity Club — KL University",
  "Founder, NTechX — AI/ML and cybersecurity venture",
  "Founder / organizer, 00:00 (Zero Hundred Hours) — youth entrepreneurship community",
  "Two-time hackathon winner",
];

export const contact = {
  intro:
    "Open to research collaborations, doctoral opportunities in medical-imaging ML, and interesting engineering conversations.",
  role: [
    "independent research — computational pathology",
    "prev. software development engineer @ systems group",
  ],
  interests: [
    "Computational pathology & WSI analysis",
    "Deep learning for medical imaging",
    "Large-scale image pipelines",
    "GPU-accelerated ML systems",
    "Graph neural networks",
  ],
  availability: "open to research collaboration",
};
