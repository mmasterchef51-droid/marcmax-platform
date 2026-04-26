"use client";

import { motion } from "framer-motion";
import { Users, Brain, Shield, Zap, Server, Lock } from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "The Neural Army",
    description: "6 specialized agents working in parallel to handle complex tasks. Each agent is optimized for specific domains, from code generation to system analysis.",
    highlight: "6 Agents",
  },
  {
    icon: Brain,
    title: "Multi-Model Fleet",
    description: "Intelligent routing across Google, Groq, and OpenRouter. Automatic model selection based on task requirements and performance optimization.",
    highlight: "31 Models",
  },
  {
    icon: Shield,
    title: "Hardware Safety",
    description: "Integrated thermal governor for host protection. Real-time monitoring prevents system overload and ensures stable operation.",
    highlight: "Protected",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm md:text-base text-[#ffaa00] uppercase tracking-[0.3em] mb-4">
            System Capabilities
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-white text-glow-cyan">
            ENTERPRISE-GRADE ARCHITECTURE
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="group relative p-6 md:p-8 rounded-lg border border-[#00f2ff]/20 bg-gradient-to-b from-[#00f2ff]/5 to-transparent hover:border-[#00f2ff]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f2ff]/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f2ff]/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f2ff]/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f2ff]/40" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#00f2ff]/10 border border-[#00f2ff]/30 flex items-center justify-center mb-4 group-hover:bg-[#00f2ff]/20 transition-colors">
                <capability.icon className="w-6 h-6 text-[#00f2ff]" />
              </div>

              {/* Highlight badge */}
              <div className="absolute top-4 right-4">
                <span className="font-mono text-xs text-[#ffaa00] border border-[#ffaa00]/30 px-2 py-1 rounded">
                  {capability.highlight}
                </span>
              </div>

              {/* Content */}
              <h4 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#00f2ff] transition-colors">
                {capability.title}
              </h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
