import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export function Parallax({
  children,
  distance = 80,
  axis = "y",
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  axis?: "x" | "y";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const move = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? {} : axis === "y" ? { y: move } : { x: move }}>
        {children}
      </motion.div>
    </div>
  );
}
