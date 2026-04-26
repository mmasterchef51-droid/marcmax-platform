"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SafetyNav from "@/components/SafetyNav";
import ShieldWatermark from "@/components/ShieldWatermark";
import {
  Thermometer,
  Cpu,
  AlertTriangle,
  CheckCircle,
  Power,
  Activity,
  Zap,
  Shield,
  Fan,
} from "lucide-react";

// Thermal gauge component
function ThermalGauge({ 
  label, 
  value, 
  max = 100, 
  warning = 70, 
  critical = 85 
}: { 
  label: string; 
  value: number; 
  max?: number; 
  warning?: number; 
  critical?: number;
}) {
  const getColor = (v: number) => {
    if (v >= critical) return "#ef4444";
    if (v >= warning) return "#ffaa00";
    return "#22c55e";
  };

  const color = getColor(value);
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-gray-400">{label}</span>
        <span className="font-mono text-lg font-bold" style={{ color }}>
          {value}°C
        </span>
      </div>
      <div className="h-3 bg-[#020617] rounded-full overflow-hidden border border-[#0066ff]/20">
        <motion.div
          className="h-full rounded-full transition-all duration-500"
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}50`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="font-mono text-[10px] text-green-500">● SAFE &lt;{warning}°C</span>
        <span className="font-mono text-[10px] text-[#ffaa00]">● WARN {warning}-{critical}°C</span>
        <span className="font-mono text-[10px] text-red-500">● CRIT &gt;{critical}°C</span>
      </div>
    </div>
  );
}

export default function GovernorPage() {
  const [temps, setTemps] = useState({ cpu: 45, gpu: 52, ambient: 28 });

  // Simulate temperature fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setTemps(prev => ({
        cpu: Math.max(35, Math.min(85, prev.cpu + (Math.random() - 0.5) * 4)),
        gpu: Math.max(40, Math.min(90, prev.gpu + (Math.random() - 0.5) * 5)),
        ambient: 28 + (Math.random() - 0.5) * 2,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      <ShieldWatermark />

      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <SafetyNav />

            <div className="flex-1">
              {/* Header */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Thermometer className="w-8 h-8 text-[#ffaa00]" />
                  <span className="font-mono text-[#ffaa00] tracking-wider">PROTECTING THE HOST</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "0 0 40px #ffaa0050" }}>
                  HARDWARE SAFETY GOVERNOR
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  Real-time thermal monitoring with automatic throttling. The system protects your hardware 
                  by gracefully degrading non-essential operations when temperatures exceed safe thresholds.
                </p>
              </motion.div>

              {/* Thermal Gauges */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ThermalGauge label="CPU Core Temp" value={Math.round(temps.cpu)} warning={70} critical={85} />
                <ThermalGauge label="GPU Core Temp" value={Math.round(temps.gpu)} warning={75} critical={90} />
                <ThermalGauge label="Ambient" value={Math.round(temps.ambient)} max={50} warning={35} critical={45} />
              </motion.div>

              {/* Fail-Safe Protocol */}
              <motion.div
                className="mb-8 p-6 rounded-xl border-2 border-[#ffaa00]/40 bg-gradient-to-br from-[#ffaa00]/10 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#ffaa00]" />
                  <h2 className="text-xl font-bold text-white">FAIL-SAFE PROTOCOL</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  When temperatures exceed 80°C, the governor automatically triggers the following cascade:
                </p>
                <div className="space-y-3">
                  {[
                    { step: 1, action: "Reduce AI model complexity (switch to lighter models)", status: "AUTO" },
                    { step: 2, action: "Pause non-essential background agents", status: "AUTO" },
                    { step: 3, action: "Throttle CPU to 50% capacity", status: "AUTO" },
                    { step: 4, action: "Increase fan speed to maximum", status: "AUTO" },
                    { step: 5, action: "Notify user of thermal protection active", status: "ALERT" },
                    { step: 6, action: "Graceful shutdown if temp reaches 90°C", status: "CRITICAL" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4 p-3 rounded-lg bg-[#020617]/50 border border-[#ffaa00]/20">
                      <span className="w-6 h-6 rounded-full bg-[#ffaa00]/20 flex items-center justify-center font-mono text-xs text-[#ffaa00]">
                        {item.step}
                      </span>
                      <span className="flex-1 text-sm text-gray-300">{item.action}</span>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${
                        item.status === "CRITICAL" ? "bg-red-500/20 text-red-500" : 
                        item.status === "ALERT" ? "bg-[#ffaa00]/20 text-[#ffaa00]" :
                        "bg-green-500/20 text-green-500"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Power Loss Protection */}
              <motion.div
                className="p-6 rounded-xl border border-[#0066ff]/30 bg-[#0066ff]/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Power className="w-6 h-6 text-[#0066ff]" />
                  <h2 className="text-xl font-bold text-white">POWER LOSS PROTECTION</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="font-mono text-sm text-[#0066ff]">AUTOMATIC ACTIONS</h3>
                    {[
                      "Save current session state to disk",
                      "Flush all pending writes to SQLite",
                      "Close vector database connections",
                      "Terminate browser contexts cleanly",
                      "Log shutdown event with timestamp",
                    ].map((action, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-300">{action}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-lg bg-[#020617]/50 border border-[#0066ff]/20">
                    <h3 className="font-mono text-sm text-[#ffaa00] mb-3">RECOVERY STATS</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">State Save Time</span>
                        <span className="font-mono text-sm text-green-500">&lt;50ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Data Integrity</span>
                        <span className="font-mono text-sm text-green-500">100%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Recovery Time</span>
                        <span className="font-mono text-sm text-green-500">&lt;2s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
                  <Activity className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">Real-time</span>
                  <p className="font-mono text-xs text-gray-500">Monitoring</p>
                </div>
                <div className="p-4 rounded-lg border border-[#ffaa00]/20 bg-[#ffaa00]/5 text-center">
                  <Zap className="w-5 h-5 text-[#ffaa00] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">&lt;100ms</span>
                  <p className="font-mono text-xs text-gray-500">Response Time</p>
                </div>
                <div className="p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5 text-center">
                  <Fan className="w-5 h-5 text-[#0066ff] mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">Auto</span>
                  <p className="font-mono text-xs text-gray-500">Fan Control</p>
                </div>
                <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
                  <Shield className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <span className="font-mono text-2xl font-bold text-white">Zero</span>
                  <p className="font-mono text-xs text-gray-500">Overheat Events</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Badge Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 border-t border-[#ffaa00]/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Shield className="w-5 h-5 text-[#ffaa00]" />
          <span className="font-mono text-sm text-[#ffaa00]">7.0.0 FAILSAFE ACTIVE</span>
          <span className="font-mono text-xs text-gray-500">Thermal Protection • Auto-Throttle • Power Safe</span>
        </div>
      </div>
    </main>
  );
}
