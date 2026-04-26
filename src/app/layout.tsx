import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MARCMAX | Home of the MARCO Neural Army - Autonomous AI Orchestration",
  description: "MARCMAX: Home of the MARCO Neural Army. 50,000+ Lines of Intelligence. 24/7 Autonomy. Enterprise-Grade AI Orchestration.",
  verification: {
    google: "2DskvtxIUZKyrVpEpjfnM2O-AJsEUTzbuo96gYvqDhg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MARCMAX",
  "alternateName": "MARCO Neural Army",
  "description": "MARCMAX is the home of MARCO (Modular Advanced Response & Command Orchestrator), an autonomous AI orchestration platform featuring a Neural Army of 6 specialized agents, 31+ AI models, and 24/7 operational capability with local-first architecture and zero cloud dependency.",
  "url": "https://marcmax-platform.vercel.app/",
  "logo": "https://marcmax-platform.vercel.app/icon-192x192.png",
  "foundingDate": "2026-05-15",
  "sameAs": [
    "https://github.com/mmasterchef51-droid/marcmax-platform"
  ],
  "areaServed": "Global",
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Orchestration",
    "Autonomous Systems",
    "Browser Automation",
    "Semantic Memory",
    "Local-First Architecture"
  ],
  "offers": {
    "@type": "Product",
    "name": "MARCMAX SaaS Platform",
    "description": "Enterprise-grade AI orchestration platform with 6 neural agents, 31+ AI models, and 24/7 autonomous operation",
    "releaseDate": "2026-05-15",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "featureList": [
      "6 Neural Army Agents",
      "31+ AI Models",
      "Semantic Memory with ChromaDB",
      "Browser Automation (200+ skills)",
      "AES-256 Encryption",
      "Local-First Architecture",
      "Thermal Protection",
      "Multi-Model Routing"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#020617]">{children}</body>
    </html>
  );
}
