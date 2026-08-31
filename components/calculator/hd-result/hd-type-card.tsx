import { Card } from '@/components/ui/primitives';
import { TYPE_EDUCATION, HDType } from '@/lib/education/hd-explanations';

interface Props {
  type: HDType;
  strategy: string;
  authority: string;
}

export function HDTypeCard({ type, strategy, authority }: Props) {
  const edu = TYPE_EDUCATION[type];
  return (
    <Card className="border-t-4 border-t-primary">
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Type</div>
      <h3 className="font-display text-3xl lg:text-4xl text-tertiary mb-3">{type}</h3>
      <p className="text-taupe leading-relaxed mb-6">{edu.long}</p>

      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        <Field label="Strategy" value={edu.strategy} />
        <Field label="Authority" value={`${authority} — ${edu.authorityHint === authority ? 'match' : 'see explanation'}`} />
        <Field label="Signature" value={edu.signature} />
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <SignatureNote tone="positive" title="Signature" body={edu.signature + ' — dấu hiệu cho biết bạn đang sống đúng thiết kế.'} />
        <SignatureNote tone="negative" title="Not-Self" body={edu.notSelfTheme + ' — tín hiệu cảnh báo bạn đang đi sai hướng.'} />
      </div>
    </Card>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-taupe mb-1">{label}</div>
      <div className="font-display text-lg text-tertiary leading-tight">{value}</div>
    </div>
  );
}

function SignatureNote({ tone, title, body }: { tone: 'positive' | 'negative'; title: string; body: string }) {
  return (
    <div
      className={`rounded-elegant p-4 border ${
        tone === 'positive'
          ? 'bg-accent/15 border-accent/40 text-tertiary'
          : 'bg-primary/10 border-primary/30 text-tertiary'
      }`}
    >
      <div className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-70">{title}</div>
      <div className="text-sm leading-relaxed">{body}</div>
    </div>
  );
}
