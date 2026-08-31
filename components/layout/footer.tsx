import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mail, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('Footer');
  const tBrand = useTranslations('Brand');

  return (
    <footer className="relative mt-32 border-t border-accent/30 bg-gradient-to-b from-ivory via-peach/40 to-rose/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="font-display text-2xl tracking-wide text-tertiary mb-3">{tBrand('name')}</div>
          <p className="text-sm text-taupe leading-relaxed">{t('disclaimer')}</p>
        </div>

        <div>
          <h4 className="font-display text-base uppercase tracking-widest text-primary mb-4">{t('contactTitle')}</h4>
          <a href="mailto:hello@ilumee.app" className="flex items-center gap-2 text-sm text-taupe hover:text-primary transition mb-2">
            <Mail className="w-4 h-4" /> hello@ilumee.app
          </a>
        </div>

        <div>
          <h4 className="font-display text-base uppercase tracking-widest text-primary mb-4">{t('socialTitle')}</h4>
          <div className="flex gap-3">
            <SocialIcon href="https://instagram.com/ilumee" label="Instagram"><Instagram className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://facebook.com/ilumee" label="Facebook"><Facebook className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://youtube.com/@ilumee" label="YouTube"><Youtube className="w-4 h-4" /></SocialIcon>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base uppercase tracking-widest text-primary mb-4">{t('legalTitle')}</h4>
          <ul className="space-y-2 text-sm text-taupe">
            <li><Link href={`/${locale}/legal/terms`} className="hover:text-primary transition">{t('terms')}</Link></li>
            <li><Link href={`/${locale}/legal/privacy`} className="hover:text-primary transition">{t('privacy')}</Link></li>
            <li><Link href={`/${locale}/legal/disclaimer`} className="hover:text-primary transition">{t('disclaimerFull')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-accent/20 py-6 text-center text-xs text-taupe">
        {t('copyright')}
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center text-tertiary hover:bg-primary hover:text-white hover:border-primary transition"
    >
      {children}
    </a>
  );
}
