"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import TechNav from "@/components/TechNav";
import ScanningLine from "@/components/ScanningLine";
import {
  Eye,
  Mic,
  Monitor,
  Scan,
  Zap,
  Image,
  MessageSquare,
  Volume2,
  Camera,
  CheckCircle,
  Radio,
  Cpu,
} from "lucide-react";

const capabilities = [
  {
    title: "2-Way Audio Streaming",
    icon: Mic,
    description: "Real-time bidirectional voice communication with natural language processing.",
    features: ["WebRTC Audio", "Voice Activity Detection", "Noise Cancellation", "Real-time Transcription"],
    color: "#00f2ff",
  },
  {
    title: "Screen Analysis",
    icon: Monitor,
    description: "Continuous screen capture and visual element detection for contextual understanding.",
    features: ["OCR Text Recognition", "UI Element Detection", "Icon Classification", "Layout Analysis"],
    color: "#ffaa00",
  },
  {
    title: "Visual Perception",
    icon: Eye,
    description: "Advanced computer vision for understanding screenshots and live video feeds.",
    features: ["Object Detection", "Scene Classification", "Color Analysis", "Visual QA"],
    color: "#22c55e",
  },
  {
    title: "Real-time Processing",
    icon: Zap,
    description: "Sub-100ms latency for all multimodal operations with parallel processing.",
    features: ["<100ms Latency", "Parallel Streams", "Hardware Acceleration", "Frame Buffering"],
    color: "#ef4444",
  },
];

const screenOverlayElements = [
  { id: 1, x: 15, y: 20, w: 120, h: 30, type: "text", label: "Search Bar", confidence: 98 },
  { id: 2, x: 200, y: 80, w: 60, h: 60, type: "icon", label: "Profile", confidence: 95 },
  { id: 3, x: 300, y: 150, w: 200, h: 100, type: "image", label: "Chart", confidence: 92 },
  { id: 4, x: 50, y: 300, w: 400, h: 40, type: "button", label: "Submit", confidence: 99 },
];

