import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText } from "@/components/motion/RevealText";
import { ProjectPanel } from "@/components/sections/ProjectPanel";
import { PROJECTS } from "@/content/portfolio";

export function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [horizontal, setHorizontal] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setHorizontal(mq.matches && !reduced);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduced]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const shift = 100 - 100 / PROJECTS.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${shift}%`]);

  return (
    <section id="work" aria-labelledby="work-heading" className="pt-[clamp(80px,14vw,200px)]">
      <div className="shell">
        <SectionLabel index="03" title="Selected" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <RevealText
            as="h2"
            level="h1"
            className="display-lg"
            lines={[
              "SELECTED",
              <span key="w" className="font-serif italic lowercase">
                work
              </span>,
            ]}
          />
          <span id="work-heading" className="sr-only">
            Selected work
          </span>
          <p className="label-mono">2024—26</p>
        </div>
      </div>

      <div
        ref={ref}
        className={horizontal ? "relative mt-20" : "mt-16 space-y-[clamp(60px,12vw,140px)]"}
        style={horizontal ? { height: `${PROJECTS.length * 100}vh` } : undefined}
      >
        {horizontal ? (
          <div className="sticky top-0 flex h-screen items-center overflow-hidden" data-cursor="drag">
            <motion.div className="flex h-full" style={{ x, width: `${PROJECTS.length * 100}vw` }}>
              {PROJECTS.map((p, i) => (
                <div
                  key={p.index}
                  className="h-full w-screen shrink-0"
                  onFocus={() => {
                    // keyboard users: bring the focused panel into the pinned viewport
                    const top = ref.current?.offsetTop ?? 0;
                    window.scrollTo({ top: top + i * window.innerHeight, behavior: "smooth" });
                  }}
                >
                  <ProjectPanel project={p} />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          PROJECTS.map((p) => <ProjectPanel key={p.index} project={p} />)
        )}
      </div>

    </section>
  );
}
