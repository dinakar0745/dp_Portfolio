import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Research from "@/components/home/Research";
import SelectedProjects from "@/components/home/SelectedProjects";
import Skills from "@/components/home/Skills";
import WsiSystems from "@/components/home/WsiSystems";
import { site } from "@/content/site";

// Structured data so search engines can connect this site to the person.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  description: site.description,
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Research />
      <Experience />
      <SelectedProjects />
      <WsiSystems />
      <Skills />
      <Education />
    </>
  );
}
