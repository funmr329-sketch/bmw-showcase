'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function LightingRig() {
  const directionalLight = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    if (directionalLight.current) {
      directionalLight.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 3;
      directionalLight.current.position.z = Math.cos(state.clock.elapsedTime * 0.1) * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      
      <directionalLight
        ref={directionalLight}
        position={[5, 5, 5]}
        intensity={2.0}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.8}
        color="#C4A574"
      />

      <directionalLight
        position={[0, -1, 3]}
        intensity={0.5}
        color="#88CCFF"
      />

      <pointLight
        position={[0, 3, 0]}
        intensity={0.5}
        color="#FFFFFF"
      />

      <spotLight
        position={[0, 5, 0]}
        angle={0.5}
        penumbra={0.5}
        intensity={0.3}
        castShadow
      />

      <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#1A1A1A"
          metalness={0.0}
          roughness={0.8}
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}