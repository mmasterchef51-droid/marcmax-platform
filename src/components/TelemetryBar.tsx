"use client";

import { motion } from "framer-motion";

const telemetryData = [
  { label: "CORE STATUS", value: "OPTIMAL", indicator: "green" },
  { label: "ACTIVE MODELS", value: "31", indicator: null },
  { label: "LATENCY", value: "84ms", indicator: null },
  { label: "NEURAL AGENTS", value: "6/6 ACTIVE", indicator: "green" },
  { label: "UPTIME", value: "99.99%", indicator: null },
];

export default function TelemetryBar() {
  return (
    <div className="w-full overflow-hidden border-y border-[#00f2ff]/20 bg-[#020617]/80 backdrop-blur-sm">
      <div className="flex items-center justify-center py-3 px-4">
        <div className="flex items-center gap-8 md:gap-12 overflow-x-auto scrollbar-hide">
          {telemetryData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.indicator === "green" && (
                <span className="w-2 h-2 rounded-full bg-green-500 blink-dot" />
              )}
              <span className="font-mono text-xs md:text-sm text-[#00f2ff]/60 uppercase tracking-wider">
                {item.label}:
              </span>
              <span className="font-mono text-xs md:text-sm text-[#00f2ff] font-semibold">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
