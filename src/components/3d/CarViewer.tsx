'use client';

import { Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { ModelLoader } from './ModelLoader';
import { LightingRig } from './LightingRig';
import { cn } from '@/lib/utils';

interface CarViewerProps {
  modelPath?: string;
  className?: string;
  autoRotate?: boolean;
  interactive?: boolean;
}

export function CarViewer({
  modelPath,
  className,
  autoRotate = true,
  interactive = false,
}: CarViewerProps) {
  const handleCreated = useCallback((state: any) => {
    state.events.connect?.(state.gl.domElement);
  }, []);

  return (
    <div className={cn('absolute inset-0 -z-10', className)}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.5, 4], fov: 45, near: 0.1, far: 20 }}
        gl={{
          antialias: true,
          toneMapping: 3,
          toneMappingExposure: 1.2,
        }}
        onCreated={handleCreated}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <LightingRig />
          <ModelLoader modelPath={modelPath} />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.6}
            scale={8}
            blur={2}
            far={4}
          />
          <OrbitControls
            enableZoom={interactive}
            enablePan={false}
            enableRotate={interactive}
            autoRotate={autoRotate}
            autoRotateSpeed={2}
            rotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />
          <Environment preset="studio" environmentIntensity={0.8} />
        </Suspense>
      </Canvas>
    </div>
  );
}