"use client";

import { motion } from "framer-motion";

export default function CircuitBoard() {
  // Circuit paths - horizontal and vertical lines
  const circuits = [
    // Horizontal main trunks
    { x1: 0, y1: 20, x2: 100, y2: 20, delay: 0 },
    { x1: 0, y1: 50, x2: 100, y2: 50, delay: 0.5 },
    { x1: 0, y1: 80, x2: 100, y2: 80, delay: 1 },
    // Vertical branches
    { x1: 15, y1: 0, x2: 15, y2: 40, delay: 0.2 },
    { x1: 15, y1: 60, x2: 15, y2: 100, delay: 0.7 },
    { x1: 50, y1: 0, x2: 50, y2: 100, delay: 0.3 },
    { x1: 85, y1: 0, x2: 85, y2: 35, delay: 0.8 },
    { x1: 85, y1: 65, x2: 85, y2: 100, delay: 1.2 },
    // Cross connections
    { x1: 15, y1: 35, x2: 50, y2: 35, delay: 0.4 },
    { x1: 50, y1: 65, x2: 85, y2: 65, delay: 0.9 },
    { x1: 30, y1: 20, x2: 30, y2: 50, delay: 0.6 },
    { x1: 70, y1: 50, x2: 70, y2: 80, delay: 1.1 },
  ];

  // Circuit nodes (junctions)
  const nodes = [
    { x: 15, y: 20, delay: 0.1 },
    { x: 15, y: 50, delay: 0.6 },
    { x: 15, y: 80, delay: 1.1 },
    { x: 30, y: 20, delay: 0.2 },
    { x: 30, y: 35, delay: 0.5 },
    { x: 30, y: 50, delay: 0.8 },
    { x: 50, y: 20, delay: 0.3 },
    { x: 50, y: 50, delay: 0.7 },
    { x: 50, y: 80, delay: 1.0 },
    { x: 70, y: 50, delay: 0.4 },
    { x: 70, y: 80, delay: 0.9 },
    { x: 85, y: 35, delay: 0.5 },
    { x: 85, y: 65, delay: 1.0 },
    { x: 85, y: 80, delay: 1.3 },
  ];

  // Data packets traveling along circuits
  const packets = [
    { path: 0, duration: 3, delay: 0 },
    { path: 1, duration: 4, delay: 1 },
    { path: 2, duration: 3.5, delay: 2 },
    { path: 5, duration: 5, delay: 0.5 },
    { path: 7, duration: 4, delay: 1.5 },
    { path: 8, duration: 2, delay: 0.8 },
    { path: 9, duration: 2, delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f2ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
          </linearGradient>
          <filter id="circuitGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Circuit Lines */}
        {circuits.map((circuit, index) => (
          <motion.line
            key={`circuit-${index}`}
            x1={`${circuit.x1}%`}
            y1={`${circuit.y1}%`}
            x2={`${circuit.x2}%`}
            y2={`${circuit.y2}%`}
            stroke="url(#circuitGradient)"
            strokeWidth="0.3"
            filter="url(#circuitGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: circuit.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Circuit Nodes */}
        {nodes.map((node, index) => (
          <motion.g key={`node-${index}`}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="1"
              fill="#00f2ff"
              filter="url(#circuitGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.delay,
              }}
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="none"
              stroke="#00f2ff"
              strokeWidth="0.2"
              opacity="0.3"
            />
          </motion.g>
        ))}

        {/* Data Packets */}
        {packets.map((packet, index) => {
          const circuit = circuits[packet.path];
          return (
            <motion.circle
              key={`packet-${index}`}
              r="0.8"
              fill="#00f2ff"
              filter="url(#circuitGlow)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [`${circuit.x1}%`, `${circuit.x2}%`],
                cy: [`${circuit.y1}%`, `${circuit.y2}%`],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: packet.duration,
                repeat: Infinity,
                delay: packet.delay,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Animated pulse rings at major nodes */}
        {[nodes[6], nodes[7], nodes[9]].map((node, index) => (
          <motion.circle
            key={`pulse-${index}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="0.3"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 1,
            }}
          />
        ))}
      </svg>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
