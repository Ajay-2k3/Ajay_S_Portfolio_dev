import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useMotionBudget } from "@/hooks/useMotionBudget";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { AboutDiagram } from "@/components/illustration/AboutDiagram";
import { IDENTITY } from "@/content/portfolio";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const lowPower = useMotionBudget();
  const reduced = useReducedMotion() || lowPower;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rightX = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const illoY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-y"
      aria-labelledby="about-heading"
    >
      <div className="shell">
        <SectionLabel index="02" title="About" />

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <motion.div style={reduced ? {} : { x: leftX }}>
              <RevealText
                as="h2"
                level="h1"
                className="display-lg"
                lines={["I THINK IN", "SYSTEMS,"]}
              />
            </motion.div>
            <motion.div
              className="mt-2 md:pl-[14vw]"
              style={reduced ? {} : { x: rightX }}
            >
              <RevealText
                level="h1"
                className="display-lg"
                lines={[
                  "BUT BUILD",
                  <>
                    FOR <span className="font-serif italic">PEOPLE.</span>
                  </>,
                ]}
              />
            </motion.div>
            <h2 id="about-heading" className="sr-only">
              About Ajay S.
            </h2>
          </div>

          <motion.div
            className="hidden md:col-span-4 md:block"
            style={reduced ? {} : { y: illoY }}
          >
            <AboutDiagram className="h-auto w-full opacity-80" />
          </motion.div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label-mono">Biography</p>
          </div>
          <div className="space-y-6 md:col-span-6">
            {IDENTITY.bio.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <p className="max-w-[55ch] text-[18px] leading-[1.6] text-[color:var(--paper)]/85">
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>
          <div className="md:col-span-3 md:text-right">
            <p className="label-mono">MCA</p>
            <p className="label-mono mt-1">Chennai / India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
