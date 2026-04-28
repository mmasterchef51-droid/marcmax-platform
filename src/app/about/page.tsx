import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Target, Shield, Zap, Globe, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "About | MARCORAEX",
  description: "Learn about MARCORAEX's mission to solve AI fragmentation through the MARCO Neural Army - 25 autonomous agents working in perfect harmony.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
            Mission Briefing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-glow-cyan mb-6">
            ABOUT MARCORAEX
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Solving the fragmentation of AI through unified command. The premier orchestration 
            platform for the MARCO Neural Army.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-lg border border-[#00f2ff]/20 bg-gradient-to-b from-[#00f2ff]/5 to-transparent">
            <Cpu className="w-12 h-12 text-[#00f2ff] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-gray-400 leading-relaxed">
              Modern AI is fragmented. Teams juggle dozens of tools, APIs, and platforms. 
              Context is lost between systems. Security is compromised by external dependencies. 
              The promise of AI remains unrealized because no unified command center exists.
            </p>
          </div>
          
          <div className="p-8 rounded-lg border border-[#ffaa00]/20 bg-gradient-to-b from-[#ffaa00]/5 to-transparent">
            <Target className="w-12 h-12 text-[#ffaa00] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
            <p className="text-gray-400 leading-relaxed">
              MARCORAEX unifies everything under one command. 25 autonomous agents working 
              in perfect harmony through the MARCORAEX Core. Local-first architecture ensures 
              complete data sovereignty. One interface. Infinite capabilities. Zero fragmentation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">MARCORAEX CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/50 text-center">
              <Shield className="w-10 h-10 text-[#00f2ff] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Absolute Privacy</h3>
              <p className="text-gray-500 text-sm">
                100% local-first. Your data never leaves your infrastructure. 
                AES-256 encryption standard.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-[#ffaa00]/10 bg-[#020617]/50 text-center">
              <Zap className="w-10 h-10 text-[#ffaa00] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Tactical Speed</h3>
              <p className="text-gray-500 text-sm">
                Sub-50ms response times. 24/7 autonomous operation. 
                No external API latency. Pure performance.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-green-500/10 bg-[#020617]/50 text-center">
              <Globe className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Unified Command</h3>
              <p className="text-gray-500 text-sm">
                One interface controls 25 specialized agents. 
                Seamless orchestration. Zero context switching.
              </p>
            </div>
          </div>
        </div>

        {/* Security Promise */}
        <div className="p-8 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
          <Lock className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">The MARCORAEX Promise</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            Every operation runs on secure, private MARCORAEX infrastructure. 
            Zero third-party dependencies. Zero external API calls. 
            Complete data sovereignty for mission-critical operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-mono">
            <span className="text-green-500">✓ PRIVATE SERVERS</span>
            <span className="text-green-500">✓ AES-256 ENCRYPTION</span>
            <span className="text-green-500">✓ ZERO TELEMETRY</span>
            <span className="text-green-500">✓ LOCAL-FIRST</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
