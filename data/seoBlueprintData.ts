// =============================================================
// UniToolkit — Cleaned 300-Page SEO Blueprint Dataset
// Duplicates removed | Cannibalization fixed | Zero-volume cuts
// =============================================================

export interface SeoBlueprintPage {
  slug: string;
  cluster: "ai-caption" | "ai-bio" | "ai-status" | "ai-shayari" | "ai-quote" | "instagram" | "whatsapp" | "shayari" | "bio" | "quotes" | "tool";
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  priority: "High" | "Medium" | "Low";
  badge: string;
  subheading: string;
  presetPrompt?: string;
  categoryFilter?: string;
  sampleItems: string[];
  faqs: { question: string; answer: string }[];
}

// -------------------------------------------------------------
// 1. 🤖 AI GENERATOR CLUSTER (20 Pages)
// -------------------------------------------------------------
export const AI_CAPTION_SUBPAGES: SeoBlueprintPage[] = [
  {
    slug: "instagram",
    cluster: "ai-caption",
    title: "Instagram AI Caption Generator (Viral Reels & Posts)",
    metaTitle: "Instagram AI Caption Generator — 1-Click Viral Reels & Post Captions",
    metaDescription: "Generate aesthetic, catchy, and viral Instagram captions with relevant hashtags in seconds using free Gemini AI.",
    primaryKeyword: "instagram ai caption generator",
    secondaryKeywords: ["ai caption generator for instagram", "instagram caption writer ai"],
    priority: "High",
    badge: "📸 Instagram AI",
    subheading: "Create engagement-driving captions with hashtags tailored specifically for Instagram posts and carousels.",
    presetPrompt: "viral aesthetic instagram caption with hashtags for lifestyle photo",
    sampleItems: [
      "Golden hours & quiet powers ✨ Living softly in a fast world.\n\n#SoftEra #AestheticVibes #GoldenHour #InstagramReels",
      "Not waiting for the weekend to live my best life ☕🌿\n\n#DailyDump #AestheticLife #WeekendMood",
    ],
    faqs: [
      { question: "How does the Instagram AI Caption Generator work?", answer: "Enter your photo vibe, choose your tone, and our AI writes tailored captions with viral hashtags instantly." },
      { question: "Can I generate captions with hashtags?", answer: "Yes, every output includes matching curated hashtags." }
    ],
  },
  {
    slug: "tiktok",
    cluster: "ai-caption",
    title: "TikTok AI Caption Generator (Hook & FYP Trends)",
    metaTitle: "TikTok AI Caption Generator — Viral FYP Hooks & Captions (2026)",
    metaDescription: "Generate viral TikTok captions, punchy 1-line hooks, and trending hashtags to boost your video onto the FYP.",
    primaryKeyword: "tiktok ai caption generator",
    secondaryKeywords: ["tiktok caption writer", "fyp caption generator ai"],
    priority: "High",
    badge: "🎵 TikTok AI",
    subheading: "High-retention hooks and viral FYP hashtags designed to stop users from scrolling past your video.",
    presetPrompt: "viral tiktok hook and caption for comedy and lifestyle video",
    sampleItems: [
      "Wait for the plot twist at the end 💀😭 tell me you relate!\n\n#FYP #ViralTikTok #Storytime #Relatable",
      "I was today years old when I figured this out... 🤯\n\n#LearnOnTikTok #Trending #ViralReels",
    ],
    faqs: [
      { question: "Are these optimized for the FYP algorithm?", answer: "Yes, generated captions use hook psychology and trending tags." }
    ],
  },
  {
    slug: "youtube",
    cluster: "ai-caption",
    title: "YouTube Shorts & Video Caption Generator AI",
    metaTitle: "YouTube AI Caption Generator — High CTR Video Descriptions & Shorts",
    metaDescription: "Generate high-CTR YouTube descriptions, Shorts captions, and searchable SEO tags with free AI.",
    primaryKeyword: "youtube ai caption generator",
    secondaryKeywords: ["youtube shorts caption generator", "youtube description ai"],
    priority: "High",
    badge: "▶️ YouTube AI",
    subheading: "Search-optimized captions and engaging description hooks for your long videos and YouTube Shorts.",
    presetPrompt: "engaging youtube shorts description and title hook",
    sampleItems: [
      "Did you know this crazy secret? Watch till the end! ⚡ Drop your thoughts in the comments 👇\n\n#Shorts #YouTubeShorts #Trending",
    ],
    faqs: [
      { question: "Does this generate YouTube Shorts hashtags?", answer: "Yes, includes relevant YouTube Shorts tags." }
    ],
  },
  {
    slug: "reels",
    cluster: "ai-caption",
    title: "AI Reel Caption Generator (Viral Instagram Hooks)",
    metaTitle: "AI Reel Caption Generator — Catchy Audio Hooks & Viral Hashtags",
    metaDescription: "Generate irresistible hooks and viral captions for Instagram Reels. Maximise saves, shares, and watch time.",
    primaryKeyword: "ai reel caption generator",
    secondaryKeywords: ["reels caption ai", "instagram reels caption generator"],
    priority: "High",
    badge: "🎬 Reels AI",
    subheading: "Stop-the-scroll hooks, aesthetic typography, and viral hashtags tailored for short-form reel video.",
    presetPrompt: "viral instagram reel hook and aesthetic caption",
    sampleItems: [
      "Read this before you scroll 🤫 The one habit that changed everything in 2026.\n\nSave this for later 📌\n#ReelsViral #ReelsInstagram #Mindset",
    ],
    faqs: [
      { question: "How do Reel captions increase reach?", answer: "Compelling captions encourage users to pause and read, increasing reel watch time and shares." }
    ],
  },
];

export const AI_BIO_SUBPAGES: SeoBlueprintPage[] = [
  {
    slug: "instagram",
    cluster: "ai-bio",
    title: "Instagram AI Bio Generator (Aesthetic & VIP Bios)",
    metaTitle: "Instagram AI Bio Generator — 1-Click Aesthetic & VIP Bios",
    metaDescription: "Create stylish, aesthetic, and high-converting Instagram bios with line breaks and custom emojis.",
    primaryKeyword: "instagram ai bio generator",
    secondaryKeywords: ["ai bio generator for instagram", "instagram bio writer ai"],
    priority: "High",
    badge: "📸 Insta Bio AI",
    subheading: "Generate formatted multi-line bios with clean emojis, niche authority, and link-in-bio call to actions.",
    presetPrompt: "aesthetic instagram bio with clean emojis and line breaks",
    sampleItems: [
      "✨ Living softly • Creating boldly\n🌿 Coffee & quiet moments\n📍 Mumbai\n👇 Explore my work:",
    ],
    faqs: [
      { question: "Do these bios fit the 150 character limit?", answer: "Yes, all bios are strictly optimized under Instagram's 150-character limit." }
    ],
  },
  {
    slug: "linkedin",
    cluster: "ai-bio",
    title: "LinkedIn AI Bio & Summary Generator",
    metaTitle: "LinkedIn AI Bio Generator — Professional Summary & Headline Creator",
    metaDescription: "Craft high-authority LinkedIn headlines and 'About' summaries that attract recruiters and clients with AI.",
    primaryKeyword: "linkedin ai bio generator",
    secondaryKeywords: ["linkedin summary generator ai", "professional bio generator"],
    priority: "High",
    badge: "💼 LinkedIn AI",
    subheading: "Authoritative career summaries, value propositions, and recruiter-attracting headlines.",
    presetPrompt: "professional linkedin summary highlighting product leadership and tech growth",
    sampleItems: [
      "🚀 Product Leader | Scaling AI & Web Platforms to 10M+ Users | Passionate about UX & Engineering Leverage.",
    ],
    faqs: [
      { question: "Can I use this for LinkedIn About section?", answer: "Yes, it creates both 1-line headlines and 3-paragraph summary bios." }
    ],
  },
  {
    slug: "professional",
    cluster: "ai-bio",
    title: "Professional Bio Generator AI (Portfolio & Executive)",
    metaTitle: "Professional Bio Generator AI — Executive & Creator Bios",
    metaDescription: "Generate polished executive bios for speaker profiles, portfolio websites, and resumes.",
    primaryKeyword: "professional bio generator",
    secondaryKeywords: ["executive bio writer", "portfolio bio generator ai"],
    priority: "High",
    badge: "👔 Professional AI",
    subheading: "High-impact speaker intros, portfolio bios, and founder overviews crafted in third or first person.",
    presetPrompt: "executive bio for tech founder and speaker",
    sampleItems: [
      "Founder & Tech Architect with 8+ years building high-growth digital ecosystems. Featured in top tech publications.",
    ],
    faqs: [
      { question: "Is this suitable for company websites?", answer: "Yes, ideal for team pages and executive portfolios." }
    ],
  },
];

export const AI_STATUS_SUBPAGES: SeoBlueprintPage[] = [
  {
    slug: "whatsapp",
    cluster: "ai-status",
    title: "WhatsApp AI Status Generator (1-Click Share)",
    metaTitle: "WhatsApp AI Status Generator — Viral Quotes & 1-Click Share",
    metaDescription: "Generate emotional, attitude, and motivational status lines with 1-click WhatsApp share button.",
    primaryKeyword: "whatsapp ai status generator",
    secondaryKeywords: ["ai status generator for whatsapp", "whatsapp status writer ai"],
    priority: "High",
    badge: "💬 WhatsApp AI",
    subheading: "Instant 2-line and short status quotes formatted with emojis and direct WhatsApp share functionality.",
    presetPrompt: "short attitude whatsapp status with emojis",
    sampleItems: [
      "Silent moves, loud results 🦁 Own your journey without apologies 👑",
    ],
    faqs: [
      { question: "Can I share directly to WhatsApp?", answer: "Yes, 1-click WhatsApp button opens status share immediately." }
    ],
  },
  {
    slug: "hindi",
    cluster: "ai-status",
    title: "Hindi AI Status Generator (शुद्ध हिंदी व हिंग्लिश)",
    metaTitle: "Hindi AI Status Generator — शुद्ध हिंदी व हिंग्लिश स्टेटस क्रिएटर",
    metaDescription: "Generate authentic Hindi Devanagari and Hinglish status quotes for Attitude, Love, and Sukoon.",
    primaryKeyword: "hindi ai status generator",
    secondaryKeywords: ["hindi status generator", "devanagari status ai"],
    priority: "High",
    badge: "🇮🇳 Hindi Status AI",
    subheading: "Authentic Devanagari script and cool Hinglish lines generated with native cultural flair.",
    presetPrompt: "hindi attitude status in devanagari script",
    sampleItems: [
      "खामोशी से काम करो, कामयाबी खुद तुम्हारा नाम बयां करेगी 👑✨",
    ],
    faqs: [
      { question: "Are Hindi fonts and grammar accurate?", answer: "Yes, outputs are strictly verified for authentic Hindi poetry and grammar." }
    ],
  },
];

