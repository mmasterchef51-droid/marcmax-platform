"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Rocket, CheckCircle, Loader2, Bell } from "lucide-react";
import { useState } from "react";

export default function NotifyMeCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-[#ffaa00]" />
        <span className="font-mono text-sm text-[#ffaa00]">GET LAUNCH NOTIFICATION</span>
      </div>

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Commander Email"
              className="flex-1 px-4 py-3 bg-[#020617]/60 border border-[#ffaa00]/40 rounded-lg text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#ffaa00] transition-colors"
              required
            />
            <motion.button
              type="submit"
              disabled={isSubmitting || !email}
              className="px-4 py-3 bg-[#ffaa00] text-[#020617] font-mono font-semibold text-sm rounded-lg disabled:opacity-50 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Rocket className="w-4 h-4" />
                  NOTIFY
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="flex items-center justify-center gap-2 p-3 rounded-lg border border-green-500/50 bg-green-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-mono text-sm text-green-500">
              NOTIFICATION CHANNEL ESTABLISHED
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
