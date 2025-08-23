import { motion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import TechStackFallback from "./TechStackFallback";

const TechStack3D = lazy(() => import("./TechStack3D"));

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, [breakpoint]);
  return isDesktop;
}

function Hero() {
  // typing roles
  const ROLES = ["Data Engineer", "Data Analyst", "Full Stack Developer", "Cloud Engineer","AI/ML Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const isDesktop = useIsDesktop(); // true on lg+ screens

  // typewriter loop
  useEffect(() => {
    const full = ROLES[roleIndex];
    const speed = isDeleting ? 45 : 110;

    const t = setTimeout(() => {
      setTyped((prev) =>
        isDeleting ? full.substring(0, prev.length - 1) : full.substring(0, prev.length + 1)
      );

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
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-slate-900/20" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {/* First line: “Hi, I’m” */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Hi, I’m
            </motion.h1>

            {/* Second line: Name with gradient */}
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Rohan Vibhuti
            </motion.h2>

            {/* Typing roles */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
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
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              M.S. Data Science, University of New Haven 
            </motion.p>
          </motion.div>

          {/* Right: Tech Stack — only render on desktop (lg and up) */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[500px] lg:h-[600px] relative"
            >
              <Suspense fallback={<TechStackFallback />}>
                <TechStack3D />
              </Suspense>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
