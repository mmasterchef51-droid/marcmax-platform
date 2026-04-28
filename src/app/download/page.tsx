import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadVaultClient from "@/components/DownloadVaultClient";
import { 
  Shield, Activity, Zap, Server
} from "lucide-react";
import { 
  AccessControl, 
  DEFAULT_SESSION, 
  formatTokens,
} from "@/lib/plans";

export const metadata: Metadata = {
  title: "Download Vault | MARCORAEX",
  description: "Secure data extraction portal for MARCORAEX. Access neural core, agent bundles, security modules, and AI intelligence reports based on your tier level.",
};

export default function DownloadVaultPage() {
  // Server-side access control check
  const accessControl = new AccessControl(DEFAULT_SESSION);
  const plan = accessControl.getCurrentPlan();
  const isRecruit = plan.tier === 0;
  
  const remainingRequests = accessControl.getRemainingRequests();
  const remainingTokens = accessControl.getRemainingTokens();
  const requestPercent = accessControl.getRequestUsagePercent();
  const tokenPercent = accessControl.getTokenUsagePercent();

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      
      {/* Content Visible Immediately - No Blocking Animation */}
      <div className="pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Access Header */}
          <div className="mb-8">
            {/* Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-[#00f2ff]/20 bg-[#020617]/50">
              <div className="flex items-center gap-4">
                <Shield className="w-5 h-5 text-[#00f2ff]" />
                <span className="font-mono text-sm">
                  <span className="text-gray-500">STATUS:</span>
                  <span 
                    className={`ml-2 font-bold ${
                      isRecruit ? "text-yellow-500" : "text-green-500"
                    }`}
                  >
                    {plan.name} {isRecruit ? "(UNVERIFIED)" : "(AUTHORIZED)"}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-gray-500" />
                  <span className="font-mono text-xs text-gray-500">
                    REQUESTS: {remainingRequests === Infinity ? "∞" : remainingRequests}/{plan.dailyRequests === Infinity ? "∞" : plan.dailyRequests}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gray-500" />
                  <span className="font-mono text-xs text-gray-500">
                    TOKENS: {remainingTokens === Infinity ? "∞" : formatTokens(remainingTokens)}
                  </span>
                </div>
              </div>
            </div>

            {/* Warning Banner for Recruit */}
            {isRecruit && (
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 flex items-start gap-3">
                <Shield className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-500 text-sm">OPERATIONAL SECURITY WARNING</p>
                  <p className="text-sm text-gray-400 mt-1">
                    File exports are restricted for unverified trial accounts. 
                    <Link href="/plans" className="text-[#00f2ff] hover:underline ml-1">
                      Upgrade to Soldier tier or higher
                    </Link> to unlock local data extraction.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
              DOWNLOAD VAULT
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Secure data extraction portal. All files are encrypted and verified. 
              Access levels are determined by your current authorization tier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* File List - Client Component for Interactivity */}
            <div className="lg:col-span-3">
              <DownloadVaultClient 
                planTier={plan.tier}
                remainingRequests={remainingRequests}
              />
            </div>

            {/* Usage Shield Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Clearance Card */}
                <div className="p-4 border border-[#00f2ff]/20 bg-[#020617]/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-[#00f2ff]" />
                    <span className="font-mono text-xs text-gray-500">CLEARANCE LEVEL</span>
                  </div>
                  <p className={`text-2xl font-bold ${isRecruit ? "text-yellow-500" : "text-green-500"}`}>
                    {plan.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {isRecruit ? "Limited Access" : "Full Authorization"}
                  </p>
                </div>

                {/* Requests Card */}
                <div className="p-4 border border-[#00f2ff]/20 bg-[#020617]/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-4 h-4 text-gray-500" />
                    <span className="font-mono text-xs text-gray-500">REMAINING REQUESTS</span>
                  </div>
                  <p className={`text-3xl font-bold ${
                    remainingRequests === 0 ? "text-red-500" : remainingRequests < 5 ? "text-yellow-500" : "text-[#00f2ff]"
                  }`}>
                    {remainingRequests === Infinity ? "∞" : remainingRequests}
                  </p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          requestPercent > 75 ? "bg-red-500" : requestPercent > 50 ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(requestPercent, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {requestPercent.toFixed(0)}% of daily limit used
                    </p>
                  </div>
                </div>

                {/* Tokens Card */}
                <div className="p-4 border border-[#00f2ff]/20 bg-[#020617]/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-gray-500" />
                    <span className="font-mono text-xs text-gray-500">TOKEN BALANCE</span>
                  </div>
                  <p className={`text-3xl font-bold ${
                    tokenPercent > 90 ? "text-red-500" : tokenPercent > 75 ? "text-yellow-500" : "text-[#00f2ff]"
                  }`}>
                    {remainingTokens === Infinity ? "∞" : formatTokens(remainingTokens)}
                  </p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          tokenPercent > 90 ? "bg-red-500" : tokenPercent > 75 ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(tokenPercent, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {tokenPercent.toFixed(0)}% of daily capacity used
                    </p>
                  </div>
                </div>

                {/* Reset Timer */}
                <div className="p-4 border border-gray-800 bg-[#020617]/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-gray-600">RESET IN</span>
                  </div>
                  <p className="font-mono text-lg text-gray-400">18h 42m</p>
                </div>

                {/* Upgrade CTA */}
                {isRecruit && (
                  <Link
                    href="/plans"
                    className="block w-full py-3 bg-[#00f2ff] text-[#020617] font-mono text-sm font-semibold text-center hover:bg-[#00f2ff]/80 transition-colors"
                  >
                    UNLOCK DOWNLOADS →
                  </Link>
                )}

                {/* Server Status */}
                <div className="p-3 border border-green-500/20 bg-green-500/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-green-500" />
                    <span className="font-mono text-xs text-green-500">SERVERS OPERATIONAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
