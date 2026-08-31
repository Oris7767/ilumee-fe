import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SAMPLE = [
  { name: 'London, UK', timezone: 'Europe/London', country: 'United Kingdom' },
  { name: 'Paris, France', timezone: 'Europe/Paris', country: 'France' },
  { name: 'Hanoi, Vietnam', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam' },
  { name: 'Ho Chi Minh City, Vietnam', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam' },
  { name: 'New York, NY, USA', timezone: 'America/New_York', country: 'United States' },
  { name: 'Los Angeles, CA, USA', timezone: 'America/Los_Angeles', country: 'United States' },
  { name: 'Tokyo, Japan', timezone: 'Asia/Tokyo', country: 'Japan' },
  { name: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore' },
  { name: 'Berlin, Germany', timezone: 'Europe/Berlin', country: 'Germany' },
  { name: 'Sydney, Australia', timezone: 'Australia/Sydney', country: 'Australia' },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get('query') || '').toLowerCase();
  const results = q
    ? SAMPLE.filter((c) => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q))
    : SAMPLE.slice(0, 5);
  return NextResponse.json({ results });
}
