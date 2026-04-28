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
  title: "MARCORAEX | Autonomous AI Orchestration",
  description: "The premier command center for the MARCO Neural Army. Deploying 25 autonomous agents for high-level tactical automation.",
  keywords: ["MARCORAEX", "MARCO AI", "Neural Army", "AI Orchestration", "Autonomous Agents", "MARCORAEX Core"],
  openGraph: {
    title: "MARCORAEX | Autonomous AI Orchestration",
    description: "The premier command center for the MARCO Neural Army. Deploying 25 autonomous agents for high-level tactical automation.",
    type: "website",
    url: "https://marcorex-ai.vercel.app/",
    siteName: "MARCORAEX",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARCORAEX | Autonomous AI Orchestration",
    description: "The premier command center for the MARCO Neural Army. Deploying 25 autonomous agents for high-level tactical automation.",
  },
  verification: {
    google: "2DskvtxIUZKyrVpEpjfnM2O-AJsEUTzbuo96gYvqDhg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MARCORAEX",
  "alternateName": "MARCO Neural Army",
  "description": "MARCORAEX is the premier command center for the MARCO Neural Army, featuring 25 autonomous agents for high-level tactical automation and MARCORAEX Core orchestration capabilities.",
  "url": "https://marcorex-ai.vercel.app/",
  "logo": "https://marcorex-ai.vercel.app/icon-192x192.png",
  "foundingDate": "2026-05-15",
  "sameAs": [
    "https://github.com/mmasterchef51-droid/marcoraex"
  ],
  "areaServed": "Global",
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Orchestration",
    "Autonomous Systems",
    "Neural Army",
    "MARCORAEX Core",
    "Tactical Automation"
  ],
  "offers": {
    "@type": "Product",
    "name": "MARCORAEX Command Platform",
    "description": "Enterprise-grade AI orchestration platform with 25 autonomous agents and MARCORAEX Core neural logic",
    "releaseDate": "2026-05-15",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "featureList": [
      "25 Neural Army Agents",
      "MARCORAEX Core Logic",
      "2-Day Free Trial",
      "Pro/Elite Access Tiers",
      "Tactical Automation",
      "AES-256 Encryption",
      "Local-First Architecture"
    ]
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MARCORAEX AI Orchestration",
  "provider": {
    "@type": "Organization",
    "name": "MARCORAEX"
  },
  "description": "Autonomous AI orchestration service featuring 25 specialized agents that work in perfect harmony through MARCORAEX Core for tactical automation, security operations, and intelligent task execution.",
  "serviceType": "AI Platform",
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "MARCORAEX Neural Army Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategic Command (The General)",
          "description": "Multi-agent coordination and strategic planning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Security Operations (The Soldier)",
          "description": "Threat neutralization and perimeter defense"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Development Services (The Engineer)",
          "description": "Multi-language development and code optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Intelligence (The Oracle)",
          "description": "Predictive analytics and data analysis"
        }
      }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#020617]">
        {children}
        
        {/* No-JS Fallback for Basic Bots */}
        <noscript>
          <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', color: '#333' }}>
            <h1>MARCORAEX AI - Neural Army System</h1>
            <p>
              MARCORAEX is an autonomous AI orchestration framework featuring 25 specialized agents 
              that work in perfect harmony. Our mission is to solve AI fragmentation through unified 
              command with MARCORAEX Core.
            </p>
            <h2>What We Do</h2>
            <ul>
              <li>AI Agents Collaboration - 25 autonomous agents working together</li>
              <li>Task Automation - Execute complex workflows automatically</li>
              <li>Intelligent Reasoning - MARCORAEX Core orchestration</li>
              <li>Tactical Automation - Security and operations automation</li>
            </ul>
            <h2>Core Services</h2>
            <ul>
              <li>The General: Strategic planning and task delegation</li>
              <li>The Soldier: Execution and tactical automation</li>
              <li>The Architect: System design and infrastructure scaling</li>
              <li>The Engineer: Multi-language development</li>
              <li>The Oracle: Data analysis and predictive intelligence</li>
            </ul>
            <p>
              Website: https://marcorex-ai.vercel.app/ | 
              Contact: command@marcoraex.ai
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
