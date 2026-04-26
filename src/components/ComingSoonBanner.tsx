"use client";

import { motion } from "framer-motion";
import { Rocket, X, Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ComingSoonBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#020617] via-[#00f2ff]/10 to-[#020617] border-t-2 border-[#00f2ff]/50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-6 h-6 text-[#00f2ff]" />
          </motion.div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono text-sm text-white">
              <span className="text-[#00f2ff]">MAY 15, 2026</span> — MARCMAX SAAS LAUNCH
            </span>
            <span className="hidden sm:inline text-[#00f2ff]/30">|</span>
            <span className="font-mono text-xs text-gray-400">
              MARCO Neural Army • 31 AI Models • Zero Cloud
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#00f2ff] text-[#020617] font-mono text-xs font-semibold rounded-lg hover:bg-[#00f2ff]/90 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            PRE-REGISTER
            <ChevronRight className="w-3 h-3" />
          </Link>
          
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 text-gray-500 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Animated scan line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
