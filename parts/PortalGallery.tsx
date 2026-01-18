import { HNode, Prefab, TextPanel } from '@hiber3d/hdk-react';
import { MediaDisplay, MediaDisplayOptions } from '@hiber3d/hdk-react-components';
import { PrefabId } from '@hiber3d/hdk-core';
import { useContent } from '../useContent';

export const PortalGallery = () => {
  const content = useContent();

  const portals = [
    { label: 'NODE', x: -12, media: content.mediaStand[0] },
    { label: 'Code', x: -6, media: content.mediaStand[1] },
    { label: 'Free Play', x: 0, media: content.mediaStand[2] },
    { label: 'Chibie!', x: 6, media: content.mediaStand[3] },
    { label: 'DEFI', x: 12, media: content.mediaStand[5] },
  ];

  return (
    <HNode y={56} z={15} rotY={180}>
      {portals.map((portal, index) => {
        const media = portal.media as MediaDisplayOptions;

        if (!media?.src) {
          return null;
        }

        return (
          <HNode key={index} x={portal.x}>
            {/* Portal outer ring - glowing cyan effect */}
            <Prefab
              id={'gpl_booster_plate_03' as PrefabId}
              scale={2.5}
              rotX={90}
              y={0}
              material={{ color: '#00d9ff', emissive: '#00d9ff', emissiveStrength: 2 }}
            />

            {/* Portal inner ring */}
            <Prefab
              id={'gpl_booster_plate_03' as PrefabId}
              scale={2.2}
              rotX={90}
              y={0.1}
              material={{ color: '#0088ff', emissive: '#0088ff', emissiveStrength: 3 }}
            />

            {/* Portal core glow */}
            <Prefab
              id={'gpl_booster_plate_03' as PrefabId}
              scale={1.8}
              rotX={90}
              y={0.2}
              material={{ color: '#ffffff', emissive: '#88ddff', emissiveStrength: 1 }}
            />

            {/* Content display inside portal */}
            <MediaDisplay
              y={0.3}
              scale={1.5}
              {...media}
              emissiveStrength={(media.emissiveStrength || 0) + 0.5}
              muted
            />

            {/* Portal label at the top */}
            <TextPanel
              text={portal.label}
              y={3.5}
              scale={0.4}
              fontSize={120}
              fontWeight={700}
              material={{ color: '#00ffff', emissive: '#00ffff', emissiveStrength: 1.5 }}
            />

            {/* Accent lights around portal */}
            <Prefab
              id={'gpl_light_01' as PrefabId}
              y={0}
              scale={0.8}
              material={{ color: '#00d9ff', emissive: '#00d9ff', emissiveStrength: 3 }}
            />
          </HNode>
        );
      })}

      {/* Ground grid effect */}
      <HNode y={-0.5}>
        {Array.from({ length: 7 }).map((_, i) => (
          <Prefab
            key={`grid-x-${i}`}
            id={'showcase_scifi_arrow_01' as PrefabId}
            x={-15 + i * 5}
            z={0}
            rotY={0}
            scaleX={0.5}
            scaleZ={30}
            material={{ color: '#00aaff', emissive: '#00aaff', emissiveStrength: 0.5 }}
          />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <Prefab
            key={`grid-z-${i}`}
            id={'showcase_scifi_arrow_01' as PrefabId}
            x={0}
            z={-15 + i * 3}
            rotY={90}
            scaleX={0.5}
            scaleZ={30}
            material={{ color: '#00aaff', emissive: '#00aaff', emissiveStrength: 0.3 }}
          />
        ))}
      </HNode>
    </HNode>
  );
};
