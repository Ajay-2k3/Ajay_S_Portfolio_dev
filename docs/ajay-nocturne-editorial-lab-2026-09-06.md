# Ajay — Nocturne Editorial Lab

A single-page editorial portfolio built to your Nocturne spec: black canvas, huge typography, monochrome technical illustration, and controlled motion. No cards, no terminal hero, no glow.

## Look and feel

- Colors as CSS variables: ink #080808, soft black #101010, paper #F2F0E9, muted #8D8D88, acid #C7FF18 (rare), vermilion #FF5B3F (rarer).
- Three type voices: Instrument Serif (expressive italic), Manrope (grotesk display/UI), JetBrains Mono (numbers, labels, metadata) — loaded via a font link in the app shell.
- 12-column grid, max width ~1500px, fluid side padding, section spacing 160–240px desktop scaling down on mobile. Asymmetric composition, hairline rules, tiny coordinate labels, very low-opacity SVG grain over everything.

## Page sequence

1. Preloader (~2.6s) flowing straight into the hero as one continuous sequence: AJAY/S → AJAY / SOFTWARE ENGINEER → line becomes hero grid line → ENGINEERING / *ideas into* / REALITY. reveal.
2. Hero, ~100svh: mono corners (AJAY S. / SOFTWARE ENGINEER, CHENNAI / INDIA 2026), the three-line statement, narrow support line, small ● AVAILABLE FOR WORK dot, VIEW SELECTED WORK ↘ and CONTACT ↗. Abstract SVG mechanical sculpture layered partly behind and partly in front of the type.
3. 02 / ABOUT — "I THINK IN SYSTEMS, BUT BUILD FOR PEOPLE." with counter-drifting lines, restrained parallax, cognition/system diagram illustration.
4. Skills marquee — two slow giant tracks, opposite directions, mixed solid/outline/italic.
5. 03 / SELECTED WORK — desktop pinned horizontal scroll storytelling; each project an engineering poster (enormous number, title, short description, tech metadata, screenshot area, annotation lines, VIEW PROJECT ↗). Mobile becomes a vertical sequence.
6. 04 / ENGINEERING APPROACH — "SYSTEMS BEFORE SURFACES." with an SVG blueprint that draws its connections on entry; capability groups as annotated rows, not pills.
7. 05 / EXPERIENCE — sticky year on desktop, editorial timeline entries scrolling past it.
8. Philosophy — full-width typographic intermission, serif italic accent word.
9. 06 / CAPABILITIES — kinetic typographic word field with independent scroll velocities, then editorial capability rows.
10. 07 / CREDENTIALS — numbered archive rows with hover preview slot on desktop.
11. 08 / WHAT I BUILD — three large rows, each revealing its own abstract illustration on hover.
12. 09 / NOTES — typographic article index, hover shifts title and reveals arrow.
13. 10 / GET IN TOUCH — 90–100svh closing statement, email, circular magnetic SAY HELLO ↗, social links.
14. Minimal footer with back-to-top.

Fixed quiet nav (AJAY/S · WORK ABOUT EXPERIENCE WRITING · CONTACT ↗) that shrinks on scroll; fullscreen typographic menu on mobile.

## Motion and interaction

- Reusable RevealText (overflow-mask, translateY 110% → 0, cubic-bezier(0.16, 1, 0.3, 1)), Magnetic (5–8px, used only on the three main CTAs), Parallax, Marquee.
- Custom cursor on fine-pointer devices only: dot → expand on links → VIEW ↗ on projects → DRAG ↔ in the horizontal area. Native cursor stays until it initializes.
- Everything respects prefers-reduced-motion; no hover-only content; visible focus states, semantic landmarks, alt text, 44px touch targets.

## Content integrity

I'll use only what you supplied: the two named projects and their listed technologies, the BlueWhiz Infotech backend internship (Apr–Aug 2025), the JPMorgan Chase software engineering and Java diploma credentials, MCA background, and ajaysettu1@gmail.com. Anything you haven't given me — project links, GitHub/LinkedIn/LeetCode URLs, screenshots, article dates and reading times, internship responsibility wording, third project details — becomes a clearly labelled placeholder constant in one content file for you to fill in. Nothing invented.

## Technical notes

- React + TypeScript + Tailwind v4 tokens in `src/styles.css`; single route at `/` composed of section components.
- Framer Motion for reveals, parallax, magnetics, cursor. GSAP + ScrollTrigger only for the pinned horizontal work section.
- Structure under `src/components/{layout,motion,illustration,sections,projects}` with content in `src/content/*.ts`.
- Illustrations authored as inline SVG (no WebGL, no stock imagery); project screenshots lazy-loaded with fixed aspect boxes to avoid layout shift.
- Per-route head() metadata with a specific title/description for the portfolio.

## Build order

Tokens and fonts → layout shell and nav → preloader + hero + sculpture → motion primitives → about, marquee → selected work (pinned) → approach blueprint → experience, philosophy → capabilities, credentials, services, notes → contact, footer → responsive/accessibility/perf pass and the section-by-section quality check.
