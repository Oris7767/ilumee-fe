'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { GraduationCap, BookOpen, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function ServicesCards() {
  const t = useTranslations('Home');
  const tNav = useTranslations('Nav');
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { 
      icon: GraduationCap, 
      label: tNav('servicesClasses'), 
      href: `/${locale}/services/classes`, 
      desc: 'Khóa học nền tảng về Soul Plan cơ bản, Sống thiết kế của bạn (Living Your Design).',
      color: '#B21267',
      gradient: 'from-primary/20 to-accent/10',
    },
    { 
      icon: BookOpen, 
      label: tNav('servicesReadings'), 
      href: `/${locale}/services/readings`, 
      desc: 'Đọc bản đồ linh hồn Soul Plan, 12 chìa khoá thành công BG5, Đánh thức tài năng theo Thần số học.',
      color: '#982170',
      gradient: 'from-secondary/20 to-mauve/10',
    },
    { 
      icon: Heart, 
      label: tNav('servicesPackage'), 
      href: `/${locale}/services/package`, 
      desc: 'Báo cáo chuyên sâu + lớp học + 3 tháng coaching 1-1 (12h).',
      color: '#E0B755',
      gradient: 'from-accent/20 to-peach/10',
    },
    { 
      icon: Sparkles, 
      label: tNav('servicesMentorship'), 
      href: `/${locale}/services/mentorship`, 
      desc: 'Mentorship 1-1 liên tục, đồng hành dài hạn.',
      color: '#824542',
      gradient: 'from-tertiary/20 to-rose/10',
    },
  ];

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-peach/20 via-rose/10 to-ivory relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-rose/20 border border-accent/20">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-tertiary font-bold">
              Dịch vụ
            </span>
          </div>
          
          <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl text-tertiary mb-8 leading-[0.9] tracking-tight">
            <span className="font-light">{t('servicesTitle').split(' ')[0]}</span>
            <br />
            <span className="font-light italic">{t('servicesTitle').split(' ').slice(1).join(' ')}</span>
          </h2>

          <div className="relative w-40 h-0.5 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
            <div className="absolute -top-1 left-0 w-2 h-2 bg-accent rotate-45" />
          </div>

          <p className="text-xl lg:text-2xl text-taupe/90 leading-relaxed font-light max-w-2xl">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Cards grid - bento-style 4-column with UNIQUE colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card container with depth */}
                <div 
                  className="relative h-full min-h-[380px] bg-white/60 backdrop-blur-sm border rounded-2xl p-8 lg:p-10 transition-all duration-400"
                  style={{
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    borderColor: isHovered ? card.color : 'rgba(224, 183, 85, 0.3)',
                    boxShadow: '0 14px 40px -22px rgba(130, 69, 66, 0.18)',
                  }}
                >
                  {/* Top accent bar - đơn giản hóa */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-400"
                    style={{
                      backgroundColor: card.color,
                      opacity: isHovered ? 0.6 : 0,
                    }}
                  />

                  {/* Content */}
                  <div className="flex flex-col h-full">
                    {/* Icon - đơn giản hóa */}
                    <div 
                      className="relative w-16 h-16 mb-8 rounded-full flex items-center justify-center transition-all duration-400"
                      style={{
                        background: isHovered 
                          ? `radial-gradient(circle at 35% 35%, ${card.color}22, ${card.color}11)` 
                          : `radial-gradient(circle at 35% 35%, #E0B75522, #E0B75511)`,
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 transition-colors duration-400"
                        style={{ color: isHovered ? card.color : '#726758' }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl lg:text-3xl text-tertiary mb-4 leading-tight font-normal">
                      {card.label}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-px bg-gradient-to-r from-accent/40 to-transparent mb-6" />

                    {/* Description */}
                    <p className="text-taupe/80 leading-relaxed text-sm lg:text-base flex-grow">
                      {card.desc}
                    </p>

                    {/* CTA */}
                    <div 
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] mt-8 transition-all duration-300"
                      style={{ color: card.color }}
                    >
                      <span>Tìm hiểu</span>
                      <ArrowRight 
                        className="w-4 h-4 transition-transform duration-300"
                        style={{
                          transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div 
                    className="absolute bottom-0 right-0 w-20 h-20 border-r border-b transition-opacity duration-500"
                    style={{
                      borderColor: card.color,
                      opacity: isHovered ? 0.2 : 0.05,
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 lg:mt-28">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-4 px-12 py-5 border-2 border-tertiary/30 text-tertiary font-bold uppercase tracking-[0.25em] text-xs hover:bg-gradient-to-r hover:from-rose/30 hover:to-peach/30 hover:border-accent/50 transition-all duration-300 group"
          >
            Xem chi tiết dịch vụ
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
