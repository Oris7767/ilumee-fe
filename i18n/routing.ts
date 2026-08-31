import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'en', 'fr'] as const,
  defaultLocale: 'vi',
  localePrefix: 'always',
});

export type AppLocale = (typeof routing.locales)[number];
