import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const widths = {
  article: "max-w-3xl",
  wide: "max-w-4xl",
  full: "max-w-5xl",
} as const;

type PageShellProps = {
  children: React.ReactNode;
  width?: keyof typeof widths;
  /** Renders a "Back to …" link above the content. */
  back?: { href: string; label: string };
};

/** Shared frame for every page except the home page. */
export default function PageShell({
  children,
  width = "full",
  back,
}: PageShellProps) {
  return (
    <div className={`min-h-[80vh] ${widths[width]} mx-auto px-6 pt-28 pb-20`}>
      {back && (
        <Reveal when="mount">
          <Link
            href={back.href}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={14} aria-hidden /> {back.label}
          </Link>
        </Reveal>
      )}
      {children}
    </div>
  );
}

export function PageIntro({ title, lead }: { title: string; lead: string }) {
  return (
    <Reveal when="mount" className="mb-12">
      <h1 className="text-3xl font-bold text-text-primary mb-3">{title}</h1>
      <p className="text-sm text-text-secondary max-w-xl">{lead}</p>
    </Reveal>
  );
}
