import { NextResponse } from 'next/server';
import { z } from 'zod';
import { generateMockHD } from '@/lib/mock-hd';
import { postJson } from '@/lib/api-client';
export const runtime = 'nodejs';

const BodySchema = z.object({
  full_name: z.string().min(1).max(200),
  birth_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  birth_time: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  birth_place: z.string().min(2).max(200).optional(),
  locale: z.enum(['vi', 'en', 'fr']).default('vi'),
  email: z.string().email().optional(),
});

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // Simulate small processing latency
  await new Promise((r) => setTimeout(r, 600));

  const chart = generateMockHD(parsed.data);

  // Send lead to /api/v1/leads (best effort, ignore errors)
  if (parsed.data.email) {
    try {
      await postJson('/leads', {
        source: 'hd-calculator',
        name: parsed.data.full_name,
        email: parsed.data.email,
      });
    } catch {
      /* ignore */
    }
  }

  return NextResponse.json({
    chart,
    svg: null, // optional inline SVG fallback — front-end uses 3D scene
    cached: chart.cached,
  });
}