export const AI_SHAYARI_SUBPAGES: SeoBlueprintPage[] = [
  {
    slug: "love",
    cluster: "ai-shayari",
    title: "AI Love Shayari Generator (प्यार भरी शायरी)",
    metaTitle: "AI Love Shayari Generator — Romantic Hindi & Hinglish Poetry",
    metaDescription: "Generate heartfelt romantic love shayari and pehla ishq couplets in pure Hindi with AI.",
    primaryKeyword: "ai love shayari generator",
    secondaryKeywords: ["love shayari generator", "romantic shayari ai"],
    priority: "High",
    badge: "❤️ Love Shayari AI",
    subheading: "Express tender romantic feelings, partner appreciation, and soulmate connections in rhyming couplets.",
    presetPrompt: "romantic love shayari in hindi with rhyming couplets",
    sampleItems: [
      "तेरी मुस्कुराहट से रोशन है दुनिया मेरी,\nतू ही मंज़िल और तू ही राहगुज़र है मेरी। ❤️✨",
    ],
    faqs: [
      { question: "Does the AI maintain rhyming meter (Kaafiya & Radeef)?", answer: "Yes, our trained prompt ensures proper classical rhyming structure." }
    ],
  },
  {
    slug: "sad",
    cluster: "ai-shayari",
    title: "AI Sad & Dard Shayari Generator (दर्द भरी शायरी)",
    metaTitle: "AI Sad Shayari Generator — Emotional Heartbreak Poetry",
    metaDescription: "Generate touching sad shayari, heartbreak couplets, and tanhai verses with AI.",
    primaryKeyword: "ai sad shayari generator",
    secondaryKeywords: ["sad shayari generator ai", "dard shayari writer"],
    priority: "High",
    badge: "🥀 Sad Shayari AI",
    subheading: "Emotional heartbreak reflections, lonely night thoughts, and soothing poetic melancholy.",
    presetPrompt: "emotional sad shayari about heartbreak and loneliness",
    sampleItems: [
      "खामोशियां बेवजह नहीं होती जनाब,\nकुछ दर्द लफ़्ज़ों से बयां नहीं होते। 🥀",
    ],
    faqs: [
      { question: "Can I copy sad verses in 1 click?", answer: "Yes, 1-click clipboard copy is built-in." }
    ],
  },
  {
    slug: "attitude",
    cluster: "ai-shayari",
    title: "AI Attitude Shayari Generator (रॉयल तेवर शायरी)",
    metaTitle: "AI Attitude Shayari Generator — Royal Desi Swag Poetry",
    metaDescription: "Generate royal attitude shayari, badmashi couplets, and enemy-silencing lines with AI.",
    primaryKeyword: "ai attitude shayari generator",
    secondaryKeywords: ["attitude shayari generator", "royal tevar shayari ai"],
    priority: "High",
    badge: "👑 Royal Tevar AI",
    subheading: "Unapologetic self-respect, desi tevar, and fearless king energy couplets.",
    presetPrompt: "royal attitude shayari in hindi for boys",
    sampleItems: [
      "हमसे बात संभल कर करना जनाब,\nहमारी खामोशी में भी हुकूमत झलकती है। 👑🔥",
    ],
    faqs: [
      { question: "Are these good for Instagram Reels audio?", answer: "Yes, high-impact lines crafted for voiceovers." }
    ],
  },
];

export const AI_QUOTE_SUBPAGES: SeoBlueprintPage[] = [
  {
    slug: "motivational",
    cluster: "ai-quote",
    title: "Motivational AI Quote Generator (Discipline & Hustle)",
    metaTitle: "Motivational AI Quote Generator — Daily Mindset & Hustle Quotes",
    metaDescription: "Generate high-conviction mindset quotes, discipline lessons, and viral hashtags with AI.",
    primaryKeyword: "motivational ai quote generator",
    secondaryKeywords: ["motivational quote generator", "hustle quotes ai"],
    priority: "High",
    badge: "🔥 Motivation AI",
    subheading: "Fuel relentless daily discipline, focus, and overcoming obstacles.",
    presetPrompt: "high conviction discipline and focus quote for entrepreneurs",
    sampleItems: [
      "\"Motivation gets you started. Discipline keeps you growing when nobody is watching.\"\n\n#Discipline #Mindset #Hustle",
    ],
    faqs: [
      { question: "Can I generate matching hashtags?", answer: "Yes, all quotes come with viral matching hashtags." }
    ],
  },
  {
    slug: "instagram",
    cluster: "ai-quote",
    title: "Instagram AI Quote Generator (Aesthetic & Feed Quotes)",
    metaTitle: "Instagram AI Quote Generator — Aesthetic Quotes & Hashtags",
    metaDescription: "Generate aesthetic quotes and philosophical one-liners tailored for Instagram carousels and stories.",
    primaryKeyword: "instagram ai quote generator",
    secondaryKeywords: ["quotes for instagram ai", "aesthetic quotes creator"],
    priority: "High",
    badge: "📸 Insta Quotes AI",
    subheading: "Aesthetic reflections and golden thoughts formatted for Instagram feeds.",
    presetPrompt: "aesthetic minimalist quote for instagram story",
    sampleItems: [
      "\"There is a quiet beauty in healing in private and blooming in public.\"\n\n#SoftAesthetic #Mindfulness #InnerPeace",
    ],
    faqs: [
      { question: "Are these good for Canva graphics?", answer: "Yes, clean quotes ready to paste into graphic templates." }
    ],
  },
  {
    slug: "attitude",
    cluster: "ai-quote",
    title: "AI Attitude & Confidence Quote Generator",
    metaTitle: "Attitude Quote Generator AI — Bold Self-Respect Quotes",
    metaDescription: "Generate bold attitude quotes, fearless self-worth statements, and boundary-setting lines.",
    primaryKeyword: "ai attitude quote generator",
    secondaryKeywords: ["attitude quote ai", "self respect quotes ai"],
    priority: "High",
    badge: "👑 Attitude Quotes AI",
    subheading: "Unshakeable confidence, high standards, and self-respect quotes for social feeds.",
    presetPrompt: "unapologetic confidence self respect quote",
    sampleItems: [
      "\"Never lower your standards to fit in. Build a table where only excellence is invited.\"\n\n#SelfRespect #Confidence #KingMindset",
    ],
    faqs: [
      { question: "Can I use these on WhatsApp status?", answer: "Yes, copy in 1 click." }
    ],
  },
];

