'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CalculatorLayout } from '@/components/calculator/calculator-layout';
import { HDForm } from '@/components/calculator/hd-form';
import { LoadingState } from '@/components/calculator/loading-state';
import { ErrorState } from '@/components/calculator/error-state';
import { BodyGraph } from '@/components/bodygraph3d/bodygraph';
import { HDTypeCard } from '@/components/calculator/hd-result/hd-type-card';
import { HDProfileCard } from '@/components/calculator/hd-result/hd-profile-card';
import { HDVariablesCard } from '@/components/calculator/hd-result/hd-variables-card';
import { HDCentersList } from '@/components/calculator/hd-result/hd-centers-list';
import { HDChannelsList } from '@/components/calculator/hd-result/hd-channels-list';
import { HDPlanetsTable } from '@/components/calculator/hd-result/hd-planets-table';
import { RecommendPackages } from '@/components/calculator/hd-result/recommend-packages';
import { EducationExplainer } from '@/components/calculator/hd-result/education-explainer';
import { postJson } from '@/lib/api-client';
import { recommendPackages } from '@/lib/education/hd-recommend-rules';
import type { HDChart } from '@/lib/mock-hd';
export function HDCalculator() {
  const t = useTranslations('Calculator');
  const [isLoading, setIsLoading] = useState(false);
  const [chart, setChart] = useState<HDChart | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handle = async (data: {
    full_name: string; birth_date: string; birth_time?: string; birth_place?: string; email?: string; locale: string;
  }) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await postJson<{ chart: HDChart; svg: string | null }>('/hd/calculate', data);
      setChart(res.chart);
    } catch (e: any) {
      setError(e?.message || 'Đã có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const definedCount = chart ? Object.values(chart.centers).filter((c) => c.defined).length : 0;
  const recommended = chart ? recommendPackages({ type: chart.type, authority: chart.authority, profile: chart.profile }) : [];

  return (
    <CalculatorLayout
      title={t('title')}
      subtitle={t('subtitle')}
      form={<HDForm onSubmit={handle} isLoading={isLoading} />}
      result={
        isLoading ? <LoadingState /> :
        error ? <ErrorState /> :
        chart ? (
          <div className="space-y-8">
            {/* Tầng 1: BodyGraph */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.yourChart')}</h2>
              <BodyGraph chart={chart} />
              <p className="text-center text-xs text-taupe mt-3 italic">{t('disclaimer')}</p>
            </section>

            {/* Tầng 2: Type */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.yourType')}</h2>
              <HDTypeCard type={chart.type} strategy={chart.strategy} authority={chart.authority} />
            </section>

            {/* Tầng 3: Profile */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.yourProfile')}</h2>
              <HDProfileCard profile={chart.profile} definition={chart.definition} incarnationCross={chart.incarnationCross} />
            </section>

            {/* Tầng 4: Variables */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.yourVariables')}</h2>
              <HDVariablesCard variables={chart.variables} />
            </section>

            {/* Tầng 5: Centers */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.yourCenters')}</h2>
              <HDCentersList centers={chart.centers} />
            </section>

            {/* Tầng 6: Channels */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.yourChannels')}</h2>
              <HDChannelsList channels={chart.channels} />
            </section>

            {/* Tầng 7: Planets */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.yourPlanets')}</h2>
              <HDPlanetsTable planets={chart.planets} />
            </section>

            {/* Tầng 8: Education */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.education')}</h2>
              <EducationExplainer type={chart.type} authority={chart.authority} definedCount={definedCount} />
            </section>

            {/* Tầng 9: Recommend */}
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">{t('sections.recommend')}</h2>
              <RecommendPackages recommendedIds={recommended} />
            </section>
          </div>
        ) : null
      }
    />
  );
}
