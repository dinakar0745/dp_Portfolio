import type { CaseStudy } from "@/content/types";
import wsiDetectionPlatform from "./wsi-detection-platform";
import nexusOs from "./nexus-os";
import documentAi from "./document-ai";
import projectflow from "./projectflow";
import aiforge from "./aiforge";
import awsWebserver from "./aws-webserver";
import fraudDetection from "./fraud-detection";
import sagemaker from "./sagemaker";

/** Every case study that has a page at /projects/<slug>. Add a file here and register it below. */
export const caseStudies: CaseStudy[] = [
  wsiDetectionPlatform,
  nexusOs,
  documentAi,
  projectflow,
  aiforge,
  awsWebserver,
  fraudDetection,
  sagemaker,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
