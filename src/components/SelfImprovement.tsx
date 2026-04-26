"use client";

import { motion } from "framer-motion";
import { Wrench, Code2, Shield, Play, CheckCircle, AlertTriangle, Terminal, GitBranch } from "lucide-react";

const protocolSteps = [
  {
    step: "01",
    icon: Code2,
    title: "Code Analysis",
    description: "AI agents continuously scan codebase for optimization opportunities and potential issues.",
    status: "CONTINUOUS",
    color: "#00f2ff",
  },
  {
    step: "02",
    icon: Terminal,
    title: "Sandbox Testing",
    description: "Proposed modifications are tested in an isolated environment before any changes are applied.",
    status: "VALIDATED",
    color: "#0066ff",
  },
  {
    step: "03",
    icon: GitBranch,
    title: "Version Control",
    description: "All changes are tracked with automatic rollback capability. User approval required for critical modifications.",
    status: "TRACKED",
    color: "#ffaa00",
  },
  {
    step: "04",
    icon: Shield,
    title: "Safety Verification",
    description: "Final safety checks ensure modifications won't compromise system stability or user data.",
    status: "REQUIRED",
    color: "#22c55e",
  },
];

export default function SelfImprovement() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[#00f2ff] uppercase tracking-[0.3em] mb-4 block">
            Autonomous Systems
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            SELF-IMPROVEMENT PROTOCOLS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Autonomous self-healing with rigorous validation. The system improves itself while maintaining absolute safety.
          </p>
        </motion.div>

        {/* Protocol Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protocolSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative p-6 rounded-lg border border-[#0066ff]/20 bg-gradient-to-b from-[#0066ff]/5 to-transparent hover:border-[#0066ff]/40 transition-all duration-300 h-full">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono text-3xl font-bold"
                        style={{ color: `${item.color}40` }}
                      >
                        {item.step}
                      </span>
                      <span
                        className="font-mono text-xs px-2 py-1 rounded border"
                        style={{
                          borderColor: `${item.color}40`,
                          color: item.color,
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center border mb-4"
                      style={{
                        borderColor: `${item.color}40`,
                        backgroundColor: `${item.color}10`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-[#0066ff]/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        />
                      </div>
                      <CheckCircle
                        className="w-4 h-4"
                        style={{ color: item.color }}
                      />
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#0066ff]/30" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#0066ff]/30" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#0066ff]/30" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#0066ff]/30" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Validation Layer Banner */}
        <motion.div
          className="mt-12 p-6 rounded-xl border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 via-[#020617] to-green-500/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full border-2 border-green-500/40 bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-green-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                The Validation Layer
              </h3>
              <p className="text-gray-400 text-sm">
                Before any code modification is applied to the production system,
                it undergoes rigorous testing in a sandboxed environment. This
                ensures system stability and prevents regressions. All changes
                require passing 100% of safety tests before deployment.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500/40 bg-green-500/10">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-mono text-sm text-green-500">
                SAFETY FIRST
              </span>
            </div>
          </div>
        </motion.div>

        {/* Safety Stats */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: "Tests Passed", value: "100%", color: "#22c55e" },
            { label: "Rollback Time", value: "< 1s", color: "#00f2ff" },
            { label: "Sandbox Isolation", value: "FULL", color: "#0066ff" },
            { label: "Approval Gate", value: "ACTIVE", color: "#ffaa00" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5 text-center"
            >
              <span
                className="font-mono text-2xl font-bold block"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
