"use client";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Send, User, MessageSquare, Building2, ArrowRight } from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact | MARCORAEX",
  description: "Get in touch with the MARCORAEX team for launch inquiries, partnership opportunities, or enterprise deployment discussions.",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Transmission received. The MARCORAEX team will respond within 24 hours.");
  };

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
            Communication Channel
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-glow-cyan mb-6">
            ESTABLISH CONTACT
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Direct line to MARCORAEX Command. For launch inquiries, partnerships, 
            or enterprise deployment discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-lg border border-[#00f2ff]/20 bg-[#020617]/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-[#00f2ff]" />
              Transmission Form
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Commander Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-[#020617] border border-[#00f2ff]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00f2ff] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Secure Channel
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-[#020617] border border-[#00f2ff]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00f2ff] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4 inline mr-2" />
                  Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-[#020617] border border-[#00f2ff]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00f2ff] focus:outline-none transition-colors"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Inquiry Type
                </label>
                <select
                  value={formData.inquiry}
                  onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                  className="w-full px-4 py-3 bg-[#020617] border border-[#00f2ff]/20 rounded-lg text-white focus:border-[#00f2ff] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select inquiry type</option>
                  <option value="launch">Launch Inquiry</option>
                  <option value="enterprise">Enterprise Deployment</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="demo">Request Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#00f2ff]/60 uppercase tracking-wider mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mission Parameters
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#020617] border border-[#00f2ff]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00f2ff] focus:outline-none transition-colors resize-none"
                  placeholder="Describe your requirements, objectives, or questions..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 font-mono text-sm text-[#020617] bg-[#00f2ff] rounded-lg font-semibold tracking-wider hover:bg-[#00f2ff]/80 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                TRANSMIT MESSAGE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffaa00] rounded-full animate-pulse" />
                Launch Status
              </h3>
              <p className="text-gray-400 mb-4">
                MARCORAEX is preparing for public launch. Early access inquiries are 
                being accepted for strategic partners and enterprise clients.
              </p>
              <div className="flex items-center gap-2 font-mono text-sm text-[#ffaa00]">
                <span>Expected Launch: Q3 2026</span>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
              <h3 className="text-xl font-bold text-white mb-4">Direct Channels</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#00f2ff]" />
                  <div>
                    <p className="font-mono text-xs text-gray-500">SECURE EMAIL</p>
                    <p className="text-white">command@marcoraex.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Building2 className="w-5 h-5 text-[#00f2ff]" />
                  <div>
                    <p className="font-mono text-xs text-gray-500">HEADQUARTERS</p>
                    <p className="text-white">MARCORAEX Command Center</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-green-500/20 bg-green-500/5">
              <h3 className="text-xl font-bold text-white mb-4">Response Protocol</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  General inquiries: 24-48 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Enterprise requests: 12 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Emergency support: 4 hours
                </li>
              </ul>
            </div>

            {/* Decorative Elements */}
            <div className="p-6 rounded-lg border border-[#00f2ff]/10 bg-[#020617]/30">
              <div className="font-mono text-xs text-[#00f2ff]/40 space-y-1">
                <p>&gt; SYSTEM_ID: MRC-COMMS-V1</p>
                <p>&gt; ENCRYPTION: AES-256-GCM</p>
                <p>&gt; PROTOCOL: SECURE_TLS_1.3</p>
                <p>&gt; STATUS: AWAITING_TRANSMISSION</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
