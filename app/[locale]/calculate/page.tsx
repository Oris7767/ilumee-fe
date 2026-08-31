import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Calculator, Compass, BookOpen, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/primitives';

export default async function CalculateHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });
  const tools = [
    { href: `/${locale}/calculate/human-design`, icon: Compass, title: 'Human Design', desc: 'BodyGraph 9 Centers, 36 Channels, 64 Gates — đầy đủ Type, Strategy, Authority, Profile, Incarnation Cross.', tag: 'Khuyến nghị' },
    { href: `/${locale}/calculate/soul-plan`, icon: Sparkles, title: 'Soul Plan', desc: 'Giải mã tên khai sinh qua Ngôi sao Sáng thế 6 cánh (Blue Marsden).' },
    { href: `/${locale}/calculate/numerology`, icon: BookOpen, title: 'Thần số học', desc: 'Life Path, Expression, Soul Urge, Personality qua hệ Pythagorean.' },
  ];
  return (
    <div className="pt-16 pb-24 max-w-5xl mx-auto px-6">
      <header className="text-center mb-16">
        <div className="tagline mb-4">Công cụ tính</div>
        <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Chọn công cụ</h1>
        <div className="lotus-divider mx-auto mt-4" />
        <p className="text-taupe mt-6 max-w-xl mx-auto">Ba bản đồ cùng vẽ nên một bức tranh — con người bạn theo những chiều khác nhau.</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="group">
            <Card className="h-full hover:-translate-y-2 transition-all">
              <div className="flex items-start justify-between mb-4">
                <tool.icon className="w-8 h-8 text-primary" />
                {tool.tag && <span className="text-xs uppercase tracking-widest text-primary font-semibold">{tool.tag}</span>}
              </div>
              <h3 className="font-display text-2xl text-tertiary mb-2">{tool.title}</h3>
              <p className="text-sm text-taupe leading-relaxed">{tool.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
