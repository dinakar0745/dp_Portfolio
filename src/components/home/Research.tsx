import { ArrowUpRight, FileText } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import BulletList from "@/components/ui/BulletList";
import ExternalLink from "@/components/ui/ExternalLink";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import { card } from "@/components/ui/classes";
import { manuscripts, research, venture } from "@/content/home";

export default function Research() {
  return (
    <Section id="research" title="Research">
      <div className={`${card} p-6 mb-4`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-semibold text-text-primary">
              {research.title}
            </h3>
            <p className="text-sm text-accent font-mono mt-0.5">
              {research.subtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-text-secondary border border-border rounded px-2 py-1 self-start whitespace-nowrap">
            {research.period}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {research.threads.map((thread, i) => (
            <Reveal key={thread.title} delay={i * 0.06} depth className="h-full">
              <div className="border border-border rounded p-4 bg-bg h-full flex flex-col">
                <h4 className="text-sm font-medium text-text-primary mb-2">
                  {thread.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-3 flex-1">
                  {thread.body}
                </p>
                <span
                  className={`text-xs font-mono ${thread.published ? "text-success" : "text-accent"}`}
                >
                  {thread.status}
                </span>
                {thread.links && (
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {thread.links.map((link) => (
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className={`${card} p-6`}>
        <div className="mb-4">
          <h3 className="text-base font-semibold text-text-primary">
            {venture.title}
          </h3>
          <p className="text-sm text-accent font-mono mt-0.5">
            {venture.role}{" "}
            <span className="text-text-secondary">{venture.roleNote}</span>
          </p>
        </div>
        <BulletList items={venture.bullets} />
      </div>

      <div className="mt-8">
        <Eyebrow as="h3">Manuscripts &amp; Research Output</Eyebrow>
        <ul className="space-y-2">
          {manuscripts.map((m) => (
            <li
              key={m.title}
              className={`${card} p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2`}
            >
              <div className="flex items-start gap-3">
                <FileText
                  size={15}
                  aria-hidden
                  className="text-accent mt-0.5 shrink-0"
                />
                <div>
                  {m.href ? (
                    <ExternalLink
                      href={m.href}
                      className="text-sm text-text-primary hover:text-accent transition-colors"
                    >
                      {m.title}
                    </ExternalLink>
                  ) : (
                    <p className="text-sm text-text-primary">{m.title}</p>
                  )}
                  <p className="text-xs text-text-secondary mt-0.5">{m.note}</p>
                </div>
              </div>
              <span
                className={`text-xs font-mono ${m.published ? "text-success" : "text-warning"} border border-border rounded px-2 py-1 self-start whitespace-nowrap`}
              >
                {m.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
