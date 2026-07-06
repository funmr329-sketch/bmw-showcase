'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ModelLoader({ modelPath: _modelPath }: ModelLoaderProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.7, 0]} scale={0.9}>
      {/* Main body */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[2.0, 0.3, 0.9]} />
        <meshPhysicalMaterial
          color="#0066B2"
          metalness={0.85}
          roughness={0.15}
          clearcoat={0.9}
          clearcoatRoughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Cabin */}
      <mesh position={[0.1, 0.4, 0]}>
        <boxGeometry args={[1.0, 0.25, 0.8]} />
        <meshPhysicalMaterial
          color="#F0F0F0"
          metalness={0.1}
          roughness={0.05}
          transparent
          opacity={0.7}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Hood */}
      <mesh position={[-0.55, 0.3, 0]}>
        <boxGeometry args={[0.85, 0.05, 0.85]} />
        <meshPhysicalMaterial
          color="#0066B2"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Trunk */}
      <mesh position={[0.65, 0.25, 0]}>
        <boxGeometry args={[0.6, 0.1, 0.85]} />
        <meshPhysicalMaterial
          color="#0066B2"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Front bumper */}
      <mesh position={[-0.9, 0.05, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.8]} />
        <meshPhysicalMaterial color="#1A1A1A" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Rear bumper */}
      <mesh position={[0.9, 0.05, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.8]} />
        <meshPhysicalMaterial color="#1A1A1A" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Wheels */}
      {[
        [-0.5, -0.1, 0.48],
        [-0.5, -0.1, -0.48],
        [0.5, -0.1, 0.48],
        [0.5, -0.1, -0.48],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.12, 24]} />
            <meshPhysicalMaterial
              color="#1A1A1A"
              metalness={0.9}
              roughness={0.3}
            />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0.065]}>
            <cylinderGeometry args={[0.12, 0.12, 0.02, 8]} />
            <meshPhysicalMaterial
              color="#C4A574"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* Kidney grille */}
      {[-0.05, 0.05].map((x, i) => (
        <mesh key={i} position={[-0.95, 0.15, x]}>
          <boxGeometry args={[0.04, 0.15, 0.06]} />
          <meshPhysicalMaterial
            color="#C4A574"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Headlights */}
      {[-0.1, 0.1].map((z, i) => (
        <mesh key={i} position={[-0.98, 0.12, z]}>
          <boxGeometry args={[0.03, 0.08, 0.15]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            emissive="#88CCFF"
            emissiveIntensity={0.3}
            metalness={0.1}
            roughness={0.05}
          />
        </mesh>
      ))}

      {/* Taillights */}
      {[-0.1, 0.1].map((z, i) => (
        <mesh key={i} position={[0.98, 0.15, z]}>
          <boxGeometry args={[0.03, 0.08, 0.12]} />
          <meshPhysicalMaterial
            color="#FF0000"
            emissive="#FF0000"
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Spoiler */}
      <mesh position={[0.7, 0.45, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.5]} />
        <meshPhysicalMaterial color="#1A1A1A" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Suspension/undercarriage */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[1.4, 0.08, 0.5]} />
        <meshPhysicalMaterial color="#2A2A2A" metalness={0.5} roughness={0.8} />
      </mesh>
    </group>
  );
}

interface ModelLoaderProps {
  modelPath?: string;
}