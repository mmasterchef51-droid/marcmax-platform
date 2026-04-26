"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Database,
  Brain,
  Plug,
  Zap,
  Cpu,
  Shield,
  CheckCircle2,
  Code2,
  Terminal,
  Globe,
  Flame,
  Lock,
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  codename: string;
  specialty: string;
  description: string;
  avatar: React.ReactNode;
  compatibility: number;
  techStack: string[];
  coreLanguage: string;
  tools: string[];
  color: string;
}

const agents: Agent[] = [
  {
    id: "ZEPHYR",
    name: "The Archivist",
    codename: "ZEPHYR",
    specialty: "Semantic Memory & ChromaDB retrieval",
    description: "Manages long-term memory storage and semantic search operations. Maintains context across sessions.",
    avatar: <Database className="w-full h-full" />,
    compatibility: 98,
    techStack: ["ChromaDB", "Vector Search", "Embeddings"],
    coreLanguage: "Python",
    tools: ["LangChain", "OpenAI", "Sentence Transformers"],
    color: "#00f2ff",
  },
  {
    id: "CORTEX",
    name: "The Strategist",
    codename: "CORTEX",
    specialty: "Global Task Orchestration & Logic",
    description: "Central command unit for task decomposition and workflow orchestration. Routes operations to specialized agents.",
    avatar: <Brain className="w-full h-full" />,
    compatibility: 100,
    techStack: ["Graph Processing", "State Machines", "DAG"],
    coreLanguage: "TypeScript",
    tools: ["RxJS", "Node.js", "Bull Queue"],
    color: "#00f2ff",
  },
  {
    id: "NEXUS",
    name: "The Bridge",
    codename: "NEXUS",
    specialty: "API Integration & System Interop",
    description: "Handles external API communications and system interoperability. Bridges M.A.R.C.O. with external services.",
    avatar: <Plug className="w-full h-full" />,
    compatibility: 96,
    techStack: ["REST", "GraphQL", "WebSockets"],
    coreLanguage: "TypeScript",
    tools: ["Axios", "Socket.io", "Zod"],
    color: "#00f2ff",
  },
  {
    id: "SPARK",
    name: "The Operator",
    codename: "SPARK",
    specialty: "Rapid Execution & Real-time Browser Skills",
    description: "Real-time execution specialist with browser automation capabilities. Handles UI interactions and live data.",
    avatar: <Zap className="w-full h-full" />,
    compatibility: 99,
    techStack: ["Browser Automation", "WebRTC", "Streams"],
    coreLanguage: "Node.js",
    tools: ["Playwright", "Puppeteer", "CDP"],
    color: "#00f2ff",
  },
  {
    id: "TITAN",
    name: "The Heavy",
    codename: "TITAN",
    specialty: "Resource-Intensive Processing & Computation",
    description: "Handles compute-heavy operations including ML inference, data processing, and batch operations.",
    avatar: <Cpu className="w-full h-full" />,
    compatibility: 97,
    techStack: ["GPU Compute", "Parallel Processing", "CUDA"],
    coreLanguage: "Python / Rust",
    tools: ["PyTorch", "TensorFlow", "Ray"],
    color: "#00f2ff",
  },
  {
    id: "VANGUARD",
    name: "The Shield",
    codename: "VANGUARD",
    specialty: "Security Protocol & Thermal Safety Monitoring",
    description: "Monitors system health, enforces security protocols, and manages thermal safety to prevent host damage.",
    avatar: <Shield className="w-full h-full" />,
    compatibility: 100,
    techStack: ["Monitoring", "Security", "Resource Limits"],
    coreLanguage: "Rust / C++",
    tools: ["eBPF", "Prometheus", "Seccomp"],
    color: "#00f2ff",
  },
];

const getTechIcon = (tech: string) => {
  if (tech.includes("Python")) return <Code2 className="w-4 h-4" />;
  if (tech.includes("TypeScript") || tech.includes("Node")) return <Terminal className="w-4 h-4" />;
  if (tech.includes("Rust") || tech.includes("C++")) return <Flame className="w-4 h-4" />;
  if (tech.includes("Security") || tech.includes("Safety")) return <Lock className="w-4 h-4" />;
  if (tech.includes("API") || tech.includes("Web")) return <Globe className="w-4 h-4" />;
  return <Cpu className="w-4 h-4" />;
};

interface AgentCardProps {
  agent: Agent;
  index: number;
}

function AgentCard({ agent, index }: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div
        className={`relative overflow-hidden rounded-lg border-2 transition-all duration-500 ${
          isHovered
            ? "border-[#00f2ff] shadow-[0_0_30px_rgba(0,242,255,0.3)]"
            : "border-[#00f2ff]/20"
        } bg-gradient-to-b from-[#00f2ff]/5 to-[#020617]`}
      >
        {/* Header with Avatar */}
        <div className="relative p-6 pb-4">
          {/* Abstract Avatar Container */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-20 h-20 rounded-lg bg-[#00f2ff]/10 border border-[#00f2ff]/30 p-4 transition-all duration-500 ${
                isHovered ? "animate-pulse shadow-[0_0_20px_rgba(0,242,255,0.4)]" : ""
              }`}
            >
              <div className="text-[#00f2ff]">{agent.avatar}</div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="font-mono text-xs text-green-500">ACTIVE</span>
            </div>
          </div>

          {/* Agent Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider">
                {agent.codename}
              </span>
              <span className="text-[#00f2ff]/30">|</span>
              <span className="font-mono text-xs text-[#ffaa00]">{agent.name}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{agent.specialty}</h3>
          </div>

          {/* Compatibility Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-gray-400">Compatibility</span>
              <span className="font-mono text-xs text-[#00f2ff]">{agent.compatibility}%</span>
            </div>
            <div className="h-2 bg-[#00f2ff]/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00f2ff] to-[#00f2ff]/50"
                initial={{ width: 0 }}
                animate={{ width: `${agent.compatibility}%` }}
                transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-400 leading-relaxed">{agent.description}</p>
        </div>

        {/* Technical Specs - Slide Up on Hover */}
        <motion.div
          className="border-t border-[#00f2ff]/20 bg-[#00f2ff]/5"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className={`p-6 space-y-4 ${isHovered ? "" : "hidden"}`}>
            {/* Core Language */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff]">
                {getTechIcon(agent.coreLanguage)}
              </div>
              <div>
                <span className="font-mono text-xs text-gray-500 block">Core Language</span>
                <span className="font-mono text-sm text-white">{agent.coreLanguage}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <span className="font-mono text-xs text-gray-500 block mb-2">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {agent.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2 py-1 rounded bg-[#00f2ff]/10 text-[#00f2ff]/80 border border-[#00f2ff]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <span className="font-mono text-xs text-gray-500 block mb-2">Primary Tools</span>
              <div className="flex flex-wrap gap-2">
                {agent.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2 py-1 rounded bg-[#ffaa00]/10 text-[#ffaa00]/80 border border-[#ffaa00]/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f2ff]/40" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00f2ff]/40" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00f2ff]/40" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00f2ff]/40" />
      </div>
    </motion.div>
  );
}

export { agents };
export default AgentCard;
