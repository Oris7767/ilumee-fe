import { NextResponse } from 'next/server';
import { z } from 'zod';
import { generateMockNumerology } from '@/lib/mock-numerology';

export const runtime = 'nodejs';

const BodySchema = z.object({
  full_name: z.string().min(1).max(200),
  birth_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  locale: z.enum(['vi', 'en', 'fr']).default('vi'),
  email: z.string().email().optional(),
});

export async function POST(req: Request) {
  let json: unknown;
  try { json = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 });

  await new Promise((r) => setTimeout(r, 400));
  const result = generateMockNumerology(parsed.data);
  return NextResponse.json({ result, cached: result.cached });
}
