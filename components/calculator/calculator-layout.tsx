import { ReactNode } from 'react';

interface CalculatorLayoutProps {
  title: string;
  subtitle?: string;
  form: ReactNode;
  result?: ReactNode;
}

export function CalculatorLayout({ title, subtitle, form, result }: CalculatorLayoutProps) {
  return (
    <div className="relative">
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 text-center max-w-3xl mx-auto px-6">
        <div className="tagline mb-4">{subtitle ?? 'Calculator'}</div>
        <h1 className="font-display font-light italic text-4xl sm:text-5xl lg:text-7xl text-tertiary mb-6 leading-tight">
          {title}
        </h1>
        <div className="lotus-divider mx-auto" />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        {form}
      </section>

      {result && (
        <section className="max-w-6xl mx-auto px-6 pb-24 animate-fade-up">
          {result}
        </section>
      )}
    </div>
  );
}
