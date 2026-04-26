"use client";

import { motion } from "framer-motion";

export default function GlowingGrid() {
  // Generate horizontal lines with varying intensity
  const horizontalLines = Array.from({ length: 15 }, (_, i) => ({
    y: (i + 1) * 6.5,
    delay: i * 0.1,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  // Generate vertical lines
  const verticalLines = Array.from({ length: 20 }, (_, i) => ({
    x: (i + 1) * 5,
    delay: i * 0.05,
    opacity: 0.1 + Math.random() * 0.2,
  }));

  // Glowing intersection points
  const intersections = [
    { x: 25, y: 25, delay: 0 },
    { x: 50, y: 40, delay: 0.5 },
    { x: 75, y: 60, delay: 1 },
    { x: 40, y: 70, delay: 1.5 },
    { x: 65, y: 30, delay: 2 },
    { x: 85, y: 75, delay: 0.8 },
    { x: 15, y: 50, delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f2ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
          </linearGradient>
          <filter id="gridGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal lines */}
        {horizontalLines.map((line, index) => (
          <motion.line
            key={`h-${index}`}
            x1="0%"
            y1={`${line.y}%`}
            x2="100%"
            y2={`${line.y}%`}
            stroke="#00f2ff"
            strokeWidth="0.2"
            filter="url(#gridGlow)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: line.opacity, pathLength: 1 }}
            transition={{
              duration: 2,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Vertical lines */}
        {verticalLines.map((line, index) => (
          <motion.line
            key={`v-${index}`}
            x1={`${line.x}%`}
            y1="0%"
            x2={`${line.x}%`}
            y2="100%"
            stroke="#00f2ff"
            strokeWidth="0.2"
            filter="url(#gridGlow)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: line.opacity, pathLength: 1 }}
            transition={{
              duration: 2,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing intersections */}
        {intersections.map((point, index) => (
          <motion.circle
            key={`int-${index}`}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="0.8"
            fill="#00f2ff"
            filter="url(#gridGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: point.delay,
            }}
          />
        ))}

        {/* Animated scanning line */}
        <motion.line
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          stroke="url(#glowGradient)"
          strokeWidth="0.5"
          filter="url(#gridGlow)"
          initial={{ y1: "0%", y2: "0%", opacity: 0 }}
          animate={{
            y1: ["0%", "100%", "100%", "0%"],
            y2: ["0%", "100%", "100%", "0%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Additional CSS grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 242, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 242, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, #020617 70%)'
        }}
      />
    </div>
  );
}
