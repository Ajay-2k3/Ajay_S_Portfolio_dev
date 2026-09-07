import type { ReactNode } from "react";

export function Marquee({
  items,
  direction = "left",
  duration = 60,
  className = "",
  separator = "/",
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  separator?: ReactNode;
}) {
  const track = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden" aria-hidden>
      <div
        className={`marquee-track flex w-max shrink-0 items-baseline gap-8 whitespace-nowrap ${className}`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-baseline gap-8">
            <span>{item}</span>
            <span className="text-[0.35em] text-[color:var(--muted-ink)]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
