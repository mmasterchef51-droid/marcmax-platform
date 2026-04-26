"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import DocsNav from "@/components/DocsNav";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Code,
  Terminal,
  Globe,
  Database,
  Brain,
  Zap,
  Search,
  FileText,
  Copy,
  CheckCircle,
  Layers,
  Eye,
  Mic,
  Shield,
} from "lucide-react";

const apiCategories = [
  {
    name: "Core Functions",
    icon: Terminal,
    functions: [
      {
        name: "marco.execute()",
        signature: "execute(task: Task): Promise<Result>",
        description: "Main entry point for task execution. Routes to appropriate Neural Army agents.",
        example: `const result = await marco.execute({
  type: "research",
  query: "quantum computing 2024",
  depth: "comprehensive"
});`,
        returns: "TaskResult with execution log and output",
      },
      {
        name: "marco.status()",
        signature: "status(): Promise<SystemStatus>",
        description: "Returns current system status including all agent states.",
        example: `const status = await marco.status();
// Returns: { agents: {...}, thermal: {...}, uptime: ... }`,
        returns: "SystemStatus object with health metrics",
      },
      {
        name: "marco.configure()",
        signature: "configure(options: ConfigOptions): void",
        description: "Updates system configuration at runtime.",
        example: `marco.configure({
  models: { default: "gpt-4o" },
  thermal: { warning: 70 }
});`,
        returns: "void",
      },
    ],
  },
  {
    name: "Neural Army",
    icon: Brain,
    functions: [
      {
        name: "agents.zephyr.query()",
        signature: "query(embedding: Vector, topK?: number): Promise<Memory[]>",
        description: "Query semantic memory using vector similarity search.",
        example: `const memories = await agents.zephyr.query(
  embedding,
  { topK: 5, threshold: 0.8 }
);`,
        returns: "Array of matching memory entries",
      },
      {
        name: "agents.cortex.orchestrate()",
        signature: "orchestrate(workflow: DAG): Promise<ExecutionResult>",
        description: "Execute a directed acyclic graph of tasks with parallel processing.",
        example: `await agents.cortex.orchestrate({
  nodes: [
    { id: "analyze", agent: "CORTEX" },
    { id: "search", agent: "SPARK", deps: ["analyze"] }
  ]
});`,
        returns: "ExecutionResult with timing and outputs",
      },
      {
        name: "agents.nexus.bridge()",
        signature: "bridge(api: string, request: Request): Promise<Response>",
        description: "Unified API gateway with rate limiting and fallback.",
        example: `const data = await agents.nexus.bridge("openai", {
  model: "gpt-4o",
  messages: [...]
});`,
        returns: "API response with standardized error handling",
      },
      {
        name: "agents.spark.browser()",
        signature: "browser(skill: string, params: object): Promise<Execution>",
        description: "Execute a browser automation skill from the 200+ available.",
        example: `await agents.spark.browser("navigate", {
  url: "https://example.com",
  waitFor: "networkidle"
});`,
        returns: "Execution result with screenshots/logs",
      },
      {
        name: "agents.titan.compute()",
        signature: "compute(operation: string, data: Tensor): Promise<Tensor>",
        description: "GPU-accelerated computation for ML operations.",
        example: `const result = await agents.titan.compute("embed", {
  text: "Hello world",
  model: "text-embedding-3-large"
});`,
        returns: "Computed tensor result",
      },
      {
        name: "agents.vanguard.monitor()",
        signature: "monitor(metric: string): Promise<MetricValue>",
        description: "Real-time thermal and security monitoring.",
        example: `const temp = await agents.vanguard.monitor("cpu.temp");
if (temp > 80) await agents.vanguard.throttle();`,
        returns: "Current metric value with timestamp",
      },
    ],
  },
  {
    name: "Memory & Storage",
    icon: Database,
    functions: [
      {
        name: "memory.store()",
        signature: "store(entry: MemoryEntry): Promise<void>",
        description: "Store a new entry in the semantic memory (ChromaDB).",
        example: `await memory.store({
  content: "User prefers dark mode",
  metadata: { source: "preference", timestamp }
});`,
        returns: "void",
      },
      {
        name: "memory.retrieve()",
        signature: "retrieve(query: string, options?: RetrieveOptions): Promise<Memory[]>",
        description: "Semantic search across all stored memories.",
        example: `const memories = await memory.retrieve(
  "user interface preferences",
  { limit: 10, recency: "all_time" }
);`,
        returns: "Ranked array of relevant memories",
      },
      {
        name: "memory.forget()",
        signature: "forget(id: string): Promise<void>",
        description: "Remove a specific memory entry by ID.",
        example: `await memory.forget("mem_abc123");`,
        returns: "void",
      },
    ],
  },
  {
    name: "Browser Automation",
    icon: Globe,
    functions: [
      {
        name: "browser.navigate()",
        signature: "navigate(url: string, options?: NavOptions): Promise<void>",
        description: "Navigate to a URL with optional wait conditions.",
        example: `await browser.navigate("https://docs.marco.ai", {
  waitUntil: "networkidle",
  timeout: 30000
});`,
        returns: "void",
      },
      {
        name: "browser.extract()",
        signature: "extract(selector: string): Promise<ElementData>",
        description: "Extract data from DOM elements using CSS selectors.",
        example: `const data = await browser.extract(".article-content");
// Returns: { text, html, links, images }`,
        returns: "ElementData with extracted content",
      },
      {
        name: "browser.screenshot()",
        signature: "screenshot(options?: ScreenshotOptions): Promise<Buffer>",
        description: "Capture full page or element screenshot.",
        example: `const img = await browser.screenshot({
  fullPage: true,
  type: "png"
});`,
        returns: "Image buffer",
      },
      {
        name: "browser.form.fill()",
        signature: "form.fill(selector: string, data: object): Promise<void>",
        description: "Fill form fields automatically.",
        example: `await browser.form.fill("#contact-form", {
  name: "John Doe",
  email: "john@example.com"
});`,
        returns: "void",
      },
    ],
  },
  {
    name: "Multimodal",
    icon: Eye,
    functions: [
      {
        name: "vision.analyze()",
        signature: "analyze(image: Image): Promise<Analysis>",
        description: "Analyze visual content using computer vision.",
        example: `const analysis = await vision.analyze(screenshot);
// Returns: { objects, text, layout, ui_elements }`,
        returns: "Detailed visual analysis",
      },
      {
        name: "vision.ocr()",
        signature: "ocr(image: Image): Promise<Text>",
        description: "Extract text from images using Tesseract OCR.",
        example: `const text = await vision.ocr(screenshot);
// Returns extracted text content`,
        returns: "Extracted text string",
      },
      {
        name: "voice.transcribe()",
        signature: "transcribe(audio: AudioStream): Promise<Text>",
        description: "Real-time speech-to-text using Whisper.",
        example: `const text = await voice.transcribe(micStream);
// Returns: { transcript, confidence, timestamps }`,
        returns: "Transcription with metadata",
      },
      {
        name: "voice.synthesize()",
        signature: "synthesize(text: string, voice?: string): Promise<Audio>",
        description: "Text-to-speech synthesis.",
        example: `const audio = await voice.synthesize(
  "Task complete",
  { voice: "en-US-Neural" }
);`,
        returns: "Audio buffer",
      },
    ],
  },
  {
    name: "Security",
    icon: Shield,
    functions: [
      {
        name: "crypto.encrypt()",
        signature: "encrypt(data: string): Promise<Encrypted>",
        description: "AES-256 encryption for sensitive data.",
        example: `const encrypted = await crypto.encrypt(sessionData);
// Uses hardware-backed key if available`,
        returns: "Encrypted data with IV and auth tag",
      },
      {
        name: "crypto.hash()",
        signature: "hash(data: string, algorithm?: string): Promise<Hash>",
        description: "Cryptographic hashing (default: SHA-256).",
        example: `const hash = await crypto.hash(password, "argon2id");`,
        returns: "Hash string",
      },
      {
        name: "sandbox.execute()",
        signature: "execute(code: string, options?: SandboxOptions): Promise<Result>",
        description: "Execute code in isolated sandbox environment.",
        example: `const result = await sandbox.execute(userCode, {
  timeout: 5000,
  memory: "256MB"
});`,
        returns: "Execution result or error",
      },
    ],
  },
];

