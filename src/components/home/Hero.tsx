import { ArrowUpRight, Download, Github } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ExternalLink from "@/components/ui/ExternalLink";
import { buttonPrimary, buttonSecondary } from "@/components/ui/classes";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import SlidePyramid from "./SlidePyramid";

const step = 0.08;

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-36 pb-24">
      <div className="flex items-center justify-between gap-6">
        <div className="max-w-2xl min-w-0">
          <Reveal when="mount" className="mb-8">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-mono text-text-secondary bg-bg-secondary">
              <span
                aria-hidden
                className="w-1.5 h-1.5 shrink-0 rounded-full bg-success motion-safe:animate-pulse"
              />
              {hero.status}
            </p>
          </Reveal>

          <Reveal when="mount" delay={step}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-4">
              {site.name}
            </h1>
          </Reveal>

          <Reveal when="mount" delay={step * 2}>
            <p className="text-xl md:text-2xl text-accent font-mono mb-6">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal when="mount" delay={step * 3}>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal when="mount" delay={step * 4}>
            <p className="text-sm text-text-secondary leading-relaxed mb-10">
              {hero.body}
            </p>
          </Reveal>

          <Reveal when="mount" delay={step * 5} className="flex flex-wrap gap-3">
            <a href="#research" className={buttonPrimary}>
              View Research <ArrowUpRight size={15} aria-hidden />
            </a>
            <a href={site.resume} download className={buttonSecondary}>
              <Download size={15} aria-hidden /> Download CV
            </a>
            <ExternalLink href={site.github} className={buttonSecondary}>
              <Github size={15} aria-hidden /> GitHub
            </ExternalLink>
          </Reveal>
        </div>

        <SlidePyramid />
      </div>
    </section>
  );
}
