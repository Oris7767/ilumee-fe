'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Sparkles, Compass, BookOpen, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('Home');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
        <div className="tagline mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {t('heroEyebrow')}
        </div>
        <h1
          className="font-display font-light italic text-tertiary text-5xl sm:text-6xl lg:text-8xl whitespace-pre-line leading-[1.05] tracking-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {t('heroTitle')}
        </h1>
        <div className="lotus-divider mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }} />
        <p
          className="text-lg lg:text-xl text-taupe leading-relaxed max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          {t('heroSubtitle')}
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.9s' }}
        >
          <Link
            href={`/${locale}/calculate/human-design`}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary hover:scale-[1.03] transition-all"
          >
            {t('ctaPrimary')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 px-8 py-4 border border-accent/50 text-tertiary font-medium uppercase tracking-widest rounded-full hover:bg-rose/30 transition-all"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
        <div className="mt-24 opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <ArrowDown className="w-5 h-5 mx-auto text-accent animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}
