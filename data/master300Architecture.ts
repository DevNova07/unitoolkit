// =========================================================================
// 🚀 UniToolkit Master 300 SEO Architecture Registry
// Exact 300 Canonical Pages across 8 Structural Layers
// Zero Duplicates | 100% Google E-E-A-T Optimized
// =========================================================================

export interface Master300Page {
  url: string; // e.g. "/instagram-captions/attitude"
  h1: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  layer:
    | "core"
    | "pillar"
    | "ai"
    | "platform"
    | "topic"
    | "tool"
    | "longtail"
    | "blog";
  category?: string;
  platform?: string;
}

// -------------------------------------------------------------------------
// 1. CORE / TRUST / NAVIGATION (15 Pages)
// -------------------------------------------------------------------------
export const CORE_15_PAGES: Master300Page[] = [
  { url: "/", h1: "Social Media Captions, Bios, Quotes & AI Creator Tools", metaTitle: "UniToolkit — Free Social Media Captions, Bios, Quotes & AI Tools", metaDescription: "Discover 10,000+ curated Instagram captions, WhatsApp status, aesthetic bios, Hindi shayari, quotes, and free AI social media generators.", badge: "🔥 10,000+ Lines", layer: "core" },
  { url: "/about", h1: "About UniToolkit", metaTitle: "About Us | UniToolkit Social Creator Suite", metaDescription: "Learn about UniToolkit's mission to provide creators with high-converting captions, aesthetic bios, and 100% free AI tools.", badge: "About Us", layer: "core" },
  { url: "/contact", h1: "Contact UniToolkit", metaTitle: "Contact Us | UniToolkit Support & Partnerships", metaDescription: "Get in touch with the UniToolkit team for creator support, tool feedback, or business partnership inquiries.", badge: "Contact", layer: "core" },
  { url: "/privacy-policy", h1: "Privacy Policy", metaTitle: "Privacy Policy — Data Protection & Privacy | UniToolkit", metaDescription: "Learn how UniToolkit protects creator privacy with zero prompt storage, local browser preferences, and strict GDPR/CCPA data compliance.", badge: "Privacy First", layer: "core" },
  { url: "/terms-of-service", h1: "Terms of Service", metaTitle: "Terms of Service — Creator License & Agreement | UniToolkit", metaDescription: "Read the terms of service for UniToolkit. 100% royalty-free commercial and personal use rights for all curated captions, shayari, and AI text.", badge: "Terms", layer: "core" },
  { url: "/disclaimer", h1: "Disclaimer", metaTitle: "Disclaimer — Trademark Notices & AI Output | UniToolkit", metaDescription: "Important disclaimer information regarding third-party social media brand trademarks and generative AI output transparency.", badge: "Disclaimer", layer: "core" },
  { url: "/faq", h1: "Frequently Asked Questions", metaTitle: "Frequently Asked Questions (FAQ) | UniToolkit", metaDescription: "Answers to common questions about UniToolkit caption databases, free AI generation engines, and 1-click clipboard tools.", badge: "FAQ", layer: "core" },
  { url: "/glossary", h1: "Social Media Creator Glossary", metaTitle: "Social Media Creator Glossary — Terms & Definitions | UniToolkit", metaDescription: "Complete glossary of social media algorithms, viral hook terminology, hashtag ladders, and content creator metrics.", badge: "Glossary", layer: "core" },
  { url: "/sitemap", h1: "UniToolkit Sitemap", metaTitle: "HTML Sitemap — Explore All 300 Pages | UniToolkit", metaDescription: "Browse the complete directory of UniToolkit social media caption vaults, AI generators, platform hubs, and creator guides.", badge: "Sitemap", layer: "core" },
  { url: "/captions", h1: "Best Captions for Social Media", metaTitle: "350+ Best Captions for Social Media (2026) | UniToolkit", metaDescription: "Explore 350+ curated short, funny, attitude, and aesthetic captions for Instagram, TikTok, and YouTube with 1-click copy.", badge: "Captions Vault", layer: "core" },
  { url: "/bios", h1: "Best Social Media Bios", metaTitle: "500+ Best Instagram & Social Media Bios | UniToolkit", metaDescription: "Find aesthetic, VIP attitude, cool, and professional bios for Instagram, TikTok, and Twitter with clean line breaks.", badge: "Bio Styler", layer: "core" },
  { url: "/status", h1: "Best Status for Social Media", metaTitle: "1,000+ Best Status for WhatsApp & Social Media | UniToolkit", metaDescription: "Browse daily attitude, love, sad, and motivational 2-line status quotes with live mobile preview and 1-click WhatsApp share.", badge: "Status Studio", layer: "core" },
  { url: "/shayari", h1: "Best Shayari in Hindi & English", metaTitle: "1,500+ Best Shayari in Hindi & Hinglish | UniToolkit", metaDescription: "Heart-touching love, sad, attitude, and romantic shayari in authentic Hindi script and Hinglish with 1-click WhatsApp sharing.", badge: "Hindi Shayari", layer: "core" },
  { url: "/quotes", h1: "Best Quotes for Every Mood", metaTitle: "1,200+ Best Quotes for Motivation, Life & Mindset | UniToolkit", metaDescription: "Discover deep mindset quotes, stoic wisdom, and motivational lessons curated for social creators and daily inspiration.", badge: "Quotes Vault", layer: "core" },
  { url: "/tools", h1: "Social Media Creator Tools", metaTitle: "Free Creator Tools & Utilities | UniToolkit", metaDescription: "Explore free creator utilities including hashtag strategy builder, fancy unicode font generator, and username generator.", badge: "Tools Hub", layer: "core" },
];

