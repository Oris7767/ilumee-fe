import { Card } from '@/components/ui/primitives';
import type { HDChart } from '@/lib/mock-hd';

interface Props {
  channels: HDChart['channels'];
}

export function HDChannelsList({ channels }: Props) {
  const active = channels.filter((c) => c.defined);
  const inactive = channels.filter((c) => !c.defined);
  return (
    <Card>
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Channels · Defined</div>
      <p className="text-sm text-taupe mb-4">
        Channel là đường nối giữa hai Centers. Khi cả hai đầu đều defined, channel là "live" — bạn sở hữu mã thông điệp cố định giữa hai trung tâm.
      </p>
      {active.length === 0 ? (
        <p className="text-taupe italic">Không có channel defined — bạn hoàn toàn "open" giữa các center.</p>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-2">
          {active.map((ch) => (
            <li key={ch.id} className="flex items-start gap-2 p-3 rounded-elegant bg-accent/10 border border-accent/30">
              <span className="font-mono text-xs font-bold text-primary flex-shrink-0 mt-0.5">{ch.id}</span>
              <div>
                <div className="font-display text-sm text-tertiary leading-tight">{ch.name}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {inactive.length > 0 && (
        <details className="mt-6">
          <summary className="cursor-pointer text-sm text-taupe hover:text-primary">
            + {inactive.length} channels không active (xem thêm)
          </summary>
          <ul className="grid sm:grid-cols-2 gap-2 mt-3">
            {inactive.map((ch) => (
              <li key={ch.id} className="flex items-start gap-2 p-2 rounded-elegant bg-rose/20 border border-accent/15 opacity-70">
                <span className="font-mono text-xs font-bold text-taupe flex-shrink-0 mt-0.5">{ch.id}</span>
                <div>
                  <div className="font-display text-sm text-tauary leading-tight">{ch.name}</div>
                </div>
              </li>
            ))}
          </ul>
        </details>
      )}
    </Card>
  );
}
