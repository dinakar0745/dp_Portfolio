import type { CaseStudy } from "@/content/types";

const architecture = `
# AWS Web Server Deployment Architecture

┌──────────────────────────────────────────────────┐
│                    VPC (10.0.0.0/16)             │
│                                                  │
│  ┌────────────────┐    ┌─────────────────────┐  │
│  │  Public Subnet │    │  Private Subnet     │  │
│  │  10.0.1.0/24  │    │  10.0.2.0/24        │  │
│  │                │    │                     │  │
│  │  Internet GW  │    │  App Servers        │  │
│  │  Bastion Host │    │  RDS (optional)     │  │
│  │  Load Balancer│    │                     │  │
│  └───────┬────────┘    └──────────┬──────────┘  │
│          │                        │              │
│          └────────────────────────┘              │
└──────────────────────────────────────────────────┘
            │
            ▼
  ┌─────────────────┐
  │  Security Groups │
  │                 │
  │  SSH: 22 (Bastion only)
  │  HTTP: 80 (ALB)
  │  HTTPS: 443 (ALB)
  │  App: 8080 (internal)
  └─────────────────┘
            │
            ▼
  ┌─────────────────┐
  │  EC2 Instances  │
  │                 │
  │  User Data script → nginx install
  │  Auto-configure → app deploy
  └─────────────────┘
`;

const caseStudy: CaseStudy = {
  slug: "aws-webserver",
  title: "Automated Web Server Deployment on AWS",
  lead:
    "Automated infrastructure setup for deploying web servers on AWS EC2 with secure VPC architecture and scalable configuration.",
  tags: ["AWS", "EC2", "VPC", "Bash", "Infrastructure"],
  architecture,
  sections: [
    {
      kind: "prose",
      heading: "Problem",
      body:
        "Manual AWS infrastructure setup is error-prone, inconsistent, and not reproducible. Developers often click through the console to set up VPCs, subnets, security groups, and EC2 instances — producing environments that can't be reliably recreated or version-controlled.",
    },
    {
      kind: "prose",
      heading: "Solution",
      body:
        "Scripted the complete infrastructure provisioning using the AWS CLI and Bash, creating a fully automated, repeatable deployment pipeline:",
      points: [
        "VPC creation with public/private subnet segmentation",
        "Internet Gateway and route table configuration",
        "Security group rules following least-privilege principle",
        "EC2 launch with user-data scripts for nginx/app setup",
        "Bastion host configuration for secure SSH access",
        "Optional Auto Scaling Group integration",
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
        { name: "AWS CLI", desc: "Infrastructure provisioning" },
        { name: "EC2", desc: "Compute instances" },
        { name: "VPC", desc: "Network isolation" },
        { name: "Bash", desc: "Automation scripts" },
        { name: "nginx", desc: "Web server" },
        { name: "IAM", desc: "Roles & permissions" },
      ],
    },
    {
      kind: "challenges",
      heading: "Challenges",
      items: [
        {
          title: "Idempotency",
          desc: "Scripts needed to be safe to re-run. Implemented checks for existing resources before creation to avoid duplicates.",
        },
        {
          title: "Security Group Ordering",
          desc: "AWS security groups have dependency constraints. Solved by ordering creation and using references rather than hardcoded IDs.",
        },
        {
          title: "User Data Debugging",
          desc: "EC2 user-data scripts fail silently. Integrated CloudWatch log streaming for bootstrap script output.",
        },
      ],
    },
  ],
};

export default caseStudy;
