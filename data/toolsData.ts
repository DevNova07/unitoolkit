// =============================================================
// UniToolkit — 5 Core Creator Utility Tools Dataset
// Exact 5 Tools specified in Master 300 Architecture
// =============================================================

export interface ToolBlueprint {
  slug: string;
  category: "hashtag" | "font" | "bio" | "utility";
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  badge: string;
  subheading: string;
  placeholder: string;
  faqs: { question: string; answer: string }[];
}

export const TOOLS_LIST: ToolBlueprint[] = [
  {
    slug: "hashtag-generator",
    category: "hashtag",
    title: "Hashtag Generator for Social Media",
    metaTitle: "Hashtag Generator — Free Trending & Viral Hashtags (2026) | UniToolkit",
    metaDescription: "Generate balanced High, Medium, and Low competition hashtags for Instagram, TikTok, and YouTube with 1-click copy.",
    primaryKeyword: "hashtag generator",
    badge: "#️⃣ Hashtags",
    subheading: "Find high-converting, trending hashtags customized for your niche and content topic.",
    placeholder: "e.g. fitness motivation, travel photography, coffee aesthetic",
    faqs: [
      { question: "How many hashtags should I use on Instagram?", answer: "Instagram recommends 5-15 hyper-relevant niche hashtags for maximum explore visibility." }
    ],
  },
  {
    slug: "fancy-font-generator",
    category: "font",
    title: "Fancy Font Generator & Text Styler",
    metaTitle: "Fancy Font Generator — Aesthetic Fonts for Instagram & Bios | UniToolkit",
    metaDescription: "Convert plain text into aesthetic, cursive, bold, and stylish unicode fonts ready to copy-paste into Instagram bio and captions.",
    primaryKeyword: "fancy font generator",
    badge: "✨ Fancy Fonts",
    subheading: "Generate 50+ aesthetic Unicode fonts for your Instagram bio, TikTok profile, and tweets.",
    placeholder: "Type your text here to style...",
    faqs: [
      { question: "Do these fonts work on all devices?", answer: "Yes! These are standard Unicode characters supported by iOS, Android, and all web browsers." }
    ],
  },
  {
    slug: "username-generator",
    category: "bio",
    title: "Aesthetic Username Generator",
    metaTitle: "Aesthetic Username Generator for Instagram & TikTok | UniToolkit",
    metaDescription: "Generate rare, aesthetic, cool, and VIP usernames for Instagram, TikTok, and gaming profiles.",
    primaryKeyword: "username generator",
    badge: "👤 Usernames",
    subheading: "Find unique, catchy, and aesthetic handle names for Instagram, TikTok, and YouTube.",
    placeholder: "e.g. alex, aesthetic, shadow, wanderer",
    faqs: [
      { question: "Are these usernames available?", answer: "Our generator combines rare words and aesthetics to give you high-availability handle ideas." }
    ],
  },
  {
    slug: "reel-hook-generator",
    category: "utility",
    title: "Viral Reel Hook Generator",
    metaTitle: "Viral Reel Hook Generator — Stop the Scroll | UniToolkit",
    metaDescription: "Generate 3-second viral video hooks and scroll-stopping openers for Instagram Reels, TikTok, and YouTube Shorts.",
    primaryKeyword: "reel hook generator",
    badge: "⚡ Reel Hooks",
    subheading: "Generate high-retention 3-second video hooks engineered to stop users from scrolling.",
    placeholder: "e.g. 5 habits that changed my productivity",
    faqs: [
      { question: "Why are hooks important?", answer: "The first 3 seconds determine 80% of video retention and algorithm distribution." }
    ],
  },
  {
    slug: "text-generator",
    category: "utility",
    title: "Free Text Generator & Caption Styler",
    metaTitle: "Free Text Generator & Caption Styler | UniToolkit",
    metaDescription: "Generate and style text with custom line breaks, symbols, and formatting for social media creators.",
    primaryKeyword: "text generator",
    badge: "📝 Text Styler",
    subheading: "Format social media text with clean line breaks, aesthetic bullet points, and emoji decorations.",
    placeholder: "e.g. quote about discipline and success",
    faqs: [
      { question: "How does the Text Generator work?", answer: "Enter your draft text and choose formatting options to clean up line breaks and add style instantly." }
    ],
  },
];

export function getToolBySlug(slug: string): ToolBlueprint | undefined {
  return TOOLS_LIST.find((tool) => tool.slug === slug);
}
