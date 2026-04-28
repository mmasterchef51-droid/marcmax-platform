"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, ArrowRight, Zap, Crown, AlertTriangle } from "lucide-react";
import Link from "next/link";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
  requiredTier: string;
}

export default function UpgradeModal({
  isOpen,
  onClose,
  feature,
  requiredTier,
}: UpgradeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="w-full max-w-md bg-[#020617] border border-[#ffaa00]/30 rounded-lg p-6 pointer-events-auto relative overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ffaa00]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ffaa00]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ffaa00]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ffaa00]" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#ffaa00]/10 border-2 border-[#ffaa00]/30 flex items-center justify-center">
                  <Lock className="w-10 h-10 text-[#ffaa00]" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  OPERATIONAL UPGRADE REQUIRED
                </h2>
                <p className="text-gray-400">
                  Access to <span className="text-[#00f2ff]">{feature}</span> is locked at your current tier.
                </p>
              </div>

              {/* Requirement box */}
              <div className="bg-[#ffaa00]/5 border border-[#ffaa00]/20 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-[#ffaa00]" />
                  <span className="font-mono text-sm text-[#ffaa00]">ACCESS DENIED</span>
                </div>
                <p className="text-sm text-gray-400">
                  Required authorization level: <span className="text-white font-semibold">{requiredTier.toUpperCase()}</span> or higher
                </p>
              </div>

              {/* Benefits preview */}
              <div className="space-y-2 mb-6">
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">
                  Upgrade Benefits:
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-[#00f2ff]" />
                  Unlock {feature}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Crown className="w-4 h-4 text-[#ffaa00]" />
                  Increased daily request limits
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-[#00d4aa]" />
                  Enhanced processing capabilities
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/plans"
                  onClick={onClose}
                  className="group block w-full py-3 bg-[#ffaa00] text-[#020617] font-mono text-sm font-semibold text-center hover:bg-[#ffaa00]/80 transition-colors flex items-center justify-center gap-2"
                >
                  VIEW ACCESS PLANS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={onClose}
                  className="block w-full py-3 border border-gray-700 text-gray-400 font-mono text-sm hover:border-gray-500 hover:text-gray-300 transition-colors"
                >
                  CONTINUE WITH CURRENT TIER
                </button>
              </div>

              {/* Footer note */}
              <p className="text-center text-xs text-gray-600 mt-4 font-mono">
                All plans include AES-256 encryption and local-first architecture
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
