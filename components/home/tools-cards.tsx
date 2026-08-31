'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/primitives';

const ICONS = { Compass, Sparkles, BookOpen };

export function ToolsCards() {
  const t = useTranslations('Home');
  const tCard = useTranslations('ToolCard');
  const locale = useLocale();

  const cards = [
    { eyebrow: tCard('humanDesignEyebrow'), title: tCard('humanDesignTitle'), desc: tCard('humanDesignDesc'), icon: 'Compass', href: `/${locale}/calculate/human-design`, cta: `/${locale}/tools/human-design` },
    { eyebrow: tCard('soulPlanEyebrow'), title: tCard('soulPlanTitle'), desc: tCard('soulPlanDesc'), icon: 'Sparkles', href: `/${locale}/calculate/soul-plan`, cta: `/${locale}/tools/soul-plan` },
    { eyebrow: tCard('numerologyEyebrow'), title: tCard('numerologyTitle'), desc: tCard('numerologyDesc'), icon: 'BookOpen', href: `/${locale}/calculate/numerology`, cta: `/${locale}/tools/numerology` },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="tagline mb-4">{t('toolsTitle')}</div>
          <h2 className="font-display text-4xl lg:text-6xl text-tertiary mb-4">{t('toolsTitle')}</h2>
          <div className="lotus-divider mx-auto" />
          <p className="text-taupe mt-6 max-w-xl mx-auto">{t('toolsSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = ICONS[card.icon as keyof typeof ICONS];
            return (
              <Link key={card.href} href={card.href} className="group">
                <Card className="h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-warm group-hover:border-primary/40 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <Icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                  <div className="tagline mb-3">{card.eyebrow}</div>
                  <h3 className="font-display text-2xl lg:text-3xl text-tertiary mb-4 leading-tight">{card.title}</h3>
                  <p className="text-taupe leading-relaxed mb-6">{card.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
                    Tính ngay <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
