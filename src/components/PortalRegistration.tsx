"use client";

import { useState } from "react";
import { Rocket, CheckCircle, Loader2 } from "lucide-react";

export default function PortalRegistration() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="p-6 rounded-xl border-2 border-green-500/50 bg-green-500/10 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">ACCESS REQUESTED</h3>
        <p className="text-gray-300">
          Your pre-registration has been recorded. You will receive portal credentials on launch day.
        </p>
        <div className="mt-4 p-3 rounded bg-[#020617]/50 border border-green-500/30">
          <span className="font-mono text-xs text-green-500">
            STATUS: PENDING VERIFICATION
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full border-2 border-[#00f2ff]/40 bg-[#00f2ff]/10 flex items-center justify-center mx-auto mb-4">
          <Rocket className="w-8 h-8 text-[#00f2ff]" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">PRE-REGISTRATION</h2>
        <p className="text-gray-400">
          Join the waitlist for Commander Portal access. Launching May 15, 2026.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-mono text-xs text-gray-500 mb-2">
            COMMANDER EMAIL
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@command.center"
            className="w-full px-4 py-3 bg-[#020617] border-2 border-[#00f2ff]/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2ff] transition-colors"
            required
          />
        </div>

        <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
          <h4 className="font-mono text-xs text-[#00f2ff] mb-2">PORTAL FEATURES</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-[#00f2ff]" />
              Multi-agent orchestration dashboard
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-[#00f2ff]" />
              Real-time mission telemetry
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-[#00f2ff]" />
              Advanced model configuration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-[#00f2ff]" />
              Priority support channel
            </li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00f2ff] text-[#020617] font-mono font-bold rounded-lg disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              PROCESSING...
            </>
          ) : (
            <>
              <Rocket className="w-5 h-5" />
              REQUEST PORTAL ACCESS
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500">
          By registering, you agree to receive launch notifications. 
          No spam, ever.
        </p>
      </form>
    </div>
  );
}
