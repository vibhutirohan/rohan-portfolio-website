import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

/** --------- Full-screen transparent starfield (very subtle) ---------- */
function SpaceBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, has: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d", { alpha: true })!;
    let width = 0,
      height = 0,
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();

    type Star = { x: number; y: number; r: number; baseA: number; tw: number; ph: number; d: number };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const makeStars = (count: number, depth: number, sizeRange: [number, number]): Star[] =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(sizeRange[0], sizeRange[1]),
        baseA: rand(0.35, 0.7),
        tw: rand(0.00025, 0.0007),
        ph: rand(0, Math.PI * 2),
        d: depth,
      }));

    let far = makeStars(90, 0.15, [0.4, 0.9]);
    let mid = makeStars(60, 0.35, [0.7, 1.2]);
    let near = makeStars(40, 0.55, [1.0, 1.6]);

    const drawVignette = () => {
      const g = ctx.createRadialGradient(
        width * 0.5,
        height * 0.55,
        Math.min(width, height) * 0.4,
        width * 0.5,
        height * 0.55,
        Math.max(width, height)
      );
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.2)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    };

    const drawStars = (arr: Star[], time: number, parX: number, parY: number) => {
      ctx.globalCompositeOperation = "lighter";
      for (const s of arr) {
        const a = s.baseA * (0.9 + 0.1 * Math.sin(time * s.tw + s.ph));
        const sx = s.x + parX * s.d;
        const sy = s.y + parY * s.d;

        const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 3);
        g.addColorStop(0, `rgba(255,255,255,${0.8 * a})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(sx, sy, s.r * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, a)})`;
        ctx.fillRect(sx, sy, 1, 1);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.has = true;
    };
    const onLeave = () => (mouseRef.current.has = false);

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const step = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const has = mouseRef.current.has;
      const mx = has ? mouseRef.current.x : cx;
      const my = has ? mouseRef.current.y : cy;
      const parX = (mx - cx) * 0.02;
      const parY = (my - cy) * 0.02;

      drawStars(far, time, parX * 0.4, parY * 0.4);
      drawStars(mid, time, parX * 0.7, parY * 0.7);
      drawStars(near, time, parX, parY);

      drawVignette();
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={parentRef} className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

/** --------- Bottom-center scroll cue (mobile + desktop) ---------- */
function ScrollCue({ targetId = "about" }: { targetId?: string }) {
  const scrollToTarget = () => {
    const next = document.getElementById(targetId);
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTarget();
    }
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTarget}
      onKeyDown={onKeyDown}
      aria-label="Scroll to next section"
      className="
        group absolute inset-x-0 mx-auto
        bottom-[max(1.5rem,env(safe-area-inset-bottom))]
        md:bottom-10
        z-20 w-fit px-4 py-2 rounded-full
        text-xs font-semibold text-white/90
        bg-white/8 backdrop-blur ring-1 ring-white/15
        hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40
        flex items-center gap-2 select-none
      "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* glow halo */}
      <span
        className="
          absolute -inset-2 rounded-full
          bg-gradient-to-r from-purple-500/25 via-fuchsia-500/25 to-pink-500/25
          blur-lg opacity-0 group-hover:opacity-80 transition-opacity
        "
        aria-hidden
      />
      {/* chevron with gentle bob */}
      <motion.span
        className="relative inline-flex items-center justify-center w-6 h-6 rounded-full ring-1 ring-white/20 bg-white/10"
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        aria-hidden
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="url(#grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </motion.span>
      <span className="relative">Scroll</span>
    </motion.button>
  );
}

/** --------------------------- Hero --------------------------- */
export default function Hero() {
  const ROLES = [
    "Data Engineer",
    "Data Analyst",
    "Full Stack Developer",
    "Cloud Engineer",
    "AI/ML Enthusiast",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex];
    const speed = isDeleting ? 45 : 110;
    const t = setTimeout(() => {
      setTyped((prev) => (isDeleting ? full.substring(0, prev.length - 1) : full.substring(0, prev.length + 1)));
      if (!isDeleting && typed === full) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && typed === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }, speed);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center md:justify-start"
    >
      {/* Base page gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/70 to-purple-950/60" />

      {/* FULL-SCREEN, TRANSPARENT, SUBTLE STARFIELD */}
      <SpaceBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 md:pt-28">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I’m
          </motion.h1>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Rohan Vibhuti
          </motion.h2>

          <motion.p
            className="mt-3 text-xl md:text-2xl text-gray-300 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I’m a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-semibold">
              {typed}
            </span>
            <span className="ml-1 inline-block w-3">
              <span className="animate-pulse">|</span>
            </span>
          </motion.p>

          <motion.p
            className="mt-1 text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            M.S. Data Science, University of New Haven
          </motion.p>
        </div>
      </div>

      {/* Bottom-center scroll cue (click → #about) */}
      <ScrollCue targetId="about" />
    </section>
  );
}
