"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm text-text-primary hover:text-accent transition-colors"
        >
          <span className="text-accent">~/</span>dinakar
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm rounded transition-colors ${
                pathname === link.href
                  ? "text-text-primary bg-bg-tertiary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-4 bg-border mx-2" />

          <a
            href="https://github.com/dinakar0745"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-text-secondary hover:text-text-primary transition-colors rounded"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/dinakar-pathakota-32a823251/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-text-secondary hover:text-text-primary transition-colors rounded"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 text-text-secondary hover:text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-bg/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 text-sm rounded transition-colors ${
                  pathname === link.href
                    ? "text-text-primary bg-bg-tertiary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 border-t border-border/40 mt-2">
              <a
                href="https://github.com/dinakar0745"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dinakar-pathakota-32a823251/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
