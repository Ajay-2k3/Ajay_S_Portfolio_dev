import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { CAPABILITY_GROUPS } from "@/content/portfolio";

const NODES = ["USER", "INTERFACE", "API / WEBSOCKET / AUTH", "SERVICE LAYER", "DATABASE / CACHE"];

function Blueprint() {
  const reduced = useReducedMotion();
  return (
    <svg viewBox="0 0 520 460" className="h-auto w-full" aria-hidden role="presentation">
      {NODES.map((n, i) => {
        const y = 40 + i * 95;
        return (
          <g key={n}>
            <motion.rect
              x="60"
              y={y - 22}
              width="400"
              height="44"
              fill="none"
              stroke="rgba(242,240,233,0.35)"
              strokeWidth="0.8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.6 }}
            />
            <text
              x="80"
              y={y + 4}
              fill="rgba(242,240,233,0.85)"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="2"
            >
              {n}
            </text>
            <motion.circle
              cx="440"
              cy={y}
              r="3"
              fill="var(--acid)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.4 }}
            />
            {i < NODES.length - 1 && (
              <motion.line
                x1="260"
                y1={y + 22}
                x2="260"
                y2={y + 73}
                stroke="rgba(242,240,233,0.5)"
                strokeWidth="1"
                initial={reduced ? { opacity: 0 } : { pathLength: 0 }}
                whileInView={reduced ? { opacity: 1 } : { pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function Architecture() {
  return (
    <section className="section-y" aria-labelledby="approach-heading">
      <div className="shell">
        <SectionLabel index="04" title="Engineering approach" />
        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <RevealText
              as="h2"
              level="h1"
              className="display-lg"
              lines={["SYSTEMS", "BEFORE", <span key="s" className="font-serif italic">surfaces.</span>]}
            />
            <span id="approach-heading" className="sr-only">
              Engineering approach
            </span>

            <div className="mt-16 space-y-8">
              {CAPABILITY_GROUPS.slice(0, 4).map((g, i) => (
                <FadeIn key={g.label} delay={i * 0.06}>
                  <div className="grid grid-cols-12 items-baseline gap-4 border-t border-[color:var(--hair)] pt-4">
                    <p className="label-mono col-span-12 md:col-span-4">{g.label}</p>
                    <p className="col-span-12 text-[15px] leading-[1.7] text-[color:var(--paper)]/80 md:col-span-8">
                      {g.items.join(" · ")}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <Blueprint />
          </div>
        </div>
      </div>
    </section>
  );
}
