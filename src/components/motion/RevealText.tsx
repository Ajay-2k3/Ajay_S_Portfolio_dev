import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

type Level = "h1" | "h2" | "body" | "meta";

const CONFIG: Record<Level, { duration: number; stagger: number; y: string }> = {
  h1: { duration: 1.05, stagger: 0.08, y: "115%" },
  h2: { duration: 0.9, stagger: 0.06, y: "112%" },
  body: { duration: 0.75, stagger: 0.05, y: "40%" },
  meta: { duration: 0.55, stagger: 0.03, y: "100%" },
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function RevealText({
  lines,
  level = "h2",
  className = "",
  delay = 0,
  as: As = "div",
}: {
  lines: ReactNode[];
  level?: Level;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  const reduced = useReducedMotion();
  const cfg = CONFIG[level];
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const resting = reduced ? { opacity: 0 } : { y: cfg.y, opacity: level === "body" ? 0 : 1 };
  const shown = reduced ? { opacity: 1 } : { y: 0, opacity: 1 };

  return (
    <As className={className} ref={ref as never}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={resting}
            animate={inView ? shown : resting}
            /* will-change only while the reveal is actually pending */
            style={{ willChange: inView ? "auto" : "transform" }}
            transition={{
              duration: reduced ? 0.3 : cfg.duration,
              delay: delay + i * cfg.stagger,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </As>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
