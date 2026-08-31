/// <reference types="@react-three/fiber" />

'use client';

import { useRef, useState } from 'react';
import { useFrame, type ThreeElements } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { Mesh } from 'three';
import { CHANNELS } from '@/lib/channels';
import { CENTERS, CENTER_BY_ID } from '@/lib/centers';
import type { HDChart } from '@/lib/mock-hd';
import { prefersReducedMotion } from '@/lib/features';

// Force this module to be considered a user of r3f's intrinsic-element types
// so the global JSX.IntrinsicElements augmentation from three-types.d.ts is
// pulled into the type graph of this file.
export type _BodygraphR3FTypes = ThreeElements;

interface BodyGraph3DProps {
  chart: HDChart;
}

/**
 * 3D BodyGraph scene. Renders 9 Centers (glowing spheres) + 36 Channels (lines).
 * Defined centers glow gold, undefined are softer.
 * Active channels glow, inactive are dim.
 * Hover over a center shows a tooltip overlay.
 */
export function BodyGraph3D({ chart }: BodyGraph3DProps) {
  const [hoveredCenter, setHoveredCenter] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-square max-h-[680px] bg-cosmic rounded-elegant overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 22], fov: 50 }}
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.45} />
        <pointLight position={[8, 8, 12]} intensity={0.7} color="#e0b755" />
        <pointLight position={[-8, -4, 6]} intensity={0.4} color="#b21267" />

        {/* Stars background */}
        <Stars />

        {/* 36 Channels */}
        <Channels chart={chart} />

        {/* 9 Centers */}
        {CENTERS.map((c) => {
          const defined = chart.centers[c.id].defined;
          const isHovered = hoveredCenter === c.id;
          return (
            <CenterNode
              key={c.id}
              position={[c.position[0], c.position[1], 0]}
              color={defined ? '#e0b755' : '#c99894'}
              size={defined ? 0.85 : 0.55}
              glow={defined ? 1.2 : 0.4}
              shape={c.shape}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredCenter(c.id);
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredCenter(null);
                document.body.style.cursor = 'default';
              }}
            >
              {isHovered && (
                <Text
                  position={[0, 0.95, 0]}
                  fontSize={0.28}
                  color="#f8eed8"
                  anchorX="center"
                  anchorY="middle"
                  outlineWidth={0.02}
                  outlineColor="#1a1a1a"
                >
                  {c.name}
                  {defined ? ' · Defined' : ' · Open'}
                </Text>
              )}
            </CenterNode>
          );
        })}

        <OrbitControls
          enablePan={false}
          minDistance={12}
          maxDistance={32}
          autoRotate={!hoveredCenter && !prefersReducedMotion()}
          autoRotateSpeed={0.4}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>

      {/* Legend overlay */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-3 text-[10px] sm:text-xs text-white/80 pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(224,183,85,0.8)]" />
          Defined Center
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-mauve" />
          Open Center
        </span>
        <span className="ml-auto opacity-60">Kéo để xoay · Cuộn để zoom</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stars                                                                       */
/* -------------------------------------------------------------------------- */

function Stars() {
  const positions = useRef<Float32Array>(new Float32Array(0));
  if (!positions.current) {
    const arr = new Float32Array(280 * 3);
    for (let i = 0; i < 280; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 2] = -10 - Math.random() * 30;
    }
    positions.current = arr;
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
          count={280}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.05} sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

/* -------------------------------------------------------------------------- */
/* Channels                                                                    */
/* -------------------------------------------------------------------------- */

function Channels({ chart }: { chart: HDChart }) {
  return (
    <>
      {CHANNELS.map((ch) => {
        const defined = chart.channels.find((c) => c.id === ch.id)?.defined ?? false;
        const fromCenter = CENTER_BY_ID[ch.from];
        const toCenter = CENTER_BY_ID[ch.to];
        return (
          <ChannelLine
            key={ch.id}
            from={[fromCenter.position[0], fromCenter.position[1], 0]}
            to={[toCenter.position[0], toCenter.position[1], 0]}
            color={defined ? '#e0b755' : '#3a3a3a'}
            width={defined ? 4 : 1.5}
            opacity={defined ? 0.7 : 0.25}
            dashed={!defined}
          />
        );
      })}
    </>
  );
}

function ChannelLine({
  from, to, color, width, opacity, dashed,
}: { from: [number, number, number]; to: [number, number, number]; color: string; width: number; opacity: number; dashed: boolean }) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);
  return (
    <group position={[(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, 0]} rotation={[0, 0, angle]}>
      <mesh>
        <boxGeometry args={[length, width * 0.06, 0.1]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/* Center sphere                                                               */
/* -------------------------------------------------------------------------- */

function CenterNode({
  position, color, size, glow, shape, onPointerOver, onPointerOut, children,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  glow: number;
  shape: 'triangle' | 'square' | 'diamond';
  onPointerOver: (e: any) => void;
  onPointerOut: (e: any) => void;
  children?: React.ReactNode;
}) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const intensity = 0.6 + 0.4 * Math.sin(t * 1.4);
    (ref.current.material as any).emissiveIntensity = glow * intensity;
  });

  return (
    <group position={position} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={glow}
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[size * 1.8, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} depthWrite={false} />
      </mesh>
      {children}
    </group>
  );
}
