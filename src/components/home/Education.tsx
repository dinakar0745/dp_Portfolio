import { Award, GraduationCap, Network } from "lucide-react";
import BulletList from "@/components/ui/BulletList";
import Section from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { card, iconTile } from "@/components/ui/classes";
import { certifications, education, leadership } from "@/content/home";

export default function Education() {
  return (
    <Section title="Education & Credentials">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className={`${card} p-6`}>
          <div className="flex items-start gap-3 mb-4">
            <span className={`${iconTile} p-2 shrink-0`}>
              <GraduationCap size={16} aria-hidden />
            </span>
            <div>
              <h3 className="text-base font-semibold text-text-primary">
                {education.degree}
              </h3>
              <p className="text-sm text-accent font-mono mt-0.5">
                {education.school}{" "}
                <span className="text-text-secondary">· {education.period}</span>
              </p>
            </div>
          </div>
          <BulletList items={education.bullets} />
        </div>

        <div className={`${card} p-6`}>
          <div className="flex items-start gap-3 mb-4">
            <span className={`${iconTile} p-2 shrink-0`}>
              <Award size={16} aria-hidden />
            </span>
            <h3 className="text-base font-semibold text-text-primary pt-1.5">
              Certifications
            </h3>
          </div>
          <TagList tags={certifications} tone="inset" className="mb-6" />

          <div className="flex items-start gap-3 mb-3 pt-4 border-t border-border/60">
            <span className={`${iconTile} p-2 shrink-0`}>
              <Network size={16} aria-hidden />
            </span>
            <h3 className="text-base font-semibold text-text-primary pt-1.5">
              Leadership &amp; Community
            </h3>
          </div>
          <BulletList items={leadership} />
        </div>
      </div>
    </Section>
  );
}
