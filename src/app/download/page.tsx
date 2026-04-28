"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpgradeModal from "@/components/UpgradeModal";
import { 
  Shield, Lock, Unlock, Download, AlertTriangle, 
  CheckCircle, Clock, Cpu, FileText, Database, 
  Terminal, Zap, Activity, ChevronRight, 
  Eye, EyeOff, Hash, Server
} from "lucide-react";
import { 
  AccessControl, 
  DEFAULT_SESSION, 
  formatNumber, 
  formatTokens,
  PLANS 
} from "@/lib/plans";

// Downloadable files data
const downloadFiles = [
  {
    id: "neural-core-v7",
    name: "MARCORAEX Neural Core v7.0.0",
    description: "Core orchestration engine with MARCORAEX Logic",
    size: "847 MB",
    hash: "sha256:a7f3c8d9e2b1...",
    version: "7.0.0-stable",
    type: "Core System",
    icon: Cpu,
    requiresTier: 1, // Soldier+
  },
  {
    id: "agent-bundle",
    name: "Neural Army Agent Bundle",
    description: "Complete 25-agent deployment package",
    size: "2.3 GB",
    hash: "sha256:f8e4a2c7b9d5...",
    version: "7.0.0-agents",
    type: "Agent Package",
    icon: Database,
    requiresTier: 1, // Soldier+
  },
  {
    id: "security-modules",
    name: "Tactical Security Modules",
    description: "AES-256 encryption and zero-trust toolkit",
    size: "156 MB",
    hash: "sha256:c9d5e1a3b7f2...",
    version: "7.0.0-security",
    type: "Security",
    icon: Shield,
    requiresTier: 1, // Soldier+
  },
  {
    id: "neural-logs-q1",
    name: "Q1 2026 Neural Operation Logs",
    description: "Comprehensive performance analytics",
    size: "45 MB",
    hash: "sha256:d2e8b5c4a9f1...",
    version: "2026-Q1",
    type: "Analytics",
    icon: Activity,
    requiresTier: 2, // Squad Leader+
  },
  {
    id: "code-exports",
    name: "MARCORAEX Source Code Exports",
    description: "TypeScript/React component library",
    size: "89 MB",
    hash: "sha256:e3f9c6d2a8b4...",
    version: "7.0.0-src",
    type: "Development",
    icon: Terminal,
    requiresTier: 2, // Squad Leader+
  },
  {
    id: "ai-reports",
    name: "Strategic AI Intelligence Reports",
    description: "Market analysis and competitive intelligence",
    size: "12 MB",
    hash: "sha256:b5c1e8f4d9a3...",
    version: "2026-AI-INTEL",
    type: "Intelligence",
    icon: FileText,
    requiresTier: 3, // General+
  },
];

// Scanning line component
function ScanningLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent z-50"
      initial={{ top: "0%", opacity: 0 }}
      animate={{
        top: ["0%", "100%", "100%", "0%", "0%"],
        opacity: [0, 1, 1, 0, 0],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    />
  );
}

