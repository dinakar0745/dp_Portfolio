import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import PageShell, { PageIntro } from "@/components/ui/PageShell";
import { card, cardInteractive, iconTile } from "@/components/ui/classes";
import { contact } from "@/content/home";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: contact.intro,
  path: "/contact",
});

const strip = (url: string) => url.replace(/^https:\/\/(www\.)?/, "");

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "GitHub", value: strip(site.github), href: site.github, Icon: Github },
  {
    label: "LinkedIn",
    value: strip(site.linkedin),
    href: site.linkedin,
    Icon: Linkedin,
  },
];

function Prompt({ command }: { command: string }) {
  return (
    <div className="flex gap-2">
      <span aria-hidden className="text-accent shrink-0">
        $
      </span>
      <span className="text-text-secondary">{command}</span>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro title="Contact" lead={contact.intro} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <ul className="space-y-3">
          {channels.map(({ label, value, href, Icon }, i) => {
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <Reveal when="mount" delay={0.1 + i * 0.06} depth>
                  <TiltCard max={4}>
                    <a
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="group block rounded-lg"
                    >
                      <div className={`${cardInteractive} flex items-center gap-4 p-4`}>
                        <div className={`${iconTile} p-2`}>
                          <Icon size={16} aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-text-secondary mb-0.5">
                            {label}
                          </p>
                          <p className="text-sm font-mono text-text-primary group-hover:text-accent transition-colors break-all">
                            {value}
                          </p>
                        </div>
                      </div>
                    </a>
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal when="mount" delay={0.2} depth>
          <div className={`${card} overflow-hidden h-full`}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-tertiary">
              <div aria-hidden className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs font-mono text-text-secondary ml-2 flex items-center gap-1.5">
                <Terminal size={11} aria-hidden /> {site.handle} — bash
              </span>
            </div>
            <div className="p-4 font-mono text-xs space-y-2">
              <Prompt command="whoami" />
              <p className="text-text-primary pl-4">{site.name.toLowerCase()}</p>

              <div className="pt-3">
                <Prompt command="cat role.txt" />
              </div>
              <div className="pl-4 space-y-0.5 text-text-secondary">
                {contact.role.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="pt-3">
                <Prompt command="cat interests.txt" />
              </div>
              <div className="pl-4 space-y-0.5 text-text-secondary">
                {contact.interests.map((line) => (
                  <p key={line}>- {line}</p>
                ))}
              </div>

              <div className="pt-3">
                <Prompt command="echo $AVAILABILITY" />
              </div>
              <p className="text-success pl-4">{contact.availability}</p>

              <div aria-hidden className="flex gap-2 pt-3">
                <span className="text-accent shrink-0">$</span>
                <span className="text-text-secondary motion-safe:animate-pulse">
                  ▌
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
