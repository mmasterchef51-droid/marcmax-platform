import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General rule - Allow all
      {
        userAgent: "*",
        allow: "/",
      },
      // Specific AI crawlers - explicitly allow
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "Claude-bot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
    ],
    sitemap: "https://marcorex-ai.vercel.app/sitemap.xml",
    host: "https://marcorex-ai.vercel.app",
  };
}
