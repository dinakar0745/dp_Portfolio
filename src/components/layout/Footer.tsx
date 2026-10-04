import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import ExternalLink from "@/components/ui/ExternalLink";
import { site } from "@/content/site";

const linkClass =
  "inline-flex items-center gap-1.5 py-2 text-xs text-text-secondary hover:text-text-primary transition-colors";

export default function Footer() {
  return (
    <footer className="relative z-10 max-w-5xl mx-auto px-6 py-8 border-t border-border/40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary">
          <span className="text-accent">~/</span>
          {site.handle} · Built with Next.js
        </p>
        <div className="flex items-center gap-5">
          <ExternalLink href={site.github} className={linkClass}>
            <Github size={13} aria-hidden /> GitHub
          </ExternalLink>
          <ExternalLink href={site.linkedin} className={linkClass}>
            <Linkedin size={13} aria-hidden /> LinkedIn
          </ExternalLink>
          <Link href="/contact" className={linkClass}>
            <Mail size={13} aria-hidden /> Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
