"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Army", href: "/army" },
  { label: "Docs", href: "/docs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#00f2ff]/20 bg-[#020617]/90 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Cpu className="w-6 h-6 text-[#00f2ff] group-hover:animate-pulse" />
            <span className="text-xl font-black text-white tracking-[0.1em]" style={{ textShadow: "0 0 20px rgba(0, 242, 255, 0.8), 0 0 40px rgba(0, 242, 255, 0.4)" }}>
              MARCORAEX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-mono text-sm text-gray-400 hover:text-[#00f2ff] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00f2ff] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 blink-dot" />
            <span className="font-mono text-xs text-green-500">ONLINE</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#00f2ff]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-[#00f2ff]/20 bg-[#020617]/95"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block font-mono text-sm text-gray-400 hover:text-[#00f2ff] py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
