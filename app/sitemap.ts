import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/metadata';

const LOCALES = ['vi', 'en', 'fr'] as const;
type Locale = (typeof LOCALES)[number];

/**
 * Sitemap entry shape — adds alternates so search engines can serve the right
 * locale variant per user. Each entry's `alternates.languages` lists every locale
 * URL for the same content path; this is the canonical hreflang pairing format.
 */
type PathDef = { p: string; priority: number; changeFrequency?: 'weekly' | 'monthly' };

const PATHS: PathDef[] = [
  { p: '', priority: 1.0, changeFrequency: 'weekly' },

  // Hub pages — high priority, weekly
  { p: 'tools', priority: 0.9, changeFrequency: 'weekly' },
  { p: 'services', priority: 0.9, changeFrequency: 'weekly' },
  { p: 'calculate', priority: 0.9, changeFrequency: 'weekly' },

  // Tool deep dives — high intent, weekly
  { p: 'tools/human-design', priority: 0.85 },
  { p: 'tools/soul-plan', priority: 0.85 },
  { p: 'tools/numerology', priority: 0.85 },

  // Calculator entry points — highest conversion intent, weekly
  { p: 'calculate/human-design', priority: 0.95 },
  { p: 'calculate/soul-plan', priority: 0.95 },
  { p: 'calculate/numerology', priority: 0.95 },

  // Service detail — high intent, weekly
  { p: 'services/classes', priority: 0.8 },
  { p: 'services/readings', priority: 0.8 },
  { p: 'services/package', priority: 0.85 },
  { p: 'services/mentorship', priority: 0.8 },

  // Brand & utility — medium
  { p: 'about', priority: 0.6 },
  { p: 'contact', priority: 0.6 },
  { p: 'blog', priority: 0.6 },

  // Legal — low, monthly
  { p: 'legal/terms', priority: 0.3, changeFrequency: 'monthly' },
  { p: 'legal/privacy', priority: 0.3, changeFrequency: 'monthly' },
  { p: 'legal/disclaimer', priority: 0.3, changeFrequency: 'monthly' },
];

function urlFor(locale: Locale, p: string): string {
  return `${SITE_URL}/${locale}${p ? `/${p}` : ''}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LOCALES.flatMap((locale) =>
    PATHS.map(({ p, priority, changeFrequency = 'weekly' }) => {
      const url = urlFor(locale, p);
      const languages: Record<string, string> = {};
      for (const l of LOCALES) {
        languages[l] = urlFor(l, p);
      }
      return {
        url,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      };
    }),
  );
}
