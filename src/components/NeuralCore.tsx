"use client";

import { motion } from "framer-motion";

export default function NeuralCore() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-dashed border-[#00f2ff]/30 rotate-slow"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle rotating ring - reverse */}
      <motion.div
        className="absolute inset-4 rounded-full border border-[#00f2ff]/20 rotate-reverse"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner solid ring with glow */}
      <div className="absolute inset-8 rounded-full border-2 border-[#00f2ff]/60 neural-pulse" />

      {/* Core circle */}
      <motion.div
        className="absolute inset-16 rounded-full bg-gradient-to-br from-[#00f2ff]/20 to-[#00f2ff]/5 border border-[#00f2ff]/80 flex items-center justify-center neural-pulse"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[#00f2ff] text-lg md:text-2xl font-bold tracking-wider">
          M.A.R.C.O.
        </span>
      </motion.div>

      {/* Orbiting particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#00f2ff]"
          style={{
            top: "50%",
            left: "50%",
            marginLeft: -4,
            marginTop: -4,
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 2) * 140, 0],
            y: [0, Math.sin(i * Math.PI / 2) * 140, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Inner ring segments */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.circle
            key={angle}
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="url(#cyanGradient)"
            strokeWidth="1"
            strokeDasharray="15 200"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Radial lines from center */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <motion.div
          key={angle}
          className="absolute top-1/2 left-1/2 w-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/30 to-transparent"
          style={{
            height: "60%",
            transformOrigin: "center bottom",
            transform: `translate(-50%, -100%) rotate(${angle}deg)`,
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: angle / 360 * 2,
          }}
        />
      ))}
    </div>
  );
}
