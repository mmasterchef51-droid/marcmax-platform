"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TechNav from "@/components/TechNav";
import ScanningLine from "@/components/ScanningLine";
import {
  Terminal,
  Globe,
  MousePointer,
  FileText,
  FormInput,
  Camera,
  Navigation,
  Copy,
  CheckCircle,
  Play,
  Mouse,
  Cpu,
} from "lucide-react";

const browserSkills = [
  { category: "Navigation", icon: Navigation, skills: ["Page Navigation", "History Control", "Tab Management", "Window Switching"] },
  { category: "Interaction", icon: MousePointer, skills: ["Click Elements", "Hover Actions", "Drag & Drop", "Scroll Control"] },
  { category: "Forms", icon: FormInput, skills: ["Input Filling", "Select Dropdowns", "Checkbox Toggle", "Form Submit"] },
  { category: "Extraction", icon: FileText, skills: ["Text Scraping", "Table Parsing", "Link Collection", "Image URLs"] },
  { category: "Media", icon: Camera, skills: ["Screenshots", "Video Recording", "PDF Export", "Full Page Capture"] },
  { category: "Advanced", icon: Globe, skills: ["Network Intercept", "Cookie Management", "LocalStorage", "Session Handling"] },
];

const terminalLogs = [
  "[SPARK] Initializing browser context...",
  "[SPARK] Navigating to target URL...",
  "[SPARK] DOM loaded, scanning elements...",
  "[SPARK] Found 24 interactive elements",
  "[SPARK] Executing skill #47: Form Input",
  "[SPARK] Input field located: #search-box",
  "[SPARK] Typing query: 'M.A.R.C.O. documentation'",
  "[SPARK] Submitting form...",
  "[SPARK] Waiting for response...",
  "[SPARK] Results loaded, extracting data...",
  "[SPARK] Table parsed: 8 rows, 4 columns",
  "[SPARK] Capturing screenshot...",
  "[SPARK] Screenshot saved: result_001.png",
  "[SPARK] Task complete. Latency: 1.2s",
];

// Terminal component with auto-scrolling logs
function TerminalWindow() {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < terminalLogs.length) {
        setLogs((prev) => [...prev, terminalLogs[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Reset after completion
        setTimeout(() => {
          setLogs([]);
          setCurrentIndex(0);
        }, 3000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="rounded-lg border border-[#00f2ff]/30 bg-[#020617] overflow-hidden font-mono text-xs">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#00f2ff]/10 border-b border-[#00f2ff]/20">
        <Terminal className="w-4 h-4 text-[#00f2ff]" />
        <span className="text-[#00f2ff]">spark@marco:~</span>
        <span className="text-gray-500">automated_session_01</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-64 overflow-y-auto space-y-1">
        <AnimatePresence mode="popLayout">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-gray-300"
            >
              <span className="text-green-500">➜</span> {log}
            </motion.div>
          ))}
        </AnimatePresence>
        {logs.length > 0 && (
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-[#00f2ff]"
          >
            ▊
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function AutomationPage() {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <TechNav />

            <div className="flex-1 relative">
              <ScanningLine />

              {/* Header */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">BROWSER AUTOMATION</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  200+ BROWSER SKILLS
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  Powered by Playwright and Chrome DevTools Protocol. SPARK executes complex web interactions 
                  with sub-second precision, from simple clicks to multi-tab orchestration.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Skills Grid */}
                <div className="space-y-4">
                  <h2 className="font-mono text-sm text-[#ffaa00] uppercase tracking-wider mb-4">
                    Skill Categories
                  </h2>
                  {browserSkills.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <motion.div
                        key={category.category}
                        className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:border-[#00f2ff]/50 transition-colors cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setActiveSkill(index)}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-[#00f2ff]" />
                          <h3 className="font-semibold text-white">{category.category}</h3>
                          <span className="font-mono text-xs text-gray-500 ml-auto">
                            {category.skills.length} skills
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="font-mono text-xs px-2 py-1 rounded bg-[#020617] text-gray-300 border border-[#00f2ff]/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Terminal Demo */}
                <div>
                  <h2 className="font-mono text-sm text-[#ffaa00] uppercase tracking-wider mb-4">
                    Live Automation Log
                  </h2>
                  <TerminalWindow />

                  {/* Quick Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
                      <span className="font-mono text-2xl font-bold text-[#00f2ff]">200+</span>
                      <p className="font-mono text-xs text-gray-500">Browser Skills</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5">
                      <span className="font-mono text-2xl font-bold text-[#ffaa00]">&lt;1s</span>
                      <p className="font-mono text-xs text-gray-500">Avg Execution</p>
                    </div>
                    <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                      <span className="font-mono text-2xl font-bold text-green-500">99.9%</span>
                      <p className="font-mono text-xs text-gray-500">Success Rate</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
                      <span className="font-mono text-2xl font-bold text-[#00f2ff]">CDP</span>
                      <p className="font-mono text-xs text-gray-500">Protocol</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Highlight */}
              <motion.div
                className="mt-12 p-6 rounded-xl border-2 border-[#00f2ff]/30 bg-gradient-to-br from-[#00f2ff]/10 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-[#00f2ff]" />
                  Autonomous Web Navigation
                </h2>
                <p className="text-gray-400 mb-4">
                  SPARK can autonomously navigate complex web applications, handle dynamic content, 
                  wait for AJAX responses, and extract structured data from any website.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Multi-Tab Orchestration",
                    "Session Persistence",
                    "Proxy Rotation",
                    "Captcha Handling",
                    "Rate Limiting",
                    "Error Recovery",
                  ].map((feature, i) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* May 15 Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 border-t border-[#ffaa00]/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Mouse className="w-5 h-5 text-[#ffaa00]" />
          <span className="font-mono text-sm text-[#ffaa00]">SYSTEM READY FOR MAY 15 DEPLOYMENT</span>
          <span className="font-mono text-xs text-gray-500">200+ skills active • Playwright ready</span>
        </div>
      </div>
    </main>
  );
}
