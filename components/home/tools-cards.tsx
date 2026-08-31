'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';
import { useState } from 'react';

const ICONS = { Compass, Sparkles, BookOpen };

export function ToolsCards() {
  const t = useTranslations('Home');
  const tCard = useTranslations('ToolCard');
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { 
      eyebrow: tCard('humanDesignEyebrow'), 
      title: tCard('humanDesignTitle'), 
      desc: tCard('humanDesignDesc'), 
      icon: 'Compass', 
      color: '#982170',
      href: `/${locale}/calculate/human-design`, 
    },
    { 
      eyebrow: tCard('soulPlanEyebrow'), 
      title: tCard('soulPlanTitle'), 
      desc: tCard('soulPlanDesc'), 
      icon: 'Sparkles', 
      color: '#B21267',
      href: `/${locale}/calculate/soul-plan`, 
    },
    { 
      eyebrow: tCard('numerologyEyebrow'), 
      title: tCard('numerologyTitle'), 
      desc: tCard('numerologyDesc'), 
      icon: 'BookOpen', 
      color: '#824542',
      href: `/${locale}/calculate/numerology`, 
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-rose/5 to-transparent relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-[1180px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Section header - như mockup */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-accent/20">
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-accent font-bold">
              {t('toolsEyebrow')}
            </span>
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-tertiary mb-4 leading-tight font-light italic">
            {t('toolsTitle')}
          </h2>

          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-accent">
              <path d="M12 2c2 4 6 6 10 6-4 0-8 2-10 6-2-4-6-6-10-6 4 0 8-2 10-6z"/>
            </svg>
            <div className="flex-1 h-px bg-gradient-to-r from-accent via-transparent to-transparent" />
          </div>

          <p className="text-base lg:text-lg text-taupe leading-relaxed max-w-2xl mx-auto">
            {t('toolsSubtitle')}
          </p>
        </div>

        {/* Cards grid - đơn giản, rõ ràng */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = ICONS[card.icon as keyof typeof ICONS];
            const isHovered = hoveredIndex === index;
            
            return (
              <Link 
                key={card.href} 
                href={card.href} 
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card - CSS transition đơn giản như mockup */}
                <div 
                  className="relative h-full bg-white/60 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 transition-all duration-400"
                  style={{
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    borderColor: isHovered ? card.color : 'rgba(224, 183, 85, 0.3)',
                    boxShadow: isHovered 
                      ? '0 14px 40px -22px rgba(130, 69, 66, 0.18)' 
                      : '0 14px 40px -22px rgba(130, 69, 66, 0.18)',
                  }}
                >
                  {/* Icon - đơn giản, không 3D */}
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-400"
                    style={{
                      background: isHovered 
                        ? `radial-gradient(circle at 35% 35%, ${card.color}22, ${card.color}11)` 
                        : `radial-gradient(circle at 35% 35%, #E0B75522, #E0B75511)`,
                    }}
                  >
                    <Icon 
                      className="w-10 h-10 transition-colors duration-400" 
                      strokeWidth={1.5}
                      style={{ color: isHovered ? card.color : '#E0B755' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="text-[0.65rem] uppercase tracking-[0.28em] font-bold" style={{ color: card.color }}>
                      {card.eyebrow}
                    </div>
                    
                    <h3 className="font-display text-2xl lg:text-3xl text-tertiary leading-tight font-normal italic">
                      {card.title}
                    </h3>
                    
                    <p className="text-taupe/80 leading-relaxed text-sm">
                      {card.desc}
                    </p>

                    {/* CTA arrow */}
                    <div 
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] pt-2 transition-all duration-300"
                      style={{ color: card.color }}
                    >
                      <span>Khám phá</span>
                      <ArrowRight 
                        className="w-4 h-4 transition-transform duration-300"
                        style={{
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <Link
            href={`/${locale}/tools`}
            className="inline-flex items-center gap-3 px-10 py-4 border border-tertiary/30 text-tertiary font-bold uppercase tracking-[0.2em] text-xs hover:border-accent/50 hover:bg-rose/20 transition-all duration-300"
          >
            Xem tất cả công cụ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
