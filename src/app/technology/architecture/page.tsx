"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import TechNav from "@/components/TechNav";
import ScanningLine from "@/components/ScanningLine";
import NeuralFlow from "@/components/NeuralFlow";
import {
  Cpu,
  Code2,
  Flame,
  ArrowRight,
  Zap,
  Globe,
  Database,
  Terminal,
  Layers,
  GitBranch,
} from "lucide-react";

const languages = [
  {
    name: "Node.js / TypeScript",
    title: "The Shell",
    color: "#00f2ff",
    icon: Code2,
    lines: "50,000+",
    role: "Orchestration & UI",
    description: "Manages the high-fidelity Tactical HUD, real-time IPC, and cross-platform desktop orchestration via Electron.",
    features: [
      "Electron Main Process",
      "Real-time IPC Channels",
      "Multi-window Architecture",
      "Native OS Integration",
      "Hot Module Replacement",
    ],
    codeSnippet: `// Node.js Orchestration Layer
class MarcoCore {
  async routeTask(task: Task) {
    const agent = this.selectAgent(task.type);
    const result = await agent.execute(task);
    return this.processResult(result);
  }
}`,
  },
  {
    name: "Python",
    title: "The Intelligence",
    color: "#ffaa00",
    icon: Terminal,
    lines: "50,000+",
    role: "AI & Logic",
    description: "Powers the Neural Army's cognitive functions: model routing, embeddings, and browser automation logic.",
    features: [
      "31-Model Registry",
      "ChromaDB Vector Store",
      "LangChain Orchestration",
      "Playwright Automation",
      "ML Pipeline Management",
    ],
    codeSnippet: `# Python Intelligence Core
class NeuralAgent:
    def process(self, input_data):
        embedding = self.encode(input_data)
        context = self.memory.search(embedding)
        return self.model.generate(
            input=input_data,
            context=context
        )`,
  },
  {
    name: "Rust",
    title: "The Performance",
    color: "#ef4444",
    icon: Flame,
    lines: "50,000+",
    role: "Vision & Safety",
    description: "Memory-safe processing for real-time screen analysis, thermal monitoring, and security enforcement.",
    features: [
      "Real-time Vision Pipeline",
      "eBPF Kernel Hooks",
      "Memory-safe Buffers",
      "Zero-copy Operations",
      "Hardware Thermal Control",
    ],
    codeSnippet: `// Rust Performance Layer
pub fn analyze_screen(frame: &Frame) -> Analysis {
    let elements = detect_ui_elements(frame);
    let text = perform_ocr(&frame.buffer);
    Analysis { elements, text }
}`,
  },
];

const dataFlow = [
  { step: 1, from: "UI (Node.js)", to: "Python Engine", action: "Task Dispatch", color: "#00f2ff" },
  { step: 2, from: "Python", to: "AI Models", action: "Model Inference", color: "#ffaa00" },
  { step: 3, from: "Python", to: "Rust Vision", action: "Screen Analysis", color: "#ef4444" },
  { step: 4, from: "Rust", to: "Python", action: "Visual Context", color: "#ef4444" },
  { step: 5, from: "Python", to: "Node.js", action: "Response", color: "#00f2ff" },
  { step: 6, from: "Node.js", to: "UI", action: "Display", color: "#00f2ff" },
];

export default function ArchitecturePage() {
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
                  <Cpu className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">TRINITY OF POWER</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  MULTI-LANGUAGE CORE
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  A polyglot architecture optimized for each operational domain. 
                  Node.js for the UI, Python for AI logic, and Rust for performance-critical vision processing.
                </p>
              </motion.div>

              {/* Language Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {languages.map((lang, index) => {
                  const Icon = lang.icon;
                  return (
                    <motion.div
                      key={lang.name}
                      className="relative p-6 rounded-xl border-2 overflow-hidden"
                      style={{ borderColor: `${lang.color}40` }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div
                        className="absolute top-0 right-0 w-32 h-32 opacity-10"
                        style={{
                          background: `radial-gradient(circle, ${lang.color} 0%, transparent 70%)`,
                        }}
                      />
                      
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${lang.color}20`, border: `2px solid ${lang.color}40` }}
                          >
                            <Icon className="w-6 h-6" style={{ color: lang.color }} />
                          </div>
                          <div>
                            <span className="font-mono text-xs block" style={{ color: lang.color }}>
                              {lang.title}
                            </span>
                            <h3 className="font-bold text-white">{lang.name}</h3>
                          </div>
                        </div>

                        <p className="text-sm text-gray-400 mb-4">{lang.description}</p>

                        <div className="space-y-2 mb-4">
                          {lang.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Zap className="w-3 h-3" style={{ color: lang.color }} />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 rounded bg-[#020617]/80 border border-[#00f2ff]/10 font-mono text-[10px] text-gray-400 overflow-x-auto">
                          <pre>{lang.codeSnippet}</pre>
                        </div>

                        <div className="mt-4 pt-4 border-t border-[#00f2ff]/10">
                          <span className="font-mono text-xs text-gray-500">{lang.lines} lines</span>
                        </div>
                      </div>

                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: lang.color }} />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: lang.color }} />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: lang.color }} />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: lang.color }} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Data Flow Diagram */}
              <motion.div
                className="p-6 rounded-xl border border-[#00f2ff]/30 bg-[#00f2ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-mono text-lg text-[#00f2ff] mb-6 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  DATA FLOW ARCHITECTURE
                </h2>

                <div className="space-y-4">
                  {dataFlow.map((flow, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                        style={{ backgroundColor: `${flow.color}20`, color: flow.color }}
                      >
                        {flow.step}
                      </div>
                      <div className="flex-1 flex items-center gap-3">
                        <span className="font-mono text-sm text-gray-300">{flow.from}</span>
                        <ArrowRight className="w-4 h-4 text-[#00f2ff]" />
                        <span className="font-mono text-sm text-white">{flow.to}</span>
                      </div>
                      <span
                        className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${flow.color}20`, color: flow.color }}
                      >
                        {flow.action}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div className="mt-8 grid grid-cols-3 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">3</span>
                  <p className="font-mono text-xs text-gray-500">Core Languages</p>
                </div>
                <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#ffaa00]">150K+</span>
                  <p className="font-mono text-xs text-gray-500">Total LOC</p>
                </div>
                <div className="p-4 rounded-lg border border-[#ef4444]/20 bg-[#ef4444]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#ef4444]">0ms</span>
                  <p className="font-mono text-xs text-gray-500">IPC Latency</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* May 15 Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 border-t border-[#ffaa00]/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Layers className="w-5 h-5 text-[#ffaa00]" />
          <span className="font-mono text-sm text-[#ffaa00]">SYSTEM READY FOR MAY 15 DEPLOYMENT</span>
          <span className="font-mono text-xs text-gray-500">Node • Python • Rust • Calibrated</span>
        </div>
      </div>
    </main>
  );
}
