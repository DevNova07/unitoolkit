import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 301 Permanent Redirects for Clean SEO & Deduplication
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/attitude-captions", destination: "/captions/attitude", permanent: true },
      { source: "/love-captions", destination: "/captions/love", permanent: true },
      { source: "/funny-captions", destination: "/captions/funny", permanent: true },
      { source: "/x-captions", destination: "/twitter-captions", permanent: true },
      { source: "/x", destination: "/twitter-captions", permanent: true },
      { source: "/twitter", destination: "/twitter-captions", permanent: true },
      { source: "/quotes-generator", destination: "/ai-quotes-generator", permanent: true },
      { source: "/ai-quote-generator", destination: "/ai-quotes-generator", permanent: true },
      { source: "/captions-generator", destination: "/ai-caption-generator", permanent: true },
      { source: "/bio-generator", destination: "/ai-bio-generator", permanent: true },
      { source: "/status-generator", destination: "/ai-status-generator", permanent: true },
      { source: "/hashtag-generator", destination: "/tools/hashtag-generator", permanent: true },
      { source: "/ai-hashtag-generator", destination: "/tools/hashtag-generator", permanent: true },
      { source: "/ai-hashtag-generator/:slug*", destination: "/tools/hashtag-generator", permanent: true },
      { source: "/whatsapp", destination: "/whatsapp-status", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/instagram", destination: "/instagram-captions" },
      { source: "/tiktok", destination: "/tiktok-captions" },
      { source: "/youtube", destination: "/youtube-captions" },
      { source: "/facebook", destination: "/facebook-captions" },
      { source: "/linkedin", destination: "/linkedin-captions" },
      { source: "/threads", destination: "/threads-captions" },
      { source: "/pinterest", destination: "/pinterest-captions" },
      { source: "/snapchat", destination: "/snapchat-captions" },
    ];
  },
};

export default nextConfig;
