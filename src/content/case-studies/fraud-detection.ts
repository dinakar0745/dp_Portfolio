import type { CaseStudy } from "@/content/types";

const architecture = `
# Fraud Detection Pipeline Architecture

Raw Transactions
      │
      ▼
┌─────────────────┐
│  Data Ingestion │  ← Kafka / CSV batch
│  & Validation   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Feature Eng   │  ← Time windows, velocity,
│   Layer         │    user behavior features
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Model Ensemble │  ← Isolation Forest +
│  (Anomaly Det.) │    Gradient Boosting
└────────┬────────┘
         │
      ┌──┴──┐
      │     │
   fraud  legit
      │
      ▼
┌─────────────────┐
│  Fraud Alert    │  ← REST API response
│  API            │    + alerting pipeline
└─────────────────┘
`;

const caseStudy: CaseStudy = {
  slug: "fraud-detection",
  title: "Fraud Detection System",
  lead:
    "End-to-end ML pipeline for detecting fraudulent financial transactions using anomaly detection and feature engineering.",
  tags: ["Python", "scikit-learn", "FastAPI", "PostgreSQL", "Pandas"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Problem",
      body:
        "Financial fraud detection requires identifying rare, anomalous transactions in highly imbalanced datasets where fraudulent events represent less than 0.5% of all transactions. Traditional rule-based systems fail to adapt to evolving fraud patterns, requiring a more intelligent, data-driven approach.",
    },
    {
      kind: "prose",
      heading: "Solution",
      body:
        "Built a multi-stage pipeline combining unsupervised anomaly detection with supervised classification, designed to handle real-time transaction scoring:",
      points: [
        "Temporal feature extraction: rolling transaction velocity, time-of-day patterns",
        "Behavioral features: deviation from user spending baseline",
        "Ensemble model combining Isolation Forest and Gradient Boosting",
        "SMOTE oversampling to handle severe class imbalance",
        "FastAPI inference endpoint with sub-50ms p99 latency",
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
        { name: "scikit-learn", desc: "ML models" },
        { name: "FastAPI", desc: "Inference API" },
        { name: "PostgreSQL", desc: "Transaction storage" },
        { name: "Pandas", desc: "Feature engineering" },
        { name: "imbalanced-learn", desc: "SMOTE sampling" },
        { name: "Docker", desc: "Service packaging" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
        {
          title: "Class Imbalance",
          desc: "Fraud cases were < 0.5% of data. Applied SMOTE, adjusted class weights, and used precision-recall AUC as primary metric.",
        },
        {
          title: "Feature Drift",
          desc: "Fraud patterns evolve over time. Implemented periodic model retraining triggered by distribution shift monitoring.",
        },
        {
          title: "Latency Requirements",
          desc: "Real-time scoring required sub-50ms response. Achieved through model quantization and feature precomputation.",
        },
      ],
    },
  ],
};

export default caseStudy;