// -------------------------------------------------------------
// 2. 📸 INSTAGRAM CAPTIONS (55 Cleaned Pages)
// -------------------------------------------------------------
const INSTAGRAM_SLUGS: { slug: string; title: string; metaTitle: string; keyword: string; badge: string; sample: string }[] = [
  // Core (10)
  { slug: "attitude", title: "Attitude Captions for Instagram (Savage & Fearless)", metaTitle: "Attitude Captions for Instagram — 200+ Savage & Bold Quotes", keyword: "attitude captions for instagram", badge: "🔥 Attitude", sample: "My attitude is based on how you treat me 💯" },
  { slug: "love", title: "Love Captions for Instagram (Romantic & Couples)", metaTitle: "Love Captions for Instagram — 200+ Romantic Quotes", keyword: "love captions for instagram", badge: "❤️ Love", sample: "In a room full of art, I'd still look at you 🌹✨" },
  { slug: "funny", title: "Funny Instagram Captions (Witty, Sarcastic & Memes)", metaTitle: "Funny Captions for Instagram — 200+ Witty One-Liners", keyword: "funny instagram captions", badge: "😂 Funny", sample: "I put the 'pro' in procrastinate 😴" },
  { slug: "aesthetic", title: "Aesthetic Instagram Captions (Minimalist & Pastel)", metaTitle: "Aesthetic Captions for Instagram — 300+ Soft Quotes", keyword: "aesthetic captions for instagram", badge: "✨ Aesthetic", sample: "Living softly in a fast world 🌿☕" },
  { slug: "motivational", title: "Motivational Instagram Captions (Daily Grind)", metaTitle: "Motivational Captions for Instagram — 200+ Hustle Quotes", keyword: "motivational instagram captions", badge: "💪 Motivation", sample: "Don't wait for opportunity. Create it 🚀" },
  { slug: "sad", title: "Sad Captions for Instagram (Emotional & Broken)", metaTitle: "Sad Captions for Instagram — 180+ Emotional Quotes", keyword: "sad captions for instagram", badge: "🥀 Sad", sample: "Sometimes silence is the loudest scream 💔" },
  { slug: "travel", title: "Travel Captions for Instagram (Wanderlust & Mountains)", metaTitle: "Travel Captions for Instagram — 250+ Wanderlust Quotes", keyword: "travel captions for instagram", badge: "✈️ Travel", sample: "Pahadon ki hawa aur garam chai 🏔️☕" },
  { slug: "gym", title: "Gym & Fitness Captions for Instagram", metaTitle: "Gym Captions for Instagram — 200+ Workout Motivation", keyword: "gym captions for instagram", badge: "🏋️ Gym", sample: "Excuses don't burn calories 🏋️‍♂️🔥" },
  { slug: "short", title: "Short Instagram Captions (Clean 1-Line Quotes)", metaTitle: "Short Instagram Captions — 250+ Clean 1-Line Quotes", keyword: "short instagram captions", badge: "⚡ Short", sample: "Unbothered 🕊️" },
  // Gender-Based (8)
  { slug: "boys", title: "Instagram Captions for Boys (Royal Swag & Dapper)", metaTitle: "Instagram Captions for Boys — 250+ Royal Swag Quotes", keyword: "instagram captions for boys", badge: "👑 Boys", sample: "Silent moves, loud results 🦁" },
  { slug: "girls", title: "Instagram Captions for Girls (Queen Vibes & Sassy)", metaTitle: "Instagram Captions for Girls — 300+ Sassy & Queen Quotes", keyword: "instagram captions for girls", badge: "🌸 Girls", sample: "Too glam to give a damn ✨👑" },
  { slug: "attitude-boys", title: "Attitude Captions for Boys (King Mindset)", metaTitle: "Attitude Captions for Boys — Royal Desi Swag", keyword: "attitude captions for boys", badge: "🦁 Boys Attitude", sample: "Sher shikar karta hai, kutte bhonkte hain 🔥" },
  { slug: "aesthetic-girls", title: "Aesthetic Captions for Girls (Soft Era)", metaTitle: "Aesthetic Captions for Girls — Soft & Pastel Quotes", keyword: "aesthetic captions for girls", badge: "🌸 Soft Girls", sample: "Blooming in my own quiet time 🌸✨" },
  { slug: "gym-boys", title: "Gym Captions for Boys (Heavy Lifting & Discipline)", metaTitle: "Gym Captions for Boys — Heavy Lifting Motivation", keyword: "gym captions for boys", badge: "💪 Gym Boys", sample: "Turning sweat into iron discipline 🏋️‍♂️" },
  { slug: "selfie-boys", title: "Selfie Captions for Boys (Dapper & Confident)", metaTitle: "Selfie Captions for Boys — Dapper Front Camera Quotes", keyword: "selfie captions for boys", badge: "📸 Boys Selfie", sample: "Confidence level: No filter needed 🕶️" },
  { slug: "selfie-girls", title: "Selfie Captions for Girls (Cute & Glowing)", metaTitle: "Selfie Captions for Girls — Cute & Confident Quotes", keyword: "selfie captions for girls", badge: "📸 Girls Selfie", sample: "Serving looks, not tea 🪞✨" },
  { slug: "girls-attitude", title: "Attitude Captions for Girls (Sassy Queen)", metaTitle: "Attitude Captions for Girls — Sassy & Bold Quotes", keyword: "attitude captions for girls", badge: "👑 Sassy Queen", sample: "My heels are higher than your standards 👠💅" },
  // Photo Types (7)
  { slug: "selfie", title: "Selfie Captions for Instagram (Flirty & Cute)", metaTitle: "Selfie Captions for Instagram — 200+ Cute Quotes", keyword: "selfie captions for instagram", badge: "📸 Selfie", sample: "Lighting was doing all the heavy lifting today ☀️" },
  { slug: "couple", title: "Couple Captions for Instagram (Cute & Romantic)", metaTitle: "Couple Captions for Instagram — 200+ Romantic Quotes", keyword: "couple captions for instagram", badge: "💑 Couple", sample: "You're my favorite notification ❤️📱" },
  { slug: "friends", title: "Captions for Friends Instagram (Squad & BFF)", metaTitle: "Captions for Friends Instagram — Best Friend Quotes", keyword: "captions for friends instagram", badge: "🤝 Friends", sample: "Real friends judge other people with you 🤫🤝" },
  { slug: "birthday", title: "Birthday Captions for Instagram (Celebration)", metaTitle: "Birthday Captions for Instagram — 150+ Bday Quotes", keyword: "birthday captions for instagram", badge: "🎂 Birthday", sample: "Cheers to my new chapter 🥂✨" },
  { slug: "family", title: "Family Captions for Instagram (Home & Love)", metaTitle: "Family Captions for Instagram — Heartfelt Family Quotes", keyword: "family captions for instagram", badge: "🏡 Family", sample: "Home is wherever these people are ❤️🏡" },
  { slug: "nature", title: "Nature Captions for Instagram (Greenery & Peace)", metaTitle: "Nature Captions for Instagram — Scenic Greenery Quotes", keyword: "nature captions for instagram", badge: "🌲 Nature", sample: "Adopt the pace of nature: her secret is patience 🌿" },
  { slug: "night", title: "Night Captions for Instagram (City Lights & Moon)", metaTitle: "Night Captions for Instagram — City Lights & Moon Quotes", keyword: "night captions for instagram", badge: "🌙 Night Vibes", sample: "City lights and starry nights 🌃✨" },
  // Style/Tone (7)
  { slug: "savage", title: "Savage Captions for Instagram (Unfiltered & Bold)", metaTitle: "Savage Captions for Instagram — Bold & Fearless Lines", keyword: "savage captions for instagram", badge: "🔥 Savage", sample: "I'm not rude, I'm just honest in a fake world 🖤" },
  { slug: "deep", title: "Deep Captions for Instagram (Philosophical Thoughts)", metaTitle: "Deep Captions for Instagram — Meaningful Quotes", keyword: "deep captions for instagram", badge: "🌌 Deep", sample: "Silence has its own language if you listen closely 🕊️" },
  { slug: "classy", title: "Classy Captions for Instagram (Elegance & Charm)", metaTitle: "Classy Captions for Instagram — Elegant & Timeless Quotes", keyword: "classy captions for instagram", badge: "💎 Classy", sample: "Class is knowing what to say, when to say it, and when to stop 👑" },
  { slug: "royal", title: "Royal Captions for Instagram (King & Queen Status)", metaTitle: "Royal Captions for Instagram — Royal Desi Swag Quotes", keyword: "royal captions for instagram", badge: "👑 Royal", sample: "Born to rule my own destiny 🦁" },
  { slug: "cool", title: "Cool Captions for Instagram (Chill & Unbothered)", metaTitle: "Cool Captions for Instagram — Chill One-Liners", keyword: "cool captions for instagram", badge: "🕶️ Cool", sample: "Living life at 120 FPS ⚡" },
  { slug: "one-liner", title: "One Line Captions for Instagram (Minimalist)", metaTitle: "One Line Captions for Instagram — Punchy Short Quotes", keyword: "one line captions for instagram", badge: "⚡ One-Liner", sample: "Less perfection, more authenticity ✨" },
  { slug: "unique", title: "Unique Captions for Instagram (Rare & Aesthetic)", metaTitle: "Unique Captions for Instagram — Untaken Aesthetic Quotes", keyword: "unique captions for instagram", badge: "✨ Unique", sample: "Rarely seen, never duplicated 💫" },
  // Lifestyle (8)
  { slug: "food", title: "Food Captions for Instagram (Foodie Delights)", metaTitle: "Food Captions for Instagram — Foodie & Brunch Quotes", keyword: "food captions for instagram", badge: "🍕 Foodie", sample: "First we eat, then we do everything else 🍕🤤" },
  { slug: "coffee", title: "Coffee Captions for Instagram (Caffeine Aesthetic)", metaTitle: "Coffee Captions for Instagram — Aesthetic Cafe Quotes", keyword: "coffee captions for instagram", badge: "☕ Coffee", sample: "Powered by iced coffee and ambitious dreams ☕✨" },
  { slug: "bike", title: "Bike Captions for Instagram (Rider Swag & Speed)", metaTitle: "Bike Captions for Instagram — Motorcycle Rider Quotes", keyword: "bike captions for instagram", badge: "🏍️ Bike Rider", sample: "Four wheels move the body, two wheels move the soul 🏍️💨" },
  { slug: "car", title: "Car Captions for Instagram (Drive & Wheels)", metaTitle: "Car Captions for Instagram — Night Drive Quotes", keyword: "car captions for instagram", badge: "🚗 Car Drive", sample: "Late night drives cure what medicine can't 🏎️🌃" },
  { slug: "beach", title: "Beach Captions for Instagram (Sun, Sand & Waves)", metaTitle: "Beach Captions for Instagram — Ocean Waves Quotes", keyword: "beach captions for instagram", badge: "🏖️ Beach", sample: "High tides and good vibes 🌊☀️" },
  { slug: "mountains", title: "Mountain Captions for Instagram (Pahadon Ka Sukoon)", metaTitle: "Mountain Captions for Instagram — Trek & Hill Quotes", keyword: "mountain captions for instagram", badge: "🏔️ Mountains", sample: "Pahadon ki hawa me kuch alag hi sukoon hai 🏔️☕" },
  { slug: "road-trip", title: "Road Trip Captions for Instagram (Highways & Music)", metaTitle: "Road Trip Captions for Instagram — Highway Adventure Quotes", keyword: "road trip captions for instagram", badge: "🛣️ Road Trip", sample: "No destination, just good music and open roads 🛣️🎶" },
  { slug: "college", title: "College Captions for Instagram (Campus & Friends)", metaTitle: "College Captions for Instagram — Campus Memories Quotes", keyword: "college captions for instagram", badge: "🎓 College", sample: "Caffeine, chaos, and core memories with the gang 🎓☕" },
  // Relationships (7)
  { slug: "heartbreak", title: "Heartbreak Captions for Instagram (Healing & Sorrow)", metaTitle: "Heartbreak Captions for Instagram — Broken Heart Quotes", keyword: "heartbreak captions for instagram", badge: "💔 Heartbreak", sample: "Smiles can hide so much unsaid pain 🥀" },
  { slug: "missing-you", title: "Missing You Captions Instagram (Yaadein & Distance)", metaTitle: "Missing You Captions Instagram — Longing Quotes", keyword: "missing you captions instagram", badge: "💭 Missing You", sample: "Distance means nothing when someone means everything ❤️" },
  { slug: "romantic", title: "Romantic Captions for Instagram (Deep Affection)", metaTitle: "Romantic Captions for Instagram — Soulmate Love Quotes", keyword: "romantic captions for instagram", badge: "🌹 Romantic", sample: "Together is my favorite place in the world 🌹✨" },
  { slug: "best-friend", title: "Best Friend Captions Instagram (BFF Brotherhood)", metaTitle: "Best Friend Captions Instagram — Loyal BFF Quotes", keyword: "best friend captions instagram", badge: "🤝 Best Friend", sample: "We go together like coffee and donuts ☕🍩" },
  { slug: "brother", title: "Brother Captions for Instagram (Bhai Ka Pyar)", metaTitle: "Brother Captions for Instagram — Bhai Brotherhood Quotes", keyword: "brother captions for instagram", badge: "👑 Brother", sample: "Bhai jaisa yaar nahi, bhai jaisa koi sansar nahi 🤝👑" },
  { slug: "sister", title: "Sister Captions for Instagram (Sisterhood & Banter)", metaTitle: "Sister Captions for Instagram — Cute Sister Quotes", keyword: "sister captions for instagram", badge: "🌸 Sister", sample: "Best friend by choice, sister by birth 🌸✨" },
  { slug: "mother", title: "Mother Captions for Instagram (Maa Mamta & Love)", metaTitle: "Mother Captions for Instagram — Maa Blessings Quotes", keyword: "mother captions for instagram", badge: "❤️ Mother", sample: "Maa ke aanchal me jo sukoon hai, wo kahi nahi ❤️🏡" },
  // Reels/Format (8)
  { slug: "reels", title: "Captions for Instagram Reels (Viral Hooks)", metaTitle: "Captions for Instagram Reels — High-Engagement Hooks", keyword: "captions for instagram reels", badge: "🎬 Reels", sample: "Watch till the end for the surprise ⚡ Save this reel 📌" },
  { slug: "reels-attitude", title: "Attitude Captions for Reels (Voiceover Hooks)", metaTitle: "Attitude Captions for Reels — Sigma & Swag Lines", keyword: "attitude captions for reels", badge: "🔥 Reels Attitude", sample: "Sher khamosh rehta hai toh log use kamzor samajh lete hain 🦁🔥" },
  { slug: "reels-love", title: "Love Captions for Reels (Couple Audio Quotes)", metaTitle: "Love Captions for Reels — Romantic Audio Lines", keyword: "love captions for reels", badge: "❤️ Reels Love", sample: "Tag your favorite person in the comments ❤️👇" },
  { slug: "reels-funny", title: "Funny Captions for Reels (Comedy & Banter)", metaTitle: "Funny Captions for Reels — Comedy Audio Hooks", keyword: "funny captions for reels", badge: "😂 Reels Funny", sample: "Tell me I'm not the only one who does this 💀😭" },
  { slug: "reels-gym", title: "Gym Captions for Reels (PR & Lift Check)", metaTitle: "Gym Captions for Reels — Workout Motivation Hooks", keyword: "gym captions for reels", badge: "💪 Reels Gym", sample: "Heavy weights, clear mind, zero excuses 🏋️‍♂️🔥" },
  { slug: "viral-reels", title: "Viral Reels Captions (High CTR & Saves)", metaTitle: "Viral Reels Captions — Algorithm Boosting Hooks", keyword: "viral reels captions", badge: "🚀 Viral Reels", sample: "Algorithm brought you here for a reason ✨ Save for later 📌" },
  { slug: "photo-dump", title: "Photo Dump Captions Instagram (Weekend & Monthly)", metaTitle: "Photo Dump Captions Instagram — Monthly Dump Quotes", keyword: "photo dump captions instagram", badge: "📸 Photo Dump", sample: "Recent moments that made me smile 🎞️☁️" },
  { slug: "carousel", title: "Carousel Captions Instagram (Swipe & Multi-Photo)", metaTitle: "Carousel Captions Instagram — Swipe Left Quotes", keyword: "carousel captions instagram", badge: "🎠 Carousel", sample: "Swipe to see my favorite moment from today 👉✨" },
];

