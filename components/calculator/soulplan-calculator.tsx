'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CalculatorLayout } from '@/components/calculator/calculator-layout';
import { SoulPlanForm } from '@/components/calculator/soulplan-form';
import { LoadingState } from '@/components/calculator/loading-state';
import { ErrorState } from '@/components/calculator/error-state';
import { Card } from '@/components/ui/primitives';
import { postJson } from '@/lib/api-client';
import { Sparkles } from 'lucide-react';

interface SoulPlanData {
  positions: {
    worldlyTalent: { pair: string; meaning: string };
    worldlyChallenge: { pair: string; meaning: string };
    spiritualTalent: { pair: string; meaning: string };
    spiritualChallenge: { pair: string; meaning: string };
    worldlyGoal: { pair: string; meaning: string };
    spiritualGoal: { pair: string; meaning: string };
    soulDestiny: { pair: string; meaning: string };
  };
  soulDestiny: { number: number; meaning: string };
}

export function SoulPlanCalculator() {
  const t = useTranslations('Calculator');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<SoulPlanData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handle = async (input: { full_name: string; birth_date: string; locale: string; email?: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await postJson<{ chart: SoulPlanData }>('/soulplan/calculate', input);
      setData(res.chart);
    } catch (e: any) {
      setError(e?.message || 'Đã có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CalculatorLayout
      title="Tính bản đồ Soul Plan"
      subtitle="Star of Creation · 6 điểm · Blue Marsden"
      form={<SoulPlanForm onSubmit={handle} isLoading={isLoading} />}
      result={
        isLoading ? <LoadingState /> :
        error ? <ErrorState /> :
        data ? (
          <div className="space-y-8">
            <section>
              <h2 className="font-display italic text-2xl text-tertiary mb-4 text-center">Ngôi sao sáng thế của bạn</h2>
              <Card className="bg-gradient-to-br from-rose/30 via-peach/20 to-ivory">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <svg viewBox="0 0 400 400" className="w-full max-w-sm mx-auto">
                      <defs>
                        <radialGradient id="spGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#e0b755" />
                          <stop offset="100%" stopColor="#b21267" />
                        </radialGradient>
                      </defs>
                      <g transform="translate(200 200)">
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                          <circle
                            key={i}
                            cx="0" cy="-130" r="14" fill="url(#spGrad)"
                            transform={`rotate(${deg})`}
                          />
                        ))}
                        <circle r="36" fill="#1a1a1a" stroke="#e0b755" strokeWidth="2" />
                        <text textAnchor="middle" dominantBaseline="central" fontSize="14" fill="#f8eed8" fontFamily="serif">
                          {data.soulDestiny.number}
                        </text>
                      </g>
                    </svg>
                    <p className="text-center text-xs text-taupe mt-2">Star of Creation · 6 cánh</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h3 className="font-display text-xl text-tertiary">Soul Destiny: {data.soulDestiny.number}</h3>
                    </div>
                    <p className="text-taupe leading-relaxed">{data.soulDestiny.meaning}</p>
                  </div>
                </div>
              </Card>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PositionCard title="Worldly Talent" pair={data.positions.worldlyTalent.pair} body={data.positions.worldlyTalent.meaning} />
              <PositionCard title="Worldly Challenge" pair={data.positions.worldlyChallenge.pair} body={data.positions.worldlyChallenge.meaning} />
              <PositionCard title="Spiritual Talent" pair={data.positions.spiritualTalent.pair} body={data.positions.spiritualTalent.meaning} />
              <PositionCard title="Spiritual Challenge" pair={data.positions.spiritualChallenge.pair} body={data.positions.spiritualChallenge.meaning} />
              <PositionCard title="Worldly Goal" pair={data.positions.worldlyGoal.pair} body={data.positions.worldlyGoal.meaning} />
              <PositionCard title="Spiritual Goal" pair={data.positions.spiritualGoal.pair} body={data.positions.spiritualGoal.meaning} />
            </section>
          </div>
        ) : null
      }
    />
  );
}

function PositionCard({ title, pair, body }: { title: string; pair: string; body: string }) {
  return (
    <Card>
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">{title}</div>
      <div className="font-display text-3xl text-primary mb-2">{pair}</div>
      <p className="text-sm text-taupe leading-relaxed">{body}</p>
    </Card>
  );
}
