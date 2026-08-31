'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Lotus3DProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  animate?: boolean;
}

export function Lotus3D({ 
  position = [0, 0, 0], 
  scale = 1, 
  color = '#B21267',
  animate = true 
}: Lotus3DProps) {
  const lotusRef = useRef<THREE.Group>(null);
  const petalRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (!animate || !lotusRef.current) return;
    
    // Gentle rotation
    lotusRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    
    // Petal breathing animation
    petalRefs.current.forEach((petal, i) => {
      if (petal) {
        const offset = i * 0.5;
        petal.scale.setScalar(
          1 + Math.sin(state.clock.elapsedTime + offset) * 0.1
        );
      }
    });
  });

  // Create lotus petals (8 petals in a circle)
  const petalCount = 8;
  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i / petalCount) * Math.PI * 2;
    const x = Math.cos(angle) * 1.2;
    const z = Math.sin(angle) * 1.2;
    
    return (
      <mesh 
        key={i}
        ref={(el) => {
          if (el) petalRefs.current[i] = el;
        }}
        position={[x, 0, z]}
        rotation={[Math.PI / 6, angle, 0]}
      >
        <sphereGeometry args={[0.5, 16, 16, 0, Math.PI]} />
        <MeshTransmissionMaterial
          color={color}
          transmission={0.9}
          thickness={0.5}
          roughness={0.1}
          chromaticAberration={0.05}
          anisotropy={1}
        />
      </mesh>
    );
  });

  // Center sphere (lotus heart)
  const centerSphere = (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <MeshTransmissionMaterial
        color="#E0B755"
        transmission={0.95}
        thickness={0.3}
        roughness={0.05}
        metalness={0.1}
        chromaticAberration={0.1}
      />
    </mesh>
  );

  // Golden rings (energy aura)
  const rings = [0.8, 1.6, 2.4].map((radius, i) => (
    <mesh key={`ring-${i}`} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 64]} />
      <meshStandardMaterial
        color="#E0B755"
        emissive="#E0B755"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3 - i * 0.1}
      />
    </mesh>
  ));

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={lotusRef} position={position} scale={scale}>
        {petals}
        {centerSphere}
        {rings}
        
        {/* Ambient glow */}
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#B21267" distance={3} />
      </group>
    </Float>
  );
}
