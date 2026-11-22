// Decorative line-art foliage. Purely visual (aria-hidden).

interface Props {
  className?: string;
}

/** A monstera leaf in a single fine line. */
export function MonsteraLine({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M100 210c0-40 2-80 4-120" />
      <path d="M104 90C70 88 30 70 22 40 58 18 98 22 120 40c22-20 58-26 62 6 4 32-30 52-78 44Z" />
      <path d="M104 90 60 54M104 90l-30-6M104 90l-8-46M104 90l40-42M104 90l52-14M104 90l26 8" />
      <path d="M46 46c6 6 12 8 20 8M84 30c2 8 6 12 12 14M140 36c-4 8-4 14 0 20M164 60c-8 2-12 6-14 12" />
    </svg>
  );
}

/** A long fern frond, for edges of sections. */
export function FernLine({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M60 316C58 220 64 110 90 6" />
      {Array.from({ length: 11 }).map((_, i) => {
        const y = 290 - i * 26;
        const x = 60 + i * 2.4;
        const len = 46 - i * 3;
        return (
          <g key={i}>
            <path d={`M${x} ${y}c-${len * 0.5} -6 -${len * 0.9} -14 -${len} -26`} />
            <path d={`M${x} ${y}c${len * 0.5} -8 ${len * 0.9} -18 ${len} -30`} />
          </g>
        );
      })}
    </svg>
  );
}

/** Soft fairy-light dots for dark sections. */
export function FairyLights({ className }: Props) {
  const dots = [
    [8, 18], [17, 9], [27, 22], [38, 12], [49, 26], [61, 10], [72, 21], [83, 8], [92, 19],
    [13, 64], [31, 78], [56, 70], [77, 84], [95, 66], [4, 90], [44, 94], [66, 48], [22, 44],
  ];
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {dots.map(([x, y], i) => (
        <span
          key={i}
          className={`fairy-light absolute h-1.5 w-1.5 rounded-full bg-gold ${i % 2 ? "hidden md:block" : ""}`}
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i % 6) * 0.7}s` }}
        />
      ))}
    </div>
  );
}
