"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import {
  HelpCircle,
  ChevronDown,
  Cpu,
  Download,
  Brain,
  Zap,
  Shield,
  Terminal,
  Search,
} from "lucide-react";

const faqCategories = [
  {
    name: "System Requirements",
    icon: Cpu,
    questions: [
      {
        q: "What are the minimum hardware requirements?",
        a: "M.A.R.C.O. requires: Windows 10/11, macOS 12+, or Linux (Ubuntu 20.04+). CPU must support AVX2 instructions (Intel Haswell/AMD Ryzen or newer). Minimum 8GB RAM (16GB recommended). 1.2GB free disk space for installation.",
      },
      {
        q: "How do I check if my CPU supports AVX2?",
        a: "Windows: Download CPU-Z and check 'Instructions' field. macOS: Run 'sysctl -a | grep machdep.cpu.features' in Terminal. Linux: Run 'grep avx2 /proc/cpuinfo'. If AVX2 appears in the output, your CPU is compatible.",
      },
      {
        q: "Can M.A.R.C.O. run on ARM processors (Apple Silicon)?",
        a: "Yes! M.A.R.C.O. fully supports Apple Silicon (M1, M2, M3) with native ARM builds. The system automatically detects your architecture and optimizes accordingly. Performance on M-series chips is exceptional due to unified memory architecture.",
      },
      {
        q: "Is a GPU required?",
        a: "No GPU is required for basic operation. However, for vision tasks and local LLM inference, a GPU with CUDA support (NVIDIA) or Metal (Apple Silicon) will significantly improve performance. The system will automatically use available GPU resources.",
      },
    ],
  },
  {
    name: "Installation & Setup",
    icon: Download,
    questions: [
      {
        q: "The installer fails with 'Permission Denied' error",
        a: "Windows: Right-click the installer and select 'Run as Administrator'. macOS: If you see 'App is damaged', run: 'xattr -cr /Applications/MARCO.app' in Terminal. Linux: Ensure the AppImage is executable with 'chmod +x marco-installer.AppImage'.",
      },
      {
        q: "How do I configure API keys?",
        a: "On first launch, M.A.R.C.O. will prompt you to enter API keys. You can also configure them later in Settings > API Configuration. Supported providers: OpenAI, Google AI, Groq, OpenRouter. Keys are encrypted with AES-256 and stored locally.",
      },
      {
        q: "Can I use M.A.R.C.O. offline?",
        a: "Partially. The core system works offline for local tasks (file operations, memory retrieval). However, AI model inference requires internet connectivity. We're working on local LLM support for fully offline operation in a future release.",
      },
      {
        q: "The application won't start after installation",
        a: "Check that your system meets minimum requirements. Try clearing the app data: Windows: Delete %LOCALAPPDATA%\M.A.R.C.O., macOS: Delete ~/Library/Application Support/M.A.R.C.O., Linux: Delete ~/.local/share/marco. Then restart the application.",
      },
    ],
  },
  {
    name: "AI Models & Performance",
    icon: Brain,
    questions: [
      {
        q: "Which AI model should I use for coding tasks?",
        a: "For coding, we recommend: 1) GPT-4o (best overall), 2) Claude 3.5 Sonnet (excellent for complex logic), 3) Gemini 1.5 Pro (great for long context). The system can auto-route based on your task type if you enable 'Smart Routing' in settings.",
      },
      {
        q: "How does the 31-model routing work?",
        a: "M.A.R.C.O. analyzes your request type (coding, vision, chat, logic) and latency requirements. It then queries available models and routes to the optimal one. If a model fails, automatic fallback to the next best option occurs within 100ms.",
      },
      {
        q: "Why is my response taking longer than expected?",
        a: "Check your internet connection first. If using GPT-4 or Claude 3 Opus, these models are slower but more capable. For faster responses, try Gemini Flash or enable 'Speed Priority' mode. Thermal throttling can also slow processing—check the Thermal Governor status.",
      },
      {
        q: "Can I add my own custom models?",
        a: "Yes! In Settings > Model Registry, you can add OpenAI-compatible endpoints. This includes local models via Ollama, custom API endpoints, or other OpenRouter-compatible providers. Custom models integrate seamlessly with the Neural Army.",
      },
    ],
  },
  {
    name: "Security & Privacy",
    icon: Shield,
    questions: [
      {
        q: "Is my data sent to your servers?",
        a: "Absolutely not. M.A.R.C.O. is a 100% local application. Your conversation logs, vector embeddings, and mission files are stored only on your machine. Only API calls to AI providers (OpenAI, etc.) leave your computer, and those are stateless.",
      },
      {
        q: "How is my data encrypted?",
        a: "All local data is encrypted with AES-256-GCM. Encryption keys are derived from your hardware ID using PBKDF2 with 100,000 rounds. On macOS, we use the Secure Enclave when available. API keys are stored in the OS keychain.",
      },
      {
        q: "Can I completely delete my data?",
        a: "Yes. Go to Settings > Privacy > Delete All Data. This will securely wipe: conversation history, vector database, cached embeddings, and configuration files. This action is irreversible. You can also export your data before deletion.",
      },
      {
        q: "What telemetry does M.A.R.C.O. collect?",
        a: "Zero. We do not collect any usage data, crash reports, or analytics. The application operates completely independently. The only external communication is directly between your machine and the AI APIs you configure.",
      },
    ],
  },
  {
    name: "Neural Army & Agents",
    icon: Zap,
    questions: [
      {
        q: "What do the 6 agents actually do?",
        a: "ZEPHYR manages long-term memory. CORTEX orchestrates complex tasks. NEXUS handles API integrations. SPARK controls browser automation. TITAN performs heavy compute. VANGUARD monitors security and thermals. They work together like a coordinated team.",
      },
      {
        q: "Can I disable specific agents?",
        a: "Yes, in Settings > Neural Army Configuration. Disabling unused agents can reduce resource usage. However, some tasks may fail if a required agent is disabled. The system will warn you before allowing disabling of critical agents.",
      },
      {
        q: "How do agents communicate?",
        a: "Agents communicate via encrypted IPC (Inter-Process Communication) channels using AES-256-GCM. Messages are serialized with Protocol Buffers for efficiency. All communication stays within your local machine—no network traffic between agents.",
      },
      {
        q: "What happens if an agent crashes?",
        a: "The system has automatic crash recovery. If an agent fails, CORTEX will attempt to restart it. If restart fails, tasks are re-routed to other capable agents. Critical failures are logged, and the user is notified with recovery options.",
      },
    ],
  },
  {
    name: "Troubleshooting",
    icon: Terminal,
    questions: [
      {
        q: "High CPU usage warnings appear frequently",
        a: "This is normal during intensive tasks. If it persists during idle, check: 1) Background agents running scans, 2) Large memory retrieval operations, 3) Model downloading. Enable 'Eco Mode' in settings to reduce background activity, or adjust thermal thresholds.",
      },
      {
        q: "Browser automation is failing to click elements",
        a: "This usually means the page structure changed. Try: 1) Refreshing the page, 2) Using more specific CSS selectors, 3) Adding wait conditions. SPARK uses Playwright which is resilient, but some dynamic sites require explicit wait strategies.",
      },
      {
        q: "Memory search returns irrelevant results",
        a: "The semantic search uses vector similarity. If results seem off: 1) Check your query specificity, 2) Verify embeddings were generated correctly, 3) Try adjusting the similarity threshold in Settings > Memory > Threshold. Re-indexing may help if data is corrupted.",
      },
      {
        q: "How do I report a bug?",
        a: "Go to Help > Report Issue. The bug report will include: system info, recent logs (sanitized), and error traces. No personal data is included. You can also email support@marco.ai with your system configuration and reproduction steps.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className="border border-[#00f2ff]/20 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[#00f2ff]/5 transition-colors"
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-[#00f2ff] flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 text-gray-400 leading-relaxed border-t border-[#00f2ff]/10 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(cat => cat.questions.length > 0);

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb />

          {/* Header */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-[#00f2ff]" />
              <span className="font-mono text-[#00f2ff] tracking-wider">RAPID RESOLUTION</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
              FAQ & TROUBLESHOOTING
            </h1>
            <p className="text-gray-400">
              Find answers to common questions about M.A.R.C.O. installation, configuration, and operation.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQ..."
              className="w-full pl-12 pr-4 py-4 bg-[#020617] border-2 border-[#00f2ff]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00f2ff]/50"
            />
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <motion.section
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00f2ff]/10 border border-[#00f2ff]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00f2ff]" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{category.name}</h2>
                  </div>

                  <div className="space-y-3">
                    {category.questions.map((q, qIndex) => (
                      <FAQItem
                        key={`${category.name}-${qIndex}`}
                        question={q.q}
                        answer={q.a}
                        isOpen={openItems[`${category.name}-${qIndex}`] || false}
                        onClick={() => toggleItem(`${category.name}-${qIndex}`)}
                      />
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <HelpCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No results found for &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-[#00f2ff] hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}

          {/* Support CTA */}
          <motion.div
            className="mt-12 p-6 rounded-xl border-2 border-[#00f2ff]/40 bg-gradient-to-r from-[#00f2ff]/10 to-transparent text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-2">Still need help?</h3>
            <p className="text-gray-400 mb-4">
              Our support team is ready to assist with any issues not covered here.
            </p>
            <a
              href="mailto:support@marco.ai"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00f2ff] text-[#020617] font-mono font-semibold rounded-lg hover:bg-[#00f2ff]/90 transition-colors"
            >
              Contact Support
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-12 pt-8 border-t border-[#00f2ff]/20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-mono text-sm text-gray-500">
              SUPPORT CENTER v7.0.0 — DOCUMENTATION UPDATED DAILY
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
