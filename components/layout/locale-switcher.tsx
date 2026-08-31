'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
];

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (target: string) => {
    // Replace the leading /locale segment, keeping rest of path
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${target}`);
    } else {
      segments[0] = target;
      router.push('/' + segments.join('/'));
    }
    setOpen(false);
  };

  const current = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium tracking-wider uppercase border border-accent/40 rounded-full hover:bg-rose/30 transition"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <Globe className="w-3.5 h-3.5" />
        {current.short}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 min-w-[160px] bg-ivory border border-accent/30 rounded-elegant shadow-soft py-1 z-40">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => switchTo(l.code)}
                className={cn(
                  'flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-rose/30 transition',
                  l.code === currentLocale && 'text-primary font-medium',
                )}
              >
                <span>{l.label}</span>
                {l.code === currentLocale && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
