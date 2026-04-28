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
