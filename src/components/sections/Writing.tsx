import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { NOTES } from "@/content/portfolio";

export function Writing() {
  return (
    <section id="writing" className="section-y" aria-labelledby="notes-heading">
      <div className="shell">
        <SectionLabel index="09" title="Notes" />
        <RevealText
          as="h2"
          level="h1"
          className="display-lg mt-8"
          lines={["THINGS", "I'VE", <span key="l" className="font-serif italic">learned.</span>]}
        />
        <span id="notes-heading" className="sr-only">
          Writing and notes
        </span>

        <ul className="mt-20">
          {NOTES.map((n, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <li>
                <a
                  href={n.url}
                  data-cursor="external"
                  className="group grid grid-cols-12 gap-4 border-t border-[color:var(--hair)] py-10"
                >
                  <span className="label-mono col-span-3 md:col-span-2">{n.year}</span>
                  <span className="col-span-9 md:col-span-7">
                    <span className="block text-[clamp(1.4rem,3vw,2.6rem)] leading-[1.02] font-extrabold tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-3">
                      {n.title.map((t, j) => (
                        <span key={j} className="block">
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className="mt-4 block max-w-[52ch] text-[16px] leading-[1.6] text-[color:var(--muted-ink)]">
                      {n.description}
                    </span>
                  </span>
                  <span className="col-span-12 self-start text-right text-xl opacity-0 transition-all duration-300 group-hover:opacity-100 md:col-span-3">
                    ↗
                  </span>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>
        <div className="hairline" />
      </div>
    </section>
  );
}
