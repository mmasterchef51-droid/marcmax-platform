import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, Zap, Target, Crown, Server, 
  Clock, Check, X, AlertTriangle, ArrowRight,
  Cpu, Lock, Globe, Database
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Access Plans | MARCORAEX",
  description: "Choose your Neural Army deployment tier. From 2-Day Free Trial to MARCORAEX Elite with dedicated instances. 6 tiers of tactical automation power.",
};

// Plan configurations
const plans = [
  {
    id: "recruit",
    name: "RECRUIT",
    tier: 0,
    rank: "Trial Access",
    price: "$0",
    period: "2 days",
    description: "Experience the Neural Army with limited tactical capabilities",
    icon: Shield,
    color: "#6b7280",
    accentColor: "gray",
    requests: { daily: 10, total: "50k" },
    tokens: { daily: "50k", total: "50k" },
    features: [
      { text: "10 Requests/Day", included: true },
      { text: "50k Neural Tokens", included: true },
      { text: "Basic Agents Only", included: true },
      { text: "Standard Processing Speed", included: true },
      { text: "Community Support", included: true },
      { text: "No Downloads", included: false },
      { text: "No Project Exports", included: false },
      { text: "No Priority Support", included: false },
    ],
    cta: "START TRIAL",
    href: "/contact?plan=recruit",
    badge: "FREE",
    popular: false,
  },
  {
    id: "soldier",
    name: "SOLDIER",
    tier: 1,
    rank: "Tier 1",
    price: "$15",
    period: "/month",
    description: "Unlock basic downloads and advanced vision capabilities",
    icon: Target,
    color: "#00d4aa",
    accentColor: "emerald",
    requests: { daily: 50, total: "1.5M" },
    tokens: { daily: "250k", total: "7.5M" },
    features: [
      { text: "50 Requests/Day", included: true },
      { text: "250k Neural Tokens/Day", included: true },
      { text: "Basic Downloads Unlocked", included: true },
      { text: "Advanced Vision Access", included: true },
      { text: "Standard Processing", included: true },
      { text: "Email Support", included: true },
      { text: "No Project Exports", included: false },
      { text: "No High-Speed Processing", included: false },
    ],
    cta: "DEPLOY SOLDIER",
    href: "/contact?plan=soldier",
    badge: null,
    popular: false,
  },
  {
    id: "squad-leader",
    name: "SQUAD LEADER",
    tier: 2,
    rank: "Tier 2",
    price: "$45",
    period: "/month",
    description: "High-speed processing with full project export capabilities",
    icon: Zap,
    color: "#00f2ff",
    accentColor: "cyan",
    requests: { daily: 200, total: "6M" },
    tokens: { daily: "1M", total: "30M" },
    features: [
      { text: "200 Requests/Day", included: true },
      { text: "1M Neural Tokens/Day", included: true },
      { text: "High-Speed Processing", included: true },
      { text: "Full Project Exports", included: true },
      { text: "All Agent Types", included: true },
      { text: "Priority Queue", included: true },
      { text: "Enhanced Vision", included: true },
      { text: "No Dedicated Instance", included: false },
    ],
    cta: "LEAD SQUAD",
    href: "/contact?plan=squad-leader",
    badge: "POPULAR",
    popular: true,
  },
  {
    id: "general",
    name: "GENERAL",
    tier: 3,
    rank: "Tier 3",
    price: "$150",
    period: "/month",
    description: "Military-grade neural logic with priority support channels",
    icon: Crown,
    color: "#ffaa00",
    accentColor: "amber",
    requests: { daily: 1000, total: "30M" },
    tokens: { daily: "5M", total: "150M" },
    features: [
      { text: "1,000 Requests/Day", included: true },
      { text: "5M Neural Tokens/Day", included: true },
      { text: "Military-Grade Neural Logic", included: true },
      { text: "Priority Support Channel", included: true },
      { text: "Ultra-High Speed", included: true },
      { text: "Custom Agent Training", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "No Dedicated Instance", included: false },
    ],
    cta: "COMMAND GENERAL",
    href: "/contact?plan=general",
    badge: null,
    popular: false,
  },
  {
    id: "elite",
    name: "MARCORAEX ELITE",
    tier: 4,
    rank: "Tier 4",
    price: "$500",
    period: "/month",
    description: "Dedicated neural instance with zero-latency execution",
    icon: Server,
    color: "#8b5cf6",
    accentColor: "violet",
    requests: { daily: 5000, total: "150M" },
    tokens: { daily: "25M", total: "750M" },
    features: [
      { text: "5,000 Requests/Day", included: true },
      { text: "25M Neural Tokens/Day", included: true },
      { text: "Dedicated Neural Instance", included: true },
      { text: "Zero-Latency Execution", included: true },
      { text: "24/7 Dedicated Support", included: true },
      { text: "Custom SLA Agreement", included: true },
      { text: "Enterprise Security Audit", included: true },
      { text: "White-Label Options", included: true },
    ],
    cta: "GO ELITE",
    href: "/contact?plan=elite",
    badge: "ENTERPRISE",
    popular: false,
  },
  {
    id: "payg",
    name: "TACTICAL PAYG",
    tier: 5,
    rank: "Flexible",
    price: "$2",
    period: "/month base",
    description: "Usage-based billing with all features unlocked",
    icon: Clock,
    color: "#ec4899",
    accentColor: "pink",
    requests: { daily: "Unlimited", total: "Pay per use" },
    tokens: { daily: "Unlimited", total: "Pay per use" },
    features: [
      { text: "$2/month Base Fee", included: true },
      { text: "$0.02 per 1k Tokens", included: true },
      { text: "All Features Unlocked", included: true },
      { text: "Usage-Based Scaling", included: true },
      { text: "Real-Time Billing Dashboard", included: true },
      { text: "No Daily Limits", included: true },
      { text: "Auto-Top Up Available", included: true },
      { text: "Pause Anytime", included: true },
    ],
    cta: "START PAYG",
    href: "/contact?plan=payg",
    badge: "FLEXIBLE",
    popular: false,
  },
];

