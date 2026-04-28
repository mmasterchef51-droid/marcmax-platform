import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import PortalRegistration from "@/components/PortalRegistration";
import { 
  Shield, Lock, Terminal, CheckCircle, 
  AlertTriangle, Fingerprint, ChevronRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commander's Portal | MARCORAEX",
  description: "Secure pre-registration for the MARCORAEX Commander's Portal. Personalized intelligence dashboard for verified SaaS subscribers. Launching May 15, 2026.",
};

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb />

          {/* Header - Immediate Content for AI Indexing */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#00f2ff]" />
              <span className="font-mono text-[#00f2ff] tracking-wider">SECURE ACCESS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
              COMMANDER&apos;S PORTAL
            </h1>
            <p className="text-gray-400">
              Personalized intelligence dashboard for verified SaaS subscribers.
            </p>
          </div>

          {/* Main Content Card - No Blocking Animations */}
          <div className="relative p-8 md:p-12 rounded-2xl border-2 border-[#00f2ff]/40 bg-gradient-to-b from-[#00f2ff]/10 to-[#020617] backdrop-blur-sm">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f2ff]/50" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f2ff]/50" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f2ff]/50" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f2ff]/50" />

            {/* Content Visible Immediately */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Access Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg border border-red-500/30 bg-red-500/10">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <div>
                    <h2 className="text-xl font-bold text-red-500">UNAUTHORIZED ACCESS</h2>
                    <p className="text-sm text-gray-400">
                      Commander Portal access requires verified SaaS subscription.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
                  <p className="text-gray-300 mb-2">
                    Access will be granted to all verified subscribers on 
                    <span className="text-[#ffaa00] font-semibold"> May 15, 2026</span>.
                  </p>
                  <p className="text-sm text-gray-500">
                    Pre-register now to secure your position on the waitlist.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Fingerprint className="w-5 h-5 text-[#00f2ff]" />
                  <span>Biometric verification required at launch</span>
                </div>
              </div>

              {/* Right: Registration Form */}
              <div className="border-l border-[#00f2ff]/20 md:pl-8">
                <PortalRegistration />
              </div>
            </div>
          </div>

          {/* Status Info */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
              <Lock className="w-5 h-5 text-[#00f2ff] mx-auto mb-2" />
              <span className="font-mono text-sm text-white">AES-256</span>
              <p className="font-mono text-[10px] text-gray-500">Encryption</p>
            </div>
            <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center">
              <Shield className="w-5 h-5 text-[#00f2ff] mx-auto mb-2" />
              <span className="font-mono text-sm text-white">2FA</span>
              <p className="font-mono text-[10px] text-gray-500">Required</p>
            </div>
            <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 text-center">
              <Terminal className="w-5 h-5 text-[#ffaa00] mx-auto mb-2" />
              <span className="font-mono text-sm text-white">May 15</span>
              <p className="font-mono text-[10px] text-gray-500">Launch</p>
            </div>
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
              <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <span className="font-mono text-sm text-white">Verified</span>
              <p className="font-mono text-[10px] text-gray-500">SaaS Only</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
