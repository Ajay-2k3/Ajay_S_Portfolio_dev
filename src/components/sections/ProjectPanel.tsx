import { useState } from "react";
import type { Project } from "@/content/portfolio";

function ExplodedInterface({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 480 320" className="h-auto w-full" aria-hidden role="presentation">
      <g
        stroke="rgba(242,240,233,0.55)"
        strokeWidth="0.8"
        style={{ transition: "opacity .5s var(--ease-editorial)", opacity: active ? 1 : 0.6 }}
      >
        <rect x="40" y="40" width="300" height="180" />
        <rect x="80" y="80" width="300" height="180" />
        <rect x="120" y="120" width="300" height="180" />
        <path d="M40 40 L120 120 M340 40 L420 120 M40 220 L120 300 M340 220 L420 300" strokeDasharray="3 5" />
      </g>
      <g stroke="rgba(242,240,233,0.3)" strokeWidth="0.6">
        <path d="M120 160 H420 M120 200 H420" />
        <path d="M200 120 V300" />
      </g>
      <circle cx="120" cy="120" r="3.5" fill={active ? "var(--acid)" : "rgba(242,240,233,0.7)"} />
    </svg>
  );
}

export function ProjectPanel({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);

  return (
    <article className="shell flex h-full flex-col justify-center py-8">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p aria-hidden className="font-mono text-[clamp(3rem,7vw,7rem)] leading-none text-[color:var(--paper)]/20">
            {project.index}
          </p>
          <h3 className="mt-4 max-w-[16ch] text-[clamp(1.9rem,3.4vw,3.4rem)] leading-[0.98] font-extrabold tracking-[-0.04em]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-[color:var(--muted-ink)]">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
            {project.tech.map((t) => (
              <li key={t} className="label-mono">
                {t}
              </li>
            ))}
          </ul>

          <a
            href={project.url}
            data-cursor="view"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[color:var(--hair)] pb-1 font-mono text-xs tracking-[0.18em] transition-colors hover:border-[color:var(--acid)] hover:text-[color:var(--acid)]"
          >
            VIEW PROJECT
            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </div>

        <div className="lg:col-span-7">
          <div
            className="relative overflow-hidden border border-[color:var(--hair)] bg-[color:var(--soft-black)]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            data-cursor="view"
          >
            <div className="absolute inset-x-0 top-0 flex justify-between px-4 py-3">
              {project.marks.map((m) => (
                <span key={m} className="label-mono">
                  {m}
                </span>
              ))}
            </div>

            <div
              className="px-8 py-14 transition-transform duration-700"
              style={{
                transform: hover ? "scale(1.04)" : "scale(1)",
                transitionTimingFunction: "var(--ease-editorial)",
              }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  loading="lazy"
                  className="h-auto w-full"
                  style={{ filter: hover ? "none" : "grayscale(1)" }}
                />
              ) : (
                <ExplodedInterface active={hover} />
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-3">
              <span className="label-mono">FIG. {project.index}</span>
              <span className="label-mono">
                {project.image ? "SCREENSHOT" : "PLACEHOLDER_SCREENSHOT"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
