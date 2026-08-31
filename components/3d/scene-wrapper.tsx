'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

interface Scene3DWrapperProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

export function Scene3DWrapper({ 
  children, 
  cameraPosition = [0, 0, 5],
  enableControls = false 
}: Scene3DWrapperProps) {
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 50 }}
      dpr={[1, 2]}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        {/* Spiritual warm lighting */}
        <ambientLight intensity={0.4} color="#F8EED8" />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8} 
          color="#E0B755"
          castShadow 
        />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#B21267"
        />
        
        {/* Sunset environment for warm glow */}
        <Environment preset="sunset" />
        
        {children}
        
        {enableControls && (
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        )}
      </Suspense>
    </Canvas>
  );
}
