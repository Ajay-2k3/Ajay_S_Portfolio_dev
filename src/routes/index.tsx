import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Preloader } from "@/components/sections/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Architecture } from "@/components/sections/Architecture";
import { Experience } from "@/components/sections/Experience";
import { Philosophy } from "@/components/sections/Philosophy";
import { Capabilities } from "@/components/sections/Capabilities";
import { Credentials } from "@/components/sections/Credentials";
import { Education } from "@/components/sections/Education";
import { Services } from "@/components/sections/Services";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajay S. — Software Engineer | Engineering ideas into reality" },
      {
        name: "description",
        content:
          "Portfolio of Ajay S., a software engineer working on full-stack systems, backend engineering, real-time applications and AI-powered software.",
      },
      {
        property: "og:title",
        content: "Ajay S. — Software Engineer | Engineering ideas into reality",
      },
      {
        property: "og:description",
        content:
          "Selected work, engineering approach, experience and writing from Ajay S., software engineer based in Chennai, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);

  return (
    <div className="relative bg-[color:var(--ink)]">
      <div className="grain-layer" aria-hidden />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:bg-[color:var(--acid)] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:tracking-[0.18em] focus:text-[color:var(--ink)]"
      >
        SKIP TO CONTENT
      </a>
      <CustomCursor />
      <Preloader onDone={() => setReady(true)} />
      <Navbar />

      <main id="main">
        <Hero start={ready} />
        <About />
        <SkillsMarquee />
        <SelectedWork />
        <Architecture />
        <Experience />
        <Philosophy />
        <Capabilities />
        <Education />
        <Credentials />
        <Services />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
