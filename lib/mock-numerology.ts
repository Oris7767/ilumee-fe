/**
 * Numerology stub generator (Pythagorean).
 * Real engine will compute lifePath, expression, soulUrge, personality.
 */

export interface NumerologyInput {
  full_name: string;
  birth_date: string; // YYYY-MM-DD
  locale?: string;
  email?: string;
}

export interface NumerologyResult {
  lifePath: { value: number; meaning: string };
  expression: { value: number; meaning: string };
  soulUrge: { value: number; meaning: string };
  personality: { value: number; meaning: string };
  birthday: { value: number; meaning: string };
  maturity: { value: number; meaning: string };
  cached: boolean;
}

const LIFE_PATH_MEANINGS: Record<number, string> = {
  1: 'Lãnh đạo — bạn đến để mở đường và tiên phong.',
  2: 'Hòa giải — bạn đến để kết nối, dung hòa và xây dựng quan hệ.',
  3: 'Sáng tạo — bạn đến để mang nghệ thuật và niềm vui.',
  4: 'Xây dựng — bạn đến để tạo nền tảng vững chắc.',
  5: 'Tự do — bạn đến để khám phá và trải nghiệm.',
  6: 'Chăm sóc — bạn đến để yêu thương, chữa lành và phục vụ gia đình.',
  7: 'Tìm hiểu — bạn đến để đào sâu vào tri thức và tâm linh.',
  8: 'Thành công — bạn đến để thể hiện quyền lực cá nhân và vật chất.',
  9: 'Phục vụ — bạn đến để hoàn thành và trao đi.',
  11: 'Trực giác bậc cao — Master Number.',
  22: 'Master Builder — Master Number.',
  33: 'Master Teacher — Master Number.',
};

function digitRoot(n: number): number {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = Math.floor(n / 10) + (n % 10);
  }
  return n;
}

function sumDate(s: string) {
  const [y, m, d] = s.split('-').map(Number);
  return digitRoot(digitRoot(d) + digitRoot(m) + digitRoot(y));
}

function sumName(s: string) {
  const map: Record<string, number> = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
  };
  let total = 0;
  for (const ch of s.toLowerCase()) {
    if (map[ch]) total += map[ch];
  }
  return digitRoot(total);
}

function sumVowels(s: string) {
  return sumName(s.replace(/[^aeiouy]/g, ''));
}

function sumConsonants(s: string) {
  return sumName(s.replace(/[aeiouy]/g, ''));
}

export function generateMockNumerology(input: NumerologyInput): NumerologyResult {
  const lifePath = sumDate(input.birth_date);
  const expression = sumName(input.full_name);
  const soulUrge = sumVowels(input.full_name);
  const personality = sumConsonants(input.full_name);
  const birthday = input.birth_date ? Number(input.birth_date.split('-')[2]) : 0;
  const maturity = digitRoot(lifePath + expression);

  const mean = (n: number) => LIFE_PATH_MEANINGS[n] ?? `Con số ${n} — mang một tần số đặc biệt cần được khai mở.`;

  return {
    lifePath: { value: lifePath, meaning: mean(lifePath) },
    expression: { value: expression, meaning: mean(expression) },
    soulUrge: { value: soulUrge, meaning: mean(soulUrge) },
    personality: { value: personality, meaning: mean(personality) },
    birthday: { value: birthday, meaning: 'Tài năng bẩm sinh — món quà ngày sinh nhật.' },
    maturity: { value: maturity, meaning: mean(maturity) },
    cached: false,
  };
}
