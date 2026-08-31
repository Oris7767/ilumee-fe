import { Card } from '@/components/ui/primitives';

interface Props {
  profile: string;
  definition: string;
  incarnationCross: { name: string; description: string };
}

export function HDProfileCard({ profile, definition, incarnationCross }: Props) {
  return (
    <Card>
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Profile · Definition</div>
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="font-display text-4xl text-primary mb-1">{profile}</div>
          <div className="text-sm text-taupe">Profile (Personality/Design Lines)</div>
        </div>
        <div>
          <div className="font-display text-2xl text-tertiary mb-1">{definition}</div>
          <div className="text-sm text-taupe">Definition — phạm vi kết nối năng lượng</div>
        </div>
      </div>

      <div className="border-t border-accent/20 pt-6">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Incarnation Cross</div>
        <h3 className="font-display text-2xl text-tertiary mb-3">{incarnationCross.name}</h3>
        <p className="text-taupe leading-relaxed">{incarnationCross.description}</p>
      </div>
    </Card>
  );
}
