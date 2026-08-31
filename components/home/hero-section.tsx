'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('Home');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-ivory via-[#f3e3cf] to-ivory">
      {/* CSS Gradient Background - thanh lịch như mockup */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient glow - tâm điểm */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(238, 209, 211, 0.35), transparent 70%)',
          }}
        />
        
        {/* 2 floating particles - CSS only */}
        <div 
          className="absolute top-[20%] left-[15%] w-2 h-2 bg-accent rounded-full opacity-40"
          style={{
            animation: 'float1 6s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-[60%] right-[20%] w-3 h-3 bg-primary/30 rounded-full"
          style={{
            animation: 'float2 8s ease-in-out infinite 2s',
          }}
        />
      </div>

      <div className="w-full relative z-10">
        <div className="max-w-[1180px] mx-auto px-8 lg:px-16">
          {/* Center alignment như mockup */}
          <div className="text-center space-y-8 py-20">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-accent/30">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-accent font-bold">
                {t('heroEyebrow')}
              </span>
            </div>

            {/* Hero headline - Cormorant italic như mockup */}
            <h1 className="font-display text-tertiary leading-[1.1] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light italic">
                {t('heroTitle').split('\n')[0]}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mt-2">
                {t('heroTitle').split('\n')[1] || ''}
              </span>
            </h1>

            {/* Ornament divider - giống mockup */}
            <div className="flex items-center justify-center gap-4 max-w-xs mx-auto py-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5 text-accent">
                <path d="M12 2c2 4 6 6 10 6-4 0-8 2-10 6-2-4-6-6-10-6 4 0 8-2 10-6z"/>
              </svg>
              <div className="flex-1 h-px bg-gradient-to-r from-accent via-transparent to-transparent" />
            </div>

            {/* Subtitle - tinh tế */}
            <p className="text-lg lg:text-xl text-taupe leading-relaxed font-light max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>

            {/* CTAs - đơn giản, rõ ràng */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
              <Link
                href={`/${locale}/calculate`}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-secondary"
                style={{
                  boxShadow: '0 14px 40px -22px rgba(178, 18, 103, 0.4)',
                }}
              >
                {t('ctaPrimary')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href={`/${locale}/services`}
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 border border-tertiary/30 text-tertiary font-bold uppercase tracking-[0.2em] text-xs hover:border-accent/50 hover:bg-rose/20 transition-all duration-300"
              >
                {t('ctaSecondary')}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center justify-center gap-4 pt-12 border-t border-accent/20 max-w-md mx-auto mt-12">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-mauve/30 to-rose/30 border border-ivory flex items-center justify-center text-xs font-display text-tertiary/30"
                  >
                    ✦
                  </div>
                ))}
              </div>
              <div className="text-sm text-taupe/70">
                <span className="font-bold text-primary">1,000+</span> souls awakened
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-taupe/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/40 to-transparent" />
      </div>

      {/* CSS Animation keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(10px, -20px) scale(1.2); opacity: 0.7; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(-15px, -25px) scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
