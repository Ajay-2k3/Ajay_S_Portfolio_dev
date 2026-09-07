import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { CREDENTIALS } from "@/content/portfolio";

export function Credentials() {
  return (
    <section className="section-y" aria-labelledby="cred-heading">
      <div className="shell">
        <SectionLabel index="07" title="Credentials" />
        <RevealText
          as="h2"
          level="h1"
          className="display-lg mt-8"
          lines={["CERTIFIED,", "BUT STILL", <span key="l" className="font-serif italic">learning.</span>]}
        />
        <span id="cred-heading" className="sr-only">
          Credentials
        </span>

        <ul className="mt-20">
          {CREDENTIALS.map((c, i) => (
            <FadeIn key={c.index} delay={i * 0.06}>
              <li>
                <a
                  href={c.url}
                  data-cursor="external"
                  className="group grid grid-cols-12 items-baseline gap-4 border-t border-[color:var(--hair)] py-8 transition-colors hover:text-[color:var(--acid)]"
                >
                  <span className="label-mono col-span-2">{c.index}</span>
                  <span className="col-span-12 text-[clamp(1.3rem,2.6vw,2.4rem)] leading-[1.05] font-bold tracking-[-0.03em] md:col-span-6">
                    {c.title}
                  </span>
                  <span className="label-mono col-span-6 md:col-span-2">{c.issuer}</span>
                  <span className="label-mono col-span-4 md:col-span-1">{c.year}</span>
                  <span className="col-span-2 text-right transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1">
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
