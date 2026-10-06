import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import ExternalLink from "@/components/ui/ExternalLink";
import { TagList } from "@/components/ui/Tag";
import { card, cardInteractive, iconTile } from "@/components/ui/classes";
import type { Project } from "@/content/types";
import ProjectIcon from "./ProjectIcon";

type ProjectCardProps = {
  project: Project;
  /** "tile" is the compact home-page card; "row" is the full-width index card. */
  variant?: "tile" | "row";
  /** Heading level for the project title, to keep the page outline correct. */
  headingLevel?: "h2" | "h3";
};

function Tile({ project, headingLevel: Heading = "h3" }: ProjectCardProps) {
  return (
    <div
      className={`${cardInteractive} p-5 h-full flex flex-col [transform-style:preserve-3d]`}
    >
      <div className="flex items-start justify-between mb-3 lift-2">
        <div className={`${iconTile} p-2`}>
          <ProjectIcon name={project.icon} size={18} />
        </div>
        <ArrowUpRight
          size={14}
          aria-hidden
          className="text-text-secondary group-hover:text-accent transition-colors"
        />
      </div>
      <Heading className="text-sm font-semibold text-text-primary mb-0.5 lift-1">
        {project.title}
      </Heading>
      <p className="text-xs font-mono text-accent mb-2 lift-1">
        {project.subtitle}
      </p>
      <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">
        {project.description}
      </p>
      <TagList tags={project.tags} size="sm" />
    </div>
  );
}

function Row({ project, headingLevel: Heading = "h2" }: ProjectCardProps) {
  const linked = Boolean(project.slug);
  return (
    <div
      className={`${linked ? cardInteractive : card} p-6 [transform-style:preserve-3d]`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className={`${iconTile} p-2.5 shrink-0 lift-2`}>
            <ProjectIcon name={project.icon} />
          </div>
          <div className="flex-1 min-w-0">
            <Heading className="text-base font-semibold text-text-primary mb-0.5 group-hover:text-accent transition-colors">
              {project.title}
            </Heading>
            <p className="text-xs font-mono text-accent mb-3">
              {project.subtitle}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {project.description}
            </p>
            <TagList tags={project.tags} />
            {project.links && (
              <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                {project.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    className="text-xs font-mono text-accent inline-flex items-center gap-1 hover:underline"
                  >
                    {link.label} <ArrowUpRight size={12} aria-hidden />
                  </ExternalLink>
                ))}
              </p>
            )}
            {linked && (
              <p className="text-xs font-mono text-accent mt-4 inline-flex items-center gap-1">
                Read case study <ArrowUpRight size={12} aria-hidden />
              </p>
            )}
          </div>
        </div>
        {linked && (
          <ArrowUpRight
            size={16}
            aria-hidden
            className="text-text-secondary group-hover:text-accent transition-colors shrink-0 mt-1"
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project, variant = "row" } = props;
  const body = variant === "tile" ? <Tile {...props} /> : <Row {...props} />;

  if (!project.slug) return body;

  return (
    <TiltCard className="h-full" max={variant === "tile" ? 6 : 2.5}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block h-full rounded-lg [transform-style:preserve-3d]"
      >
        {body}
      </Link>
    </TiltCard>
  );
}
