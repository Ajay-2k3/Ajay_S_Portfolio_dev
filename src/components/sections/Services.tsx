import { useState } from "react";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { SERVICES } from "@/content/portfolio";

function ServiceIllustration({ index }: { index: string }) {
  const common = { stroke: "rgba(242,240,233,0.5)", strokeWidth: 0.8, fill: "none" } as const;
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden role="presentation">
      {index === "01" && (
        <g {...common}>
          <rect x="40" y="30" width="150" height="90" />
          <rect x="90" y="70" width="150" height="90" />
          <rect x="140" y="110" width="150" height="90" />
          <path d="M320 30 v170 M300 60 h60 M300 140 h60" strokeDasharray="3 5" />
        </g>
      )}
      {index === "02" && (
        <g {...common}>
          <circle cx="120" cy="110" r="50" />
          <circle cx="260" cy="70" r="26" />
          <circle cx="280" cy="170" r="34" />
          <path d="M168 100 L234 76 M164 130 L250 162" strokeDasharray="3 5" />
        </g>
      )}
      {index === "03" && (
        <g {...common}>
          <path d="M30 180 C 110 40, 190 190, 270 60 S 370 150, 380 100" />
          <path d="M30 200 H380" strokeDasharray="3 5" />
          <circle cx="270" cy="60" r="4" fill="var(--acid)" stroke="none" />
        </g>
      )}
    </svg>
  );
}

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative section-y" aria-labelledby="services-heading">
      <div className="shell">
        <SectionLabel index="08" title="What I build" />
        <h2 id="services-heading" className="sr-only">
          What I build
        </h2>

        <ul className="mt-16">
          {SERVICES.map((s) => (
            <li key={s.index}>
              <div
                className="group relative grid grid-cols-12 items-center gap-4 overflow-hidden border-t border-[color:var(--hair)] py-10"
                onMouseEnter={() => setActive(s.index)}
                onMouseLeave={() => setActive(null)}
              >
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] transition-opacity duration-500 md:block"
                  style={{ opacity: active === s.index ? 0.55 : 0 }}
                >
                  <ServiceIllustration index={s.index} />
                </div>

                <span className="label-mono col-span-2">{s.index}</span>
                <h3 className="relative z-10 col-span-8 text-[clamp(1.8rem,4.5vw,4rem)] leading-[0.95] font-extrabold tracking-[-0.04em]">
                  {s.title[0]}
                  <br />
                  {s.title[1]}
                </h3>
                <span className="col-span-2 text-right text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
                <p className="relative z-10 col-span-12 mt-4 max-w-[48ch] text-[16px] leading-[1.6] text-[color:var(--muted-ink)] md:col-start-3 md:col-end-9">
                  {s.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="hairline" />
      </div>
    </section>
  );
}
