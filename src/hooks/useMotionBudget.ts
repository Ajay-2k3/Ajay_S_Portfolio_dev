import { useEffect, useState } from "react";

/**
 * Returns true when the device should run the "lite" motion budget:
 * reduced-motion preference, small/touch screens, or low-powered hardware.
 * Scroll-linked parallax is skipped in that mode; reveals still play.
 */
export function useMotionBudget(): boolean {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & { deviceMemory?: number };
    const evaluate = () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = window.matchMedia("(max-width: 767px)").matches;
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const weakCpu = typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
      const weakMem = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
      setLite(reduced || small || coarse || weakCpu || weakMem);
    };

    evaluate();
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", evaluate);
    return () => mq.removeEventListener("change", evaluate);
  }, []);

  return lite;
}
