import { HNode, Prefab } from '@hiber3d/hdk-react';
import { MediaDisplay, MediaDisplayOptions } from '@hiber3d/hdk-react-components';
import { PrefabId } from '@hiber3d/hdk-core';
import { useContent } from '../useContent';

export const PortalGallery = () => {
  const content = useContent();

  const portals = [
    { label: 'NODE', x: -15, media: content.mediaStand[0] },
    { label: 'Code', x: -10, media: content.mediaStand[1] },
    { label: 'Free Play', x: -5, media: content.mediaStand[2] },
    { label: 'Chibie', x: 0, media: content.mediaStand[3] },
    { label: 'DEFI', x: 5, media: content.mediaStand[5] },
    { label: 'Merch', x: 10, media: content.mediaStand[6] },
    { label: 'Instagram', x: 15, media: content.mediaStand[7] },
    { label: 'Twitter', x: 20, media: content.mediaStand[8] },
  ];

  return (
    <HNode y={56} z={8} rotY={180}>
      {portals.map((portal, index) => {
        const media = portal.media as MediaDisplayOptions;

        if (!media?.src) {
          return null;
        }

        return (
          <HNode key={index} x={portal.x}>
            {/* Portal outer ring */}
            <Prefab
              id={'simple_donut_01' as PrefabId}
              scale={2.8}
              rotX={90}
              y={0}
              material={{ color: '#00d9ff', emissive: '#00d9ff', emissiveStrength: 3 }}
            />

            {/* Portal middle ring */}
            <Prefab
              id={'simple_donut_01' as PrefabId}
              scale={2.4}
              rotX={90}
              y={0.1}
              material={{ color: '#0099ff', emissive: '#0099ff', emissiveStrength: 4 }}
            />

            {/* Portal inner glow */}
            <Prefab
              id={'simple_disc_01' as PrefabId}
              scale={2}
              rotX={90}
              y={0.15}
              material={{ color: '#004466', emissive: '#0066aa', emissiveStrength: 2 }}
            />

            {/* Content display inside portal */}
            <MediaDisplay
              y={0.2}
              scale={1.4}
              rotY={180}
              {...media}
              emissiveStrength={(media.emissiveStrength || 0) + 0.8}
              muted
            />

            {/* Portal frame decoration */}
            <Prefab
              id={'simple_tube_01' as PrefabId}
              scale={[0.1, 3, 0.1]}
              x={-2.2}
              y={0}
              material={{ color: '#00ffff', emissive: '#00ffff', emissiveStrength: 2 }}
            />
            <Prefab
              id={'simple_tube_01' as PrefabId}
              scale={[0.1, 3, 0.1]}
              x={2.2}
              y={0}
              material={{ color: '#00ffff', emissive: '#00ffff', emissiveStrength: 2 }}
            />

            {/* Light orbs */}
            <Prefab
              id={'simple_sphere_01' as PrefabId}
              scale={0.15}
              y={2.5}
              material={{ color: '#ffffff', emissive: '#00ffff', emissiveStrength: 5 }}
            />
          </HNode>
        );
      })}

      {/* Floor grid lines */}
      <HNode y={-0.3}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Prefab
            key={`line-${i}`}
            id={'simple_box_01' as PrefabId}
            x={-15 + i * 5}
            scale={[0.02, 0.01, 12]}
            material={{ color: '#00aaff', emissive: '#00aaff', emissiveStrength: 1 }}
          />
        ))}
      </HNode>
    </HNode>
  );
};
