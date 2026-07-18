export function HeroPlan() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.22]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#C87A53"
            strokeWidth="0.4"
            opacity="0.35"
          />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grid)" />

      {/* Board slats top (stringers) */}
      <g stroke="#F9F6F0" strokeWidth="1.5" fill="none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const y = 180 + i * 30;
          return (
            <rect
              key={`t-${i}`}
              x="150"
              y={y}
              width="500"
              height="16"
              style={{
                strokeDasharray: 1050,
                strokeDashoffset: 1050,
                animation: `draw-line 1.6s cubic-bezier(0.4,0,0.2,1) forwards`,
                animationDelay: `${0.4 + i * 0.35}s`,
              }}
            />
          );
        })}
      </g>

      {/* Cross stringers */}
      <g stroke="#C87A53" strokeWidth="1.5" fill="none">
        {[170, 390, 610].map((x, i) => (
          <rect
            key={`s-${i}`}
            x={x}
            y="180"
            width="20"
            height="196"
            style={{
              strokeDasharray: 500,
              strokeDashoffset: 500,
              animation: `draw-line 1.4s cubic-bezier(0.4,0,0.2,1) forwards`,
              animationDelay: `${0.15 + i * 0.2}s`,
            }}
          />
        ))}
      </g>

      {/* Dimension lines */}
      <g stroke="#F9F6F0" strokeWidth="0.75" opacity="0.85" fill="none">
        <line
          x1="150"
          y1="420"
          x2="650"
          y2="420"
          style={{
            strokeDasharray: 500,
            strokeDashoffset: 500,
            animation: `draw-line 1s ease-out forwards`,
            animationDelay: `3s`,
          }}
        />
        <line x1="150" y1="415" x2="150" y2="425" />
        <line x1="650" y1="415" x2="650" y2="425" />
      </g>
      <text
        x="400"
        y="440"
        textAnchor="middle"
        fill="#F9F6F0"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
        opacity="0.9"
        className="animate-fade-up"
        style={{ animationDelay: "3.3s" } as React.CSSProperties}
      >
        1200 MM · ±3
      </text>

      {/* Callout circle */}
      <g
        opacity="0.9"
        className="animate-fade-up"
        style={{ animationDelay: "3.5s" } as React.CSSProperties}
      >
        <circle
          cx="700"
          cy="200"
          r="26"
          fill="none"
          stroke="#A3E14B"
          strokeWidth="1.2"
        />
        <text
          x="700"
          y="204"
          textAnchor="middle"
          fill="#A3E14B"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
        >
          HT · 56°C
        </text>
      </g>
    </svg>
  );
}
