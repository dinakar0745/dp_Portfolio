import Reveal from "@/components/motion/Reveal";
import Eyebrow from "./Eyebrow";

type SectionProps = {
  title: string;
  id?: string;
  /** Optional link or control shown opposite the title. */
  action?: React.ReactNode;
  children: React.ReactNode;
};

/** A titled band of the home page. */
export default function Section({ title, id, action, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className="max-w-5xl mx-auto px-6 py-16 border-t border-border/40 scroll-mt-16"
    >
      <Reveal>
        <div className="flex items-center justify-between mb-8">
          <Eyebrow className="">{title}</Eyebrow>
          {action}
        </div>
        {children}
      </Reveal>
    </section>
  );
}
