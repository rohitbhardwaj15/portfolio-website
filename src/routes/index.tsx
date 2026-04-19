import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";
import { Approach } from "@/components/approach";
import { Skills } from "@/components/skills";
import { Creative } from "@/components/creative";
import { Philosophy } from "@/components/philosophy";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohit Bhardwaj — Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Rohit Bhardwaj — Full stack developer building intelligent, scalable, and user-focused web applications powered by modern technologies and AI.",
      },
      { property: "og:title", content: "Rohit Bhardwaj — Full Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Building intelligent, scalable, and user-focused web applications with React, Node.js, and AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <SiteNav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Timeline />
      <Approach />
      <Skills />
      <Creative />
      <Philosophy />
      <CTA />
      <Contact />
      <SiteFooter />
    </main>
  );
}
