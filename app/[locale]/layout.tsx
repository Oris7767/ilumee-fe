import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LotusWatermark } from '@/components/home/lotus-watermark';

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
  const titles: Record<string, string> = {
    vi: 'ILUMEE — Đánh thức sức mạnh thật của bạn',
    en: 'ILUMEE — Awaken Your True Power',
    fr: 'ILUMEE — Éveillez votre vrai pouvoir',
  };
  const descriptions: Record<string, string> = {
    vi: 'Bộ 3 công cụ Soul Plan, Human Design và Thần số học. Giải mã cá tính, sống đúng với thiết kế vốn có của bạn.',
    en: 'Soul Plan, Human Design & Numerology. Decode your personality and live aligned with your true design.',
    fr: 'Soul Plan, Human Design & Numérologie. Décodez votre personnalité et vivez aligné avec votre design originel.',
  };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ilumee.netlify.app';
  return {
    metadataBase: new URL(baseUrl),
    title: titles[locale] ?? titles.vi,
    description: descriptions[locale] ?? descriptions.vi,
    openGraph: {
      title: titles[locale] ?? titles.vi,
      description: descriptions[locale] ?? descriptions.vi,
      siteName: 'ILUMEE',
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
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

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <a href="#main" className="skip-link">Skip to content</a>
          <LotusWatermark />
          <Header locale={locale} />
          <main id="main" className="relative z-10">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
