"use client";

import { motion } from "framer-motion";
import { Globe, Database, Eye, Wrench, CheckCircle } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Automation",
    spec: "200+ Browser Skills",
    description: "Playwright Integrated",
    detail: "Full browser automation with 200+ predefined actions. Form handling, navigation, screenshots, and network interception.",
    status: "OPERATIONAL",
    color: "#00f2ff",
  },
  {
    icon: Database,
    title: "Memory",
    spec: "Vector Semantic Store",
    description: "ChromaDB Powered",
    detail: "Persistent vector-based semantic memory with embedding-based retrieval. Context awareness across sessions.",
    status: "OPTIMAL",
    color: "#ffaa00",
  },
  {
    icon: Eye,
    title: "Vision",
    spec: "Multi-modal Processing",
    description: "Real-time Screen Analysis",
    detail: "Real-time screen capture and analysis. Element detection, OCR, and visual understanding at 60 FPS.",
    status: "ACTIVE",
    color: "#00f2ff",
  },
  {
    icon: Wrench,
    title: "Self-Healing",
    spec: "Autonomous Modification",
    description: "Code-base Protocol",
    detail: "Autonomous code analysis and modification. Self-diagnostic repair capabilities with version control integration.",
    status: "STANDBY",
    color: "#ffaa00",
  },
];

export default function SystemCapabilities() {
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
            Subsystem Status
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            SYSTEM CAPABILITIES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Core subsystems operational. All modules passing diagnostic checks.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative p-6 rounded-lg border border-[#00f2ff]/20 bg-gradient-to-br from-[#00f2ff]/5 to-transparent hover:border-[#00f2ff]/50 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center border-2 flex-shrink-0"
                      style={{
                        borderColor: `${capability.color}40`,
                        backgroundColor: `${capability.color}10`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: capability.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {capability.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <CheckCircle
                            className="w-4 h-4"
                            style={{ color: capability.color }}
                          />
                          <span
                            className="font-mono text-xs"
                            style={{ color: capability.color }}
                          >
                            {capability.status}
                          </span>
                        </div>
                      </div>

                      <p
                        className="font-mono text-lg font-semibold mb-1"
                        style={{ color: capability.color }}
                      >
                        {capability.spec}
                      </p>
                      <p className="font-mono text-sm text-gray-500 mb-3">
                        {capability.description}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {capability.detail}
                      </p>
                    </div>
                  </div>

                  {/* Glowing indicator line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px]"
                    style={{ backgroundColor: capability.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />

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
      </div>
    </section>
  );
}
