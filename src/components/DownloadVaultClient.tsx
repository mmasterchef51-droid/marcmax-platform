"use client";

import { useState } from "react";
import Link from "next/link";
import UpgradeModal from "./UpgradeModal";
import { 
  Lock, Download, AlertTriangle, 
  Cpu, Database, Shield, Activity, Terminal, FileText
} from "lucide-react";

interface DownloadVaultClientProps {
  planTier: number;
  remainingRequests: number | typeof Infinity;
}

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
    requiresTier: 1,
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
    requiresTier: 1,
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
    requiresTier: 1,
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
    requiresTier: 2,
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
    requiresTier: 2,
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
    requiresTier: 3,
  },
];

export default function DownloadVaultClient({ planTier, remainingRequests }: DownloadVaultClientProps) {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const hasRemainingRequests = remainingRequests > 0 || remainingRequests === Infinity;

  const getFileStatus = (requiredTier: number) => {
    if (planTier < requiredTier) {
      return { locked: true, reason: "TIER_LOCKED" };
    }
    if (!hasRemainingRequests) {
      return { locked: true, reason: "LIMIT_REACHED" };
    }
    return { locked: false, reason: null };
  };

  const handleDownload = (fileId: string, requiredTier: number) => {
    if (planTier < requiredTier) {
      setShowUpgradeModal(true);
    } else if (!hasRemainingRequests) {
      alert("Daily Request Limit Reached. Operational reset in 18 hours or switch to Pay-As-You-Go.");
    } else {
      alert(`Initiating secure download: ${fileId}`);
    }
  };

  return (
    <>
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
        {downloadFiles.map((file) => {
          const status = getFileStatus(file.requiresTier);
          const Icon = file.icon;
          
          return (
            <div
              key={file.id}
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
            </div>
          );
        })}
      </div>

      {/* Limit Reached Banner */}
      {!hasRemainingRequests && planTier > 0 && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
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
        </div>
      )}

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        feature="Secure File Downloads"
        requiredTier="soldier"
      />
    </>
  );
}
