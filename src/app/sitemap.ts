import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
  }));

  // Only case studies that are linked from the projects index.
  const caseStudies = projects
    .filter((project) => project.slug)
    .map((project) => ({ url: `${site.url}/projects/${project.slug}` }));

  const articles = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.isoDate,
  }));

  return [...pages, ...caseStudies, ...articles];
}
