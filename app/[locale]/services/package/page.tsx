import { Heart, Star, Check } from 'lucide-react';

export default function PackagePage() {
  return (
    <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
      <header className="text-center mb-12">
        <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
        <div className="tagline mb-4">Services · Flagship Package</div>
        <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Combo 3 tháng</h1>
        <div className="lotus-divider mx-auto mt-4" />
        <p className="text-taupe mt-6 max-w-2xl mx-auto">
          Báo cáo chuyên sâu + lớp học nền tảng + 3 tháng coaching 1-1 (12 giờ). Hành trình toàn diện cho người muốn dấn thân thật sự.
        </p>
      </header>

      <div className="bg-white/85 backdrop-blur-sm border-2 border-primary/40 rounded-elegant shadow-warm p-8">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-primary" />
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">Flagship</span>
        </div>
        <h2 className="font-display text-3xl text-tertiary mb-6">Combo 3 tháng · $1,200</h2>
        <ul className="space-y-3 text-taupe">
          <ListItem>Báo cáo chuyên sâu 30-40 trang (Human Design + Soul Plan + Thần số học)</ListItem>
          <ListItem>1 phiên reading khai mở 90 phút</ListItem>
          <ListItem>12 giờ coaching 1-1 qua Zoom — chia đều 3 tháng</ListItem>
          <ListItem>Lớp học Living Your Design (Human Design chính thức)</ListItem>
          <ListItem>Cộng đồng ILUMEE alumnae — truy cập trọn đời</ListItem>
        </ul>
        <a
          href="https://calendly.com/ilumee/intro?type=package-combo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary transition-all"
        >
          Đặt lịch tư vấn combo
        </a>
      </div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
      <span>{children}</span>
    </li>
  );
}
