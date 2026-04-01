import { useEffect, useRef } from "react";

interface Crow {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotSpeed: number;
}

const CrowParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const crows: Crow[] = [];
    const COUNT = 15;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      crows.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 3 + Math.random() * 6,
        speedX: -0.5 - Math.random() * 1.5,
        speedY: -0.3 - Math.random() * 0.8,
        opacity: 0.1 + Math.random() * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const drawCrow = (c: Crow) => {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rotation);
      ctx.globalAlpha = c.opacity;
      ctx.fillStyle = "#1a1a1a";

      // Simple bird/crow shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-c.size * 2, -c.size, -c.size * 3, -c.size * 0.5);
      ctx.quadraticCurveTo(-c.size * 2, 0, 0, 0);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(c.size * 2, -c.size, c.size * 3, -c.size * 0.5);
      ctx.quadraticCurveTo(c.size * 2, 0, 0, 0);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      crows.forEach((c) => {
        c.x += c.speedX;
        c.y += c.speedY;
        c.rotation += c.rotSpeed;

        if (c.x < -50) c.x = canvas.width + 50;
        if (c.y < -50) c.y = canvas.height + 50;

        drawCrow(c);
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CrowParticles;