export const INSTAGRAM_CAPTIONS_SUBPAGES: SeoBlueprintPage[] = INSTAGRAM_SLUGS.map((item) => ({
  slug: item.slug,
  cluster: "instagram",
  title: item.title,
  metaTitle: item.metaTitle,
  metaDescription: `Discover 200+ ${item.title.toLowerCase()} for your feed, reels, and stories. 1-click copy enabled.`,
  primaryKeyword: item.keyword,
  secondaryKeywords: [`best ${item.slug} captions`, `${item.slug} quotes for instagram`],
  priority: "High",
  badge: item.badge,
  subheading: `Handpicked ${item.title} ready to copy and share directly to Instagram.`,
  sampleItems: [item.sample, `${item.sample.replace("🔥", "✨")} — Curated by Unitoolkit`],
  faqs: [
    { question: `How to use these ${item.badge} captions?`, answer: "Click 'Copy' on any caption and paste directly into your Instagram post or story." }
  ],
}));

// -------------------------------------------------------------
// 3. 📱 WHATSAPP STATUS (45 Cleaned Pages)
// -------------------------------------------------------------
const WHATSAPP_SLUGS = [
  // Core (10)
  { slug: "hindi", title: "Hindi WhatsApp Status (हिंदी स्टेटस कलेक्शन)", keyword: "hindi whatsapp status", badge: "🇮🇳 Hindi", sample: "खामोशी से काम करो, कामयाबी खुद शोर मचाएगी 👑" },
  { slug: "english", title: "English WhatsApp Status (Classy & Minimal)", keyword: "english whatsapp status", badge: "🔤 English", sample: "Peace of mind over everything 🕊️" },
  { slug: "attitude", title: "Attitude WhatsApp Status (Royal Desi Swag)", keyword: "attitude whatsapp status", badge: "🔥 Attitude", sample: "हम अपनी शख्सियत पर नाज़ करते हैं 👑" },
  { slug: "sad", title: "Sad WhatsApp Status (Heartbreak & Tanhai)", keyword: "sad whatsapp status", badge: "💔 Sad", sample: "खामोशियां भी बहुत कुछ बोलती हैं 🥀" },
  { slug: "love", title: "Love WhatsApp Status (Romantic & Soulmate)", keyword: "love whatsapp status", badge: "❤️ Love", sample: "तेरी मुस्कुराहट ही मेरी दुनिया का सबसे खूबसूरत नज़ारा है ❤️" },
  { slug: "funny", title: "Funny WhatsApp Status (Witty Jokes & Memes)", keyword: "funny whatsapp status", badge: "😂 Funny", sample: "My bed and I have a great relationship, but the alarm is jealous 😴" },
  { slug: "motivational", title: "Motivational WhatsApp Status (Daily Grind)", keyword: "motivational whatsapp status", badge: "💪 Motivation", sample: "Discipline turns dreams into reality 🔥" },
  { slug: "friendship", title: "Friendship WhatsApp Status (Dosti Yaari)", keyword: "friendship whatsapp status", badge: "🤝 Dosti", sample: "Dosti me dost dost ka khuda hota hai 🤝✨" },
  { slug: "short", title: "Short WhatsApp Status (Clean 1-Line Quotes)", keyword: "short whatsapp status", badge: "⚡ Short", sample: "Silence is power 🤫" },
  // Attitude (6)
  { slug: "boys-attitude", title: "Boys Attitude WhatsApp Status", keyword: "boys attitude whatsapp status", badge: "🦁 Boys Attitude", sample: "Humse muqabla karna hai toh aukaat badhao 👑" },
  { slug: "girls-attitude", title: "Girls Attitude WhatsApp Status", keyword: "girls attitude whatsapp status", badge: "👑 Girls Attitude", sample: "My standards are higher than your opinions 💅✨" },
  { slug: "royal-attitude", title: "Royal Attitude WhatsApp Status", keyword: "royal attitude whatsapp status", badge: "👑 Royal", sample: "Hamari sharafat ka faida uthana band kar do 👑" },
  { slug: "savage", title: "Savage WhatsApp Status", keyword: "savage whatsapp status", badge: "🔥 Savage", sample: "I don't hold grudges, I raise my standards 🖤" },
  { slug: "self-respect", title: "Self Respect WhatsApp Status", keyword: "self respect whatsapp status", badge: "👑 Self Respect", sample: "Never beg for a seat at a table where you aren't respected 👑" },
  { slug: "classy", title: "Classy WhatsApp Status", keyword: "classy whatsapp status", badge: "💎 Classy", sample: "Elegance is the only beauty that never fades ✨" },
  // Love (7)
  { slug: "romantic", title: "Romantic WhatsApp Status", keyword: "romantic whatsapp status", badge: "🌹 Romantic", sample: "You are my favorite thought every morning 🌹" },
  { slug: "breakup", title: "Breakup WhatsApp Status", keyword: "breakup whatsapp status", badge: "💔 Breakup", sample: "Thank you for teaching me how to let go 🕊️" },
  { slug: "missing-you", title: "Missing You WhatsApp Status", keyword: "missing you whatsapp status", badge: "💭 Missing You", sample: "Teri yaadein bhi badi ziddi hain ✨" },
  { slug: "couple", title: "Couple WhatsApp Status", keyword: "couple whatsapp status", badge: "💑 Couple", sample: "Together is our favorite place to be ❤️" },
  { slug: "one-sided-love", title: "One Sided Love WhatsApp Status", keyword: "one sided love whatsapp status", badge: "🥀 One Sided", sample: "Mohabbat to bas tujhse hi thi, chahe tu mile ya na mile 💔" },
  { slug: "heart-touching", title: "Heart Touching WhatsApp Status", keyword: "heart touching whatsapp status", badge: "🥺 Heart Touching", sample: "Some wounds teach you how to live with silence 🥀" },
  { slug: "crush", title: "Crush WhatsApp Status", keyword: "crush whatsapp status", badge: "💌 Crush", sample: "Seeing your name on my screen makes my entire day ❤️" },
  // Sad (6)
  { slug: "dard", title: "Dard WhatsApp Status (दर्द भरे स्टेटस)", keyword: "dard wala whatsapp status", badge: "🥀 Dard", sample: "कुछ दर्द लफ़्ज़ों से बयां नहीं होते 💔" },
  { slug: "bewafa", title: "Bewafa WhatsApp Status (बेवफा स्टेटस)", keyword: "bewafa whatsapp status", badge: "💔 Bewafa", sample: "हम तो समझे थे वफ़ा करोगे, तुमने तो महफ़िल ही बदल ली 🥀" },
  { slug: "alone", title: "Alone WhatsApp Status (तन्हाई स्टेटस)", keyword: "alone whatsapp status", badge: "🌙 Alone", sample: "Better to walk alone than with a crowd going the wrong way 🌙" },
  { slug: "broken-heart", title: "Broken Heart WhatsApp Status", keyword: "broken heart whatsapp status", badge: "💔 Broken", sample: "Smiles hiding oceans of tears 💔" },
  { slug: "mood-off", title: "Mood Off WhatsApp Status", keyword: "mood off whatsapp status", badge: "🌑 Mood Off", sample: "Current mood: DND with the whole world 🔌" },
  { slug: "2-line", title: "2 Line WhatsApp Status", keyword: "2 line whatsapp status", badge: "⚡ 2-Line", sample: "वक़्त आने दे जवाब भी देंगे, हिसाब भी लेंगे पूरा 🔥" },
  // Life/Lifestyle (6)
  { slug: "life", title: "Life WhatsApp Status (सच्चाई व सीख)", keyword: "life whatsapp status", badge: "🌿 Life", sample: "Zindagi me sukoon chahiye toh logon ki baaton ko dil se mat lagao 🤍" },
  { slug: "success", title: "Success WhatsApp Status", keyword: "success whatsapp status", badge: "🏆 Success", sample: "Success is the sweetest revenge against doubters 🏆🔥" },
  { slug: "study", title: "Study & Exam WhatsApp Status", keyword: "study whatsapp status", badge: "📚 Study", sample: "Late night study = Future CEO life 🚀📚" },
  { slug: "gym", title: "Gym WhatsApp Status", keyword: "gym whatsapp status", badge: "💪 Gym", sample: "No excuses, just relentless consistency 🏋️‍♂️🔥" },
  { slug: "morning", title: "Good Morning WhatsApp Status", keyword: "good morning whatsapp status", badge: "☀️ Morning", sample: "Nayi subah, naye khwab, nayi umeed. Suprabhat! ☀️☕" },
  { slug: "birthday", title: "Birthday WhatsApp Status", keyword: "birthday whatsapp status", badge: "🎂 Birthday", sample: "Wishing you endless blessings and success 🎂✨" },
  // Occasions (10)
  { slug: "new-year", title: "New Year WhatsApp Status", keyword: "new year whatsapp status", badge: "🎉 New Year", sample: "365 new chances. Let's make every day count 🥂✨" },
  { slug: "eid", title: "Eid Mubarak WhatsApp Status", keyword: "eid whatsapp status", badge: "🌙 Eid Mubarak", sample: "Eid Mubarak! May Allah bless you with peace and joy 🌙✨" },
  { slug: "diwali", title: "Diwali WhatsApp Status", keyword: "diwali whatsapp status", badge: "🪔 Diwali", sample: "May the light of Diwali illuminate your life with happiness 🪔✨" },
  { slug: "holi", title: "Holi WhatsApp Status", keyword: "holi whatsapp status", badge: "🎨 Holi", sample: "Wishing you a vibrant and colorful Holi! 🎨🌈" },
  { slug: "christmas", title: "Christmas WhatsApp Status", keyword: "christmas whatsapp status", badge: "🎄 Christmas", sample: "Merry Christmas & Happy Holidays to you and your family 🎄🎅" },
  { slug: "friendship-day", title: "Friendship Day WhatsApp Status", keyword: "friendship day whatsapp status", badge: "🤝 Friendship Day", sample: "Happy Friendship Day to my partner in crime 🤝❤️" },
  { slug: "valentines-day", title: "Valentines Day WhatsApp Status", keyword: "valentines day whatsapp status", badge: "❤️ Valentines", sample: "Every love story is special, but ours is my favorite ❤️🌹" },
  { slug: "independence-day", title: "Independence Day WhatsApp Status", keyword: "independence day whatsapp status", badge: "🇮🇳 15 August", sample: "Happy Independence Day! Proud to be an Indian 🇮🇳✨" },
  { slug: "republic-day", title: "Republic Day WhatsApp Status", keyword: "republic day whatsapp status", badge: "🇮🇳 26 January", sample: "Saluting the pride and unity of our nation. Jai Hind! 🇮🇳" },
  { slug: "ramadan", title: "Ramadan Kareem WhatsApp Status", keyword: "ramadan whatsapp status", badge: "🌙 Ramadan", sample: "Ramadan Mubarak! May your fasts and prayers be accepted 🌙✨" },
];

