export type IconName =
  | "microscope"
  | "boxes"
  | "fileText"
  | "workflow"
  | "network"
  | "sprout"
  | "scanSearch"
  | "hardDrive"
  | "flaskConical";

export type Project = {
  /** Present when the project has a case study at /projects/<slug>. */
  slug?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: IconName;
  /** Shown in "Selected Projects" on the home page. */
  featured?: boolean;
  /** External links (paper, code) shown on the projects index. */
  links?: LinkItem[];
};

export type LinkItem = { label: string; href: string };

export type ResearchThread = {
  title: string;
  body: string;
  status: string;
  /** Marks finished work, so the status reads as done rather than pending. */
  published?: boolean;
  links?: LinkItem[];
};

export type Manuscript = {
  title: string;
  note: string;
  status: string;
  published?: boolean;
  href?: string;
};

export type CaseStudySection =
  | { kind: "prose"; heading: string; body?: string; points?: string[] }
  | { kind: "diagram"; heading: string }
  | { kind: "stack"; heading: string; items: { name: string; desc: string }[] }
  | {
      kind: "challenges";
      heading: string;
      items: { title: string; desc: string }[];
    };

export type CaseStudy = {
  slug: string;
  title: string;
  lead: string;
  tags: string[];
  /** ASCII architecture diagram, rendered by the "diagram" section. */
  architecture: string;
  sections: CaseStudySection[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  /** Display date, e.g. "Mar 2025". */
  date: string;
  /** ISO date used for the sitemap and article metadata. */
  isoDate: string;
};

export type Job = {
  role: string;
  org: string;
  orgNote: string;
  period: string;
  current: boolean;
  bullets: string[];
  tech: string[];
};
