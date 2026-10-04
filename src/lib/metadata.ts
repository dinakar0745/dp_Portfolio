import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  /** Path from the site root, e.g. "/projects". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
};

/** Per-page title, description, canonical URL and social-card metadata. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  tags,
}: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type,
      ...(type === "article" && {
        publishedTime,
        authors: [site.name],
        tags,
      }),
    },
    twitter: {
      card: "summary",
      title: `${title} — ${site.name}`,
      description,
    },
  };
}
