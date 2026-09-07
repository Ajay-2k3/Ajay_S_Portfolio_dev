import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { RevealText } from "@/components/motion/RevealText";
import { useMotionBudget } from "@/hooks/useMotionBudget";

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const lowPower = useMotionBudget();
  const reduced = useReducedMotion() || lowPower;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const a = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const b = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="border-y border-[color:var(--hair)] py-[clamp(90px,18vw,240px)]"
      aria-label="Philosophy"
    >
      <div className="shell">
        <p className="label-mono">I like</p>

        <motion.div className="mt-10" style={reduced ? {} : { x: a }}>
          <RevealText
            level="h1"
            className="display-lg"
            lines={["CLEAN CODE,", "DIFFICULT PROBLEMS"]}
          />
        </motion.div>

        <p aria-hidden className="my-4 font-serif text-[clamp(2.5rem,6vw,5rem)] italic text-[color:var(--acid)]">
          &
        </p>

        <motion.div className="md:pl-[16vw]" style={reduced ? {} : { x: b }}>
          <RevealText
            level="h1"
            className="display-lg"
            lines={[
              <span key="1" className="font-serif italic">
                systems
              </span>,
              "THAT SURVIVE",
              <span key="2" className="font-serif italic">
                reality.
              </span>,
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
