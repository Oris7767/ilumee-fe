'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface Tool3DOrbProps {
  icon: 'soulplan' | 'humandesign' | 'numerology';
  color?: string;
  scale?: number;
  isHovered?: boolean;
}

export function Tool3DOrb({ 
  icon, 
  color = '#B21267', 
  scale = 1,
  isHovered = false 
}: Tool3DOrbProps) {
  const orbRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!orbRef.current) return;
    
    // Gentle rotation
    orbRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    
    // Inner sphere pulse
    if (innerRef.current) {
      const pulseScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      innerRef.current.scale.setScalar(pulseScale);
    }
    
    // Hover scale
    const targetScale = isHovered ? 1.2 : 1;
    orbRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  // Different geometries for each tool
  const getGeometry = () => {
    switch (icon) {
      case 'soulplan':
        return <octahedronGeometry args={[1, 0]} />;
      case 'humandesign':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'numerology':
        return <dodecahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.3}
      floatingRange={[-0.2, 0.2]}
    >
      <group ref={orbRef} scale={scale}>
        {/* Outer wireframe */}
        <mesh>
          {getGeometry()}
          <meshBasicMaterial 
            color={color} 
            wireframe 
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* Inner glowing core */}
        <mesh ref={innerRef} scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={isHovered ? 0.8 : 0.4}
            transparent
            opacity={0.3}
          />
        </mesh>
        
        {/* Particle ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.02, 16, 64]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
        
        {/* Glow light */}
        <pointLight 
          position={[0, 0, 0]} 
          intensity={isHovered ? 1 : 0.5} 
          color={color} 
          distance={4} 
        />
      </group>
    </Float>
  );
}
