"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Book,
  Code,
  ChevronRight,
  Terminal,
  Zap,
  Layers,
  Cpu,
  Brain,
  Search,
  FileCode,
  ArrowRight,
} from "lucide-react";

const docSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Installation", path: "/docs#installation", icon: Terminal },
      { label: "Quick Start", path: "/docs#quickstart", icon: Zap },
      { label: "Configuration", path: "/docs#config", icon: Layers },
    ],
  },
  {
    title: "Core Modules",
    items: [
      { label: "Neural Army", path: "/docs#neural-army", icon: Brain },
      { label: "Model Registry", path: "/docs#models", icon: Cpu },
      { label: "Semantic Memory", path: "/docs#memory", icon: Search },
    ],
  },
  {
    title: "Advanced",
    items: [
      { label: "API Reference", path: "/docs/api", icon: Code },
      { label: "Orchestration", path: "/docs#orchestration", icon: Layers },
      { label: "Self-Improvement", path: "/docs#self-improvement", icon: Zap },
    ],
  },
];

export default function DocsNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="w-full lg:w-64 flex-shrink-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative lg:sticky lg:top-24 p-4 rounded-xl border border-[#00f2ff]/20 bg-[#020617]/90 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00f2ff]/20">
          <Book className="w-5 h-5 text-[#00f2ff]" />
          <span className="font-mono text-sm text-[#00f2ff] tracking-wider">
            KNOWLEDGE BASE
          </span>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search docs..."
            className="w-full pl-10 pr-4 py-2 bg-[#020617] border border-[#00f2ff]/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00f2ff]/50"
          />
        </div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {docSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        className={`group flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-[#00f2ff]/10 border border-[#00f2ff]/30"
                            : "hover:bg-[#00f2ff]/5 border border-transparent"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? "text-[#00f2ff]" : "text-gray-500 group-hover:text-[#00f2ff]"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            isActive ? "text-[#00f2ff]" : "text-gray-300 group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                        {isActive && (
                          <ChevronRight className="w-4 h-4 text-[#00f2ff] ml-auto" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* API CTA */}
        <div className="mt-6 pt-6 border-t border-[#00f2ff]/20">
          <Link
            href="/docs/api"
            className="group flex items-center gap-2 p-3 rounded-lg border border-[#00f2ff]/30 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 transition-colors"
          >
            <FileCode className="w-5 h-5 text-[#00f2ff]" />
            <div className="flex-1">
              <span className="text-sm font-semibold text-white block">API Reference</span>
              <span className="text-xs text-gray-500">29+ function tools</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#00f2ff] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Version */}
        <div className="mt-6 pt-4 border-t border-[#00f2ff]/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-green-500">
              DOCS v7.0.0
            </span>
          </div>
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
