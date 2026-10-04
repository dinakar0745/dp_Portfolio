import type { CaseStudy } from "@/content/types";

const architecture = `
# Local Document-AI Extraction Pipeline

┌──────────────────────────────────────────────────┐
│                 Document Intake                  │
│                                                  │
│   scanned PDF ──► page split ──► classify        │
│                 (text layer? / image only?)      │
└───────────┬──────────────────────┬───────────────┘
            │ has text layer       │ image only
            ▼                      ▼
┌───────────────────┐   ┌──────────────────────┐
│   pdfplumber      │   │  Tesseract OCR       │
│                   │   │                      │
│  words + boxes    │   │  words + boxes       │
│  table regions    │   │  confidence scores   │
└───────────┬───────┘   └──────────┬───────────┘
            └──────────┬───────────┘
                       ▼
┌──────────────────────────────────────────────────┐
│           Local LLM Extraction (Ollama)          │
│                                                  │
│   layout text ──► schema-constrained JSON        │
│   line items · totals · dates · parties          │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│             Canonical Item Matching              │
│                                                  │
│   raw description ──► normalise ──► catalog id   │
│   fuzzy + alias table for known variants         │
└────────────────────────┬─────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────┐
│              Comparison Dashboard                │
│                                                  │
│   doc A vs doc B ──► per-item deltas             │
│   flag: missing · price drift · qty mismatch     │
└──────────────────────────────────────────────────┘

   ── everything above runs on one GPU workstation ──
              no document leaves the machine
`;

const caseStudy: CaseStudy = {
  slug: "document-ai",
  title: "Local Document-AI Extraction Pipeline",
  lead:
    "An on-premises pipeline for structured extraction from scanned documents, with canonical item matching and a comparison dashboard — running fully locally on a GPU workstation.",
  tags: ["pdfplumber", "Tesseract", "Ollama", "Python", "On-Prem"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Problem",
      body:
        "The documents worth extracting structure from — quotes, invoices, procurement paperwork — tend to be exactly the ones an organisation will not send to a hosted API. They also tend to arrive as scans, so there is no text layer to parse, and the same item appears under a different description in every document. The pipeline had to solve all three at once: stay on-premises, handle image-only input, and reconcile descriptions across documents well enough to compare them line by line.",
    },
    {
      kind: "prose",
      heading: "Approach",
      points: [
        "Intake classifies each page by whether it carries a usable text layer, routing to pdfplumber or Tesseract accordingly rather than OCR-ing everything",
        "Both paths converge on the same representation — words with bounding boxes — so downstream stages do not care where the text came from",
        "A local LLM served via Ollama turns layout-aware text into schema-constrained JSON: line items, totals, dates, and parties",
        "Canonical matching normalises free-text item descriptions against a catalog, using an alias table for known variants and fuzzy matching for the rest",
        "A comparison dashboard diffs two documents item by item and flags missing entries, price drift, and quantity mismatches",
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
        { name: "pdfplumber", desc: "Text-layer & table extraction" },
        { name: "Tesseract", desc: "OCR for scanned pages" },
        { name: "Ollama", desc: "Local LLM serving" },
        { name: "Python", desc: "Pipeline orchestration" },
        { name: "GPU workstation", desc: "Inference host" },
        { name: "Dashboard", desc: "Document comparison UI" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
        {
          title: "OCR noise reaching the model",
          desc: "A misread digit in a quantity column is indistinguishable from a correct one downstream. Confidence scores are carried through to extraction so low-confidence fields can be flagged rather than silently trusted.",
        },
        {
          title: "Getting structured output from a local model",
          desc: "Smaller local models drift from a requested JSON shape more readily than hosted ones. Schema-constrained decoding plus a validation-and-retry step keeps output parseable without a larger model.",
        },
        {
          title: "Same item, different words",
          desc: "Item descriptions vary by vendor, abbreviation, and typo. An alias table handles the recurring cases and fuzzy matching covers the tail, with unmatched items surfaced for review instead of dropped.",
        },
        {
          title: "Staying inside the machine",
          desc: "Every stage — OCR, inference, storage — had to run locally, which meant sizing the model to the available GPU rather than to the task, and accepting the accuracy trade that comes with it.",
        },
      ],
    },
  ],
};

export default caseStudy;
