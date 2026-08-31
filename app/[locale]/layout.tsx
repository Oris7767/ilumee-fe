import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing, type AppLocale } from '@/i18n/routing';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LotusWatermark } from '@/components/home/lotus-watermark';
import { JsonLd } from '@/components/seo/json-ld';
import { organizationLd, websiteLd } from '@/lib/seo/jsonld';

const display = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Montserrat({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) return {};
  const safeLocale = locale as AppLocale;
  const titles: Record<AppLocale, string> = {
    vi: 'ILUMEE — Đánh thức sức mạnh thật của bạn',
    en: 'ILUMEE — Awaken Your True Power',
    fr: 'ILUMEE — Éveillez votre vrai pouvoir',
  };
  const descriptions: Record<AppLocale, string> = {
    vi: 'Bộ 3 công cụ Soul Plan, Human Design và Thần số học. Giải mã cá tính, sống đúng với thiết kế vốn có của bạn.',
    en: 'Soul Plan, Human Design & Numerology. Decode your personality and live aligned with your true design.',
    fr: 'Soul Plan, Human Design & Numérologie. Décodez votre personnalité et vivez aligné avec votre design originel.',
  };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ilumee.netlify.app';
  return {
    metadataBase: new URL(baseUrl),
    title: titles[safeLocale],
    description: descriptions[safeLocale],
    openGraph: {
      title: titles[safeLocale],
      description: descriptions[safeLocale],
      siteName: 'ILUMEE',
      locale: safeLocale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${safeLocale}`,
      languages: {
        vi: `${baseUrl}/vi`,
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }
  const safeLocale = locale as AppLocale;

  setRequestLocale(safeLocale);
  const messages = await getMessages();

  return (
    <html lang={safeLocale} className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" sizes="180x180" />
        <JsonLd data={[organizationLd(), websiteLd(routing.locales)]} />
      </head>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages} locale={safeLocale}>
          <a href="#main" className="skip-link">Skip to content</a>
          <LotusWatermark />
          <Header locale={safeLocale} />
          <main id="main" className="relative z-10">{children}</main>
          <Footer locale={safeLocale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