export default function DownloadVaultPage() {
  const [isScanning, setIsScanning] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  
  // In production, this would come from context/auth
  const accessControl = new AccessControl(DEFAULT_SESSION);
  const plan = accessControl.getCurrentPlan();
  const isRecruit = plan.tier === 0;
  
  const remainingRequests = accessControl.getRemainingRequests();
  const remainingTokens = accessControl.getRemainingTokens();
  const requestPercent = accessControl.getRequestUsagePercent();
  const tokenPercent = accessControl.getTokenUsagePercent();
  const hasRemainingRequests = remainingRequests > 0 || remainingRequests === Infinity;
  
  // Simulate security scanning on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScanning(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = (fileId: string, requiredTier: number) => {
    if (plan.tier < requiredTier) {
      setSelectedFile(fileId);
      setShowUpgradeModal(true);
    } else if (!hasRemainingRequests) {
      // Show limit reached message
      alert("Daily Request Limit Reached. Operational reset in 18 hours or switch to Pay-As-You-Go.");
    } else {
      // Proceed with download
      alert(`Initiating secure download: ${fileId}`);
    }
  };

  const getFileStatus = (requiredTier: number) => {
    if (plan.tier < requiredTier) {
      return { locked: true, reason: "TIER_LOCKED" };
    }
    if (!hasRemainingRequests) {
      return { locked: true, reason: "LIMIT_REACHED" };
    }
    return { locked: false, reason: null };
  };

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      
      {/* Scanning Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020617] flex items-center justify-center"
          >
            <div className="text-center">
              <ScanningLine delay={0} />
              <ScanningLine delay={0.5} />
              <ScanningLine delay={1} />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 border-4 border-[#00f2ff]/20 border-t-[#00f2ff] rounded-full mx-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-white mb-2">VERIFYING ENCRYPTION KEYS</h2>
              <p className="font-mono text-sm text-[#00f2ff]">Scanning biometric signatures...</p>
              <div className="mt-4 font-mono text-xs text-gray-500">
                <p>Decrypting clearance level...</p>
                <p>Authenticating neural pathway...</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Access Header */}
          <div className="mb-8">
            {/* Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-[#00f2ff]/20 bg-[#020617]/50">
              <div className="flex items-center gap-4">
                <Shield className="w-5 h-5 text-[#00f2ff]" />
                <span className="font-mono text-sm">
                  <span className="text-gray-500">STATUS:</span>
                  <span 
                    className={`ml-2 font-bold ${
                      isRecruit ? "text-yellow-500" : "text-green-500"
                    }`}
                  >
                    {plan.name} {isRecruit ? "(UNVERIFIED)" : "(AUTHORIZED)"}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-gray-500" />
                  <span className="font-mono text-xs text-gray-500">
                    REQUESTS: {remainingRequests === Infinity ? "∞" : remainingRequests}/{plan.dailyRequests === Infinity ? "∞" : plan.dailyRequests}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gray-500" />
                  <span className="font-mono text-xs text-gray-500">
                    TOKENS: {remainingTokens === Infinity ? "∞" : formatTokens(remainingTokens)}
                  </span>
                </div>
              </div>
            </div>

            {/* Warning Banner for Recruit */}
            {isRecruit && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-yellow-500/10 border border-yellow-500/30 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-500 text-sm">OPERATIONAL SECURITY WARNING</p>
                  <p className="text-sm text-gray-400 mt-1">
                    File exports are restricted for unverified trial accounts. 
                    <Link href="/plans" className="text-[#00f2ff] hover:underline ml-1">
                      Upgrade to Soldier tier or higher
                    </Link> to unlock local data extraction.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
              DOWNLOAD VAULT
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Secure data extraction portal. All files are encrypted and verified. 
              Access levels are determined by your current authorization tier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* File List - Main Content */}
            <div className="lg:col-span-3">
              <div className="border border-[#00f2ff]/20 bg-[#020617]/50 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#00f2ff]/20 bg-[#00f2ff]/5 font-mono text-xs text-gray-500">
                  <div className="col-span-5">FILE</div>
                  <div className="col-span-2">TYPE</div>
                  <div className="col-span-2">SIZE</div>
                  <div className="col-span-2">VERSION</div>
                  <div className="col-span-1">ACTION</div>
                </div>

                {/* File Rows */}
                {downloadFiles.map((file, index) => {
                  const status = getFileStatus(file.requiresTier);
                  const Icon = file.icon;
                  
                  return (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`grid grid-cols-12 gap-4 p-4 border-b border-[#00f2ff]/10 items-center hover:bg-[#00f2ff]/5 transition-colors ${
                        status.locked ? "opacity-60" : ""
                      }`}
                    >
                      {/* File Info */}
                      <div className="col-span-5">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                            status.locked ? "border-gray-700 bg-gray-900/30" : "border-[#00f2ff]/30 bg-[#00f2ff]/10"
                          }`}>
                            <Icon className={`w-5 h-5 ${status.locked ? "text-gray-600" : "text-[#00f2ff]"}`} />
                          </div>
                          <div>
                            <p className={`font-medium ${status.locked ? "text-gray-500" : "text-white"}`}>
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">{file.description}</p>
                            {!status.locked && (
                              <p className="text-xs font-mono text-[#00f2ff]/60 mt-1">
                                {file.hash}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Type */}
                      <div className="col-span-2">
                        <span className="font-mono text-xs text-gray-400">{file.type}</span>
                      </div>

                      {/* Size */}
                      <div className="col-span-2">
                        <span className="font-mono text-xs text-gray-400">{file.size}</span>
                      </div>

                      {/* Version */}
                      <div className="col-span-2">
                        {status.locked ? (
                          <span className="font-mono text-xs text-gray-600">--</span>
                        ) : (
                          <span className="font-mono text-xs text-green-500">{file.version}</span>
                        )}
                      </div>

                      {/* Action */}
                      <div className="col-span-1">
                        <button
                          onClick={() => handleDownload(file.id, file.requiresTier)}
                          disabled={!hasRemainingRequests && !status.locked}
                          className={`p-2 rounded-lg transition-all ${
                            status.locked
                              ? "bg-gray-900/50 text-gray-600 border border-gray-800"
                              : hasRemainingRequests
                              ? "bg-[#00f2ff]/20 text-[#00f2ff] border border-[#00f2ff]/30 hover:bg-[#00f2ff]/30"
                              : "bg-red-900/20 text-red-500 border border-red-500/30"
                          }`}
                        >
                          {status.locked ? (
                            <Lock className="w-4 h-4" />
                          ) : !hasRemainingRequests ? (
                            <AlertTriangle className="w-4 h-4" />
                          ) : (
                            <Download className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Limit Reached Banner */}
              {!hasRemainingRequests && !isRecruit && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-500">DAILY REQUEST LIMIT REACHED</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Operational reset in <span className="text-white">18 hours 42 minutes</span> or 
                        <Link href="/plans" className="text-[#00f2ff] hover:underline ml-1">
                          switch to Pay-As-You-Go
                        </Link> for unlimited access.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Usage Shield Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Clearance Card */}
                <div className="p-4 border border-[#00f2ff]/20 bg-[#020617]/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-[#00f2ff]" />
                    <span className="font-mono text-xs text-gray-500">CLEARANCE LEVEL</span>
                  </div>
                  <p className={`text-2xl font-bold ${isRecruit ? "text-yellow-500" : "text-green-500"}`}>
                    {plan.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {isRecruit ? "Limited Access" : "Full Authorization"}
                  </p>
                </div>

                {/* Requests Card */}
                <div className="p-4 border border-[#00f2ff]/20 bg-[#020617]/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-4 h-4 text-gray-500" />
                    <span className="font-mono text-xs text-gray-500">REMAINING REQUESTS</span>
                  </div>
                  <p className={`text-3xl font-bold ${
                    remainingRequests === 0 ? "text-red-500" : remainingRequests < 5 ? "text-yellow-500" : "text-[#00f2ff]"
                  }`}>
                    {remainingRequests === Infinity ? "∞" : remainingRequests}
                  </p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          requestPercent > 75 ? "bg-red-500" : requestPercent > 50 ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(requestPercent, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {requestPercent.toFixed(0)}% of daily limit used
                    </p>
                  </div>
                </div>

                {/* Tokens Card */}
                <div className="p-4 border border-[#00f2ff]/20 bg-[#020617]/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-gray-500" />
                    <span className="font-mono text-xs text-gray-500">TOKEN BALANCE</span>
                  </div>
                  <p className={`text-3xl font-bold ${
                    tokenPercent > 90 ? "text-red-500" : tokenPercent > 75 ? "text-yellow-500" : "text-[#00f2ff]"
                  }`}>
                    {remainingTokens === Infinity ? "∞" : formatTokens(remainingTokens)}
                  </p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          tokenPercent > 90 ? "bg-red-500" : tokenPercent > 75 ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(tokenPercent, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {tokenPercent.toFixed(0)}% of daily capacity used
                    </p>
                  </div>
                </div>

                {/* Reset Timer */}
                <div className="p-4 border border-gray-800 bg-[#020617]/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="font-mono text-xs text-gray-600">RESET IN</span>
                  </div>
                  <p className="font-mono text-lg text-gray-400">18h 42m</p>
                </div>

                {/* Upgrade CTA */}
                {isRecruit && (
                  <Link
                    href="/plans"
                    className="block w-full py-3 bg-[#00f2ff] text-[#020617] font-mono text-sm font-semibold text-center hover:bg-[#00f2ff]/80 transition-colors"
                  >
                    UNLOCK DOWNLOADS →
                  </Link>
                )}

                {/* Server Status */}
                <div className="p-3 border border-green-500/20 bg-green-500/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-green-500" />
                    <span className="font-mono text-xs text-green-500">SERVERS OPERATIONAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        feature="Secure File Downloads"
        requiredTier="soldier"
      />
    </main>
  );
}
