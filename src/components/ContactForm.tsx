"use client";

import { useState } from "react";
import { Mail, Send, User, MessageSquare, Building2, ArrowRight } from "lucide-react";

export default function ContactForm() {
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
  );
}
