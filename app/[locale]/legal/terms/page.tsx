import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'legal/terms',
  title: { vi: 'Điều khoản dịch vụ', en: 'Terms of Service', fr: 'Conditions d\'utilisation' },
  description: {
    vi: 'Điều khoản dịch vụ của ILUMEE — quy tắc sử dụng website, calculator và dịch vụ coaching.',
    en: 'ILUMEE Terms of Service — rules for using our website, calculators, and coaching services.',
    fr: 'Conditions d\'utilisation d\'ILUMEE — règles d\'usage du site, des calculateurs et des services de coaching.',
  },
});

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale as AppLocale, [
          { name: 'Legal', href: '/legal/terms' },
          { name: 'Terms', href: '/legal/terms' },
        ])}
      />
      <div className="pt-16 pb-24 max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="font-display italic font-light text-5xl text-tertiary">Điều khoản dịch vụ</h1>
          <div className="lotus-divider mx-auto mt-4" />
        </header>
        <article className="prose text-taupe">
          <p>Điều khoản dịch vụ của ILUMEE — đang được cập nhật. Vui lòng liên hệ hello@ilumee.app nếu cần thông tin chi tiết.</p>
          <h3 className="font-display text-2xl text-tertiary mt-6">Disclaimer</h3>
          <p>Các báo cáo và readings chỉ mang tính giáo dục và giải trí. Không thay thế tư vấn y tế, tài chính, hay tâm lý chuyên nghiệp.</p>
        </article>
      </div>
    </>
  );
}
