export type ToolCategory = "create" | "ready" | "platform";

export type ToolType =
  | "ai-generator"
  | "library"
  | "platform-hub";

export interface ToolItem {
  id: string;
  name: string;
  slug: string;
  category: ToolCategory;
  type: ToolType;
  platform: string[];
  description: string;
  iconName: string;
  route: string;
  badge?: string;
  isAI?: boolean;
  isReady?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  color?: string;
  countLabel?: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const TOOLS_REGISTRY: ToolItem[] = [
  // ==========================================
  // THE 5 CORE TOOLS
  // 1. Shayari  2. Status  3. Bio  4. Quotes  5. Captions
  // ==========================================
  {
    id: "captions",
    name: "Captions Studio & Vault",
    slug: "captions",
    category: "create",
    type: "ai-generator",
    platform: ["instagram", "tiktok", "youtube", "facebook", "linkedin", "x", "threads", "pinterest", "snapchat", "whatsapp"],
    description: "Generate viral AI captions with 20+ moods or explore 15,000+ hand-crafted social media lines.",
    iconName: "Sparkles",
    route: "/captions",
    badge: "AI & 15K+ Lines",
    isAI: true,
    isPopular: true,
    color: "from-indigo-500 to-purple-600",
    countLabel: "15,000+ Captions",
    seoTitle: "AI Caption Studio & 15,000+ Captions Vault | UniToolkit",
    seoDescription: "Generate viral AI captions and copy hand-crafted lines for Instagram, TikTok, YouTube, and Facebook.",
    keywords: ["captions", "ai caption", "instagram captions", "viral captions"],
  },
  {
    id: "shayari",
    name: "Hindi Shayari Vault",
    slug: "shayari",
    category: "ready",
    type: "library",
    platform: ["whatsapp", "instagram", "facebook"],
    description: "Authentic Love, Sad, Attitude, Dosti, and 2-Line Shayari in Devanagari script and Romanized Hindi.",
    iconName: "BookOpen",
    route: "/shayari",
    badge: "Devanagari & Hindi",
    isReady: true,
    isPopular: true,
    color: "from-amber-500 to-red-600",
    countLabel: "2,000+ Shayari",
    seoTitle: "Hindi Shayari Vault — Love, Sad & Attitude Shayari | UniToolkit",
    seoDescription: "Best Hindi Shayari for WhatsApp status, Instagram captions, and emotional expressions.",
    keywords: ["hindi shayari", "love shayari", "sad shayari", "attitude shayari", "2 line shayari"],
  },
  {
    id: "whatsapp-status",
    name: "Status & Quotes",
    slug: "whatsapp-status",
    category: "ready",
    type: "library",
    platform: ["whatsapp"],
    description: "Daily updated status lines, attitude quotes, romantic status, and 1-click WhatsApp share.",
    iconName: "MessageCircle",
    route: "/whatsapp-status",
    badge: "Daily Status",
    isReady: true,
    isPopular: true,
    color: "from-emerald-500 to-teal-600",
    countLabel: "1,700+ Status",
    seoTitle: "WhatsApp Status Quotes & Short Lines | UniToolkit",
    seoDescription: "Curated WhatsApp status lines, attitude quotes, and short status updates with 1-click share.",
    keywords: ["whatsapp status", "status quotes", "attitude status for whatsapp", "status"],
  },
  {
    id: "bios",
    name: "VIP Bio Generator",
    slug: "bios",
    category: "create",
    type: "ai-generator",
    platform: ["instagram", "threads"],
    description: "Generate stylish, VIP attitude, aesthetic, and high-converting bio blueprints with live profile preview.",
    iconName: "User",
    route: "/bios",
    badge: "VIP Styler",
    isAI: true,
    isPopular: true,
    color: "from-purple-500 to-pink-600",
    countLabel: "500+ Bios",
    seoTitle: "Instagram Bio Generator & VIP Profile Styler | UniToolkit",
    seoDescription: "Generate stylish, VIP, and aesthetic Instagram bios for boys and girls with live preview.",
    keywords: ["bio generator", "instagram bio styler", "vip bio", "aesthetic bio", "bio"],
  },
  {
    id: "quotes",
    name: "Quotes & Wisdom Hub",
    slug: "quotes",
    category: "ready",
    type: "library",
    platform: ["instagram", "linkedin", "x", "whatsapp"],
    description: "Philosophical reflections, billionaire mindset lines, discipline quotes, and daily wisdom.",
    iconName: "Quote",
    route: "/quotes",
    badge: "Mindset",
    isReady: true,
    isPopular: true,
    color: "from-amber-500 to-yellow-600",
    countLabel: "1,500+ Quotes",
    seoTitle: "Inspirational Quotes & Mindset Wisdom | UniToolkit",
    seoDescription: "Discover powerful quotes on success, discipline, leadership, and personal growth.",
    keywords: ["quotes", "inspirational quotes", "daily wisdom", "success quotes"],
  },

  // ==========================================
  // ALL 10 PLATFORMS
  // ==========================================
  {
    id: "platform-instagram",
    name: "Instagram Hub",
    slug: "instagram",
    category: "platform",
    type: "platform-hub",
    platform: ["instagram"],
    description: "Complete toolkit for Instagram: Posts, Reels, Stories, Bios, and Captions.",
    iconName: "Instagram",
    route: "/instagram-captions",
    badge: "3,500+ Items",
    color: "from-amber-500 via-rose-500 to-purple-600",
    countLabel: "3,500+ Items",
    seoTitle: "Instagram Captions, Reels Hooks & Creator Tools | UniToolkit",
    seoDescription: "Best captions, reels hooks, bio templates, and tools for Instagram.",
    keywords: ["instagram captions", "instagram tools", "instagram reels hooks"],
  },
  {
    id: "platform-tiktok",
    name: "TikTok Hub",
    slug: "tiktok",
    category: "platform",
    type: "platform-hub",
    platform: ["tiktok"],
    description: "Viral hooks, funny audio lines, and FYP-optimized captions for TikTok videos & slideshows.",
    iconName: "Video",
    route: "/tiktok-captions",
    badge: "2,200+ Items",
    color: "from-cyan-400 to-pink-500",
    countLabel: "2,200+ Items",
    seoTitle: "TikTok Captions, Viral Hooks & Slideshow Lines | UniToolkit",
    seoDescription: "Viral TikTok captions, trending video hooks, and FYP engagement lines.",
    keywords: ["tiktok captions", "tiktok hooks", "viral tiktok text"],
  },
  {
    id: "platform-youtube",
    name: "YouTube Shorts Hub",
    slug: "youtube",
    category: "platform",
    type: "platform-hub",
    platform: ["youtube"],
    description: "High CTR titles, Shorts openers, video description starters, and community tab prompts.",
    iconName: "Youtube",
    route: "/youtube-captions",
    badge: "1,800+ Items",
    color: "from-red-600 to-rose-600",
    countLabel: "1,800+ Items",
    seoTitle: "YouTube Shorts Captions, Titles & Hooks | UniToolkit",
    seoDescription: "High-CTR YouTube titles, Shorts captions, and community discussion prompts.",
    keywords: ["youtube captions", "youtube shorts titles", "youtube hooks"],
  },
  {
    id: "platform-facebook",
    name: "Facebook Hub",
    slug: "facebook",
    category: "platform",
    type: "platform-hub",
    platform: ["facebook"],
    description: "Engaging photo captions, family holiday lines, milestone announcements, and funny statuses.",
    iconName: "Facebook",
    route: "/facebook-captions",
    badge: "1,600+ Items",
    color: "from-blue-600 to-indigo-600",
    countLabel: "1,600+ Items",
    seoTitle: "Facebook Captions, Photo Statuses & Milestones | UniToolkit",
    seoDescription: "Best Facebook photo captions, family celebration lines, and status updates.",
    keywords: ["facebook captions", "facebook photo captions", "facebook status"],
  },
  {
    id: "platform-linkedin",
    name: "LinkedIn Pro Hub",
    slug: "linkedin",
    category: "platform",
    type: "platform-hub",
    platform: ["linkedin"],
    description: "Thought-leadership openers, career milestone announcements, and startup reflections.",
    iconName: "Linkedin",
    route: "/linkedin-captions",
    badge: "1,400+ Items",
    color: "from-blue-600 to-sky-500",
    countLabel: "1,400+ Items",
    seoTitle: "LinkedIn Professional Captions & Career Posts | UniToolkit",
    seoDescription: "Professional LinkedIn post captions, promotion announcements, and leadership insights.",
    keywords: ["linkedin captions", "career posts", "professional captions"],
  },
  {
    id: "platform-x",
    name: "X (Twitter) Hub",
    slug: "x",
    category: "platform",
    type: "platform-hub",
    platform: ["x"],
    description: "Viral one-liners, high-retweet hot takes, and informative thread openers.",
    iconName: "Twitter",
    route: "/twitter-captions",
    badge: "1,900+ Items",
    color: "from-zinc-800 to-black",
    countLabel: "1,900+ Items",
    seoTitle: "X (Twitter) Viral One-Liners & Thread Starters | UniToolkit",
    seoDescription: "Clever one-liners, viral hot takes, and thread starter tweets for X.",
    keywords: ["twitter captions", "x one liners", "viral tweets", "thread starters"],
  },
  {
    id: "platform-threads",
    name: "Threads Hub",
    slug: "threads",
    category: "platform",
    type: "platform-hub",
    platform: ["threads"],
    description: "Casual thoughts, conversational questions, and raw unfiltered takes for the Threads app.",
    iconName: "AtSign",
    route: "/threads-captions",
    badge: "1,100+ Items",
    color: "from-zinc-900 to-zinc-700",
    countLabel: "1,100+ Items",
    seoTitle: "Threads App Captions, Conversation Starters & Takes | UniToolkit",
    seoDescription: "Engaging, unfiltered, and conversational posts designed for the Meta Threads algorithm.",
    keywords: ["threads captions", "threads app posts", "threads conversation starters"],
  },
  {
    id: "platform-pinterest",
    name: "Pinterest Hub",
    slug: "pinterest",
    category: "platform",
    type: "platform-hub",
    platform: ["pinterest"],
    description: "Search-friendly, inspirational descriptions for moodboards, fashion, recipes, and home decor.",
    iconName: "Pin",
    route: "/pinterest-captions",
    badge: "950+ Items",
    color: "from-rose-600 to-red-600",
    countLabel: "950+ Items",
    seoTitle: "Pinterest Aesthetic Descriptions & SEO Pin Text | UniToolkit",
    seoDescription: "Search-friendly pin descriptions and aesthetic moodboard text for Pinterest.",
    keywords: ["pinterest captions", "pin descriptions", "aesthetic pinterest quotes"],
  },
  {
    id: "platform-snapchat",
    name: "Snapchat Hub",
    slug: "snapchat",
    category: "platform",
    type: "platform-hub",
    platform: ["snapchat"],
    description: "Quick daily streak lines, Spotlight short video hooks, and behind-the-scenes snap text.",
    iconName: "Ghost",
    route: "/snapchat-captions",
    badge: "1,050+ Items",
    color: "from-amber-400 to-yellow-500",
    countLabel: "1,050+ Items",
    seoTitle: "Snapchat Streak Captions, Spotlight Hooks & Snaps | UniToolkit",
    seoDescription: "Short streak captions, Spotlight video hooks, and daily snap lines for Snapchat.",
    keywords: ["snapchat captions", "snap streak captions", "snapchat spotlight text"],
  },
  {
    id: "platform-whatsapp",
    name: "WhatsApp Hub",
    slug: "whatsapp",
    category: "platform",
    type: "platform-hub",
    platform: ["whatsapp"],
    description: "Attitude status, romantic quotes, Hindi shayari, and 1-word status updates for WhatsApp.",
    iconName: "MessageCircle",
    route: "/whatsapp-status",
    badge: "1,700+ Items",
    color: "from-emerald-500 to-green-600",
    countLabel: "1,700+ Items",
    seoTitle: "WhatsApp Status, Attitude Lines & Daily Quotes | UniToolkit",
    seoDescription: "Best WhatsApp status quotes, attitude lines, and Hindi shayari with 1-click share.",
    keywords: ["whatsapp status hub", "status for whatsapp", "whatsapp quotes"],
  },
];

// Helper Lookups
export function getAllTools(): ToolItem[] {
  return TOOLS_REGISTRY;
}

export function getCore5Tools(): ToolItem[] {
  return TOOLS_REGISTRY.filter((t) => t.category !== "platform");
}

export function getToolsByCategory(category: ToolCategory): ToolItem[] {
  return TOOLS_REGISTRY.filter((t) => t.category === category);
}

export function getPopularTools(): ToolItem[] {
  return TOOLS_REGISTRY.filter((t) => t.isPopular && t.category !== "platform");
}

export function getToolsByPlatform(platformSlug: string): ToolItem[] {
  return TOOLS_REGISTRY.filter((t) => t.platform.includes(platformSlug));
}

export function searchToolsRegistry(query: string, categoryFilter?: ToolCategory | "all"): ToolItem[] {
  const q = query.toLowerCase().trim();
  return TOOLS_REGISTRY.filter((t) => {
    const matchesCategory =
      !categoryFilter || categoryFilter === "all" || t.category === categoryFilter;
    if (!matchesCategory) return false;
    if (!q) return true;

    return (
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q)) ||
      t.platform.some((p) => p.toLowerCase().includes(q))
    );
  });
}
