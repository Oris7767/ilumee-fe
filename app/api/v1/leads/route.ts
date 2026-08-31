import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const BodySchema = z.object({
  source: z.string().min(2).max(50),
  name: z.string().min(1).max(200).optional(),
  email: z.string().email(),
  interest: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  let json: unknown;
  try { json = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: 'Validation failed' }, { status: 400 });

  // In production, persist to Supabase `leads` table.
  // For mock phase, we just log to stdout so it shows in Netlify function logs.
  // eslint-disable-next-line no-console
  console.log('[leads]', parsed.data);

  return NextResponse.json({ ok: true });
}
