import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'dot' | 'circle';
}

export function SubtleParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Color palette - subtle blues and grays
    const colors = [
      'rgba(147, 197, 253, ', // light blue-300
      'rgba(191, 219, 254, ', // lighter blue-200
      'rgba(229, 231, 235, ', // gray-200
      'rgba(209, 213, 219, ', // gray-300
      'rgba(165, 180, 252, ', // indigo-300
    ];

    // Initialize particles - medium density
    const initParticles = () => {
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 20000);
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        // Reduce particles in center area (where text will be)
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distanceFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        const centerRadius = Math.min(canvas.width, canvas.height) * 0.3;
        
        // Skip some particles in center area
        if (distanceFromCenter < centerRadius && Math.random() > 0.3) {
          continue;
        }

        particlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.2, // Very slow drift
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2.5 + 0.8, // Small sizes (0.8 - 3.3)
          opacity: Math.random() * 0.2 + 0.1, // Low opacity (0.1 - 0.3)
          color: colors[Math.floor(Math.random() * colors.length)],
          type: Math.random() > 0.6 ? 'circle' : 'dot',
        });
      }
    };

    // Mouse move handler - subtle drift effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150; // Smaller influence radius

        // Subtle drift based on mouse position
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          // Very gentle push
          particle.x -= Math.cos(angle) * force * 0.8;
          particle.y -= Math.sin(angle) * force * 0.8;
        } else {
          // Slowly return to base position
          particle.x += (particle.baseX - particle.x) * 0.02;
          particle.y += (particle.baseY - particle.y) * 0.02;
        }

        // Add gentle floating motion
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Soft bounce at edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Draw particle based on type
        if (particle.type === 'dot') {
          // Simple dot
          ctx.fillStyle = `${particle.color}${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Soft circle with gradient
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3
          );
          gradient.addColorStop(0, `${particle.color}${particle.opacity})`);
          gradient.addColorStop(0.5, `${particle.color}${particle.opacity * 0.5})`);
          gradient.addColorStop(1, `${particle.color}0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
