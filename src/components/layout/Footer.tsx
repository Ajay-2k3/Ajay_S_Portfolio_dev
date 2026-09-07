import { NAV_LINKS, IDENTITY, GITHUB_URL, LINKEDIN_URL, LEETCODE_URL } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--hair)] py-10">
      <div className="shell grid grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <p className="font-mono text-xs tracking-[0.24em]">{IDENTITY.mark}</p>
          <p className="label-mono mt-2">{IDENTITY.role}</p>
        </div>

        <nav aria-label="Footer" className="space-y-2">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="label-mono block hover:text-[color:var(--paper)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="space-y-2">
          {[
            ["GITHUB", GITHUB_URL],
            ["LINKEDIN", LINKEDIN_URL],
            ["LEETCODE", LEETCODE_URL],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="label-mono block hover:text-[color:var(--paper)]"
              data-cursor="external"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 md:items-end">
          <a href="#top" className="label-mono hover:text-[color:var(--acid)]">
            BACK TO TOP ↑
          </a>
          <span className="label-mono">{IDENTITY.year}</span>
        </div>
      </div>
    </footer>
  );
}
