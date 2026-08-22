export interface PlatformFeatureItem {
  name: string;
  slug: string;
  route: string;
  description: string;
  badge?: string;
  category?: "ai" | "tool" | "content";
}

export interface PlatformSpecs {
  charLimit: string;
  optimalLength: string;
  hashtagLimit: string;
  bestHours: string;
  hookFormula: string;
}

export interface PlatformQuickLine {
  text: string;
  vibe: string;
}

export interface PlatformGrowthGuide {
  title: string;
  desc: string;
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
  specs: PlatformSpecs;
  quickLines: PlatformQuickLine[];
  growthGuide: PlatformGrowthGuide[];
}

export const PLATFORM_TAXONOMY: Record<string, PlatformDetail> = {
  // 1. INSTAGRAM
  instagram: {
    id: "instagram",
    name: "Instagram",
    slug: "instagram",
    route: "/instagram-captions",
    cluster: "social",
    badge: "Most Popular",
    tagline: "Captions, Hashtags, VIP Bios & Hindi Shayari",
    description: "The complete Instagram creator suite for viral Reels captions, 120-tag hashtag ladders, aesthetic profile bios, attitude quotes, and Hindi shayari.",
    count: "3,500+",
    color: "#E1306C",
    gradient: "from-amber-500 via-rose-500 to-purple-600",
    features: [
      { name: "Instagram Captions Vault", slug: "posts", route: "/captions?platform=instagram", description: "3,500+ aesthetic, savage, and photo dump lines with 1-click copy.", badge: "3.5K+ Lines", category: "content" },
      { name: "Instagram Hashtags Hub", slug: "hashtags", route: "/hashtags/instagram", description: "120+ tiered hashtag ladders with live post volume analytics & 1-click copy.", badge: "120+ Ladders", category: "tool" },
      { name: "Instagram Bio Styler", slug: "bios", route: "/bios", description: "Aesthetic, VIP attitude bios with live profile preview.", badge: "VIP Styler", category: "tool" },
      { name: "Instagram Quotes", slug: "quotes", route: "/quotes", description: "Mindset, aesthetic, and daily motivation quotes for posts and stories.", badge: "Quotes", category: "content" },
      { name: "Instagram Hindi Shayari", slug: "shayari", route: "/shayari", description: "Love, Sad, and 2-Line authentic shayari in Devanagari & Hinglish.", badge: "हिंदी Shayari", category: "content" },
    ],
    aiTools: [
      { name: "AI Instagram Caption Studio", route: "/ai-caption-generator?platform=instagram", desc: "Generate viral Instagram captions with 20+ moods" },
      { name: "AI Hashtag Generator", route: "/ai-hashtag-generator", desc: "Generate 30 tiered hashtags matching the viral ladder" },
      { name: "VIP Bio Generator", route: "/bios", desc: "Generate aesthetic VIP Instagram bios" },
    ],
    popularTopics: ["Attitude", "Love", "Aesthetic", "Gym", "Travel", "Selfie", "Fashion", "Friends", "Sad", "Motivation"],
    specs: {
      charLimit: "Bio: 150 Chars | Caption: 2,200 Chars",
      optimalLength: "70 – 150 Characters (Highest Retention)",
      hashtagLimit: "3 – 5 Niche & Ladder Tags (Reels Algorithm)",
      bestHours: "6:00 PM – 9:00 PM & 12:00 PM – 2:00 PM",
      hookFormula: "First 3 Seconds: Bold Hook + Curiosity Trigger",
    },
    quickLines: [
      { text: "Silent moves, loud results. Playing in a league where there are no competitors. 👑", vibe: "Attitude & Boss" },
      { text: "Living for the quiet moments that make this noisy world feel peaceful. 🌅✨", vibe: "Aesthetic & Sunset" },
      { text: "Discipline is doing what needs to be done, even when you don't feel like doing it. 💪🔥", vibe: "Gym & Mindset" },
      { text: "Collecting sunsets, plane tickets, and stories I'll tell for the rest of my life. ✈️🏔️", vibe: "Travel & Wanderlust" },
    ],
    growthGuide: [
      {
        title: "The 3-Second Hook Rule for Reels",
        desc: "Instagram's recommendation engine measures watch time within the first 3 seconds. Put your most impactful visual statement and text hook right before the '...more' truncation."
      },
      {
        title: "Hashtag Ladder Strategy",
        desc: "Mix 1-2 Mega volume tags (#reels, #viral) with 3-4 ultra-niche tags relevant to your exact scene or emotion. This ensures fast ranking in Explore page topics."
      },
      {
        title: "Comment Velocity & CTAs",
        desc: "End your caption with a specific question ('Drop 1 or 2 below 👇'). Early comment replies within 30 minutes signal high engagement to the algorithm."
      },
    ],
  },

  // 2. TIKTOK
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    slug: "tiktok",
    route: "/tiktok-captions",
    cluster: "social",
    badge: "Viral FYP",
    tagline: "Short FYP Hooks, Hashtag Ladders & Trend Starters",
    description: "Punchy, scroll-stopping hooks and captions engineered to maximize watch time, trigger debates, and push your videos onto the For You Page (FYP).",
    count: "1,200+",
    color: "#000000",
    gradient: "from-cyan-400 via-pink-500 to-zinc-900",
    features: [
      { name: "TikTok FYP Captions", slug: "viral", route: "/captions?platform=tiktok", description: "Short, punchy hooks and viral trend descriptions with 1-click copy.", badge: "1.2K+ Lines", category: "content" },
      { name: "TikTok FYP Hashtags Hub", slug: "hashtags", route: "/hashtags/tiktok", description: "Viral TikTok hashtags and sound trends for FYP algorithm reach.", badge: "FYP Trending", category: "tool" },
      { name: "TikTok Profile Bios", slug: "bios", route: "/bios", description: "One-line bio text with link hooks and humor for high conversions.", badge: "TikTok Bio", category: "tool" },
      { name: "Trend & Music Hooks", slug: "quotes", route: "/quotes", description: "Short audio hooks and aesthetic one-liners for trending sounds.", badge: "Sound Hooks", category: "content" },
    ],
    aiTools: [
      { name: "AI TikTok Caption Generator", route: "/ai-caption-generator?platform=tiktok", desc: "Generate viral TikTok captions and FYP hooks" },
      { name: "AI TikTok Hashtags", route: "/ai-hashtag-generator", desc: "Generate viral TikTok hashtags" },
    ],
    popularTopics: ["FYP Hooks", "Viral Trends", "Humor", "Relatable", "Storytime", "Aesthetic", "Motivation"],
    specs: {
      charLimit: "Bio: 80 Chars | Caption: 4,000 Chars",
      optimalLength: "20 – 60 Characters (Short & Fast)",
      hashtagLimit: "4 – 6 Tags (#fyp, #viral + 3 Topic Tags)",
      bestHours: "7:00 PM – 11:00 PM (Evening FYP Scroll Surge)",
      hookFormula: "Wait till the end / The secret nobody talks about...",
    },
    quickLines: [
      { text: "Proof that you only need 3 seconds to completely change your day ⚡✨", vibe: "Viral Hook" },
      { text: "Nobody talks about this part of the journey, but someone needed to hear it. 💭", vibe: "Storytime" },
      { text: "When you finally realize you don't have to explain your peace to anyone. 😌", vibe: "Relatable & Vibe" },
    ],
    growthGuide: [
      {
        title: "Short Captions with Search Intent",
        desc: "TikTok functions as a modern search engine. Include exact keyword phrases ('how to style oversized shirt' or 'gym split routine') in your caption for SEO discovery."
      },
      {
        title: "Curiosity Loops",
        desc: "Write captions that compel users to re-watch the video (e.g., 'Look at the background on second 4'). High re-watch rates trigger aggressive FYP distribution."
      },
      {
        title: "Audio + Hashtag Synergy",
        desc: "Always align your caption tags with the trending background audio mood to maximize discovery on sound pages."
      },
    ],
  },

  // 3. YOUTUBE
  youtube: {
    id: "youtube",
    name: "YouTube",
    slug: "youtube",
    route: "/youtube-captions",
    cluster: "visual",
    badge: "Shorts & VOD",
    tagline: "High-CTR Titles, Shorts Hooks & Community Posts",
    description: "Search-optimized titles, high-retention Shorts hooks, timestamps, and community post discussions designed to drive clicks and subscriber conversions.",
    count: "1,400+",
    color: "#FF0000",
    gradient: "from-red-600 to-rose-600",
    features: [
      { name: "Shorts Titles & Descriptions", slug: "shorts", route: "/captions?platform=youtube", description: "Clickable Shorts hooks and SEO description text with 1-click copy.", badge: "1.4K+ Lines", category: "content" },
      { name: "YouTube Shorts Hashtags Hub", slug: "hashtags", route: "/hashtags/youtube", description: "Search-indexed hashtags for the Shorts shelf and algorithm boost.", badge: "Shorts Boost", category: "tool" },
      { name: "Channel About & Bio", slug: "bios", route: "/bios", description: "Clear value proposition descriptions for your channel About tab.", badge: "Channel Bio", category: "tool" },
      { name: "Community Post Quotes", slug: "quotes", route: "/quotes", description: "Discussion starters and poll copy to keep subscribers engaged.", badge: "Community", category: "content" },
    ],
    aiTools: [
      { name: "AI YouTube Caption Studio", route: "/ai-caption-generator?platform=youtube", desc: "Generate high-CTR Shorts titles and descriptions" },
      { name: "AI Hashtag Generator", route: "/ai-hashtag-generator", desc: "Generate YouTube search hashtags" },
    ],
    popularTopics: ["Shorts Hooks", "Tutorials", "Motivation", "Gaming", "Tech & AI", "Fitness", "Vlog Titles"],
    specs: {
      charLimit: "Shorts Title: 100 Chars | Description: 5,000 Chars",
      optimalLength: "50 – 70 Characters (No Truncation on Mobile)",
      hashtagLimit: "3 Tags (#shorts + 2 specific keywords)",
      bestHours: "2:00 PM – 5:00 PM (Pre-Evening Watch Surge)",
      hookFormula: "How I [Achieved Result] in [Short Timeframe]",
    },
    quickLines: [
      { text: "The 1 habit that changed everything for me in 2026 (Try this today) 🚀", vibe: "Shorts Hook" },
      { text: "Most people do this completely wrong — here is the exact step-by-step breakdown 👇", vibe: "Tutorial" },
      { text: "Consistency beats talent every single time. Keep showing up. 💯", vibe: "Motivation" },
    ],
    growthGuide: [
      {
        title: "Shorts Shelf Indexing",
        desc: "Always include #Shorts in your title or first line of description. Use clean keyword capitalization to maximize mobile click-through rate."
      },
      {
        title: "Pinned Comment Strategy",
        desc: "Pin a comment asking a specific viewer question or linking to your long-form video to build a subscriber conversion funnel."
      },
      {
        title: "Search Keywords Placement",
        desc: "Place primary keywords in the first 25 words of the description to rank in YouTube and Google search results simultaneously."
      },
    ],
  },

  // 4. WHATSAPP
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
      { name: "WhatsApp Channels & Hashtags", slug: "hashtags", route: "/hashtags/whatsapp", description: "Trending channel topics and keywords to grow WhatsApp subscriber channels.", badge: "Channel Growth", category: "tool" },
      { name: "Hindi Status Shayari", slug: "shayari", route: "/shayari", description: "Love, Sad, and 2-Line shayari in Devanagari script and Hinglish.", badge: "हिंदी व Roman", category: "content" },
      { name: "Daily Quotes & Wisdom", slug: "quotes", route: "/quotes", description: "Deep philosophical quotes for daily contemplation and status updates.", badge: "Wisdom", category: "content" },
      { name: "About & Profile Bio", slug: "bios", route: "/bios", description: "Clean one-line bio text for your WhatsApp profile About section.", badge: "Profile About", category: "tool" },
    ],
    aiTools: [
      { name: "AI WhatsApp Status Generator", route: "/whatsapp-status", desc: "Create status lines with live mobile screen preview" },
    ],
    popularTopics: ["Attitude", "Hindi Shayari", "Sad & Heartbreak", "Love", "Morning Quotes", "Motivation", "One Word"],
    specs: {
      charLimit: "About: 139 Chars | Status Text: 700 Chars",
      optimalLength: "30 – 90 Characters (Clean 2-Line Readability)",
      hashtagLimit: "0 – 2 Tags (Channels Only)",
      bestHours: "7:00 AM – 9:00 AM & 9:00 PM – 11:00 PM",
      hookFormula: "Deep 2-Line Couplet or Direct Punchy Quote",
    },
    quickLines: [
      { text: "शोर करने से पहचान नहीं बनती, काम ऐसा करो कि खामोशी भी अखबारों में छप जाए। 👑", vibe: "Attitude Shayari" },
      { text: "A quiet life with peace of mind is the greatest luxury. 🌿☕", vibe: "Sukoon & Life" },
      { text: "Work in silence until your bank account looks like a phone number. 💼⚡", vibe: "Hustle & Success" },
    ],
    growthGuide: [
      {
        title: "Clean Formatting without Clutter",
        desc: "Use bullet points or single line breaks with minimal emojis (max 1-2). Text with high readability receives 3x more status screenshots and reposts."
      },
      {
        title: "Time-Sensitive Posting",
        desc: "Morning status (7 AM - 9 AM) and night thoughts (9 PM - 11 PM) get peak view completion rates on WhatsApp."
      },
      {
        title: "1-Click Direct Share",
        desc: "Use the direct WhatsApp share button on UniToolkit to post instantly to your status or forward to groups."
      },
    ],
  },

  // 5. FACEBOOK
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
      { name: "Facebook Hashtags Hub", slug: "hashtags", route: "/hashtags/facebook", description: "Group and community reach hashtags for Facebook posts.", badge: "Group Reach", category: "tool" },
      { name: "Facebook Status Updates", slug: "status", route: "/whatsapp-status", description: "Meaningful daily thoughts and status updates for friends and family.", badge: "Status", category: "content" },
      { name: "Hindi Shayari for Facebook", slug: "shayari", route: "/shayari", description: "Emotional Dosti, Love, and Yaad shayari for Facebook posts.", badge: "Hindi", category: "content" },
      { name: "Page & Profile Bio", slug: "bios", route: "/bios", description: "Clean About section text for pages and personal profiles.", badge: "Profile Bio", category: "tool" },
    ],
    aiTools: [
      { name: "AI Facebook Caption Generator", route: "/ai-caption-generator?platform=facebook", desc: "Generate family, milestone, and photo captions" },
    ],
    popularTopics: ["Family & Friends", "Milestones", "Travel Dump", "Hindi Shayari", "Throwback Memories", "Gratitude"],
    specs: {
      charLimit: "Bio: 101 Chars | Post: 63,206 Chars",
      optimalLength: "40 – 80 Characters (Quick Conversational)",
      hashtagLimit: "1 – 3 Broad Community Tags",
      bestHours: "1:00 PM – 4:00 PM (Midday Feed Browsing)",
      hookFormula: "Relatable Personal Story + Family Celebration Hook",
    },
    quickLines: [
      { text: "Family isn't just an important thing. It's everything. Blessed beyond words today. ❤️🏡", vibe: "Family & Love" },
      { text: "Looking back at old memories and realizing how fast time flies. Grateful for this journey. ✨", vibe: "Throwback" },
      { text: "Good food, great company, and stories that will last a lifetime. 🍕🎉", vibe: "Weekend Gathering" },
    ],
    growthGuide: [
      {
        title: "Emotional Relatability",
        desc: "Facebook's feed algorithm heavily favors posts that trigger comments between friends. Share heartfelt stories and ask family opinions."
      },
      {
        title: "Photo Albums with Captions",
        desc: "Add a 1-sentence caption to each photo in an album. Users click through images longer, boosting algorithmic distribution."
      },
      {
        title: "Community Group Engagement",
        desc: "Use community-specific hashtags when sharing in niche Facebook groups for higher organic engagement."
      },
    ],
  },

  // 6. LINKEDIN
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    slug: "linkedin",
    route: "/linkedin-captions",
    cluster: "professional",
    badge: "B2B & Career",
    tagline: "Thought Leadership, Career Milestones & Hiring Hooks",
    description: "Professional copywriting templates, career transition hooks, business mindset breakdowns, and hiring announcements optimized for LinkedIn reach.",
    count: "950+",
    color: "#0A66C2",
    gradient: "from-blue-700 to-cyan-700",
    features: [
      { name: "LinkedIn Posts & Hooks", slug: "leadership", route: "/captions?platform=linkedin", description: "B2B frameworks, career lessons, and executive storytelling with 1-click copy.", badge: "950+ Posts", category: "content" },
      { name: "LinkedIn Hashtags Hub", slug: "hashtags", route: "/hashtags/linkedin", description: "Industry hashtags for professional visibility and B2B reach.", badge: "B2B Reach", category: "tool" },
      { name: "Professional Headline & Bio", slug: "bios", route: "/bios", description: "Clean, high-authority headlines and About sections for career growth.", badge: "Headline Styler", category: "tool" },
      { name: "Leadership & Mindset Quotes", slug: "quotes", route: "/quotes", description: "Executive wisdom, entrepreneurship lessons, and career insights.", badge: "Leadership", category: "content" },
    ],
    aiTools: [
      { name: "AI LinkedIn Post Generator", route: "/ai-caption-generator?platform=linkedin", desc: "Generate viral thought leadership posts and hooks" },
    ],
    popularTopics: ["Career Growth", "Startup Lessons", "Leadership", "Hiring & Talent", "Productivity", "Tech & AI"],
    specs: {
      charLimit: "Headline: 220 Chars | Post: 3,000 Chars",
      optimalLength: "150 – 300 Words (Formatted with Line Breaks)",
      hashtagLimit: "3 – 5 Industry Tags (#leadership, #hiring, #tech)",
      bestHours: "8:00 AM – 10:00 AM & 12:00 PM – 2:00 PM (Tue - Thu)",
      hookFormula: "Contrarian Industry Insight or Personal Failure Lesson",
    },
    quickLines: [
      { text: "The best career move I ever made wasn't a promotion—it was learning when to say no. 💼🚀", vibe: "Career Insight" },
      { text: "Most teams don't have a talent problem. They have a clarity and alignment problem. 💡", vibe: "Leadership" },
      { text: "Consistency in execution beats brilliance in strategy every single time. 📈", vibe: "Startup Mindset" },
    ],
    growthGuide: [
      {
        title: "The 2-Line Dwell Time Hook",
        desc: "LinkedIn's algorithm prioritizes dwell time. Make the first 2 lines thought-provoking so users click '...see more' to expand your post."
      },
      {
        title: "Carousel & PDF Documents",
        desc: "Pair your written post with a 5-slide PDF summary. Document carousels have 3x higher save and share rates on LinkedIn."
      },
      {
        title: "Authoritative Comment Discussions",
        desc: "Respond to every comment within the first 60 minutes with an insightful follow-up question to trigger continuous thread reach."
      },
    ],
  },

  // 7. TWITTER / X
  twitter: {
    id: "twitter",
    name: "Twitter / X",
    slug: "twitter",
    route: "/twitter-captions",
    cluster: "social",
    badge: "Real-Time Trends",
    tagline: "Punchy One-Liners, Thread Hooks & Tech Takes",
    description: "High-CTR tweet hooks, viral thread openers, sharp hot takes, and witty one-liners engineered to maximize retweets and bookmark conversions.",
    count: "1,100+",
    color: "#000000",
    gradient: "from-zinc-800 to-black",
    features: [
      { name: "Twitter Hooks & One-Liners", slug: "one-liners", route: "/captions?platform=twitter", description: "Brevity-first one-liners, tech hot takes, and thread hooks with 1-click copy.", badge: "1.1K+ Lines", category: "content" },
      { name: "Twitter Trends & Hashtags", slug: "hashtags", route: "/hashtags/twitter", description: "Real-time trending topics and hashtags for high-velocity tweet reach.", badge: "Trends Hub", category: "tool" },
      { name: "Twitter Profile Bio", slug: "bios", route: "/bios", description: "Sharp 160-character bios for founders, creators, and developers.", badge: "Twitter Bio", category: "tool" },
      { name: "Philosophy & Mindset Quotes", slug: "quotes", route: "/quotes", description: "Clear, concise mental models and quote snippets.", badge: "Mental Models", category: "content" },
    ],
    aiTools: [
      { name: "AI Tweet Hook Generator", route: "/ai-caption-generator?platform=twitter", desc: "Generate viral tweets and thread openers" },
    ],
    popularTopics: ["One-Liners", "Thread Starters", "Tech & AI", "Hot Takes", "Finance & Crypto", "Mindset"],
    specs: {
      charLimit: "Bio: 160 Chars | Tweet: 280 Chars (Free) / 25K (Premium)",
      optimalLength: "70 – 120 Characters (High Retweet Velocity)",
      hashtagLimit: "1 – 2 Relevant Tags (Avoid Hashtag Stuffing)",
      bestHours: "9:00 AM – 11:00 AM & 6:00 PM – 9:00 PM",
      hookFormula: "Bold Claim + 'Here is the breakdown 🧵'",
    },
    quickLines: [
      { text: "Your network is not your net worth. Your reputation and consistency are. ⚡", vibe: "One-Liner" },
      { text: "I analyzed 50 viral startup launches in 2026. Here are the 5 patterns that matter 🧵👇", vibe: "Thread Hook" },
      { text: "Overthinking is the art of creating problems that weren't even there. Just ship. 🚢", vibe: "Mindset" },
    ],
    growthGuide: [
      {
        title: "Bookmark Optimization",
        desc: "The X algorithm heavily rewards bookmarks. Share actionable frameworks, checklists, or resources that users want to save for later."
      },
      {
        title: "Thread Hook Architecture",
        desc: "Use a bold thesis in tweet 1, deliver value in tweets 2-6, and close with a clear CTA to follow and retweet."
      },
      {
        title: "Fast Reply Engagement",
        desc: "Engage in relevant replies within large accounts in your niche to redirect profile visits to your own timeline."
      },
    ],
  },

  // 8. THREADS
  threads: {
    id: "threads",
    name: "Threads",
    slug: "threads",
    route: "/threads-captions",
    cluster: "social",
    badge: "Conversation Hub",
    tagline: "Casual Thoughts, Relatable Discussions & Hot Takes",
    description: "Authentic, conversational openers and unfiltered creator thoughts designed to spark genuine replies in the Threads recommendation feed.",
    count: "800+",
    color: "#000000",
    gradient: "from-zinc-700 via-zinc-900 to-black",
    features: [
      { name: "Threads Openers & Takes", slug: "conversations", route: "/captions?platform=threads", description: "Casual, relatable discussion starters with 1-click copy.", badge: "800+ Lines", category: "content" },
      { name: "Threads Topic Tags Hub", slug: "hashtags", route: "/hashtags/threads", description: "Active discussion tags and topics for the Threads algorithm.", badge: "Topic Tags", category: "tool" },
      { name: "Threads Bio Styler", slug: "bios", route: "/bios", description: "Minimal, aesthetic bio styling synced with your Instagram identity.", badge: "Threads Bio", category: "tool" },
      { name: "Relatable Quotes & Humor", slug: "quotes", route: "/quotes", description: "Unfiltered daily thoughts and humorous takes.", badge: "Humor & Thoughts", category: "content" },
    ],
    aiTools: [
      { name: "AI Threads Post Generator", route: "/ai-caption-generator?platform=threads", desc: "Generate conversational Threads openers" },
    ],
    popularTopics: ["Conversations", "Relatable Life", "Creator Thoughts", "Unpopular Opinions", "Aesthetic"],
    specs: {
      charLimit: "Bio: Synced with IG (150 Chars) | Post: 500 Chars",
      optimalLength: "50 – 140 Characters (Casual & Authentic)",
      hashtagLimit: "1 Topic Tag (Threads Single Tag System)",
      bestHours: "7:00 PM – 10:00 PM (Late Night Conversational Surge)",
      hookFormula: "Unfiltered Question or Unpopular Opinion",
    },
    quickLines: [
      { text: "Can we all agree that peace of mind is way more attractive than popularity? ☕💭", vibe: "Casual Thought" },
      { text: "Unpopular opinion: You don't need a 5 AM routine to be highly productive. 🥱", vibe: "Hot Take" },
      { text: "Normalize taking breaks without feeling guilty about not working 24/7. ✨", vibe: "Relatable" },
    ],
    growthGuide: [
      {
        title: "Single Topic Tagging",
        desc: "Threads uses single topic tags rather than multiple hashtags. Choose the single most accurate topic tag for algorithm clustering."
      },
      {
        title: "Conversational Tone",
        desc: "Avoid overly polished B2B corporate language. Raw, honest, and relatable conversational posts receive 5x more replies."
      },
      {
        title: "Instagram Cross-Pollination",
        desc: "Share your top-performing Threads posts directly to Instagram Stories to drive cross-platform followers."
      },
    ],
  },

  // 9. PINTEREST
  pinterest: {
    id: "pinterest",
    name: "Pinterest",
    slug: "pinterest",
    route: "/pinterest-captions",
    cluster: "visual",
    badge: "Visual Discovery",
    tagline: "Aesthetic Pin Descriptions, Moodboards & SEO Text",
    description: "Search-friendly pin titles, aesthetic moodboard descriptions, bridal, home decor, outfit, and recipe captions optimized for Pinterest search traffic.",
    count: "900+",
    color: "#BD081C",
    gradient: "from-rose-600 to-red-700",
    features: [
      { name: "Aesthetic Pin Descriptions", slug: "aesthetic", route: "/captions?platform=pinterest", description: "SEO-rich captions for moodboards, fashion, and decor with 1-click copy.", badge: "900+ Pins", category: "content" },
      { name: "Pinterest Hashtags Hub", slug: "hashtags", route: "/hashtags/pinterest", description: "Search tags and keywords for Pinterest visual discovery and boards.", badge: "Pin SEO", category: "tool" },
      { name: "Pinterest Board & Profile Bio", slug: "bios", route: "/bios", description: "Keyword-rich board descriptions and creator profile bios.", badge: "Board Bios", category: "tool" },
      { name: "Aesthetic Quotes & Moodboards", slug: "quotes", route: "/quotes", description: "Minimalist typography quotes and vintage mood text.", badge: "Moodboard", category: "content" },
    ],
    aiTools: [
      { name: "AI Pinterest Description Generator", route: "/ai-caption-generator?platform=pinterest", desc: "Generate search-optimized pin descriptions" },
    ],
    popularTopics: ["Aesthetic Moodboard", "Fashion & Outfits", "Home Decor", "Travel & Places", "Wedding & Bride", "Art & DIY"],
    specs: {
      charLimit: "Title: 100 Chars | Pin Description: 500 Chars",
      optimalLength: "100 – 200 Characters (Keyword-Rich)",
      hashtagLimit: "2 – 5 Broad Search Tags",
      bestHours: "8:00 PM – 11:00 PM & Weekend Mornings",
      hookFormula: "Inspiration Keyword + Practical Aesthetic Tip + Link CTA",
    },
    quickLines: [
      { text: "Neutral aesthetic room decor inspiration with warm ambient lighting and minimalist textures. 🕯️🌿", vibe: "Home Decor" },
      { text: "Effortless Parisian street style outfit ideas for autumn and winter 2026. 🧥☕", vibe: "Fashion Mood" },
      { text: "Quiet moments, vintage film tones, and gentle pastel skies. 🎞️✨", vibe: "Aesthetic & Art" },
    ],
    growthGuide: [
      {
        title: "Visual Search SEO",
        desc: "Pinterest is a visual search engine. Include primary search phrases ('warm minimalist bedroom decor') in the first sentence of your pin description."
      },
      {
        title: "Fresh Pin Velocity",
        desc: "Pin 3-5 unique image variations for each blog post or product link to test different keyword angles."
      },
      {
        title: "Board Categorization",
        desc: "Save pins to specific, well-named boards with complete descriptions rather than generic 'Misc' boards."
      },
    ],
  },

  // 10. SNAPCHAT
  snapchat: {
    id: "snapchat",
    name: "Snapchat",
    slug: "snapchat",
    route: "/snapchat-captions",
    cluster: "messaging",
    badge: "Spotlight & Stories",
    tagline: "Streak Starters, Spotlight Hooks & Selfie Captions",
    description: "Fast, funny selfie one-liners, streak maintenance copy, Spotlight video hooks, and friendship captions ready for instant snapping.",
    count: "850+",
    color: "#FFFC00",
    gradient: "from-amber-400 to-yellow-500",
    features: [
      { name: "Snapchat Streaks & Selfies", slug: "streaks", route: "/captions?platform=snapchat", description: "Creative streak starters, mirror selfie lines, and funny one-liners.", badge: "850+ Snaps", category: "content" },
      { name: "Spotlight Hashtags Hub", slug: "hashtags", route: "/hashtags/snapchat", description: "Trending tags for Snapchat Spotlight algorithmic viral reach.", badge: "Spotlight", category: "tool" },
      { name: "Snap Profile Bio", slug: "bios", route: "/bios", description: "Short, witty one-liners for your public profile bio.", badge: "Snap Bio", category: "tool" },
      { name: "Dosti & Friendship Shayari", slug: "shayari", route: "/shayari", description: "Fun, loyal friendship couplets in Hindi and Hinglish for besties.", badge: "Dosti", category: "content" },
    ],
    aiTools: [
      { name: "AI Snapchat Caption Studio", route: "/ai-caption-generator?platform=snapchat", desc: "Generate streak lines and Spotlight hooks" },
    ],
    popularTopics: ["Streaks & Snaps", "Mirror Selfie", "Best Friends", "Late Night Drives", "Humor & Sarcasm"],
    specs: {
      charLimit: "Bio: 150 Chars | Caption: 250 Chars",
      optimalLength: "15 – 45 Characters (Ultra-Short Visual Overlay)",
      hashtagLimit: "3 – 5 Tags (Spotlight Videos Only)",
      bestHours: "3:00 PM – 6:00 PM & 9:00 PM – 12:00 AM",
      hookFormula: "Quick Emoji Combo + Funny 3-Word Observation",
    },
    quickLines: [
      { text: "Keeping the streak alive one blurry picture at a time 🔥⚡", vibe: "Streak Starter" },
      { text: "Mirror selfies hit different when the lighting actually cooperates 🪞✨", vibe: "Mirror Selfie" },
      { text: "Late night drives, favorite songs, and zero worries. 🚗🌌", vibe: "Late Night Vibe" },
    ],
    growthGuide: [
      {
        title: "Spotlight Video Hooks",
        desc: "Spotlight videos that start with immediate action in frame 1 receive 4x more completions. Keep on-screen text centered and legible."
      },
      {
        title: "Streak Maintenance Engagement",
        desc: "Use interactive questions ('S or R? Send your fit check') to keep friends replying and boosting friendship scores."
      },
      {
        title: "High-Contrast Text Overlays",
        desc: "Place captions over neutral background regions in your snaps so text is immediately readable without squinting."
      },
    ],
  },
};

