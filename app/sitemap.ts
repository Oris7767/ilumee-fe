import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ilumee.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['vi', 'en', 'fr'];
  const paths = [
    '',
    'about',
    'contact',
    'blog',
    'tools',
    'tools/human-design',
    'tools/soul-plan',
    'tools/numerology',
    'calculate',
    'calculate/human-design',
    'calculate/soul-plan',
    'calculate/numerology',
    'services',
    'services/classes',
    'services/readings',
    'services/package',
    'services/mentorship',
    'legal/terms',
    'legal/privacy',
    'legal/disclaimer',
  ];

  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${SITE_URL}/${locale}${p ? `/${p}` : ''}`.replace(/\/+/g, '/'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
  );
}
