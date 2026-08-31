import { CENTERS, CenterId } from './centers';
import { CHANNELS } from './channels';
import { HDType, HDAuthority } from './education/hd-explanations';

/**
 * Mock HD chart generator.
 * For dev/internal use. Shape matches the spec §9.3 contract so it can be
 * replaced by the real backend later without changing the frontend.
 *
 * Strategy: hash the input — same input → same chart. Selected 'preset' deterministically
 * by hash so demo covers different Types.
 */

export interface HDInput {
  full_name: string;
  birth_date: string; // YYYY-MM-DD
  birth_time?: string; // HH:MM
  birth_place?: string;
  locale?: string;
}

export interface PlanetActivation {
  personality?: { gate: number; line: number };
  design?: { gate: number; line: number };
}

export interface PlanetEntry {
  name: string;
  personality: { gate: number; line: number };
  design: { gate: number; line: number };
}

export interface HDChart {
  type: HDType;
  strategy: string;
  authority: HDAuthority;
  profile: string;
  definition: string;
  incarnationCross: { name: string; description: string };
  signature: string;
  notSelfTheme: string;
  variables: {
    digestion: { side: 'L' | 'R'; value: string };
    environment: { side: 'L' | 'R'; value: string };
    awareness: { side: 'L' | 'R'; value: string };
    perspective: { side: 'L' | 'R'; value: string };
  };
  centers: Record<CenterId, { defined: boolean }>;
  channels: { id: string; defined: boolean; name: string }[];
  planets: PlanetEntry[];
  cached: boolean;
}

const TYPES: HDType[] = ['Generator', 'Manifesting Generator', 'Projector', 'Manifestor', 'Reflector'];
const PROFILES = ['1/3', '1/4', '2/4', '2/5', '3/5', '3/6', '4/6', '4/1', '5/1', '5/2', '6/2', '6/3'];
const AUTHORITIES: HDAuthority[] = ['Emotional', 'Sacral', 'Splenic', 'Ego', 'Self-Projected', 'Mental', 'Lunar'];
const DEFINITIONS = ['Single Definition', 'Split Definition', 'Triple Split Definition', 'Quadruple Split Definition', 'No Definition'];
const CROSSES = [
  { name: 'The Right Angle Cross of the Maya (2)', description: 'Cross of awareness — dẫn lối bằng sự tỉnh thức cho cộng đồng.' },
  { name: 'The Right Angle Cross of the Sphinx (2)', description: 'Cross of khám phá — nghiên cứu và thử nghiệm để tìm chân lý.' },
  { name: 'The Right Angle Cross of Planning (1)', description: 'Cross of tổ chức — xây dựng hệ thống và kế hoạch cho tương lai.' },
  { name: 'The Left Angle Cross of the Plane (2)', description: 'Cross of dẫn lối — gieo hạt giống ý thức cho tương lai.' },
  { name: 'The Juxtaposition Cross of the Foundation (3)', description: 'Cross of nền tảng — xây dựng giá trị bền vững.' },
  { name: 'The Right Angle Cross of the Sleeping Phoenix (3)', description: 'Cross of phục sinh — nâng đỡ sự tái sinh và thức tỉnh.' },
];

const PLANETS = ['Sun', 'Earth', 'Moon', 'North Node', 'South Node', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

// Deterministic hash
function hashCode(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = ((h << 5) - h) + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function generateMockHD(input: HDInput): HDChart {
  const seed = hashCode(JSON.stringify(input));
  const pick = <T>(arr: T[], salt = 0): T => arr[(seed + salt) % arr.length];

  const type: HDType = pick(TYPES, 1);
  const profile = pick(PROFILES, 7);
  const authority: HDAuthority = pick(AUTHORITIES, 3);
  const definition = pick(DEFINITIONS, 5);
  const cross = pick(CROSSES, 9);

  // Centrally determine *which* centers are defined based on Type + seed
  const baseDefined: CenterId[] = (() => {
    if (type === 'Generator') return ['sacral'];
    if (type === 'Manifesting Generator') return ['sacral', 'throat'];
    if (type === 'Projector') return ['ajna'];
    if (type === 'Manifestor') return ['heart', 'throat'];
    if (type === 'Reflector') return [];
    return [];
  })();

  // Add a few more defined centers based on seed for visual richness
  const extra: CenterId[] = [];
  const candidates: CenterId[] = ['head', 'g', 'spleen', 'root', 'solarPlexus'];
  for (const c of candidates) {
    if ((seed + c.length) % 3 === 0) extra.push(c);
  }
  const definedSet = new Set<CenterId>([...baseDefined, ...extra]);

  const centersRecord: Record<CenterId, { defined: boolean }> = CENTERS.reduce(
    (acc, c) => ({ ...acc, [c.id]: { defined: definedSet.has(c.id) } }),
    {} as Record<CenterId, { defined: boolean }>,
  );

  // Channel is defined if both endpoint centers are defined
  const channelsActive = CHANNELS.filter((ch) => definedSet.has(ch.from) && definedSet.has(ch.to)).map((ch) => ({
    id: ch.id,
    defined: true,
    name: ch.name,
  }));
  const channelsInactive = CHANNELS.filter((ch) => !(definedSet.has(ch.from) && definedSet.has(ch.to))).slice(0, 6).map((ch) => ({
    id: ch.id,
    defined: false,
    name: ch.name,
  }));

  // Planets: each gets a Personality + Design gate/line
  const planets: PlanetEntry[] = PLANETS.map((name, idx) => ({
    name,
    personality: { gate: ((seed * (idx + 3)) % 64) + 1, line: ((seed + idx) % 6) + 1 },
    design: { gate: ((seed * (idx + 5) + 7) % 64) + 1, line: ((seed + idx * 2) % 6) + 1 },
  }));

  const sigNs = (() => {
    if (type === 'Generator' || type === 'Manifesting Generator') return { signature: 'Satisfaction', notSelf: 'Frustration' };
    if (type === 'Projector') return { signature: 'Success', notSelf: 'Bitterness' };
    if (type === 'Manifestor') return { signature: 'Peace', notSelf: 'Anger' };
    return { signature: 'Surprise', notSelf: 'Disappointment' };
  })();

  return {
    type,
    strategy: (() => {
      if (type === 'Generator') return 'Wait to respond';
      if (type === 'Manifesting Generator') return 'Respond & inform';
      if (type === 'Projector') return 'Wait for the invitation';
      if (type === 'Manifestor') return 'Inform before acting';
      return 'Wait a lunar cycle';
    })(),
    authority,
    profile,
    definition,
    incarnationCross: cross,
    signature: sigNs.signature,
    notSelfTheme: sigNs.notSelf,
    variables: {
      digestion: { side: seed % 2 === 0 ? 'L' : 'R', value: 'Calm' },
      environment: { side: seed % 2 === 1 ? 'L' : 'R', value: 'Markets' },
      awareness: { side: seed % 2 === 0 ? 'L' : 'R', value: 'Sleep' },
      perspective: { side: seed % 2 === 1 ? 'L' : 'R', value: 'Personal' },
    },
    centers: centersRecord,
    channels: [...channelsActive, ...channelsInactive],
    planets,
    cached: false,
  };
}
