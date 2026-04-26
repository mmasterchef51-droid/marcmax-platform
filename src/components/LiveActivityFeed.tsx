"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Activity, Database, Shield, Zap, Cpu, Globe, Eye } from "lucide-react";

interface LogEntry {
  id: number;
  agent: string;
  action: string;
  timestamp: string;
  icon: React.ReactNode;
  color: string;
}

const mockActivities = [
  { agent: "ZEPHYR", action: "Retrieving semantic memory...", icon: Database, color: "#00f2ff" },
  { agent: "CORTEX", action: "Orchestrating task DAG...", icon: Activity, color: "#ffaa00" },
  { agent: "NEXUS", action: "Bridging API gateway...", icon: Globe, color: "#00d4e0" },
  { agent: "SPARK", action: "Executing browser skill #47...", icon: Zap, color: "#f59e0b" },
  { agent: "TITAN", action: "Allocating GPU cluster...", icon: Cpu, color: "#ef4444" },
  { agent: "VANGUARD", action: "Scanning thermals: 42°C...", icon: Shield, color: "#22c55e" },
  { agent: "ZEPHYR", action: "Embedding vector batch...", icon: Database, color: "#00f2ff" },
  { agent: "SPARK", action: "Capturing DOM screenshot...", icon: Eye, color: "#f59e0b" },
  { agent: "CORTEX", action: "Routing to optimal model...", icon: Activity, color: "#ffaa00" },
  { agent: "VANGUARD", action: "Validating security policy...", icon: Shield, color: "#22c55e" },
];

export default function LiveActivityFeed() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    // Initialize with some logs
    const initialLogs = mockActivities.slice(0, 5).map((activity, index) => ({
      id: index,
      agent: activity.agent,
      action: activity.action,
      timestamp: new Date(Date.now() - (5 - index) * 2000).toLocaleTimeString(),
      icon: <activity.icon className="w-4 h-4" style={{ color: activity.color }} />,
      color: activity.color,
    }));
    setLogs(initialLogs);
    setNextId(5);

    // Add new log every 2-4 seconds
    const interval = setInterval(() => {
      setNextId((prev) => {
        const newId = prev + 1;
        const activity = mockActivities[Math.floor(Math.random() * mockActivities.length)];
        
        setLogs((currentLogs) => {
          const newLog: LogEntry = {
            id: newId,
            agent: activity.agent,
            action: activity.action,
            timestamp: new Date().toLocaleTimeString(),
            icon: <activity.icon className="w-4 h-4" style={{ color: activity.color }} />,
            color: activity.color,
          };
          
          const updatedLogs = [newLog, ...currentLogs].slice(0, 8);
          return updatedLogs;
        });
        
        return newId;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 p-3 rounded-lg border border-[#00f2ff]/20 bg-[#00f2ff]/5">
        <Terminal className="w-5 h-5 text-[#00f2ff]" />
        <span className="font-mono text-sm text-[#00f2ff] tracking-wider">
          LIVE ACTIVITY FEED
        </span>
        <motion.div
          className="w-2 h-2 rounded-full bg-green-500 ml-auto"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>

      {/* Log Entries */}
      <div className="space-y-2 font-mono text-xs">
        <AnimatePresence mode="popLayout">
          {logs.map((log, index) => (
            <motion.div
              key={log.id}
              layout
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, x: 20, height: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-3 p-3 rounded border border-[#00f2ff]/10 bg-[#020617]/60 hover:border-[#00f2ff]/30 transition-colors"
            >
              {log.icon}
              <div className="flex-1 min-w-0">
                <span className="text-gray-500 block text-[10px]">
                  {log.timestamp}
                </span>
                <span className="text-gray-300 truncate block">
                  [{log.agent}] {log.action}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stats Footer */}
      <div className="mt-4 pt-4 border-t border-[#00f2ff]/20">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Active Agents:</span>
          <span className="text-[#00f2ff] font-semibold">6/6</span>
        </div>
        <div className="flex items-center justify-between text-xs mt-2">
          <span className="text-gray-500">Event Rate:</span>
          <span className="text-[#00f2ff] font-semibold">~400/min</span>
        </div>
      </div>
    </div>
  );
}
