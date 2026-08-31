import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SoulPlanIntro() {
  return (
    <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
      <header className="text-center mb-12">
        <Sparkles className="w-14 h-14 text-primary mx-auto mb-4" />
        <div className="tagline mb-4">Tools · Soul Plan</div>
        <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Soul Plan</h1>
        <div className="lotus-divider mx-auto mt-4" />
        <p className="text-taupe mt-6 max-w-2xl mx-auto">
          Phương pháp của Blue Marsden — giải mã tên khai sinh qua <strong>Ngôi sao Sáng thế 6 cánh</strong> gồm 6 cặp số + 1 số Soul Destiny ở trung tâm.
        </p>
      </header>
      <article className="prose prose-lg max-w-none text-taupe">
        <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">Ngôi sao 6 cánh</h2>
        <p>Mỗi người có 6 vị trí trên ngôi sao — chia làm 2 tam giác: <strong>Tam giác Thế giới</strong> (Talent, Challenge, Goal) và <strong>Tam giác Tâm linh</strong> (Talent, Challenge, Goal). Mỗi vị trí mang 1 cặp số có ý nghĩa riêng.</p>
        <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">Soul Destiny</h2>
        <p>Số ở trung tâm ngôi sao — con số duy nhất, tổng hợp toàn bộ tên — đại diện cho <strong>sứ mệnh cốt lõi</strong> của bạn trong đời này.</p>
        <Link
          href="/vi/calculate/soul-plan"
          className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary transition-all"
        >
          Tính Soul Plan của tôi <ArrowRight className="w-4 h-4" />
        </Link>
      </article>
    </div>
  );
}
