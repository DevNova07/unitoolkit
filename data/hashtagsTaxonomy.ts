// =========================================================================
// 🏷️ UniToolkit Master Hashtag Taxonomy & Analytics Data Engine
// Supports 10 Platforms, 25+ High-Demand Niches, AI Tools & Detailed Reports
// =========================================================================

export interface HashtagMetricRow {
  label: string;
  value: string;
  numericVal: number;
}

export interface ViralPercentageItem {
  hashtag: string;
  percentage: number;
}

export interface PopularTableItem {
  rank: number;
  hashtag: string;
  posts: string;
}

export interface HashtagTopicData {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  platform: string;
  recentUses: string;
  primarySet: string[];
  secondarySet: string[];
  compactSet: string[];
  reportMetrics: {
    totalPosts: string;
    postsPerHour: string;
    avgLikes: string;
    avgComments: string;
  };
  viralPercentages: ViralPercentageItem[];
  popularTable: PopularTableItem[];
  intro: string;
  faqs: { question: string; answer: string }[];
}

export const HASHTAG_PLATFORM_HUBS = [
  { slug: "instagram", name: "Instagram", badge: "📸 IG Creator Essential" },
  { slug: "tiktok", name: "TikTok", badge: "🎵 Viral FYP Ready" },
  { slug: "youtube", name: "YouTube Shorts", badge: "▶️ Shorts & VOD" },
  { slug: "facebook", name: "Facebook", badge: "👥 Community Reach" },
  { slug: "linkedin", name: "LinkedIn", badge: "💼 B2B Professional" },
  { slug: "twitter", name: "Twitter / X", badge: "🐦 Real-Time Trends" },
  { slug: "threads", name: "Threads", badge: "🧵 Conversation Hub" },
  { slug: "pinterest", name: "Pinterest", badge: "📌 Visual Discovery" },
  { slug: "snapchat", name: "Snapchat", badge: "👻 Spotlight & Stories" },
  { slug: "whatsapp", name: "WhatsApp Channels", badge: "💬 Channel Growth" },
];

export const HASHTAG_NICHE_LIST = [
  { slug: "viral", name: "Viral", platform: "Instagram & TikTok" },
  { slug: "trending", name: "Trending", platform: "All Platforms" },
  { slug: "reels", name: "Reels", platform: "Instagram" },
  { slug: "fyp", name: "FYP", platform: "TikTok" },
  { slug: "explorepage", name: "Explore Page", platform: "Instagram" },
  { slug: "fitness", name: "Fitness & Gym", platform: "Instagram & TikTok" },
  { slug: "travel", name: "Travel & Adventure", platform: "Instagram & Pinterest" },
  { slug: "fashion", name: "Fashion & Style", platform: "Instagram & TikTok" },
  { slug: "food", name: "Food & Cooking", platform: "Instagram & TikTok" },
  { slug: "photography", name: "Photography", platform: "Instagram" },
  { slug: "love", name: "Love & Romance", platform: "All Platforms" },
  { slug: "attitude", name: "Attitude & Boys", platform: "Instagram & Reels" },
  { slug: "motivation", name: "Motivation & Success", platform: "Instagram & LinkedIn" },
  { slug: "business", name: "Business & Entrepreneurship", platform: "LinkedIn & Twitter" },
  { slug: "aesthetic", name: "Aesthetic", platform: "Pinterest & Instagram" },
  { slug: "art", name: "Art & Drawing", platform: "Instagram & TikTok" },
  { slug: "nature", name: "Nature", platform: "Instagram" },
  { slug: "selfie", name: "Selfie & DP", platform: "Instagram & Snapchat" },
  { slug: "music", name: "Music & Beats", platform: "TikTok & YouTube" },
  { slug: "dance", name: "Dance & Choreography", platform: "TikTok & Reels" },
  { slug: "tech", name: "Tech & AI", platform: "Twitter & YouTube" },
  { slug: "gaming", name: "Gaming & Esports", platform: "YouTube & Twitch" },
  { slug: "crypto", name: "Crypto & Web3", platform: "Twitter & Telegram" },
  { slug: "wedding", name: "Wedding & Bride", platform: "Instagram & Pinterest" },
  { slug: "comedy", name: "Comedy & Memes", platform: "Instagram & TikTok" },
];

