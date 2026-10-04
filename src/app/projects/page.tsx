import Reveal from "@/components/motion/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import PageShell, { PageIntro } from "@/components/ui/PageShell";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

const lead =
  "Systems and research tools I've built — medical imaging pipelines, agent infrastructure, local ML deployment, and the hardware they run on.";

export const metadata = pageMetadata({
  title: "Projects",
  description: lead,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageIntro title="Projects" lead={lead} />
      <div className="space-y-4">
        {projects.map((project, i) => (
          <Reveal key={project.title} when="mount" delay={i * 0.06} depth>
            <ProjectCard project={project} variant="row" headingLevel="h2" />
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
