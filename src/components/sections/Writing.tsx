import { SectionLabel } from "@/components/layout/SectionLabel";
import { RevealText } from "@/components/motion/RevealText";
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
          lines={[
            "THINGS",
            "I'VE",
            <span key="l" className="font-serif italic">
              learned.
            </span>,
          ]}
        />
        <span id="notes-heading" className="sr-only">
          Writing and notes
        </span>

        <ul className="mt-12 md:mt-20">
          {NOTES.map((note) => {
            const published = /^https?:\/\//i.test(note.url) || /^\/(?!\/)/.test(note.url);
            const Row = published ? "a" : "div";

            return (
              <li key={note.title.join(" ")} className="border-t border-[color:var(--hair)]">
                <Row
                  {...(published ? { href: note.url, "data-cursor": "view" } : {})}
                  className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-4 py-8 md:grid-cols-[minmax(0,2fr)_minmax(0,9fr)_auto] md:py-10"
                >
                  <span className="label-mono col-span-2 break-words md:col-span-1">
                    {published
                      ? note.year.includes("PLACEHOLDER")
                        ? "Note"
                        : note.year
                      : "Not published"}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.4rem,3vw,2.6rem)] leading-[1.1] font-extrabold tracking-[-0.035em] [overflow-wrap:anywhere]">
                      {note.title.join(" ")}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-[color:var(--muted-ink)]">
                      {note.description}
                    </p>
                  </div>
                  {published && (
                    <span
                      aria-hidden="true"
                      className="self-start text-xl group-hover:text-[color:var(--acid)] group-focus-visible:text-[color:var(--acid)]"
                    >
                      &rarr;
                    </span>
                  )}
                </Row>
              </li>
            );
          })}
        </ul>
        <div className="hairline" />
      </div>
    </section>
  );
}
