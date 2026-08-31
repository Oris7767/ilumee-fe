/**
 * Static coordinates for the 9 Human Design Centers.
 * Positions are normalized in [-10..10] on XY plane, with Z=0.
 * The shape on the BodyGraph: Head/Ajna/Throat/G on the right,
 * Heart/Spleen on the left, Solar Plexus/Sacral/Root below.
 *
 * Coordinate convention matches standard Jovian Archive BodyGraph layout,
 * learned from open-source projects (Gonzih/hd-bodygraph) for our 2D/3D render.
 */

export type CenterId =
  | 'head' | 'ajna' | 'throat' | 'g' | 'heart'
  | 'spleen' | 'solarPlexus' | 'sacral' | 'root';

export interface CenterDef {
  id: CenterId;
  name: string;
  /** Geometric shape (for the 2D SVG fallback) */
  shape: 'triangle' | 'square' | 'diamond';
  /** Position on the bodygraph plane (x: left-right, y: top-bottom) */
  position: [number, number];
  /** Theme color tokens */
  theme: 'motor' | 'awareness' | 'identity' | 'pressure' | 'expression';
  /** A short biological / metaphysical description */
  description: string;
}

export const CENTERS: CenterDef[] = [
  {
    id: 'head',
    name: 'Head',
    shape: 'triangle',
    position: [0, 9],
    theme: 'pressure',
    description: 'Nguồn cảm hứng và áp lực tinh thần — nơi đặt câu hỏi cho cõi vô hình.',
  },
  {
    id: 'ajna',
    name: 'Ajna',
    shape: 'triangle',
    position: [0, 6],
    theme: 'awareness',
    description: 'Trung tâm nhận thức, xử lý thông tin và hình thành ý tưởng.',
  },
  {
    id: 'throat',
    name: 'Throat',
    shape: 'triangle',
    position: [0, 3],
    theme: 'expression',
    description: 'Trung tâm biểu đạt — biến ý tưởng thành hành động, lời nói và sáng tạo.',
  },
  {
    id: 'g',
    name: 'G',
    shape: 'triangle',
    position: [0, 0],
    theme: 'identity',
    description: 'Trung tâm bản sắc, hướng đi trong cuộc sống và câu chuyện về con người bạn.',
  },
  {
    id: 'heart',
    name: 'Heart / Ego',
    shape: 'triangle',
    position: [-3, 1.5],
    theme: 'motor',
    description: 'Trung tâm ý chí — năng lượng hứa hứa, cam kết và giá trị bản thân.',
  },
  {
    id: 'spleen',
    name: 'Spleen',
    shape: 'triangle',
    position: [-3, -1.5],
    theme: 'awareness',
    description: 'Trung tâm trực giác, nhận thức thân thể và bản năng sống còn.',
  },
  {
    id: 'solarPlexus',
    name: 'Solar Plexus',
    shape: 'diamond',
    position: [3, 1.5],
    theme: 'awareness',
    description: 'Trung tâm cảm xúc — sóng cảm xúc và trí tuệ cảm tính.',
  },
  {
    id: 'sacral',
    name: 'Sacral',
    shape: 'square',
    position: [3, -3],
    theme: 'motor',
    description: 'Trung tâm sinh lực — nguồn năng lượng sống (Generator/Manifesting Generator).',
  },
  {
    id: 'root',
    name: 'Root',
    shape: 'square',
    position: [0, -6],
    theme: 'pressure',
    description: 'Trung tâm áp lực — adrenaline và động lực thôi thúc hành động.',
  },
];

export const CENTER_BY_ID: Record<CenterId, CenterDef> =
  CENTERS.reduce((acc, c) => ({ ...acc, [c.id]: c }), {} as Record<CenterId, CenterDef>);
