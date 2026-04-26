"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Fingerprint,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  Loader2,
  Rocket,
  Terminal,
  Eye,
  EyeOff,
  ChevronRight,
} from "lucide-react";

// Biometric scan animation component
function BiometricScan({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-6">
        {/* Fingerprint icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Fingerprint className="w-20 h-20 text-[#00f2ff]" />
        </div>
        
        {/* Scanning ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#00f2ff]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ boxShadow: "0 0 20px #00f2ff" }}
        />

        {/* Progress circle */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#00f2ff20"
            strokeWidth="4"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
          />
        </svg>
      </div>

      <span className="font-mono text-[#00f2ff] mb-2">BIOMETRIC SCAN IN PROGRESS</span>
      <div className="w-48 h-2 bg-[#00f2ff]/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#00f2ff]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-mono text-xs text-gray-500 mt-2">{progress}%</span>
    </div>
  );
}

// Unauthorized access screen
function UnauthorizedScreen({ onProceed }: { onProceed: () => void }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-24 h-24 rounded-full border-4 border-red-500/30 bg-red-500/10 flex items-center justify-center mx-auto mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      >
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </motion.div>

      <motion.h2
        className="text-3xl font-bold text-red-500 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        UNAUTHORIZED ACCESS
      </motion.h2>

      <motion.div
        className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 mb-6 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-300 mb-2">
          Commander Portal access requires verified SaaS subscription.
        </p>
        <p className="text-sm text-gray-400">
          Access will be granted to all verified subscribers on <span className="text-[#ffaa00] font-semibold">May 15, 2026</span>.
        </p>
      </motion.div>

      <motion.button
        onClick={onProceed}
        className="group flex items-center gap-2 px-6 py-3 bg-[#00f2ff] text-[#020617] font-mono font-semibold rounded-lg mx-auto hover:bg-[#00f2ff]/90 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Pre-Register for Access
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
}

// Registration form
function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <motion.div
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full border-2 border-[#00f2ff]/40 bg-[#00f2ff]/10 flex items-center justify-center mx-auto mb-4">
          <Rocket className="w-8 h-8 text-[#00f2ff]" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">PRE-REGISTRATION</h2>
        <p className="text-gray-400">
          Join the waitlist for Commander Portal access. Launching May 15, 2026.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            className="p-6 rounded-xl border-2 border-green-500/50 bg-green-500/10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
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
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00f2ff] text-[#020617] font-mono font-bold rounded-lg disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
            </motion.button>

            <p className="text-center text-xs text-gray-500">
              By registering, you agree to receive launch notifications. 
              No spam, ever.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PortalPage() {
  const [stage, setStage] = useState<"scan" | "unauthorized" | "register">("scan");

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb />

          {/* Header */}
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="p-8 md:p-12 rounded-2xl border-2 border-[#00f2ff]/40 bg-gradient-to-b from-[#00f2ff]/10 to-[#020617] backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ boxShadow: "0 0 60px rgba(0, 242, 255, 0.1)" }}
          >
            <AnimatePresence mode="wait">
              {stage === "scan" && (
                <motion.div
                  key="scan"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BiometricScan onComplete={() => setStage("unauthorized")} />
                </motion.div>
              )}

              {stage === "unauthorized" && (
                <motion.div
                  key="unauthorized"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <UnauthorizedScreen onProceed={() => setStage("register")} />
                </motion.div>
              )}

              {stage === "register" && (
                <motion.div
                  key="register"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <RegistrationForm />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f2ff]/50" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f2ff]/50" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f2ff]/50" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f2ff]/50" />
          </motion.div>

          {/* Status Info */}
          <motion.div
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
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
          </motion.div>
        </div>
      </div>
    </main>
  );
}
