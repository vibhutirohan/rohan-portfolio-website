import { motion } from "framer-motion";
import { useMemo } from "react";

function TechStackFallback() {
  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Angular", color: "#DD0031" },
    { name: "Node.js", color: "#339933" },
    { name: "Java", color: "#ED8B00" },
    { name: "Spring Boot", color: "#6DB33F" },
    { name: "Python", color: "#3776AB" },
    { name: "TensorFlow", color: "#FF6F00" },
    { name: "PySpark", color: "#E25A1C" },
    { name: "AWS", color: "#FF9900" },
    { name: "GCP", color: "#4285F4" },
    { name: "Docker", color: "#2496ED" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Power BI", color: "#F2C811" },
    { name: "Apache Spark", color: "#E25A1C" },
    { name: "Pandas", color: "#150458" },
    { name: "NumPy", color: "#013243" },
    { name: "OpenCV", color: "#5C3EE8" },
    { name: "Git/GitHub", color: "#181717" },
  ];

  // Generate stable random positions/timings for particles (no jitter on re-renders)
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        dur: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div
      className="relative w-full h-[360px] md:h-[420px] rounded-xl border border-purple-500/20 overflow-hidden
                 bg-slate-800/30 flex items-center justify-center"
      aria-label="Tech stack summary"
    >
      {/* soft center glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-44 h-44 rounded-full bg-gradient-to-r from-purple-500/25 to-pink-500/25 blur-3xl" />
      </div>

      {/* animated background particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400/20"
            style={{ left: p.left, top: p.top }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* content */}
      <div className="relative z-10 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-6"
        >
          Tech Stack
        </motion.h3>

        <div className="mx-auto grid grid-cols-3 gap-3 max-w-md">
          {techStack.slice(0, 12).map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ scale: 1.06, y: -2, boxShadow: `0 8px 20px ${tech.color}33` }}
              className="px-3 py-2 rounded-lg border bg-slate-700/50 text-white text-xs font-medium
                         border-purple-500/20 hover:border-purple-400/50 transition-all"
              style={{ borderColor: `${tech.color}66` }}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-400 text-sm mt-5"
        >
          And many more technologies…
        </motion.p>
      </div>
    </div>
  );
}

export default TechStackFallback;
