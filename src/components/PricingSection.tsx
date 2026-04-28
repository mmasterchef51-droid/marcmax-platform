"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "FREE TRIAL",
    description: "2-Day Access",
    price: "$0",
    period: "2 days",
    icon: Zap,
    color: "#00f2ff",
    features: [
      "10 tasks per day",
      "Access to 5 core agents",
      "Basic orchestration",
      "Community support",
      "Standard response time",
    ],
    cta: "START TRIAL",
    href: "/contact",
    badge: "LIMITED ACCESS",
  },
  {
    name: "PRO / ELITE",
    description: "Full Command Access",
    price: "Coming Soon",
    period: "",
    icon: Crown,
    color: "#ffaa00",
    features: [
      "All 25 Neural Army agents",
      "Unlimited daily tasks",
      "Advanced MARCORAEX Core",
      "Priority support channel",
      "Sub-50ms response times",
      "Custom agent deployment",
      "Enterprise API access",
    ],
    cta: "JOIN WAITLIST",
    href: "/contact",
    badge: "COMING Q3 2026",
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
            Access Tiers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            COMMAND ACCESS LEVELS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with a 2-day free trial. Upgrade to Pro/Elite for full Neural Army deployment.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                className={`relative rounded-lg border ${
                  plan.featured 
                    ? "border-[#ffaa00]/40 bg-[#ffaa00]/5" 
                    : "border-[#00f2ff]/20 bg-[#020617]/50"
                } p-8 hover:border-opacity-60 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Badge */}
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono font-bold"
                  style={{ 
                    backgroundColor: `${plan.color}20`, 
                    color: plan.color,
                    border: `1px solid ${plan.color}40`
                  }}
                >
                  {plan.badge}
                </div>

                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border"
                    style={{ 
                      borderColor: `${plan.color}40`, 
                      backgroundColor: `${plan.color}10` 
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: plan.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-500 font-mono text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 font-mono text-sm ml-2">/{plan.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`group block w-full py-4 text-center font-mono text-sm font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.featured
                      ? "bg-[#ffaa00] text-[#020617] hover:bg-[#ffaa00]/80"
                      : "border border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff]/10"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Security Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-mono text-xs text-gray-500">
            ALL PLANS INCLUDE: AES-256 Encryption • Zero External APIs • 100% Data Sovereignty
          </p>
        </motion.div>
      </div>
    </section>
  );
}
