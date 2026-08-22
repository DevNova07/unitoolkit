export type PlatformType =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "linkedin"
  | "x"
  | "threads"
  | "pinterest"
  | "snapchat"
  | "whatsapp";

export type CategoryType =
  | "love"
  | "attitude"
  | "funny"
  | "motivation"
  | "travel"
  | "birthday"
  | "friendship"
  | "gym"
  | "selfie"
  | "fashion"
  | "life"
  | "success"
  | "food"
  | "nature"
  | "family"
  | "romantic"
  | "business"
  | "confidence"
  | "coffee"
  | "traditional"
  | "cars"
  | "genz"
  | "fitness"
  | "festival"
  | "boys"
  | "girls"
  | "mirror-selfie"
  | "photo-dump"
  | "golden-hour"
  | "one-word"
  | "sister"
  | "wedding"
  | "college"
  | "pets"
  | "foodie"
  | "black-outfit"
  | "brother"
  | "parents"
  | "bike"
  | "smile"
  | "morning"
  | "sad"
  | "self-love"
  | "anniversary"
  | "graduation"
  | "career"
  | "monsoon"
  | "single"
  | "diwali"
  | "holi"
  | "eid"
  | "raksha-bandhan"
  | "navratri"
  | "new-year"
  | "valentines"
  | "bollywood-vibes"
  | "saree-traditional"
  | "beach-vibes"
  | "bike-rider"
  | "car-enthusiast"
  | "night-owl"
  | "morning-coffee"
  | "chai-lover"
  | "brother-sister"
  | "mehendi-sangeet"
  | "alone-sad"
  | "college-life"
  | "foodie-cravings"
  | "gaming-pubg"
  | (string & {});

export type StyleType =
  | "aesthetic"
  | "viral"
  | "professional"
  | "funny"
  | "minimal"
  | "savage"
  | "romantic"
  | "inspirational"
  | "emotional"
  | "casual";

export type ToneType =
  | "confident"
  | "friendly"
  | "funny"
  | "emotional"
  | "bold"
  | "professional"
  | "chill";

export type LengthType = "short" | "medium" | "long";

export type LanguageType = "en" | "hi" | "hinglish" | "es" | "fr" | "pt" | "pa" | "mr" | "bn" | "ta" | "te";

export interface Caption {
  id: string;
  text: string;
  category: CategoryType;
  subcategory?: string;
  platform: PlatformType | "all";
  language: LanguageType;
  style: StyleType;
  tone: ToneType;
  length: LengthType;
  hashtags?: string[];
  likes?: number;
  featured?: boolean;
}

export interface CategoryInfo {
  id: CategoryType;
  name: string;
  slug: string;
  description: string;
  count: string;
  iconName: string;
  accentColor: string;
  subcategories: string[];
}

export interface PlatformInfo {
  id: PlatformType;
  name: string;
  slug: string;
  path: string;
  badge: string;
  description: string;
  iconName: string;
  count: string;
  color: string;
  subcategories: { name: string; slug: string; desc: string }[];
}

export interface GeneratorOptions {
  prompt: string;
  platform: PlatformType;
  style: StyleType;
  tone: ToneType;
  length: LengthType;
  language: LanguageType;
  count: number;
  includeHashtags?: boolean;
  includeEmojis?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}
