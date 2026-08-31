import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function NumerologyIntro() {
  return (
    <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
      <header className="text-center mb-12">
        <BookOpen className="w-14 h-14 text-primary mx-auto mb-4" />
        <div className="tagline mb-4">Tools · Thần số học</div>
        <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Thần số học</h1>
        <div className="lotus-divider mx-auto mt-4" />
        <p className="text-taupe mt-6 max-w-2xl mx-auto">
          Hệ Pythagorean — gán mỗi chữ cái một giá trị 1-9, từ đó tính ra các "con số chủ đạo" mô tả Đường đời, Số tên, Số linh hồn và nhiều khía cạnh khác.
        </p>
      </header>
      <article className="prose prose-lg max-w-none text-taupe">
        <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">6 con số chính</h2>
        <ul className="space-y-2">
          <li><strong>Life Path</strong> — sứ mệnh cuộc đời (từ ngày sinh)</li>
          <li><strong>Expression (Destiny)</strong> — tài năng bẩm sinh (từ tên đầy đủ)</li>
          <li><strong>Soul Urge (Heart's Desire)</strong> — động lực sâu thẳm (từ nguyên âm trong tên)</li>
          <li><strong>Personality</strong> — cách người khác thấy bạn (từ phụ âm)</li>
          <li><strong>Birthday Number</strong> — tài năng bẩm sinh từ ngày sinh</li>
          <li><strong>Maturity</strong> — số kết hợp Life Path + Expression (giai đoạn sau 35 tuổi)</li>
        </ul>
        <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">Master Numbers</h2>
        <p>Các số 11, 22, 33 được giữ nguyên — chúng mang ý nghĩa đặc biệt và được gọi là "Master Number".</p>
        <Link
          href="/vi/calculate/numerology"
          className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary transition-all"
        >
          Tính Thần số học của tôi <ArrowRight className="w-4 h-4" />
        </Link>
      </article>
    </div>
  );
}
