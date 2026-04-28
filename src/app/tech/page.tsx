"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CircuitBoard from "@/components/CircuitBoard";
import LanguageTrinity from "@/components/LanguageTrinity";
import ModelRegistry from "@/components/ModelRegistry";
import SystemCapabilities from "@/components/SystemCapabilities";
import HardwareGovernor from "@/components/HardwareGovernor";
import { Cog, Shield, ArrowRight, Cpu, Lock, Server } from "lucide-react";

// Diagnostic Scan Line Component
function DiagnosticScan({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent pointer-events-none z-30"
      initial={{ top: "0%", opacity: 0 }}
      animate={{
        top: ["0%", "100%", "100%", "0%", "0%"],
        opacity: [0, 1, 1, 0, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      style={{
        boxShadow: "0 0 20px rgba(0, 242, 255, 0.8), 0 0 40px rgba(0, 242, 255, 0.4)",
      }}
    />
  );
}

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Circuit Board Background */}
      <div className="fixed inset-0 z-0">
        <CircuitBoard />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
          {/* Diagnostic Scan Effects */}
          <DiagnosticScan delay={0} />
          <DiagnosticScan delay={2} />

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f2ff]/30 bg-[#00f2ff]/5 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Lock className="w-4 h-4 text-[#00f2ff]" />
                <span className="font-mono text-sm text-[#00f2ff]">
                  PRIVATE & SECURE
                </span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-glow-cyan tracking-[0.05em] mb-6">
                CAPABILITIES CORE
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                MARCORAEX proprietary neural architecture. All processing occurs on secure, private MARCORAEX servers.
              </p>
              <p className="text-sm text-[#00f2ff]/70 font-mono max-w-2xl mx-auto mb-8">
                Zero third-party dependencies. Zero external API calls. 100% data sovereignty.
              </p>

              {/* System Stats */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">
                    3
                  </span>
                  <p className="font-mono text-xs text-gray-500 mt-1">
                    CORE LANGUAGES
                  </p>
                </div>
                <div className="h-10 w-px bg-[#00f2ff]/20" />
                <div className="text-center">
                  <span className="font-mono text-3xl font-bold text-[#ffaa00]">
                    31+
                  </span>
                  <p className="font-mono text-xs text-gray-500 mt-1">
                    NEURAL CONFIGURATIONS
                  </p>
                </div>
                <div className="h-10 w-px bg-[#00f2ff]/20" />
                <div className="text-center">
                  <span className="font-mono text-3xl font-bold text-green-500">
                    50ms
                  </span>
                  <p className="font-mono text-xs text-gray-500 mt-1">
                    AVG LATENCY
                  </p>
                </div>
                <div className="h-10 w-px bg-[#00f2ff]/20" />
                <div className="text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">
                    100%
                  </span>
                  <p className="font-mono text-xs text-gray-500 mt-1">
                    PRIVATE
                  </p>
                </div>
              </motion.div>

              {/* Private Server Banner */}
              <motion.div
                className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-green-500/30 bg-green-500/10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Server className="w-5 h-5 text-green-500" />
                <span className="font-mono text-sm text-green-500">
                  ALL MODELS RUN ON SECURE, PRIVATE MARCORAEX SERVERS
                </span>
                <Lock className="w-4 h-4 text-green-500" />
              </motion.div>
            </motion.div>

            {/* Blueprint Lines Decoration */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 50 Q 25 25, 50 50 T 100 50"
                stroke="#00f2ff"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1 }}
              />
            </svg>
          </div>
        </section>

        {/* Language Trinity Section */}
        <LanguageTrinity />

        {/* Neural Engine Section (formerly Model Registry) */}
        <ModelRegistry />

        {/* System Capabilities Section */}
        <SystemCapabilities />

        {/* Hardware Governor Section */}
        <HardwareGovernor />

        {/* Footer CTA */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="font-mono text-sm text-green-500">
                  ALL SYSTEMS VERIFIED
                </span>
              </div>

              <p className="font-mono text-2xl md:text-3xl font-bold text-white mb-2">
                MARCORAEX NEURAL ARCHITECTURE v7.0.0
              </p>
              <p className="font-mono text-sm text-gray-500">
                PRIVATE • SECURE • SOVEREIGN
              </p>
            </motion.div>

            {/* Next Page Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/safety"
                className="group flex items-center gap-3 px-8 py-4 border border-[#00f2ff]/50 rounded-none font-mono text-sm text-[#00f2ff] hover:bg-[#00f2ff]/10 transition-all duration-300 btn-glow-cyan"
              >
                <Cpu className="w-4 h-4" />
                <span>Next: Operational Safety</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Decorative Corner Elements */}
        <div className="fixed top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-[#00f2ff]/20 pointer-events-none z-20" />
        <div className="fixed top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-[#00f2ff]/20 pointer-events-none z-20" />
        <div className="fixed bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-[#00f2ff]/20 pointer-events-none z-20" />
        <div className="fixed bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#00f2ff]/20 pointer-events-none z-20" />
      </div>
    </main>
  );
}
