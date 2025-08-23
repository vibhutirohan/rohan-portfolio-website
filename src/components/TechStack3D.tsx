import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TechItem = { name: string; color: string; size: "large" | "medium" | "small" };

export default function TechStack3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 }); // -0.5..0.5 range is fine; we’ll normalize

  const techStack: TechItem[] = [
    { name: "React", color: "#61DAFB", size: "large" },
    { name: "Angular", color: "#DD0031", size: "medium" },
    { name: "Node.js", color: "#339933", size: "large" },
    { name: "Java", color: "#ED8B00", size: "medium" },
    { name: "Spring Boot", color: "#6DB33F", size: "small" },
    { name: "Python", color: "#3776AB", size: "large" },
    { name: "TensorFlow", color: "#FF6F00", size: "medium" },
    { name: "PySpark", color: "#E25A1C", size: "small" },
    { name: "AWS", color: "#FF9900", size: "large" },
    { name: "GCP", color: "#4285F4", size: "medium" },
    { name: "Docker", color: "#2496ED", size: "small" },
    { name: "MySQL", color: "#4479A1", size: "medium" },
    { name: "Power BI", color: "#F2C811", size: "small" },
    { name: "Apache Spark", color: "#E25A1C", size: "small" },
    { name: "Pandas", color: "#150458", size: "medium" },
    { name: "NumPy", color: "#013243", size: "small" },
    { name: "OpenCV", color: "#5C3EE8", size: "small" },
    { name: "Git/GitHub", color: "#181717", size: "medium" },
  ];

  // mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;  // 0..1
    const ny = (e.clientY - rect.top) / rect.height; // 0..1
    setMouse({ x: nx - 0.5, y: ny - 0.5 });          // -0.5..0.5
  };

  const getSizeClass = (size: TechItem["size"]) => {
    switch (size) {
      case "large":
        return "w-24 h-12 text-sm";
      case "medium":
        return "w-20 h-10 text-xs";
      case "small":
        return "w-16 h-8 text-[10px]";
      default:
        return "w-20 h-10 text-xs";
    }
  };

  // radial positions
  const getPosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 120 + (index % 3) * 40;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  // parallax intensity in px & tilt in deg
  const parallaxX = mouse.x * 24;
  const parallaxY = mouse.y * 24;
  const tiltX = -(mouse.y * 10);
  const tiltY = mouse.x * 10;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[520px] md:h-[620px] flex items-center justify-center overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl" />
      </div>

      {/* Chips */}
      <div className="relative w-full h-full flex items-center justify-center">
        {techStack.map((tech, i) => {
          const pos = getPosition(i, techStack.length);
          return (
            <motion.div
              key={tech.name}
              className={`absolute ${getSizeClass(
                tech.size
              )} rounded-lg backdrop-blur-sm border flex items-center justify-center font-medium text-white cursor-default select-none`}
              style={{
                left: `calc(50% + ${pos.x + parallaxX}px)`,
                top: `calc(50% + ${pos.y + parallaxY}px)`,
                transform: "translate(-50%, -50%)",
                backgroundColor: `${tech.color}20`,
                borderColor: `${tech.color}40`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: tiltX,
                rotateY: tiltY,
                // gentle float & wobble loop
                y: [0, -10, 0],
                rotateZ: [0, 3, 0, -3, 0],
              }}
              transition={{
                opacity: { duration: 0.4, delay: i * 0.03 },
                scale: { type: "spring", stiffness: 120, damping: 12, delay: i * 0.03 },
                y: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 4 + (i % 2), repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.1,
                y: -6,
                boxShadow: `0 12px 30px ${tech.color}40`,
                backgroundColor: `${tech.color}30`,
              }}
            >
              <span className="text-center leading-tight px-2">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Orbit rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border border-purple-400/10 rounded-full pointer-events-none"
          style={{
            width: `${220 + ring * 90}px`,
            height: `${220 + ring * 90}px`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18 + ring * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Particles */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full pointer-events-none"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
