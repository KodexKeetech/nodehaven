import { HNode, Prefab, Animation } from '@hiber3d/hdk-react';
import { MediaDisplay } from '@hiber3d/hdk-react-components';
import { PrefabId } from '@hiber3d/hdk-core';

export const PortalGallery = () => {
  return (
    <HNode y={56} z={8} rotY={180}>
      <HNode x={0}>
        {/* Main portal image backdrop */}
        <MediaDisplay
          y={0}
          scale={4}
          rotY={180}
          src="chatgpt_image_jan_18,_2026,_01_41_56_pm.png"
          emissiveStrength={1.2}
        />

        {/* Animated swirl layer 1 - Outer spiral (slow rotation) */}
        <Animation animation={[{ rotZ: [0, 360] }]} duration={20} loop>
          <Prefab
            id={'simple_donut_01' as PrefabId}
            scale={4.5}
            rotX={90}
            y={0.3}
            material={{
              color: '#0088ff',
              emissive: '#0088ff',
              emissiveStrength: 2,
              opacity: 0.3
            }}
          />
        </Animation>

        {/* Animated swirl layer 2 - Middle spiral (medium rotation, opposite direction) */}
        <Animation animation={[{ rotZ: [360, 0] }]} duration={15} loop>
          <Prefab
            id={'simple_donut_01' as PrefabId}
            scale={3.8}
            rotX={90}
            y={0.4}
            material={{
              color: '#00aaff',
              emissive: '#00aaff',
              emissiveStrength: 2.5,
              opacity: 0.4
            }}
          />
        </Animation>

        {/* Animated swirl layer 3 - Inner spiral (fast rotation) */}
        <Animation animation={[{ rotZ: [0, 360] }]} duration={10} loop>
          <Prefab
            id={'simple_donut_01' as PrefabId}
            scale={3}
            rotX={90}
            y={0.5}
            material={{
              color: '#00d9ff',
              emissive: '#00d9ff',
              emissiveStrength: 3,
              opacity: 0.5
            }}
          />
        </Animation>

        {/* Animated swirl particles - Orbiting spheres */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * 360;
          const radius = 3.5;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const z = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <Animation
              key={`particle-${i}`}
              animation={[{ rotY: [0, 360] }]}
              duration={12 - (i % 3)}
              loop
            >
              <HNode y={0.6}>
                <Prefab
                  id={'simple_sphere_01' as PrefabId}
                  scale={0.1}
                  x={x}
                  z={z}
                  material={{
                    color: '#00ffff',
                    emissive: '#00ffff',
                    emissiveStrength: 6
                  }}
                />
              </HNode>
            </Animation>
          );
        })}

        {/* Energy pulses - Animated scaling rings */}
        <Animation
          animation={[
            { scale: [2, 5], opacity: [0.8, 0] }
          ]}
          duration={3}
          loop
        >
          <Prefab
            id={'simple_donut_01' as PrefabId}
            scale={2}
            rotX={90}
            y={0.7}
            material={{
              color: '#ffffff',
              emissive: '#00ffff',
              emissiveStrength: 4,
              opacity: 0.8
            }}
          />
        </Animation>

        {/* Second energy pulse (offset timing) */}
        <Animation
          animation={[
            { scale: [2, 5], opacity: [0.8, 0] }
          ]}
          duration={3}
          delay={1.5}
          loop
        >
          <Prefab
            id={'simple_donut_01' as PrefabId}
            scale={2}
            rotX={90}
            y={0.75}
            material={{
              color: '#ffffff',
              emissive: '#00ddff',
              emissiveStrength: 4,
              opacity: 0.8
            }}
          />
        </Animation>

        {/* Portal frame - static outer structure */}
        <Prefab
          id={'simple_donut_01' as PrefabId}
          scale={5}
          rotX={90}
          y={-0.1}
          material={{
            color: '#004466',
            emissive: '#0088ff',
            emissiveStrength: 1.5
          }}
        />
      </HNode>

      {/* Floor grid line (single line under portal) */}
      <HNode y={-0.3}>
        <Prefab
          id={'simple_box_01' as PrefabId}
          x={0}
          scale={[0.03, 0.01, 12]}
          material={{ color: '#00aaff', emissive: '#00aaff', emissiveStrength: 1.5 }}
        />
      </HNode>
    </HNode>
  );
};
