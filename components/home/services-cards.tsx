'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { GraduationCap, BookOpen, Heart, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/primitives';

export function ServicesCards() {
  const t = useTranslations('Home');
  const tNav = useTranslations('Nav');
  const locale = useLocale();

  const cards = [
    { icon: GraduationCap, label: tNav('servicesClasses'), href: `/${locale}/services/classes`, desc: 'Khóa học nền tảng về Soul Plan cơ bản, Sống thiết kế của bạn (Living Your Design).' },
    { icon: BookOpen, label: tNav('servicesReadings'), href: `/${locale}/services/readings`, desc: 'Đọc bản đồ linh hồn Soul Plan, 12 chìa khoá thành công BG5, Đánh thức tài năng theo Thần số học.' },
    { icon: Heart, label: tNav('servicesPackage'), href: `/${locale}/services/package`, desc: 'Báo cáo chuyên sâu + lớp học + 3 tháng coaching 1-1 (12h).' },
    { icon: Sparkles, label: tNav('servicesMentorship'), href: `/${locale}/services/mentorship`, desc: 'Mentorship 1-1 liên tục, đồng hành dài hạn.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-ivory via-peach/30 to-rose/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl text-tertiary mb-4">{t('servicesTitle')}</h2>
          <div className="lotus-divider mx-auto" />
          <p className="text-taupe mt-6 max-w-xl mx-auto">{t('servicesSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="group">
              <Card className="h-full text-center transition-all group-hover:-translate-y-1 group-hover:shadow-warm">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <card.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-tertiary mb-3">{card.label}</h3>
                <p className="text-sm text-taupe leading-relaxed">{card.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
