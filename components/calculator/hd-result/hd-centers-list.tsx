import { Card } from '@/components/ui/primitives';
import { CENTERS } from '@/lib/centers';
import type { HDChart } from '@/lib/mock-hd';
import { Check, Circle } from 'lucide-react';

interface Props {
  centers: HDChart['centers'];
}

export function HDCentersList({ centers }: Props) {
  const definedCount = Object.values(centers).filter((c) => c.defined).length;
  return (
    <Card>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">9 Centers</div>
        <div className="text-sm text-taupe">
          <span className="font-display text-2xl text-tertiary">{definedCount}</span>
          <span className="ml-1">/ 9 defined</span>
        </div>
      </div>
      <p className="text-sm text-taupe mb-6">
        Center defined (tô màu) là năng lượng cố định, đáng tin cậy. Center open (viền) là nơi bạn dễ tiếp nhận và bị ảnh hưởng từ bên ngoài.
      </p>
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {CENTERS.map((c) => {
          const defined = centers[c.id].defined;
          return (
            <div
              key={c.id}
              className={`flex items-start gap-3 p-3 rounded-elegant border transition ${
                defined
                  ? 'bg-accent/15 border-accent/40'
                  : 'bg-rose/30 border-accent/20'
              }`}
            >
              {defined ? (
                <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              ) : (
                <Circle className="w-4 h-4 mt-0.5 text-taupe/60 flex-shrink-0" />
              )}
              <div>
                <div className="font-display text-base text-tertiary leading-tight">{c.name}</div>
                <div className="text-xs text-taupe mt-1 leading-snug">{c.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
