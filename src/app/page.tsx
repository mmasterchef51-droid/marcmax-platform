import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MARCORAEX AI - Neural Army System | Autonomous AI Orchestration",
  description: "MARCORAEX is an autonomous AI orchestration framework featuring 25 specialized agents that work in perfect harmony. Solve AI fragmentation through unified command with MARCORAEX Core - the premier platform for tactical automation, security operations, and intelligent task execution.",
  keywords: [
    "AI agents",
    "Neural Army",
    "automation",
    "multi-agent system",
    "AI platform",
    "MARCORAEX",
    "MARCORAEX Core",
    "tactical automation",
    "autonomous agents",
    "AI orchestration"
  ],
  openGraph: {
    title: "MARCORAEX AI - Neural Army System",
    description: "25 autonomous agents. One unified command. Infinite capabilities.",
    type: "website",
    url: "https://marcorex-ai.vercel.app/",
  },
};

// Service schema for structured data
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MARCORAEX AI Orchestration",
  "provider": {
    "@type": "Organization",
    "name": "MARCORAEX"
  },
  "description": "Autonomous AI orchestration service featuring 25 specialized agents for tactical automation and intelligent task execution",
  "serviceType": "AI Platform",
  "areaServed": "Global"
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for AI/Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="min-h-screen bg-[#050505] font-sans overflow-x-hidden">
        {/* CSS-Only Scanning Bar */}
        <div className="scan-bar" />
        
        {/* CSS-Only Matrix Background */}
        <div className="fixed inset-0 matrix-bg pointer-events-none z-0" />

        {/* Navigation */}
        <Navbar />

        {/* ============================================
            HERO SECTION - High Impact with CSS Glow
            ============================================ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32 overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 cyber-grid opacity-50" />
          
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
            {/* Status Badge */}
            <div className="animate-fade-in mb-8 px-6 py-3 border border-[#00f2ff]/40 bg-[#00f2ff]/10 rounded-none">
              <span className="font-mono text-sm text-[#00f2ff] tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00f2ff] rounded-full status-blink" />
                SYSTEM OPERATIONAL
              </span>
            </div>

            {/* Main Title with CSS Glow */}
            <h1 
              className="glitch-text text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-wider mb-6 animate-scale-in"
              data-text="MARCORAEX"
              style={{ textShadow: '0 0 40px rgba(0, 242, 255, 0.6), 0 0 80px rgba(0, 242, 255, 0.3)' }}
            >
              MARCORAEX
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-[#00f2ff]/80 font-mono mb-4 animate-slide-up stagger-2">
              HOME OF THE MARCO NEURAL ARMY
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-slide-up stagger-3">
              25 autonomous agents. One unified command. Infinite capabilities. 
              <br className="hidden md:block" />
              MARCORAEX Core orchestrates the most capable autonomous workforce ever deployed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up stagger-4">
              <Link
                href="/army"
                className="group relative px-10 py-5 bg-[#00f2ff] text-[#050505] font-mono font-bold tracking-wider hover:shadow-[0_0_60px_rgba(0,242,255,0.6)] transition-all duration-300 animate-pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#050505] rounded-full" />
                  INITIALIZE COMMAND
                </span>
              </Link>

              <Link
                href="/about-system"
                className="group relative px-10 py-5 border-2 border-[#ffaa00] text-[#ffaa00] font-mono font-bold tracking-wider hover:bg-[#ffaa00]/10 hover:shadow-[0_0_40px_rgba(255,170,0,0.4)] transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#ffaa00] rounded-full status-blink" />
                  SYSTEM BRIEFING
                </span>
              </Link>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-[#00f2ff]/30" />
            <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-[#00f2ff]/30" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-[#00f2ff]/30" />
            <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-[#00f2ff]/30" />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#00f2ff]/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#00f2ff] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* ============================================
            THE MISSION - Long-form Description
            ============================================ */}
        <section className="relative py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Mission Statement */}
              <div className="animate-slide-left">
                <span className="font-mono text-[#ffaa00] text-sm tracking-[0.3em] mb-4 block">
                  PRIMARY OBJECTIVE
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-glow-cyan">
                  THE MISSION
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    MARCORAEX is an <strong className="text-[#00f2ff]">autonomous AI orchestration framework</strong> designed to solve the fragmentation of modern AI systems. In a world where teams juggle dozens of tools, APIs, and platforms, context is lost between systems and security is compromised by external dependencies.
                  </p>
                  <p>
                    Our mission is to provide <strong className="text-[#00f2ff]">unified command</strong> over 25 specialized autonomous agents that work in perfect harmony through MARCORAEX Core. We deliver tactical automation, security operations, and intelligent task execution with zero third-party dependencies.
                  </p>
                  <p>
                    Every operation runs on secure, private MARCORAEX infrastructure. 
                    <strong className="text-[#00f2ff]">Zero external API calls. 100% data sovereignty.</strong>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-4 border border-[#00f2ff]/20 bg-[#00f2ff]/5 rounded-lg animate-fade-in stagger-1">
                    <span className="text-3xl font-bold text-[#00f2ff]">25</span>
                    <p className="text-xs text-gray-500 font-mono mt-1">AUTONOMOUS AGENTS</p>
                  </div>
                  <div className="text-center p-4 border border-[#ffaa00]/20 bg-[#ffaa00]/5 rounded-lg animate-fade-in stagger-2">
                    <span className="text-3xl font-bold text-[#ffaa00]">24/7</span>
                    <p className="text-xs text-gray-500 font-mono mt-1">OPERATIONS</p>
                  </div>
                  <div className="text-center p-4 border border-green-500/20 bg-green-500/5 rounded-lg animate-fade-in stagger-3">
                    <span className="text-3xl font-bold text-green-500">0ms</span>
                    <p className="text-xs text-gray-500 font-mono mt-1">LATENCY</p>
                  </div>
                </div>
              </div>

              {/* Right: Visual Element */}
              <div className="relative animate-slide-right">
                <div className="aspect-square relative">
                  {/* Animated Rings */}
                  <div className="absolute inset-0 border-2 border-[#00f2ff]/20 rounded-full animate-spin-slow" />
                  <div className="absolute inset-8 border-2 border-[#ffaa00]/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                  <div className="absolute inset-16 border-2 border-[#00f2ff]/30 rounded-full" />
                  
                  {/* Center Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#00f2ff] to-[#ffaa00] rounded-full animate-pulse-glow flex items-center justify-center">
                      <span className="text-[#050505] font-bold text-2xl">CORE</span>
                    </div>
                  </div>

                  {/* Orbiting Dots */}
                  <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#00f2ff] rounded-full shadow-[0_0_20px_#00f2ff]" style={{ transform: 'translateX(-50%)' }} />
                  </div>
                  <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-[#ffaa00] rounded-full shadow-[0_0_20px_#ffaa00]" style={{ transform: 'translateX(-50%)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            CAPABILITIES MATRIX
            ============================================ */}
        <section className="relative py-32 px-4 md:px-8 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-mono text-[#00f2ff] text-sm tracking-[0.3em] mb-4 block">
                OPERATIONAL CAPABILITIES
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow-cyan">
                CAPABILITIES MATRIX
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Six core pillars of autonomous power. Each capability represents a domain of expertise within the Neural Army.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Capability 1: Strategic Command */}
              <div className="group p-8 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-500 hover-lift corner-accent animate-slide-up stagger-1">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-[#00f2ff] mb-4">STRATEGIC COMMAND</h3>
                <p className="text-gray-400 mb-4">
                  The General coordinates all 24 agents, making high-level tactical decisions and managing resource allocation across the entire Neural Army.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-mono">
                  <li>› Multi-agent coordination</li>
                  <li>› Resource allocation</li>
                  <li>› Strategic planning</li>
                </ul>
              </div>

              {/* Capability 2: Offensive Security */}
              <div className="group p-8 border border-[#ff4444]/20 bg-[#ff4444]/5 hover:bg-[#ff4444]/10 hover:border-[#ff4444]/50 transition-all duration-500 hover-lift corner-accent animate-slide-up stagger-2">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold text-[#ff4444] mb-4">OFFENSIVE SECURITY</h3>
                <p className="text-gray-400 mb-4">
                  The Soldier handles security operations, threat neutralization, and perimeter defense. Zero-trust architecture with real-time countermeasures.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-mono">
                  <li>› Threat neutralization</li>
                  <li>› Perimeter defense</li>
                  <li>› Zero-trust enforcement</li>
                </ul>
              </div>

              {/* Capability 3: Neural Logic */}
              <div className="group p-8 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-500 hover-lift corner-accent animate-slide-up stagger-3">
                <div className="text-5xl mb-6">🧠</div>
                <h3 className="text-2xl font-bold text-[#ffaa00] mb-4">NEURAL LOGIC</h3>
                <p className="text-gray-400 mb-4">
                  The Oracle provides data analysis, predictive intelligence, and pattern recognition. MARCORAEX Core processes millions of data points instantly.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-mono">
                  <li>› Predictive analytics</li>
                  <li>› Pattern recognition</li>
                  <li>› Data optimization</li>
                </ul>
              </div>

              {/* Capability 4: System Architecture */}
              <div className="group p-8 border border-[#00d4aa]/20 bg-[#00d4aa]/5 hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/50 transition-all duration-500 hover-lift corner-accent animate-slide-up stagger-4">
                <div className="text-5xl mb-6">🏗️</div>
                <h3 className="text-2xl font-bold text-[#00d4aa] mb-4">SYSTEM ARCHITECTURE</h3>
                <p className="text-gray-400 mb-4">
                  The Architect and Engineer handle infrastructure scaling, auto-scaling systems, and multi-language development across all platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-mono">
                  <li>› Auto-scaling infrastructure</li>
                  <li>› Multi-language development</li>
                  <li>› System optimization</li>
                </ul>
              </div>

              {/* Capability 5: Automation Engine */}
              <div className="group p-8 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-500 hover-lift corner-accent animate-slide-up stagger-5">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-[#00f2ff] mb-4">AUTOMATION ENGINE</h3>
                <p className="text-gray-400 mb-4">
                  The Spark, Forge, and Chronos execute workflows, manage CI/CD pipelines, and handle task scheduling at machine speed with 24/7 operation.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-mono">
                  <li>› Workflow automation</li>
                  <li>› CI/CD orchestration</li>
                  <li>› Temporal scheduling</li>
                </ul>
              </div>

              {/* Capability 6: Intelligence Ops */}
              <div className="group p-8 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-500 hover-lift corner-accent animate-slide-up stagger-6">
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-[#ffaa00] mb-4">INTELLIGENCE OPS</h3>
                <p className="text-gray-400 mb-4">
                  The Scout and Sentinel conduct reconnaissance, competitive analysis, and 24/7 monitoring with anomaly detection and instant alerting.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-mono">
                  <li>› Intelligence gathering</li>
                  <li>› Anomaly detection</li>
                  <li>› Competitive analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            THE ARMY REGISTRY - All 25 Agents
            ============================================ */}
        <section className="relative py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-mono text-[#ffaa00] text-sm tracking-[0.3em] mb-4 block">
                COMPLETE ROSTER
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow-cyan">
                THE ARMY REGISTRY
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                25 autonomous agents. Each with a specialized domain. Together, they form the most capable autonomous workforce ever deployed.
              </p>
            </div>

            {/* Agent Grid - All 25 Agents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Row 1: Command & Security */}
              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎖️</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The General</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">STRATEGIC COMMAND</p>
                <p className="text-sm text-gray-400">Master orchestrator coordinating all 24 agents</p>
              </div>

              <div className="agent-card p-6 border border-[#ff4444]/20 bg-[#ff4444]/5 hover:bg-[#ff4444]/10 hover:border-[#ff4444]/50 transition-all duration-300 group animate-slide-up stagger-2">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚔️</div>
                <h3 className="font-bold text-[#ff4444] mb-1">The Soldier</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">SECURITY OPS</p>
                <p className="text-sm text-gray-400">Perimeter defense and threat neutralization</p>
              </div>

              <div className="agent-card p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-300 group animate-slide-up stagger-3">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏗️</div>
                <h3 className="font-bold text-[#ffaa00] mb-1">The Architect</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">SYSTEM DESIGN</p>
                <p className="text-sm text-gray-400">Infrastructure scaling and auto-scaling</p>
              </div>

              <div className="agent-card p-6 border border-[#00d4aa]/20 bg-[#00d4aa]/5 hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/50 transition-all duration-300 group animate-slide-up stagger-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="font-bold text-[#00d4aa] mb-1">The Scribe</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">DOCUMENTATION</p>
                <p className="text-sm text-gray-400">Auto-documentation and knowledge management</p>
              </div>

              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-5">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔭</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The Scout</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">RECONNAISSANCE</p>
                <p className="text-sm text-gray-400">Intelligence gathering and analysis</p>
              </div>

              {/* Row 2: Development & Data */}
              <div className="agent-card p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-300 group animate-slide-up stagger-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                <h3 className="font-bold text-[#ffaa00] mb-1">The Engineer</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">DEVELOPMENT</p>
                <p className="text-sm text-gray-400">Multi-language coding and optimization</p>
              </div>

              <div className="agent-card p-6 border border-[#ff4444]/20 bg-[#ff4444]/5 hover:bg-[#ff4444]/10 hover:border-[#ff4444]/50 transition-all duration-300 group animate-slide-up stagger-2">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔐</div>
                <h3 className="font-bold text-[#ff4444] mb-1">The Warden</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">ACCESS CONTROL</p>
                <p className="text-sm text-gray-400">Zero-trust identity management</p>
              </div>

              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-3">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The Oracle</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">DATA ANALYSIS</p>
                <p className="text-sm text-gray-400">Predictive analytics and pattern recognition</p>
              </div>

              <div className="agent-card p-6 border border-[#00d4aa]/20 bg-[#00d4aa]/5 hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/50 transition-all duration-300 group animate-slide-up stagger-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📨</div>
                <h3 className="font-bold text-[#00d4aa] mb-1">The Courier</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">COMMUNICATIONS</p>
                <p className="text-sm text-gray-400">Secure messaging with perfect encryption</p>
              </div>

              <div className="agent-card p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-300 group animate-slide-up stagger-5">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">👁️</div>
                <h3 className="font-bold text-[#ffaa00] mb-1">The Sentinel</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">MONITORING</p>
                <p className="text-sm text-gray-400">24/7 anomaly detection and alerting</p>
              </div>

              {/* Row 3: Infrastructure */}
              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🗄️</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The Librarian</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">DATA MANAGEMENT</p>
                <p className="text-sm text-gray-400">Query optimization and data integrity</p>
              </div>

              <div className="agent-card p-6 border border-[#00d4aa]/20 bg-[#00d4aa]/5 hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/50 transition-all duration-300 group animate-slide-up stagger-2">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🌐</div>
                <h3 className="font-bold text-[#00d4aa] mb-1">The Weaver</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">NETWORK OPS</p>
                <p className="text-sm text-gray-400">Connectivity and load balancing</p>
              </div>

              <div className="agent-card p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-300 group animate-slide-up stagger-3">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⏰</div>
                <h3 className="font-bold text-[#ffaa00] mb-1">The Chronos</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">SCHEDULING</p>
                <p className="text-sm text-gray-400">Temporal orchestration and cron jobs</p>
              </div>

              <div className="agent-card p-6 border border-[#ff4444]/20 bg-[#ff4444]/5 hover:bg-[#ff4444]/10 hover:border-[#ff4444]/50 transition-all duration-300 group animate-slide-up stagger-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="font-bold text-[#ff4444] mb-1">The Auditor</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">COMPLIANCE</p>
                <p className="text-sm text-gray-400">Regulation enforcement and audits</p>
              </div>

              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-5">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The Curator</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">UI/UX MANAGEMENT</p>
                <p className="text-sm text-gray-400">Interface optimization and accessibility</p>
              </div>

              {/* Row 4: Integration & Deployment */}
              <div className="agent-card p-6 border border-[#00d4aa]/20 bg-[#00d4aa]/5 hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/50 transition-all duration-300 group animate-slide-up stagger-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
                <h3 className="font-bold text-[#00d4aa] mb-1">The Nexus</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">INTEGRATION</p>
                <p className="text-sm text-gray-400">API ecosystem management</p>
              </div>

              <div className="agent-card p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-300 group animate-slide-up stagger-2">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚒️</div>
                <h3 className="font-bold text-[#ffaa00] mb-1">The Forge</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">BUILD & DEPLOY</p>
                <p className="text-sm text-gray-400">CI/CD pipelines and releases</p>
              </div>

              <div className="agent-card p-6 border border-[#ff4444]/20 bg-[#ff4444]/5 hover:bg-[#ff4444]/10 hover:border-[#ff4444]/50 transition-all duration-300 group animate-slide-up stagger-3">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🗝️</div>
                <h3 className="font-bold text-[#ff4444] mb-1">The Vault</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">SECRETS MGMT</p>
                <p className="text-sm text-gray-400">Credential security and rotation</p>
              </div>

              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The Horizon</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">GLOBAL OPS</p>
                <p className="text-sm text-gray-400">Multi-region orchestration</p>
              </div>

              <div className="agent-card p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-300 group animate-slide-up stagger-5">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="font-bold text-[#ffaa00] mb-1">The Spark</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">AUTOMATION</p>
                <p className="text-sm text-gray-400">Workflow and task execution</p>
              </div>

              {/* Row 5: Operations & Support */}
              <div className="agent-card p-6 border border-[#ff4444]/20 bg-[#ff4444]/5 hover:bg-[#ff4444]/10 hover:border-[#ff4444]/50 transition-all duration-300 group animate-slide-up stagger-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔔</div>
                <h3 className="font-bold text-[#ff4444] mb-1">The Beacon</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">ALERTING</p>
                <p className="text-sm text-gray-400">Smart notification dispatch</p>
              </div>

              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-2">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔧</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The Kernel</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">CORE SYSTEMS</p>
                <p className="text-sm text-gray-400">Hardware optimization</p>
              </div>

              <div className="agent-card p-6 border border-[#00d4aa]/20 bg-[#00d4aa]/5 hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/50 transition-all duration-300 group animate-slide-up stagger-3">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">💾</div>
                <h3 className="font-bold text-[#00d4aa] mb-1">The Archive</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">BACKUP & RECOVERY</p>
                <p className="text-sm text-gray-400">Disaster recovery protocols</p>
              </div>

              <div className="agent-card p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 hover:bg-[#ffaa00]/10 hover:border-[#ffaa00]/50 transition-all duration-300 group animate-slide-up stagger-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                <h3 className="font-bold text-[#ffaa00] mb-1">The Console</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">CLI OPERATIONS</p>
                <p className="text-sm text-gray-400">Shell scripting and terminal</p>
              </div>

              <div className="agent-card p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]/50 transition-all duration-300 group animate-slide-up stagger-5">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">☁️</div>
                <h3 className="font-bold text-[#00f2ff] mb-1">The Bridge</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">CLOUD MANAGEMENT</p>
                <p className="text-sm text-gray-400">Multi-cloud orchestration</p>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 rounded-lg">
                <span className="text-4xl font-bold text-[#00f2ff]">25</span>
                <p className="text-sm text-gray-500 font-mono mt-2">SPECIALIZED AGENTS</p>
              </div>
              <div className="text-center p-6 border border-[#ffaa00]/20 bg-[#ffaa00]/5 rounded-lg">
                <span className="text-4xl font-bold text-[#ffaa00]">∞</span>
                <p className="text-sm text-gray-500 font-mono mt-2">CAPABILITIES</p>
              </div>
              <div className="text-center p-6 border border-green-500/20 bg-green-500/5 rounded-lg">
                <span className="text-4xl font-bold text-green-500">100%</span>
                <p className="text-sm text-gray-500 font-mono mt-2">AUTONOMOUS</p>
              </div>
              <div className="text-center p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 rounded-lg">
                <span className="text-4xl font-bold text-[#00f2ff]">0</span>
                <p className="text-sm text-gray-500 font-mono mt-2">HUMAN INTERVENTION</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            TECHNICAL SPECIFICATIONS
            ============================================ */}
        <section className="relative py-32 px-4 md:px-8 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="font-mono text-[#00f2ff] text-sm tracking-[0.3em] mb-4 block">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow-cyan">
                TECHNICAL SPECIFICATIONS
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enterprise-grade architecture designed for mission-critical operations. Every specification optimized for maximum performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Spec 1: Task Execution */}
              <div className="p-8 border border-[#00f2ff]/20 bg-[#00f2ff]/5 rounded-lg hover:border-[#00f2ff]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#00f2ff] mb-4 flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  TASK EXECUTION
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00f2ff] mt-1">›</span>
                    <div>
                      <strong className="text-white">Sub-50ms Response Times</strong>
                      <p className="text-sm text-gray-500">Lightning-fast execution for real-time operations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00f2ff] mt-1">›</span>
                    <div>
                      <strong className="text-white">Parallel Processing</strong>
                      <p className="text-sm text-gray-500">25 agents execute tasks simultaneously without conflict</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00f2ff] mt-1">›</span>
                    <div>
                      <strong className="text-white">Auto-Scaling</strong>
                      <p className="text-sm text-gray-500">Infrastructure scales automatically based on workload</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Spec 2: API Orchestration */}
              <div className="p-8 border border-[#ffaa00]/20 bg-[#ffaa00]/5 rounded-lg hover:border-[#ffaa00]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#ffaa00] mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔌</span>
                  API ORCHESTRATION
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffaa00] mt-1">›</span>
                    <div>
                      <strong className="text-white">Zero Third-Party APIs</strong>
                      <p className="text-sm text-gray-500">100% internal processing, no external dependencies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffaa00] mt-1">›</span>
                    <div>
                      <strong className="text-white">RESTful & GraphQL</strong>
                      <p className="text-sm text-gray-500">Full API ecosystem for integration</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffaa00] mt-1">›</span>
                    <div>
                      <strong className="text-white">Webhook Support</strong>
                      <p className="text-sm text-gray-500">Real-time event-driven architecture</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Spec 3: Security Stack */}
              <div className="p-8 border border-[#ff4444]/20 bg-[#ff4444]/5 rounded-lg hover:border-[#ff4444]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#ff4444] mb-4 flex items-center gap-3">
                  <span className="text-3xl">🛡️</span>
                  SECURITY STACK
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4444] mt-1">›</span>
                    <div>
                      <strong className="text-white">AES-256-GCM Encryption</strong>
                      <p className="text-sm text-gray-500">Military-grade encryption for all data</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4444] mt-1">›</span>
                    <div>
                      <strong className="text-white">Zero-Trust Architecture</strong>
                      <p className="text-sm text-gray-500">Every request verified, never trust, always verify</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff4444] mt-1">›</span>
                    <div>
                      <strong className="text-white">Local-First Design</strong>
                      <p className="text-sm text-gray-500">Data never leaves your infrastructure</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Spec 4: Neural Core */}
              <div className="p-8 border border-[#00d4aa]/20 bg-[#00d4aa]/5 rounded-lg hover:border-[#00d4aa]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#00d4aa] mb-4 flex items-center gap-3">
                  <span className="text-3xl">🧠</span>
                  NEURAL CORE
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00d4aa] mt-1">›</span>
                    <div>
                      <strong className="text-white">MARCORAEX Core Logic</strong>
                      <p className="text-sm text-gray-500">Proprietary orchestration engine</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00d4aa] mt-1">›</span>
                    <div>
                      <strong className="text-white">Context Awareness</strong>
                      <p className="text-sm text-gray-500">Maintains state across 25 agents seamlessly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00d4aa] mt-1">›</span>
                    <div>
                      <strong className="text-white">Learning & Adaptation</strong>
                      <p className="text-sm text-gray-500">Continuously improves from operations</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="mt-20 p-8 border border-[#00f2ff]/30 bg-gradient-to-br from-[#00f2ff]/10 to-[#050505] rounded-lg">
              <h3 className="text-2xl font-bold text-[#00f2ff] mb-8 text-center">MARCORAEX ARCHITECTURE</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Input Layer */}
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-gray-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-400 font-mono text-sm">INPUTS</span>
                  </div>
                  <p className="text-xs text-gray-500">Commands • APIs • Events</p>
                </div>

                {/* Arrow */}
                <div className="text-[#00f2ff] text-2xl">→</div>

                {/* Core Layer */}
                <div className="text-center">
                  <div className="w-40 h-40 border-2 border-[#00f2ff] rounded-lg flex items-center justify-center mb-2 animate-pulse-glow bg-[#00f2ff]/10">
                    <span className="text-[#00f2ff] font-bold">MARCORAEX<br/>CORE</span>
                  </div>
                  <p className="text-xs text-gray-500">Orchestration • Logic • State</p>
                </div>

                {/* Arrow */}
                <div className="text-[#00f2ff] text-2xl">→</div>

                {/* Agent Layer */}
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-[#ffaa00] rounded-lg flex items-center justify-center mb-2">
                    <span className="text-[#ffaa00] font-bold text-2xl">25</span>
                  </div>
                  <p className="text-xs text-gray-500">Neural Army Agents</p>
                </div>

                {/* Arrow */}
                <div className="text-[#00f2ff] text-2xl">→</div>

                {/* Output Layer */}
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-green-500 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-green-500 font-mono text-sm">OUTPUTS</span>
                  </div>
                  <p className="text-xs text-gray-500">Results • Actions • Reports</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            CTA SECTION
            ============================================ */}
        <section className="relative py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 border-2 border-[#00f2ff]/40 bg-gradient-to-b from-[#00f2ff]/15 via-[#050505] to-[#050505] rounded-2xl animate-pulse-glow">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-cyan">
                READY TO DEPLOY?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join the ranks of commanders using MARCORAEX to orchestrate their operations. 
                The Neural Army awaits your command.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/download"
                  className="px-10 py-5 bg-[#00f2ff] text-[#050505] font-mono font-bold tracking-wider hover:shadow-[0_0_60px_rgba(0,242,255,0.6)] transition-all duration-300"
                >
                  DOWNLOAD NEURAL CORE
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 border-2 border-[#ffaa00] text-[#ffaa00] font-mono font-bold tracking-wider hover:bg-[#ffaa00]/10 transition-all duration-300"
                >
                  CONTACT COMMAND
                </Link>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00f2ff]/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#00f2ff]/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#00f2ff]/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00f2ff]/50" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
