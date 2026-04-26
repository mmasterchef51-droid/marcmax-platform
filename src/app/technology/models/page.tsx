"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import TechNav from "@/components/TechNav";
import ScanningLine from "@/components/ScanningLine";
import NeuralFlow from "@/components/NeuralFlow";
import {
  Brain,
  Zap,
  Globe,
  Sparkles,
  CheckCircle,
  Code,
  Eye,
  MessageSquare,
  Terminal,
  ChevronRight,
  Cpu,
} from "lucide-react";

const providers = [
  {
    id: "google",
    name: "Google AI",
    color: "#4285F4",
    icon: Brain,
    models: [
      { name: "Gemini 1.5 Pro", type: "General", context: "1M tokens", skills: ["Coding", "Logic", "Analysis"] },
      { name: "Gemini 1.5 Flash", type: "Fast", context: "1M tokens", skills: ["Speed", "Chat", "Quick Tasks"] },
      { name: "Gemini Ultra", type: "Premium", context: "128K tokens", skills: ["Complex Reasoning", "Math", "Science"] },
    ],
  },
  {
    id: "groq",
    name: "Groq",
    color: "#F5501C",
    icon: Zap,
    models: [
      { name: "Llama 3 70B", type: "Open", latency: "<50ms", skills: ["General", "Open Source", "Fast"] },
      { name: "Llama 3.1 405B", type: "Large", latency: "<80ms", skills: ["Advanced Logic", "Code", "Analysis"] },
      { name: "Mixtral 8x22B", type: "Mixture", latency: "<60ms", skills: ["Multi-Expert", "Efficient", "Versatile"] },
      { name: "Gemma 2 9B", type: "Light", latency: "<30ms", skills: ["Speed", "Edge", "Lightweight"] },
    ],
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    color: "#00D4AA",
    icon: Globe,
    models: [
      { name: "Claude 3.5 Sonnet", type: "Creative", provider: "Anthropic", skills: ["Writing", "Analysis", "Coding"] },
      { name: "GPT-4o", type: "Multimodal", provider: "OpenAI", skills: ["Vision", "Voice", "Advanced"] },
      { name: "Command R+", type: "Enterprise", provider: "Cohere", skills: ["Business", "RAG", "Search"] },
      { name: "Mistral Large", type: "European", provider: "Mistral", skills: ["Multilingual", "Reasoning", "Code"] },
    ],
  },
];

const taskTypes = [
  { id: "coding", label: "Coding", icon: Code, desc: "Best: GPT-4o, Claude 3.5, Gemini Pro" },
  { id: "vision", label: "Vision", icon: Eye, desc: "Best: GPT-4o, Gemini Flash, Gemini Pro" },
  { id: "logic", label: "Logic", icon: Terminal, desc: "Best: Llama 405B, Gemini Ultra, Claude 3.5" },
  { id: "chat", label: "Chat", icon: MessageSquare, desc: "Best: Mixtral, Gemma 2, Gemini Flash" },
];

export default function ModelsPage() {
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState("coding");

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <TechNav />

            {/* Main Content */}
            <div className="flex-1 relative">
              <ScanningLine />

              {/* Header */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">DIGITAL ARMORY</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  MODEL REGISTRY
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  31 AI models available for intelligent routing. The system automatically selects 
                  the optimal model based on task requirements, latency constraints, and cost optimization.
                </p>
              </motion.div>

              {/* Model Selector */}
              <motion.div
                className="mb-12 p-6 rounded-xl border border-[#00f2ff]/30 bg-[#00f2ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-mono text-sm text-[#ffaa00] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Intelligent Model Selector
                </h2>
                <p className="text-sm text-gray-400 mb-4">
                  Select a task type to see which models M.A.R.C.O. prioritizes:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {taskTypes.map((task) => {
                    const Icon = task.icon;
                    return (
                      <button
                        key={task.id}
                        onClick={() => setSelectedTask(task.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedTask === task.id
                            ? "border-[#00f2ff] bg-[#00f2ff]/20"
                            : "border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:border-[#00f2ff]/40"
                        }`}
                      >
                        <Icon className="w-5 h-5 mb-2 text-[#00f2ff]" />
                        <span className="font-mono text-sm text-white block">{task.label}</span>
                        <span className="font-mono text-[10px] text-gray-500">Auto-selected</span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 p-3 rounded bg-[#020617]/60 border border-[#00f2ff]/10">
                  <span className="font-mono text-xs text-gray-400">
                    {taskTypes.find(t => t.id === selectedTask)?.desc}
                  </span>
                </div>
              </motion.div>

              {/* Provider Grid */}
              <div className="space-y-8">
                {providers.map((provider, index) => {
                  const Icon = provider.icon;
                  return (
                    <motion.div
                      key={provider.id}
                      className="rounded-xl border-2 overflow-hidden"
                      style={{ borderColor: `${provider.color}40` }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {/* Provider Header */}
                      <div
                        className="p-4 flex items-center justify-between"
                        style={{ backgroundColor: `${provider.color}10` }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${provider.color}30` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: provider.color }} />
                          </div>
                          <div>
                            <h3 className="font-bold text-white">{provider.name}</h3>
                            <span className="font-mono text-xs text-gray-400">
                              {provider.models.length} models available
                            </span>
                          </div>
                        </div>
                        <span
                          className="font-mono text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${provider.color}20`,
                            color: provider.color,
                            border: `1px solid ${provider.color}40`,
                          }}
                        >
                          ACTIVE
                        </span>
                      </div>

                      {/* Models Grid */}
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {provider.models.map((model, i) => (
                          <motion.div
                            key={model.name}
                            className="p-4 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/50 hover:border-[#00f2ff]/30 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <span className="font-mono text-sm font-semibold text-white">
                                {model.name}
                              </span>
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#00f2ff]/10 text-[#00f2ff]">
                                {model.type}
                              </span>
                            </div>
                            {"context" in model && (
                              <p className="font-mono text-xs text-gray-500 mb-2">
                                Context: {model.context}
                              </p>
                            )}
                            {"latency" in model && (
                              <p className="font-mono text-xs text-green-500 mb-2">
                                Latency: {model.latency}
                              </p>
                            )}
                            {"provider" in model && (
                              <p className="font-mono text-xs text-gray-500 mb-2">
                                Provider: {model.provider}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-1">
                              {model.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ffaa00]/10 text-[#ffaa00]"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats Footer */}
              <motion.div
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { label: "Total Models", value: "31", icon: Brain },
                  { label: "Active Providers", value: "3", icon: Globe },
                  { label: "Avg Latency", value: "<50ms", icon: Zap },
                  { label: "Uptime", value: "99.9%", icon: CheckCircle },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                      <Icon className="w-5 h-5 text-[#00f2ff] mx-auto mb-2" />
                      <span className="font-mono text-2xl font-bold text-white block">{stat.value}</span>
                      <span className="font-mono text-xs text-gray-500">{stat.label}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* May 15 Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 border-t border-[#ffaa00]/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Cpu className="w-5 h-5 text-[#ffaa00]" />
          <span className="font-mono text-sm text-[#ffaa00]">
            SYSTEM READY FOR MAY 15 DEPLOYMENT
          </span>
          <span className="font-mono text-xs text-gray-500">
            31 models calibrated • All providers connected
          </span>
        </div>
      </div>
    </main>
  );
}
