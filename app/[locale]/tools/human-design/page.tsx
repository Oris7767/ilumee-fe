import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function HumanDesignIntro() {
  return (
    <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
      <header className="text-center mb-12">
        <Compass className="w-14 h-14 text-primary mx-auto mb-4" />
        <div className="tagline mb-4">Tools · Human Design</div>
        <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Human Design</h1>
        <div className="lotus-divider mx-auto mt-4" />
        <p className="text-taupe mt-6 max-w-2xl mx-auto">
          Hệ thống "khoa học về sự khác biệt" được Ra Uru Hu truyền dạy từ 1987 — kết hợp I Ching, Kabbalah, Chakra và Chiêm tinh để vẽ nên bản đồ năng lượng cá nhân.
        </p>
      </header>

      <article className="prose prose-lg max-w-none text-taupe">
        <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">BodyGraph</h2>
        <p>
          BodyGraph là bản đồ năng lượng gồm <strong>9 Centers</strong> (Head, Ajna, Throat, G, Heart, Spleen, Solar Plexus, Sacral, Root),
          kết nối bởi <strong>36 Channels</strong>, mỗi channel kết thúc bằng hai <strong>Gates</strong> từ 64 quẻ Dịch.
          Center nào <em>defined</em> (tô màu) — bạn có nguồn năng lượng cố định. Center nào <em>open</em> — bạn dễ tiếp nhận và học hỏi từ môi trường.
        </p>
        <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">Type + Authority + Strategy</h2>
        <p>
          BodyGraph cho bạn biết <strong>Type</strong> — Generator, Manifesting Generator, Projector, Manifestor, Reflector (5 dạng).
          Mỗi Type có một <em>Strategy</em> và <em>Not-Self theme</em> riêng. Thêm <em>Inner Authority</em> (cách cơ thể bạn ra quyết định)
          và bạn có đủ công cụ để sống đúng thiết kế.
        </p>
        <h2 className="font-display text-3xl text-3xl text-tertiary mt-8 mb-4">Profile + Incarnation Cross</h2>
        <p>
          <strong>Profile</strong> (6 cặp Personality/Design line) cho biết "vai" bạn đóng trong cuộc đời.
          <strong>Incarnation Cross</strong> là chủ đề lớn bạn đến để sống — kết hợp 4 gate quyết định hướng đi tổng thể.
        </p>
        <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">Bắt đầu</h2>
        <p>Để có kết quả chính xác nhất, bạn cần <strong>ngày + giờ + nơi sinh</strong>. Nếu không biết giờ chính xác, chọn "không rõ" và bạn sẽ được disclaimer.</p>
        <Link
          href="/vi/calculate/human-design"
          className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary transition-all"
        >
          Tính BodyGraph của tôi <ArrowRight className="w-4 h-4" />
        </Link>
      </article>
    </div>
  );
}
