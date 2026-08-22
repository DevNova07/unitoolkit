export interface PlatformFeatureItem {
  name: string;
  slug: string;
  route: string;
  description: string;
  badge?: string;
  category?: "ai" | "tool" | "content";
}

export interface PlatformDetail {
  id: string;
  name: string;
  slug: string;
  route: string;
  cluster: "social" | "professional" | "visual" | "messaging";
  badge: string;
  tagline: string;
  description: string;
  count: string;
  color: string;
  gradient: string;
  features: PlatformFeatureItem[];
  aiTools: { name: string; route: string; desc: string }[];
  popularTopics: string[];
}

export const PLATFORM_TAXONOMY: Record<string, PlatformDetail> = {
  // 1. INSTAGRAM (4 Tools: Captions, Bio, Quotes, Shayari)
  instagram: {
    id: "instagram",
    name: "Instagram",
    slug: "instagram",
    route: "/instagram-captions",
    cluster: "social",
    badge: "Most Popular",
    tagline: "Captions, Aesthetic Bios, Quotes & Hindi Shayari",
    description: "The complete Instagram creator suite for viral Reels captions, aesthetic profile bios, attitude quotes, and Hindi shayari.",
    count: "3,500+",
    color: "#E1306C",
    gradient: "from-amber-500 via-rose-500 to-purple-600",
    features: [
      { name: "Instagram Captions Vault", slug: "posts", route: "/captions?platform=instagram", description: "3,500+ aesthetic, savage, and photo dump lines with 1-click copy.", badge: "3.5K+ Lines", category: "content" },
      { name: "Instagram Bio Styler", slug: "bios", route: "/bios", description: "Aesthetic, VIP attitude bios with live profile preview.", badge: "VIP Styler", category: "tool" },
      { name: "Instagram Quotes", slug: "quotes", route: "/quotes", description: "Mindset, aesthetic, and daily motivation quotes for posts and stories.", badge: "Quotes", category: "content" },
      { name: "Instagram Hindi Shayari", slug: "shayari", route: "/shayari", description: "Love, Sad, and 2-Line authentic shayari in Devanagari & Hinglish.", badge: "हिंदी Shayari", category: "content" },
    ],
    aiTools: [
      { name: "AI Instagram Caption Studio", route: "/ai-caption-generator?platform=instagram", desc: "Generate viral Instagram captions with 20+ moods" },
      { name: "VIP Bio Generator", route: "/bios", desc: "Generate aesthetic VIP Instagram bios" },
    ],
    popularTopics: ["Attitude", "Love", "Aesthetic", "Gym", "Travel", "Selfie", "Fashion", "Friends", "Sad", "Motivation"],
  },

  // 2. WHATSAPP (4 Tools: Status, Shayari, Quotes, Bio)
  whatsapp: {
    id: "whatsapp",
    name: "WhatsApp",
    slug: "whatsapp",
    route: "/whatsapp-status",
    cluster: "messaging",
    badge: "Daily Status",
    tagline: "Attitude Status, Hindi Shayari & Wisdom Quotes",
    description: "Daily updated WhatsApp status lines with live mobile screen preview, romantic lines, deep philosophy, and instant 1-click share.",
    count: "1,700+",
    color: "#25D366",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      { name: "WhatsApp Status Quotes", slug: "status", route: "/whatsapp-status", description: "Attitude, life wisdom, and romantic status lines with 1-click share.", badge: "1.7K+ Status", category: "content" },
      { name: "Hindi Status Shayari", slug: "shayari", route: "/shayari", description: "Love, Sad, and 2-Line shayari in Devanagari script and Hinglish.", badge: "हिंदी व Roman", category: "content" },
      { name: "Daily Quotes & Wisdom", slug: "quotes", route: "/quotes", description: "Deep philosophical quotes for daily contemplation and status updates.", badge: "Wisdom", category: "content" },
      { name: "About & Profile Bio", slug: "bios", route: "/bios", description: "Clean one-line bio text for your WhatsApp profile About section.", badge: "Profile About", category: "tool" },
    ],
    aiTools: [
      { name: "AI WhatsApp Status Generator", route: "/whatsapp-status", desc: "Create status lines with live mobile screen preview" },
    ],
    popularTopics: ["Attitude", "Hindi Shayari", "Sad & Heartbreak", "Love", "Morning Quotes", "Motivation", "One Word"],
  },

  // 3. FACEBOOK (4 Tools: Photo Captions, Status, Shayari, Bio)
  facebook: {
    id: "facebook",
    name: "Facebook",
    slug: "facebook",
    route: "/facebook-captions",
    cluster: "social",
    badge: "Community & Family",
    tagline: "Photo Captions, Daily Status & Hindi Shayari",
    description: "Conversational captions that inspire family & friends to comment, celebrate life milestones, vacation albums, and lighthearted status lines.",
    count: "1,600+",
    color: "#1877F2",
    gradient: "from-blue-600 to-indigo-600",
    features: [
      { name: "Facebook Photo Captions", slug: "photos", route: "/captions?platform=facebook", description: "Heartfelt captions for family events, holidays, and milestones.", badge: "1.6K+ Lines", category: "content" },
      { name: "Facebook Status Updates", slug: "status", route: "/whatsapp-status", description: "Meaningful daily thoughts and status updates for friends and family.", badge: "Status", category: "content" },
      { name: "Hindi Shayari for Facebook", slug: "shayari", route: "/shayari", description: "Emotional Dosti, Love, and Yaad shayari for Facebook posts.", badge: "Hindi", category: "content" },
      { name: "Page & Profile Bio", slug: "bios", route: "/bios", description: "Clean About section text for pages and personal profiles.", badge: "Profile Bio", category: "tool" },
    ],
    aiTools: [
      { name: "AI Facebook Caption Generator", route: "/ai-caption-generator?platform=facebook", desc: "Generate family, milestone, and photo captions" },
    ],
    popularTopics: ["Family", "Memories", "Celebration", "Travel", "Friends", "Birthday", "Life Lessons"],
  },

  // 4. X (TWITTER) (4 Tools: One-Liners, Bio, Quotes, 2-Line Shayari)
  x: {
    id: "x",
    name: "X (Twitter)",
    slug: "x",
    route: "/twitter-captions",
    cluster: "professional",
    badge: "Real-Time Viral",
    tagline: "Viral One-Liners, Bio Styler & Deep Quotes",
    description: "Clever statements that fit in single punchy tweets, thought-provoking opinions, and minimalist profile bios.",
    count: "1,900+",
    color: "#000000",
    gradient: "from-zinc-800 to-black",
    features: [
      { name: "X One-Liners & Tweets", slug: "one-liners", route: "/captions?platform=x", description: "Punchy, thought-provoking lines for high bookmarks and retweets.", badge: "1.9K+ Lines", category: "content" },
      { name: "X Handle Bio Styler", slug: "bios", route: "/bios", description: "Clean fonts and rare bio positioning for X handles.", badge: "Bio Styler", category: "tool" },
      { name: "Deep Philosophy Quotes", slug: "quotes", route: "/quotes", description: "Billionaire mindset, stoic philosophy, and sharp wisdom lines.", badge: "Quotes", category: "content" },
      { name: "2-Line Shayari", slug: "shayari", route: "/shayari", description: "Sharp 2-line Urdu and Hindi couplets for high retweets.", badge: "2-Line Couplets", category: "content" },
    ],
    aiTools: [
      { name: "AI Tweet & Thread Generator", route: "/ai-caption-generator?platform=x", desc: "Generate viral tweets, hot takes, and thread hooks" },
    ],
    popularTopics: ["Tech & AI", "Mindset", "Finance", "Crypto", "Sarcasm", "Writing", "Deep Thoughts"],
  },

  // 5. LINKEDIN (3 Tools: Captions, Bio/Headline, Leadership Quotes)
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    slug: "linkedin",
    route: "/linkedin-captions",
    cluster: "professional",
    badge: "Professional",
    tagline: "Thought Leadership, Career Bios & Mindset Quotes",
    description: "Authoritative, insightful, and story-driven post starters for career milestones, transparent founder insights, and professional positioning.",
    count: "1,400+",
    color: "#0A66C2",
    gradient: "from-blue-600 to-sky-500",
    features: [
      { name: "LinkedIn Post Captions", slug: "leadership", route: "/captions?platform=linkedin", description: "Authoritative thought leadership and career story openers.", badge: "1.4K+ Lines", category: "content" },
      { name: "Headline & Summary Styler", slug: "bios", route: "/bios", description: "Clean LinkedIn headline and summary positioning blueprints.", badge: "Executive Bio", category: "tool" },
      { name: "Leadership & Success Quotes", slug: "quotes", route: "/quotes", description: "Discipline, leadership lessons, and success wisdom quotes.", badge: "Leadership", category: "content" },
    ],
    aiTools: [
      { name: "AI LinkedIn Post Generator", route: "/ai-caption-generator?platform=linkedin", desc: "Generate professional insights and thought-leadership posts" },
    ],
    popularTopics: ["Career Growth", "Leadership", "Startups", "Hiring", "Productivity", "Tech Lessons", "Remote Work"],
  },

  // 6. YOUTUBE (3 Tools: Shorts Captions, Channel Bio, Community Quotes)
  youtube: {
    id: "youtube",
    name: "YouTube",
    slug: "youtube",
    route: "/youtube-captions",
    cluster: "social",
    badge: "High CTR",
    tagline: "Shorts Captions, Channel Descriptions & Community Quotes",
    description: "High CTR titles, engaging Shorts openers, channel descriptions, and community discussion starters for YouTube creators.",
    count: "1,800+",
    color: "#FF0000",
    gradient: "from-red-600 to-rose-600",
    features: [
      { name: "Shorts Captions & Titles", slug: "shorts", route: "/captions?platform=youtube", description: "Fast, punchy captions and high-retention titles for vertical video feeds.", badge: "1.8K+ Lines", category: "content" },
      { name: "Channel About & Bio", slug: "bios", route: "/bios", description: "High-converting About section bio descriptions for subscribers.", badge: "Channel Bio", category: "tool" },
      { name: "Community Quotes", slug: "quotes", route: "/quotes", description: "Inspirational discussion quotes and poll text for community tabs.", badge: "Community", category: "content" },
    ],
    aiTools: [
      { name: "AI Shorts Caption Generator", route: "/ai-caption-generator?platform=youtube", desc: "Craft punchy Shorts titles and descriptions" },
    ],
    popularTopics: ["Tech", "Gaming", "Vlog", "Motivation", "Education", "Fitness", "Storytime", "Comedy"],
  },

  // 7. TIKTOK (3 Tools: Viral Captions, Bio, Quotes)
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    slug: "tiktok",
    route: "/tiktok-captions",
    cluster: "social",
    badge: "Viral FYP",
    tagline: "Viral Audio Lines, FYP Captions & Profile Bios",
    description: "Algorithm-friendly captions crafted for massive FYP reach, trending sound hooks, POV one-liners, and aesthetic bio setups.",
    count: "2,200+",
    color: "#00F2FE",
    gradient: "from-cyan-400 to-pink-500",
    features: [
      { name: "TikTok Viral Captions", slug: "viral", route: "/captions?platform=tiktok", description: "Punchy lines optimized for the TikTok FYP algorithm.", badge: "2.2K+ Lines", category: "content" },
      { name: "TikTok Bio Styler", slug: "bios", route: "/bios", description: "Snappy profile bios that convert profile visitors into followers.", badge: "Profile Bio", category: "tool" },
      { name: "Relatable Video Quotes", slug: "quotes", route: "/quotes", description: "Viral relatable quotes and life perspectives for video text overlays.", badge: "Quotes", category: "content" },
    ],
    aiTools: [
      { name: "AI TikTok Caption Generator", route: "/ai-caption-generator?platform=tiktok", desc: "Generate witty, trend-aware TikTok lines" },
    ],
    popularTopics: ["POV", "Relatable", "Funny", "Glow Up", "Storytime", "Fitness", "Dance", "Couples"],
  },

  // 8. THREADS (3 Tools: Captions, Bio, Quotes)
  threads: {
    id: "threads",
    name: "Threads",
    slug: "threads",
    route: "/threads-captions",
    cluster: "professional",
    badge: "Conversational",
    tagline: "Raw Takes, Conversational Bios & Daily Quotes",
    description: "Casual thoughts, honest notes about everyday life, open-ended question starters, and relatable hot takes tailored for Meta Threads.",
    count: "1,100+",
    color: "#000000",
    gradient: "from-zinc-900 to-zinc-700",
    features: [
      { name: "Threads Post Captions", slug: "conversations", route: "/captions?platform=threads", description: "Questions and takes that invite high-engagement discussions.", badge: "1.1K+ Lines", category: "content" },
      { name: "Threads Bio Styler", slug: "bios", route: "/bios", description: "Clean profile bios matching Instagram bio links.", badge: "Profile Bio", category: "tool" },
      { name: "Daily Quotes & Takes", slug: "quotes", route: "/quotes", description: "Relatable perspective quotes on culture, wellness, and work.", badge: "Takes", category: "content" },
    ],
    aiTools: [
      { name: "AI Threads Generator", route: "/ai-caption-generator?platform=threads", desc: "Craft spontaneous, highly conversational Threads posts" },
    ],
    popularTopics: ["Creator Life", "Unpopular Opinions", "Dating", "Work Culture", "Lifestyle", "Casual Thoughts"],
  },

  // 9. PINTEREST (3 Tools: Pin Descriptions, Aesthetic Quotes, Board Bio)
  pinterest: {
    id: "pinterest",
    name: "Pinterest",
    slug: "pinterest",
    route: "/pinterest-captions",
    cluster: "visual",
    badge: "SEO & Visual",
    tagline: "Aesthetic Pin Descriptions & Board Quotes",
    description: "Search-friendly, inspirational descriptions for moodboards, fashion outfits, home decor, DIY craft guides, and aesthetic quotes.",
    count: "950+",
    color: "#BD081C",
    gradient: "from-rose-600 to-red-600",
    features: [
      { name: "Pin Descriptions", slug: "aesthetic", route: "/captions?platform=pinterest", description: "Dreamy, moodboard-ready descriptions that get saved.", badge: "950+ Pins", category: "content" },
      { name: "Aesthetic Quotes Hub", slug: "quotes", route: "/quotes", description: "Inspirational typography quotes for graphic pins and boards.", badge: "Aesthetic Quotes", category: "content" },
      { name: "Board & Profile Bio", slug: "bios", route: "/bios", description: "Aesthetic Pinterest profile and board descriptions.", badge: "Profile Bio", category: "tool" },
    ],
    aiTools: [
      { name: "AI Pin Description Engine", route: "/ai-caption-generator?platform=pinterest", desc: "Generate SEO-optimized pin descriptions and tags" },
    ],
    popularTopics: ["Aesthetic", "Fashion", "Home Decor", "Recipes", "Travel Moodboards", "DIY Crafts", "Wedding"],
  },

  // 10. SNAPCHAT (3 Tools: Streak Captions, Bio, Status Quotes)
  snapchat: {
    id: "snapchat",
    name: "Snapchat",
    slug: "snapchat",
    route: "/snapchat-captions",
    cluster: "visual",
    badge: "Streaks & Snaps",
    tagline: "Streak Lines, Spotlight Hooks & Quick Status",
    description: "Short, quick-fire captions with emoji flair for daily morning and evening streaks, Spotlight short video hooks, and friend hangouts.",
    count: "1,050+",
    color: "#FFFC00",
    gradient: "from-amber-400 to-yellow-500",
    features: [
      { name: "Streak & Snap Captions", slug: "streaks", route: "/captions?platform=snapchat", description: "Fun, effortless lines for morning and night snaps.", badge: "1K+ Snaps", category: "content" },
      { name: "Snap Public Profile Bio", slug: "bios", route: "/bios", description: "Short, aesthetic bio text for public snap profiles.", badge: "Profile Bio", category: "tool" },
      { name: "Quick Status Lines", slug: "status", route: "/whatsapp-status", description: "Punchy one-liners to overlay on daily snap stories.", badge: "Status Lines", category: "content" },
    ],
    aiTools: [
      { name: "AI Snap Caption Generator", route: "/ai-caption-generator?platform=snapchat", desc: "Short, witty snap captions with emoji flair" },
    ],
    popularTopics: ["Streaks", "Friends", "Night Out", "Food", "Selfies", "Weekend Vibes", "Humor"],
  },
};

