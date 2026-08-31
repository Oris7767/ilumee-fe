import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd, faqLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'tools/human-design',
  title: { vi: 'Human Design', en: 'Human Design', fr: 'Human Design' },
  description: {
    vi: 'Human Design — BodyGraph 9 Centers, 36 Channels, 64 Gates. Tính Type, Strategy, Authority, Profile, Incarnation Cross.',
    en: 'Human Design — BodyGraph of 9 Centers, 36 Channels, 64 Gates. Calculate your Type, Strategy, Authority, Profile, and Incarnation Cross.',
    fr: 'Human Design — BodyGraph à 9 Centers, 36 Channels, 64 Gates. Calculez votre Type, Strategy, Authority, Profile et Incarnation Cross.',
  },
});

export default async function HumanDesignIntro({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const calculateHref = `/${locale}/calculate/human-design`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(locale as AppLocale, [
            { name: 'Tools', href: '/tools' },
            { name: 'Human Design', href: '/tools/human-design' },
          ]),
          faqLd([
            {
              question: 'Human Design là gì?',
              answer:
                'Human Design là hệ thống kết hợp I Ching, Kabbalah, Chakra và Chiêm tinh được Ra Uru Hu truyền dạy từ 1987 — vẽ bản đồ năng lượng cá nhân (BodyGraph) gồm 9 Centers, 36 Channels, 64 Gates.',
            },
            {
              question: 'Cần thông tin gì để tính Human Design?',
              answer: 'Bạn cần ngày, giờ chính xác và nơi sinh. Nếu không biết giờ, chọn "không rõ" và bạn sẽ thấy disclaimer về độ chính xác.',
            },
            {
              question: 'BodyGraph gồm những gì?',
              answer:
                '9 Centers (Head, Ajna, Throat, G, Heart, Spleen, Solar Plexus, Sacral, Root), 36 Channels kết nối các Center, và 64 Gates từ 64 quẻ Dịch — mỗi channel kết thúc bằng hai gate.',
            },
          ]),
        ]}
      />
      <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <Compass className="w-14 h-14 text-primary mx-auto mb-4" />
          <div className="tagline mb-4">Tools · Human Design</div>
          <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Human Design</h1>
          <div className="lotus-divider mx-auto mt-4" />
          <p className="text-taupe mt-6 max-w-2xl mx-auto">
            Hệ thống "khoa học về sự khác biệt" được Ra Uru Hu truyền dạy từ 1987 — kết hợp I Ching, Kabbalah, Chakra và Chiêm tinh để vẽ nên bản đồ năng lượng cá nhân.
          </p>
        </header>

        <article className="prose prose-lg max-w-none text-taupe">
          <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">BodyGraph</h2>
          <p>
            BodyGraph là bản đồ năng lượng gồm <strong>9 Centers</strong> (Head, Ajna, Throat, G, Heart, Spleen, Solar Plexus, Sacral, Root),
            kết nối bởi <strong>36 Channels</strong>, mỗi channel kết thúc bằng hai <strong>Gates</strong> từ 64 quẻ Dịch.
            Center nào <em>defined</em> (tô màu) — bạn có nguồn năng lượng cố định. Center nào <em>open</em> — bạn dễ tiếp nhận và học hỏi từ môi trường.
          </p>
          <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">Type + Authority + Strategy</h2>
          <p>
            BodyGraph cho bạn biết <strong>Type</strong> — Generator, Manifesting Generator, Projector, Manifestor, Reflector (5 dạng).
            Mỗi Type có một <em>Strategy</em> và <em>Not-Self theme</em> riêng. Thêm <em>Inner Authority</em> (cách cơ thể bạn ra quyết định)
            và bạn có đủ công cụ để sống đúng thiết kế.
          </p>
          <h2 className="font-display text-3xl text-3xl text-tertiary mt-8 mb-4">Profile + Incarnation Cross</h2>
          <p>
            <strong>Profile</strong> (6 cặp Personality/Design line) cho biết "vai" bạn đóng trong cuộc đời.
            <strong>Incarnation Cross</strong> là chủ đề lớn bạn đến để sống — kết hợp 4 gate quyết định hướng đi tổng thể.
          </p>
          <h2 className="font-display text-3xl text-tertiary mt-8 mb-4">Bắt đầu</h2>
          <p>Để có kết quả chính xác nhất, bạn cần <strong>ngày + giờ + nơi sinh</strong>. Nếu không biết giờ chính xác, chọn "không rõ" và bạn sẽ được disclaimer.</p>
          <Link
            href={calculateHref}
            className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary transition-all"
          >
            Tính BodyGraph của tôi <ArrowRight className="w-4 h-4" />
          </Link>
        </article>
      </div>
    </>
  );
}
