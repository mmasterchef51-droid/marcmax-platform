"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RadarSweep from "@/components/RadarSweep";
import ThermalDashboard from "@/components/ThermalDashboard";
import DataIsolation from "@/components/DataIsolation";
import SelfImprovement from "@/components/SelfImprovement";
import SecurityClearance from "@/components/SecurityClearance";
import { Shield, Lock, Fingerprint, ArrowRight, AlertTriangle } from "lucide-react";

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Radar Sweep Background */}
      <div className="fixed inset-0 z-0">
        <RadarSweep />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Security Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0066ff]/30 bg-[#0066ff]/5 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Shield className="w-4 h-4 text-[#0066ff]" />
                <span className="font-mono text-sm text-[#0066ff]">
                  SECURE VAULT
                </span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-glow-cyan tracking-[0.05em] mb-6">
                OPERATIONAL SAFETY
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Multi-layered security architecture protecting both hardware integrity and data sovereignty.
              </p>

              {/* Status Bar */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-mono text-sm text-green-500">
                    PROTECTED
                  </span>
                </div>
                <div className="h-6 w-px bg-[#0066ff]/20" />
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#0066ff]" />
                  <span className="font-mono text-sm text-[#0066ff]">
                    ENCRYPTED
                  </span>
                </div>
                <div className="h-6 w-px bg-[#0066ff]/20" />
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#ffaa00]" />
                  <span className="font-mono text-sm text-[#ffaa00]">
                    MONITORED
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Thermal Dashboard Section */}
        <ThermalDashboard />

        {/* Data Isolation Section */}
        <DataIsolation />

        {/* Self Improvement Section */}
        <SelfImprovement />

        {/* Security Clearance Section */}
        <SecurityClearance />

        {/* Footer Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Fingerprint className="w-6 h-6 text-[#0066ff]" />
                <span className="font-mono text-sm text-[#0066ff]">
                  ALL PROTOCOLS VERIFIED
                </span>
              </div>

              <p className="font-mono text-2xl md:text-3xl font-bold text-white mb-2">
                SECURITY ARCHITECTURE v7.0.0
              </p>
              <p className="font-mono text-sm text-gray-500">
                FAILSAFE ACTIVE
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/download"
                className="group flex items-center gap-3 px-8 py-4 border border-[#0066ff]/50 rounded-none font-mono text-sm text-[#0066ff] hover:bg-[#0066ff]/10 transition-all duration-300 btn-glow-cyan"
              >
                <Shield className="w-4 h-4" />
                <span>VIEW RELEASE SCHEDULE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Decorative Corner Elements */}
        <div className="fixed top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-[#0066ff]/20 pointer-events-none z-20" />
        <div className="fixed top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-[#0066ff]/20 pointer-events-none z-20" />
        <div className="fixed bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-[#0066ff]/20 pointer-events-none z-20" />
        <div className="fixed bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#0066ff]/20 pointer-events-none z-20" />
      </div>
    </main>
  );
}
