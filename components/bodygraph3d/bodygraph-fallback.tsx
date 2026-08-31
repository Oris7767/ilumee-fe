'use client';

import { useState } from 'react';
import { CENTERS, CENTER_BY_ID, CenterId } from '@/lib/centers';
import { CHANNELS, CHANNEL_BY_ID } from '@/lib/channels';
import type { HDChart } from '@/lib/mock-hd';

interface Props {
  chart: HDChart;
}

/**
 * 2D SVG fallback for users without WebGL.
 * Renders 9 centers + 36 channels in a "standard" Jovian Archive-style layout.
 * Defined centers = filled gold, open = outlined mauve.
 * Active channels = gold filled, inactive = dashed gray.
 */
export function BodyGraphFallback({ chart }: Props) {
  const [hoveredCenter, setHoveredCenter] = useState<CenterId | null>(null);

  const W = 800, H = 800;
  const scale = 30;
  const cx = W / 2;
  const cy = H / 2;
  const toXY = (p: [number, number]) => [cx + p[0] * scale, cy + p[1] * scale] as const;

  return (
    <div className="relative w-full aspect-square max-h-[680px] bg-cosmic rounded-elegant overflow-hidden">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0b755" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#e0b755" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e0b755" stopOpacity="0" />
          </radialGradient>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Channels */}
        {CHANNELS.map((ch) => {
          const [fx, fy] = toXY(CENTER_BY_ID[ch.from].position);
          const [tx, ty] = toXY(CENTER_BY_ID[ch.to].position);
          const defined = chart.channels.find((c) => c.id === ch.id)?.defined ?? false;
          return (
            <line
              key={ch.id}
              x1={fx}
              y1={fy}
              x2={tx}
              y2={ty}
              stroke={defined ? '#e0b755' : '#3a3a3a'}
              strokeWidth={defined ? 4 : 1.2}
              strokeOpacity={defined ? 0.85 : 0.4}
              strokeDasharray={defined ? undefined : '4,4'}
            />
          );
        })}

        {/* Centers */}
        {CENTERS.map((c) => {
          const [x, y] = toXY(c.position);
          const defined = chart.centers[c.id].defined;
          const isHover = hoveredCenter === c.id;
          const fill = defined ? '#e0b755' : 'transparent';
          const stroke = defined ? '#e0b755' : '#c99894';
          const strokeW = isHover ? 4 : 2;
          const radius = 28 + (defined ? 4 : 0);
          return (
            <g
              key={c.id}
              transform={`translate(${x},${y})`}
              onMouseEnter={() => setHoveredCenter(c.id)}
              onMouseLeave={() => setHoveredCenter(null)}
              style={{ cursor: 'pointer' }}
            >
              {defined && (
                <>
                  <circle r={radius * 1.8} fill="url(#centerGlow)" filter="url(#softBlur)" />
                  <circle r={radius * 1.3} fill="url(#centerGlow)" opacity="0.6" />
                </>
              )}
              {c.shape === 'diamond' ? (
                <polygon
                  points={`0,${-radius} ${radius},0 0,${radius} ${-radius},0`}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeW}
                />
              ) : (
                <rect
                  x={-radius}
                  y={-radius}
                  width={radius * 2}
                  height={radius * 2}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeW}
                  transform={`rotate(${c.shape === 'triangle' ? 0 : 0})`}
                />
              )}
              {c.shape === 'triangle' && (
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="11"
                  fontWeight="600"
                  fill={defined ? '#1a1a1a' : '#f8eed8'}
                >
                  {c.name.charAt(0)}
                </text>
              )}
              {c.shape === 'square' && (
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="10"
                  fontWeight="600"
                  fill={defined ? '#1a1a1a' : '#f8eed8'}
                >
                  {c.name.split(' ')[0].charAt(0)}
                </text>
              )}
              {isHover && (
                <text
                  y={-radius - 18}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="600"
                  fill="#f8eed8"
                >
                  {c.name} · {defined ? 'Defined' : 'Open'}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-3 text-[10px] sm:text-xs text-white/80 pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          Defined Center
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full border border-mauve" />
          Open Center
        </span>
      </div>
    </div>
  );
}

BodyGraphFallback.Loader = function Loader() {
  return (
    <div className="relative w-full aspect-square max-h-[680px] bg-cosmic rounded-elegant flex items-center justify-center">
      <div className="text-white/70 text-sm">Đang tải BodyGraph…</div>
    </div>
  );
};
