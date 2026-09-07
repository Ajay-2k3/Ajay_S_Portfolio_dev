import { EDUCATION } from "@/content/portfolio";

export function Education() {
  return (
    <section id="education" className="section-y" aria-labelledby="education-heading">
      <div className="shell">
        <h2 id="education-heading" className="display-lg">
          EDUCATION
        </h2>

        <ol className="mt-12 border-b border-[color:var(--hair)] md:mt-20">
          {EDUCATION.map((entry) => (
            <li key={entry.index} className="border-t border-[color:var(--hair)]">
              <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                <div className="flex items-baseline justify-between gap-4 md:col-span-3 md:block">
                  <span className="font-mono text-3xl tracking-[-0.04em] text-[color:var(--acid)]">
                    {entry.index}
                  </span>
                  <p className="label-mono md:mt-6">{entry.period}</p>
                </div>

                <div className="min-w-0 md:col-span-7">
                  <h3 className="max-w-[24ch] text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.08] font-bold tracking-[-0.03em]">
                    {entry.degree}
                  </h3>
                  <p className="mt-6 text-lg leading-relaxed">
                    <strong className="font-semibold">{entry.college}</strong>
                  </p>
                  <p className="mt-1 text-base text-[color:var(--muted-ink)]">
                    {entry.location}
                  </p>
                </div>

                <dl className="md:col-span-2 md:text-right">
                  <dt className="label-mono">CGPA</dt>
                  <dd className="mt-2 whitespace-nowrap font-mono text-xl tracking-[-0.04em]">
                    {entry.cgpa}
                  </dd>
                </dl>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
