import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import { card } from "@/components/ui/classes";
import { skills } from "@/content/home";

export default function Skills() {
  return (
    <Section title="Technical Skills">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06} depth className="h-full">
            <div className={`${card} p-4 h-full`}>
              <h3 className="text-xs font-mono text-accent mb-3">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-xs text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
