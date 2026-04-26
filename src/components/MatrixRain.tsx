"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

interface RainDrop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  chars: string[];
}

export default function MatrixRain() {
  const [drops, setDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    // Generate rain drops
    const generateDrops = () => {
      const newDrops: RainDrop[] = [];
      const count = 30; // Number of rain columns

      for (let i = 0; i < count; i++) {
        const charLength = Math.floor(Math.random() * 15) + 8;
        const chars = Array.from({ length: charLength }, () =>
          CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
        );

        newDrops.push({
          id: i,
          x: (i / count) * 100 + Math.random() * 3,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 4,
          chars,
        });
      }

      setDrops(newDrops);
    };

    generateDrops();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute font-mono text-xs leading-tight"
          style={{
            left: `${drop.x}%`,
            color: "#00f2ff",
            textShadow: "0 0 10px rgba(0, 242, 255, 0.8)",
          }}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{
            y: "100vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
        >
          {drop.chars.map((char, i) => (
            <motion.span
              key={i}
              className="block"
              style={{
                opacity: i === drop.chars.length - 1 ? 1 : 0.3 + (i / drop.chars.length) * 0.5,
                color: i === drop.chars.length - 1 ? "#ffffff" : "#00f2ff",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}

      {/* Gradient overlay to fade the rain at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #020617 80%)",
        }}
      />
    </div>
  );
}
