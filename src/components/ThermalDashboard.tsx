"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Thermometer,
  Cpu,
  Activity,
  AlertTriangle,
  CheckCircle,
  Zap,
  Fan,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ThermalDashboard() {
  const [cpuTemp, setCpuTemp] = useState(45);
  const [gpuTemp, setGpuTemp] = useState(52);
  const [cpuLoad, setCpuLoad] = useState(32);
  const [fanSpeed, setFanSpeed] = useState(2400);
  const [throttleLevel, setThrottleLevel] = useState(0);
  const [status, setStatus] = useState("OPTIMAL");

  // Simulate real-time thermal monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate temperatures
      setCpuTemp(Math.floor(Math.random() * 20) + 40);
      setGpuTemp(Math.floor(Math.random() * 25) + 45);
      setCpuLoad(Math.floor(Math.random() * 30) + 20);
      setFanSpeed(Math.floor(Math.random() * 800) + 2000);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Update status based on temps
  useEffect(() => {
    const maxTemp = Math.max(cpuTemp, gpuTemp);
    if (maxTemp > 80) {
      setStatus("THROTTLING");
      setThrottleLevel(Math.min((maxTemp - 80) * 2, 100));
    } else if (maxTemp > 70) {
      setStatus("ELEVATED");
      setThrottleLevel(0);
    } else {
      setStatus("OPTIMAL");
      setThrottleLevel(0);
    }
  }, [cpuTemp, gpuTemp]);

  const getStatusColor = () => {
    if (status === "OPTIMAL") return "#22c55e";
    if (status === "ELEVATED") return "#f59e0b";
    return "#ef4444";
  };

  const gauges = [
    {
      label: "CPU Temp",
      value: cpuTemp,
      max: 100,
      unit: "°C",
      icon: Cpu,
      threshold: { warning: 70, critical: 85 },
    },
    {
      label: "GPU Temp",
      value: gpuTemp,
      max: 100,
      unit: "°C",
      icon: Zap,
      threshold: { warning: 75, critical: 90 },
    },
    {
      label: "CPU Load",
      value: cpuLoad,
      max: 100,
      unit: "%",
      icon: Activity,
      threshold: { warning: 70, critical: 90 },
    },
    {
      label: "Fan Speed",
      value: fanSpeed,
      max: 5000,
      unit: "RPM",
      icon: Fan,
      threshold: { warning: 4000, critical: 5000 },
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-[#0066ff] uppercase tracking-[0.3em] mb-4 block">
            Host Protection System
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-cyan mb-4">
            HARDWARE GOVERNOR
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous thermal monitoring with automatic agent throttling to prevent hardware damage under sustained load.
          </p>
        </motion.div>

        {/* Main Dashboard Card */}
        <motion.div
          className="relative p-6 md:p-10 rounded-xl border-2 border-[#0066ff]/30 bg-gradient-to-br from-[#0066ff]/10 via-[#020617] to-[#0066ff]/5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ boxShadow: "inset 0 0 80px rgba(0, 102, 255, 0.1)" }}
        >
          {/* Status Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                style={{
                  borderColor: getStatusColor(),
                  backgroundColor: `${getStatusColor()}20`,
                  boxShadow: `0 0 30px ${getStatusColor()}40`,
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="w-8 h-8" style={{ color: getStatusColor() }} />
              </motion.div>
              <div>
                <span className="font-mono text-xs text-gray-500 block">
                  PROTECTION STATUS
                </span>
                <span
                  className="font-mono text-2xl font-bold tracking-wider"
                  style={{ color: getStatusColor() }}
                >
                  {status}
                </span>
              </div>
            </div>

            {/* Throttle Indicator */}
            {throttleLevel > 0 && (
              <motion.div
                className="flex items-center gap-3 px-4 py-2 rounded-lg border border-red-500/50 bg-red-500/10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="font-mono text-sm text-red-500">
                  THROTTLING: {throttleLevel}%
                </span>
              </motion.div>
            )}

            {status === "OPTIMAL" && (
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-green-500/50 bg-green-500/10">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-mono text-sm text-green-500">
                  ALL SYSTEMS NOMINAL
                </span>
              </div>
            )}
          </div>

          {/* Gauges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {gauges.map((gauge, index) => {
              const Icon = gauge.icon;
              const percentage = (gauge.value / gauge.max) * 100;
              const isWarning = gauge.value > gauge.threshold.warning;
              const isCritical = gauge.value > gauge.threshold.critical;
              const gaugeColor = isCritical ? "#ef4444" : isWarning ? "#f59e0b" : "#00f2ff";

              return (
                <motion.div
                  key={gauge.label}
                  className="relative p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4" style={{ color: gaugeColor }} />
                    <span className="font-mono text-xs text-gray-500">
                      {gauge.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="text-2xl font-bold font-mono mb-2" style={{ color: gaugeColor }}>
                    {gauge.value}
                    <span className="text-sm ml-1">{gauge.unit}</span>
                  </div>

                  {/* Mini Bar */}
                  <div className="h-1.5 bg-[#0066ff]/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: gaugeColor }}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Warning indicator */}
                  {(isWarning || isCritical) && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <AlertTriangle
                        className="w-4 h-4"
                        style={{ color: gaugeColor }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Governor Logic Explanation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Thermometer,
                title: "Thermal Monitoring",
                desc: "Real-time CPU/GPU temperature tracking every 500ms",
                status: "ACTIVE",
              },
              {
                icon: Activity,
                title: "Load Balancing",
                desc: "Dynamic agent distribution based on thermal headroom",
                status: "ACTIVE",
              },
              {
                icon: Zap,
                title: "Auto-Throttling",
                desc: "Automatic agent pause/resume at 85°C threshold",
                status: "ARMED",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-lg border border-[#0066ff]/20 bg-[#0066ff]/5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5 text-[#00f2ff] mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white text-sm">
                        {item.title}
                      </span>
                      <span className="font-mono text-xs text-green-500">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0066ff]/50" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0066ff]/50" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0066ff]/50" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0066ff]/50" />
        </motion.div>
      </div>
    </section>
  );
}
