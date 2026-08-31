'use client';

import { Sparkles, GraduationCap, BookOpen, Heart, Star, ArrowRight, Calendar } from 'lucide-react';
import { PACKAGES, packageCalendlyUrl } from '@/lib/packages';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/primitives';

interface Props {
  /** IDs returned from `recommendPackages`, ordered by importance */
  recommendedIds: { id: string; reason: string; primary?: boolean }[];
  type?: string;
}

const CATEGORY_ICON = {
  classes: GraduationCap,
  readings: BookOpen,
  package: Sparkles,
  mentorship: Heart,
} as const;

export function RecommendPackages({ recommendedIds }: Props) {
  const t = useTranslations('Packages');
  const recommended = recommendedIds
    .map((r) => ({ rec: r, pkg: PACKAGES.find((p) => p.id === r.id)! }))
    .filter((x) => Boolean(x.pkg));

  if (recommended.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="text-center">
        <div className="tagline mb-3">Recommend cho bạn</div>
        <h2 className="font-display font-light italic text-3xl lg:text-5xl text-tertiary">
          Đồng hành cùng chuyên gia
        </h2>
        <p className="text-taupe mt-3 max-w-2xl mx-auto">
          Dựa trên Type + Authority + Profile của bạn, đây là những gói tư vấn phù hợp nhất để bắt đầu hành trình sống đúng thiết kế.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {recommended.map(({ rec, pkg }) => {
          const Icon = CATEGORY_ICON[pkg.category];
          const isFlagship = pkg.highlight === 'flagship';
          return (
            <div
              key={pkg.id}
              className={`relative bg-white/85 backdrop-blur-sm border rounded-elegant p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-warm ${
                isFlagship ? 'border-primary/60 ring-2 ring-primary/20' : 'border-accent/30'
              }`}
            >
              {isFlagship && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-primary text-white text-xs uppercase tracking-widest font-semibold rounded-full flex items-center gap-1 shadow-warm">
                  <Star className="w-3 h-3" /> Flagship
                </div>
              )}

              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isFlagship ? 'bg-primary text-white' : 'bg-rose/50 text-primary'
                }`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <Badge className="bg-accent/20 text-tertiary">{pkg.category}</Badge>
                </div>
              </div>

              <h3 className="font-display text-xl text-tertiary mb-2 leading-tight">{t(`${pkg.nameKey}`)}</h3>
              <p className="text-sm text-taupe leading-relaxed mb-3 min-h-[3em]">{t(`${pkg.shortKey}`)}</p>

              <div className="bg-accent/15 border border-accent/30 rounded-elegant p-3 mb-4">
                <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-1">Tại sao gói này phù hợp</div>
                <div className="text-sm text-tertiary leading-relaxed">{rec.reason}</div>
              </div>

              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="text-2xl font-display font-light text-tertiary">${pkg.priceUSD}</div>
                  <div className="text-xs text-taupe">{t(`${pkg.unitKey}`)}</div>
                </div>
              </div>

              <a
                href={packageCalendlyUrl(pkg.calendly)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium uppercase tracking-widest text-sm transition-all ${
                  isFlagship
                    ? 'bg-primary text-white hover:bg-secondary hover:shadow-warm'
                    : 'bg-rose/40 text-tertiary hover:bg-rose/60 border border-accent/30'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Đặt lịch tư vấn
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