export const TOPIC_CLUSTERS = [
  { id: "attitude", name: "Royal Attitude", emoji: "🔥", categorySlug: "attitude" },
  { id: "love", name: "Romantic & Love", emoji: "❤️", categorySlug: "love" },
  { id: "gym", name: "Gym & Fitness", emoji: "💪", categorySlug: "gym" },
  { id: "aesthetic", name: "Aesthetic Glow", emoji: "✨", categorySlug: "aesthetic" },
  { id: "travel", name: "Travel & Wanderlust", emoji: "✈️", categorySlug: "travel" },
  { id: "selfie", name: "Mirror Selfie & DP", emoji: "🪞", categorySlug: "selfie" },
  { id: "motivation", name: "Boss Motivation", emoji: "⚡", categorySlug: "motivation" },
  { id: "friends", name: "Dosti & Friends", emoji: "👥", categorySlug: "friends" },
  { id: "sad", name: "Sad Sukoon & Yaad", emoji: "🥀", categorySlug: "sad" },
  { id: "sunset", name: "Golden Hour & Sunset", emoji: "🌅", categorySlug: "sunset" },
  { id: "birthday", name: "Birthday Celebration", emoji: "🎂", categorySlug: "birthday" },
  { id: "fashion", name: "Fashion & Outfit Check", emoji: "👗", categorySlug: "fashion" },
];