export const WHATSAPP_STATUS_SUBPAGES: SeoBlueprintPage[] = WHATSAPP_SLUGS.map((item) => ({
  slug: item.slug,
  cluster: "whatsapp",
  title: item.title,
  metaTitle: `${item.title} — 200+ 1-Click WhatsApp Share Quotes`,
  metaDescription: `Discover 200+ ${item.title.toLowerCase()} with 1-click WhatsApp share buttons.`,
  primaryKeyword: item.keyword,
  secondaryKeywords: [`best ${item.slug} status`, `${item.slug} status for whatsapp`],
  priority: "High",
  badge: item.badge,
  subheading: `Handpicked ${item.title} with 1-click WhatsApp share buttons.`,
  sampleItems: [item.sample],
  faqs: [
    { question: `How to share this ${item.badge} status?`, answer: "Click the green WhatsApp button to share directly to your status." }
  ],
}));

// -------------------------------------------------------------
// 4. ❤️ SHAYARI (55 Cleaned Pages)
// -------------------------------------------------------------
const SHAYARI_SLUGS = [
  // Love (12)
  { slug: "love-shayari", title: "Love Shayari in Hindi (प्यार भरी शायरी)", keyword: "love shayari", badge: "❤️ Love", sample: "तेरी मुस्कुराहट से शुरू हुई दास्तान मेरी,\nतू ही मंज़िल और तू ही राहगुज़र है मेरी। ❤️" },
  { slug: "romantic-shayari", title: "Romantic Shayari (रोमांटिक शायरी)", keyword: "romantic shayari", badge: "🌹 Romantic", sample: "तेरी आँखों के जादू में खो जाने को जी चाहता है 🌹✨" },
  { slug: "mohabbat-shayari", title: "Mohabbat Shayari (मोहब्बत शायरी)", keyword: "mohabbat shayari", badge: "❤️ Mohabbat", sample: "मोहब्बत इबादत है अगर निभाने वाला सच्चा हो 🌹" },
  { slug: "2-line-love", title: "2 Line Love Shayari (दो लाइन प्यार शायरी)", keyword: "2 line love shayari", badge: "⚡ 2-Line Love", sample: "ख्वाहिश बस इतनी सी है,\nतेरा हाथ हो और जिंदगी का सफर हो। ❤️" },
  { slug: "true-love", title: "True Love Shayari (सच्चा प्यार शायरी)", keyword: "true love shayari", badge: "❤️ True Love", sample: "सच्ची मोहब्बत कभी मुकद्दर की मोहताज नहीं होती ✨" },
  { slug: "first-love", title: "First Love Shayari (पहला प्यार शायरी)", keyword: "first love shayari", badge: "🌸 First Love", sample: "पहला प्यार वो एहसास है जो कभी पुराना नहीं होता 🌸" },
  { slug: "one-sided-love", title: "One Sided Love Shayari (एकतरफा प्यार शायरी)", keyword: "one sided love shayari", badge: "🥀 One Sided", sample: "एकतरफा ही सही पर मोहब्बत बेमिसाल की है हमने 💔" },
  { slug: "girlfriend-love", title: "Girlfriend Love Shayari (गर्लफ्रेंड के लिए प्यार शायरी)", keyword: "girlfriend love shayari", badge: "🌹 GF Love", sample: "तेरी मुस्कुराहट से ही मेरी सुबह और शाम है ❤️✨" },
  { slug: "boyfriend-love", title: "Boyfriend Love Shayari (बॉयफ्रेंड के लिए शायरी)", keyword: "boyfriend love shayari", badge: "❤️ BF Love", sample: "तू साथ है तो हर राह आसान लगती है ❤️" },
  { slug: "heart-touching-love", title: "Heart Touching Love Shayari", keyword: "heart touching love shayari", badge: "🥺 Heart Touching", sample: "दिल से निकली बात हमेशा दिल तक पहुंचती है ✨" },
  { slug: "husband-wife", title: "Husband Wife Shayari (पति-पत्नी शायरी)", keyword: "husband wife shayari", badge: "💍 Husband Wife", sample: "तेरे साथ से ही मेरी हर खुशी मुकम्मल है 💍❤️" },
  // Sad/Dard (10)
  { slug: "sad-shayari", title: "Sad Shayari in Hindi (दर्द व तन्हाई शायरी)", keyword: "sad shayari", badge: "💔 Sad", sample: "खामोशियां बेवजह नहीं होती,\nकुछ दर्द आवाज़ छीन लेते हैं। 🥀" },
  { slug: "dard-shayari", title: "Dard Shayari (दर्द भरी शायरी)", keyword: "dard shayari", badge: "🥀 Dard", sample: "दिल का दर्द बयां करना आसान नहीं होता 💔" },
  { slug: "bewafa-shayari", title: "Bewafa Shayari (बेवफा शायरी)", keyword: "bewafa shayari", badge: "💔 Bewafa", sample: "हम तो समझे थे तुम वफ़ा करोगे 🥀" },
  { slug: "breakup-shayari", title: "Breakup Shayari (जुदाई व ब्रेकअप शायरी)", keyword: "breakup shayari", badge: "🥀 Breakup", sample: "अलविदा कहते हुए जो दर्द हुआ था, आज वही ताकत है 🕊️" },
  { slug: "alone-shayari", title: "Alone Shayari (तन्हाई शायरी)", keyword: "alone shayari", badge: "🌙 Alone", sample: "तन्हाई से बेहतर कोई हमसफ़र नहीं 🌙" },
  { slug: "missing-you", title: "Missing You Shayari (याद शायरी)", keyword: "missing you shayari", badge: "💭 Missing You", sample: "तेरी यादें भी बड़ी जिद्दी हैं ✨" },
  { slug: "sad-love", title: "Sad Love Shayari (अधूरे प्यार की शायरी)", keyword: "sad love shayari", badge: "💔 Sad Love", sample: "मोहब्बत दोनों ने की, तुमने आजमाई हमने निभाई 💔" },
  { slug: "sad-2-line", title: "2 Line Sad Shayari (दो लाइन दर्द शायरी)", keyword: "2 line sad shayari", badge: "⚡ 2-Line Sad", sample: "मुस्कुराने की आदत भी कमाल है, हर दर्द छुपा लेती है 🥀" },
  { slug: "aansu", title: "Aansu Shayari (आँसू शायरी)", keyword: "aansu shayari", badge: "💧 Aansu", sample: "आँखों से गिरे आँसू कभी झूठे नहीं होते 💧" },
  { slug: "judai", title: "Judai Shayari (जुदाई शायरी)", keyword: "judai shayari", badge: "🥀 Judai", sample: "जुदाई का दर्द वही जाने जिसने सच्ची मोहब्बत की हो 💔" },
  // Attitude (8)
  { slug: "attitude-shayari", title: "Attitude Shayari in Hindi (तेवर शायरी)", keyword: "attitude shayari", badge: "🔥 Attitude", sample: "हमसे बात संभल कर करना,\nहमारी खामोशी में भी हुकूमत है। 👑" },
  { slug: "royal-attitude", title: "Royal Attitude Shayari (रॉयल तेवर)", keyword: "royal attitude shayari", badge: "👑 Royal", sample: "हम अपनी शख्सियत पर नाज़ करते हैं 👑" },
  { slug: "boys-attitude", title: "Boys Attitude Shayari (बदमाशी शायरी)", keyword: "boys attitude shayari", badge: "🦁 Boys", sample: "नियम वहीं से शुरू होते हैं जहां हम खड़े होते हैं 🔥" },
  { slug: "girls-attitude", title: "Girls Attitude Shayari (क्वीन शायरी)", keyword: "girls attitude shayari", badge: "👑 Girls", sample: "हमारी शख्सियत को समझना हर किसी के बस की बात नहीं 💅" },
  { slug: "self-respect", title: "Self Respect Shayari (स्वाभिमान शायरी)", keyword: "self respect shayari", badge: "👑 Khudari", sample: "हम अपनी खुददारी का सौदा नहीं करते 👑" },
  { slug: "savage-shayari", title: "Savage Shayari (सटीक तेवर शायरी)", keyword: "savage shayari", badge: "🔥 Savage", sample: "शेर शिकार करता है, कुत्ते भौंकते हैं 🔥" },
  { slug: "powerful-shayari", title: "Powerful Shayari (दबंग शायरी)", keyword: "powerful shayari", badge: "⚡ Powerful", sample: "ताकत और हौसले से तकदीर बदली जाती है 🦁" },
  { slug: "2-line-attitude", title: "2 Line Attitude Shayari (दो लाइन तेवर शायरी)", keyword: "2 line attitude shayari", badge: "⚡ 2-Line Attitude", sample: "वक़्त आने दे जवाब भी देंगे, हिसाब भी लेंगे 🔥" },
  // Relationship/Friendship (8)
  { slug: "dosti-shayari", title: "Dosti Shayari (दोस्ती शायरी)", keyword: "dosti shayari", badge: "🤝 Dosti", sample: "दोस्ती का रिश्ता सबसे अनमोल होता है 🤝✨" },
  { slug: "best-friend", title: "Best Friend Shayari (सच्चे यार शायरी)", keyword: "best friend shayari", badge: "🤝 Best Friend", sample: "मुसीबत में सबसे पहले खड़ा होता है सच्चा यार 🤝" },
  { slug: "bhai-shayari", title: "Bhai Shayari (भाई शायरी)", keyword: "bhai shayari", badge: "👑 Bhai", sample: "भाई जैसा कोई यार नहीं 🤝👑" },
  { slug: "maa-shayari", title: "Maa Shayari (माँ की ममता शायरी)", keyword: "maa shayari", badge: "❤️ Maa", sample: "माँ के आंचल में जो सुकून है, वो दुनिया में कहीं नहीं ❤️🏡" },
  { slug: "papa-shayari", title: "Papa Shayari (पिता शायरी)", keyword: "papa shayari", badge: "👔 Papa", sample: "पापा का साया ही हर बच्चे की सबसे बड़ी ताकत है 👔✨" },
  { slug: "family-shayari", title: "Family Shayari (परिवार शायरी)", keyword: "family shayari", badge: "🏡 Family", sample: "परिवार ही हमारी असली ताकत है 🏡❤️" },
  { slug: "yaari-shayari", title: "Yaari Shayari (यारी शायरी)", keyword: "yaari shayari", badge: "🤝 Yaari", sample: "यारों की यारी पर जान भी कुर्बान है 🤝🔥" },
  { slug: "school-friend", title: "School Friends Shayari (स्कूल की यादें शायरी)", keyword: "school friends shayari", badge: "🎒 School Friends", sample: "स्कूल के वो दिन और वो बेफिक्र दोस्तों की महफ़िल 🎒✨" },
  // Format/Platform (9)
  { slug: "2-line-shayari", title: "2 Line Shayari (दो लाइन शायरी संग्रह)", keyword: "2 line shayari", badge: "⚡ 2-Line Master", sample: "हम किसी के नाम के मोहताज नहीं होते 👑" },
  { slug: "short-shayari", title: "Short Shayari (छोटी शायरी)", keyword: "short shayari", badge: "⚡ Short", sample: "खामोशी भी एक अंदाज़ है बयां करने का ✨" },
  { slug: "hindi-shayari", title: "Hindi Shayari (हिंदी शायरी संग्रह)", keyword: "hindi shayari", badge: "🇮🇳 Hindi Master", sample: "मुस्कुराते रहिए, यही जिंदगी की जीत है 👑" },
  { slug: "instagram-shayari", title: "Shayari for Instagram (इंस्टाग्राम शायरी)", keyword: "shayari for instagram", badge: "📸 Insta Shayari", sample: "रील्स और पोस्ट के लिए चुनिंदा हिंदी शायरी 📸✨" },
  { slug: "whatsapp-shayari", title: "Shayari for WhatsApp (व्हाट्सएप शायरी)", keyword: "shayari for whatsapp", badge: "💬 WhatsApp Shayari", sample: "1-क्लिक शेयर व्हाट्सएप शायरी 💬✨" },
  { slug: "good-night-shayari", title: "Good Night Shayari (शुभ रात्रि शायरी)", keyword: "good night shayari", badge: "🌙 Good Night", sample: "चांदनी रात और मीठे सपनों की दुआ 🌙✨" },
  { slug: "morning-shayari", title: "Good Morning Shayari (सुप्रभात शायरी)", keyword: "good morning shayari", badge: "☀️ Suprabhat", sample: "मुस्कुराती सुबह और खिलती हुई धूप ☀️☕" },
  { slug: "deep-shayari", title: "Deep Shayari (गहरी सोच शायरी)", keyword: "deep shayari", badge: "🌌 Deep", sample: "गहराई सोच में हो तो लफ़्ज़ कम लगते हैं ✨" },
  { slug: "new-shayari", title: "New Shayari 2026 (नई शायरी संग्रह)", keyword: "new shayari 2025", badge: "✨ New 2026", sample: "2026 की सबसे ताज़ा और ट्रेंडिंग शायरी 🚀" },
  // Life/Motivation (8)
  { slug: "motivational-shayari", title: "Motivational Shayari (प्रेरणादायक शायरी)", keyword: "motivational shayari", badge: "💪 Motivation", sample: "हौसले बुलंद हों तो हर मंज़िल आसान है 🔥" },
  { slug: "life-shayari", title: "Life Shayari (जिंदगी की सच्चाई शायरी)", keyword: "life shayari", badge: "🌿 Life", sample: "जिंदगी हर पल एक नया सबक सिखाती है ✨" },
  { slug: "success-shayari", title: "Success Shayari (कामयाबी शायरी)", keyword: "success shayari", badge: "🏆 Success", sample: "कामयाबी मेहनत की दीवानी होती है 🏆" },
  { slug: "inspirational-shayari", title: "Inspirational Shayari (उत्साहवर्धक शायरी)", keyword: "inspirational shayari", badge: "✨ Inspiration", sample: "गिर कर उठना ही असली जीत है 🚀" },
  { slug: "zindagi-shayari", title: "Zindagi Shayari (ज़िंदगी शायरी)", keyword: "zindagi shayari", badge: "🌿 Zindagi", sample: "मुस्कुराते हुए हर दर्द को सहना सीखो 🤍" },
  { slug: "struggle-shayari", title: "Struggle Shayari (संघर्ष शायरी)", keyword: "struggle shayari", badge: "🔥 Struggle", sample: "संघर्ष ही इंसान को मजबूत बनाता है 🔥" },
  { slug: "study-shayari", title: "Study Shayari (पढ़ाई व छात्र शायरी)", keyword: "study shayari", badge: "📚 Study", sample: "किताबों से दोस्ती कर लो, भविष्य संवर जाएगा 📚✨" },
  { slug: "funny-shayari", title: "Funny Shayari (मज़ेदार शायरी)", keyword: "funny shayari", badge: "😂 Funny", sample: "हँसी और मज़ाक से भरी चुनिंदा शायरी 😂" },
];

