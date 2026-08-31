import { Card } from '@/components/ui/primitives';
import { TYPE_EDUCATION, HDType } from '@/lib/education/hd-explanations';

interface Props {
  type: HDType;
  authority: string;
  definedCount: number;
}

export function EducationExplainer({ type, authority, definedCount }: Props) {
  const edu = TYPE_EDUCATION[type];
  const authorityHint = edu.authorityHint === authority ? 'Có' : '—';

  return (
    <Card className="bg-gradient-to-br from-rose/30 via-peach/20 to-ivory border-primary/20">
      <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
        Giảng giải về bộ môn · Human Design
      </div>
      <h2 className="font-display italic text-3xl lg:text-4xl text-tertiary mb-4">
        Human Design là gì?
      </h2>
      <p className="text-base text-taupe leading-relaxed mb-6 max-w-3xl">
        Human Design là hệ thống kết hợp <em>I Ching</em>, <em>Kinh Kabbalah</em>, <em>Hệ thống Chakra</em> và <em>Chiêm tinh</em>,
        dựa trên vị trí hành tinh tại thời điểm bạn sinh ra. Nó vẽ nên bản đồ 9 trung tâm năng lượng (BodyGraph), 36 đường kênh (Channels), và 64 cổng (Gates) — mỗi cái phản chiếu một khía cạnh cá tính bạn.
        Mục tiêu không phải "thay đổi" bản thân, mà là hiểu <strong>thiết kế gốc</strong> của bạn để sống đúng với nó.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <Block
          title="Type của bạn"
          value={`${type} — ${edu.short}`}
          body={edu.long}
        />
        <Block
          title="Inner Authority"
          value={`${authority} · ${authorityHint} phù hợp với Type`}
          body={`Cách cơ thể bạn ra quyết định — không phải qua lý trí, mà qua ${authorityHint === 'Có' ? 'đúng tín hiệu của Authority đi kèm Type.' : 'chiến lược riêng của bạn.'}`}
        />
        <Block
          title="Centers đã defined"
          value={`${definedCount} / 9 defined`}
          body="Đây là năng lượng cố định, có thể dựa vào. Center open thì bạn dễ tiếp nhận và học hỏi từ môi trường."
        />
        <Block
          title="Cách áp dụng thực tế"
          value={`Strategy: ${edu.strategy}.`}
          body={`Thực hành: mỗi sáng thức dậy, đặt câu hỏi cho cơ thể trước khi đầu óc can thiệp. Theo dõi tín hiệu Not-Self (${edu.notSelfTheme}) để biết bạn đang đi ngược lại thiết kế.`}
        />
      </div>
    </Card>
  );
}

function Block({ title, value, body }: { title: string; value: string; body: string }) {
  return (
    <div className="rounded-elegant bg-white/60 border border-accent/30 p-5">
      <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-1">{title}</div>
      <div className="font-display text-xl text-tertiary mb-2 leading-tight">{value}</div>
      <p className="text-sm text-taupe leading-relaxed">{body}</p>
    </div>
  );
}
