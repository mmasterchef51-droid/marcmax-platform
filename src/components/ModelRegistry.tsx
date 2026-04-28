"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, ChevronRight, Sparkles, Server, Lock } from "lucide-react";

const neuralEngines = [
  {
    name: "MARCO Core-Alpha Engine",
    subtitle: "Primary Neural Logic",
    icon: Brain,
    color: "#00f2ff",
    models: ["Neural Configuration Alpha", "Neural Configuration Beta", "Neural Configuration Gamma"],
    features: ["1M Token Context", "Multi-modal", "Native Vision"],
    status: "ACTIVE",
  },
  {
    name: "MARCORAEX Proprietary Neural Logic",
    subtitle: "High-Speed Inference",
    icon: Zap,
    color: "#ffaa00",
    models: ["High-Capacity Config 70B", "Enterprise Config 405B", "Multi-Expert Config 8x22B"],
    features: ["800+ T/s", "Low Latency", "Optimized Execution"],
    status: "ACTIVE",
  },
  {
    name: "MARCORAEX Unified Neural Mesh",
    subtitle: "Integrated Core Systems",
    icon: Shield,
    color: "#00d4aa",
    models: ["Advanced Reasoning Config", "Omni-Modal Config", "Command Config Plus"],
    features: ["Intelligent Fallback", "Auto-Routing", "Self-Healing"],
    status: "ACTIVE",
  },
];

const totalModels = 31;

export default function ModelRegistry() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
            Private Neural Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            THE NEURAL ENGINE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            MARCORAEX proprietary neural configurations running exclusively on secure, private servers. Zero external dependencies. Maximum data sovereignty.
          </p>
        </motion.div>

        {/* Fleet Overview Card */}
        <motion.div
          className="mb-12 p-6 md:p-8 rounded-lg border border-[#00f2ff]/30 bg-gradient-to-r from-[#00f2ff]/10 via-[#00f2ff]/5 to-[#00f2ff]/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#00f2ff]/20 border-2 border-[#00f2ff]/40 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#00f2ff]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {totalModels} Neural Configs
                </h3>
                <p className="font-mono text-sm text-[#00f2ff]/80">
                  Running on MARCORAEX Private Infrastructure
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="text-center">
                <span className="font-mono text-2xl font-bold text-green-500">50ms</span>
                <p className="font-mono text-xs text-gray-500">Avg Latency</p>
              </div>
              <div className="w-px h-10 bg-[#00f2ff]/20" />
              <div className="text-center">
                <span className="font-mono text-2xl font-bold text-[#ffaa00]">99.9%</span>
                <p className="font-mono text-xs text-gray-500">Uptime</p>
              </div>
              <div className="w-px h-10 bg-[#00f2ff]/20" />
              <div className="text-center">
                <span className="font-mono text-2xl font-bold text-[#00f2ff]">∞</span>
                <p className="font-mono text-xs text-gray-500">Fallback Chain</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Neural Engine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {neuralEngines.map((engine, index) => {
            const Icon = engine.icon;
            return (
              <motion.div
                key={engine.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative p-6 rounded-lg border border-[#00f2ff]/20 bg-gradient-to-b from-[#00f2ff]/5 to-transparent hover:border-[#00f2ff]/50 transition-all duration-500 h-full">
                  {/* Engine Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center border"
                      style={{
                        borderColor: `${engine.color}40`,
                        backgroundColor: `${engine.color}10`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: engine.color }} />
                    </div>
                    <span className="font-mono text-xs px-2 py-1 rounded bg-green-500/20 text-green-500 border border-green-500/30 flex items-center gap-1">
                      <Server className="w-3 h-3" />
                      {engine.status}
                    </span>
                  </div>

                  {/* Engine Name */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {engine.name}
                  </h3>
                  <p className="font-mono text-sm text-gray-500 mb-4">
                    {engine.subtitle}
                  </p>

                  {/* Configuration List */}
                  <div className="mb-4">
                    <span className="font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider block mb-2">
                      Configurations
                    </span>
                    <div className="space-y-1">
                      {engine.models.map((model, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 font-mono text-xs text-gray-300"
                        >
                          <ChevronRight className="w-3 h-3 text-[#00f2ff]/40" />
                          {model}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {engine.features.map((feature, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-2 py-1 rounded bg-[#00f2ff]/10 text-[#00f2ff]/80 border border-[#00f2ff]/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00f2ff]/30" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00f2ff]/30" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00f2ff]/30" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00f2ff]/30" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Private Server Banner */}
        <motion.div
          className="mt-12 p-4 rounded-lg border border-green-500/30 bg-green-500/5 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Lock className="w-5 h-5 text-green-500" />
          <span className="font-mono text-sm text-green-500">
            ALL NEURAL CONFIGURATIONS RUN EXCLUSIVELY ON PRIVATE MARCORAEX SERVERS • ZERO EXTERNAL API CALLS • 100% DATA SOVEREIGNTY
          </span>
          <Server className="w-5 h-5 text-green-500" />
        </motion.div>
      </div>
    </section>
  );
}
