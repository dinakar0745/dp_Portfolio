import Section from "@/components/ui/Section";
import { wsi } from "@/content/home";
import PipelineSteps from "./PipelineSteps";

export default function WsiSystems() {
  return (
    <Section title="Systems I Work With">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            {wsi.title}
          </h3>
          <div className="space-y-4">
            {wsi.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm text-text-secondary leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <PipelineSteps steps={wsi.steps} />
      </div>
    </Section>
  );
}
