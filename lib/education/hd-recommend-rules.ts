import { HDType } from './hd-explanations';
import { PACKAGES } from '@/lib/packages';

/**
 * Recommend 2-3 packages based on the chart's Type + Authority + Profile.
 * The flagship package is always appended last.
 */

export interface RecommendInput {
  type: HDType;
  authority?: string;
  profile?: string;
}

export interface RecommendedPackage {
  id: string;
  reason: string;
  primary?: boolean;
}

export function recommendPackages(input: RecommendInput): RecommendedPackage[] {
  const out: RecommendedPackage[] = [];

  const push = (id: string, reason: string, primary = false) => {
    if (!out.find((o) => o.id === id)) out.push({ id, reason, primary });
  };

  switch (input.type) {
    case 'Generator':
    case 'Manifesting Generator':
      push(
        'readings-soulplan',
        'Để hiểu phản hồi Sacral và cơ chế Life Force của bạn.',
        true,
      );
      push('classes-livingdesign', 'Khóa học nền tảng giúp bạn áp dụng Type + Authority hàng ngày.');
      break;
    case 'Projector':
      push(
        'classes-livingdesign',
        'Projector cần hiểu rõ chiến lược "đợi lời mời" và cách nhận diện invitation thật — khóa này là nền tảng.',
        true,
      );
      if (input.profile === '3/5' || input.profile === '1/3') {
        push('readings-bg5', 'Profile 3/5 hoặc 1/3 rất phù hợp với 12 chìa khoá thành công BG5.');
      }
      break;
    case 'Manifestor':
      push(
        'classes-livingdesign',
        'Học cách inform trước khi hành động để giảm sức cản và nuôi dưỡng Signature "Peace".',
        true,
      );
      push('readings-bg5', 'Manifestor thường phát triển mạnh qua BG5 khi tìm được đúng vai trong nhóm.');
      break;
    case 'Reflector':
      push(
        'mentorship-1on1',
        'Reflector đặc biệt nhạy với môi trường — mentorship dài hạn giúp bạn theo dõi lunar cycle và ra quyết định lớn an toàn.',
        true,
      );
      push('readings-soulplan', 'Đọc Soul Plan giúp bạn hiểu sứ mệnh khi đang phản ánh môi trường.');
      break;
  }

  // Flagship always
  push('package-combo', 'Combo 3 tháng: báo cáo chuyên sâu + lớp học + 12h coaching 1-1 — flagship cho hành trình toàn diện.');

  return out;
}

export function getPackageById(id: string) {
  return PACKAGES.find((p) => p.id === id);
}
