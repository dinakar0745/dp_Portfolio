import Reveal from "@/components/motion/Reveal";
import BulletList from "@/components/ui/BulletList";
import Section from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { card } from "@/components/ui/classes";
import { experience } from "@/content/home";

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.08} depth>
            <article
              className={`${card} p-6 hover:border-accent/30 transition-colors`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {job.role}
                  </h3>
                  <p className="text-sm text-accent font-mono mt-0.5">
                    {job.org}{" "}
                    <span className="text-text-secondary">({job.orgNote})</span>
                  </p>
                </div>
                <span
                  className={`text-xs font-mono border border-border rounded px-2 py-1 self-start whitespace-nowrap ${
                    job.current ? "text-success" : "text-text-secondary"
                  }`}
                >
                  {job.period}
                </span>
              </div>

              <BulletList items={job.bullets} className="space-y-1.5 mb-5" />
              <TagList tags={job.tech} tone="inset" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