export interface TopicClusterItem {
  id: string;
  name: string;
  emoji: string;
  description: string;
  captionsSlug: string;
  categorySlug: string;
  popularPlatforms: string[];
}

export const TOPIC_CLUSTERS: TopicClusterItem[] = [
  {
    id: "attitude",
    name: "Attitude & Boss",
    emoji: "👑",
    description: "Bold, confident, and unapologetic lines that assert personality and high self-worth.",
    captionsSlug: "attitude",
    categorySlug: "attitude",
    popularPlatforms: ["instagram", "whatsapp", "facebook", "tiktok"],
  },
  {
    id: "love",
    name: "Love & Romance",
    emoji: "❤️",
    description: "Heartwarming couple captions, sweet anniversary messages, and poetic romantic lines.",
    captionsSlug: "love",
    categorySlug: "love",
    popularPlatforms: ["instagram", "whatsapp", "pinterest", "facebook"],
  },
  {
    id: "gym",
    name: "Gym & Fitness",
    emoji: "💪",
    description: "High-energy workout motivation, discipline mindset quotes, and gym pump captions.",
    captionsSlug: "gym",
    categorySlug: "gym-fitness",
    popularPlatforms: ["instagram", "tiktok", "youtube"],
  },
  {
    id: "travel",
    name: "Travel & Wanderlust",
    emoji: "✈️",
    description: "Scenic photo dumps, mountain solo trips, beach getaways, and adventure quotes.",
    captionsSlug: "travel",
    categorySlug: "travel-wanderlust",
    popularPlatforms: ["instagram", "pinterest", "tiktok", "facebook"],
  },
  {
    id: "aesthetic",
    name: "Aesthetic & Minimal",
    emoji: "✨",
    description: "Subtle, dreamy, golden hour vibes with clean typography and minimal phrasing.",
    captionsSlug: "aesthetic",
    categorySlug: "aesthetic-vibes",
    popularPlatforms: ["instagram", "pinterest", "threads", "tiktok"],
  },
  {
    id: "funny",
    name: "Funny & Sarcastic",
    emoji: "😂",
    description: "Self-deprecating humor, witty one-liners, and relatable captions that spark comments.",
    captionsSlug: "funny",
    categorySlug: "funny-sarcastic",
    popularPlatforms: ["x", "tiktok", "threads", "instagram"],
  },
  {
    id: "motivation",
    name: "Motivation & Success",
    emoji: "🔥",
    description: "Daily grind quotes, billionaire mindset lessons, and relentless consistency wisdom.",
    captionsSlug: "motivation",
    categorySlug: "motivation-success",
    popularPlatforms: ["linkedin", "x", "instagram", "whatsapp"],
  },
  {
    id: "selfie",
    name: "Selfie & Portrait",
    emoji: "📸",
    description: "Flawless lines for golden hour portraits, mirror selfies, and outfit snapshots.",
    captionsSlug: "selfies",
    categorySlug: "selfie-portrait",
    popularPlatforms: ["instagram", "snapchat", "tiktok"],
  },
  {
    id: "fashion",
    name: "Fashion & Outfits",
    emoji: "👗",
    description: "OOTD style notes, streetwear aesthetics, thrift fits, and luxury lookbook lines.",
    captionsSlug: "fashion",
    categorySlug: "fashion-style",
    popularPlatforms: ["instagram", "pinterest", "tiktok"],
  },
  {
    id: "sad",
    name: "Sad & Emotional",
    emoji: "💔",
    description: "Poignant heartbreak thoughts, late-night reflections, and authentic emotional shayari.",
    captionsSlug: "sad",
    categorySlug: "sad-heartbreak",
    popularPlatforms: ["whatsapp", "instagram", "threads"],
  },
];
