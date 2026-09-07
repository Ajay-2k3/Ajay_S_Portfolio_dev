import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Mode = "default" | "link" | "view" | "drag" | "external";

const LABEL: Record<Mode, string> = {
  default: "",
  link: "",
  view: "VIEW ↗",
  drag: "DRAG ↔",
  external: "↗",
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const modeRef = useRef<Mode>("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 900, damping: 45, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 900, damping: 45, mass: 0.25 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    if (!fine || reduced || !wide) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let frame = 0;
    let pending: MouseEvent | null = null;

    const process = () => {
      frame = 0;
      const e = pending;
      pending = null;
      if (!e) return;
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const tagged = target?.closest?.("[data-cursor]");
      const next: Mode = tagged
        ? ((tagged.getAttribute("data-cursor") as Mode) ?? "default")
        : target?.closest?.("a,button")
          ? "link"
          : "default";

      // avoid a React render on every pointer move
      if (next !== modeRef.current) {
        modeRef.current = next;
        setMode(next);
      }
    };

    const onMove = (e: MouseEvent) => {
      pending = e;
      if (!frame) frame = requestAnimationFrame(process);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;
  const big = mode === "view" || mode === "drag";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border font-mono"
        animate={{
          width: big ? 76 : mode === "link" ? 34 : 12,
          height: big ? 76 : mode === "link" ? 34 : 12,
          x: big ? -38 : mode === "link" ? -17 : -6,
          y: big ? -38 : mode === "link" ? -17 : -6,
          backgroundColor: mode === "default" ? "var(--acid)" : "rgba(199,255,24,0)",
          borderColor: mode === "default" ? "rgba(199,255,24,0)" : "var(--acid)",
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--acid)" }}
      >
        {LABEL[mode]}
      </motion.div>
    </motion.div>
  );
}
