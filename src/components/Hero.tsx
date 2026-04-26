"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NeuralCore from "./NeuralCore";
import { useEffect, useState } from "react";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text, started]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span
        className={`inline-block w-[3px] h-[1.2em] bg-[#00f2ff] ml-1 align-middle ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] grid-bg pt-16">
      {/* Scanning lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scanning-line" style={{ animationDelay: "0s" }} />
        <div className="scanning-line" style={{ animationDelay: "1.5s" }} />
        <div className="scanning-line" style={{ animationDelay: "3s" }} />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 md:py-24">
        {/* Neural Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <NeuralCore />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.1em] text-glow-cyan mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          MARCMAX: HOME OF THE MARCO NEURAL ARMY
        </motion.h1>

        {/* Sub-heading with Typewriter Effect */}
        <motion.div
          className="max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-mono text-lg md:text-xl text-[#00f2ff]/80">
            <TypewriterText
              text="MARCMAX: Home of the MARCO Neural Army. 50,000+ Lines. 24/7 Autonomy."
              delay={800}
            />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            href="/army"
            className="group relative px-8 py-4 font-mono text-sm md:text-base text-[#020617] bg-[#00f2ff] rounded-none font-semibold tracking-wider btn-glow-cyan overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#020617] rounded-full" />
              INITIALIZE COMMAND
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href="/download"
            className="group relative px-8 py-4 font-mono text-sm md:text-base text-[#ffaa00] border-2 border-[#ffaa00] rounded-none font-semibold tracking-wider btn-glow-amber overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ffaa00] rounded-full blink-dot" />
              DEPLOYMENT STATUS
            </span>
            <div className="absolute inset-0 bg-[#ffaa00]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#00f2ff]/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#00f2ff]/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#00f2ff]/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#00f2ff]/30" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}
