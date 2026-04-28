import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TacticalMap from "@/components/TacticalMap";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import NeuralFlow from "@/components/NeuralFlow";
import { ChevronRight, Users, Activity, ArrowRight, Grid3X3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Army | MARCORAEX",
  description: "Neural Army tactical briefing and real-time agent overview. 25 autonomous agents deployed for high-level tactical automation.",
};

const agents = [
  { id: "zephyr", name: "ZEPHYR", role: "Archivist", color: "#00f2ff" },
  { id: "cortex", name: "CORTEX", role: "Strategist", color: "#ffaa00" },
  { id: "nexus", name: "NEXUS", role: "Bridge", color: "#00d4e0" },
  { id: "spark", name: "SPARK", role: "Operator", color: "#f59e0b" },
  { id: "titan", name: "TITAN", role: "Heavy", color: "#ef4444" },
  { id: "vanguard", name: "VANGUARD", role: "Shield", color: "#22c55e" },
];

export default function ArmyPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Neural Flow Background */}
      <div className="fixed inset-0 z-0">
        <NeuralFlow />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f2ff]/30 bg-[#00f2ff]/5 mb-6">
              <Grid3X3 className="w-4 h-4 text-[#00f2ff]" />
              <span className="font-mono text-sm text-[#00f2ff]">TACTICAL MAP</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white text-glow-cyan tracking-[0.05em] mb-4">
              ARMY BRIEFING
            </h1>

            {/* Sub-header */}
            <p className="text-gray-400 max-w-2xl mx-auto mb-4">
              Real-time tactical overview of the Neural Army formation. Click any agent for detailed dossier.
            </p>

            {/* Status Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <span className="font-mono text-[#00f2ff]/80 flex items-center gap-2">
                <Activity className="w-4 h-4 blink-dot" />
                25 Agents Active
              </span>
              <span className="hidden md:inline text-[#00f2ff]/40">|</span>
              <span className="font-mono text-green-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 blink-dot" />
                Core Online
              </span>
            </div>
          </div>

          {/* Main Layout: Tactical Map + Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Tactical Map - Takes up 2/3 on desktop */}
            <div className="lg:col-span-2">
              <div className="p-4 rounded-xl border-2 border-[#00f2ff]/20 bg-[#020617]/50 backdrop-blur-sm">
                <TacticalMap />
              </div>
            </div>

            {/* Live Activity Feed - Takes up 1/3 on desktop */}
            <div className="lg:col-span-1">
              <LiveActivityFeed />
            </div>
          </div>

          {/* Agent Cards Grid - Brief Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-[#00f2ff]" />
              <span>AGENT ROSTER</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {agents.map((agent) => (
                <div key={agent.id}>
                  <Link
                    href={`/army/${agent.id}`}
                    className="group block p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:border-[#00f2ff]/50 transition-all duration-300"
                  >
                    <div
                      className="w-3 h-3 rounded-full mb-3"
                      style={{ backgroundColor: agent.color, boxShadow: `0 0 10px ${agent.color}` }}
                    />
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#00f2ff] transition-colors">
                      {agent.name}
                    </h3>
                    <p className="font-mono text-xs text-gray-500">{agent.role}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="border-t border-[#00f2ff]/20 pt-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="font-mono text-3xl md:text-4xl font-bold text-[#00f2ff]">25</span>
                <p className="font-mono text-xs text-gray-500 mt-1">ACTIVE AGENTS</p>
              </div>
              <div>
                <span className="font-mono text-3xl md:text-4xl font-bold text-[#ffaa00]">50K+</span>
                <p className="font-mono text-xs text-gray-500 mt-1">LINES PER AGENT</p>
              </div>
              <div>
                <span className="font-mono text-3xl md:text-4xl font-bold text-green-500">100%</span>
                <p className="font-mono text-xs text-gray-500 mt-1">SYSTEM UPTIME</p>
              </div>
              <div>
                <span className="font-mono text-3xl md:text-4xl font-bold text-[#00f2ff]">&lt;50ms</span>
                <p className="font-mono text-xs text-gray-500 mt-1">AVG RESPONSE</p>
              </div>
            </div>
          </div>

          {/* Next Section Button */}
          <div className="flex justify-center">
            <Link
              href="/tech"
              className="group flex items-center gap-3 px-8 py-4 border border-[#00f2ff]/50 rounded-none font-mono text-sm text-[#00f2ff] hover:bg-[#00f2ff]/10 transition-all duration-300 btn-glow-cyan"
            >
              <span>Explore Technology Stack</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="fixed top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-[#00f2ff]/20 pointer-events-none z-20" />
      <div className="fixed top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-[#00f2ff]/20 pointer-events-none z-20" />
      <div className="fixed bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-[#00f2ff]/20 pointer-events-none z-20" />
      <div className="fixed bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#00f2ff]/20 pointer-events-none z-20" />
    </main>
  );
}
