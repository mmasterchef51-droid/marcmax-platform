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
        userAgent: "Claude-Web",
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
    sitemap: "https://marcmax-platform.vercel.app/sitemap.xml",
    host: "https://marcmax-platform.vercel.app",
  };
}