// -------------------------------------------------------------------------
// 2. READY-MADE CONTENT PILLARS (70 Subpages + 5 Hubs above = 75 Total)
// -------------------------------------------------------------------------
export const PILLAR_CAPTIONS_SUBPAGES = [
  "short", "attitude", "love", "funny", "aesthetic", "travel", "gym",
  "selfie", "friends", "couple", "birthday", "success", "motivational", "photo-dump",
  "diwali", "eid", "new-year", "valentines", "holi", "raksha-bandhan"
];

export const PILLAR_BIOS_SUBPAGES = [
  "short", "attitude", "aesthetic", "boys", "girls", "cool", "love",
  "savage", "simple", "professional", "creator", "gym", "student", "motivational"
];

export const PILLAR_STATUS_SUBPAGES = [
  "whatsapp", "attitude", "love", "sad", "funny", "motivational", "romantic",
  "alone", "life", "friendship", "good-morning", "good-night", "birthday", "short",
  "diwali", "eid", "new-year", "valentines", "holi", "raksha-bandhan"
];

export const PILLAR_SHAYARI_SUBPAGES = [
  "love", "romantic", "sad", "attitude", "dosti", "dard", "bewafa",
  "motivational", "life", "heart-touching", "two-line", "breakup", "funny", "friendship",
  "valentines", "diwali", "eid", "new-year", "holi"
];

export const PILLAR_QUOTES_SUBPAGES = [
  "motivational", "life", "success", "love", "attitude", "friendship", "self-love",
  "mindset", "study", "work", "gym", "travel", "deep", "short"
];

// -------------------------------------------------------------------------
// 3. FIVE AI GENERATOR ENGINES (30 Pages = 5 Hubs + 25 Subpages)
// -------------------------------------------------------------------------
export const AI_ENGINES_MAP = {
  "ai-caption-generator": ["instagram", "tiktok", "youtube", "reels", "facebook"],
  "ai-bio-generator": ["instagram", "twitter", "linkedin", "tiktok", "youtube"],
  "ai-status-generator": ["whatsapp", "attitude", "love", "sad", "motivational"],
  "ai-shayari-generator": ["love", "attitude", "sad", "romantic", "friendship"],
  "ai-quotes-generator": ["motivational", "success", "love", "attitude", "life"],
};

