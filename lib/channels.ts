import { CenterId } from './centers';

/**
 * 36 Channels of the Human Design BodyGraph.
 * Each channel connects two Centers via two Gates (hexagrams).
 * Source data: standard Jovian Archive bodygraph schema.
 */

export interface ChannelDef {
  id: string;
  /** Gate on the "from" center — first half hexagram number */
  gateA: number;
  /** Gate on the "to" center — second half hexagram number */
  gateB: number;
  /** Centers connected by this channel */
  from: CenterId;
  to: CenterId;
  /** Channel name (I Ching) */
  name: string;
  /** Whether this channel is part of a specific Circuit */
  circuit: 'individual' | 'collective' | 'tribal' | 'integrating';
  /** Short metaphysical description */
  description: string;
}

export const CHANNELS: ChannelDef[] = [
  { id: '1-8', gateA: 1, gateB: 8, from: 'g', to: 'throat', name: 'The Channel of Inspiration', circuit: 'individual', description: 'Sáng tạo theo mô hình tinh thần — biến cảm hứng thành biểu đạt.' },
  { id: '2-14', gateA: 2, gateB: 14, from: 'g', to: 'sacral', name: 'The Channel of the Beat', circuit: 'individual', description: 'Nhịp điệu sinh học — bản năng hướng đi và tiến lên.' },
  { id: '3-60', gateA: 3, gateB: 60, from: 'sacral', to: 'solarPlexus', name: 'The Channel of Mutation', circuit: 'individual', description: 'Đột biến và thích nghi — chấp nhận giới hạn để bứt phá.' },
  { id: '4-63', gateA: 4, gateB: 63, from: 'ajna', to: 'head', name: 'The Channel of Logic', circuit: 'individual', description: 'Tư duy logic — khám phá qui luật và giải mã sự vận hành của thực tại.' },
  { id: '5-15', gateA: 5, gateB: 15, from: 'sacral', to: 'g', name: 'The Channel of Rhythm', circuit: 'individual', description: 'Sống theo nhịp tự nhiên — yêu thương tự do và thời gian cá nhân.' },
  { id: '6-59', gateA: 6, gateB: 59, from: 'solarPlexus', to: 'sacral', name: 'The Channel of Mating', circuit: 'tribal', description: 'Trực giác sinh sản — sự kết nối thân mật và hòa hợp nền tảng.' },
  { id: '7-31', gateA: 7, gateB: 31, from: 'g', to: 'throat', name: 'The Channel of the Alpha', circuit: 'collective', description: 'Lãnh đạo bản năng — năng lực điều phối, chỉ huy và tổ chức nhóm.' },
  { id: '9-52', gateA: 9, gateB: 52, from: 'sacral', to: 'root', name: 'The Channel of Concentration', circuit: 'individual', description: 'Tập trung dài hạn — năng lực xây dựng và duy trì nỗ lực lớn.' },
  { id: '10-20', gateA: 10, gateB: 20, from: 'g', to: 'throat', name: 'The Channel of Awakening', circuit: 'integrating', description: 'Tỉnh thức tinh thần — nguyên tắc sống cao cả được biểu đạt ra thế giới.' },
  { id: '10-34', gateA: 10, gateB: 34, from: 'g', to: 'sacral', name: 'The Channel of Exploration', circuit: 'collective', description: 'Hành vi vì nhân loại — khám phá ý tưởng và xây dựng tầm nhìn.' },
  { id: '10-57', gateA: 10, gateB: 57, from: 'g', to: 'spleen', name: 'The Channel of Perfected Form', circuit: 'individual', description: 'Trực giác sáng tạo — bảo toàn sức khỏe và dòng chảy sinh lực.' },
  { id: '11-56', gateA: 11, gateB: 56, from: 'ajna', to: 'throat', name: 'The Channel of Curiosity', circuit: 'collective', description: 'Tìm kiếm và kể chuyện — biến ý tưởng thành câu chuyện có thể chia sẻ.' },
  { id: '12-22', gateA: 12, gateB: 22, from: 'throat', to: 'solarPlexus', name: 'The Channel of Openness', circuit: 'collective', description: 'Biểu đạt cảm xúc thật — cẩn thận trong việc nói ra cảm xúc.' },
  { id: '13-33', gateA: 13, gateB: 33, from: 'g', to: 'throat', name: 'The Channel of the Witness', circuit: 'collective', description: 'Quan sát và chia sẻ — biết cách lắng nghe và nói về kinh nghiệm sống.' },
  { id: '16-48', gateA: 16, gateB: 48, from: 'throat', to: 'spleen', name: 'The Channel of the Wave', circuit: 'tribal', description: 'Talent — khả năng thấu hiểu và phát triển tiềm năng cốt lõi.' },
  { id: '17-62', gateA: 17, gateB: 62, from: 'ajna', to: 'throat', name: 'The Channel of Acceptance', circuit: 'collective', description: 'Logic-biểu đạt — chấp nhận sự tồn tại của những ý tưởng trừu tượng.' },
  { id: '18-58', gateA: 18, gateB: 58, from: 'spleen', to: 'root', name: 'The Channel of Judgment', circuit: 'tribal', description: 'Phản hồi phê bình — năng lực nâng cấp cá nhân và tổ chức.' },
  { id: '19-49', gateA: 19, gateB: 49, from: 'solarPlexus', to: 'root', name: 'The Channel of Synthesis', circuit: 'tribal', description: 'Đòi hỏi và thử thách — thúc đẩy phát triển bằng cách đặt câu hỏi khó.' },
  { id: '20-34', gateA: 20, gateB: 34, from: 'throat', to: 'sacral', name: 'The Channel of Charisma', circuit: 'integrating', description: 'Sức hấp dẫn — biểu đạt năng lượng Sacral đầy tự tin.' },
  { id: '20-57', gateA: 20, gateB: 57, from: 'throat', to: 'spleen', name: 'The Channel of the Brainwave', circuit: 'integrating', description: 'Tầm nhìn trực giác — kết nối trực giác và biểu đạt thành lời nói.' },
  { id: '21-45', gateA: 21, gateB: 45, from: 'heart', to: 'throat', name: 'The Channel of Money', circuit: 'tribal', description: 'Tài chính cá nhân — biết giá trị của mình và quản lý dòng tiền.' },
  { id: '23-43', gateA: 23, gateB: 43, from: 'throat', to: 'ajna', name: 'The Channel of Structuring', circuit: 'individual', description: 'Biểu đạt mang tính đột phá — biến sự thật thành cấu trúc rõ ràng.' },
  { id: '24-61', gateA: 24, gateB: 61, from: 'ajna', to: 'head', name: 'The Channel of Awareness', circuit: 'individual', description: 'Nhận thức trực giác — giải mã những thông điệp từ vô thức.' },
  { id: '25-51', gateA: 25, gateB: 51, from: 'g', to: 'heart', name: 'The Channel of Initiation', circuit: 'tribal', description: 'Khởi xướng cá nhân — năng lực trở thành người tiên phong.' },
  { id: '26-44', gateA: 26, gateB: 44, from: 'heart', to: 'spleen', name: 'The Channel of Surrender', circuit: 'tribal', description: 'Dâng hiến — kết hợp ý chí với trực giác để hành động đúng.' },
  { id: '27-50', gateA: 27, gateB: 50, from: 'sacral', to: 'spleen', name: 'The Channel of Preservation', circuit: 'tribal', description: 'Bảo tồn — chăm sóc bản thân và cộng đồng bằng trực giác Sacral.' },
  { id: '28-38', gateA: 28, gateB: 38, from: 'spleen', to: 'root', name: 'The Channel of Struggle', circuit: 'individual', description: 'Vật lộn — chấp nhận thử thách để khám phá ý nghĩa sâu xa.' },
  { id: '29-46', gateA: 29, gateB: 46, from: 'sacral', to: 'g', name: 'The Channel of Discovery', circuit: 'individual', description: 'Khám phá — dấn thân vào những trải nghiệm mới để học.' },
  { id: '30-41', gateA: 30, gateB: 41, from: 'solarPlexus', to: 'heart', name: 'The Channel of Recognition', circuit: 'integrating', description: 'Cảm xúc — bày tỏ nhu cầu để nhận được sự công nhận.' },
  { id: '31-7', gateA: 31, gateB: 7, from: 'throat', to: 'g', name: 'The Channel of the Alpha (mirror)', circuit: 'collective', description: 'Lãnh đạo — tổ chức nhóm và đưa ra hướng đi.' },
  { id: '32-54', gateA: 32, gateB: 54, from: 'spleen', to: 'root', name: 'The Channel of Transformation', circuit: 'tribal', description: 'Biến đổi — thôi thúc thay đổi để phát triển.' },
  { id: '34-10', gateA: 34, gateB: 10, from: 'sacral', to: 'g', name: 'The Channel of Exploration (mirror)', circuit: 'collective', description: 'Hành vi phiêu lưu — đóng góp cho nhân loại bằng cách dấn thân.' },
  { id: '35-36', gateA: 35, gateB: 36, from: 'throat', to: 'solarPlexus', name: 'The Channel of Transitoriness', circuit: 'collective', description: 'Trải nghiệm cảm xúc — sẵn sàng thử những điều mới với cảm xúc.' },
  { id: '37-40', gateA: 37, gateB: 40, from: 'heart', to: 'solarPlexus', name: 'The Channel of Community', circuit: 'tribal', description: 'Cộng đồng — tìm kiếm sự hòa hợp và kết nối nhóm.' },
  { id: '39-55', gateA: 39, gateB: 55, from: 'root', to: 'solarPlexus', name: 'The Channel of Emoting', circuit: 'individual', description: 'Cảm xúc nền tảng — năng lượng cảm xúc sâu và dữ dội.' },
  { id: '42-53', gateA: 42, gateB: 53, from: 'root', to: 'sacral', name: 'The Channel of Maturation', circuit: 'individual', description: 'Trưởng thành — tăng trưởng qua chu kỳ dài cần sự kiên nhẫn.' },
];

export const CHANNEL_BY_ID: Record<string, ChannelDef> =
  CHANNELS.reduce((acc, c) => ({ ...acc, [c.id]: c }), {} as Record<string, ChannelDef>);
