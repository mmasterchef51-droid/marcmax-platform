"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MatrixRain from "@/components/MatrixRain";
import EvolutionTimeline, { LinesOfCodeCounter } from "@/components/EvolutionTimeline";
import {
  Terminal,
  GitBranch,
  Rocket,
  ChevronRight,
  CheckCircle,
  Code2,
  Clock,
  Shield,
} from "lucide-react";

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0">
        <MatrixRain />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
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
                <GitBranch className="w-4 h-4 text-[#00f2ff]" />
                <span className="font-mono text-sm text-[#00f2ff]">
                  LOG FILES
                </span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-glow-cyan tracking-[0.05em] mb-6">
                CHRONOLOGICAL EVOLUTION
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                The complete development history of the M.A.R.C.O. autonomous neural system.
              </p>

              {/* Stats Row */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00f2ff]" />
                  <span className="font-mono text-sm text-gray-400">
                    4 Major Releases
                  </span>
                </div>
                <div className="h-5 w-px bg-[#00f2ff]/20" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ffaa00]" />
                  <span className="font-mono text-sm text-gray-400">
                    4 Months Active Dev
                  </span>
                </div>
                <div className="h-5 w-px bg-[#00f2ff]/20" />
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-green-500" />
                  <span className="font-mono text-sm text-gray-400">
                    Polyglot Stack
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Lines of Code Counter */}
            <LinesOfCodeCounter />

            {/* Timeline */}
            <EvolutionTimeline />
          </div>
        </section>

        {/* Deployment Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative p-8 md:p-12 rounded-2xl border-2 border-[#00f2ff]/40 bg-gradient-to-b from-[#00f2ff]/15 via-[#020617]/90 to-[#020617]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                boxShadow:
                  "0 0 80px rgba(0, 242, 255, 0.2), inset 0 0 60px rgba(0, 242, 255, 0.1)",
              }}
            >
              {/* Status Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-mono text-sm text-green-500">
                    SECTOR 1 COMPLETE
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  READY FOR DEPLOYMENT
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  All systems operational. The M.A.R.C.O. Neural Army is prepared for immediate field deployment.
                </p>
              </div>

              {/* Deployment Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Version", value: "v7.0.0", color: "#00f2ff" },
                  { label: "Status", value: "STABLE", color: "#22c55e" },
                  { label: "Agents", value: "6/6", color: "#ffaa00" },
                  { label: "Models", value: "31", color: "#00f2ff" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span
                      className="font-mono text-2xl font-bold block"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </span>
                    <span className="font-mono text-xs text-gray-500">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/download"
                  className="group relative px-10 py-5 bg-[#00f2ff] text-[#020617] font-mono font-bold text-lg tracking-wider rounded-lg overflow-hidden"
                  style={{
                    boxShadow: "0 0 40px rgba(0, 242, 255, 0.4)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket className="w-5 h-5" />
                    INITIALIZE VERCEL DEPLOYMENT
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                </Link>
              </motion.div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f2ff]/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00f2ff]/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f2ff]/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00f2ff]/50" />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Shield className="w-5 h-5 text-[#00f2ff]" />
              <span className="font-mono text-sm text-gray-400">
                All versions digitally signed and verified. Immutable audit trail maintained.
              </span>
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
