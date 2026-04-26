"use client";

import { motion } from "framer-motion";
import { Shield, Thermometer, Cpu, Activity, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

export default function HardwareGovernor() {
  const [cpuTemp, setCpuTemp] = useState(42);
  const [cpuLoad, setCpuLoad] = useState(35);
  const [status, setStatus] = useState("SAFE");

  // Simulate real-time thermal monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuation between 40-55°C
      setCpuTemp(Math.floor(Math.random() * 15) + 40);
      // Random load between 20-45%
      setCpuLoad(Math.floor(Math.random() * 25) + 20);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cpuTemp > 70) setStatus("WARNING");
    else if (cpuTemp > 85) setStatus("CRITICAL");
    else setStatus("SAFE");
  }, [cpuTemp]);

  const getStatusColor = () => {
    if (status === "SAFE") return "#22c55e";
    if (status === "WARNING") return "#f59e0b";
    return "#ef4444";
  };

  const getTempPercentage = () => {
    // Map 0-100°C to 0-100%
    return Math.min((cpuTemp / 100) * 100, 100);
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[#ffaa00] uppercase tracking-[0.3em] mb-4 block">
            Protection System
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            THE GOVERNOR
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time thermal monitoring with automatic throttling to protect host hardware under sustained load.
          </p>
        </motion.div>

        {/* Governor Card */}
        <motion.div
          className="relative p-8 md:p-12 rounded-lg border-2 border-[#00f2ff]/30 bg-gradient-to-br from-[#00f2ff]/10 via-[#020617] to-[#00f2ff]/5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ boxShadow: "inset 0 0 60px rgba(0, 242, 255, 0.1)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Visual Gauge */}
            <div className="flex flex-col items-center">
              {/* Circular Gauge */}
              <div className="relative w-48 h-48 mb-6">
                {/* Background ring */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#00f2ff20"
                    strokeWidth="8"
                  />
                  {/* Temperature arc */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={getStatusColor()}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${getTempPercentage() * 2.64} 264`}
                    initial={{ strokeDashoffset: 264 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      filter: `drop-shadow(0 0 10px ${getStatusColor()})`,
                    }}
                  />
                </svg>

                {/* Center display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Thermometer
                    className="w-8 h-8 mb-2"
                    style={{ color: getStatusColor() }}
                  />
                  <span
                    className="text-4xl font-bold font-mono"
                    style={{ color: getStatusColor() }}
                  >
                    {cpuTemp}°C
                  </span>
                  <span className="font-mono text-xs text-gray-500 mt-1">
                    CPU TEMP
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div
                className="px-4 py-2 rounded-lg border-2 font-mono text-sm font-semibold tracking-wider"
                style={{
                  borderColor: getStatusColor(),
                  color: getStatusColor(),
                  backgroundColor: `${getStatusColor()}10`,
                  boxShadow: `0 0 20px ${getStatusColor()}30`,
                }}
              >
                {status === "SAFE" && <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  THERMAL: {status}
                </span>}
                {status === "WARNING" && <span className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  THERMAL: {status}
                </span>}
                {status === "CRITICAL" && <span className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  THERMAL: {status}
                </span>}
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="space-y-6">
              {/* CPU Load */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#00f2ff]" />
                    <span className="font-mono text-sm text-gray-400">
                      CPU Load
                    </span>
                  </div>
                  <span className="font-mono text-sm text-[#00f2ff]">
                    {cpuLoad}%
                  </span>
                </div>
                <div className="h-3 bg-[#00f2ff]/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00f2ff] to-[#00f2ff]/50"
                    initial={{ width: 0 }}
                    animate={{ width: `${cpuLoad}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Memory Usage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#ffaa00]" />
                    <span className="font-mono text-sm text-gray-400">
                      Memory Usage
                    </span>
                  </div>
                  <span className="font-mono text-sm text-[#ffaa00]">
                    4.2 GB / 16 GB
                  </span>
                </div>
                <div className="h-3 bg-[#ffaa00]/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#ffaa00] to-[#ffaa00]/50"
                    initial={{ width: 0 }}
                    whileInView={{ width: "26%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </div>

              {/* Governor Status */}
              <div className="p-4 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="font-mono text-sm text-white font-semibold">
                    Governor Status: ACTIVE
                  </span>
                </div>
                <div className="space-y-2 font-mono text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>Auto-throttling enabled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>Threshold: 85°C (soft), 95°C (hard)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>Cooldown delay: 2s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f2ff]/50" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f2ff]/50" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f2ff]/50" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f2ff]/50" />
        </motion.div>

        {/* Protection Protocol Note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-sm text-gray-500">
            <span className="text-[#ffaa00]">⚠ PROTOCOL:</span> Governor will
            throttle CPU frequency and pause non-critical agents when thermal
            thresholds are exceeded.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
