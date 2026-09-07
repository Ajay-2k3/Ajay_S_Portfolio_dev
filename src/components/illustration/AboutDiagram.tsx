export function AboutDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 480" className={className} fill="none" aria-hidden role="presentation">
      <g stroke="rgba(242,240,233,0.28)" strokeWidth="0.6" strokeDasharray="2 6">
        <path d="M20 90 H400" />
        <path d="M20 240 H400" />
        <path d="M20 390 H400" />
      </g>

      <g stroke="rgba(242,240,233,0.7)" strokeWidth="1">
        <circle cx="110" cy="90" r="38" />
        <path d="M110 52 C 170 74, 176 140, 214 168" />
        <rect x="176" y="206" width="140" height="68" />
        <path d="M246 274 C 240 330, 190 344, 170 390" />
        <path d="M170 390 h120" />
        <path d="M170 390 l-14 -12 m14 12 l-14 12" />
      </g>

      <g stroke="rgba(242,240,233,0.4)" strokeWidth="0.7">
        <path d="M86 66 L134 114 M134 66 L86 114" />
        <path d="M176 240 H316" />
        <path d="M246 206 V274" />
      </g>

      <circle cx="110" cy="90" r="3.5" fill="var(--acid)" />

      <g fill="rgba(242,240,233,0.6)" fontFamily="var(--font-mono)" fontSize="8.5" letterSpacing="1.6">
        <text x="158" y="94">THINKING</text>
        <text x="330" y="244">SYSTEMS</text>
        <text x="300" y="386">IMPLEMENTATION</text>
      </g>
    </svg>
  );
}
