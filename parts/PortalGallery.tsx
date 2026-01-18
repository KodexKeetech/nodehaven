import { HNode, Prefab } from '@hiber3d/hdk-react';
import { MediaDisplay, MediaDisplayOptions } from '@hiber3d/hdk-react-components';
import { PrefabId } from '@hiber3d/hdk-core';
import { useContent } from '../useContent';

export const PortalGallery = () => {
  const content = useContent();

  const portals = [
    { label: 'NODE', x: -10, media: content.mediaStand[0] },
    { label: 'Code', x: -5, media: content.mediaStand[1] },
    { label: 'Free Play', x: 0, media: content.mediaStand[2] },
    { label: 'Chibie', x: 5, media: content.mediaStand[3] },
    { label: 'DEFI', x: 10, media: content.mediaStand[5] },
  ];

  return (
    <HNode y={56} z={0} rotY={0}>
      {portals.map((portal, index) => {
        const media = portal.media as MediaDisplayOptions;

        if (!media?.src) {
          return null;
        }

        return (
          <HNode key={index} x={portal.x}>
            {/* Bright marker sphere to confirm visibility */}
            <Prefab
              id={'simple_sphere_01' as PrefabId}
              scale={0.5}
              y={4}
              material={{ color: '#ff0000', emissive: '#ff0000', emissiveStrength: 10 }}
            />

            {/* Portal outer ring */}
            <Prefab
              id={'simple_donut_01' as PrefabId}
              scale={3.5}
              rotX={90}
              y={0}
              material={{ color: '#00d9ff', emissive: '#00d9ff', emissiveStrength: 5 }}
            />

            {/* Portal middle ring */}
            <Prefab
              id={'simple_donut_01' as PrefabId}
              scale={3}
              rotX={90}
              y={0.1}
              material={{ color: '#0099ff', emissive: '#0099ff', emissiveStrength: 6 }}
            />

            {/* Portal inner background */}
            <Prefab
              id={'simple_disc_01' as PrefabId}
              scale={2.5}
              rotX={90}
              y={0.15}
              material={{ color: '#001133', emissive: '#0044aa', emissiveStrength: 3 }}
            />

            {/* Content display inside portal */}
            <MediaDisplay
              y={0.2}
              scale={1.8}
              {...media}
              emissiveStrength={(media.emissiveStrength || 0) + 1.2}
              muted
            />

            {/* Vertical frame pillars */}
            <Prefab
              id={'simple_box_01' as PrefabId}
              scale={[0.15, 4, 0.15]}
              x={-3}
              y={0}
              material={{ color: '#00ffff', emissive: '#00ffff', emissiveStrength: 4 }}
            />
            <Prefab
              id={'simple_box_01' as PrefabId}
              scale={[0.15, 4, 0.15]}
              x={3}
              y={0}
              material={{ color: '#00ffff', emissive: '#00ffff', emissiveStrength: 4 }}
            />

            {/* Top light marker */}
            <Prefab
              id={'simple_sphere_01' as PrefabId}
              scale={0.3}
              y={3}
              material={{ color: '#ffffff', emissive: '#00ffff', emissiveStrength: 8 }}
            />
          </HNode>
        );
      })}

      {/* Bright floor markers */}
      <HNode y={-0.2}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Prefab
            key={`floor-${i}`}
            id={'simple_disc_01' as PrefabId}
            x={-10 + i * 5}
            rotX={90}
            scale={0.5}
            material={{ color: '#00ffff', emissive: '#00ffff', emissiveStrength: 3 }}
          />
        ))}
      </HNode>
    </HNode>
  );
};
