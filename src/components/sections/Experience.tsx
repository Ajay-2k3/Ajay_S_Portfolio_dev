import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { EXPERIENCE } from "@/content/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-y" aria-labelledby="exp-heading">
      <div className="shell">
        <SectionLabel index="05" title="Experience" />
        <h2 id="exp-heading" className="sr-only">
          Experience
        </h2>

        <div className="mt-16 space-y-0">
          {EXPERIENCE.map((e, idx) => (
            <FadeIn key={e.company} delay={idx * 0.06}>
              <article className="grid gap-8 border-t border-[color:var(--hair)] py-14 md:grid-cols-12">
                {/* Year + period column */}
                <div className="md:col-span-3">
                  <RevealText
                    level="h1"
                    className="text-[clamp(2.8rem,7vw,6rem)] leading-[0.85] font-extrabold tracking-[-0.05em]"
                    lines={[e.year]}
                  />
                  <p className="label-mono mt-4">{e.period}</p>
                  {"location" in e && (
                    <p className="label-mono mt-1 text-[color:var(--muted-ink)]">
                      {(e as typeof EXPERIENCE[0]).location}
                    </p>
                  )}
                </div>

                {/* Content column */}
                <div className="md:col-span-9">
                  <h3 className="text-[clamp(1.4rem,2.4vw,2.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
                    {e.company}
                  </h3>
                  <p className="mt-2 font-serif text-[1.4rem] italic text-[color:var(--paper)]/85">
                    {e.role}
                  </p>

                  <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.6] text-[color:var(--muted-ink)]">
                    {e.summary}
                  </p>

                  {e.bullets && e.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {e.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-3 text-[16px] leading-[1.6] text-[color:var(--paper)]/80"
                        >
                          <span className="mt-[0.45em] inline-block h-1 w-4 shrink-0 bg-[color:var(--acid)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
                    {e.tech.map((t) => (
                      <li key={t} className="label-mono">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

