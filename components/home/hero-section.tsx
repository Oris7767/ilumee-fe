'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

// Dynamic import 3D components to avoid SSR issues
const Scene3DWrapper = dynamic(
  () => import('@/components/3d/scene-wrapper').then((mod) => mod.Scene3DWrapper),
  { ssr: false }
);
const Lotus3D = dynamic(
  () => import('@/components/3d/lotus-3d').then((mod) => mod.Lotus3D),
  { ssr: false }
);

export function HeroSection() {
  const t = useTranslations('Home');
  const locale = useLocale();
  const [is3DLoaded, setIs3DLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-ivory via-peach/30 to-rose/20">
      {/* Asymmetric layout - editorial style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.015]">
        {/* Decorative grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(178, 18, 103, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(178, 18, 103, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      <div className="w-full relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
          {/* Asymmetric grid - 40/60 split */}
          <div className="grid lg:grid-cols-[45fr_55fr] gap-12 xl:gap-24 items-center min-h-[90vh]">
            
            {/* Left: Text content with generous spacing */}
            <div className="space-y-12 lg:space-y-16 py-20 lg:py-0">
              {/* Eyebrow with sparkle */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-rose/40 to-peach/40 border border-accent/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-[0.65rem] uppercase tracking-[0.35em] text-tertiary font-bold">
                    {t('heroEyebrow')}
                  </span>
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>

                {/* Hero headline - LARGE serif italic */}
                <div className="space-y-4">
                  <h1 className="font-display text-tertiary leading-[0.9] tracking-[-0.02em]">
                    <span className="block text-7xl sm:text-8xl lg:text-[7rem] xl:text-[8rem] font-light italic">
                      {t('heroTitle').split('\n')[0]}
                    </span>
                    <span className="block text-6xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-light mt-2">
                      {t('heroTitle').split('\n')[1] || ''}
                    </span>
                  </h1>

                  {/* Golden ratio divider */}
                  <div className="relative w-32 h-0.5 my-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
                    <div className="absolute -top-1 left-0 w-2 h-2 bg-accent rotate-45" />
                  </div>

                  {/* Subtitle - refined typography */}
                  <p className="text-2xl lg:text-3xl xl:text-4xl text-taupe/90 leading-relaxed font-light max-w-2xl">
                    {t('heroSubtitle')}
                  </p>
                </div>
              </div>

              {/* CTAs with depth */}
              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <Link
                  href={`/${locale}/calculate`}
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white font-bold uppercase tracking-[0.25em] text-xs overflow-hidden transition-all duration-500 hover:shadow-warm"
                  style={{
                    boxShadow: '0 20px 60px -20px rgba(178, 18, 103, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span className="relative z-10">{t('ctaPrimary')}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                
                <Link
                  href={`/${locale}/services`}
                  className="group inline-flex items-center justify-center gap-4 px-12 py-6 border-2 border-tertiary/30 text-tertiary font-bold uppercase tracking-[0.25em] text-xs hover:bg-gradient-to-r hover:from-rose/30 hover:to-peach/30 hover:border-accent/50 transition-all duration-300"
                  style={{
                    boxShadow: '0 10px 40px -10px rgba(130, 69, 66, 0.15)',
                  }}
                >
                  {t('ctaSecondary')}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </div>

              {/* Trust indicator */}
              <div className="flex items-center gap-6 pt-8 border-t border-accent/20">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-mauve to-rose border-2 border-ivory flex items-center justify-center text-xs font-display italic text-tertiary/40"
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

            {/* Right: 3D Lotus Scene with editorial frame */}
            <div className="relative lg:h-[80vh] h-[60vh]">
              {/* Decorative frame elements - asymmetric */}
              <div className="absolute -top-8 -right-8 w-48 h-48 border-t-2 border-r-2 border-accent/30 pointer-events-none z-20" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 border-b-2 border-l-2 border-accent/20 pointer-events-none z-20" />
              
              {/* 3D Canvas container */}
              <div className="relative h-full bg-gradient-to-br from-transparent via-rose/10 to-peach/20 backdrop-blur-3xl border border-accent/10">
                <Suspense 
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="text-6xl font-display italic text-accent animate-pulse">✦</div>
                        <p className="text-sm text-taupe/60 uppercase tracking-widest">Loading 3D Scene</p>
                      </div>
                    </div>
                  }
                >
                  <Scene3DWrapper cameraPosition={[0, 0, 6]}>
                    <Lotus3D position={[0, 0, 0]} scale={1.5} color="#B21267" animate />
                  </Scene3DWrapper>
                </Suspense>

                {/* Overlay gradient for depth */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 40%, rgba(248, 238, 216, 0.3) 100%)',
                  }}
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-1/4 -left-6 w-3 h-3 bg-accent rotate-45 opacity-60 animate-pulse" />
              <div className="absolute bottom-1/3 -right-4 w-2 h-2 bg-primary rotate-45 opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs uppercase tracking-[0.3em] text-taupe/50">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
}
