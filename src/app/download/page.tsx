"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import GlowingGrid from "@/components/GlowingGrid";
import {
  Rocket,
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu,
  HardDrive,
  MemoryStick,
  Monitor,
  Shield,
  Zap,
  ArrowRight,
  Loader2,
  Download,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HRS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEC" },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4 justify-center">
      {timeBlocks.map((block, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="text-center">
            <div className="bg-[#020617]/80 border border-[#ffaa00]/30 rounded px-2 py-1 md:px-3 md:py-2 min-w-[50px] md:min-w-[60px]">
              <span className="font-mono text-xl md:text-2xl font-bold text-[#ffaa00]">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#ffaa00]/60 block mt-1">
              {block.label}
            </span>
          </div>
          {index < timeBlocks.length - 1 && (
            <span className="font-mono text-xl md:text-2xl text-[#ffaa00]/40">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

// Lead Capture Form
function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Commander Email"
                className="w-full px-4 py-4 bg-[#020617]/60 border-2 border-[#00f2ff]/40 rounded-lg text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#00f2ff] focus:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all"
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Shield className="w-5 h-5 text-[#00f2ff]/40" />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full group relative px-6 py-4 bg-[#00f2ff] text-[#020617] font-mono font-semibold text-sm tracking-wider rounded-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    VERIFYING...
                  </>
                ) : (
                  <>
                    <Rocket className="w-4 h-4" />
                    SIGN UP FOR MARCMAX SAAS LAUNCH
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="p-6 rounded-lg border-2 border-green-500/50 bg-green-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <CheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">
                ACCESS GRANTED
              </h3>
              <p className="font-mono text-sm text-green-400 mb-2">
                NOTIFICATION CHANNEL ESTABLISHED
              </p>
              <p className="text-xs text-gray-400">
                Sign up for the MARCMAX SaaS Launch & MARCO Installer Deployment — 15 MAY 2026.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// System Requirements
function SystemRequirements() {
  const requirements = [
    { icon: Monitor, label: "OS", value: "Windows 10/11 (NSIS), macOS (DMG)" },
    { icon: Cpu, label: "CPU", value: "AVX2 Instruction Support Required" },
    { icon: MemoryStick, label: "Memory", value: "8GB RAM Minimum" },
    { icon: HardDrive, label: "Disk", value: "1.2GB Production Build" },
  ];

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="p-6 rounded-lg border border-[#00f2ff]/20 bg-gradient-to-r from-[#00f2ff]/5 via-transparent to-[#00f2ff]/5">
        <h3 className="font-mono text-sm text-[#00f2ff]/80 uppercase tracking-wider mb-4 text-center">
          System Requirements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div
                key={req.label}
                className="text-center p-3 rounded bg-[#020617]/50 border border-[#00f2ff]/10"
              >
                <Icon className="w-5 h-5 text-[#00f2ff]/60 mx-auto mb-2" />
                <span className="font-mono text-xs text-gray-500 block">
                  {req.label}
                </span>
                <span className="font-mono text-xs text-gray-300">
                  {req.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// Main Page Component
export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Glowing Grid Background */}
      <div className="fixed inset-0 z-0">
        <GlowingGrid />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Deployment Panel */}
            <motion.div
              className="relative p-8 md:p-12 rounded-2xl border-2 border-[#ffaa00]/40 bg-gradient-to-b from-[#ffaa00]/10 via-[#020617]/80 to-[#020617]/90 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                boxShadow:
                  "0 0 60px rgba(255, 170, 0, 0.15), inset 0 0 40px rgba(255, 170, 0, 0.05)",
              }}
            >
              {/* Scanning Effect Overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    boxShadow: "0 0 30px rgba(0, 242, 255, 0.8)",
                  }}
                />
              </motion.div>

              {/* Status Header */}
              <motion.div
                className="flex items-center justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-[#ffaa00]"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-mono text-sm text-[#ffaa00] tracking-wider">
                  DEPLOYMENT STATUS: STAGING
                </span>
              </motion.div>

              {/* Main Title with Icon */}
              <div className="text-center mb-6">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#00f2ff]/40 bg-[#00f2ff]/10 mb-6 relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Download className="w-10 h-10 text-[#00f2ff]" />
                  {/* Scanning ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#00f2ff]/30"
                    animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h1 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan tracking-wider mb-4">
                  MARCMAX SAAS INSTALLER
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                  The 24/7 Autonomous Neural Army is undergoing final combat
                  readiness checks.
                </p>
              </div>

              {/* May 15 Milestone */}
              <motion.div
                className="mb-8 p-6 rounded-xl border border-[#ffaa00]/30 bg-[#ffaa00]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Countdown */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-[#ffaa00]" />
                      <span className="font-mono text-xs text-[#ffaa00] uppercase">
                        Target Date
                      </span>
                    </div>
                    <p className="font-mono text-2xl md:text-3xl font-bold text-[#ffaa00] mb-2">
                      15 MAY 2026
                    </p>
                    <CountdownTimer />
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-gray-400">
                        Combat Readiness
                      </span>
                      <span className="font-mono text-sm text-[#00f2ff] font-bold">
                        92%
                      </span>
                    </div>
                    <div className="h-3 bg-[#020617] rounded-full overflow-hidden border border-[#00f2ff]/20">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00f2ff] to-[#00f2ff]/50"
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 2, delay: 0.8 }}
                        style={{
                          boxShadow: "0 0 20px rgba(0, 242, 255, 0.5)",
                        }}
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Loader2 className="w-3 h-3 text-[#ffaa00] animate-spin" />
                      <span className="font-mono text-xs text-[#ffaa00]/80">
                        Calibrating Neural Weights...
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Lead Capture Form */}
              <div className="mb-8">
                <LeadCaptureForm />
              </div>

              {/* System Requirements */}
              <SystemRequirements />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#ffaa00]/50" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ffaa00]/50" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ffaa00]/50" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ffaa00]/50" />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Shield className="w-5 h-5 text-[#00f2ff]" />
              <span className="font-mono text-sm text-[#00f2ff]">
                SECURE DISTRIBUTION PROTOCOL ACTIVE
              </span>
            </motion.div>

            <p className="font-mono text-xs text-gray-500">
              © 2026 M.A.R.C.O. Systems. All deployments verified and signed.
            </p>
          </div>
        </section>

        {/* Decorative Corner Elements */}
        <div className="fixed top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-[#ffaa00]/20 pointer-events-none z-20" />
        <div className="fixed top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-[#ffaa00]/20 pointer-events-none z-20" />
        <div className="fixed bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-[#ffaa00]/20 pointer-events-none z-20" />
        <div className="fixed bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#ffaa00]/20 pointer-events-none z-20" />
      </div>
    </main>
  );
}
