import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbLd } from '@/lib/seo/jsonld';
import { pageMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

export const generateMetadata = pageMetadata({
  path: 'blog',
  title: { vi: 'Blog', en: 'Blog', fr: 'Blog' },
  description: {
    vi: 'Bài viết về Soul Plan, Human Design và Thần số học — hướng dẫn thực hành cho người mới.',
    en: 'Essays on Soul Plan, Human Design and Numerology — practical guides for newcomers.',
    fr: 'Articles sur Soul Plan, Human Design et Numérologie — guides pratiques pour débutants.',
  },
});

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = [
    { slug: 'human-design-la-gi', title: 'Human Design là gì? Hướng dẫn cho người mới', excerpt: 'BodyGraph, Type, Authority, và cách Human Design giúp bạn sống đúng thiết kế.' },
    { slug: '5-cach-song-dung-thiet-ke', title: '5 cách sống đúng thiết kế trong 7 ngày', excerpt: 'Một tuần thực hành Strategy + Authority — không cần lớp học dài hạn.' },
    { slug: 'reflector-tra-loi-cau-hoi-2027', title: 'Reflector & chu kỳ 2027', excerpt: 'Reflector có gì đặc biệt trong giai đoạn chuyển tiếp 2027?' },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(locale as AppLocale, [{ name: 'Blog', href: '/blog' }])} />
      <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <div className="tagline mb-4">Blog</div>
          <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">Bài viết mới nhất</h1>
          <div className="lotus-divider mx-auto mt-4" />
        </header>
        <div className="space-y-4">
          {posts.map((post) => (
            <a key={post.slug} href={`#${post.slug}`} className="block bg-white/85 backdrop-blur-sm border border-accent/30 rounded-elegant shadow-soft p-6 hover:-translate-y-1 transition-all">
              <h3 className="font-display text-2xl text-tertiary mb-2">{post.title}</h3>
              <p className="text-taupe text-sm">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
