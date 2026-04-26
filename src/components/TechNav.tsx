"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Brain,
  Cpu,
  Globe,
  Eye,
  Database,
  ChevronRight,
  FileCode,
  Terminal,
  Layers,
} from "lucide-react";

const techPages = [
  {
    id: "models",
    label: "Model Registry",
    path: "/technology/models",
    icon: Brain,
    desc: "31 AI Models",
  },
  {
    id: "architecture",
    label: "Architecture",
    path: "/technology/architecture",
    icon: Cpu,
    desc: "Multi-Language Core",
  },
  {
    id: "automation",
    label: "Automation",
    path: "/technology/automation",
    icon: Terminal,
    desc: "200+ Skills",
  },
  {
    id: "multimodal",
    label: "Multimodal",
    path: "/technology/multimodal",
    icon: Eye,
    desc: "Vision & Voice",
  },
  {
    id: "memory",
    label: "Memory",
    path: "/technology/memory",
    icon: Database,
    desc: "Semantic Store",
  },
];

export default function TechNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="w-full lg:w-64 flex-shrink-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative lg:sticky lg:top-24 p-4 rounded-xl border border-[#00f2ff]/20 bg-[#020617]/80 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00f2ff]/20">
          <FileCode className="w-5 h-5 text-[#00f2ff]" />
          <span className="font-mono text-sm text-[#00f2ff] tracking-wider">
            TECH DOCS
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          {techPages.map((page, index) => {
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
                  className={`group flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 ${
                    isActive
                      ? "border-[#00f2ff]/50 bg-[#00f2ff]/10"
                      : "border-transparent hover:border-[#00f2ff]/30 hover:bg-[#00f2ff]/5"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mt-0.5 transition-colors ${
                      isActive ? "text-[#00f2ff]" : "text-gray-500 group-hover:text-[#00f2ff]"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-sm font-semibold ${
                          isActive ? "text-[#00f2ff]" : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {page.label}
                      </span>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-[#00f2ff]" />
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
        <div className="mt-6 pt-4 border-t border-[#00f2ff]/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-green-500">
              SYSTEM OPERATIONAL
            </span>
          </div>
          <p className="font-mono text-[10px] text-gray-500 mt-2">
            v7.0.0 • 50,000+ LOC
          </p>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00f2ff]/30" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00f2ff]/30" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00f2ff]/30" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00f2ff]/30" />
      </div>
    </motion.nav>
  );
}
