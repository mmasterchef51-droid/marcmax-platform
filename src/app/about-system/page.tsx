import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MARCORAEX AI - Neural Army System",
  description:
    "A multi-agent AI platform where intelligent modules collaborate for automation, reasoning, and AI-powered workflows.",
  keywords: [
    "AI agents",
    "Neural Army",
    "automation",
    "multi-agent system",
    "AI platform"
  ]
};

// JSON-LD Structured Data for AI/Google understanding
function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "MARCORAEX AI",
          description:
            "Multi-agent AI system (Neural Army) for automation and reasoning",
          applicationCategory: "AI Platform",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "25 autonomous AI agents",
            "MARCORAEX Core orchestration",
            "Task automation",
            "Intelligent reasoning",
            "Tactical automation"
          ]
        })
      }}
    />
  );
}

export default function AboutSystemPage() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-[#020617] font-sans">
        <Navbar />
        
        <div className="pt-24 pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-glow-cyan mb-6">
                MARCORAEX AI
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                A multi-agent AI system (Neural Army) designed for automation, reasoning, and task execution.
              </p>
            </header>

            {/* What this platform does */}
            <section className="mb-12 p-6 rounded-xl border border-[#00f2ff]/20 bg-[#020617]/50">
              <h2 className="text-2xl font-bold text-[#00f2ff] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00f2ff] rounded-full"></span>
                What this platform does
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#00f2ff] mt-1">›</span>
                  <div>
                    <strong className="text-white">AI Agents Collaboration</strong>
                    <p className="text-gray-400 text-sm">25 autonomous agents working in perfect harmony through MARCORAEX Core</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00f2ff] mt-1">›</span>
                  <div>
                    <strong className="text-white">Task Automation</strong>
                    <p className="text-gray-400 text-sm">Execute complex workflows automatically with zero human intervention</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00f2ff] mt-1">›</span>
                  <div>
                    <strong className="text-white">Intelligent Reasoning System</strong>
                    <p className="text-gray-400 text-sm">MARCORAEX Core orchestration with proprietary neural logic</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* System Overview */}
            <section className="mb-12 p-6 rounded-xl border border-[#ffaa00]/20 bg-[#020617]/50">
              <h2 className="text-2xl font-bold text-[#ffaa00] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffaa00] rounded-full"></span>
                System Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                MARCORAEX AI uses multiple AI modules that work together like a coordinated neural network.
                The MARCO Neural Army consists of 25 autonomous agents working in perfect harmony through MARCORAEX Core.
                All processing occurs on secure, private MARCORAEX servers with zero third-party dependencies.
                Zero external API calls. 100% data sovereignty.
              </p>
            </section>

            {/* Technical Specifications */}
            <section className="mb-12 p-6 rounded-xl border border-green-500/20 bg-[#020617]/50">
              <h2 className="text-2xl font-bold text-green-500 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Technical Specifications
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg border border-[#00f2ff]/10 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">25</span>
                  <p className="font-mono text-xs text-gray-500 mt-1">AUTONOMOUS AGENTS</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/10 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#ffaa00]">50ms</span>
                  <p className="font-mono text-xs text-gray-500 mt-1">AVG LATENCY</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/10 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-green-500">100%</span>
                  <p className="font-mono text-xs text-gray-500 mt-1">PRIVATE</p>
                </div>
                <div className="p-4 rounded-lg border border-[#00f2ff]/10 bg-[#00f2ff]/5 text-center">
                  <span className="font-mono text-3xl font-bold text-[#00f2ff]">0</span>
                  <p className="font-mono text-xs text-gray-500 mt-1">THIRD-PARTY APIS</p>
                </div>
              </div>
            </section>

            {/* Core Services */}
            <section className="mb-12 p-6 rounded-xl border border-[#00f2ff]/20 bg-[#020617]/50">
              <h2 className="text-2xl font-bold text-[#00f2ff] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00f2ff] rounded-full"></span>
                Core Services
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-8 h-8 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] text-sm">01</span>
                  The General: Strategic planning and task delegation
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-8 h-8 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] text-sm">02</span>
                  The Soldier: Execution and tactical automation
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-8 h-8 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] text-sm">03</span>
                  The Architect: System design and infrastructure scaling
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-8 h-8 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] text-sm">04</span>
                  The Engineer: Multi-language development and code optimization
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-8 h-8 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] text-sm">05</span>
                  The Oracle: Data analysis and predictive intelligence
                </li>
              </ul>
            </section>

            {/* Access Tiers */}
            <section className="mb-12 p-6 rounded-xl border border-[#ffaa00]/20 bg-[#020617]/50">
              <h2 className="text-2xl font-bold text-[#ffaa00] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffaa00] rounded-full"></span>
                Access Tiers
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                  <span className="text-yellow-500 font-semibold">Recruit (Free Trial)</span>
                  <span className="font-mono text-sm text-gray-400">10 requests/day • 50k tokens</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
                  <span className="text-[#00f2ff] font-semibold">Soldier ($15/month)</span>
                  <span className="font-mono text-sm text-gray-400">50 requests/day • 250k tokens</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
                  <span className="text-[#00f2ff] font-semibold">Squad Leader ($45/month)</span>
                  <span className="font-mono text-sm text-gray-400">200 requests/day • 1M tokens</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
                  <span className="text-[#00f2ff] font-semibold">General ($150/month)</span>
                  <span className="font-mono text-sm text-gray-400">1,000 requests/day • 5M tokens</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5">
                  <span className="text-[#ffaa00] font-semibold">Elite ($500/month)</span>
                  <span className="font-mono text-sm text-gray-400">5,000 requests/day • 25M tokens</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <footer className="p-6 rounded-xl border border-gray-700/30 bg-[#020617]/30 text-center">
              <p className="text-gray-400">
                Website: <span className="text-[#00f2ff]">https://marcorex-ai.vercel.app/</span>
              </p>
              <p className="text-gray-400 mt-2">
                Contact: <span className="text-[#00f2ff]">command@marcoraex.ai</span>
              </p>
            </footer>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
