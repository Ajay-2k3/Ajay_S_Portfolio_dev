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

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <RevealText
                level="h1"
                className="text-[clamp(4rem,11vw,9rem)] leading-[0.85] font-extrabold tracking-[-0.05em]"
                lines={[EXPERIENCE[0]?.year ?? ""]}
              />
            </div>
          </div>

          <div className="md:col-span-8">
            {EXPERIENCE.map((e) => (
              <FadeIn key={e.company}>
                <article className="border-t border-[color:var(--hair)] py-10">
                  <h3 className="text-[clamp(1.4rem,2.4vw,2.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
                    {e.company}
                  </h3>
                  <p className="mt-2 font-serif text-[1.4rem] italic text-[color:var(--paper)]/85">
                    {e.role}
                  </p>
                  <p className="label-mono mt-4">{e.period}</p>
                  <p className="mt-6 max-w-[55ch] text-[17px] leading-[1.6] text-[color:var(--muted-ink)]">
                    {e.summary}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
                    {e.tech.map((t) => (
                      <li key={t} className="label-mono">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
