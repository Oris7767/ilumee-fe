import { GraduationCap } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd, serviceLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'services/classes',
  title: { vi: 'Lớp học', en: 'Classes', fr: 'Cours' },
  description: {
    vi: 'Lớp học Soul Plan Cơ bản (6 buổi) và Living Your Design (8 buổi) — nhóm nhỏ 8-12 học viên, có lịch cố định.',
    en: 'Soul Plan Foundations (6 sessions) and Living Your Design (8 sessions) — small cohorts, fixed schedule.',
    fr: 'Soul Plan Fondamentaux (6 séances) et Living Your Design (8 séances) — petits groupes, horaires fixes.',
  },
});

export default async function ClassesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(locale as AppLocale, [
            { name: 'Services', href: '/services' },
            { name: 'Classes', href: '/services/classes' },
          ]),
          serviceLd({
            serviceType: 'Classes',
            name: 'Soul Plan Foundations',
            description: '6-week cohort course on Soul Plan — your birth name as a map of strengths and challenges.',
            price: '199',
            currency: 'USD',
          }),
          serviceLd({
            serviceType: 'Classes',
            name: 'Living Your Design',
            description: 'Official 8-week Human Design course from the Living Your Design network.',
            price: '249',
            currency: 'USD',
          }),
        ]}
      />
      <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
          <div className="tagline mb-4">Services · Classes</div>
          <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Lớp học</h1>
          <div className="lotus-divider mx-auto mt-4" />
          <p className="text-taupe mt-6 max-w-xl mx-auto">
            Khóa học nền tảng cho Soul Plan và Living Your Design (Human Design) — học theo nhóm nhỏ, có lịch cố định.
          </p>
        </header>
        <div className="prose prose-lg max-w-none text-taupe">
          <p>Lớp học ILUMEE được thiết kế dạy qua 6-8 buổi trực tuyến với nhóm nhỏ (8-12 học viên). Tài liệu PDF + ghi âm + worksheet cá nhân hóa.</p>
          <h3 className="font-display text-2xl text-tertiary mt-8 mb-4">Lớp học hiện có</h3>
          <ul className="space-y-2">
            <li><strong>Soul Plan Cơ bản</strong> — 6 buổi, mỗi tuần 1.5h</li>
            <li><strong>Living Your Design (Human Design)</strong> — 8 buổi, chương trình chính thức</li>
          </ul>
          <p className="mt-8">Để biết lịch khai giảng và đăng ký, vui lòng đặt lịch tư vấn qua Calendly — ILUMEE sẽ gửi bạn lịch học sắp tới.</p>
        </div>
      </div>
    </>
  );
}
