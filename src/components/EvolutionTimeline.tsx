"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GitBranch,
  Zap,
  Shield,
  Brain,
  Cpu,
  CheckCircle,
  Archive,
  Terminal,
  ChevronRight,
} from "lucide-react";

const versions = [
  {
    version: "v7.0.0",
    date: "April 2026",
    status: "STABLE",
    statusColor: "#22c55e",
    icon: Brain,
    title: "Production-Ready 24/7 Autonomy",
    description:
      "Full autonomous operation capability achieved. System can operate continuously without human intervention while maintaining safety protocols.",
    features: [
      "Full Neural Army integration (6 Agents)",
      "Intelligent 31-Model Fleet Routing",
      "Real-time thermal monitoring & auto-throttling",
      "Self-healing codebase protocol",
    ],
    highlights: ["50,000+ Lines of Code", "99.9% Uptime Achieved"],
  },
  {
    version: "v6.5.0",
    date: "March 2026",
    status: "STABLE",
    statusColor: "#22c55e",
    icon: Zap,
    title: "Real-time Multimodal Integration",
    description:
      "Introduction of vision and voice capabilities. The system can now process multiple input modalities simultaneously.",
    features: [
      "Vision & Voice input processing",
      "Vector-based Semantic Memory (ChromaDB)",
      "Multi-modal context understanding",
      "Screen analysis pipeline",
    ],
    highlights: ["200+ Browser Skills Added"],
  },
  {
    version: "v5.0.0",
    date: "February 2026",
    status: "LEGACY",
    statusColor: "#f59e0b",
    icon: Shield,
    title: "Hardware Safety Governor",
    description:
      "Major architectural shift introducing hardware protection. Transitioned from script-based to standalone desktop application.",
    features: [
      "Hardware Safety Governor implementation",
      "Desktop Application architecture (Electron)",
      "Thermal monitoring system",
      "Auto-throttling for CPU protection",
    ],
    highlights: ["Cross-platform Support", "NSIS & DMG Packaging"],
  },
  {
    version: "v1.0.0",
    date: "Early 2026",
    status: "ARCHIVE",
    statusColor: "#6b7280",
    icon: Cpu,
    title: "Initial Project Foundation",
    description:
      "The genesis of M.A.R.C.O. Modular API core established with basic agent communication protocols.",
    features: [
      "Modular API core architecture",
      "Basic agent framework",
      "OpenAI integration prototype",
      "Command-line interface",
    ],
    highlights: ["Proof of Concept", "Single Agent System"],
  },
];

// Typewriter text component
function TypewriterText({ text, isHovered }: { text: string; isHovered: boolean }) {
  return (
    <span className="relative">
      {text}
      {isHovered && (
        <motion.span
          className="absolute right-0 top-0 w-[2px] h-full bg-[#00f2ff]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
}

interface TimelineItemProps {
  version: (typeof versions)[0];
  index: number;
  isLast: boolean;
}

function TimelineItem({ version, index, isLast }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = version.icon;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 md:gap-10"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Line & Node */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <motion.div
          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center z-10"
          style={{
            borderColor: version.statusColor,
            backgroundColor: `${version.statusColor}20`,
          }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: index * 0.15 + 0.2 }}
        >
          <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: version.statusColor }} />
          
          {/* Pulse effect for current version */}
          {index === 0 && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ borderColor: version.statusColor }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <motion.div
            className="w-[2px] flex-1 bg-gradient-to-b mt-2"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${version.statusColor}, ${versions[index + 1]?.statusColor || version.statusColor})`,
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-12">
        <motion.div
          className="relative p-5 md:p-6 rounded-lg border border-[#00f2ff]/20 bg-gradient-to-br from-[#00f2ff]/5 to-transparent hover:border-[#00f2ff]/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xl md:text-2xl font-bold text-white">
              {version.version}
            </span>
            <span
              className="font-mono text-xs px-2 py-1 rounded border"
              style={{
                borderColor: `${version.statusColor}40`,
                color: version.statusColor,
                backgroundColor: `${version.statusColor}10`,
              }}
            >
              {version.status}
            </span>
            <span className="font-mono text-sm text-gray-500">{version.date}</span>
          </div>

          {/* Title with typewriter effect */}
          <h3 className="text-lg md:text-xl font-bold text-[#00f2ff] mb-2">
            <TypewriterText text={version.title} isHovered={isHovered} />
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {version.description}
          </p>

          {/* Features List */}
          <div className="space-y-2 mb-4">
            {version.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
              >
                <ChevronRight className="w-4 h-4 text-[#00f2ff]/60" />
                <span className="text-sm text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {version.highlights.map((highlight, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2 py-1 rounded bg-[#ffaa00]/10 text-[#ffaa00] border border-[#ffaa00]/20"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00f2ff]/30" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00f2ff]/30" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00f2ff]/30" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00f2ff]/30" />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Lines of Code Counter
function LinesOfCodeCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative p-6 md:p-8 rounded-xl border-2 border-[#00f2ff]/30 bg-gradient-to-br from-[#00f2ff]/10 to-[#020617] mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ boxShadow: "0 0 40px rgba(0, 242, 255, 0.15)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {/* Lines of Code */}
        <div className="text-center">
          <span className="font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider block mb-2">
            Total Lines Committed
          </span>
          <motion.span
            className="font-mono text-4xl md:text-5xl font-bold text-[#00f2ff] text-glow-cyan"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            50,000+
          </motion.span>
        </div>

        <div className="hidden md:block w-px h-16 bg-[#00f2ff]/20" />

        {/* Logic Steps */}
        <div className="text-center">
          <span className="font-mono text-xs text-[#ffaa00]/60 uppercase tracking-wider block mb-2">
            System Instruction Count
          </span>
          <motion.span
            className="font-mono text-4xl md:text-5xl font-bold text-[#ffaa00]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            2,200+
          </motion.span>
          <span className="font-mono text-sm text-gray-400 ml-2">
            Sequential Logic Steps
          </span>
        </div>

        <div className="hidden md:block w-px h-16 bg-[#00f2ff]/20" />

        {/* Commits */}
        <div className="text-center">
          <span className="font-mono text-xs text-green-500/60 uppercase tracking-wider block mb-2">
            Git Commits
          </span>
          <motion.span
            className="font-mono text-4xl md:text-5xl font-bold text-green-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            850+
          </motion.span>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f2ff]/50" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f2ff]/50" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f2ff]/50" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f2ff]/50" />
    </motion.div>
  );
}

// Main EvolutionTimeline Component
function EvolutionTimeline() {
  return (
    <section className="relative w-full">
      <div className="max-w-4xl mx-auto">
        {versions.map((version, index) => (
          <TimelineItem
            key={version.version}
            version={version}
            index={index}
            isLast={index === versions.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export { versions, LinesOfCodeCounter };
export default EvolutionTimeline;
