import { SoulPlanCalculator } from '@/components/calculator/soulplan-calculator';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'calculate/soul-plan',
  title: { vi: 'Tính Soul Plan', en: 'Calculate Soul Plan', fr: 'Calculer Soul Plan' },
  description: {
    vi: 'Tính Soul Plan miễn phí theo Blue Marsden — nhập tên khai sinh, nhận ngay 6 cặp số + Soul Destiny.',
    en: 'Calculate Soul Plan free using the Blue Marsden method — enter your birth name and instantly receive 6 number pairs + Soul Destiny.',
    fr: 'Calculez votre Soul Plan gratuitement via la méthode Blue Marsden — saisissez votre nom de naissance et recevez immédiatement 6 paires de nombres + Soul Destiny.',
  },
});

export default async function SoulPlanCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale as AppLocale, [
          { name: 'Calculate', href: '/calculate' },
          { name: 'Soul Plan', href: '/calculate/soul-plan' },
        ])}
      />
      <SoulPlanCalculator />
    </>
  );
}
