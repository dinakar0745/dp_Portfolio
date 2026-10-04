"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import ScrollProgress from "@/components/motion/ScrollProgress";
import ExternalLink from "@/components/ui/ExternalLink";
import { navLinks, site } from "@/content/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const linkClass = (href: string) =>
    `px-3 text-sm rounded transition-colors ${
      isActive(pathname, href)
        ? "text-text-primary bg-bg-tertiary"
        : "text-text-secondary hover:text-text-primary"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="font-mono text-sm text-text-primary hover:text-accent transition-colors"
        >
          <span className="text-accent">~/</span>
          {site.handle}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`${linkClass(link.href)} py-1.5`}
            >
              {link.label}
            </Link>
          ))}

          <div aria-hidden className="w-px h-4 bg-border mx-2" />

          <ExternalLink
            href={site.github}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded"
            aria-label="GitHub"
          >
            <Github size={16} aria-hidden />
          </ExternalLink>
          <ExternalLink
            href={site.linkedin}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} aria-hidden />
          </ExternalLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden -mr-2 h-11 w-11 inline-flex items-center justify-center rounded text-text-secondary hover:text-text-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border/40 bg-bg/95 backdrop-blur-md"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`${linkClass(link.href)} py-3`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-5 pt-3 border-t border-border/40 mt-2">
              <ExternalLink
                href={site.github}
                className="flex items-center gap-2 py-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <Github size={15} aria-hidden /> GitHub
              </ExternalLink>
              <ExternalLink
                href={site.linkedin}
                className="flex items-center gap-2 py-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <Linkedin size={15} aria-hidden /> LinkedIn
              </ExternalLink>
            </div>
          </div>
        </div>
      )}

      <ScrollProgress />
    </header>
  );
}
