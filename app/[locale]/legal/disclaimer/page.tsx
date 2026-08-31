import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'legal/disclaimer',
  title: { vi: 'Disclaimer', en: 'Disclaimer', fr: 'Avertissement' },
  description: {
    vi: 'Disclaimer ILUMEE — kết quả calculator, bài viết và readings chỉ mang tính giáo dục và giải trí.',
    en: 'ILUMEE Disclaimer — calculator results, articles, and readings are for educational and entertainment purposes only.',
    fr: 'Avertissement ILUMEE — les résultats des calculateurs, articles et lectures sont à but éducatif et ludique uniquement.',
  },
});

export default async function DisclaimerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale as AppLocale, [
          { name: 'Legal', href: '/legal/disclaimer' },
          { name: 'Disclaimer', href: '/legal/disclaimer' },
        ])}
      />
      <div className="pt-16 pb-24 max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="font-display italic font-light text-5xl text-tertiary">Disclaimer</h1>
          <div className="lotus-divider mx-auto mt-4" />
        </header>
        <article className="prose text-taupe">
          <p>Toàn bộ nội dung trên ILUMEE — bao gồm kết quả calculator, bài viết, readings — chỉ mang tính giáo dục và giải trí. Chúng không phải tư vấn y tế, tài chính, pháp lý, hay tâm lý.</p>
          <p>Nếu bạn cần hỗ trợ chuyên nghiệp về các vấn đề sức khỏe, tài chính, hay tâm lý, vui lòng tham khảo ý kiến chuyên gia được chứng nhận.</p>
        </article>
      </div>
    </>
  );
}
