export function ContactForm3D({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={className} fill="none" aria-hidden role="presentation">
      <g stroke="rgba(242,240,233,0.6)" strokeWidth="1">
        <path d="M180 40 L300 130 L254 280 L106 280 L60 130 Z" />
        <path d="M180 40 L180 200 M60 130 L180 200 M300 130 L180 200 M106 280 L180 200 M254 280 L180 200" />
      </g>
      <g stroke="rgba(242,240,233,0.3)" strokeWidth="0.6" strokeDasharray="3 5">
        <circle cx="180" cy="180" r="150" />
        <path d="M10 180 H350" />
      </g>
      <circle cx="180" cy="200" r="4" fill="var(--acid)" />
      <g fill="rgba(242,240,233,0.5)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1.6">
        <text x="196" y="204">ORIGIN</text>
        <text x="14" y="172">13.08 N / 80.27 E</text>
      </g>
    </svg>
  );
}
