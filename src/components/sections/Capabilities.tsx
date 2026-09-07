import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useMotionBudget } from "@/hooks/useMotionBudget";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { WORD_FIELD, CAPABILITY_GROUPS } from "@/content/portfolio";

const POSITIONS = [
  "md:ml-[2%]",
  "md:ml-[58%]",
  "md:ml-[26%]",
  "md:ml-[6%]",
  "md:ml-[64%]",
  "md:ml-[34%]",
  "md:ml-[10%]",
  "md:ml-[52%]",
  "md:ml-[20%]",
  "md:ml-[70%]",
];

export function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const lowPower = useMotionBudget();
  const reduced = useReducedMotion() || lowPower;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="section-y" aria-labelledby="cap-heading">
      <div className="shell">
        <SectionLabel index="06" title="Capabilities" />
        <RevealText
          as="h2"
          level="h1"
          className="display-lg mt-8"
          lines={["TOOLS", "I WORK", <span key="w" className="font-serif italic">with.</span>]}
        />
        <span id="cap-heading" className="sr-only">
          Capabilities
        </span>

        <div className="mt-24 space-y-1" aria-hidden>
          {WORD_FIELD.map((w, i) => (
            <WordRow key={w.word} word={w} progress={scrollYProgress} reduced={!!reduced} className={POSITIONS[i]} />
          ))}
        </div>

        <ul className="mt-28">
          {CAPABILITY_GROUPS.map((g, i) => (
            <FadeIn key={g.label} delay={i * 0.05}>
              <li className="grid grid-cols-12 items-baseline gap-4 border-t border-[color:var(--hair)] py-6">
                <span className="label-mono col-span-12 md:col-span-3">{g.label}</span>
                <span className="col-span-12 text-[17px] leading-[1.7] text-[color:var(--paper)]/85 md:col-span-9">
                  {g.items.join(" · ")}
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WordRow({
  word,
  progress,
  reduced,
  className = "",
}: {
  word: { word: string; style: string; speed: number };
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
  className?: string | undefined;
}) {
  const x = useTransform(progress, [0, 1], [word.speed, -word.speed]);
  const style =
    word.style === "outline"
      ? "outline-type font-extrabold"
      : word.style === "serif"
        ? "font-serif italic"
        : "font-extrabold";

  return (
    <motion.p
      className={`text-[clamp(2rem,5.5vw,5rem)] leading-[1.02] tracking-[-0.04em] ${style} ${className}`}
      style={reduced ? {} : { x }}
    >
      {word.word}
    </motion.p>
  );
}
