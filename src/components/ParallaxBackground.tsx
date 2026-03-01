import { useRef, useEffect } from "react";
import { getTimeOfDay, timeThemes } from "@/data/timeTheme";

export function ParallaxBackground() {
  const b1 = useRef<HTMLDivElement>(null);
  const b2 = useRef<HTMLDivElement>(null);
  const b3 = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  const { blobs } = timeThemes[getTimeOfDay()];

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouse.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", handleMouseMove);

    let start: number | null = null;

    function animate(ts: number) {
      if (!start) start = ts;
      const t = (ts - start) / 1000; // secondes

      const { x, y } = mouse.current;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mx = x / w - 0.5;
      const my = y / h - 0.5;

      // Orbite autonome lente (sin/cos à des fréquences différentes)
      const auto1x = Math.sin(t * 0.45) * 60;
      const auto1y = Math.cos(t * 0.3) * 40;

      const auto2x = Math.cos(t * 0.35) * 80;
      const auto2y = Math.sin(t * 0.25) * 55;

      const auto3x = Math.sin(t * 0.55 + 1) * 50;
      const auto3y = Math.cos(t * 0.4 + 2) * 45;

      if (b1.current)
        b1.current.style.transform = `translate(${auto1x + mx * 80}px, ${auto1y + my * 60}px)`;
      if (b2.current)
        b2.current.style.transform = `translate(${auto2x + mx * -100}px, ${auto2y + my * 80}px)`;
      if (b3.current)
        b3.current.style.transform = `translate(${auto3x + mx * 60}px, ${auto3y + my * -70}px)`;

      raf.current = requestAnimationFrame(animate);
    }

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        ref={b1}
        className={`absolute top-[-5%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full ${blobs[0]}`}
        style={{ willChange: "transform" }}
      />
      <div
        ref={b2}
        className={`absolute bottom-[-10%] right-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full ${blobs[1]}`}
        style={{ willChange: "transform" }}
      />
      <div
        ref={b3}
        className={`absolute top-[50%] left-[40%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full ${blobs[2]}`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
