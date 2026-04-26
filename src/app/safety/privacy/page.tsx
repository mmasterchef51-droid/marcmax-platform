"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SafetyNav from "@/components/SafetyNav";
import ShieldWatermark from "@/components/ShieldWatermark";
import {
  Lock,
  HardDrive,
  Server,
  CloudOff,
  Shield,
  CheckCircle,
  FileKey,
  Database,
  Folder,
  ArrowRight,
  Fingerprint,
} from "lucide-react";

const dataLocations = [
  {
    os: "Windows",
    path: "%LOCALAPPDATA%\\M.A.R.C.O.\\",
    items: ["Session Logs", "Vector DB", "Config Files", "Cache"],
    icon: "C:\\",
  },
  {
    os: "macOS",
    path: "~/Library/Application Support/M.A.R.C.O./",
    items: ["Session Logs", "Vector DB", "Config Files", "Cache"],
    icon: "~/",
  },
  {
    os: "Linux",
    path: "~/.local/share/marco/",
    items: ["Session Logs", "Vector DB", "Config Files", "Cache"],
    icon: "~/",
  },
];

// Data flow diagram component
function DataFlowDiagram() {
  return (
    <div className="p-6 rounded-xl border border-[#00f2ff]/30 bg-[#00f2ff]/5">
      <h3 className="font-mono text-sm text-[#00f2ff] mb-6 text-center">LOCAL-FIRST ARCHITECTURE</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* User */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-[#00f2ff]/40 bg-[#00f2ff]/10 flex items-center justify-center mb-2">
            <Fingerprint className="w-8 h-8 text-[#00f2ff]" />
          </div>
          <span className="font-mono text-xs text-gray-400">COMMANDER</span>
        </motion.div>

        {/* Arrow */}
        <motion.div 
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-16 h-[2px] bg-[#00f2ff]/30" />
          <Lock className="w-4 h-4 text-[#00f2ff]" />
          <div className="w-16 h-[2px] bg-[#00f2ff]/30" />
        </motion.div>

        {/* Local Core */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-20 h-20 rounded-lg border-2 border-[#00f2ff]/40 bg-[#00f2ff]/10 flex items-center justify-center mb-2">
            <HardDrive className="w-10 h-10 text-[#00f2ff]" />
          </div>
          <span className="font-mono text-xs text-[#00f2ff]">LOCAL CORE</span>
          <span className="font-mono text-[10px] text-gray-500 block">100% On-Device</span>
        </motion.div>

        {/* Arrow with Firewall */}
        <motion.div 
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-8 h-[2px] bg-[#ffaa00]/30" />
          <div className="px-3 py-1 rounded border border-[#ffaa00]/40 bg-[#ffaa00]/10">
            <span className="font-mono text-xs text-[#ffaa00]">FIREWALL</span>
          </div>
          <div className="w-8 h-[2px] bg-[#ffaa00]/30" />
        </motion.div>

        {/* AI APIs */}
        <motion.div 
          className="text-center opacity-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center mb-2">
            <CloudOff className="w-8 h-8 text-gray-500" />
          </div>
          <span className="font-mono text-xs text-gray-500">CLOUD APIs</span>
          <span className="font-mono text-[10px] text-gray-600 block">Stateless Only</span>
        </motion.div>
      </div>

      {/* Data Labels */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Session Logs", icon: FileKey, color: "#00f2ff" },
          { label: "Vector Embeddings", icon: Database, color: "#ffaa00" },
          { label: "Mission Files", icon: Folder, color: "#22c55e" },
          { label: "Config Data", icon: Server, color: "#0066ff" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={item.label}
              className="flex items-center gap-2 p-2 rounded bg-[#020617]/50 border border-[#00f2ff]/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <Icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="font-mono text-xs text-gray-300">{item.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
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
                  <Lock className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">YOUR DATA, YOUR MACHINE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "0 0 40px #00f2ff50" }}>
                  PRIVACY & DATA SOVEREIGNTY
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  M.A.R.C.O. is a standalone desktop application. All your data—including session logs, 
                  vector embeddings, and mission files—stays exclusively on your local machine. 
                  We never see, store, or access your data.
                </p>
              </motion.div>

              {/* Data Flow Diagram */}
              <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <DataFlowDiagram />
              </motion.div>

              {/* Storage Locations */}
              <motion.div
                className="mb-8 p-6 rounded-xl border border-[#0066ff]/30 bg-[#0066ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <HardDrive className="w-5 h-5 text-[#0066ff]" />
                  LOCAL STORAGE PATHS
                </h2>
                <div className="space-y-4">
                  {dataLocations.map((loc, index) => (
                    <motion.div
                      key={loc.os}
                      className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#020617]/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm text-[#0066ff] font-bold">{loc.os}</span>
                        <code className="font-mono text-xs text-gray-400 bg-[#020617] px-2 py-1 rounded">{loc.path}</code>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {loc.items.map((item) => (
                          <span key={item} className="font-mono text-xs px-2 py-1 rounded bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Privacy Guarantees */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { icon: CloudOff, title: "Zero Cloud Storage", desc: "No data ever leaves your machine", color: "#00f2ff" },
                  { icon: FileKey, title: "AES-256 Encryption", desc: "All logs encrypted at rest", color: "#ffaa00" },
                  { icon: Server, title: "No Telemetry", desc: "We don't track usage or crashes", color: "#22c55e" },
                  { icon: Shield, title: "Open Source", desc: "Auditable by security researchers", color: "#0066ff" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5 flex items-start gap-3">
                      <Icon className="w-5 h-5 flex-shrink-0" style={{ color: item.color }} />
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Stats */}
              <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <HardDrive className="w-5 h-5 text-[#00f2ff] mx-auto mb-2" />
                  <span className="font-mono text-xl font-bold text-white">100%</span>
                  <p className="font-mono text-xs text-gray-500">Local Storage</p>
                </div>
                <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 text-center">
                  <Lock className="w-5 h-5 text-[#ffaa00] mx-auto mb-2" />
                  <span className="font-mono text-xl font-bold text-white">AES-256</span>
                  <p className="font-mono text-xs text-gray-500">Encryption</p>
                </div>
                <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
                  <CloudOff className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <span className="font-mono text-xl font-bold text-white">Zero</span>
                  <p className="font-mono text-xs text-gray-500">Cloud Sync</p>
                </div>
                <div className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5 text-center">
                  <Shield className="w-5 h-5 text-[#0066ff] mx-auto mb-2" />
                  <span className="font-mono text-xl font-bold text-white">Full</span>
                  <p className="font-mono text-xs text-gray-500">Data Control</p>
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
          <span className="font-mono text-xs text-gray-500">Local-First • Encrypted • Sovereign</span>
        </div>
      </div>
    </main>
  );
}
