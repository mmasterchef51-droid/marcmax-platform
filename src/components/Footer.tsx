"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, ChevronRight, Map, Book, Shield, Globe } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Army", href: "/army" },
  { label: "Tech", href: "/tech" },
  { label: "Safety", href: "/safety" },
  { label: "Download", href: "/download" },
  { label: "Changelog", href: "/changelog" },
];

const sitemapLinks = [
  { label: "Docs", href: "/docs", icon: Book },
  { label: "API", href: "/docs/api", icon: Terminal },
  { label: "FAQ", href: "/support/faq", icon: Globe },
  { label: "Portal", href: "/portal", icon: Shield },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#00f2ff]/20 bg-[#020617]">
      {/* System Signature Bar */}
      <div className="w-full py-4 px-4 md:px-8 border-b border-[#00f2ff]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Cpu className="w-5 h-5 text-[#00f2ff]" />
            <span className="font-mono text-sm text-[#00f2ff]/80">
              MARCMAX SYSTEMS v7.0.0
            </span>
            <span className="hidden md:inline text-[#00f2ff]/40">|</span>
            <span className="font-mono text-sm text-[#ffaa00] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 blink-dot" />
              SECURE PROTOCOL ACTIVE
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Terminal className="w-4 h-4 text-[#00f2ff]/60" />
            <span className="font-mono text-xs text-[#00f2ff]/60">
              SYSTEM_ID: MRC-7X-ALPHA
            </span>
          </motion.div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="w-full py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xl font-bold text-[#00f2ff] text-glow-cyan">
                M.A.R.C.O.
              </span>
            </motion.div>

            {/* Links */}
            <motion.nav
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-1 font-mono text-sm text-gray-400 hover:text-[#00f2ff] transition-colors"
                >
                  <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </div>

          {/* Sitemap */}
          <motion.div
            className="mt-8 pt-6 border-t border-[#00f2ff]/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Link 
                  href="/docs" 
                  className="group flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-[#00f2ff] transition-colors"
                >
                  <Book className="w-4 h-4" />
                  <span>DOCUMENTATION v7.0.0 — ALL SYSTEMS LOGGED</span>
                </Link>
                <Link 
                  href="/docs/api" 
                  className="group flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-[#00f2ff] transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                  <span>API</span>
                </Link>
                <Link 
                  href="/support/faq" 
                  className="group flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-[#00f2ff] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>FAQ</span>
                </Link>
                <Link 
                  href="/portal" 
                  className="group flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-[#00f2ff] transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  <span>Portal</span>
                </Link>
              </div>
              <p className="font-mono text-xs text-gray-500">
                © 2026 MARCMAX Systems. Powered by MARCO v7.0.0.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
