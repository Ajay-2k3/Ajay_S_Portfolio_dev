import { Marquee } from "@/components/motion/Marquee";

export function SkillsMarquee() {
  return (
    <section className="border-y border-[color:var(--hair)] py-[clamp(40px,7vw,90px)]" aria-hidden>
      <Marquee
        items={["REACT", "NEXT.JS", "TYPESCRIPT", "MOTION", "UI"]}
        direction="right"
        duration={70}
        className="text-[clamp(3rem,9vw,9rem)] leading-[0.9] font-extrabold tracking-[-0.045em]"
      />
      <Marquee
        items={["NODE.JS", "FASTAPI", "POSTGRESQL", "REDIS", "DOCKER", "SUPABASE"]}
        direction="left"
        duration={85}
        className="outline-type mt-3 text-[clamp(3rem,9vw,9rem)] leading-[0.9] font-extrabold tracking-[-0.045em]"
      />
    </section>
  );
}
