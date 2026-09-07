export function HeroSculpture({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 620"
      className={className}
      fill="none"
      aria-hidden
      role="presentation"
    >
      <g stroke="rgba(242,240,233,0.35)" strokeWidth="0.75">
        <path d="M60 520 L250 40 L470 300 L300 590 Z" />
        <path d="M60 520 L470 300" />
        <path d="M250 40 L300 590" />
        <path d="M155 280 L385 445" />
        <path d="M120 400 L360 165" />
      </g>

      <g stroke="rgba(242,240,233,0.75)" strokeWidth="1.15">
        <path d="M150 470 C 210 330, 190 210, 290 130 C 360 74, 430 130, 425 215 C 419 320, 300 330, 262 430 C 232 508, 300 545, 356 520" />
        <path d="M120 452 C 190 320, 168 196, 268 112" />
        <path d="M188 486 C 246 352, 224 232, 320 152" />
      </g>

      <g stroke="rgba(242,240,233,0.5)" strokeWidth="0.6" strokeDasharray="3 5">
        <path d="M40 300 H480" />
        <path d="M260 20 V600" />
        <circle cx="290" cy="130" r="46" />
        <circle cx="262" cy="430" r="32" />
      </g>

      <g fill="rgba(242,240,233,0.9)">
        <circle cx="290" cy="130" r="3" />
        <circle cx="425" cy="215" r="3" />
        <circle cx="150" cy="470" r="3" />
      </g>
      <circle cx="262" cy="430" r="4" fill="var(--acid)" />

      <g stroke="var(--acid)" strokeWidth="1">
        <path d="M425 215 l24 0 m-12 -12 l0 24" opacity="0.8" />
      </g>

      <g fill="rgba(242,240,233,0.55)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1.6">
        <text x="300" y="122">NODE.A</text>
        <text x="276" y="452">Δ 0.42</text>
        <text x="44" y="292">AXIS_X</text>
        <text x="392" y="470">R = 118</text>
      </g>
    </svg>
  );
}
