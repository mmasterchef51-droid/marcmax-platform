"use client";

import { useState } from "react";
import { Lock, Download, AlertTriangle, ArrowRight } from "lucide-react";
import { AccessControl, DEFAULT_SESSION } from "@/lib/plans";
import UpgradeModal from "./UpgradeModal";

interface DownloadManagerProps {
  fileName?: string;
  fileSize?: string;
  onDownload?: () => void;
  variant?: "button" | "card" | "minimal";
}

export default function DownloadManager({
  fileName = "MARCORAEX Deployment Package",
  fileSize = "127 MB",
  onDownload,
  variant = "button",
}: DownloadManagerProps) {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  
  // In production, this would come from context/auth
  const accessControl = new AccessControl(DEFAULT_SESSION);
  const canDownload = accessControl.canDownload();

  const handleDownload = () => {
    if (canDownload) {
      onDownload?.();
    } else {
      setShowUpgradeModal(true);
    }
  };

  if (variant === "minimal") {
    return (
      <>
        <button
          onClick={handleDownload}
          className={`flex items-center gap-2 text-sm font-mono transition-colors ${
            canDownload
              ? "text-[#00f2ff] hover:text-[#00f2ff]/80"
              : "text-gray-500 hover:text-gray-400"
          }`}
        >
          {canDownload ? (
            <Download className="w-4 h-4" />
          ) : (
            <Lock className="w-4 h-4" />
          )}
          {canDownload ? "Download" : "Locked"}
        </button>
        <UpgradeModal
          isOpen={showUpgradeModal}
          onClose={() => setShowUpgradeModal(false)}
          feature="Download Access"
          requiredTier="soldier"
        />
      </>
    );
  }

  if (variant === "card") {
    return (
      <>
        <div
          className={`p-4 rounded-lg border ${
            canDownload
              ? "border-[#00f2ff]/20 bg-[#00f2ff]/5"
              : "border-gray-700 bg-gray-900/30"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  canDownload
                    ? "bg-[#00f2ff]/20 text-[#00f2ff]"
                    : "bg-gray-800 text-gray-600"
                }`}
              >
                {canDownload ? (
                  <Download className="w-5 h-5" />
                ) : (
                  <Lock className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className={`font-medium ${canDownload ? "text-white" : "text-gray-500"}`}>
                  {fileName}
                </p>
                <p className="text-sm text-gray-500">{fileSize}</p>
              </div>
            </div>
            <button
              onClick={handleDownload}
              disabled={!canDownload}
              className={`px-4 py-2 rounded font-mono text-sm transition-colors flex items-center gap-2 ${
                canDownload
                  ? "bg-[#00f2ff] text-[#020617] hover:bg-[#00f2ff]/80"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              {canDownload ? (
                <>
                  Download
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Locked
                </>
              )}
            </button>
          </div>
          {!canDownload && (
            <div className="mt-3 pt-3 border-t border-gray-800">
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <AlertTriangle className="w-3 h-3 text-[#ffaa00]" />
                Upgrade to SOLDIER tier or higher to unlock downloads
              </p>
            </div>
          )}
        </div>
        <UpgradeModal
          isOpen={showUpgradeModal}
          onClose={() => setShowUpgradeModal(false)}
          feature="Download Access"
          requiredTier="soldier"
        />
      </>
    );
  }

  // Default button variant
  return (
    <>
      <button
        onClick={handleDownload}
        className={`group relative px-6 py-3 font-mono text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
          canDownload
            ? "bg-[#00f2ff] text-[#020617] hover:bg-[#00f2ff]/80"
            : "border-2 border-gray-700 text-gray-500 hover:border-gray-600 hover:text-gray-400"
        }`}
      >
        {canDownload ? (
          <>
            <Download className="w-4 h-4" />
            DOWNLOAD PACKAGE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        ) : (
          <>
            <Lock className="w-4 h-4" />
            TACTICAL LOCK ACTIVE
          </>
        )}
      </button>
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        feature="Download Access"
        requiredTier="soldier"
      />
    </>
  );
}
