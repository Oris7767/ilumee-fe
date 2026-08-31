import { Sparkles } from 'lucide-react';

export default function MentorshipPage() {
  return (
    <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
      <header className="text-center mb-12">
        <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
        <div className="tagline mb-4">Services · Mentorship</div>
        <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Mentorship 1-1</h1>
        <div className="lotus-divider mx-auto mt-4" />
        <p className="text-taupe mt-6 max-w-xl mx-auto">
          Đồng hành dài hạn — cho người cần một hệ thống sống theo thiết kế thật sự, không chỉ hiểu biết.
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-taupe">
        <h3 className="font-display text-2xl text-tertiary mb-4">Cấu trúc chương trình</h3>
        <ul className="space-y-3">
          <li><strong>4 buổi coaching mỗi tháng</strong> × 60 phút qua Zoom (lịch cố định theo tuần)</li>
          <li><strong>Truy cập async</strong> qua Telegram/Voice — câu hỏi nhỏ trong 24h</li>
          <li><strong>Monthly review</strong> — đánh giá tiến trình theo BodyGraph transit & Soul Plan dashboard</li>
          <li><strong>Cam kết tối thiểu 3 tháng</strong>, có thể gia hạn theo quý</li>
        </ul>
        <h3 className="font-display text-2xl text-tertiary mt-8 mb-4">Phù hợp với ai?</h3>
        <p>Reflector, Projector, hoặc Generator/Manifestor đang trong giai đoạn chuyển tiếp lớn (chuyển nghề, parenthood, founder journey…).</p>
        <h3 className="font-display text-2xl text-tertiary mt-8 mb-4">Đầu tư</h3>
        <p className="font-display text-3xl text-primary">$350 / tháng · cam kết 3 tháng</p>
        <a
          href="https://calendly.com/ilumee/intro?type=mentorship-1on1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary transition-all"
        >
          Đặt lịch tư vấn mentorship
        </a>
      </div>
    </div>
  );
}
