"use client";

import { motion } from "framer-motion";
import { 
  Cpu, Zap, Activity, Clock, AlertCircle, 
  TrendingUp, Battery, Shield 
} from "lucide-react";
import { 
  AccessControl, 
  DEFAULT_SESSION, 
  formatNumber, 
  formatTokens 
} from "@/lib/plans";
import Link from "next/link";

interface NeuralDashboardProps {
  variant?: "sidebar" | "topbar" | "compact";
}

export default function NeuralDashboard({ variant = "sidebar" }: NeuralDashboardProps) {
  // In production, this would come from context/auth
  const accessControl = new AccessControl(DEFAULT_SESSION);
  const plan = accessControl.getCurrentPlan();
  
  const remainingRequests = accessControl.getRemainingRequests();
  const remainingTokens = accessControl.getRemainingTokens();
  const requestPercent = accessControl.getRequestUsagePercent();
  const tokenPercent = accessControl.getTokenUsagePercent();
  
  // Determine status colors
  const getStatusColor = (percent: number) => {
    if (percent < 50) return "text-green-500";
    if (percent < 75) return "text-[#ffaa00]";
    return "text-red-500";
  };
  
  const getBarColor = (percent: number) => {
    if (percent < 50) return "bg-green-500";
    if (percent < 75) return "bg-[#ffaa00]";
    return "bg-red-500";
  };

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 px-4 py-2 bg-[#020617]/80 border-b border-[#00f2ff]/10">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#00f2ff]" />
          <span className="font-mono text-xs text-gray-400">
            {remainingRequests === Infinity ? "∞" : remainingRequests}/{plan.dailyRequests === Infinity ? "∞" : plan.dailyRequests}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#ffaa00]" />
          <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getBarColor(tokenPercent)}`}
              style={{ width: `${Math.min(tokenPercent, 100)}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "topbar") {
    return (
      <div className="w-full bg-[#020617] border-b border-[#00f2ff]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 py-3">
            {/* Plan Badge */}
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-[#00f2ff]" />
              <span className="font-mono text-sm">
                <span className="text-gray-500">TIER:</span>
                <span className="text-[#00f2ff] ml-2">{plan.name}</span>
              </span>
            </div>

            {/* Usage Stats */}
            <div className="flex items-center gap-6">
              {/* Requests */}
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-gray-500" />
                <span className="font-mono text-xs text-gray-500">REQUESTS:</span>
                <span className={`font-mono text-sm ${getStatusColor(requestPercent)}`}>
                  {remainingRequests === Infinity ? "∞" : remainingRequests}/{plan.dailyRequests === Infinity ? "∞" : formatNumber(plan.dailyRequests)}
                </span>
                <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getBarColor(requestPercent)}`}
                    style={{ width: `${Math.min(requestPercent, 100)}%` }}
                  />
                </div>
              </div>

              {/* Tokens */}
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gray-500" />
                <span className="font-mono text-xs text-gray-500">TOKENS:</span>
                <span className={`font-mono text-sm ${getStatusColor(tokenPercent)}`}>
                  {remainingTokens === Infinity ? "∞" : formatTokens(remainingTokens)}/{plan.dailyTokens === Infinity ? "∞" : formatTokens(plan.dailyTokens)}
                </span>
                <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getBarColor(tokenPercent)}`}
                    style={{ width: `${Math.min(tokenPercent, 100)}%` }}
                  />
                </div>
              </div>

              {/* Cycle Timer */}
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="font-mono text-xs">Resets in 18h 42m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default sidebar variant
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-xs bg-[#020617] border-r border-[#00f2ff]/20 p-6"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#00f2ff]" />
          NEURAL DASHBOARD
        </h3>
        <p className="font-mono text-xs text-gray-500 mt-1">
          Real-time resource monitoring
        </p>
      </div>

      {/* Current Plan Card */}
      <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-gray-500">CURRENT TIER</span>
          <Shield className="w-4 h-4 text-[#00f2ff]" />
        </div>
        <p className="text-xl font-bold text-[#00f2ff]">{plan.name}</p>
        <p className="text-sm text-gray-400">{plan.price}/{plan.tier === 0 ? "2 days" : "month"}</p>
      </div>

      {/* Requests Usage */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-500" />
            <span className="font-mono text-xs text-gray-500">DAILY REQUESTS</span>
          </div>
          <span className={`font-mono text-sm ${getStatusColor(requestPercent)}`}>
            {remainingRequests === Infinity ? "∞" : remainingRequests} left
          </span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-1">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(requestPercent, 100)}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full ${getBarColor(requestPercent)}`}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-600 font-mono">
          <span>Used: {DEFAULT_SESSION.requestsUsed}</span>
          <span>Limit: {plan.dailyRequests === Infinity ? "∞" : formatNumber(plan.dailyRequests)}</span>
        </div>
      </div>

      {/* Token Usage */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-gray-500" />
            <span className="font-mono text-xs text-gray-500">NEURAL TOKENS</span>
          </div>
          <span className={`font-mono text-sm ${getStatusColor(tokenPercent)}`}>
            {remainingTokens === Infinity ? "∞" : formatTokens(remainingTokens)} left
          </span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-1">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(tokenPercent, 100)}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full ${getBarColor(tokenPercent)}`}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-600 font-mono">
          <span>Used: {formatTokens(DEFAULT_SESSION.tokensUsed)}</span>
          <span>Limit: {plan.dailyTokens === Infinity ? "∞" : formatTokens(plan.dailyTokens)}</span>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between p-2 rounded bg-[#020617]/50 border border-gray-800">
          <div className="flex items-center gap-2">
            <Battery className="w-4 h-4 text-green-500" />
            <span className="text-xs text-gray-400">System Status</span>
          </div>
          <span className="font-mono text-xs text-green-500">OPERATIONAL</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded bg-[#020617]/50 border border-gray-800">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#00f2ff]" />
            <span className="text-xs text-gray-400">Processing</span>
          </div>
          <span className="font-mono text-xs text-[#00f2ff]">NOMINAL</span>
        </div>
      </div>

      {/* Warnings */}
      {(requestPercent > 75 || tokenPercent > 75) && (
        <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 mb-6">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-red-400">RESOURCE ALERT</p>
              <p className="text-xs text-gray-400 mt-1">
                You&apos;re approaching your daily limits. Consider upgrading for uninterrupted operations.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade CTA */}
      <Link
        href="/plans"
        className="block w-full py-3 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-mono text-sm text-center hover:bg-[#00f2ff]/20 transition-colors"
      >
        VIEW UPGRADE OPTIONS →
      </Link>
    </motion.div>
  );
}
