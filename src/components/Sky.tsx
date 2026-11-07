"use client";

import { useEffect, useRef } from "react";

// Hero sky: twinkling stars and the odd shooting star on a canvas (visible at night),
// plus CSS sun, moon and drifting clouds. Stars sit still for reduced-motion visitors.
export default function Sky() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvas.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let stars: { x: number; y: number; r: number; p: number }[] = [];
    let shooter: { x: number; y: number; t: number } | null = null;
    let nextShot = performance.now() + 2500;
    let raf = 0;

    function resize() {
      w = c!.clientWidth;
      h = c!.clientHeight;
      c!.width = w * dpr;
      c!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 5000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.2,
        p: Math.random() * Math.PI * 2,
      }));
    }

    function frame(now: number) {
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        const a = still ? 0.7 : 0.45 + 0.55 * Math.abs(Math.sin(now / 1400 + s.p));
        ctx!.fillStyle = `rgba(235,240,255,${a})`;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!still) {
        if (!shooter && now > nextShot) shooter = { x: Math.random() * w * 0.6, y: Math.random() * h * 0.3, t: 0 };
        if (shooter) {
          shooter.t += 1;
          const len = 140;
          const x = shooter.x + shooter.t * 9;
          const y = shooter.y + shooter.t * 3.6;
          const g = ctx!.createLinearGradient(x - len, y - len * 0.4, x, y);
          g.addColorStop(0, "rgba(255,255,255,0)");
          g.addColorStop(1, `rgba(255,255,255,${Math.max(0, 1 - shooter.t / 50)})`);
          ctx!.strokeStyle = g;
          ctx!.lineWidth = 1.2;
          ctx!.beginPath();
          ctx!.moveTo(x - len, y - len * 0.4);
          ctx!.lineTo(x, y);
          ctx!.stroke();
          if (shooter.t > 50) {
            shooter = null;
            nextShot = now + 5000 + Math.random() * 6000;
          }
        }
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    frame(performance.now());
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="sky absolute inset-0 overflow-hidden">
      <canvas ref={canvas} className="stars absolute inset-0 h-full w-full" />
      <div className="sun absolute left-[14%] top-[12%] h-72 w-72" />
      <div className="moon absolute left-[20%] top-[18%] h-12 w-12" />
      <div className="cloud left-0 top-[22%] h-24 w-[38vw]" style={{ animationDuration: "140s", animationDelay: "-40s" }} />
      <div className="cloud left-0 top-[48%] h-16 w-[26vw]" style={{ animationDuration: "180s", animationDelay: "-120s" }} />
      <div className="cloud left-0 top-[66%] h-28 w-[44vw]" style={{ animationDuration: "220s", animationDelay: "-10s" }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
