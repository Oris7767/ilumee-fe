'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, Sparkles, GraduationCap, BookOpen, Heart, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LocaleSwitcher } from './locale-switcher';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('Nav');
  const tBrand = useTranslations('Brand');
  const tHome = useTranslations('Home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const params = useParams();

  const toolsMenu = [
    { href: `/${locale}/tools/soul-plan`, label: t('toolsSoulPlan'), icon: Sparkles, descKey: 'Soul Plan' },
    { href: `/${locale}/tools/human-design`, label: t('toolsHumanDesign'), icon: Compass, descKey: 'Human Design' },
    { href: `/${locale}/tools/numerology`, label: t('toolsNumerology'), icon: BookOpen, descKey: 'Thần số học' },
  ];

  const servicesMenu = [
    { href: `/${locale}/services/classes`, label: t('servicesClasses'), icon: GraduationCap },
    { href: `/${locale}/services/readings`, label: t('servicesReadings'), icon: BookOpen },
    { href: `/${locale}/services/package`, label: t('servicesPackage'), icon: Heart },
    { href: `/${locale}/services/mentorship`, label: t('servicesMentorship'), icon: Sparkles },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ivory/85 border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 lg:w-11 lg:h-11">
              <Image
                src="/logo.png"
                alt="ILUMEE logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-xl lg:text-2xl tracking-wide text-tertiary group-hover:text-primary transition-colors">
              {tBrand('name')}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href={`/${locale}/about`} active={isActive(`/${locale}/about`)}>{t('about')}</NavLink>
            <NavLink href={`/${locale}/blog`} active={isActive(`/${locale}/blog`)}>{t('blog')}</NavLink>

            {/* Tools dropdown */}
            <Dropdown
              label={t('tools')}
              isOpen={openDropdown === 'tools'}
              onToggle={() => setOpenDropdown(openDropdown === 'tools' ? null : 'tools')}
            >
              {toolsMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-3 rounded-elegant hover:bg-rose/40 transition group"
                  onClick={() => setOpenDropdown(null)}
                >
                  <item.icon className="w-4 h-4 mt-0.5 text-primary group-hover:text-secondary" />
                  <div>
                    <div className="text-sm font-medium text-tertiary">{item.label}</div>
                  </div>
                </Link>
              ))}
            </Dropdown>

            {/* Services dropdown */}
            <Dropdown
              label={t('services')}
              isOpen={openDropdown === 'services'}
              onToggle={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
            >
              {servicesMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-3 rounded-elegant hover:bg-rose/40 transition group"
                  onClick={() => setOpenDropdown(null)}
                >
                  <item.icon className="w-4 h-4 mt-0.5 text-primary group-hover:text-secondary" />
                  <div>
                    <div className="text-sm font-medium text-tertiary">{item.label}</div>
                  </div>
                </Link>
              ))}
            </Dropdown>
          </nav>

          {/* Right cluster: CTA + lang */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`/${locale}/calculate/human-design`}
              className="px-5 py-2.5 bg-primary text-white text-sm font-medium tracking-wide uppercase rounded-full hover:bg-secondary hover:shadow-warm transition-all"
            >
              {t('calculator')}
            </Link>
            <LocaleSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="lg:hidden p-2 text-tertiary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-accent/20 bg-ivory/95">
          <nav className="px-6 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
            <MobileLink href={`/${locale}/about`}>{t('about')}</MobileLink>
            <MobileLink href={`/${locale}/blog`}>{t('blog')}</MobileLink>

            <details className="group">
              <summary className="flex items-center justify-between py-3 cursor-pointer font-medium">
                {t('tools')}
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
              </summary>
              <div className="pl-4 space-y-2 pb-3">
                {toolsMenu.map((item) => (
                  <Link key={item.href} href={item.href} className="block py-2 text-sm text-taupe hover:text-primary" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between py-3 cursor-pointer font-medium">
                {t('services')}
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
              </summary>
              <div className="pl-4 space-y-2 pb-3">
                {servicesMenu.map((item) => (
                  <Link key={item.href} href={item.href} className="block py-2 text-sm text-taupe hover:text-primary" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href={`/${locale}/calculate/human-design`}
              className="block text-center px-5 py-3 bg-primary text-white font-medium tracking-wide uppercase rounded-full hover:bg-secondary transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {t('calculator')}
            </Link>

            <div className="pt-3 border-t border-accent/20">
              <LocaleSwitcher currentLocale={locale} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        'px-4 py-2 text-sm font-medium transition-colors relative',
        active ? 'text-primary' : 'text-tertiary hover:text-primary',
      )}
    >
      {children}
      {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
    </Link>
  );
}

function Dropdown({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
          isOpen ? 'text-primary' : 'text-tertiary hover:text-primary',
        )}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className={cn('w-3 h-3 transition-transform', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-[240px] bg-ivory border border-accent/30 rounded-elegant shadow-soft py-2 animate-fade-up">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block py-3 font-medium text-tertiary hover:text-primary border-b border-accent/10">
      {children}
    </Link>
  );
}
