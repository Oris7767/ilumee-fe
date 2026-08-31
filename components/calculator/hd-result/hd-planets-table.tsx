import { Card } from '@/components/ui/primitives';
import type { PlanetEntry } from '@/lib/mock-hd';

interface Props {
  planets: PlanetEntry[];
}

export function HDPlanetsTable({ planets }: Props) {
  return (
    <Card>
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">64 Gates × Hành tinh</div>
      <p className="text-sm text-taupe mb-4">
        Mỗi hành tinh tại thời điểm sinh kích hoạt một Gate trên BodyGraph. Đen (Personality) — conscious; Đỏ (Design) — unconscious.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-widest text-taupe border-b border-accent/30">
              <th className="py-3 text-left">Planet</th>
              <th className="py-3 text-left">Personality</th>
              <th className="py-3 text-left">Design</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((p) => (
              <tr key={p.name} className="border-b border-accent/15 last:border-0">
                <td className="py-3 font-display text-base text-tertiary">{p.name}</td>
                <td className="py-3">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-ink text-white font-mono text-xs">
                    Gate {p.personality.gate} · Line {p.personality.line}
                  </span>
                </td>
                <td className="py-3">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary text-white font-mono text-xs">
                    Gate {p.design.gate} · Line {p.design.line}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
