"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import NotifyMeCTA from "@/components/NotifyMeCTA";
import { getAgentById, agents } from "@/lib/agents";
import NeuralFlow from "@/components/NeuralFlow";
import {
  Database,
  Brain,
  Plug,
  Zap,
  Cpu,
  Shield,
  ArrowLeft,
  CheckCircle,
  Activity,
  Code2,
  Terminal,
  Globe,
  Server,
  Lock,
  Cog,
  Flame,
  Radio,
  Share2,
  Video,
  TestTube,
  GitGraph,
  Layers,
  Link as LinkIcon,
  Calculator,
  ShieldCheck,
  MousePointer2,
} from "lucide-react";
import { useState, useEffect } from "react";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Brain,
  Plug,
  Zap,
  Cpu,
  Shield,
  Code2,
  Code: Code2,
  Terminal,
  Globe,
  Server,
  Lock,
  Cog,
  Flame,
  Radio,
  Share2,
  Chrome: Globe,
  Mouse: MousePointer2,
  Video,
  TestTube,
  GitGraph,
  Layers,
  Link: LinkIcon,
  Calculator,
  ShieldCheck,
};

// Interactive Load Bar Component
function AgentLoadBar({ color }: { color: string }) {
  const [load, setLoad] = useState(45);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prev) => {
        const variation = Math.sin(Date.now() / 1000) * 15 + mouseY * 30;
        return Math.min(95, Math.max(20, 45 + variation));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [mouseY]);

  return (
    <div
      className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 cursor-crosshair"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = (e.clientY - rect.top) / rect.height;
        setMouseY(1 - y);
      }}
      onMouseLeave={() => setMouseY(0)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-gray-400">AGENT LOAD</span>
        <span className="font-mono text-sm font-bold" style={{ color }}>
          {Math.round(load)}%
        </span>
      </div>
      <div className="h-4 bg-[#020617] rounded-full overflow-hidden border border-[#00f2ff]/20">
        <motion.div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${load}%`,
            backgroundColor: color,
            boxShadow: `0 0 20px ${color}50`,
          }}
        />
      </div>
      <p className="font-mono text-[10px] text-gray-500 mt-2">
        Move mouse vertically to simulate load variation
      </p>
    </div>
  );
}

export default function AgentDetailPage() {
  const params = useParams();
  const agentId = params.agent as string;
  const agent = getAgentById(agentId);

  if (!agent) {
    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AGENT NOT FOUND</h1>
          <Link href="/army" className="text-[#00f2ff] hover:underline">
            Return to Army Briefing
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Neural Flow Background */}
      <div className="fixed inset-0 z-0">
        <NeuralFlow />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Return Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/army"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00f2ff]/30 bg-[#00f2ff]/5 text-[#00f2ff] hover:bg-[#00f2ff]/10 transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              RETURN TO COMMAND CENTER
            </Link>
          </motion.div>

          {/* Agent Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="font-mono text-sm tracking-[0.3em] block mb-4"
              style={{ color: agent.color }}
            >
              {agent.designation}: {agent.codename}
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{
                color: agent.color,
                textShadow: `0 0 40px ${agent.color}50`,
              }}
            >
              {agent.codename}
            </h1>
            <p className="text-xl text-gray-400">{agent.name}</p>
            <p className="text-gray-500 mt-2">{agent.specialty}</p>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Logic Block */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Logic Block */}
              <div
                className="p-6 md:p-8 rounded-xl border-2 backdrop-blur-sm"
                style={{
                  borderColor: `${agent.color}40`,
                  background: `linear-gradient(135deg, ${agent.color}10 0%, transparent 100%)`,
                  boxShadow: `0 0 40px ${agent.color}15`,
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Terminal className="w-6 h-6" style={{ color: agent.color }} />
                  {agent.logicBlock.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {agent.logicBlock.content}
                </p>

                {/* Capabilities */}
                <div className="space-y-3">
                  <h3 className="font-mono text-sm text-gray-500 uppercase tracking-wider">
                    Core Capabilities
                  </h3>
                  {agent.logicBlock.capabilities.map((cap, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5" style={{ color: agent.color }} />
                      <span className="text-gray-300">{cap}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Corner Accents */}
                <div
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
                  style={{ borderColor: agent.color }}
                />
                <div
                  className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2"
                  style={{ borderColor: agent.color }}
                />
                <div
                  className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2"
                  style={{ borderColor: agent.color }}
                />
                <div
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
                  style={{ borderColor: agent.color }}
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Processing", value: `${agent.stats.processing}%` },
                  { label: "Memory", value: `${agent.stats.memory}%` },
                  { label: "Efficiency", value: `${agent.stats.efficiency}%` },
                  { label: "Uptime", value: `${agent.stats.uptime}%` },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="font-mono text-2xl font-bold" style={{ color: agent.color }}>
                      {stat.value}
                    </span>
                    <p className="font-mono text-xs text-gray-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Tools & Load */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Interactive Load Bar */}
              <AgentLoadBar color={agent.color} />

              {/* Tools List */}
              <div className="p-6 rounded-lg border border-[#00f2ff]/20 bg-[#020617]/50">
                <h3 className="font-mono text-sm text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00f2ff]" />
                  Agent Toolkit
                </h3>
                <div className="space-y-3">
                  {agent.tools.map((tool, index) => {
                    const ToolIcon = iconMap[tool.icon] || Code2;
                    return (
                      <motion.div
                        key={tool.name}
                        className="flex items-center gap-3 p-3 rounded-lg border border-[#00f2ff]/10 bg-[#00f2ff]/5 hover:border-[#00f2ff]/30 transition-colors"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <ToolIcon className="w-5 h-5 text-[#00f2ff]" />
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-white block">
                            {tool.name}
                          </span>
                          <span className="font-mono text-xs text-gray-500">
                            {tool.category}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5">
                <h3 className="font-mono text-xs text-[#ffaa00] uppercase tracking-wider mb-3">
                  Contribution Stats
                </h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Codebase Share</span>
                    <span className="text-white">50,000+ lines</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Modules</span>
                    <span className="text-white">{agent.tools.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span style={{ color: agent.color }}>ACTIVE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation to Other Agents */}
          <motion.div
            className="mt-12 pt-8 border-t border-[#00f2ff]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="font-mono text-sm text-gray-500 uppercase tracking-wider mb-4 text-center">
              Other Agents in Neural Army
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {agents
                .filter((a) => a.id !== agentId)
                .map((otherAgent) => (
                  <Link
                    key={otherAgent.id}
                    href={`/army/${otherAgent.id}`}
                    className="px-4 py-2 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:border-[#00f2ff]/50 transition-colors font-mono text-sm text-gray-300 hover:text-white"
                  >
                    {otherAgent.codename}
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer with Notify Me CTA */}
      <footer className="relative z-10 border-t border-[#00f2ff]/20 mt-16 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-mono text-sm text-gray-500 mb-2">
              AGENT DOSSIER // {agent.codename} // CLASSIFICATION: OPERATIONAL
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
              <span>ID: {agent.designation}</span>
              <span>|</span>
              <span>SPECIALTY: {agent.specialty}</span>
              <span>|</span>
              <span style={{ color: agent.color }}>STATUS: ACTIVE</span>
            </div>
          </div>

          {/* Notify Me CTA */}
          <NotifyMeCTA />

          <p className="text-center font-mono text-xs text-gray-600 mt-8">
            © 2026 M.A.R.C.O. Systems. All agent configurations proprietary.
          </p>
        </div>
      </footer>

      {/* Decorative Corner Elements */}
      <div className="fixed top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-[#00f2ff]/20 pointer-events-none z-20" />
      <div className="fixed top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-[#00f2ff]/20 pointer-events-none z-20" />
      <div className="fixed bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-[#00f2ff]/20 pointer-events-none z-20" />
      <div className="fixed bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#00f2ff]/20 pointer-events-none z-20" />
    </main>
  );
}
