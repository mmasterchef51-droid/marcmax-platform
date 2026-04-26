"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SafetyNav from "@/components/SafetyNav";
import ShieldWatermark from "@/components/ShieldWatermark";
import {
  Cpu,
  Code2,
  CheckCircle,
  Terminal,
  GitBranch,
  Shield,
  Play,
  AlertTriangle,
  Zap,
  Lock,
  FileCode,
} from "lucide-react";

const improvementSteps = [
  { step: 1, title: "Pattern Detection", desc: "AI identifies optimization opportunities in codebase", status: "CONTINUOUS", color: "#00f2ff" },
  { step: 2, title: "Patch Generation", desc: "Writes optimized code in Python/Rust", status: "AI DRIVEN", color: "#ffaa00" },
  { step: 3, title: "Sandbox Validation", desc: "Tests changes in isolated environment", status: "REQUIRED", color: "#22c55e" },
  { step: 4, title: "Human Approval", desc: "User confirmation before applying", status: "GATE", color: "#0066ff" },
  { step: 5, title: "Atomic Deployment", desc: "Versioned rollback-capable update", status: "TRACKED", color: "#00f2ff" },
];

// Code diff mockup component
function CodeDiffMockup() {
  return (
    <div className="rounded-lg border border-[#00f2ff]/30 bg-[#020617] overflow-hidden font-mono text-xs">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#00f2ff]/10 border-b border-[#00f2ff]/20">
        <GitBranch className="w-4 h-4 text-[#00f2ff]" />
        <span className="text-[#00f2ff]">optimization_001.py</span>
        <span className="ml-auto text-gray-500">AI-Generated Patch</span>
      </div>
      
      {/* Code Content */}
      <div className="p-4 space-y-1">
        {/* Line numbers and diff */}
        <div className="flex">
          <span className="w-8 text-gray-600 text-right pr-2">-15</span>
          <span className="w-8 text-gray-600 text-right pr-2">+15</span>
          <span className="pl-2 text-red-400 line-through">    for item in items:</span>
        </div>
        <div className="flex">
          <span className="w-8 text-gray-600 text-right pr-2"></span>
          <span className="w-8 text-gray-600 text-right pr-2">+16</span>
          <span className="pl-2 text-green-400">    # AI: Optimized with vectorization</span>
        </div>
        <div className="flex">
          <span className="w-8 text-gray-600 text-right pr-2"></span>
          <span className="w-8 text-gray-600 text-right pr-2">+17</span>
          <span className="pl-2 text-green-400">    results = np.vectorize(process)(items)</span>
        </div>
        <div className="flex">
          <span className="w-8 text-gray-600 text-right pr-2"></span>
          <span className="w-8 text-gray-600 text-right pr-2">+18</span>
          <span className="pl-2 text-green-400">    return results</span>
        </div>
        <div className="flex">
          <span className="w-8 text-gray-600 text-right pr-2">-19</span>
          <span className="w-8 text-gray-600 text-right pr-2"></span>
          <span className="pl-2 text-red-400 line-through">        process(item)</span>
        </div>
        <div className="flex">
          <span className="w-8 text-gray-600 text-right pr-2">-20</span>
          <span className="w-8 text-gray-600 text-right pr-2"></span>
          <span className="pl-2 text-red-400 line-through">    return items</span>
        </div>
        
        {/* Performance stats */}
        <div className="mt-4 pt-4 border-t border-[#00f2ff]/20">
          <div className="flex items-center gap-4">
            <span className="text-gray-500">Performance:</span>
            <span className="text-green-400">+340% faster</span>
            <span className="text-gray-500">|</span>
            <span className="text-green-400">-45% memory</span>
            <span className="ml-auto px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px]">VALIDATED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelfImprovementPage() {
  const [validationStatus, setValidationStatus] = useState("idle");

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      <ShieldWatermark />

      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <SafetyNav />

            <div className="flex-1">
              {/* Header */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-8 h-8 text-[#22c55e]" />
                  <span className="font-mono text-[#22c55e] tracking-wider">CONTROLLED EVOLUTION</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "0 0 40px #22c55e50" }}>
                  SELF-IMPROVEMENT & VALIDATION
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  M.A.R.C.O. can autonomously optimize its own codebase. The system identifies performance 
                  bottlenecks, generates patches, and validates them in a sandbox before deployment—all 
                  with your explicit approval.
                </p>
              </motion.div>

              {/* Improvement Protocol Steps */}
              <motion.div
                className="mb-8 p-6 rounded-xl border-2 border-[#22c55e]/40 bg-gradient-to-br from-[#22c55e]/10 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-[#22c55e]" />
                  THE IMPROVEMENT PROTOCOL
                </h2>
                <div className="space-y-4">
                  {improvementSteps.map((item, index) => (
                    <motion.div
                      key={item.step}
                      className="flex items-center gap-4 p-3 rounded-lg border border-[#22c55e]/20 bg-[#020617]/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold"
                        style={{ backgroundColor: `${item.color}20`, color: item.color }}
                      >
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                      <span
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: `${item.color}20`, color: item.color }}
                      >
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Code Diff Mockup */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-mono text-sm text-[#ffaa00] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Example: AI-Generated Optimization
                </h2>
                <CodeDiffMockup />
              </motion.div>

              {/* Validation Sandbox */}
              <motion.div
                className="mb-8 p-6 rounded-xl border border-[#0066ff]/30 bg-[#0066ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#0066ff]" />
                    VALIDATION SANDBOX
                  </h2>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-500">
                    ISOLATED ENVIRONMENT
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  Before any code modification is applied, it undergoes rigorous testing in an isolated 
                  sandbox environment:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: CheckCircle, title: "Unit Tests", desc: "100% test coverage required", color: "green" },
                    { icon: Zap, title: "Performance", desc: "Must improve or maintain speed", color: "yellow" },
                    { icon: Lock, title: "Security", desc: "No new vulnerabilities introduced", color: "blue" },
                  ].map((test, i) => {
                    const Icon = test.icon;
                    return (
                      <div key={test.title} className="p-4 rounded-lg bg-[#020617]/50 border border-[#0066ff]/20">
                        <Icon className={`w-6 h-6 mb-2 text-${test.color}-500`} />
                        <h3 className="font-semibold text-white">{test.title}</h3>
                        <p className="text-sm text-gray-400">{test.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Safety Guarantees */}
              <motion.div
                className="p-6 rounded-xl border-2 border-[#ffaa00]/40 bg-[#ffaa00]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#ffaa00]" />
                  <h2 className="text-xl font-bold text-white">SAFETY GUARANTEES</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "All changes require explicit user approval",
                    "Automatic rollback on any failure",
                    "Complete audit trail of all modifications",
                    "Immutable snapshots before each change",
                    "Resource usage limits enforced in sandbox",
                    "Network isolation prevents external calls",
                  ].map((guarantee, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#ffaa00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <div className="p-4 rounded-lg border border-[#22c55e]/20 bg-[#22c55e]/5 text-center">
                  <GitBranch className="w-5 h-5 text-[#22c55e] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">Auto</span>
                  <p className="font-mono text-xs text-gray-500">Detection</p>
                </div>
                <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 text-center">
                  <Terminal className="w-5 h-5 text-[#ffaa00] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">100%</span>
                  <p className="font-mono text-xs text-gray-500">Validated</p>
                </div>
                <div className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5 text-center">
                  <Lock className="w-5 h-5 text-[#0066ff] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">User</span>
                  <p className="font-mono text-xs text-gray-500">Approval Gate</p>
                </div>
                <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
                  <Zap className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">&lt;1s</span>
                  <p className="font-mono text-xs text-gray-500">Rollback</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Badge Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 border-t border-[#ffaa00]/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Shield className="w-5 h-5 text-[#ffaa00]" />
          <span className="font-mono text-sm text-[#ffaa00]">7.0.0 FAILSAFE ACTIVE</span>
          <span className="font-mono text-xs text-gray-500">Sandbox • Validation • User Control</span>
        </div>
      </div>
    </main>
  );
}
