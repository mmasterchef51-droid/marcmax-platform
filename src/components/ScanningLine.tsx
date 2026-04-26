"use client";

import { motion } from "framer-motion";

interface ScanningLineProps {
  color?: string;
  duration?: number;
  delay?: number;
  direction?: "horizontal" | "vertical";
}

export default function ScanningLine({
  color = "#00f2ff",
  duration = 3,
  delay = 0,
  direction = "horizontal",
}: ScanningLineProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      className={`absolute pointer-events-none z-20 ${
        isHorizontal ? "left-0 right-0 h-[2px]" : "top-0 bottom-0 w-[2px]"
      }`}
      style={{
        background: `linear-gradient(${isHorizontal ? "90deg" : "180deg"}, transparent, ${color}, transparent)`,
        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80`,
      }}
      initial={isHorizontal ? { top: "0%" } : { left: "0%" }}
      animate={
        isHorizontal
          ? { top: ["0%", "100%", "100%", "0%", "0%"] }
          : { left: ["0%", "100%", "100%", "0%", "0%"] }
      }
      transition={{
        duration,
        repeat: Infinity,
        delay,
        times: [0, 0.45, 0.5, 0.95, 1],
        ease: "linear",
      }}
    />
  );
}

// Full page scanning effect
export function PageScanner({ count = 2 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <ScanningLine
          key={i}
          delay={i * (3 / count)}
          duration={3}
          color="#00f2ff"
        />
      ))}
    </div>
  );
}
