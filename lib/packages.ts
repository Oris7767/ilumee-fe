/**
 * Hardcoded package catalog — sourced from noi dung.rtf + spec §8.
 * UI labels + descriptions are resolved via messages files at render time.
 */

export interface Package {
  id: string;
  category: 'classes' | 'readings' | 'package' | 'mentorship';
  nameKey: string; // i18n key suffix
  shortKey: string; // i18n short description key
  priceUSD: number;
  unitKey: string; // 'one_time' | 'monthly' | 'combo'
  calendly: string; // URL suffix
  recommended: boolean;
  highlight?: string; // "Flagship" etc.
}

export const PACKAGES: Package[] = [
  {
    id: 'classes-soulplan',
    category: 'classes',
    nameKey: 'classesSoulPlan.name',
    shortKey: 'classesSoulPlan.short',
    priceUSD: 199,
    unitKey: 'unit.one_time',
    calendly: 'classes-soulplan',
  },
  {
    id: 'classes-livingdesign',
    category: 'classes',
    nameKey: 'classesLivingDesign.name',
    shortKey: 'classesLivingDesign.short',
    priceUSD: 249,
    unitKey: 'unit.one_time',
    calendly: 'classes-livingdesign',
  },
  {
    id: 'readings-soulplan',
    category: 'readings',
    nameKey: 'readingsSoulPlan.name',
    shortKey: 'readingsSoulPlan.short',
    priceUSD: 149,
    unitKey: 'unit.one_time',
    calendly: 'reading-soulplan',
  },
  {
    id: 'readings-bg5',
    category: 'readings',
    nameKey: 'readingsBG5.name',
    shortKey: 'readingsBG5.short',
    priceUSD: 199,
    unitKey: 'unit.one_time',
    calendly: 'reading-bg5',
  },
  {
    id: 'readings-numerology',
    category: 'readings',
    nameKey: 'readingsNumerology.name',
    shortKey: 'readingsNumerology.short',
    priceUSD: 129,
    unitKey: 'unit.one_time',
    calendly: 'reading-numerology',
  },
  {
    id: 'package-combo',
    category: 'package',
    nameKey: 'packageCombo.name',
    shortKey: 'packageCombo.short',
    priceUSD: 1200,
    unitKey: 'unit.combo',
    calendly: 'package-combo',
    recommended: true,
    highlight: 'flagship',
  },
  {
    id: 'mentorship-1on1',
    category: 'mentorship',
    nameKey: 'mentorship1on1.name',
    shortKey: 'mentorship1on1.short',
    priceUSD: 350,
    unitKey: 'unit.monthly',
    calendly: 'mentorship-1on1',
  },
];

export function packageCalendlyUrl(calendly: string): string {
  const base = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/ilumee/intro';
  // Append event type as URL param if needed; in MVP we just return base.
  return `${base}?type=${encodeURIComponent(calendly)}`;
}
