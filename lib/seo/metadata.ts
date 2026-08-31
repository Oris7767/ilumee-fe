import type { Metadata } from 'next';
import { routing, type AppLocale } from '@/i18n/routing';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ilumee.netlify.app';

export const OG_IMAGE = '/logo.png';

/**
 * Per-route metadata factory. Locale-aware titles + descriptions; canonical /
 * alternates resolve to absolute URLs so Google can verify hreflang.
 */
export type PageMetaInput = {
  /** path segment WITHOUT locale prefix, e.g. "about" or "tools/human-design". Use "" for root. */
  path: string;
  /** map locale → page title (rendered after brand) */
  title: Record<AppLocale, string>;
  /** map locale → page description for OG + meta description */
  description: Record<AppLocale, string>;
  /** OG image — defaults to site-wide OG image */
  ogImage?: string;
  /** whether to index this page (default true) */
  indexable?: boolean;
  /** override sitemap priority — only consumed by sitemap.ts; kept here for type cohesion */
  priority?: number;
};

export function buildPageMetadata({
  path,
  title,
  description,
  ogImage = OG_IMAGE,
  indexable = true,
}: PageMetaInput) {
  const urlOf = (locale: AppLocale) => `${SITE_URL}/${locale}${path ? `/${path}` : ''}`;
  const languages: Record<string, string> = {} as Record<string, string>;
  for (const l of routing.locales) {
    languages[l] = `${SITE_URL}/${l}${path ? `/${path}` : ''}`;
  }
  const fullTitleFor = (locale: AppLocale) => `${title[locale]} — ILUMEE`;
  return {
    url: urlOf,
    languages,
    title: fullTitleFor,
    description: description,
    ogImage,
    indexable,
  } as const;
}

/**
 * Returns a Next.js `generateMetadata` function for the given page input.
 * Export as: export const generateMetadata = pageMetadata({ ... });
 * The returned function signature matches Next.js App Router expectations:
 *   ({ params }: { params: Promise<{ locale: string }> }) => Promise<Metadata>
 */
export function pageMetadata(input: PageMetaInput) {
  const m = buildPageMetadata(input);
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    const safeLocale = locale as AppLocale;
    return {
      title: m.title(safeLocale),
      description: m.description[safeLocale],
      alternates: { canonical: m.url(safeLocale), languages: m.languages },
      openGraph: {
        title: m.title(safeLocale),
        description: m.description[safeLocale],
        url: m.url(safeLocale),
        siteName: 'ILUMEE',
        locale: safeLocale,
        type: 'website',
        images: [{ url: m.ogImage, width: 1200, height: 630, alt: m.title(safeLocale) }],
      },
      twitter: {
        card: 'summary_large_image',
        title: m.title(safeLocale),
        description: m.description[safeLocale],
        images: [m.ogImage],
      },
      robots: m.indexable
        ? { index: true, follow: true, googleBot: { index: true, follow: true } }
        : { index: false, follow: true },
    };
  };
}
