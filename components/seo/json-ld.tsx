import type { JsonLd } from '@/lib/seo/jsonld';

/**
 * Renders one or many JSON-LD objects inside a single <script type="application/ld+json"> tag.
 * Use dangerouslySetInnerHTML — content is built locally and never user-derived.
 */
export function JsonLd({ data }: { data: JsonLd | JsonLd[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