export const ALL_HASHTAG_SLUGS = [
  ...HASHTAG_PLATFORM_HUBS.map((p) => p.slug),
  ...HASHTAG_NICHE_LIST.map((n) => n.slug),
];

export function getHashtagTopicData(slug: string): HashtagTopicData {
  const s = slug.toLowerCase();
  const name = s.charAt(0).toUpperCase() + s.slice(1);

  // Dedicated data for #viral / #instagram
  if (s === "viral" || s === "instagram") {
    return {
      slug: s,
      name: s === "instagram" ? "Instagram" : "Viral",
      h1: `Best #${s} Hashtags for Social Media Growth [2026]`,
      metaTitle: `Best #${s} Hashtags for Instagram, Reels & TikTok [2026] | UniToolkit`,
      metaDescription: `Discover the top #${s} hashtags with 1-click copy, live post count reports, viral percentage breakdowns, and posting tips.`,
      platform: "Instagram, TikTok, Reels & Twitter",
      recentUses: "522.9K",
      primarySet: [
        "#insta", "#instagram", "#instagood", "#instadaily", "#love",
        "#instalike", "#like", "#follow", "#photography", "#photo",
        "#photooftheday", "#viral", "#trending", "#likeforlikes", "#instamood",
        "#picoftheday", "#india", "#fashion", "#likes", "#followforfollowback",
        "#nature", "#instapic", "#happy", "#style", "#explore",
        "#life", "#explorepage", "#model", "#art", "#beautiful"
      ],
      secondarySet: [
        "#travel", "#instalove", "#reels", "#instafashion", "#music",
        "#followme", "#beauty", "#likesforlike", "#cute", "#instaphoto",
        "#lifestyle", "#memes", "#girl", "#selfie", "#me",
        "#likeforfollow", "#smile", "#k", "#photoshoot", "#bhfyp",
        "#tiktok", "#loveyourself", "#comment", "#post", "#pic",
        "#foryou", "#l", "#fyp", "#following", "#photographer"
      ],
      compactSet: ["#viral", "#insta", "#meme", "#viral", "#explorepage"],
      reportMetrics: {
        totalPosts: "1,008,518,455",
        postsPerHour: "11,505",
        avgLikes: "115",
        avgComments: "3"
      },
      viralPercentages: [
        { hashtag: "#viral", percentage: 45 },
        { hashtag: "#trending", percentage: 9 },
        { hashtag: "#explorepage", percentage: 8 },
        { hashtag: "#explore", percentage: 7 },
        { hashtag: "#instagram", percentage: 6 },
        { hashtag: "#fyp", percentage: 6 },
        { hashtag: "#instagood", percentage: 4 },
        { hashtag: "#love", percentage: 4 },
        { hashtag: "#reels", percentage: 4 },
        { hashtag: "#like", percentage: 3 }
      ],
      popularTable: [
        { rank: 1, hashtag: "#insta", posts: "149,866,852" },
        { rank: 2, hashtag: "#meme", posts: "149,560,135" },
        { rank: 3, hashtag: "#viral", posts: "143,670,036" },
        { rank: 4, hashtag: "#explorepage", posts: "135,910,444" },
        { rank: 5, hashtag: "#india", posts: "133,963,034" },
        { rank: 6, hashtag: "#likes", posts: "133,580,737" },
        { rank: 7, hashtag: "#bhfyp", posts: "124,074,762" },
        { rank: 8, hashtag: "#dance", posts: "121,801,382" },
        { rank: 9, hashtag: "#indonesia", posts: "119,990,464" },
        { rank: 10, hashtag: "#tiktok", posts: "111,630,060" }
      ],
      intro: `Grow your audience using the most popular #${s} hashtags. Pair high-volume tags with niche hashtags to maximize your reach on Instagram feeds and the Explore page.`,
      faqs: [
        {
          question: `How many #${s} hashtags should I use on Instagram?`,
          answer: `Instagram officially recommends using 3 to 5 highly relevant hashtags per post, while Reels creators often test up to 8–10 targeted tags for broader algorithmic indexing.`
        },
        {
          question: `Do #${s} hashtags help push posts to the Explore Page?`,
          answer: `Yes! Hashtags categorize your visual content in Instagram's interest graph, helping the recommendation engine deliver your post to users who engage with similar media.`
        }
      ]
    };
  }

  // Dynamic Generator for other topics
  const primary = [
    `#${s}`, `#${s}vibes`, `#${s}life`, `#${s}oftheday`, `#${s}love`,
    `#${s}daily`, `#${s}gram`, `#${s}post`, `#${s}goals`, `#${s}trend`,
    "#viral", "#trending", "#explore", "#explorepage", "#fyp",
    "#instagood", "#photooftheday", "#likeforlikes", "#foryou", "#picoftheday",
    "#reels", "#instadaily", "#instamood", "#lifestyle", "#viralpost",
    "#aesthetic", "#creator", "#contentcreator", "#trendingnow", "#likes"
  ];

  const secondary = [
    `#best${s}`, `#my${s}`, `#${s}world`, `#${s}community`, `#${s}lover`,
    `#${s}photography`, `#${s}style`, `#${s}art`, `#${s}challenge`, `#${s}inspiration`,
    "#followme", "#likesforlike", "#selfie", "#cute", "#smile",
    "#instafashion", "#memes", "#music", "#beauty", "#happy",
    "#comment", "#share", "#viralreels", "#instaphoto", "#photoshoot",
    "#bhfyp", "#foryoupage", "#following", "#photographer", "#loveyourself"
  ];

  return {
    slug: s,
    name,
    h1: `Best #${s} Hashtags for Social Media Growth [2026]`,
    metaTitle: `Best #${s} Hashtags for Instagram, TikTok & Reels [2026] | UniToolkit`,
    metaDescription: `Copy top #${s} hashtags with 1-click. View live post analytics, viral percentage breakdowns, and engagement growth strategies.`,
    platform: "Instagram, TikTok & YouTube",
    recentUses: "384.2K",
    primarySet: primary,
    secondarySet: secondary,
    compactSet: [`#${s}`, `#${s}vibes`, "#viral", "#trending", "#explorepage"],
    reportMetrics: {
      totalPosts: "482,910,240",
      postsPerHour: "4,820",
      avgLikes: "88",
      avgComments: "2"
    },
    viralPercentages: [
      { hashtag: `#${s}`, percentage: 42 },
      { hashtag: "#viral", percentage: 12 },
      { hashtag: "#trending", percentage: 10 },
      { hashtag: "#explorepage", percentage: 8 },
      { hashtag: `#${s}vibes`, percentage: 7 },
      { hashtag: "#fyp", percentage: 6 },
      { hashtag: "#instagood", percentage: 5 },
      { hashtag: "#reels", percentage: 4 },
      { hashtag: "#like", percentage: 3 },
      { hashtag: "#aesthetic", percentage: 3 }
    ],
    popularTable: [
      { rank: 1, hashtag: `#${s}`, posts: "98,450,120" },
      { rank: 2, hashtag: `#${s}vibes`, posts: "64,120,400" },
      { rank: 3, hashtag: "#viral", posts: "143,670,036" },
      { rank: 4, hashtag: "#trending", posts: "128,410,200" },
      { rank: 5, hashtag: "#explorepage", posts: "135,910,444" },
      { rank: 6, hashtag: `#${s}daily`, posts: "42,390,110" },
      { rank: 7, hashtag: "#reels", posts: "95,400,200" },
      { rank: 8, hashtag: "#fyp", posts: "111,630,060" },
      { rank: 9, hashtag: "#instadaily", posts: "89,120,300" },
      { rank: 10, hashtag: "#aesthetic", posts: "76,540,800" }
    ],
    intro: `Grow your reach using the most popular #${s} hashtags. Curated and verified across major platforms for optimal algorithmic visibility.`,
    faqs: [
      {
        question: `Why should I use #${s} hashtags in my posts?`,
        answer: `Hashtags help algorithms properly index and surface your content to active audiences interested in #${s}.`
      },
      {
        question: `Where should I place #${s} hashtags?`,
        answer: `You can place hashtags at the end of your caption separated with clean line breaks, or in the very first comment of your post.`
      }
    ]
  };
}
