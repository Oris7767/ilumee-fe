import type { AppLocale } from '@/i18n/routing';
import { SITE_URL } from './metadata';

/**
 * JSON-LD builders — return plain objects suitable for dangerouslySetInnerHTML
 * inside a Next <script type="application/ld+json"> tag.
 *
 * Each builder is pure; the page component composes the final array.
 */

export type JsonLd = Record<string, unknown> | JsonLd[];

export type OrganizationLd = {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: { '@type': 'ContactPoint'; email: string; contactType: string };
};

export function organizationLd(): OrganizationLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ILUMEE',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Soul Plan, Human Design & Numerology — decode your true design and live aligned with it.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@ilumee.app',
      contactType: 'customer support',
    },
  };
}

export type WebSiteLd = {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  inLanguage: AppLocale[];
  potentialAction: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
};

export function websiteLd(locales: readonly AppLocale[]): WebSiteLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ILUMEE',
    url: SITE_URL,
    inLanguage: [...locales],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/{search_term_string}`,
      // schema.org SearchAction — placeholder; we don't ship search today.
      'query-input': 'required name=search_term_string',
    },
  };
}

export type BreadcrumbItem = { name: string; href: string };

export type BreadcrumbListLd = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: { '@type': 'ListItem'; position: number; name: string; item: string }[];
};

export function breadcrumbLd(locale: AppLocale, items: BreadcrumbItem[]): BreadcrumbListLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}/${locale}${it.href}`,
    })),
  };
}

export type ServiceLd = {
  '@context': 'https://schema.org';
  '@type': 'Service';
  serviceType: string;
  name: string;
  description: string;
  provider: { '@type': 'Organization'; name: string; url: string };
  areaServed: string;
  offers?: { '@type': 'Offer'; price: string; priceCurrency: string };
};

export function serviceLd(input: {
  serviceType: string;
  name: string;
  description: string;
  price?: string;
  currency?: string;
}): ServiceLd {
  const base: ServiceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: input.serviceType,
    name: input.name,
    description: input.description,
    provider: { '@type': 'Organization', name: 'ILUMEE', url: SITE_URL },
    areaServed: 'Worldwide',
  };
  if (input.price && input.currency) {
    base.offers = {
      '@type': 'Offer',
      price: input.price,
      priceCurrency: input.currency,
    };
  }
  return base;
}

export type FaqItem = { question: string; answer: string };

export type FaqPageLd = {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: { '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }[];
};

export function faqLd(items: FaqItem[]): FaqPageLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}