function FunctionCard({ func, index }: { func: typeof apiCategories[0]["functions"][0]; index: number }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(func.example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#020617]/50 hover:border-[#00f2ff]/40 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-mono text-lg text-[#00f2ff] mb-1">{func.name}</h3>
          <code className="text-sm text-gray-400 block mb-2">{func.signature}</code>
          <p className="text-sm text-gray-300 mb-3">{func.description}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="px-2 py-1 rounded bg-[#00f2ff]/10 text-[#00f2ff]">
              Returns: {func.returns}
            </span>
          </div>
        </div>
        <button
          onClick={copyCode}
          className="p-2 rounded hover:bg-[#00f2ff]/10 transition-colors"
        >
          {copied ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      <div className="mt-3 p-3 rounded bg-[#020617] border border-[#00f2ff]/10 font-mono text-xs overflow-x-auto">
        <pre className="text-gray-400">
          <code>{func.example}</code>
        </pre>
      </div>
    </motion.div>
  );
}

export default function ApiPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <DocsNav />

            <div className="flex-1">
              <Breadcrumb />

              {/* Header */}
              <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">DEVELOPER INTERFACE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  API REFERENCE
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  29+ function tools for building with M.A.R.C.O. All functions support 
                  TypeScript and include runtime type checking.
                </p>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                    activeCategory === null
                      ? "bg-[#00f2ff] text-[#020617]"
                      : "border border-[#00f2ff]/30 text-[#00f2ff] hover:bg-[#00f2ff]/10"
                  }`}
                >
                  All Functions
                </button>
                {apiCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                        activeCategory === cat.name
                          ? "bg-[#00f2ff] text-[#020617]"
                          : "border border-[#00f2ff]/30 text-[#00f2ff] hover:bg-[#00f2ff]/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  );
                })}
              </motion.div>

              {/* Function List */}
              <div className="space-y-8">
                {apiCategories
                  .filter((cat) => !activeCategory || cat.name === activeCategory)
                  .map((category) => {
                    const Icon = category.icon;
                    return (
                      <motion.section
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#00f2ff]/20">
                          <Icon className="w-5 h-5 text-[#00f2ff]" />
                          <h2 className="text-xl font-bold text-white">{category.name}</h2>
                          <span className="font-mono text-xs text-gray-500">
                            {category.functions.length} functions
                          </span>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          {category.functions.map((func, index) => (
                            <FunctionCard key={func.name} func={func} index={index} />
                          ))}
                        </div>
                      </motion.section>
                    );
                  })}
              </div>

              {/* Stats */}
              <motion.div
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">29+</span>
                  <p className="font-mono text-xs text-gray-500">Functions</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">6</span>
                  <p className="font-mono text-xs text-gray-500">Categories</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">TS</span>
                  <p className="font-mono text-xs text-gray-500">TypeScript</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">100%</span>
                  <p className="font-mono text-xs text-gray-500">Typed</p>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="mt-12 pt-8 border-t border-[#00f2ff]/20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-mono text-sm text-gray-500">
                  API v7.0.0 — ALL ENDPOINTS OPERATIONAL
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