export const SHAYARI_SUBPAGES: SeoBlueprintPage[] = SHAYARI_SLUGS.map((item) => ({
  slug: item.slug,
  cluster: "shayari",
  title: item.title,
  metaTitle: `${item.title} — 250+ बेहतरीन शेर व दोहे`,
  metaDescription: `Explore 250+ authentic ${item.title} couplets in Hindi and Hinglish with 1-click copy.`,
  primaryKeyword: item.keyword,
  secondaryKeywords: [`best ${item.slug}`, `${item.slug} in hindi`],
  priority: "High",
  badge: item.badge,
  subheading: `Handpicked ${item.title} couplets for WhatsApp status and Instagram captions.`,
  sampleItems: [item.sample],
  faqs: [
    { question: `Are these ${item.badge} couplets authentic?`, answer: "Yes, verified rhyming Hindi couplets with clean typography." }
  ],
}));

// -------------------------------------------------------------
// 5. 👤 BIOS (38 Cleaned Pages)
// -------------------------------------------------------------
const BIO_SLUGS_CLEANED = [
  // Platform-Based (8)
  { slug: "instagram", title: "Instagram Bio Ideas (Aesthetic & VIP)", keyword: "instagram bio", badge: "📸 Instagram Bio", sample: "✨ Living softly • Creating boldly\n📍 Mumbai\n👇 Link below:" },
  { slug: "instagram-boys", title: "Instagram Bio for Boys (Attitude & VIP Swag)", keyword: "instagram bio for boys", badge: "👑 Boys VIP", sample: "👑 King of my own world\n🕶️ Silent moves, loud success\n🚫 No fake friends" },
  { slug: "instagram-girls", title: "Instagram Bio for Girls (Aesthetic Queen)", keyword: "instagram bio for girls", badge: "🌸 Girls Queen", sample: "🌸 Soft heart, sharp mind\n☕ Coffee & Golden Hour\n✨ Creating sunshine" },
  { slug: "linkedin", title: "LinkedIn Bio & Summary Ideas", keyword: "linkedin bio", badge: "💼 LinkedIn", sample: "🚀 Fullstack Engineer | Scaling high-load AI platforms | Tech Writer" },
  { slug: "linkedin-professional", title: "Professional LinkedIn Bio Ideas", keyword: "professional linkedin bio", badge: "👔 Pro LinkedIn", sample: "Executive Leader | Transforming Operations | Speaker & Mentor" },
  { slug: "twitter", title: "Twitter & X Bio Ideas (Witty & Concise)", keyword: "twitter bio ideas", badge: "🐦 Twitter Bio", sample: "Building in public 🚀 Tweeting on AI, leverage & coffee ☕" },
  { slug: "youtube", title: "YouTube Channel Bio & About Ideas", keyword: "youtube channel bio", badge: "▶️ YouTube Bio", sample: "🎥 Daily Tech & AI Tutorials | Helping 100K+ builders ship products" },
  // Identity (8)
  { slug: "boys", title: "Bio for Boys (Royal & Attitude)", keyword: "bio for boys", badge: "🦁 Boys Bio", sample: "🔥 Apni marzi ka maalik • Fitness & Hustle 👑" },
  { slug: "girls", title: "Bio for Girls (Classy & Sassy)", keyword: "bio for girls", badge: "👑 Girls Bio", sample: "👑 Sassy, classy & a bit bad-assy 💅" },
  { slug: "students", title: "Bio for Students (College & Campus)", keyword: "bio for students", badge: "🎓 Students", sample: "🎓 Tech Student '27 • Powered by coffee & deadlines ☕🚀" },
  { slug: "creators", title: "Bio for Content Creators (Growth & Collabs)", keyword: "bio for content creators", badge: "🎥 Creators", sample: "🎥 Content Creator | 100k+ fam | Collabs: hello@brand.com" },
  { slug: "influencers", title: "Bio for Influencers (Lifestyle & Brands)", keyword: "bio for influencers", badge: "✨ Influencers", sample: "✨ Lifestyle & Fashion Creator | DM for PR/Collabs 📩" },
  { slug: "developers", title: "Bio for Developers (Code & Hack)", keyword: "bio for developers", badge: "💻 Developers", sample: "💻 Fullstack Dev | Next.js & AI | Turning coffee into code ☕" },
  { slug: "photographers", title: "Bio for Photographers (Visual Art)", keyword: "bio for photographers", badge: "📸 Photographers", sample: "📸 Sony Alpha | Capturing human emotion | Bookings open 📩" },
  { slug: "gamers", title: "Bio for Gamers (Esports & Streaming)", keyword: "bio for gamers", badge: "🎮 Gamers", sample: "🎮 Esports Athlete | Twitch Streamer | Clutch master 🕹️" },
  // Style/Tone (10)
  { slug: "attitude", title: "Attitude Bio for Instagram", keyword: "attitude bio", badge: "🔥 Attitude Bio", sample: "🔥 Naam hi kaafi hai • Apni marzi ka maalik 👑" },
  { slug: "aesthetic", title: "Aesthetic Bio for Instagram", keyword: "aesthetic bio", badge: "✨ Aesthetic Bio", sample: "☁️ living in my soft era • peace over everything 🕊️" },
  { slug: "short", title: "Short Bio for Instagram", keyword: "short bio for instagram", badge: "⚡ Short Bio", sample: "Unbothered & evolving ✨" },
  { slug: "one-line", title: "One Line Bio Instagram", keyword: "one line bio instagram", badge: "⚡ One-Line", sample: "Less talking, more building 🚀" },
  { slug: "funny", title: "Funny Bio for Instagram", keyword: "funny bio for instagram", badge: "😂 Funny Bio", sample: "Born at a very young age 👶 Award-winning couch potato 🥔" },
  { slug: "savage", title: "Savage Bio for Instagram", keyword: "savage bio for instagram", badge: "🔥 Savage Bio", sample: "I'm not an option, I'm the priority 👑" },
  { slug: "royal", title: "Royal Bio for Instagram", keyword: "royal bio for instagram", badge: "👑 Royal VIP", sample: "👑 Born to rule • No rules, just results 🦁" },
  { slug: "self-respect", title: "Self Respect Bio", keyword: "self respect bio", badge: "👑 Self Respect", sample: "High standards, zero drama 👑" },
  { slug: "motivational", title: "Motivational Bio for Instagram", keyword: "motivational bio for instagram", badge: "💪 Motivation", sample: "🚀 Building an empire in silence • Daily discipline 🔥" },
  { slug: "deep", title: "Deep Bio for Instagram", keyword: "deep bio for instagram", badge: "🌌 Deep Bio", sample: "🌙 Finding peace in silence & starry skies ✨" },
  // Profession (6)
  { slug: "business", title: "Business Bio for Instagram", keyword: "business bio for instagram", badge: "💼 Business", sample: "📈 Helping businesses scale with AI & performance marketing 👇" },
  { slug: "entrepreneur", title: "Entrepreneur Bio", keyword: "entrepreneur bio", badge: "🚀 Entrepreneur", sample: "🚀 Founder @ Startup | Building the future of commerce 💎" },
  { slug: "freelancer", title: "Freelancer Bio", keyword: "freelancer bio", badge: "✍️ Freelancer", sample: "✍️ Freelance UI Designer | Available for select projects 📩" },
  { slug: "fitness", title: "Fitness Bio for Instagram", keyword: "fitness bio for instagram", badge: "🏋️ Fitness", sample: "🏋️ Certified Fitness Coach | 100% natural transformations 👇" },
  { slug: "artist", title: "Artist Bio for Instagram", keyword: "artist bio for instagram", badge: "🎨 Artist", sample: "🎨 Visual Artist & Painter | Custom commissions open 🖼️" },
  { slug: "travel", title: "Travel Bio for Instagram", keyword: "travel bio for instagram", badge: "✈️ Travel", sample: "✈️ 24 countries & counting | Chasing mountain sunrises 🏔️" },
  // Special Format (6)
  { slug: "emoji", title: "Instagram Bio with Emoji", keyword: "instagram bio with emoji", badge: "✨ Emoji Bio", sample: "☕ • 📚 • ✈️ • Living life in full color 🌈" },
  { slug: "fancy", title: "Fancy Bio for Instagram", keyword: "fancy bio for instagram", badge: "💎 Fancy Bio", sample: "★》𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐦𝐲 𝐏𝐫𝐨𝐟𝐢𝐥𝐞《★\n👑 𝐕𝐈𝐏 𝐀𝐭𝐭𝐢𝐭𝐮𝐝𝐞" },
  { slug: "stylish", title: "Stylish Bio for Instagram", keyword: "stylish bio for instagram", badge: "✨ Stylish", sample: "♛ Official Account ♛\nWish Me on 15 May 🎂" },
  { slug: "couple", title: "Couple Bio for Instagram", keyword: "couple bio for instagram", badge: "❤️ Couple", sample: "🔒 Taken by my favorite human ❤️ 14.02.2023 💍" },
  { slug: "gym", title: "Gym Bio for Instagram", keyword: "gym bio for instagram", badge: "💪 Gym", sample: "💪 Sweat today, shine tomorrow • Iron addict 🏋️" },
  { slug: "quotes", title: "Bio Quotes for Instagram", keyword: "bio quotes for instagram", badge: "💬 Bio Quotes", sample: "\"Do what they think you can't do.\" 🚀" },
];

