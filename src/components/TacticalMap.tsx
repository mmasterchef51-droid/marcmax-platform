"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { agents } from "@/lib/agents";
import {
  Database,
  Brain,
  Plug,
  Zap,
  Cpu,
  Shield,
  GitBranch,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Brain,
  Plug,
  Zap,
  Cpu,
  Shield,
};

// Position agents in a hexagonal formation around the core
const agentPositions = [
  { x: 50, y: 15 },   // Top - Zephyr
  { x: 85, y: 30 },   // Top Right - Cortex
  { x: 85, y: 60 },   // Bottom Right - Nexus
  { x: 50, y: 75 },   // Bottom - Spark
  { x: 15, y: 60 },   // Bottom Left - Titan
  { x: 15, y: 30 },   // Top Left - Vanguard
];

export default function TacticalMap() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[4/3]">
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00f2ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Connection lines from core to each agent */}
        {agentPositions.map((pos, index) => (
          <motion.g key={index}>
            {/* Static line */}
            <line
              x1="50%"
              y1="50%"
              x2={`${pos.x}%`}
              y2={`${pos.y}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              opacity="0.3"
            />
            
            {/* Animated pulse traveling from core to agent */}
            <motion.circle
              r="3"
              fill="#00f2ff"
              filter="blur(2px)"
              initial={{ cx: "50%", cy: "50%", opacity: 0 }}
              animate={{
                cx: ["50%", `${pos.x}%`],
                cy: ["50%", `${pos.y}%`],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                times: [0, 0.1, 0.9, 1],
              }}
            />
          </motion.g>
        ))}

        {/* Hexagon outline connecting agents */}
        <motion.polygon
          points={agentPositions.map(p => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#00f2ff"
          strokeWidth="1"
          strokeDasharray="5 5"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
      </svg>

      {/* MARCO Core - Center */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
      >
        <div className="relative">
          {/* Outer rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00f2ff]/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-[#00f2ff]/20"
            animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Core */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#00f2ff]/50 bg-gradient-to-br from-[#00f2ff]/20 to-[#020617] flex items-center justify-center shadow-[0_0_40px_rgba(0,242,255,0.3)]">
            <div className="text-center">
              <GitBranch className="w-8 h-8 md:w-10 md:h-10 text-[#00f2ff] mx-auto mb-1" />
              <span className="font-mono text-xs text-[#00f2ff] block">M.A.R.C.O.</span>
              <span className="font-mono text-[10px] text-gray-400 block">CORE</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Agent Nodes */}
      {agents.map((agent, index) => {
        const pos = agentPositions[index];
        const Icon = iconMap[Object.keys(iconMap)[index]] || Database;
        
        return (
          <motion.div
            key={agent.id}
            className="absolute z-10"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.8 + index * 0.1 }}
          >
            <Link href={`/army/${agent.id}`}>
              <motion.div
                className="group relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {/* Pulse ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: agent.color }}
                  animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                
                {/* Agent node */}
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    borderColor: `${agent.color}60`,
                    backgroundColor: `${agent.color}15`,
                    boxShadow: `0 0 20px ${agent.color}30`,
                  }}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 mb-0.5" />
                  <span className="font-mono text-[9px] md:text-[10px] text-white font-bold">
                    {agent.codename}
                  </span>
                </div>

                {/* Label below */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                  <span className="font-mono text-xs text-gray-400 block">{agent.name}</span>
                  <span className="font-mono text-[10px]" style={{ color: agent.color }}>
                    {agent.specialty.split(" & ")[0]}
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}

      {/* Corner Labels */}
      <div className="absolute top-2 left-2 font-mono text-xs text-gray-500">
        TACTICAL MAP // v7.0.0
      </div>
      <div className="absolute top-2 right-2 font-mono text-xs text-green-500 flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        LIVE
      </div>
    </div>
  );
}
