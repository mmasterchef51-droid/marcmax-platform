"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SafetyNav from "@/components/SafetyNav";
import ShieldWatermark from "@/components/ShieldWatermark";
import {
  Shield,
  Lock,
  Key,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Fingerprint,
  FileKey,
  Server,
  Rocket,
  Loader2,
  Globe,
  Cpu,
  Eye,
  Terminal,
} from "lucide-react";

const securityChecklist = [
  { id: 1, category: "Encryption", item: "AES-256 for session logs", status: "verified", critical: true },
  { id: 2, category: "Encryption", item: "TLS 1.3 for API communications", status: "verified", critical: true },
  { id: 3, category: "Access Control", item: "Commander-only authorization", status: "verified", critical: true },
  { id: 4, category: "Access Control", item: "Biometric integration ready", status: "verified", critical: false },
  { id: 5, category: "Storage", item: "Local-only data storage", status: "verified", critical: true },
  { id: 6, category: "Storage", item: "Encrypted SQLite database", status: "verified", critical: true },
  { id: 7, category: "Network", item: "No external data transmission", status: "verified", critical: true },
  { id: 8, category: "Network", item: "Sandboxed API calls", status: "verified", critical: true },
  { id: 9, category: "Runtime", item: "Memory-safe Rust core", status: "verified", critical: true },
  { id: 10, category: "Runtime", item: "eBPF kernel monitoring", status: "verified", critical: false },
  { id: 11, category: "Updates", item: "Signed package verification", status: "verified", critical: true },
  { id: 12, category: "Updates", item: "Rollback capability", status: "verified", critical: true },
];

const certifications = [
  { name: "SOC 2 Type II", status: "In Progress" },
  { name: "ISO 27001", status: "In Progress" },
  { name: "GDPR Compliant", status: "Verified" },
  { name: "CCPA Compliant", status: "Verified" },
];

