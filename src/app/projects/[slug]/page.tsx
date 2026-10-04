import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Github } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CaseStudySection from "@/components/projects/CaseStudySection";
import ExternalLink from "@/components/ui/ExternalLink";
import PageShell from "@/components/ui/PageShell";
import { TagList } from "@/components/ui/Tag";
import { buttonSecondary } from "@/components/ui/classes";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.lead,
    path: `/projects/${study.slug}`,
    type: "article",
    tags: study.tags,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  return (
    <PageShell width="wide" back={{ href: "/projects", label: "Back to projects" }}>
      <Reveal when="mount" className="mb-10">
        <TagList tags={study.tags} tone="raised" className="mb-4" />
        <h1 className="text-3xl font-bold text-text-primary mb-3">
          {study.title}
        </h1>
        <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
          {study.lead}
        </p>
      </Reveal>

      <div className="space-y-10">
        {study.sections.map((section, i) => (
          <Reveal key={section.heading} when={i < 2 ? "mount" : "view"} delay={i < 2 ? 0.1 + i * 0.08 : 0}>
            <CaseStudySection section={section} study={study} />
          </Reveal>
        ))}

        <ExternalLink href={site.github} className={buttonSecondary}>
          <Github size={15} aria-hidden /> View on GitHub
        </ExternalLink>
      </div>
    </PageShell>
  );
}
