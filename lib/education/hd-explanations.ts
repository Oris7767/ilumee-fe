/**
 * Static education copy for Human Design Type/Strategy/Authority/Profile/etc.
 * Indexed by Type → array of guidance paragraphs used by the result page
 * and by the recommend-rules engine.
 */

export type HDType = 'Generator' | 'Manifestor' | 'Manifesting Generator' | 'Projector' | 'Reflector';
export type HDAuthority =
  | 'Emotional' | 'Sacral' | 'Splenic' | 'Ego' | 'Self-Projected'
  | 'Mental' | 'Lunar';
export type HDProfile = string;

export interface TypeEducation {
  short: string; // 1-line summary
  long: string; // multi-sentence explainer
  strategy: string; // the Strategy
  signature: string;
  notSelfTheme: string;
  authorityHint: HDAuthority;
}

export const TYPE_EDUCATION: Record<HDType, TypeEducation> = {
  'Generator': {
    short: 'Nguồn năng lượng sống — đáp ứng (respond) thay vì khởi xướng.',
    long: 'Generator chiếm khoảng 70% dân số và có Sacral Center defined — họ có nguồn sinh lực dồi dào để làm việc và sáng tạo. Cách họ vận hành đúng là chờ đợi và đáp ứng (respond), không phải chủ động khởi xướng.',
    strategy: 'Đợi để đáp ứng (Wait to respond)',
    signature: 'Sự hài lòng (Satisfaction)',
    notSelfTheme: 'Sự thất vọng (Frustration)',
    authorityHint: 'Sacral',
  },
  'Manifesting Generator': {
    short: 'Vừa đáp ứng vừa khởi tạo — nhanh, đa nhiệm và phi truyền thống.',
    long: 'Manifesting Generator (MG) là Generator có kết nối tới Throat hoặc Motor center — ngoài việc đáp ứng, họ còn có khả năng khởi tạo và thông báo (inform). MG thường có nhịp nhanh, đa nhiệm, và không thích bị kiềm chế.',
    strategy: 'Đáp ứng rồi thông báo (Respond & inform)',
    signature: 'Sự hài lòng (Satisfaction)',
    notSelfTheme: 'Sự thất vọng (Frustration)',
    authorityHint: 'Sacral',
  },
  'Manifestor': {
    short: 'Người khởi tạo — chiếm ~9% dân số.',
    long: 'Manifestor có Aura đóng và đẩy lùi (closed, repelling aura). Họ được thiết kế để khởi tạo mà không cần xin phép, nhưng cần học cách thông báo (inform) trước khi hành động để giảm sức cản từ người xung quanh.',
    strategy: 'Thông báo rồi hành động (Inform before acting)',
    signature: 'Sự bình yên (Peace)',
    notSelfTheme: 'Sự tức giận (Anger)',
    authorityHint: 'Splenic hoặc Emotional',
  },
  'Projector': {
    short: 'Người hướng dẫn — đọc aura và đợi lời mời.',
    long: 'Projector chiếm khoảng 21% dân số. Họ có Aura xuyên thấu, tập trung (focused, penetrating) và được thiết kế để nhìn thấy hệ thống cũng như con người sâu sắc nhất. Để thành công, Projector cần chờ lời mời (invitation) — đặc biệt là lời mời công nhận (recognition).',
    strategy: 'Đợi lời mời (Wait for the invitation)',
    signature: 'Thành công (Success)',
    notSelfTheme: 'Sự cay đắng (Bitterness)',
    authorityHint: 'Self-Projected hoặc Mental',
  },
  'Reflector': {
    short: 'Gương phản chiếu — hiếm (~1%) và cực kỳ nhạy với môi trường.',
    long: 'Reflector không có bất kỳ Center nào defined và 32-day Strategy: họ cần chờ qua một chu kỳ Mặt Trăng (~28 ngày) trước khi đưa ra quyết định lớn. Môi trường sống (environment) là yếu tố cực kỳ quan trọng đối với Reflector.',
    strategy: 'Chờ chu kỳ 28 ngày (Wait a lunar cycle)',
    signature: 'Sự ngạc nhiên (Surprise)',
    notSelfTheme: 'Sự thất vọng (Disappointment)',
    authorityHint: 'Lunar',
  },
};

export interface AuthorityEducation {
  short: string;
  how: string;
}

export const AUTHORITY_EDUCATION: Record<HDAuthority, AuthorityEducation> = {
  Emotional: {
    short: 'Sóng cảm xúc — chờ đợi cho sóng qua rồi quyết.',
    how: 'Bạn thuộc nhóm Solar Plexus defined — quyết định đúng khi bạn đợi hết sóng cảm xúc (có thể mất vài giờ, vài ngày). Không nên quyết trên đỉnh hay đáy sóng.',
  },
  Sacral: {
    short: 'Phản hồi âm thanh — nghe tiếng "uh-huh" hoặc "uhn-uhn".',
    how: 'Bạn có Sacral defined. Cách ra quyết định đúng là chờ phản hồi tức thì trong cơ thể — tiếng "uh-huh" (có) / "uhn-uhn" (không) — thay vì dùng trí tuệ.',
  },
  Splenic: {
    short: 'Trực giác thân thể — tín hiệu nhỏ, ngay lập tức.',
    how: 'Bạn có Spleen defined. Hãy tin vào tín hiệu nhỏ từ cơ thể ngay lập tức (sợ hãi, thoải mái, "đây không phải"). Quyết định nên đưa ra trong 1-2 giây — quá lâu = tiếng nói của tâm trí.',
  },
  'Ego': {
    short: 'Ý chí / Cam kết — dùng giọng nói nói "tôi muốn / tôi sẽ".',
    how: 'Bạn có Heart/Ego defined. Nói ra những gì bạn muốn (declare) — câu trả lời đúng nằm trong cam kết bằng lời. Tránh hứa khi không chắc.',
  },
  'Self-Projected': {
    short: 'Nói ra để nghe — Projector lắng nghe chính mình qua việc nói.',
    how: 'Khi nói chuyện (đặc biệt với người mình tin), bạn sẽ tự nghe được câu trả lời. Môi trường 1-1 tốt nhất.',
  },
  Mental: {
    short: 'Hỏi người khác — qua trao đổi để rõ ràng hơn.',
    how: 'Brain/Mental authority: bạn có khả năng suy nghĩ sâu qua trao đổi. Hãy đặt câu hỏi cho người đáng tin trong 24h đầu.',
  },
  Lunar: {
    short: 'Chờ Mặt Trăng — phản ánh môi trường trong 28 ngày.',
    how: 'Đặc trưng Reflector: chờ qua một chu kỳ Mặt Trăng (~28 ngày) để quyết định lớn. Môi trường sống ảnh hưởng trực tiếp đến sức khỏe và bình an của bạn.',
  },
};