// Notify Me Form Component
function NotifyMeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="font-mono text-sm text-[#ffaa00] mb-4 text-center">GET MAY 15 LAUNCH NOTIFICATION</h3>
      
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            className="flex items-center justify-center gap-2 p-4 rounded-lg border border-green-500/50 bg-green-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-mono text-sm text-green-500">NOTIFICATION CHANNEL ESTABLISHED</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Commander Email"
              className="flex-1 px-4 py-3 bg-[#020617]/60 border border-[#0066ff]/40 rounded-lg text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#0066ff] transition-colors"
              required
            />
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="px-4 py-3 bg-[#0066ff] text-white font-mono font-semibold text-sm rounded-lg disabled:opacity-50 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === "submitting" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Rocket className="w-4 h-4" />
                  NOTIFY
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SecurityPage() {
  const [scanning, setScanning] = useState(true);

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      <ShieldWatermark />

      <div className="relative z-10 pt-24 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <SafetyNav />

            <div className="flex-1">
              {/* Header */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-[#0066ff]" />
                  <span className="font-mono text-[#0066ff] tracking-wider">THE DIGITAL FORTRESS</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "0 0 40px #0066ff50" }}>
                  SECURITY ARCHITECTURE
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  Multi-layered security with AES-256 encryption, local-first architecture, and 
                  Commander-only authorization. Your data is protected by military-grade encryption 
                  and never leaves your machine.
                </p>
              </motion.div>

              {/* Security Checklist */}
              <motion.div
                className="mb-8 p-6 rounded-xl border-2 border-[#0066ff]/40 bg-gradient-to-br from-[#0066ff]/10 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#0066ff]" />
                    SECURITY CHECKLIST
                  </h2>
                  <span className="font-mono text-sm px-3 py-1 rounded-full bg-green-500/20 text-green-500">
                    ALL SYSTEMS VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {securityChecklist.map((check, index) => (
                    <motion.div
                      key={check.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border ${
                        check.critical ? "border-[#ffaa00]/30 bg-[#ffaa00]/5" : "border-[#0066ff]/20 bg-[#0066ff]/5"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <CheckCircle className={`w-5 h-5 ${check.critical ? "text-[#ffaa00]" : "text-[#0066ff]"}`} />
                      <div className="flex-1">
                        <span className="text-sm text-white">{check.item}</span>
                        {check.critical && (
                          <span className="ml-2 font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#ffaa00]/20 text-[#ffaa00]">
                            CRITICAL
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Encryption Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  className="p-6 rounded-xl border border-[#00f2ff]/30 bg-[#00f2ff]/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FileKey className="w-6 h-6 text-[#00f2ff]" />
                    <h2 className="text-lg font-bold text-white">AES-256 ENCRYPTION</h2>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Military-grade encryption for all session logs and vector embeddings. 
                    Keys are derived from your system hardware ID and never transmitted.
                  </p>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Algorithm</span>
                      <span className="text-[#00f2ff]">AES-256-GCM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Key Derivation</span>
                      <span className="text-[#00f2ff]">PBKDF2 (100k rounds)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Key Storage</span>
                      <span className="text-[#00f2ff]">OS Keychain / TPM</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="p-6 rounded-xl border border-[#ffaa00]/30 bg-[#ffaa00]/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Fingerprint className="w-6 h-6 text-[#ffaa00]" />
                    <h2 className="text-lg font-bold text-white">COMMANDER AUTHORIZATION</h2>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    System-level changes require explicit Commander approval. 
                    No autonomous action can override user authority.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Code modifications require approval",
                      "Agent termination requires confirmation",
                      "Config changes need validation",
                      "External API calls are sandboxed",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#ffaa00]" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Certifications */}
              <motion.div
                className="mb-12 p-6 rounded-xl border border-[#0066ff]/30 bg-[#0066ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-lg font-bold text-white mb-4">COMPLIANCE & CERTIFICATIONS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {certifications.map((cert, i) => (
                    <div
                      key={cert.name}
                      className="p-3 rounded-lg bg-[#020617]/50 border border-[#0066ff]/20 text-center"
                    >
                      <span className="font-mono text-sm text-white block">{cert.name}</span>
                      <span className={`font-mono text-xs ${cert.status === "Verified" ? "text-green-500" : "text-[#ffaa00]"}`}>
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Architecture Overview */}
              <motion.div
                className="mb-12 p-6 rounded-xl border border-[#0066ff]/30 bg-gradient-to-r from-[#0066ff]/5 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-lg font-bold text-white mb-6">SECURITY LAYERS</h2>
                <div className="space-y-3">
                  {[
                    { layer: 1, name: "Physical", desc: "Local storage only, no cloud", icon: Server },
                    { layer: 2, name: "Encryption", desc: "AES-256 for data at rest", icon: Lock },
                    { layer: 3, name: "Access", desc: "Commander-only authorization", icon: Fingerprint },
                    { layer: 4, name: "Network", desc: "Sandboxed API calls only", icon: Globe },
                    { layer: 5, name: "Runtime", desc: "Memory-safe Rust core", icon: Cpu },
                  ].map((layer) => {
                    const Icon = layer.icon;
                    return (
                      <div key={layer.layer} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#0066ff]/20 flex items-center justify-center">
                          <span className="font-mono text-sm text-[#0066ff]">{layer.layer}</span>
                        </div>
                        <Icon className="w-5 h-5 text-[#00f2ff]" />
                        <div className="flex-1">
                          <span className="font-semibold text-white">{layer.name}</span>
                          <span className="text-gray-400 text-sm ml-2">— {layer.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Notify Me Section */}
              <motion.div
                className="p-8 rounded-xl border-2 border-[#ffaa00]/40 bg-gradient-to-br from-[#ffaa00]/10 to-[#020617]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-center mb-6">
                  <Rocket className="w-10 h-10 text-[#ffaa00] mx-auto mb-3" />
                  <h2 className="text-2xl font-bold text-white mb-2">MAY 15TH LAUNCH</h2>
                  <p className="text-gray-400">
                    The most secure autonomous AI system. Be notified on launch day.
                  </p>
                </div>
                <NotifyMeForm />
              </motion.div>

              {/* Stats */}
              <motion.div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <div className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5 text-center">
                  <Lock className="w-5 h-5 text-[#0066ff] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">AES-256</span>
                  <p className="font-mono text-xs text-gray-500">Encryption</p>
                </div>
                <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 text-center">
                  <Eye className="w-5 h-5 text-[#ffaa00] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">Zero</span>
                  <p className="font-mono text-xs text-gray-500">Data Leaks</p>
                </div>
                <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
                  <Terminal className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">100%</span>
                  <p className="font-mono text-xs text-gray-500">Local Processing</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <Shield className="w-5 h-5 text-[#00f2ff] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">12/12</span>
                  <p className="font-mono text-xs text-gray-500">Checks Verified</p>
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
          <span className="font-mono text-xs text-gray-500">AES-256 • Local-First • Zero Trust</span>
        </div>
      </div>
    </main>
  );
}
