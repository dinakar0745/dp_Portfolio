import type { MDXComponents } from "mdx/types";
import Callout from "@/components/blog/Callout";

/** How Markdown elements in src/content/blog/*.mdx are rendered. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: (props) => (
      <p className="text-sm text-text-secondary leading-relaxed" {...props} />
    ),
    h2: (props) => (
      <h2
        className="text-base font-semibold text-text-primary !mt-10 mb-3"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="text-sm font-semibold text-text-primary !mt-8" {...props} />
    ),
    ul: (props) => (
      <ul
        className="list-disc pl-5 space-y-1.5 text-sm text-text-secondary marker:text-accent"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal pl-5 space-y-1.5 text-sm text-text-secondary marker:text-accent"
        {...props}
      />
    ),
    a: (props) => <a className="text-accent hover:underline" {...props} />,
    pre: (props) => <pre tabIndex={0} className="text-xs" {...props} />,
    Callout,
    ...components,
  };
}
