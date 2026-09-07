import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const total = reduced ? 300 : 2600;
    const t = setTimeout(() => {
      setVisible(false);
      onDone();
    }, total);
    return () => clearTimeout(t);
  }, [onDone, reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col justify-between bg-[color:var(--ink)] py-8"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          aria-hidden
        >
          <div className="shell flex items-baseline gap-3">
            <span className="font-mono text-xs tracking-[0.24em]">AJAY</span>
            <span className="font-mono text-xs text-[color:var(--acid)]">/</span>
            <span className="overflow-hidden">
              <motion.span
                className="label-mono block text-[color:var(--paper)]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: reduced ? 0 : 0.7, duration: 0.7, ease: EASE }}
              >
                SOFTWARE ENGINEER
              </motion.span>
            </span>
          </div>

          <div className="shell">
            <motion.div
              className="h-px origin-left bg-[color:var(--hair)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduced ? 0.2 : 1.2, ease: EASE }}
            />
            <div className="mt-6 overflow-hidden">
              <motion.p
                className="display-lg"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: reduced ? 0 : 1.25, duration: 0.9, ease: EASE }}
              >
                ENGINEERING
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                className="font-serif text-[clamp(2rem,5vw,4rem)] italic"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: reduced ? 0 : 1.8, duration: 0.9, ease: EASE }}
              >
                ideas into
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                className="display-lg"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: reduced ? 0 : 2.2, duration: 0.9, ease: EASE }}
              >
                REALITY.
              </motion.p>
            </div>
          </div>

          <div className="shell flex justify-between">
            <span className="label-mono">CHENNAI / INDIA</span>
            <span className="label-mono">2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
