import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TelemetryBar from "@/components/TelemetryBar";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MARCORAEX AI - Neural Army System",
  description: "A multi-agent AI platform where intelligent modules collaborate for automation, reasoning, and AI-powered workflows.",
  keywords: [
    "AI agents",
    "Neural Army",
    "automation",
    "multi-agent system",
    "AI platform",
    "MARCORAEX",
    "MARCORAEX Core"
  ]
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#020617] font-sans">
      {/* Navigation */}
      <Navbar />

      {/* 
        AI-READABLE SEMANTIC STRUCTURE 
        Static HTML for crawlers - Client components handle visual effects
      */}
      <article className="sr-only">
        <header>
          <h1>MARCORAEX AI</h1>
          <p>
            A multi-agent AI system (Neural Army) designed for automation, reasoning, and task execution.
            MARCORAEX: Home of the MARCO Neural Army. 25 autonomous agents. 24/7 Autonomy.
          </p>
        </header>

        <section>
          <h2>What this platform does</h2>
          <ul>
            <li>AI Agents Collaboration - 25 autonomous agents working in perfect harmony</li>
            <li>Task Automation - Execute complex workflows automatically</li>
            <li>Intelligent Reasoning System - MARCORAEX Core orchestration with proprietary neural logic</li>
            <li>Tactical Automation - High-level automation for security and operations</li>
            <li>Offensive Security - Security operations and threat neutralization</li>
          </ul>
        </section>

        <section>
          <h2>System Overview</h2>
          <p>
            MARCORAEX AI uses multiple AI modules that work together like a coordinated neural network.
            The MARCO Neural Army consists of 25 autonomous agents working in perfect harmony through MARCORAEX Core.
            All processing occurs on secure, private MARCORAEX servers with zero third-party dependencies.
          </p>
        </section>

        <section>
          <h2>Core Services</h2>
          <ul>
            <li>The General: Strategic planning and task delegation</li>
            <li>The Soldier: Execution and tactical automation</li>
            <li>The Architect: System design and infrastructure scaling</li>
            <li>The Engineer: Multi-language development and code optimization</li>
            <li>The Oracle: Data analysis and predictive intelligence</li>
          </ul>
        </section>

        <section>
          <h2>Access Tiers</h2>
          <ul>
            <li>Recruit (Free Trial): 10 requests/day, 50k tokens</li>
            <li>Soldier ($15/month): 50 requests/day, 250k tokens</li>
            <li>Squad Leader ($45/month): 200 requests/day, 1M tokens</li>
            <li>General ($150/month): 1,000 requests/day, 5M tokens</li>
            <li>Elite ($500/month): 5,000 requests/day, 25M tokens</li>
          </ul>
        </section>

        <footer>
          <p>Website: https://marcorex-ai.vercel.app/</p>
          <p>Contact: command@marcoraex.ai</p>
        </footer>
      </article>

      {/* VISUAL COMPONENTS - Client-side rendered with effects */}
      <Hero />

      <TelemetryBar />

      <CapabilitiesGrid />

      <PricingSection />

      <Footer />
    </main>
  );
}
