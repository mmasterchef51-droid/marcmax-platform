"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import TechNav from "@/components/TechNav";
import ScanningLine from "@/components/ScanningLine";
import {
  Database,
  Brain,
  Search,
  Zap,
  Link2,
  Clock,
  Network,
  Layers,
  Cpu,
  ArrowRight,
} from "lucide-react";

const memoryFeatures = [
  {
    title: "Vector Embeddings",
    icon: Brain,
    description: "768-dimensional embeddings capture semantic meaning of all conversations and knowledge.",
    stat: "768-dim",
    color: "#00f2ff",
  },
  {
    title: "Semantic Search",
    icon: Search,
    description: "Sub-100ms retrieval of relevant context using approximate nearest neighbor (ANN) search.",
    stat: "<100ms",
    color: "#ffaa00",
  },
  {
    title: "Context Linking",
    icon: Link2,
    description: "Automatic cross-referencing between related conversations and knowledge points.",
    stat: "Linked",
    color: "#22c55e",
  },
  {
    title: "Persistent Storage",
    icon: Database,
    description: "ChromaDB vector database ensures knowledge persists across sessions and restarts.",
    stat: "Persistent",
    color: "#ef4444",
  },
];

// Memory cloud visualization
function MemoryCloud() {
  const nodes = [
    { id: 1, x: 50, y: 50, label: "User Query", size: 1.5, color: "#00f2ff" },
    { id: 2, x: 25, y: 25, label: "Context A", size: 1, color: "#ffaa00" },
    { id: 3, x: 75, y: 25, label: "Context B", size: 1, color: "#ffaa00" },
    { id: 4, x: 25, y: 75, label: "Context C", size: 1, color: "#ffaa00" },
    { id: 5, x: 75, y: 75, label: "Context D", size: 1, color: "#ffaa00" },
    { id: 6, x: 50, y: 20, label: "Related", size: 0.8, color: "#22c55e" },
    { id: 7, x: 80, y: 50, label: "Related", size: 0.8, color: "#22c55e" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg className="absolute inset-0 w-full h-full">
        {/* Connection lines */}
        {nodes.slice(1).map((node) => (
          <motion.line
            key={`line-${node.id}`}
            x1="50%"
            y1="50%"
            x2={`${node.x}%`}
            y2={`${node.y}%`}
            stroke={node.color}
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: node.id * 0.1 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.g key={node.id}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 15}
              fill={node.color}
              fillOpacity="0.2"
              stroke={node.color}
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
            />
            <motion.text
              x={`${node.x}%`}
              y={`${node.y + node.size * 8}%`}
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {node.label}
            </motion.text>
          </motion.g>
        ))}

        {/* Animated data flow */}
        <motion.circle
          r="4"
          fill="#00f2ff"
          filter="blur(2px)"
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M50,50 L25,25 M50,50 L75,25 M50,50 L25,75 M50,50 L75,75"
          />
        </motion.circle>
      </svg>
    </div>
  );
}

export default function MemoryPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <TechNav />

            <div className="flex-1 relative">
              <ScanningLine />

              {/* Header */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">KNOWGE THAT NEVER FADES</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  SEMANTIC MEMORY
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  ChromaDB-powered vector storage enables M.A.R.C.O. to remember context across sessions, 
                  retrieve relevant knowledge instantly, and build persistent understanding over time.
                </p>
              </motion.div>

              {/* Memory Cloud Visualization */}
              <motion.div
                className="mb-12 p-6 rounded-xl border border-[#00f2ff]/30 bg-[#00f2ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-mono text-sm text-[#ffaa00] uppercase tracking-wider mb-4 text-center">
                  <Network className="w-4 h-4 inline mr-2" />
                  Memory Cloud Architecture
                </h2>
                <MemoryCloud />
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Knowledge nodes connected by semantic similarity in 768-dimensional vector space
                </p>
              </motion.div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {memoryFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="p-6 rounded-xl border-2 overflow-hidden relative"
                      style={{ borderColor: `${feature.color}40` }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div
                        className="absolute top-0 right-0 w-32 h-32 opacity-10"
                        style={{
                          background: `radial-gradient(circle, ${feature.color} 0%, transparent 70%)`,
                        }}
                      />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: `${feature.color}20` }}
                            >
                              <Icon className="w-5 h-5" style={{ color: feature.color }} />
                            </div>
                            <h3 className="font-bold text-white">{feature.title}</h3>
                          </div>
                          <span
                            className="font-mono text-sm px-2 py-1 rounded"
                            style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                          >
                            {feature.stat}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* How It Works */}
              <motion.div
                className="mb-12 p-6 rounded-xl border border-[#00f2ff]/30 bg-[#00f2ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-mono text-lg text-[#00f2ff] mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  How Semantic Memory Works
                </h2>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Text Embedding", desc: "Conversations encoded into 768-dim vectors using OpenAI embeddings" },
                    { step: 2, title: "Vector Storage", desc: "Embeddings stored in ChromaDB with metadata and timestamps" },
                    { step: 3, title: "Similarity Search", desc: "ANN (Approximate Nearest Neighbor) finds related context" },
                    { step: 4, title: "Context Injection", desc: "Retrieved memories injected into AI prompts for continuity" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.step}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#00f2ff]/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-mono text-sm text-[#00f2ff]">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <Database className="w-5 h-5 text-[#00f2ff] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">ChromaDB</span>
                  <p className="font-mono text-xs text-gray-500">Vector Store</p>
                </div>
                <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 text-center">
                  <Brain className="w-5 h-5 text-[#ffaa00] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-[#ffaa00]">768</span>
                  <p className="font-mono text-xs text-gray-500">Dimensions</p>
                </div>
                <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
                  <Zap className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-green-500">&lt;100ms</span>
                  <p className="font-mono text-xs text-gray-500">Retrieval</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <Clock className="w-5 h-5 text-[#00f2ff] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">∞</span>
                  <p className="font-mono text-xs text-gray-500">Persistence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* May 15 Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 border-t border-[#ffaa00]/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Brain className="w-5 h-5 text-[#ffaa00]" />
          <span className="font-mono text-sm text-[#ffaa00]">SYSTEM READY FOR MAY 15 DEPLOYMENT</span>
          <span className="font-mono text-xs text-gray-500">ChromaDB • Embeddings • Semantic Search</span>
        </div>
      </div>
    </main>
  );
}
