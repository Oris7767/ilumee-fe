import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'legal/privacy',
  title: { vi: 'Chính sách bảo mật', en: 'Privacy Policy', fr: 'Politique de confidentialité' },
  description: {
    vi: 'Chính sách bảo mật ILUMEE — cách chúng tôi thu thập, lưu trữ và bảo vệ dữ liệu calculator + email.',
    en: 'ILUMEE Privacy Policy — how we collect, store, and protect your calculator input data and email.',
    fr: 'Politique de confidentialité d\'ILUMEE — comment nous collectons, stockons et protégeons vos données de calcul et e-mail.',
  },
});

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale as AppLocale, [
          { name: 'Legal', href: '/legal/privacy' },
          { name: 'Privacy', href: '/legal/privacy' },
        ])}
      />
      <div className="pt-16 pb-24 max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="font-display italic font-light text-5xl text-tertiary">Chính sách bảo mật</h1>
          <div className="lotus-divider mx-auto mt-4" />
        </header>
        <article className="prose text-taupe">
          <p>ILUMEE cam kết bảo mật thông tin cá nhân của bạn. Dữ liệu calculator input được lưu để cache kết quả và cải thiện trải nghiệm.</p>
          <p>Email cá nhân chỉ dùng để gửi báo cáo & không chia sẻ cho bên thứ ba.</p>
        </article>
      </div>
    </>
  );
}
