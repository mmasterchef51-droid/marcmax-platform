import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Building2, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | MARCORAEX",
  description: "Get in touch with the MARCORAEX team for launch inquiries, partnership opportunities, or enterprise deployment discussions.",
};

export default function ContactPage() {
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
          {/* Contact Form - Client Component */}
          <ContactForm />

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
