import { getRequestConfig } from 'next-intl/server';
import { routing, type AppLocale } from './routing';

/**
 * Manual locale guard — next-intl 3.26 does not yet export `hasLocale`.
 * Returns the locale string narrowed to AppLocale when it matches the routing list.
 */
function isAppLocale(value: unknown): value is AppLocale {
  return typeof value === 'string' && (routing.locales as readonly string[]).includes(value);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: AppLocale = isAppLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
