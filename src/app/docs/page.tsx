"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import DocsNav from "@/components/DocsNav";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Book,
  Zap,
  Terminal,
  Layers,
  Brain,
  Cpu,
  Search,
  Code,
  ArrowRight,
  CheckCircle,
  Shield,
} from "lucide-react";

const sections = [
  {
    id: "installation",
    title: "Installation",
    icon: Terminal,
    content: [
      "Download the M.A.R.C.O. installer for your platform (Windows/macOS/Linux)",
      "Run the installer and follow the setup wizard",
      "Configure your API keys in the settings panel",
      "Launch M.A.R.C.O. and verify the system status shows OPERATIONAL",
    ],
    code: `# Windows (PowerShell)
.\\marco-installer.exe

# macOS
chmod +x marco-installer.dmg
open marco-installer.dmg

# Linux
chmod +x marco-installer.AppImage
./marco-installer.AppImage`,
  },
  {
    id: "quickstart",
    title: "Quick Start",
    icon: Zap,
    content: [
      "Open the Tactical HUD from the system tray or dock",
      "Type your first command in the natural language input",
      "Watch as M.A.R.C.O. orchestrates the Neural Army to complete your task",
      "Review the execution log for detailed step-by-step analysis",
    ],
    code: `# Example: Ask M.A.R.C.O. to research a topic
Commander: "Research quantum computing breakthroughs in 2024"

M.A.R.C.O.: Deploying Neural Army...
- ZEPHYR: Retrieving context from semantic memory
- SPARK: Executing browser automation (6 steps)
- CORTEX: Synthesizing findings
- Response: [Detailed research summary]`,
  },
  {
    id: "config",
    title: "Configuration",
    icon: Layers,
    content: [
      "Access settings via the ⚙️ icon in the HUD",
      "Configure AI model preferences (default: Auto-routing)",
      "Set thermal thresholds for hardware protection",
      "Enable/disable specific Neural Army agents",
    ],
    code: `// config.json
{
  "models": {
    "default": "auto-route",
    "coding": "gpt-4o",
    "vision": "gemini-1.5-pro"
  },
  "thermal": {
    "warning": 70,
    "critical": 85
  },
  "agents": {
    "zephyr": true,
    "cortex": true,
    "spark": true
  }
}`,
  },
  {
    id: "neural-army",
    title: "Neural Army",
    icon: Brain,
    content: [
      "The Neural Army consists of 6 specialized AI agents",
      "Each agent has a dedicated codebase of 50,000+ lines",
      "Agents communicate via encrypted IPC channels",
      "Automatic load balancing and task routing",
    ],
    code: `// Agent Registry
const agents = {
  ZEPHYR: "Semantic Memory & Retrieval",
  CORTEX: "Task Orchestration & Strategy",
  NEXUS: "API Integration & Bridging",
  SPARK: "Browser Automation & Execution",
  TITAN: "Heavy Compute & ML Processing",
  VANGUARD: "Security & Thermal Protection"
};`,
  },
  {
    id: "models",
    title: "Model Registry",
    icon: Cpu,
    content: [
      "Access to 31 AI models from multiple providers",
      "Intelligent routing based on task type and latency requirements",
      "Support for Google AI, Groq, and OpenRouter",
      "Automatic fallback chains for reliability",
    ],
    code: `// Model Selection (Auto)
const taskTypes = {
  coding: ["gpt-4o", "claude-3.5-sonnet", "gemini-1.5-pro"],
  vision: ["gemini-1.5-pro", "gpt-4o", "gemini-flash"],
  logic: ["llama-3.1-405b", "gemini-ultra", "claude-3-opus"],
  speed: ["mixtral-8x22b", "gemma-2-9b", "llama-3-70b"]
};`,
  },
  {
    id: "memory",
    title: "Semantic Memory",
    icon: Search,
    content: [
      "ChromaDB-powered vector storage for persistent knowledge",
      "768-dimensional embeddings for semantic understanding",
      "Sub-100ms retrieval of relevant context",
      "Cross-session conversation continuity",
    ],
    code: `// Memory Operations
memory.store({
  content: "User prefers Python for data analysis",
  embedding: vectorize(content),
  metadata: { timestamp, session_id }
});

const context = memory.search(query_embedding, { topK: 5 });`,
  },
  {
    id: "orchestration",
    title: "Advanced Orchestration",
    icon: Layers,
    content: [
      "Directed Acyclic Graph (DAG) task scheduling",
      "Parallel agent execution with dependency management",
      "Dynamic priority adjustment based on user context",
      "Automatic retry and error recovery mechanisms",
    ],
    code: `// Task DAG Example
const workflow = {
  nodes: [
    { id: "analyze", agent: "CORTEX", deps: [] },
    { id: "search", agent: "SPARK", deps: ["analyze"] },
    { id: "store", agent: "ZEPHYR", deps: ["search"] }
  ],
  execute: "parallel"
};`,
  },
  {
    id: "self-improvement",
    title: "Self-Improvement",
    icon: Zap,
    content: [
      "Autonomous code optimization detection",
      "AI-generated patches with validation sandbox",
      "Human approval required for all changes",
      "Atomic deployments with rollback capability",
    ],
    code: `// Self-Improvement Protocol
1. Detect optimization opportunity
2. Generate patch (Python/Rust)
3. Validate in sandbox (100% tests pass)
4. Request user approval
5. Atomic deployment with rollback`,
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <DocsNav />

            <div className="flex-1">
              <Breadcrumb />

              {/* Header */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Book className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">KNOWLEDGE BASE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  DOCUMENTATION
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  Complete guide to the M.A.R.C.O. autonomous system. From installation to advanced 
                  orchestration, learn how to command the Neural Army effectively.
                </p>
              </motion.div>

              {/* Documentation Sections */}
              <div className="space-y-12">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-24"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#00f2ff]/10 border border-[#00f2ff]/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#00f2ff]" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          {section.content.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#00f2ff] flex-shrink-0 mt-0.5" />
                              <p className="text-gray-300">{item}</p>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#020617]/80 font-mono text-xs overflow-x-auto">
                          <pre className="text-gray-400">
                            <code>{section.code}</code>
                          </pre>
                        </div>
                      </div>

                      {index < sections.length - 1 && (
                        <div className="mt-8 border-b border-[#00f2ff]/10" />
                      )}
                    </motion.section>
                  );
                })}
              </div>

              {/* API CTA */}
              <motion.div
                className="mt-12 p-6 rounded-xl border-2 border-[#00f2ff]/40 bg-gradient-to-r from-[#00f2ff]/10 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Code className="w-5 h-5 text-[#00f2ff]" />
                      API Reference
                    </h3>
                    <p className="text-gray-400">
                      Explore the 29+ function tools available for developers.
                    </p>
                  </div>
                  <a
                    href="/docs/api"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#00f2ff] text-[#020617] font-mono font-semibold rounded-lg hover:bg-[#00f2ff]/90 transition-colors"
                  >
                    View API Docs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="mt-12 pt-8 border-t border-[#00f2ff]/20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-mono text-sm text-gray-500">
                  DOCUMENTATION v7.0.0 — ALL SYSTEMS LOGGED
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="font-mono text-xs text-green-500">
                    Last updated: 26 April 2026
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
