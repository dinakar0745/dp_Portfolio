import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/ui/Section";
import { featuredProjects } from "@/content/projects";

export default function SelectedProjects() {
  return (
    <Section
      title="Selected Projects"
      action={
        <Link
          href="/projects"
          className="text-xs text-accent hover:underline flex items-center gap-1 py-2"
        >
          All projects <ArrowUpRight size={12} aria-hidden />
        </Link>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.07} depth className="h-full">
            <ProjectCard project={project} variant="tile" headingLevel="h3" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
