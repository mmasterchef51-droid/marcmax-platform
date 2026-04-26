"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Thermometer,
  Shield,
  Lock,
  Cpu,
  ChevronRight,
  FileCode,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const safetyPages = [
  {
    id: "governor",
    label: "Hardware Governor",
    path: "/safety/governor",
    icon: Thermometer,
    desc: "Thermal Protection",
    color: "#ffaa00",
  },
  {
    id: "privacy",
    label: "Data Sovereignty",
    path: "/safety/privacy",
    icon: Lock,
    desc: "Local-First Storage",
    color: "#00f2ff",
  },
  {
    id: "self-improvement",
    label: "Self-Improvement",
    path: "/safety/self-improvement",
    icon: Cpu,
    desc: "Validation Protocol",
    color: "#22c55e",
  },
  {
    id: "security",
    label: "Security Architecture",
    path: "/safety/security",
    icon: Shield,
    desc: "Digital Fortress",
    color: "#0066ff",
  },
];

export default function SafetyNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="w-full lg:w-64 flex-shrink-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative lg:sticky lg:top-24 p-4 rounded-xl border-2 border-[#0066ff]/30 bg-[#020617]/90 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#0066ff]/20">
          <Shield className="w-5 h-5 text-[#0066ff]" />
          <span className="font-mono text-sm text-[#0066ff] tracking-wider">
            SAFETY PROTOCOLS
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          {safetyPages.map((page, index) => {
            const Icon = page.icon;
            const isActive = pathname === page.path;

            return (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={page.path}
                  className={`group flex items-start gap-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                    isActive
                      ? "border-[#0066ff]/50 bg-[#0066ff]/10"
                      : "border-transparent hover:border-[#0066ff]/30 hover:bg-[#0066ff]/5"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mt-0.5 transition-colors ${
                      isActive ? "text-[#0066ff]" : "text-gray-500 group-hover:text-[#0066ff]"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-sm font-semibold ${
                          isActive ? "text-[#0066ff]" : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {page.label}
                      </span>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-[#0066ff]" />
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">
                      {page.desc}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Status Footer */}
        <div className="mt-6 pt-4 border-t border-[#0066ff]/20">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="font-mono text-xs text-green-500">
              ALL PROTOCOLS ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-[#ffaa00]/10 border border-[#ffaa00]/30">
            <AlertTriangle className="w-4 h-4 text-[#ffaa00]" />
            <span className="font-mono text-xs text-[#ffaa00]">
              7.0.0 FAILSAFE ACTIVE
            </span>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#0066ff]/50" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#0066ff]/50" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#0066ff]/50" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#0066ff]/50" />
      </div>
    </motion.nav>
  );
}
