import { BookOpen } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd, serviceLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'services/readings',
  title: { vi: 'Readings', en: 'Readings', fr: 'Lectures' },
  description: {
    vi: 'Phiên đọc 1-1 (90 phút) về Soul Plan, BG5 và Thần số học — đi kèm ghi âm và PDF tóm tắt.',
    en: '90-minute 1-1 readings on Soul Plan, BG5 and Numerology — with recording and PDF summary.',
    fr: 'Lectures 1-1 de 90 minutes sur Soul Plan, BG5 et Numérologie — enregistrement et PDF récapitulatif.',
  },
});

export default async function ReadingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(locale as AppLocale, [
            { name: 'Services', href: '/services' },
            { name: 'Readings', href: '/services/readings' },
          ]),
          serviceLd({
            serviceType: 'Reading',
            name: 'Soul Plan Reading',
            description: '90-minute deep-dive on your birth name and 6 Star of Creation placements.',
            price: '149',
            currency: 'USD',
          }),
          serviceLd({
            serviceType: 'Reading',
            name: 'BG5 Success Keys Reading',
            description: '90-minute session on your BG5 success type and group role.',
            price: '199',
            currency: 'USD',
          }),
          serviceLd({
            serviceType: 'Reading',
            name: 'Numerology Reading',
            description: '90-minute walkthrough of your 6 core numerology numbers.',
            price: '129',
            currency: 'USD',
          }),
        ]}
      />
      <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <div className="tagline mb-4">Services · Readings</div>
          <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Readings</h1>
          <div className="lotus-divider mx-auto mt-4" />
          <p className="text-taupe mt-6 max-w-xl mx-auto">
            Phiên đọc 1-1 về 3 bộ môn — lý giải chi tiết các con số, hành tinh, trung tâm năng lượng trong bản đồ của bạn.
          </p>
        </header>
        <div className="prose prose-lg max-w-none text-taupe">
          <h3 className="font-display text-2xl text-tertiary mt-4 mb-4">Các loại reading</h3>
          <ul className="space-y-3">
            <li><strong>Đọc bản đồ linh hồn Soul Plan</strong> — 90 phút, ghi âm + PDF.</li>
            <li><strong>12 chìa khoá thành công BG5</strong> — 90 phút, tập trung vào kiểu thành công và vai trò trong nhóm.</li>
            <li><strong>Đánh thức tài năng theo Thần số học</strong> — 90 phút, phân tích 6 con số chính.</li>
          </ul>
          <p className="mt-8">Sau reading, bạn nhận được file PDF tóm tắt + ghi âm buổi. Có thể đặt 1 hoặc nhóm readings cùng lúc.</p>
        </div>
      </div>
    </>
  );
}
