"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Zap, Layers, Globe, Shield } from "lucide-react";

const languages = [
  {
    name: "Node.js / Electron",
    title: "The Shell",
    icon: Cpu,
    color: "#00f2ff",
    description:
      "The high-fidelity Tactical HUD and native system orchestration. Powers the real-time interface and cross-platform desktop experience.",
    features: [
      { icon: Layers, text: "Multi-window Architecture" },
      { icon: Globe, text: "Native System APIs" },
      { icon: Zap, text: "Real-time IPC" },
    ],
    stats: { version: "v20.x", modules: "450+" },
  },
  {
    name: "Python",
    title: "The Intelligence",
    icon: Code,
    color: "#ffaa00",
    description:
      "Handling the 31-model registry, routing, and browser automation logic. The cognitive core behind intelligent decision making.",
    features: [
      { icon: Brain, text: "ML Model Routing" },
      { icon: Layers, text: "31 Model Registry" },
      { icon: Globe, text: "Browser Automation" },
    ],
    stats: { version: "v3.12", modules: "200+" },
  },
  {
    name: "Rust",
    title: "The Performance",
    icon: Zap,
    color: "#ff4444",
    description:
      "Dedicated memory-safe processing for real-time vision and screen analysis. Zero-cost abstractions with maximum safety.",
    features: [
      { icon: Shield, text: "Memory Safety" },
      { icon: Zap, text: "Zero-Copy Ops" },
      { icon: Cpu, text: "Vision Pipeline" },
    ],
    stats: { version: "v1.75", modules: "85+" },
  },
];

function Brain({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

interface LanguageCardProps {
  language: (typeof languages)[0];
  index: number;
}

function LanguageCard({ language, index }: LanguageCardProps) {
  const Icon = language.icon;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div
        className="relative p-6 md:p-8 rounded-lg border-2 border-[#00f2ff]/20 bg-gradient-to-b from-[#00f2ff]/5 to-transparent hover:border-[#00f2ff]/60 transition-all duration-500 h-full"
        style={{ boxShadow: `inset 0 0 30px ${language.color}10` }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center border-2"
            style={{ borderColor: `${language.color}40`, backgroundColor: `${language.color}10` }}
          >
            <Icon className="w-8 h-8" style={{ color: language.color }} />
          </div>
          <div className="text-right">
            <span
              className="font-mono text-xs px-2 py-1 rounded border"
              style={{ borderColor: `${language.color}30`, color: language.color }}
            >
              {language.stats.version}
            </span>
            <p className="font-mono text-xs text-gray-500 mt-1">
              {language.stats.modules} modules
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <span
            className="font-mono text-xs uppercase tracking-wider block mb-1"
            style={{ color: language.color }}
          >
            {language.title}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {language.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          {language.description}
        </p>

        {/* Features */}
        <div className="space-y-3">
          {language.features.map((feature, i) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <FeatureIcon className="w-4 h-4 text-[#00f2ff]/60" />
                <span className="font-mono text-xs text-gray-300">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f2ff]/30" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f2ff]/30" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f2ff]/30" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f2ff]/30" />
      </div>
    </motion.div>
  );
}

export default function LanguageTrinity() {
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
            Core Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            THE LANGUAGE TRINITY
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A polyglot foundation optimized for each operational domain. Each language serves its specialized purpose in the neural stack.
          </p>
        </motion.div>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {languages.map((language, index) => (
            <LanguageCard key={language.name} language={language} index={index} />
          ))}
        </div>

        {/* Connection Lines Decoration */}
        <svg
          className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-2 pointer-events-none hidden md:block"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="20%"
            y1="50%"
            x2="80%"
            y2="50%"
            stroke="#00f2ff"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>
    </section>
  );
}
