import { motion } from "motion/react";
import { HeroSculpture } from "@/components/illustration/HeroSculpture";
import { Magnetic } from "@/components/motion/Magnetic";
import { IDENTITY, EMAIL } from "@/content/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

function Line({
  children,
  delay,
  active,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  active: boolean;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "112%" }}
        animate={active ? { y: 0 } : { y: "112%" }}
        transition={{ delay: active ? delay : 0, duration: 1.05, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero({ start }: { start: boolean }) {
  const d = 0;


  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 pb-10"
    >
      <div className="shell flex items-start justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.2em]">{IDENTITY.name}</p>
          <p className="label-mono mt-1">{IDENTITY.role}</p>
        </div>
        <div className="text-right">
          <p className="label-mono">{IDENTITY.location}</p>
          <p className="label-mono mt-1">{IDENTITY.year}</p>
        </div>
      </div>

      <div className="shell relative">
        <motion.div
          className="pointer-events-none absolute top-1/2 right-[2vw] hidden w-[34vw] max-w-[520px] -translate-y-1/2 md:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: start ? 1 : 0, y: start ? 0 : 40 }}
          transition={{ delay: d + 0.5, duration: 1.4, ease: EASE }}
        >
          <HeroSculpture className="h-auto w-full" />
        </motion.div>

        <h1 className="relative z-10 mt-10">
          <Line active={start} delay={d + 0.05} className="display-xl">
            ENGINEERING
          </Line>
          <Line
            active={start}
            delay={d + 0.2}
            className="pl-[8vw] font-serif text-[clamp(3rem,7.5vw,8rem)] leading-[0.95] italic"
          >
            ideas into
          </Line>
          <Line active={start} delay={d + 0.35} className="display-xl">
            REALITY<span className="text-[color:var(--acid)]">.</span>
          </Line>
        </h1>

        <div className="mt-14 hidden md:block">
          <HeroSculptureMobileSpacer />
        </div>
      </div>

      <div className="shell relative z-10 grid gap-8 md:grid-cols-12 md:items-end">
        <motion.p
          className="max-w-[55ch] text-[17px] leading-[1.6] text-[color:var(--muted-ink)] md:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: start ? 1 : 0, y: start ? 0 : 20 }}
          transition={{ delay: d + 0.7, duration: 0.9, ease: EASE }}
        >
          {IDENTITY.intro}
        </motion.p>

        <motion.div
          className="flex items-center gap-2 md:col-span-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ delay: d + 0.85, duration: 0.8 }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--acid)]" />
          <span className="label-mono">Available for work</span>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-8 md:col-span-4 md:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ delay: d + 0.95, duration: 0.8 }}
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex min-h-11 items-center gap-2 border-b border-[color:var(--paper)] pb-1 font-mono text-xs tracking-[0.18em]"
            >
              VIEW SELECTED WORK
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                ↘
              </span>
            </a>
          </Magnetic>
          <a
            href={`mailto:${EMAIL}`}
            className="label-mono min-h-11 leading-[44px] hover:text-[color:var(--paper)]"
            data-cursor="external"
          >
            CONTACT ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function HeroSculptureMobileSpacer() {
  return <div className="h-[6vh]" />;
}