export const BIOS_SUBPAGES: SeoBlueprintPage[] = BIO_SLUGS_CLEANED.map((item) => ({
  slug: item.slug,
  cluster: "bio",
  title: item.title,
  metaTitle: `${item.title} — 200+ Stylish & VIP Profile Ideas`,
  metaDescription: `Discover 200+ ${item.title.toLowerCase()} with line breaks and aesthetic emojis. 1-click copy ready.`,
  primaryKeyword: item.keyword,
  secondaryKeywords: [`best ${item.slug} bio`, `${item.slug} bio ideas`],
  priority: "High",
  badge: item.badge,
  subheading: `Handpicked ${item.title} with formatted line breaks and emojis.`,
  sampleItems: [item.sample],
  faqs: [
    { question: `How to copy these ${item.badge} bios?`, answer: "Click 'Copy Bio' and paste directly into your profile settings." }
  ],
}));

// -------------------------------------------------------------
// 6. 💬 QUOTES (38 Cleaned Pages)
// -------------------------------------------------------------
const QUOTES_SLUGS_CLEANED = [
  // Core (10)
  { slug: "motivational", title: "Motivational Quotes (Discipline & Hustle)", keyword: "motivational quotes", badge: "💪 Motivation", sample: "\"Discipline is choosing between what you want now and what you want most.\"" },
  { slug: "life", title: "Life Quotes (Deep Lessons & Perspectives)", keyword: "life quotes", badge: "🌿 Life Lessons", sample: "\"Life is 10% what happens to you and 90% how you react to it.\"" },
  { slug: "attitude", title: "Attitude Quotes in English (Confidence)", keyword: "attitude quotes", badge: "👑 Attitude", sample: "\"I don't hold grudges. I improve my standards and move forward.\"" },
  { slug: "love", title: "Love Quotes (Romantic & Soulmate)", keyword: "love quotes", badge: "❤️ Love", sample: "\"In all the world, there is no heart for me like yours.\"" },
  { slug: "sad", title: "Sad Quotes About Life (Emotional Healing)", keyword: "sad quotes", badge: "💔 Sad Healing", sample: "\"Heavy hearts are best relieved by letting a little water out.\"" },
  { slug: "friendship", title: "Friendship Quotes (Loyalty & BFF)", keyword: "friendship quotes", badge: "🤝 Friendship", sample: "\"A real friend walks in when the rest of the world walks out.\"" },
  { slug: "inspirational", title: "Inspirational Quotes (Hope & Courage)", keyword: "inspirational quotes", badge: "✨ Inspiration", sample: "\"Focus on building the new, not fighting the old.\"" },
  { slug: "success", title: "Success Quotes (Grit & Winner Mindset)", keyword: "success quotes", badge: "🏆 Success", sample: "\"Success is not final, failure is not fatal: courage counts.\"" },
  { slug: "short", title: "Short Quotes About Life (Minimalist)", keyword: "short quotes", badge: "⚡ Short", sample: "\"Simplicity is the ultimate sophistication.\"" },
  // Mindset/Growth (8)
  { slug: "discipline", title: "Discipline Quotes (Consistency & Focus)", keyword: "discipline quotes", badge: "🎯 Discipline", sample: "\"Small daily disciplines repeated consistently lead to massive results.\"" },
  { slug: "hard-work", title: "Hard Work Quotes (Grit & Hustle)", keyword: "hard work quotes", badge: "🔨 Hard Work", sample: "\"Hard work beats talent when talent fails to work hard.\"" },
  { slug: "focus", title: "Focus Quotes (Laser Attention & Flow)", keyword: "focus quotes", badge: "🎯 Focus", sample: "\"Starve your distractions, feed your focus.\"" },
  { slug: "dreams", title: "Dream Quotes (Vision & Ambition)", keyword: "dream quotes", badge: "✨ Dreams", sample: "\"The future belongs to those who believe in the beauty of their dreams.\"" },
  { slug: "leadership", title: "Leadership Quotes (Influence & Integrity)", keyword: "leadership quotes", badge: "👔 Leadership", sample: "\"A leader is one who knows the way, goes the way, and shows the way.\"" },
  { slug: "self-respect", title: "Self Respect Quotes (High Standards)", keyword: "self respect quotes", badge: "👑 Self Respect", sample: "\"Never beg for a seat at a table where you aren't respected.\"" },
  { slug: "confidence", title: "Confidence Quotes (Self-Belief)", keyword: "confidence quotes", badge: "🦁 Confidence", sample: "\"Confidence comes not from always being right, but from not fearing to be wrong.\"" },
  { slug: "courage", title: "Courage Quotes (Bravery & Boldness)", keyword: "courage quotes", badge: "🔥 Courage", sample: "\"Courage doesn't always roar. Sometimes it's the quiet voice saying I will try again.\"" },
  // Lifestyle (8)
  { slug: "gym", title: "Gym & Fitness Motivation Quotes", keyword: "gym quotes", badge: "🏋️ Gym", sample: "\"The body achieves what the mind believes.\"" },
  { slug: "study", title: "Study & Exam Motivation Quotes", keyword: "study quotes", badge: "📚 Study", sample: "\"The expert in anything was once a beginner.\"" },
  { slug: "travel", title: "Travel & Adventure Quotes", keyword: "travel quotes", badge: "✈️ Travel", sample: "\"Travel is the only thing you buy that makes you richer.\"" },
  { slug: "morning", title: "Good Morning Quotes (Fresh Optimism)", keyword: "good morning quotes", badge: "☀️ Morning", sample: "\"Every sunrise is an invitation to brighten someone's day.\"" },
  { slug: "business", title: "Business & Entrepreneurship Quotes", keyword: "business quotes", badge: "💼 Business", sample: "\"The best way to predict the future is to create it.\"" },
  { slug: "money", title: "Money & Wealth Mindset Quotes", keyword: "money quotes", badge: "💰 Money", sample: "\"Money is a great servant but a bad master.\"" },
  { slug: "family", title: "Family Quotes (Love & Home)", keyword: "family quotes", badge: "🏡 Family", sample: "\"Family is not an important thing. It's everything.\"" },
  { slug: "friends", title: "Friends Quotes (Companionship)", keyword: "friends quotes", badge: "🤝 Friends", sample: "\"Good friends are like stars: you don't always see them, but they're always there.\"" },
  // Emotional (6)
  { slug: "heartbreak", title: "Heartbreak & Healing Quotes", keyword: "heartbreak quotes", badge: "💔 Heartbreak", sample: "\"Sometimes good things fall apart so better things can fall together.\"" },
  { slug: "alone", title: "Being Alone Quotes (Solitude & Peace)", keyword: "being alone quotes", badge: "🌙 Alone", sample: "\"Solitude is where I place my chaos to rest.\"" },
  { slug: "happiness", title: "Happiness Quotes (Joy & Contentment)", keyword: "happiness quotes", badge: "😊 Happiness", sample: "\"Happiness is not something ready-made. It comes from your own actions.\"" },
  { slug: "smile", title: "Smile Quotes (Positivity & Warmth)", keyword: "smile quotes", badge: "😄 Smile", sample: "\"A smile is the prettiest thing you can wear.\"" },
  { slug: "hope", title: "Hope Quotes (Strength in Dark Times)", keyword: "hope quotes", badge: "🕊️ Hope", sample: "\"Hope is the only thing stronger than fear.\"" },
  { slug: "peace", title: "Peace & Calm Mindset Quotes", keyword: "peace quotes", badge: "🕊️ Peace", sample: "\"Peace begins with a smile.\"" },
  // Platform/Format (6)
  { slug: "instagram", title: "Quotes for Instagram (Aesthetic Feed)", keyword: "quotes for instagram", badge: "📸 Insta Quotes", sample: "\"Living in a world created by my own imagination ✨\"" },
  { slug: "whatsapp", title: "Quotes for WhatsApp Status", keyword: "quotes for whatsapp", badge: "💬 WhatsApp", sample: "\"Silent moves, loud results 🦁\"" },
  { slug: "one-line", title: "One Line Quotes (Punchy Wisdom)", keyword: "one line quotes", badge: "⚡ One-Line", sample: "\"Be yourself; everyone else is already taken.\"" },
  { slug: "deep", title: "Deep Quotes (Existential Wisdom)", keyword: "deep quotes", badge: "🌌 Deep", sample: "\"We suffer more often in imagination than in reality.\"" },
  { slug: "aesthetic", title: "Aesthetic Quotes (Poetic Reflections)", keyword: "aesthetic quotes", badge: "🌸 Aesthetic", sample: "\"There is a quiet beauty in healing in private and blooming in public.\"" },
  { slug: "two-line", title: "2 Line Quotes (Short Couplets)", keyword: "2 line quotes", badge: "⚡ 2-Line", sample: "\"Stay patient and trust your journey.\"" },
];

