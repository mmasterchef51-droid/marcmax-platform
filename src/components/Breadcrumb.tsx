"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const pathMap: Record<string, string> = {
  "": "Home",
  "docs": "Documentation",
  "api": "API Reference",
  "support": "Support",
  "faq": "FAQ",
  "portal": "Commander's Portal",
  "army": "Neural Army",
  "tech": "Technology",
  "technology": "Technology",
  "models": "Model Registry",
  "architecture": "Architecture",
  "automation": "Automation",
  "multimodal": "Multimodal",
  "memory": "Memory",
  "safety": "Safety",
  "governor": "Thermal Governor",
  "privacy": "Data Sovereignty",
  "self-improvement": "Self-Improvement",
  "security": "Security Architecture",
  "download": "Download",
  "changelog": "Changelog",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm mb-8">
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-500 hover:text-[#00f2ff] transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>

      {paths.map((path, index) => {
        const href = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;
        const label = pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);

        return (
          <div key={path} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-600" />
            {isLast ? (
              <span className="text-[#00f2ff] font-medium">{label}</span>
            ) : (
              <Link
                href={href}
                className="text-gray-500 hover:text-[#00f2ff] transition-colors"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
