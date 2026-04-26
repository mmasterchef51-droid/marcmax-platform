"use client";

import { motion } from "framer-motion";
import { HardDrive, Lock, Shield, ServerOff, FileKey, Fingerprint, CheckCircle } from "lucide-react";

const securityPoints = [
  {
    icon: HardDrive,
    title: "Local Mission Logs",
    subtitle: "Zero Cloud Exposure",
    description:
      "All tactical logs, conversation history, and operational data are stored exclusively on the user's local machine. No data is transmitted to external servers.",
    features: [
      "SQLite local database",
      "No cloud sync required",
      "Full user data ownership",
    ],
    color: "#00f2ff",
  },
  {
    icon: Lock,
    title: "Encrypted Communication",
    subtitle: "AES-256 Handshakes",
    description:
      "All IPC (Inter-Process Communication) between the Node.js Shell and Python Intelligence core is encrypted using AES-256-GCM with rotating session keys.",
    features: [
      "End-to-end encryption",
      "Rotating session keys",
      "Memory-safe buffers",
    ],
    color: "#0066ff",
  },
  {
    icon: Shield,
    title: "Zero-Trust Model",
    subtitle: "User is Commander",
    description:
      "No external command can override user authority. All autonomous actions require explicit user confirmation or operate within predefined safety boundaries.",
    features: [
      "Explicit confirmation gates",
      "Immutable user policies",
      "Audit trail for all actions",
    ],
    color: "#ffaa00",
  },
];

export default function DataIsolation() {
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
            Privacy Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            DATA ISOLATION & PRIVACY
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Military-grade security with local-first data philosophy. Your operations remain yours alone.
          </p>
        </motion.div>

        {/* Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {securityPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div
                  className="relative p-6 md:p-8 rounded-lg border-2 border-[#0066ff]/20 bg-gradient-to-b from-[#0066ff]/5 to-transparent h-full hover:border-[#0066ff]/50 transition-all duration-500"
                  style={{ boxShadow: `inset 0 0 40px ${point.color}10` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center border-2"
                      style={{
                        borderColor: `${point.color}40`,
                        backgroundColor: `${point.color}10`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: point.color }} />
                    </div>
                    <div className="text-right">
                      <span
                        className="font-mono text-xs px-2 py-1 rounded border"
                        style={{
                          borderColor: `${point.color}40`,
                          color: point.color,
                        }}
                      >
                        VERIFIED
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <span
                      className="font-mono text-xs uppercase tracking-wider block mb-1"
                      style={{ color: point.color }}
                    >
                      {point.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {point.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {point.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: point.color }}
                        />
                        <span className="font-mono text-xs text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0066ff]/30" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0066ff]/30" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0066ff]/30" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0066ff]/30" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Central Security Hub Graphic */}
        <motion.div
          className="mt-12 p-6 rounded-lg border border-[#0066ff]/20 bg-gradient-to-r from-[#0066ff]/5 via-[#020617] to-[#0066ff]/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Node: User */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#00f2ff]/40 bg-[#00f2ff]/10 flex items-center justify-center mb-2">
                <Fingerprint className="w-8 h-8 text-[#00f2ff]" />
              </div>
              <span className="font-mono text-xs text-gray-400">COMMANDER</span>
            </div>

            {/* Connection lines */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#00f2ff]/50 to-[#0066ff]/50" />
              <Lock className="w-5 h-5 text-[#0066ff]" />
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#0066ff]/50 to-[#ffaa00]/50" />
            </div>

            {/* Node: MARCO Core */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-lg border-2 border-[#0066ff]/40 bg-[#0066ff]/10 flex items-center justify-center mb-2">
                <ServerOff className="w-10 h-10 text-[#0066ff]" />
              </div>
              <span className="font-mono text-xs text-gray-400">LOCAL CORE</span>
            </div>

            {/* Connection lines */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#ffaa00]/50 to-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <div className="w-16 h-[2px] bg-gradient-to-r from-red-500/50 to-transparent" />
            </div>

            {/* Node: No External */}
            <div className="text-center opacity-50">
              <div className="w-16 h-16 rounded-full border-2 border-red-500/40 bg-red-500/10 flex items-center justify-center mb-2">
                <span className="text-2xl">🚫</span>
              </div>
              <span className="font-mono text-xs text-red-500">NO EXTERNAL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
