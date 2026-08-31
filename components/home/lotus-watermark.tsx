export function LotusWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-right corner lotus */}
      <svg
        viewBox="0 0 200 200"
        className="absolute -top-12 -right-12 w-72 h-72 opacity-[0.07]"
      >
        <g transform="translate(100 100)">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-50"
              rx="14"
              ry="40"
              fill="#b21267"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle r="14" fill="#e0b755" />
        </g>
      </svg>
      {/* Bottom-left softer lotus */}
      <svg
        viewBox="0 0 200 200"
        className="absolute -bottom-24 -left-24 w-96 h-96 opacity-[0.04]"
      >
        <g transform="translate(100 100)">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-50"
              rx="14"
              ry="40"
              fill="#824542"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle r="14" fill="#e0b755" />
        </g>
      </svg>
    </div>
  );
}
