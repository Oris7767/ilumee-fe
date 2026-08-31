'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

const Scene3DWrapper = dynamic(
  () => import('@/components/3d/scene-wrapper').then((mod) => mod.Scene3DWrapper),
  { ssr: false }
);
const Tool3DOrb = dynamic(
  () => import('@/components/3d/tool-orb-3d').then((mod) => mod.Tool3DOrb),
  { ssr: false }
);

const ICONS = { Compass, Sparkles, BookOpen };

type ToolIcon = 'soulplan' | 'humandesign' | 'numerology';

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
      orb: 'humandesign' as ToolIcon,
      color: '#982170',
      href: `/${locale}/calculate/human-design`, 
      cta: `/${locale}/tools/human-design` 
    },
    { 
      eyebrow: tCard('soulPlanEyebrow'), 
      title: tCard('soulPlanTitle'), 
      desc: tCard('soulPlanDesc'), 
      icon: 'Sparkles', 
      orb: 'soulplan' as ToolIcon,
      color: '#B21267',
      href: `/${locale}/calculate/soul-plan`, 
      cta: `/${locale}/tools/soul-plan` 
    },
    { 
      eyebrow: tCard('numerologyEyebrow'), 
      title: tCard('numerologyTitle'), 
      desc: tCard('numerologyDesc'), 
      icon: 'BookOpen', 
      orb: 'numerology' as ToolIcon,
      color: '#824542',
      href: `/${locale}/calculate/numerology`, 
      cta: `/${locale}/tools/numerology` 
    },
  ];

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-transparent via-rose/5 to-peach/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section header - editorial style */}
        <div className="max-w-3xl mb-20 lg:mb-32">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-tertiary font-bold">
              {t('toolsEyebrow')}
            </span>
          </div>
          
          <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl text-tertiary mb-8 leading-[0.9] tracking-tight font-light">
            <span className="italic">{t('toolsTitle').split(' ')[0]}</span>
            <br />
            <span className="font-normal">{t('toolsTitle').split(' ').slice(1).join(' ')}</span>
          </h2>

          <div className="relative w-40 h-0.5 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
            <div className="absolute -top-1 left-0 w-2 h-2 bg-accent rotate-45" />
          </div>

          <p className="text-xl lg:text-2xl text-taupe/90 leading-relaxed font-light max-w-2xl">
            {t('toolsSubtitle')}
          </p>
        </div>

        {/* Cards grid - NOT uniform, layered depth */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => {
            const Icon = ICONS[card.icon as keyof typeof ICONS];
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
                  className="relative h-full bg-ivory border border-accent/20 p-8 lg:p-10 transition-all duration-700 ease-out"
                  style={{
                    transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: isHovered 
                      ? '0 40px 100px -20px rgba(130, 69, 66, 0.25), inset 0 1px 0 rgba(224, 183, 85, 0.2)' 
                      : '0 20px 60px -20px rgba(130, 69, 66, 0.12)',
                  }}
                >
                  {/* Top accent border */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r transition-all duration-700"
                    style={{
                      background: `linear-gradient(90deg, ${card.color}, #E0B755)`,
                      transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                    }}
                  />

                  {/* 3D Orb - top of card */}
                  <div className="relative w-full h-48 mb-8 -mt-4">
                    <Suspense 
                      fallback={
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon className="w-16 h-16 text-primary animate-pulse" strokeWidth={1} />
                        </div>
                      }
                    >
                      <Scene3DWrapper cameraPosition={[0, 0, 4]}>
                        <Tool3DOrb 
                          icon={card.orb}
                          color={card.color}
                          scale={0.8}
                          isHovered={isHovered}
                        />
                      </Scene3DWrapper>
                    </Suspense>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="text-[0.65rem] uppercase tracking-[0.35em] font-bold" style={{ color: card.color }}>
                        {card.eyebrow}
                      </div>
                      
                      <h3 className="font-display text-3xl lg:text-4xl text-tertiary leading-tight font-normal">
                        {card.title}
                      </h3>
                      
                      <div className="w-16 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                      
                      <p className="text-taupe/80 leading-relaxed text-base">
                        {card.desc}
                      </p>
                    </div>

                    {/* CTA */}
                    <div 
                      className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 pt-4"
                      style={{ color: card.color }}
                    >
                      <span>Khám phá</span>
                      <ArrowRight 
                        className="w-5 h-5 transition-transform duration-300"
                        style={{
                          transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom corner accent */}
                  <div 
                    className="absolute bottom-0 right-0 w-24 h-24 border-r border-b transition-opacity duration-500"
                    style={{
                      borderColor: card.color,
                      opacity: isHovered ? 0.3 : 0.1,
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 lg:mt-32">
          <Link
            href={`/${locale}/tools`}
            className="inline-flex items-center gap-4 px-12 py-5 border-2 border-tertiary/30 text-tertiary font-bold uppercase tracking-[0.25em] text-xs hover:bg-gradient-to-r hover:from-rose/30 hover:to-peach/30 hover:border-accent/50 transition-all duration-300"
          >
            Xem tất cả công cụ
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
