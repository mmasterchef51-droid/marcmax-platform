"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, Shield, Lock, Cpu, Eye, CheckCircle, Scan, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const certifications = [
  { icon: Lock, title: "AES-256 Log Encryption", level: "MILITARY GRADE" },
  { icon: Cpu, title: "Real-time AVX2 Optimization", level: "HARDWARE" },
  { icon: Eye, title: "Multi-Modal Input Scrubbing", level: "PRIVACY" },
  { icon: Shield, title: "Zero-Day Threat Detection", level: "SECURITY" },
  { icon: Lock, title: "Memory-Safe Rust Core", level: "SAFETY" },
  { icon: Cpu, title: "Secure Boot Verification", level: "INTEGRITY" },
];

export default function SecurityClearance() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);
    setRevealedCount(0);
  };

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false);
            setScanComplete(true);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isScanning]);

  useEffect(() => {
    if (scanComplete) {
      const interval = setInterval(() => {
        setRevealedCount((prev) => {
          if (prev >= certifications.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [scanComplete]);

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
            Access Control
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            SECURITY CLEARANCE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Biometric verification required to access technical certifications.
          </p>
        </motion.div>

        {/* Biometric Scanner */}
        <motion.div
          className="relative max-w-md mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="relative p-8 rounded-2xl border-2 border-[#0066ff]/30 bg-gradient-to-b from-[#0066ff]/10 to-[#020617] cursor-pointer overflow-hidden"
            onClick={startScan}
            style={{
              boxShadow: isScanning
                ? "0 0 60px rgba(0, 102, 255, 0.4)"
                : "inset 0 0 40px rgba(0, 102, 255, 0.1)",
            }}
          >
            {/* Fingerprint Icon */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#0066ff]/30"
                animate={isScanning ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 3,
                  repeat: isScanning ? Infinity : 0,
                  ease: "linear",
                }}
              />

              {/* Inner ring - reverse */}
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-dashed border-[#00f2ff]/40"
                animate={isScanning ? { rotate: -360 } : { rotate: 0 }}
                transition={{
                  duration: 4,
                  repeat: isScanning ? Infinity : 0,
                  ease: "linear",
                }}
              />

              {/* Fingerprint */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Fingerprint
                  className={`w-16 h-16 transition-colors duration-300 ${
                    isScanning
                      ? "text-[#00f2ff]"
                      : scanComplete
                      ? "text-green-500"
                      : "text-[#0066ff]/50"
                  }`}
                />
              </div>

              {/* Scan line */}
              {isScanning && (
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    boxShadow: "0 0 20px rgba(0, 242, 255, 0.8)",
                  }}
                />
              )}

              {/* Complete glow */}
              {scanComplete && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-500/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: [0, 1, 0] }}
                  transition={{ duration: 1 }}
                />
              )}
            </div>

            {/* Status Text */}
            <div className="text-center">
              <AnimatePresence mode="wait">
                {!isScanning && !scanComplete && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-mono text-sm text-[#0066ff] mb-2">
                      TOUCH TO VERIFY
                    </p>
                    <p className="text-xs text-gray-500">
                      Biometric authentication required
                    </p>
                  </motion.div>
                )}

                {isScanning && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-mono text-sm text-[#00f2ff] mb-2">
                      SCANNING...
                    </p>
                    <div className="w-full h-2 bg-[#0066ff]/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0066ff] to-[#00f2ff]"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                    <p className="font-mono text-xs text-gray-500 mt-2">
                      {scanProgress}%
                    </p>
                  </motion.div>
                )}

                {scanComplete && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="font-mono text-sm text-green-500 mb-2 flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      ACCESS GRANTED
                    </p>
                    <p className="text-xs text-gray-500">
                      Clearance Level: ALPHA-7
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0066ff]/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0066ff]/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0066ff]/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0066ff]/50" />
          </div>
        </motion.div>

        {/* Certifications Grid - Revealed after scan */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const isRevealed = index < revealedCount;

            return (
              <motion.div
                key={cert.title}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isRevealed
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0.3, scale: 0.95 }
                }
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`p-4 rounded-lg border bg-gradient-to-b transition-all duration-300 ${
                    isRevealed
                      ? "border-[#00f2ff]/30 from-[#00f2ff]/10 to-transparent"
                      : "border-[#0066ff]/10 from-[#0066ff]/5 to-transparent blur-[1px]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                        isRevealed
                          ? "border-[#00f2ff]/40 bg-[#00f2ff]/10"
                          : "border-[#0066ff]/20 bg-[#0066ff]/5"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isRevealed ? "text-[#00f2ff]" : "text-[#0066ff]/40"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`font-mono text-xs block mb-1 ${
                          isRevealed ? "text-[#ffaa00]" : "text-[#ffaa00]/40"
                        }`}
                      >
                        {cert.level}
                      </span>
                      <h4
                        className={`text-sm font-semibold ${
                          isRevealed ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reset hint */}
        {scanComplete && revealedCount >= certifications.length && (
          <motion.p
            className="text-center mt-6 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tap scanner to re-verify credentials
          </motion.p>
        )}
      </div>
    </section>
  );
}
