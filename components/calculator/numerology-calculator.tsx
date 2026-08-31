'use client';

import { useState } from 'react';
import { CalculatorLayout } from '@/components/calculator/calculator-layout';
import { NumerologyForm } from '@/components/calculator/numerology-form';
import { LoadingState } from '@/components/calculator/loading-state';
import { ErrorState } from '@/components/calculator/error-state';
import { Card } from '@/components/ui/primitives';
import { postJson } from '@/lib/api-client';

interface NumData {
  lifePath: { value: number; meaning: string };
  expression: { value: number; meaning: string };
  soulUrge: { value: number; meaning: string };
  personality: { value: number; meaning: string };
  birthday: { value: number; meaning: string };
  maturity: { value: number; meaning: string };
}

export function NumerologyCalculator() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<NumData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handle = async (input: { full_name: string; birth_date: string; locale: string; email?: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await postJson<{ result: NumData }>('/numerology/calculate', input);
      setData(res.result);
    } catch (e: any) {
      setError(e?.message || 'Đã có lỗi xảy ra.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CalculatorLayout
      title="Tính Thần số học"
      subtitle="Life Path · Expression · Soul Urge (Pythagorean)"
      form={<NumerologyForm onSubmit={handle} isLoading={isLoading} />}
      result={
        isLoading ? <LoadingState /> :
        error ? <ErrorState /> :
        data ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <NumCard title="Life Path" data={data.lifePath} primary />
            <NumCard title="Expression" data={data.expression} />
            <NumCard title="Soul Urge" data={data.soulUrge} />
            <NumCard title="Personality" data={data.personality} />
            <NumCard title="Birthday" data={data.birthday} />
            <NumCard title="Maturity" data={data.maturity} />
          </div>
        ) : null
      }
    />
  );
}

function NumCard({ title, data, primary = false }: { title: string; data: { value: number; meaning: string }; primary?: boolean }) {
  return (
    <Card className={primary ? 'border-t-4 border-t-primary' : ''}>
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">{title}</div>
      <div className={`font-display font-light text-tertiary leading-none mb-3 ${primary ? 'text-7xl text-primary' : 'text-5xl'}`}>{data.value}</div>
      <p className="text-sm text-taupe leading-relaxed">{data.meaning}</p>
    </Card>
  );
}