// JSON-LD Product schema for SEO
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MARCORAEX Neural Army Access Plans",
  "description": "Tiered access to the MARCORAEX Neural Army autonomous agent platform",
  "brand": {
    "@type": "Organization",
    "name": "MARCORAEX"
  },
  "offers": plans.slice(1).map(plan => ({
    "@type": "Offer",
    "name": plan.name,
    "description": plan.description,
    "price": plan.price.replace(/[^0-9.]/g, ""),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": `https://marcorex-ai.vercel.app${plan.href}`,
  })),
};

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
              Command Authorization Levels
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white text-glow-cyan mb-6">
              ACCESS PLANS
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your Neural Army deployment tier. From 2-Day Free Trial to 
              dedicated instances with zero-latency execution.
            </p>
          </div>

          {/* Usage Stats Summary */}
          <div className="mb-12 p-6 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-3xl font-bold text-[#00f2ff]">6</span>
                <p className="font-mono text-sm text-gray-500 mt-1">Access Tiers</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#ffaa00]">25</span>
                <p className="font-mono text-sm text-gray-500 mt-1">Neural Agents</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-green-500">100%</span>
                <p className="font-mono text-sm text-gray-500 mt-1">Local-First</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#00f2ff]">0ms</span>
                <p className="font-mono text-sm text-gray-500 mt-1">External APIs</p>
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-lg border ${
                    plan.popular
                      ? "border-[#00f2ff]/40 bg-[#00f2ff]/5"
                      : "border-[#00f2ff]/10 bg-[#020617]/50"
                  } p-6 hover:border-opacity-60 transition-all duration-300 flex flex-col`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className="absolute -top-3 left-4 px-3 py-1 rounded text-xs font-mono font-bold"
                      style={{
                        backgroundColor: `${plan.color}20`,
                        color: plan.color,
                        border: `1px solid ${plan.color}40`,
                      }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  {/* Popular Indicator */}
                  {plan.popular && (
                    <div className="absolute -top-3 right-4 px-3 py-1 rounded text-xs font-mono font-bold bg-[#00f2ff] text-[#020617]">
                      RECOMMENDED
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border"
                      style={{
                        borderColor: `${plan.color}40`,
                        backgroundColor: `${plan.color}10`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: plan.color }} />
                    </div>
                    <p className="font-mono text-xs text-gray-500 mb-1">{plan.rank}</p>
                    <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                  </div>

                  {/* Usage Limits */}
                  <div className="mb-6 p-4 rounded bg-[#020617] border border-[#00f2ff]/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-gray-500">Daily Requests</span>
                      <span className="font-mono text-sm text-[#00f2ff]">
                        {typeof plan.requests.daily === "number" ? plan.requests.daily.toLocaleString() : plan.requests.daily}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-gray-500">Neural Tokens</span>
                      <span className="font-mono text-sm text-[#00f2ff]">
                        {plan.tokens.daily}/day
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-gray-600 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={plan.href}
                    className={`group block w-full py-3 text-center font-mono text-sm font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-[#00f2ff] text-[#020617] hover:bg-[#00f2ff]/80"
                        : plan.id === "recruit"
                        ? "border border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white"
                        : "border border-[#00f2ff]/50 text-[#00f2ff] hover:bg-[#00f2ff]/10"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Feature Comparison Table */}
          <div className="mb-16 overflow-x-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">TIER COMPARISON</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#00f2ff]/20">
                  <th className="text-left p-4 font-mono text-sm text-gray-400">Capability</th>
                  {plans.map(plan => (
                    <th key={plan.id} className="text-center p-4 font-mono text-sm">
                      <span style={{ color: plan.color }}>{plan.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#00f2ff]/10">
                  <td className="p-4 text-gray-400">Daily Requests</td>
                  {plans.map(plan => (
                    <td key={plan.id} className="text-center p-4 font-mono text-sm text-white">
                      {typeof plan.requests.daily === "number" ? plan.requests.daily.toLocaleString() : plan.requests.daily}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#00f2ff]/10">
                  <td className="p-4 text-gray-400">Neural Tokens/Day</td>
                  {plans.map(plan => (
                    <td key={plan.id} className="text-center p-4 font-mono text-sm text-white">
                      {plan.tokens.daily}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#00f2ff]/10">
                  <td className="p-4 text-gray-400">Download Access</td>
                  {plans.map(plan => (
                    <td key={plan.id} className="text-center p-4">
                      {plan.tier >= 1 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#00f2ff]/10">
                  <td className="p-4 text-gray-400">Project Exports</td>
                  {plans.map(plan => (
                    <td key={plan.id} className="text-center p-4">
                      {plan.tier >= 2 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#00f2ff]/10">
                  <td className="p-4 text-gray-400">High-Speed Processing</td>
                  {plans.map(plan => (
                    <td key={plan.id} className="text-center p-4">
                      {plan.tier >= 2 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#00f2ff]/10">
                  <td className="p-4 text-gray-400">Priority Support</td>
                  {plans.map(plan => (
                    <td key={plan.id} className="text-center p-4">
                      {plan.tier >= 3 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#00f2ff]/10">
                  <td className="p-4 text-gray-400">Dedicated Instance</td>
                  {plans.map(plan => (
                    <td key={plan.id} className="text-center p-4">
                      {plan.tier >= 4 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ / Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/50">
              <Cpu className="w-8 h-8 text-[#00f2ff] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">What are Neural Tokens?</h3>
              <p className="text-sm text-gray-400">
                Neural Tokens represent the computational capacity used by MARCORAEX Core 
                to process your requests. Each agent operation consumes tokens based on complexity.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/50">
              <Lock className="w-8 h-8 text-[#ffaa00] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Can I Upgrade Anytime?</h3>
              <p className="text-sm text-gray-400">
                Yes. Upgrade instantly from your Neural Dashboard. Your current usage 
                period will be prorated toward the new tier.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/50">
              <Database className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">What Happens to My Data?</h3>
              <p className="text-sm text-gray-400">
                100% local-first. Your data never leaves your infrastructure. 
                Even on trial tiers, full privacy is guaranteed.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Not sure which tier fits your mission?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00f2ff] text-[#020617] font-mono text-sm font-semibold hover:bg-[#00f2ff]/80 transition-colors"
            >
              <Globe className="w-4 h-4" />
              REQUEST TACTICAL CONSULTATION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