// -------------------------------------------------------------------------
// 4. TEN PLATFORM ECOSYSTEM (50 Pages = 10 Platforms x 5 Core Types)
// Only includes types that have actual app/[platform]-[type]/page.tsx route files.
// -------------------------------------------------------------------------
export const PLATFORMS_80_MAP: Record<string, string[]> = {
  instagram: ["captions", "bio", "status", "shayari", "quotes"],
  whatsapp: ["captions", "bio", "status", "shayari", "quotes"],
  youtube: ["captions", "bio", "status", "shayari", "quotes"],
  tiktok: ["captions", "bio", "status", "shayari", "quotes"],
  facebook: ["captions", "bio", "status", "shayari", "quotes"],
  twitter: ["captions", "bio", "status", "shayari", "quotes"],
  linkedin: ["captions", "bio", "status", "shayari", "quotes"],
  pinterest: ["captions", "bio", "status", "shayari", "quotes"],
  threads: ["captions", "bio", "status", "shayari", "quotes"],
  snapchat: ["captions", "bio", "status", "shayari", "quotes"],
};

// -------------------------------------------------------------------------
// 5. SIX TOPIC / MOOD HUBS (30 Pages = 6 Topics x 5 Types)
// -------------------------------------------------------------------------
export const TOPICS_30_LIST = ["attitude", "love", "sad", "funny", "hindi", "english"];
export const TOPIC_TYPES_LIST = ["captions", "bio", "status", "shayari", "quotes"];

// -------------------------------------------------------------------------
// 6. FIVE CREATOR UTILITY TOOLS (5 Pages)
// -------------------------------------------------------------------------
export const CREATOR_TOOLS_5: Master300Page[] = [
  { url: "/tools/hashtag-generator", h1: "Hashtag Generator", metaTitle: "AI Hashtag Generator — Trending & Niche Tags | UniToolkit", metaDescription: "Generate balanced High, Medium, and Low competition hashtags for Instagram, TikTok, and YouTube with 1-click copy.", badge: "Hashtags", layer: "tool" },
  { url: "/tools/fancy-font-generator", h1: "Fancy Font Generator", metaTitle: "Fancy Font Generator — Aesthetic Fonts for Instagram & Bios | UniToolkit", metaDescription: "Convert plain text into aesthetic, cursive, bold, and stylish unicode fonts ready to copy-paste into Instagram bio and captions.", badge: "Fonts", layer: "tool" },
  { url: "/tools/username-generator", h1: "Username Generator", metaTitle: "Aesthetic Username Generator for Instagram & TikTok | UniToolkit", metaDescription: "Generate rare, aesthetic, cool, and VIP usernames for Instagram, TikTok, and gaming profiles.", badge: "Usernames", layer: "tool" },
  { url: "/tools/reel-hook-generator", h1: "Reel Hook Generator", metaTitle: "Viral Reel Hook Generator — Stop the Scroll | UniToolkit", metaDescription: "Generate 3-second viral video hooks and scroll-stopping openers for Instagram Reels, TikTok, and YouTube Shorts.", badge: "Reel Hooks", layer: "tool" },
  { url: "/tools/text-generator", h1: "Text Generator", metaTitle: "Free Text Generator & Caption Styler | UniToolkit", metaDescription: "Generate and style text with custom line breaks, symbols, and formatting for social media creators.", badge: "Text Styler", layer: "tool" },
];

