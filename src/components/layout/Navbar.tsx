import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, EMAIL, IDENTITY } from "@/content/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        openerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[height,background-color,backdrop-filter] duration-500"
        style={{
          height: scrolled ? 56 : 84,
          backgroundColor: scrolled ? "rgba(8,8,8,0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(6px)" : "none",
        }}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-full items-center justify-between"
        >
          <a
            href="#top"
            className="font-mono text-xs tracking-[0.24em] text-[color:var(--paper)]"
          >
            {IDENTITY.mark}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="label-mono relative py-2 transition-colors hover:text-[color:var(--paper)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${EMAIL}`}
            className="label-mono hidden text-[color:var(--paper)] transition-colors hover:text-[color:var(--acid)] md:inline"
            data-cursor="external"
          >
            CONTACT ↗
          </a>

          <button
            type="button"
            ref={openerRef}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="label-mono min-h-11 px-1 text-[color:var(--paper)] md:hidden"
          >
            MENU
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[70] bg-[color:var(--ink)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="shell flex h-full flex-col justify-between py-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.24em]">{IDENTITY.mark}</span>
                <button
                  type="button"
                  ref={closeRef}
                  onClick={() => {
                    setOpen(false);
                    openerRef.current?.focus();
                  }}
                  aria-label="Close menu"
                  className="label-mono min-h-11 px-1 text-[color:var(--paper)]"
                >
                  CLOSE
                </button>
              </div>

              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-[clamp(2.4rem,14vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.045em]"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-2">
                <div className="hairline" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="block py-2 font-mono text-xs tracking-[0.18em] text-[color:var(--acid)]"
                >
                  {EMAIL} ↗
                </a>
                <p className="label-mono">
                  {IDENTITY.location} — {IDENTITY.year}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