// Mock screen analysis overlay component
function ScreenAnalysisDemo() {
  return (
    <div className="relative w-full aspect-video rounded-lg border-2 border-[#00f2ff]/30 bg-[#020617] overflow-hidden">
      {/* Mock Desktop Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] to-[#020617]">
        {/* Mock Window */}
        <div className="absolute top-8 left-8 right-8 bottom-8 rounded-lg bg-[#0f172a]/80 border border-[#00f2ff]/20">
          {/* Window Header */}
          <div className="h-8 bg-[#00f2ff]/10 rounded-t-lg flex items-center px-3 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 font-mono text-xs text-gray-500">Dashboard - Chrome</span>
          </div>
          {/* Mock Content */}
          <div className="p-4 space-y-3">
            <div className="h-8 bg-[#00f2ff]/10 rounded w-3/4" />
            <div className="h-32 bg-[#00f2ff]/5 rounded" />
            <div className="flex gap-3">
              <div className="h-20 w-20 bg-[#ffaa00]/10 rounded" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-[#00f2ff]/10 rounded w-full" />
                <div className="h-4 bg-[#00f2ff]/10 rounded w-2/3" />
              </div>
            </div>
            <div className="h-10 bg-[#00f2ff]/20 rounded w-1/3 mt-4" />
          </div>
        </div>
      </div>

      {/* Detection Overlays */}
      {screenOverlayElements.map((elem, index) => (
        <motion.div
          key={elem.id}
          className="absolute border-2 rounded"
          style={{
            left: `${elem.x / 5}%`,
            top: `${elem.y / 4}%`,
            width: `${elem.w / 5}%`,
            height: `${elem.h / 4}%`,
            borderColor: elem.type === "text" ? "#00f2ff" : elem.type === "icon" ? "#ffaa00" : "#22c55e",
            backgroundColor: elem.type === "text" ? "rgba(0, 242, 255, 0.1)" : elem.type === "icon" ? "rgba(255, 170, 0, 0.1)" : "rgba(34, 197, 94, 0.1)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {/* Label */}
          <div
            className="absolute -top-5 left-0 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap"
            style={{
              backgroundColor: elem.type === "text" ? "#00f2ff" : elem.type === "icon" ? "#ffaa00" : "#22c55e",
              color: "#020617",
            }}
          >
            {elem.label} ({elem.confidence}%)
          </div>
          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${elem.type === "text" ? "rgba(0, 242, 255, 0.3)" : elem.type === "icon" ? "rgba(255, 170, 0, 0.3)" : "rgba(34, 197, 94, 0.3)"} 50%, transparent 100%)`,
            }}
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      ))}

      {/* Corner Label */}
      <div className="absolute top-2 left-2 px-2 py-1 rounded bg-[#020617]/80 border border-[#00f2ff]/30">
        <span className="font-mono text-xs text-[#00f2ff]">LIVE ANALYSIS</span>
      </div>
    </div>
  );
}

export default function MultimodalPage() {
  const [activeTab, setActiveTab] = useState("vision");

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
                  <Eye className="w-8 h-8 text-[#00f2ff]" />
                  <span className="font-mono text-[#00f2ff] tracking-wider">REAL-TIME PERCEPTION</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
                  VISION & VOICE
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  Advanced multimodal AI capabilities enabling M.A.R.C.O. to see, hear, and understand 
                  the world in real-time. Screen analysis, voice interaction, and visual perception—all 
                  running locally with sub-100ms latency.
                </p>
              </motion.div>

              {/* Screen Analysis Demo */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-mono text-sm text-[#ffaa00] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Scan className="w-4 h-4" />
                  Live Screen Analysis
                </h2>
                <ScreenAnalysisDemo />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  M.A.R.C.O. automatically detects UI elements, text, icons, and images on screen
                </p>
              </motion.div>

              {/* Capability Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {capabilities.map((cap, index) => {
                  const Icon = cap.icon;
                  return (
                    <motion.div
                      key={cap.title}
                      className="p-6 rounded-xl border-2 overflow-hidden relative"
                      style={{ borderColor: `${cap.color}40` }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div
                        className="absolute top-0 right-0 w-32 h-32 opacity-10"
                        style={{
                          background: `radial-gradient(circle, ${cap.color} 0%, transparent 70%)`,
                        }}
                      />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${cap.color}20` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: cap.color }} />
                          </div>
                          <h3 className="font-bold text-white">{cap.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">{cap.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {cap.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3" style={{ color: cap.color }} />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tech Stack */}
              <motion.div
                className="p-6 rounded-xl border border-[#00f2ff]/30 bg-[#00f2ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-mono text-sm text-[#00f2ff] uppercase tracking-wider mb-6">
                  Multimodal Technology Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "WebRTC", role: "Audio Streaming", icon: Radio },
                    { name: "OpenCV", role: "Computer Vision", icon: Camera },
                    { name: "Tesseract", role: "OCR Engine", icon: Scan },
                    { name: "Whisper", role: "Speech Recognition", icon: Volume2 },
                    { name: "YOLOv8", role: "Object Detection", icon: Eye },
                    { name: "CLIP", role: "Visual Understanding", icon: Image },
                    { name: "TensorRT", role: "GPU Acceleration", icon: Cpu },
                    { name: "Socket.io", role: "Real-time Comms", icon: MessageSquare },
                  ].map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-center gap-3 p-3 rounded-lg bg-[#020617]/50 border border-[#00f2ff]/10">
                        <Icon className="w-5 h-5 text-[#00f2ff]" />
                        <div>
                          <span className="text-sm font-semibold text-white block">{tech.name}</span>
                          <span className="text-[10px] text-gray-500">{tech.role}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* May 15 Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 border-t border-[#ffaa00]/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Monitor className="w-5 h-5 text-[#ffaa00]" />
          <span className="font-mono text-sm text-[#ffaa00]">SYSTEM READY FOR MAY 15 DEPLOYMENT</span>
          <span className="font-mono text-xs text-gray-500">Vision • Voice • Real-time</span>
        </div>
      </div>
    </main>
  );
}