// -------------------------------------------------------------------------
// 7. HIGH-INTENT LONG-TAIL SUBPAGES (45 Pages)
// -------------------------------------------------------------------------
export const LONG_TAIL_45_MAP: Record<string, string[]> = {
  "instagram-captions": ["attitude", "love", "aesthetic", "boys", "girls", "hindi", "short", "funny", "travel", "selfie"],
  "instagram-bio": ["attitude", "aesthetic", "boys", "girls", "love", "cool", "professional", "short"],
  "whatsapp-status": ["attitude", "love", "sad", "funny", "motivational", "romantic", "alone", "short"],
  "youtube-captions": ["shorts", "motivational", "funny", "short"],
  "youtube-quotes": ["motivational"],
  "tiktok-captions": ["viral", "funny", "short", "attitude"],
  "twitter-captions": ["one-liners", "hot-takes"],
  "linkedin-captions": ["professional", "personal-branding"],
  "pinterest-captions": ["aesthetic", "quotes"],
  "threads-captions": ["attitude", "one-liners"],
  "snapchat-captions": ["streaks", "selfie"],
};

// -------------------------------------------------------------------------
// 8. CREATOR GUIDES / BLOG (20 Articles + 1 Hub in Core = 20 Articles)
// -------------------------------------------------------------------------
export const BLOG_20_SLUGS = [
  "how-to-write-instagram-captions",
  "instagram-caption-ideas",
  "how-to-write-viral-reels-captions",
  "instagram-bio-guide",
  "instagram-bio-ideas",
  "whatsapp-status-guide",
  "short-whatsapp-status-ideas",
  "how-to-write-shayari",
  "love-shayari-guide",
  "motivational-quotes-guide",
  "social-media-content-ideas",
  "instagram-content-ideas",
  "tiktok-content-ideas",
  "youtube-shorts-content-ideas",
  "social-media-bio-guide",
  "how-to-use-hashtags",
  "aesthetic-fonts-guide",
  "creator-tools-guide",
  "ai-caption-generator-guide",
  "social-media-content-workflow",
];

// -------------------------------------------------------------------------
// MASTER URL GENERATOR (Exact 300 URLs)
// -------------------------------------------------------------------------
export function getAllMaster300Urls(): string[] {
  const urls: string[] = [];

  // 1. Core (15)
  CORE_15_PAGES.forEach((p) => urls.push(p.url));

  // 2. Pillars (70 subpages)
  PILLAR_CAPTIONS_SUBPAGES.forEach((s) => urls.push(`/captions/${s}`));
  PILLAR_BIOS_SUBPAGES.forEach((s) => urls.push(`/bios/${s}`));
  PILLAR_STATUS_SUBPAGES.forEach((s) => urls.push(`/status/${s}`));
  PILLAR_SHAYARI_SUBPAGES.forEach((s) => urls.push(`/shayari/${s}`));
  PILLAR_QUOTES_SUBPAGES.forEach((s) => urls.push(`/quotes/${s}`));

  // 3. AI Engines (5 hubs + 25 subpages = 30)
  Object.entries(AI_ENGINES_MAP).forEach(([hub, subpages]) => {
    urls.push(`/${hub}`);
    subpages.forEach((sub) => urls.push(`/${hub}/${sub}`));
  });

  // 4. Platform Hubs (80)
  Object.entries(PLATFORMS_80_MAP).forEach(([plat, types]) => {
    types.forEach((t) => urls.push(`/${plat}-${t}`));
  });

  // 5. Topics (30)
  TOPICS_30_LIST.forEach((topic) => {
    TOPIC_TYPES_LIST.forEach((t) => urls.push(`/${topic}-${t}`));
  });

  // 6. Tools (5)
  CREATOR_TOOLS_5.forEach((tool) => urls.push(tool.url));

  // 7. Long-Tail (45)
  Object.entries(LONG_TAIL_45_MAP).forEach(([base, subs]) => {
    subs.forEach((sub) => urls.push(`/${base}/${sub}`));
  });

  // 8. Blog (20)
  BLOG_20_SLUGS.forEach((slug) => urls.push(`/blog/${slug}`));

  // Deduplicate
  return [...new Set(urls)];
}
