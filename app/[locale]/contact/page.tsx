import { Mail, MessageCircle } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'contact',
  title: { vi: 'Liên hệ', en: 'Contact', fr: 'Contact' },
  description: {
    vi: 'Liên hệ ILUMEE qua email hoặc đặt lịch tư vấn miễn phí qua Calendly.',
    en: 'Reach ILUMEE via email or book a free intro call through Calendly.',
    fr: 'Contactez ILUMEE par email ou réservez un appel introductif gratuit via Calendly.',
  },
});

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd data={breadcrumbLd(locale as AppLocale, [{ name: 'Contact', href: '/contact' }])} />
      <div className="pt-16 pb-24 max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <div className="tagline mb-4">Contact</div>
          <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Liên hệ</h1>
          <div className="lotus-divider mx-auto mt-4" />
        </header>

        <div className="bg-white/85 backdrop-blur-sm border border-accent/30 rounded-elegant shadow-soft p-8 space-y-4">
          <Row icon={Mail} label="Email" value="hello@ilumee.app" href="mailto:hello@ilumee.app" />
          <Row icon={MessageCircle} label="Calendly" value="Đặt lịch tư vấn miễn phí" href="https://calendly.com/ilumee/intro" />
        </div>
      </div>
    </>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-elegant hover:bg-rose/30 transition">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-taupe">{label}</div>
        <div className="font-display text-lg text-tertiary">{value}</div>
      </div>
    </a>
  );
}
