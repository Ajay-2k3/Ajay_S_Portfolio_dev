import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText } from "@/components/motion/RevealText";
import { Magnetic } from "@/components/motion/Magnetic";
import { ContactForm3D } from "@/components/illustration/ContactForm3D";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LEETCODE_URL } from "@/content/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[95svh] flex-col justify-between py-[clamp(70px,12vw,160px)]"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <SectionLabel index="10" title="Get in touch" />
        <h2 id="contact-heading" className="sr-only">
          Get in touch
        </h2>
      </div>

      <div className="shell relative grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="label-mono">Have a project?</p>
          <RevealText
            level="h1"
            className="display-xl mt-6"
            lines={[
              "LET'S",
              "BUILD",
              <span key="s" className="font-serif italic">
                something.
              </span>,
            ]}
          />
        </div>

        <div className="pointer-events-none hidden md:col-span-4 md:block">
          <ContactForm3D className="h-auto w-full opacity-70" />
        </div>
      </div>

      <div className="shell mt-16 flex flex-wrap items-end justify-between gap-10">
        <a
          href={`mailto:${EMAIL}`}
          data-cursor="external"
          className="group inline-flex min-h-11 items-center gap-3 border-b border-[color:var(--hair)] pb-2 text-[clamp(1.1rem,2.4vw,2rem)] tracking-[-0.02em] transition-colors hover:border-[color:var(--acid)]"
        >
          {EMAIL}
          <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        <ul className="flex gap-8">
          {[
            ["GITHUB", GITHUB_URL],
            ["LINKEDIN", LINKEDIN_URL],
            ["LEETCODE", LEETCODE_URL],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                data-cursor="external"
                className="label-mono min-h-11 leading-[44px] hover:text-[color:var(--paper)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Magnetic strength={9}>
          <a
            href={`mailto:${EMAIL}`}
            className="flex h-32 w-32 items-center justify-center rounded-full border border-[color:var(--acid)] text-center font-mono text-[11px] tracking-[0.18em] text-[color:var(--acid)] transition-colors hover:bg-[color:var(--acid)] hover:text-[color:var(--ink)]"
          >
            SAY
            <br />
            HELLO ↗
          </a>
        </Magnetic>
      </div>
    </section>
  );
}
