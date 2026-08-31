import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Card, Badge } from '@/components/ui/primitives';
import { PACKAGES, packageCalendlyUrl } from '@/lib/packages';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd, serviceLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'services',
  title: { vi: 'Dịch vụ', en: 'Services', fr: 'Services' },
  description: {
    vi: 'Lớp học nền tảng, reading 1-1, package coaching 3 tháng và mentorship — chọn hình thức phù hợp với bạn.',
    en: 'Foundational classes, 1-1 readings, the 3-month flagship package and ongoing mentorship.',
    fr: 'Cours fondamentaux, lectures 1-1, forfait phare 3 mois et mentorat continu.',
  },
});

export default async function ServicesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Packages' });
  const serviceJsonLd = PACKAGES.map((pkg) =>
    serviceLd({
      serviceType: pkg.category,
      name: pkg.nameKey,
      description: pkg.shortKey,
      price: String(pkg.priceUSD),
      currency: 'USD',
    }),
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(locale as AppLocale, [{ name: 'Services', href: '/services' }]),
          ...serviceJsonLd,
        ]}
      />
      <div className="pt-16 pb-24 max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <div className="tagline mb-4">Dịch vụ</div>
          <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Đồng hành cùng chuyên gia</h1>
          <div className="lotus-divider mx-auto mt-4" />
          <p className="text-taupe mt-6 max-w-2xl mx-auto">
            Từ lớp học nền tảng, reading 1-1, đến package coaching dài hạn — chọn hình thức phù hợp với nhịp sống của bạn.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <Link key={pkg.id} href={packageCalendlyUrl(pkg.calendly)} target="_blank" rel="noopener noreferrer" className="group">
              <Card className={`h-full hover:-translate-y-1 transition-all ${pkg.highlight === 'flagship' ? 'border-primary/50 ring-2 ring-primary/15' : ''}`}>
                {pkg.highlight === 'flagship' && (
                  <Badge className="bg-primary text-white mb-3">Flagship</Badge>
                )}
                <Badge className="bg-accent/20 text-tertiary mb-3">{pkg.category}</Badge>
                <h3 className="font-display text-2xl text-tertiary mb-3 leading-tight">{t(`${pkg.nameKey}`)}</h3>
                <p className="text-sm text-taupe leading-relaxed mb-4">{t(`${pkg.shortKey}`)}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
