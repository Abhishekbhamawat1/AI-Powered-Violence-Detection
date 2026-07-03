import { useMemo } from 'react';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  opacity: number;
  blur: number;
}

export function DecorativeParticles() {
  const particles = useMemo(() => {
    const particleArray: Particle[] = [];
    const colors = ['#3B82F6', '#D1D5DB']; // light blue, soft gray
    const sizes = [3, 5, 7]; // Small circular dots
    const particleCount = 80; // Medium density

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 100; // 0-100%
      const y = Math.random() * 100; // 0-100%

      // Calculate distance from center (50%, 50%)
      const distanceFromCenter = Math.sqrt(
        Math.pow(x - 50, 2) + Math.pow(y - 50, 2)
      );

      // Skip some particles in center area (within ~30% radius from center)
      if (distanceFromCenter < 30 && Math.random() > 0.4) {
        continue;
      }

      // Slightly more particles near edges
      const isNearEdge = x < 15 || x > 85 || y < 15 || y > 85;
      if (!isNearEdge && Math.random() > 0.7) {
        continue;
      }

      particleArray.push({
        id: i,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.1 + 0.1, // 10-20% opacity
        blur: Math.random() > 0.5 ? Math.random() * 2 + 2 : 0, // 50% chance of 2-4px blur
      });
    }

    return particleArray;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            filter: particle.blur > 0 ? `blur(${particle.blur}px)` : 'none',
          }}
        />
      ))}
    </div>
  );
}
