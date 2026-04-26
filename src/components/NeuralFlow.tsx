"use client";

import { motion } from "framer-motion";

export default function NeuralFlow() {
  // Generate connection lines between random points
  const connections = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }));

  // Generate data packets traveling along paths
  const packets = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    pathIndex: i % connections.length,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 3,
    size: 3 + Math.random() * 3,
  }));

  // Generate nodes
  const nodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + (i % 4) * 25,
    y: 15 + Math.floor(i / 4) * 70,
    size: 4 + Math.random() * 4,
    pulseDelay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f2ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        {connections.map((conn) => (
          <motion.line
            key={`line-${conn.id}`}
            x1={`${conn.startX}%`}
            y1={`${conn.startY}%`}
            x2={`${conn.endX}%`}
            y2={`${conn.endY}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.4, 0.1] }}
            transition={{
              pathLength: { duration: conn.duration, repeat: Infinity },
              opacity: { duration: conn.duration, repeat: Infinity, delay: conn.delay },
            }}
          />
        ))}

        {/* Data Packets */}
        {packets.map((packet) => {
          const conn = connections[packet.pathIndex];
          return (
            <motion.circle
              key={`packet-${packet.id}`}
              r={packet.size}
              fill="#00f2ff"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [conn.startX + "%", conn.endX + "%"],
                cy: [conn.startY + "%", conn.endY + "%"],
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

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="#00f2ff"
              filter="url(#glow)"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.pulseDelay,
              }}
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 2}
              fill="none"
              stroke="#00f2ff"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </g>
        ))}
      </svg>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 242, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 242, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </div>
  );
}
