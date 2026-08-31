import { HeroSection } from '@/components/home/hero-section';
import { ToolsCards } from '@/components/home/tools-cards';
import { ServicesCards } from '@/components/home/services-cards';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: '',
  title: {
    vi: 'Awaken Your True Power',
    en: 'Awaken Your True Power',
    fr: 'Éveillez votre vrai pouvoir',
  },
  description: {
    vi: 'Bộ 3 công cụ Soul Plan, Human Design và Thần số học. Giải mã cá tính, sống đúng với thiết kế vốn có của bạn.',
    en: 'Soul Plan, Human Design & Numerology. Decode your personality and live aligned with your true design.',
    fr: 'Soul Plan, Human Design & Numérologie. Décodez votre personnalité et vivez aligné avec votre design originel.',
  },
});

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <>
      <HomeJsonLd localeParam={params} />
      <HeroSection />
      <ToolsCards />
      <ServicesCards />
    </>
  );
}

async function HomeJsonLd({ localeParam }: { localeParam: Promise<{ locale: string }> }) {
  const { locale } = await localeParam;
  return <JsonLd data={breadcrumbLd(locale as AppLocale, [{ name: 'Home', href: '' }])} />;
}
