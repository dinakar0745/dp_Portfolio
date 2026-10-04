import BulletList from "@/components/ui/BulletList";
import Eyebrow from "@/components/ui/Eyebrow";
import { card } from "@/components/ui/classes";
import type { CaseStudy, CaseStudySection as SectionData } from "@/content/types";

function Body({
  section,
  architecture,
}: {
  section: SectionData;
  architecture: string;
}) {
  switch (section.kind) {
    case "prose":
      return (
        <div className={`${card} p-5`}>
          {section.body && (
            <p
              className={`text-sm text-text-secondary leading-relaxed ${
                section.points ? "mb-4" : ""
              }`}
            >
              {section.body}
            </p>
          )}
          {section.points && (
            <BulletList items={section.points} className="space-y-2" />
          )}
        </div>
      );
    case "diagram":
      return (
        <pre
          tabIndex={0}
          aria-label="Architecture diagram"
          className="text-xs leading-relaxed overflow-x-auto"
        >
          {architecture}
        </pre>
      );
    case "stack":
      return (
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {section.items.map((item) => (
            <div
              key={item.name}
              className="border border-border rounded p-3 bg-bg-secondary"
            >
              <dt className="text-xs font-mono text-accent mb-1">{item.name}</dt>
              <dd className="text-xs text-text-secondary">{item.desc}</dd>
            </div>
          ))}
        </dl>
      );
    case "challenges":
      return (
        <div className="space-y-3">
          {section.items.map((item) => (
            <div key={item.title} className={`${card} p-4`}>
              <h3 className="text-sm font-medium text-text-primary mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      );
  }
}

export default function CaseStudySection({
  section,
  study,
}: {
  section: SectionData;
  study: CaseStudy;
}) {
  return (
    <section>
      <Eyebrow>{section.heading}</Eyebrow>
      <Body section={section} architecture={study.architecture} />
    </section>
  );
}
