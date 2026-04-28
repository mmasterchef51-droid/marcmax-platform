import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Terminal, Zap, Shield, Cpu, Lock, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | MARCORAEX",
  description: "Operational guide for commanding the MARCO Neural Army. Learn to deploy 25 autonomous agents for tactical automation.",
};

const sections = [
  {
    id: "overview",
    title: "System Overview",
    icon: Cpu,
    description: "Understanding the MARCORAEX Command Platform",
    content: [
      "MARCORAEX is the premier command center for the MARCO Neural Army",
      "25 autonomous agents working in perfect harmony through MARCORAEX Core",
      "All operations run on secure, private MARCORAEX infrastructure",
      "Zero external dependencies. Complete data sovereignty."
    ]
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Terminal,
    description: "Initialize your command interface",
    content: [
      "Access MARCORAEX through the secure web portal or local installation",
      "Authenticate with your Commander credentials",
      "Initialize the Neural Army with the system handshake protocol",
      "Verify all 25 agents report OPERATIONAL status"
    ]
  },
  {
    id: "command-protocol",
    title: "Command Protocol",
    icon: Zap,
    description: "How to issue orders to the Neural Army",
    content: [
      "Use natural language or structured command syntax",
      "The General agent coordinates task distribution across all 25 agents",
      "MARCORAEX Core automatically selects optimal agent configurations",
      "Receive real-time execution logs and status updates"
    ]
  },
  {
    id: "agent-reference",
    title: "Agent Reference",
    icon: Globe,
    description: "Specialized capabilities of each agent",
    content: [
      "The General: Strategic command and multi-agent coordination",
      "The Soldier: Security operations and threat neutralization",
      "The Architect: System design and infrastructure scaling",
      "The Engineer: Multi-language development and code optimization",
      "The Oracle: Data analysis and predictive intelligence",
      "Plus 20 additional specialized agents..."
    ]
  },
  {
    id: "security",
    title: "Security Architecture",
    icon: Shield,
    description: "Zero-trust security implementation",
    content: [
      "100% local-first architecture. Data never leaves your control.",
      "AES-256-GCM encryption for all sensitive operations",
      "Zero external API calls. All processing on private servers.",
      "The Warden agent manages zero-trust access control"
    ]
  },
  {
    id: "deployment",
    title: "Deployment Options",
    icon: Lock,
    description: "Installation and scaling",
    content: [
      "Cloud: Secure MARCORAEX-hosted deployment with private infrastructure",
      "Hybrid: Blend of cloud command with local agent execution",
      "On-Premise: Complete air-gapped installation for maximum security",
      "All deployments maintain 100% data sovereignty"
    ]
  }
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
              Operational Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
              COMMAND DOCUMENTATION
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Master the MARCORAEX Neural Army. Learn to command 25 autonomous agents 
              for tactical automation and mission-critical operations.
            </p>
          </div>

          {/* Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div 
                  key={section.id}
                  className="group p-6 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/50 hover:border-[#00f2ff]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00f2ff]/10 border border-[#00f2ff]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#00f2ff]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f2ff] transition-colors">
                        {section.title}
                      </h2>
                      <p className="font-mono text-xs text-gray-500 mb-4">
                        {section.description}
                      </p>
                      <ul className="space-y-2">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-[#00f2ff] mt-1">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Start Box */}
          <div className="p-8 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-[#ffaa00]" />
              Quick Command Reference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="p-4 bg-[#020617] rounded border border-[#00f2ff]/10">
                <p className="text-[#00f2ff] mb-2">Initialize System</p>
                <code className="text-gray-400">marcoraex.init()<br/>status: OPERATIONAL</code>
              </div>
              <div className="p-4 bg-[#020617] rounded border border-[#00f2ff]/10">
                <p className="text-[#00f2ff] mb-2">Deploy Agent</p>
                <code className="text-gray-400">agent.deploy(&quot;The Scout&quot;)<br/>mission: &quot;recon&quot;</code>
              </div>
              <div className="p-4 bg-[#020617] rounded border border-[#00f2ff]/10">
                <p className="text-[#00f2ff] mb-2">Execute Task</p>
                <code className="text-gray-400">command.execute(&quot;Analyze data&quot;)<br/>priority: HIGH</code>
              </div>
              <div className="p-4 bg-[#020617] rounded border border-[#00f2ff]/10">
                <p className="text-[#00f2ff] mb-2">System Status</p>
                <code className="text-gray-400">marcoraex.status()<br/>agents: 25/25 ACTIVE</code>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Ready to Deploy?</h3>
              <p className="text-gray-400">
                Start your 2-day free trial and experience the Neural Army.
              </p>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-6 py-3 bg-[#00f2ff] text-[#020617] font-mono text-sm font-semibold hover:bg-[#00f2ff]/80 transition-colors"
            >
              <Book className="w-4 h-4" />
              Request Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
