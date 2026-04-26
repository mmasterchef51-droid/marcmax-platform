"use client";

import { motion } from "framer-motion";

export default function RadarSweep() {
  // Generate radar rings
  const rings = [20, 40, 60, 80];
  
  // Generate radar grid lines
  const gridLines = [
    { x1: 50, y1: 0, x2: 50, y2: 100 }, // Vertical center
    { x1: 0, y1: 50, x2: 100, y2: 50 }, // Horizontal center
    { x1: 15, y1: 15, x2: 85, y2: 85 }, // Diagonal 1
    { x1: 85, y1: 15, x2: 15, y2: 85 }, // Diagonal 2
  ];

  // Random blips for detected objects
  const blips = [
    { angle: 45, distance: 30, delay: 0 },
    { angle: 120, distance: 55, delay: 1.5 },
    { angle: 200, distance: 70, delay: 3 },
    { angle: 280, distance: 45, delay: 4.5 },
    { angle: 340, distance: 65, delay: 2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0066ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0066ff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
          </radialGradient>
          <filter id="radarGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base radar circle fill */}
        <circle cx="50" cy="50" r="40" fill="url(#radarGradient)" opacity="0.5" />

        {/* Radar rings */}
        {rings.map((radius, index) => (
          <motion.circle
            key={`ring-${index}`}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#0066ff"
            strokeWidth="0.3"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: index * 0.3 }}
          />
        ))}

        {/* Grid lines */}
        {gridLines.map((line, index) => (
          <motion.line
            key={`grid-${index}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="#0066ff"
            strokeWidth="0.2"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
          />
        ))}

        {/* Sweep line */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="10%"
          stroke="#00f2ff"
          strokeWidth="0.5"
          filter="url(#radarGlow)"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "50% 50%" }}
        />

        {/* Sweep gradient cone */}
        <motion.path
          d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z"
          fill="url(#radarGradient)"
          opacity="0.3"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "50% 50%" }}
        />

        {/* Center point */}
        <circle cx="50" cy="50" r="1" fill="#00f2ff" filter="url(#radarGlow)">
          <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Blips - detected objects */}
        {blips.map((blip, index) => {
          const x = 50 + (blip.distance / 100) * 40 * Math.cos((blip.angle * Math.PI) / 180);
          const y = 50 + (blip.distance / 100) * 40 * Math.sin((blip.angle * Math.PI) / 180);
          return (
            <motion.circle
              key={`blip-${index}`}
              cx={`${x}%`}
              cy={`${y}%`}
              r="1.5"
              fill="#ffaa00"
              filter="url(#radarGlow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: blip.delay,
                times: [0, 0.1, 0.9, 1],
              }}
            />
          );
        })}
      </svg>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/50 via-transparent to-[#020617]/50" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
