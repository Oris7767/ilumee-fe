/**
 * Soul Plan stub generator.
 * Real engine will follow Blue Marsden's Star of Creation matrix.
 * For now returns a plausible 6-position output keyed off the input name.
 */

export interface SoulPlanInput {
  full_name: string;
  locale?: string;
  email?: string;
}

export interface SoulPlanResult {
  chart: {
    positions: {
      worldlyTalent: { pair: string; meaning: string };
      worldlyChallenge: { pair: string; meaning: string };
      spiritualTalent: { pair: string; meaning: string };
      spiritualChallenge: { pair: string; meaning: string };
      worldlyGoal: { pair: string; meaning: string };
      spiritualGoal: { pair: string; meaning: string };
      soulDestiny: { pair: string; meaning: string };
    };
    soulDestiny: { number: number; meaning: string };
  };
  cached: boolean;
}

function sumLetters(s: string) {
  const map: Record<string, number> = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9, s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8 };
  let total = 0;
  for (const ch of s.toLowerCase()) {
    if (map[ch]) total += map[ch];
  }
  while (total > 33) {
    total = Math.floor(total / 10) + (total % 10);
  }
  return total;
}

const MEANINGS: Record<string, string> = {
  '1-1': 'Khởi đầu mới — cơ hội tự do và độc lập.',
  '17-8': 'Ngôi sao của hy vọng — thiên chức truyền thông và kết nối tâm linh.',
  '11-2': 'Trực giác cao — năng lực cảm nhận mạnh mẽ.',
  '20-7': 'Sự thức tỉnh — năng lực chữa lành và chuyển hóa.',
};

export function generateMockSoulPlan(input: SoulPlanInput): SoulPlanResult {
  const sd = sumLetters(input.full_name);
  return {
    chart: {
      positions: {
        worldlyTalent: { pair: '17-8', meaning: 'Tài năng trong giao tiếp và viết lách.' },
        worldlyChallenge: { pair: '11-2', meaning: 'Học cách tin vào trực giác hơn là tâm trí.' },
        spiritualTalent: { pair: '20-7', meaning: 'Khả năng chữa lành cho người khác.' },
        spiritualChallenge: { pair: '1-1', meaning: 'Thoát khỏi sự phụ thuộc, tự tin vào con đường riêng.' },
        worldlyGoal: { pair: '17-8', meaning: 'Mục tiêu thế giới: truyền cảm hứng và tạo cộng đồng.' },
        spiritualGoal: { pair: '11-2', meaning: 'Mục tiêu tâm linh: tin vào dòng chảy vũ trụ.' },
        soulDestiny: { pair: '20-7', meaning: 'Sứ mệnh: chữa lành và nâng đỡ những ai cần ánh sáng.' },
      },
      soulDestiny: { number: sd, meaning: MEANINGS[`${sd}-${(sd % 9) + 1}`] ?? `Con số linh hồn ${sd} — bạn mang ánh sáng riêng.` },
    },
    cached: false,
  };
}
