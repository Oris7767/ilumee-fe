import { HDCalculator } from '@/components/calculator/hd-calculator';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'calculate/human-design',
  title: { vi: 'Tính Human Design', en: 'Calculate Human Design', fr: 'Calculer Human Design' },
  description: {
    vi: 'Tính BodyGraph Human Design miễn phí — nhập ngày giờ nơi sinh, nhận ngay Type, Strategy, Authority, Profile, Incarnation Cross.',
    en: 'Calculate your Human Design BodyGraph for free — enter birth date/time/place and get Type, Strategy, Authority, Profile, Incarnation Cross instantly.',
    fr: 'Calculez votre BodyGraph Human Design gratuitement — saisissez date/lieu de naissance et obtenez Type, Strategy, Authority, Profile, Incarnation Cross.',
  },
});

export default async function HumanDesignCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale as AppLocale, [
          { name: 'Calculate', href: '/calculate' },
          { name: 'Human Design', href: '/calculate/human-design' },
        ])}
      />
      <HDCalculator />
    </>
  );
}
