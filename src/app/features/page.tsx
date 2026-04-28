import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Brain, Code, Shield, Terminal, Database, 
  Eye, MessageSquare, Cpu, Lock, Globe, 
  Zap, Layers, Search, Command, Activity,
  FileText, Settings, Users, Bell, Clock,
  Layout, Cloud, Wifi, Server, Box
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features | MARCORAEX",
  description: "Discover the 25 autonomous agents of the MARCO Neural Army. Tactical automation for security, development, research, and operations.",
};

const agents = [
  {
    name: "The General",
    icon: Command,
    role: "Strategic Command",
    description: "Master orchestrator that coordinates all 24 agents. Makes high-level tactical decisions and manages resource allocation.",
    capability: "Multi-agent coordination",
    color: "#00f2ff"
  },
  {
    name: "The Soldier",
    icon: Shield,
    role: "Security Operations",
    description: "Perimeter defense specialist. Monitors threats, manages firewalls, and executes counter-measures in real-time.",
    capability: "Threat neutralization",
    color: "#ff4444"
  },
  {
    name: "The Architect",
    icon: Layers,
    role: "System Design",
    description: "Infrastructure planner. Designs scalable systems, manages deployments, and optimizes resource topology.",
    capability: "Auto-scaling infrastructure",
    color: "#ffaa00"
  },
  {
    name: "The Scribe",
    icon: FileText,
    role: "Documentation",
    description: "Knowledge keeper. Generates technical docs, maintains changelogs, and creates training materials automatically.",
    capability: "Auto-documentation",
    color: "#00d4aa"
  },
  {
    name: "The Scout",
    icon: Search,
    role: "Reconnaissance",
    description: "Information gatherer. Conducts web research, competitive analysis, and market intelligence operations.",
    capability: "Intelligence gathering",
    color: "#00f2ff"
  },
  {
    name: "The Engineer",
    icon: Code,
    role: "Development",
    description: "Code craftsman. Writes, reviews, and optimizes code across all major languages and frameworks.",
    capability: "Multi-language development",
    color: "#ffaa00"
  },
  {
    name: "The Warden",
    icon: Lock,
    role: "Access Control",
    description: "Identity guardian. Manages authentication, authorization, and zero-trust security policies.",
    capability: "Zero-trust enforcement",
    color: "#ff4444"
  },
  {
    name: "The Oracle",
    icon: Brain,
    role: "Data Analysis",
    description: "Pattern recognition expert. Analyzes datasets, generates insights, and predicts operational trends.",
    capability: "Predictive analytics",
    color: "#00f2ff"
  },
  {
    name: "The Courier",
    icon: MessageSquare,
    role: "Communications",
    description: "Message dispatcher. Handles all internal and external communications with perfect encryption.",
    capability: "Secure messaging",
    color: "#00d4aa"
  },
  {
    name: "The Sentinel",
    icon: Eye,
    role: "Monitoring",
    description: "System watcher. 24/7 monitoring of all infrastructure with anomaly detection and instant alerting.",
    capability: "Anomaly detection",
    color: "#ffaa00"
  },
  {
    name: "The Librarian",
    icon: Database,
    role: "Data Management",
    description: "Storage curator. Manages databases, optimizes queries, and ensures data integrity across systems.",
    capability: "Data optimization",
    color: "#00f2ff"
  },
  {
    name: "The Weaver",
    icon: Wifi,
    role: "Network Operations",
    description: "Connectivity specialist. Manages network topology, load balancing, and traffic optimization.",
    capability: "Network orchestration",
    color: "#00d4aa"
  },
  {
    name: "The Chronos",
    icon: Clock,
    role: "Scheduling",
    description: "Time keeper. Manages cron jobs, schedules tasks, and optimizes temporal resource allocation.",
    capability: "Temporal orchestration",
    color: "#ffaa00"
  },
  {
    name: "The Auditor",
    icon: Activity,
    role: "Compliance",
    description: "Regulation enforcer. Ensures compliance, audits operations, and generates regulatory reports.",
    capability: "Compliance automation",
    color: "#ff4444"
  },
  {
    name: "The Curator",
    icon: Layout,
    role: "UI/UX Management",
    description: "Interface designer. Manages user interfaces, optimizes experiences, and ensures accessibility standards.",
    capability: "Interface optimization",
    color: "#00f2ff"
  },
  {
    name: "The Nexus",
    icon: Server,
    role: "Integration",
    description: "Connection broker. Integrates third-party services and manages API ecosystems securely.",
    capability: "Secure integration",
    color: "#00d4aa"
  },
  {
    name: "The Forge",
    icon: Box,
    role: "Build & Deploy",
    description: "Deployment master. Manages CI/CD pipelines, builds artifacts, and orchestrates releases.",
    capability: "Deployment automation",
    color: "#ffaa00"
  },
  {
    name: "The Vault",
    icon: Lock,
    role: "Secrets Management",
    description: "Secret keeper. Manages credentials, API keys, and sensitive configuration with military-grade security.",
    capability: "Secret rotation",
    color: "#ff4444"
  },
  {
    name: "The Horizon",
    icon: Globe,
    role: "Global Operations",
    description: "Scale commander. Manages multi-region deployments and ensures global high availability.",
    capability: "Global orchestration",
    color: "#00f2ff"
  },
  {
    name: "The Spark",
    icon: Zap,
    role: "Automation",
    description: "Task runner. Executes automated workflows, scripts, and repetitive operations at machine speed.",
    capability: "Workflow automation",
    color: "#ffaa00"
  },
  {
    name: "The Beacon",
    icon: Bell,
    role: "Alerting",
    description: "Notification dispatcher. Manages alerts across all channels with intelligent routing and escalation.",
    capability: "Smart alerting",
    color: "#ff4444"
  },
  {
    name: "The Kernel",
    icon: Cpu,
    role: "Core Systems",
    description: "System steward. Manages OS-level operations, kernel parameters, and hardware optimization.",
    capability: "System optimization",
    color: "#00f2ff"
  },
  {
    name: "The Archive",
    icon: Database,
    role: "Backup & Recovery",
    description: "Disaster protector. Manages backups, disaster recovery, and business continuity protocols.",
    capability: "Disaster recovery",
    color: "#00d4aa"
  },
  {
    name: "The Console",
    icon: Terminal,
    role: "CLI Operations",
    description: "Command executor. Manages terminal operations, shell scripts, and command-line workflows.",
    capability: "CLI automation",
    color: "#ffaa00"
  },
  {
    name: "The Bridge",
    icon: Cloud,
    role: "Cloud Management",
    description: "Cloud coordinator. Manages cloud resources across AWS, Azure, and private infrastructure.",
    capability: "Multi-cloud orchestration",
    color: "#00f2ff"
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
            Neural Army Roster
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-glow-cyan mb-6">
            25 AUTONOMOUS AGENTS
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each agent specializes in a unique domain. Together, they form the most capable 
            autonomous workforce ever deployed. MARCORAEX Core orchestrates perfect harmony.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div 
                key={agent.name}
                className="group p-6 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/50 hover:border-[#00f2ff]/30 hover:bg-[#00f2ff]/5 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border"
                  style={{ 
                    borderColor: `${agent.color}40`, 
                    backgroundColor: `${agent.color}10` 
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: agent.color }} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00f2ff] transition-colors">
                  {agent.name}
                </h3>
                <p className="font-mono text-xs text-gray-500 mb-3">
                  {agent.role}
                </p>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {agent.description}
                </p>
                <div className="pt-3 border-t border-[#00f2ff]/10">
                  <span className="font-mono text-xs text-[#00f2ff]/70">
                    → {agent.capability}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 p-8 rounded-lg border border-[#00f2ff]/20 bg-gradient-to-r from-[#00f2ff]/10 via-[#00f2ff]/5 to-[#00f2ff]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-4xl font-bold text-[#00f2ff]">25</span>
              <p className="font-mono text-sm text-gray-500 mt-2">Specialized Agents</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#ffaa00]">∞</span>
              <p className="font-mono text-sm text-gray-500 mt-2">Capabilities</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-green-500">24/7</span>
              <p className="font-mono text-sm text-gray-500 mt-2">Autonomous Operation</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-[#00f2ff]">0ms</span>
              <p className="font-mono text-sm text-gray-500 mt-2">Context Switching</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
