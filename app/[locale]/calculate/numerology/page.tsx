import { NumerologyCalculator } from '@/components/calculator/numerology-calculator';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'calculate/numerology',
  title: { vi: 'Tính Thần số học', en: 'Calculate Numerology', fr: 'Calculer Numérologie' },
  description: {
    vi: 'Tính Thần số học Pythagorean miễn phí — Life Path, Expression, Soul Urge, Personality, Birthday, Maturity.',
    en: 'Calculate Pythagorean Numerology free — Life Path, Expression, Soul Urge, Personality, Birthday, Maturity.',
    fr: 'Calculez la Numérologie Pythagoricienne gratuitement — Life Path, Expression, Soul Urge, Personality, Birthday, Maturity.',
  },
});

export default async function NumerologyCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale as AppLocale, [
          { name: 'Calculate', href: '/calculate' },
          { name: 'Numerology', href: '/calculate/numerology' },
        ])}
      />
      <NumerologyCalculator />
    </>
  );
}
