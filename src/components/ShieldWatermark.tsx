"use client";

import { motion } from "framer-motion";

export default function ShieldWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.03]">
      {/* Large Shield Outline */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <motion.path
          d="M50 5 L90 20 V45 C90 70 50 95 50 95 C50 95 10 70 10 45 V20 L50 5Z"
          stroke="#0066ff"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        {/* Inner shield line */}
        <motion.path
          d="M50 15 L80 28 V45 C80 65 50 85 50 85 C50 85 20 65 20 45 V28 L50 15Z"
          stroke="#0066ff"
          strokeWidth="0.3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        {/* Center checkmark */}
        <motion.path
          d="M35 50 L45 60 L65 40"
          stroke="#0066ff"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-20 left-20 w-32 h-32 border-l border-t border-[#0066ff]/20" />
      <div className="absolute top-20 right-20 w-32 h-32 border-r border-t border-[#0066ff]/20" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border-l border-b border-[#0066ff]/20" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-r border-b border-[#0066ff]/20" />
    </div>
  );
}