export const QUOTES_SUBPAGES: SeoBlueprintPage[] = QUOTES_SLUGS_CLEANED.map((item) => ({
  slug: item.slug,
  cluster: "quotes",
  title: item.title,
  metaTitle: `${item.title} — 200+ Timeless & Impactful Quotes`,
  metaDescription: `Discover 200+ ${item.title.toLowerCase()} for daily motivation, captions, and WhatsApp status.`,
  primaryKeyword: item.keyword,
  secondaryKeywords: [`best ${item.slug} quotes`, `${item.slug} wisdom quotes`],
  priority: "High",
  badge: item.badge,
  subheading: `Handpicked ${item.title} ready to inspire and copy with 1-click.`,
  sampleItems: [item.sample],
  faqs: [
    { question: `How to share these ${item.badge} quotes?`, answer: "Click 'Copy' to copy quote with author attribution directly to your clipboard." }
  ],
}));

// Master lookup helper
export function getSeoBlueprintPage(cluster: string, slug: string): SeoBlueprintPage | undefined {
  if (cluster === "ai-caption") return AI_CAPTION_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "ai-bio") return AI_BIO_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "ai-status") return AI_STATUS_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "ai-shayari") return AI_SHAYARI_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "ai-quote") return AI_QUOTE_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "instagram") return INSTAGRAM_CAPTIONS_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "whatsapp") return WHATSAPP_STATUS_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "shayari") return SHAYARI_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "bio") return BIOS_SUBPAGES.find((p) => p.slug === slug);
  if (cluster === "quotes") return QUOTES_SUBPAGES.find((p) => p.slug === slug);
  return undefined;
}
