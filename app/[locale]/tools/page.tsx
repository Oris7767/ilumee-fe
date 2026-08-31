import Link from 'next/link';
import { Compass, Sparkles, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/primitives';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'tools',
  title: { vi: 'Công cụ', en: 'Tools', fr: 'Outils' },
  description: {
    vi: '3 công cụ huyền học ứng dụng: Human Design, Soul Plan, Thần số học — giải mã thiết kế năng lượng cá nhân.',
    en: 'Three applied metaphysics tools: Human Design, Soul Plan, and Numerology — decode your energetic design.',
    fr: 'Trois outils de métaphysique appliquée : Human Design, Soul Plan et Numérologie — décodez votre design énergétique.',
  },
});

export default async function ToolsHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tools = [
    { href: `/${locale}/tools/human-design`, icon: Compass, title: 'Human Design', tagline: 'BodyGraph + 9 Centers + 64 Gates', desc: 'Hệ thống kết hợp I Ching, Kabbalah, Chakra, Chiêm tinh — vẽ bản đồ 9 trung tâm năng lượng vận hành.' },
    { href: `/${locale}/tools/soul-plan`, icon: Sparkles, title: 'Soul Plan', tagline: 'Star of Creation · 6 vị trí', desc: 'Giải mã tên khai sinh qua Ngôi sao Sáng thế 6 cánh (Blue Marsden) — tài năng, thách thức, sứ mệnh.' },
    { href: `/${locale}/tools/numerology`, icon: BookOpen, title: 'Thần số học', tagline: 'Life Path · Expression · Soul Urge', desc: 'Trường phái Pythagorean — Đường đời, Số tên, Số linh hồn, Số cá tính, 10 khía cạnh.' },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(locale as AppLocale, [{ name: 'Tools', href: '/tools' }])} />
      <div className="pt-16 pb-24 max-w-5xl mx-auto px-6">
        <header className="text-center mb-12">
          <div className="tagline mb-4">Tools · 3 bộ môn</div>
          <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Công cụ</h1>
          <div className="lotus-divider mx-auto mt-4" />
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((t) => (
            <Link key={t.href} href={t.href} className="group">
              <Card className="h-full hover:-translate-y-2 transition-all group-hover:border-primary/50">
                <t.icon className="w-10 h-10 text-primary mb-4" />
                <div className="tagline mb-2">{t.tagline}</div>
                <h3 className="font-display text-3xl text-tertiary mb-3">{t.title}</h3>
                <p className="text-sm text-taupe leading-relaxed">{t.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
