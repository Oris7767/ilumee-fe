import { Card } from '@/components/ui/primitives';
import type { HDChart } from '@/lib/mock-hd';

interface Props {
  variables: HDChart['variables'];
}

export function HDVariablesCard({ variables }: Props) {
  const items = [
    { id: 'digestion', label: 'Digestion', data: variables.digestion },
    { id: 'environment', label: 'Environment', data: variables.environment },
    { id: 'awareness', label: 'Awareness', data: variables.awareness },
    { id: 'perspective', label: 'Perspective', data: variables.perspective },
  ];
  return (
    <Card>
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Variables · The 4 Transformations</div>
      <p className="text-sm text-taupe mb-6">
        Bốn mũi tên quanh đầu BodyGraph — tiết lộ cách bạn tiếp nhận thế giới: ăn uống, môi trường sống, nhận thức và góc nhìn.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border border-accent/30 rounded-elegant p-4 bg-ivory/60">
            <div className="font-display text-lg text-tertiary mb-1">{item.label}</div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-semibold text-primary">{item.data.side}</span>
              <span className="text-xs text-taupe">{item.data.value}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
