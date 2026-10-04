import type { CaseStudy } from "@/content/types";

const architecture = `
# AWS SageMaker Serverless Inference Architecture

┌─────────────────────────────────────────────────────┐
│                   ML Training Pipeline               │
│                                                      │
│  Dataset ──► Feature Eng ──► Model Train ──► S3     │
└─────────────────────────────┬───────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────┐
│              SageMaker Model Registry                │
│                                                      │
│  Model Artifacts  ──►  Registry  ──►  Versioning    │
└─────────────────────────────┬───────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────┐
│           Serverless Inference Endpoint              │
│                                                      │
│  API Request ──► Lambda ──► Container ──► Response  │
│                    │                                 │
│                    └──► Auto-scale (0 → N)           │
└─────────────────────────────────────────────────────┘
`;

const caseStudy: CaseStudy = {
  slug: "sagemaker",
  title: "Serverless ML Deployment using AWS SageMaker",
  lead:
    "Scalable architecture for deploying machine learning models using AWS SageMaker serverless inference endpoints with automated scaling.",
  tags: ["AWS", "SageMaker", "Python", "MLOps", "Serverless"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Problem",
      body:
        "Deploying ML models in production is expensive when using always-on instances. For workloads with variable or unpredictable traffic patterns, provisioning dedicated compute 24/7 results in significant idle costs. The challenge was to design a deployment architecture that scales to zero during inactivity while maintaining acceptable cold-start latency for inference requests.",
    },
    {
      kind: "prose",
      heading: "Solution",
      body:
        "Leveraged AWS SageMaker's serverless inference capability to deploy containerized ML models that spin up on demand. The architecture includes:",
      points: [
        "SageMaker Model Registry for versioned model artifact management",
        "Serverless endpoint configuration with memory and concurrency tuning",
        "S3-backed model artifact storage with lifecycle policies",
        "CloudWatch monitoring for latency and invocation metrics",
        "CI/CD pipeline for automated model retraining and deployment",
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
        { name: "AWS SageMaker", desc: "Model hosting & inference" },
        { name: "S3", desc: "Model artifact storage" },
        { name: "Python", desc: "Training & pipeline scripts" },
        { name: "boto3", desc: "AWS SDK for Python" },
        { name: "Docker", desc: "Model container packaging" },
        { name: "CloudWatch", desc: "Monitoring & alerting" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
        {
          title: "Cold Start Latency",
          desc: "Serverless containers have initialization overhead. Mitigated by optimizing container image size and pre-loading model weights.",
        },
        {
          title: "Memory Configuration",
          desc: "Tuning memory allocation for the right latency/cost tradeoff required profiling across multiple model sizes.",
        },
        {
          title: "Payload Limits",
          desc: "SageMaker serverless has a 6MB payload limit. Handled large inference inputs by streaming through S3 presigned URLs.",
        },
      ],
    },
  ],
};

export default caseStudy;
