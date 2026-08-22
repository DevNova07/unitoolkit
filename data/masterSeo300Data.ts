// =========================================================================
// 🚀 Complete Website SEO Blueprint — Master 300 Pages Data Registry
// Covers all 15 Sections: Core, Platforms (10 x 5), AI Tools, Topics, Blog, Bonus
// =========================================================================

export interface MasterSeoPage {
  id: string;
  route: string;
  section: number;
  sectionName: string;
  platform?: string;
  contentType: "captions" | "bio" | "status" | "shayari" | "quotes" | "ai-tool" | "topic" | "blog" | "bonus" | "core";
  subCategory?: string;
  h1: string;
  h2s: string[];
  h3s: string[];
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  badge: string;
  subheading: string;
  sampleItems: string[];
  faqs: { question: string; answer: string }[];
  relatedRoutes?: string[];
  categoryFilter?: string;
}

// -------------------------------------------------------------
// SECTION 1: CORE / MAIN PAGES (10 Pages)
// -------------------------------------------------------------
export const CORE_PAGES: MasterSeoPage[] = [
  {
    id: "core-home",
    route: "/",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Best Social Media Captions, Bios, Status & AI Generator [2026]",
    h2s: ["Trending Instagram Captions", "WhatsApp Status Quotes", "Hindi & English Shayari", "AI Caption & Bio Generators", "Free Social Media Growth Tools"],
    h3s: ["Attitude Captions", "Love & Romantic Lines", "Sad & Heartbreak Status", "Funny Captions for Friends", "Motivational Quotes for Success"],
    metaTitle: "Unitoolkit — Best Captions, Bios, Status & Free AI Tools [2026]",
    metaDescription: "10,000+ curated Instagram captions, WhatsApp status, aesthetic bios, Hindi shayari, quotes, and free AI social media generators. 1-click copy.",
    primaryKeyword: "best captions bios status 2026",
    secondaryKeywords: ["instagram captions", "whatsapp status", "hindi shayari", "ai caption generator"],
    badge: "🔥 10,000+ Curated Lines",
    subheading: "The ultimate creator toolkit for viral Instagram reels, WhatsApp status, aesthetic bios, and AI-powered copy.",
    sampleItems: [
      "Silent moves, loud results. ⚡ Living in my own chapter.",
      "Aesthetic mind, chaotic soul ✨ Coffee in one hand, dreams in another.",
      "जो खामोशी समझ ले, वही सच्चा हमसफ़र है। ❤️🌿",
      "Building my empire in silence. Let success make the noise. 👑",
    ],
    faqs: [
      { question: "Are all captions and tools free on Unitoolkit?", answer: "Yes, 100% of our curated lines, tools, and AI generators are free to use with 1-click copy." },
      { question: "How often is the content updated?", answer: "We update our trending captions, quotes, and status lines daily." },
    ],
  },
  {
    id: "core-about",
    route: "/about",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "About Unitoolkit — Empowering 1M+ Social Creators Daily",
    h2s: ["Our Mission & Vision", "What We Build", "Why Creators Choose Us", "Editorial Integrity"],
    h3s: ["Instant AI Workflows", "Culturally Rich Shayari & Status", "Zero Spam, 1-Click Copy"],
    metaTitle: "About Us | Unitoolkit Social Creator Suite",
    metaDescription: "Learn about Unitoolkit mission to provide creators with high-converting social media captions, viral bios, and free AI tools.",
    primaryKeyword: "about unitoolkit",
    secondaryKeywords: ["social media caption tool", "creator toolkit"],
    badge: "🌟 Creator First",
    subheading: "Unitoolkit simplifies social media storytelling for millions of content creators, influencers, and brands worldwide.",
    sampleItems: ["Empowering modern creators with speed, aesthetic typography, and viral hooks."],
    faqs: [
      { question: "Who creates the captions and tools on Unitoolkit?", answer: "Our editorial team of social media strategists and copywriters curate and verify every collection." },
    ],
  },
  {
    id: "core-contact",
    route: "/contact",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Contact Unitoolkit Support & Partnerships",
    h2s: ["Get in Touch With Our Team", "Feature Requests & Feedback", "Brand Collaboration Opportunities"],
    h3s: ["Creator Partnerships", "API Inquiries", "Bug Reports"],
    metaTitle: "Contact Us | Unitoolkit Support & Partnerships",
    metaDescription: "Have a question, feedback, or brand partnership inquiry? Reach out to the Unitoolkit editorial and support team.",
    primaryKeyword: "contact unitoolkit",
    secondaryKeywords: ["customer support", "feedback", "partnerships"],
    badge: "📬 24/7 Support",
    subheading: "We'd love to hear from you. Send us your feedback, tool requests, or collaboration proposals.",
    sampleItems: ["Reach our team anytime via email or feedback form."],
    faqs: [
      { question: "How quickly does support respond?", answer: "We respond to all creator inquiries within 24 business hours." },
    ],
  },
  {
    id: "core-privacy",
    route: "/privacy-policy",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Privacy Policy — How Unitoolkit Protects Your Data",
    h2s: ["Information We Collect", "How We Use Data", "Cookies & Analytics", "Your Rights"],
    h3s: ["Zero Account Required", "No Personal Data Storage", "AI Generation Privacy"],
    metaTitle: "Privacy Policy | Unitoolkit",
    metaDescription: "Read Unitoolkit privacy policy to understand how we respect your privacy with zero mandatory account signup.",
    primaryKeyword: "unitoolkit privacy policy",
    secondaryKeywords: ["privacy policy", "data protection"],
    badge: "🔒 Privacy First",
    subheading: "We believe in privacy by design. We do not store personal AI generation prompts or require unnecessary logins.",
    sampleItems: ["Your privacy is strictly guarded."],
    faqs: [
      { question: "Does Unitoolkit store my AI generation queries?", answer: "No, queries are processed transiently in-memory and never sold or persisted." },
    ],
  },
  {
    id: "core-terms",
    route: "/terms-of-service",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Terms of Service — Unitoolkit",
    h2s: ["Terms of Use", "Intellectual Property Rights", "User Conduct", "Disclaimer of Warranties"],
    h3s: ["Fair Use Policy", "Commercial Copy Usage", "AI Output Licensing"],
    metaTitle: "Terms of Service | Unitoolkit",
    metaDescription: "Unitoolkit Terms of Service guidelines governing the usage of our free tools, generators, and caption databases.",
    primaryKeyword: "unitoolkit terms of service",
    secondaryKeywords: ["terms and conditions", "user agreement"],
    badge: "📜 User Agreement",
    subheading: "Clear, transparent guidelines on how to freely use our captions, quotes, and AI tools for personal and commercial projects.",
    sampleItems: ["Free for personal and creator usage."],
    faqs: [
      { question: "Can I use Unitoolkit captions for commercial client accounts?", answer: "Yes, you have full rights to use generated captions and quotes in your social posts and campaigns." },
    ],
  },
  {
    id: "core-disclaimer",
    route: "/disclaimer",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Disclaimer — Unitoolkit",
    h2s: ["General Information", "No Professional Advice", "Third-Party Social Media Marks"],
    h3s: ["Platform Trademarks (Instagram, WhatsApp, TikTok)", "AI Output Accuracy"],
    metaTitle: "Disclaimer | Unitoolkit",
    metaDescription: "Important disclaimer information regarding third-party social media brand trademarks and AI generated output.",
    primaryKeyword: "unitoolkit disclaimer",
    secondaryKeywords: ["legal disclaimer", "trademarks notice"],
    badge: "⚖️ Legal Notice",
    subheading: "All third-party trademarks (Instagram, WhatsApp, TikTok, YouTube, etc.) belong to their respective owners.",
    sampleItems: ["Independent creator tool suite."],
    faqs: [
      { question: "Is Unitoolkit affiliated with Instagram or Meta?", answer: "No, Unitoolkit is an independent third-party tool and content repository for creators." },
    ],
  },
  {
    id: "core-sitemap",
    route: "/sitemap",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Website Sitemap — Complete 300+ Pages Directory",
    h2s: ["Platform Captions Hubs", "AI Content Generators", "Special Topic Vaults", "Blog Guides & Tutorials", "Creator Utility Tools"],
    h3s: ["Instagram Directory", "WhatsApp Status Hub", "YouTube & TikTok Vaults", "Hindi Shayari Archives"],
    metaTitle: "Sitemap — All 300+ Pages & Tools | Unitoolkit",
    metaDescription: "Browse the complete visual sitemap of Unitoolkit. 300+ pages covering Instagram captions, WhatsApp status, AI generators, and blog articles.",
    primaryKeyword: "unitoolkit sitemap",
    secondaryKeywords: ["website directory", "all tools list"],
    badge: "🗺️ 300+ Pages Directory",
    subheading: "Explore all 300+ curated pages, tools, platform hubs, and blog articles across Unitoolkit in one place.",
    sampleItems: ["Direct index to all 300 pages."],
    faqs: [
      { question: "How do I find a specific caption category?", answer: "Use our visual sitemap or the instant search bar to find any sub-niche in milliseconds." },
    ],
  },
  {
    id: "core-blog",
    route: "/blog",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Creator Blog — Social Media Growth, Hooks & Algorithm Tips",
    h2s: ["Latest Guides & Articles", "Instagram Growth Playbooks", "Viral Hook Formulas", "AI Content Strategies"],
    h3s: ["Reel Retention Tips", "Bio Optimization Guides", "Hashtag Research Frameworks"],
    metaTitle: "Creator Blog — Social Media Growth & Caption Tips [2026] | Unitoolkit",
    metaDescription: "Read in-depth guides on Instagram growth, viral TikTok hooks, WhatsApp status ideas, and AI copywriting tips.",
    primaryKeyword: "social media creator blog",
    secondaryKeywords: ["instagram tips", "reels guide", "viral hooks"],
    badge: "📰 25+ Master Guides",
    subheading: "Actionable frameworks and algorithm strategies to grow your social audience organically.",
    sampleItems: ["Proven growth strategies backed by data."],
    faqs: [
      { question: "How often are new articles published?", answer: "We publish new social media algorithm breakdowns and copywriting guides weekly." },
    ],
  },
  {
    id: "core-tools",
    route: "/tools",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "All Creator Tools — Free AI Generators & Formatting Utilities",
    h2s: ["AI Content Generators", "Text & Font Utilities", "Platform Specific Tools", "Hashtag & Analytics Helpers"],
    h3s: ["Caption Generator", "Aesthetic Font Styler", "VIP Bio Generator", "WhatsApp Status Maker"],
    metaTitle: "All Free Creator Tools & AI Generators [2026] | Unitoolkit",
    metaDescription: "Explore 20+ free creator tools: AI Caption Generator, Aesthetic Font Styler, VIP Bio Creator, Hashtag Finder, and Shayari Maker.",
    primaryKeyword: "free creator tools",
    secondaryKeywords: ["ai social media tools", "caption generator", "font styler"],
    badge: "🧰 20+ Free Tools",
    subheading: "Everything you need to write, format, style, and generate viral social media content in seconds.",
    sampleItems: ["100% free with unlimited generations."],
    faqs: [
      { question: "Do I need to install any software to use these tools?", answer: "No, all tools run 100% in your browser on desktop and mobile." },
    ],
  },
  {
    id: "core-search",
    route: "/search",
    section: 1,
    sectionName: "Core Pages",
    contentType: "core",
    h1: "Search All Captions, Bios, Quotes & Tools",
    h2s: ["Instant Search", "Popular Searches", "Browse by Mood", "Browse by Platform"],
    h3s: ["Attitude Captions", "Love Shayari", "Motivational Quotes", "Aesthetic Bios"],
    metaTitle: "Search Captions, Bios, Status & Quotes | Unitoolkit",
    metaDescription: "Find the exact caption, WhatsApp status, Hindi shayari, or AI tool from our 10,000+ database instantly.",
    primaryKeyword: "search captions quotes bios",
    secondaryKeywords: ["find captions", "social search"],
    badge: "🔍 Instant Search Engine",
    subheading: "Type any keyword (e.g., 'attitude', 'selfie', 'royal', 'sad') to find matching lines and tools instantly.",
    sampleItems: ["Search across 10,000+ curated quotes and captions."],
    faqs: [
      { question: "Can I search in Hindi and Hinglish?", answer: "Yes, our search engine understands Hindi, Roman Hinglish, and English queries." },
    ],
  },
];

// -------------------------------------------------------------
// SECTIONS 2 to 11: PLATFORMS (10 Platforms x 5 Types = 200 Subpages)
// -------------------------------------------------------------
export interface BlueprintSubpage {
  type: "captions" | "bio" | "status" | "shayari" | "quotes";
  slug: string;
  title: string;
  subheading: string;
  h2s: string[];
  h3s: string[];
  sampleItems: string[];
}

export interface PlatformBlueprint {
  id: string;
  name: string;
  section: number;
  badge: string;
  color: string;
  subpages: BlueprintSubpage[];
}

export const ALL_PLATFORM_BLUEPRINTS: PlatformBlueprint[] = [
  // SECTION 2: INSTAGRAM (30 Pages)
  {
    id: "instagram",
    name: "Instagram",
    section: 2,
    badge: "📸 Instagram",
    color: "#E1306C",
    subpages: [
      { type: "captions", slug: "attitude", title: "Best Attitude Captions for Instagram [2026] — Hindi & English", subheading: "Royal attitude, swag, and killer captions for boys & girls with 1-click copy.", h2s: ["Top Attitude Captions for Instagram Boys", "Top Attitude Captions for Instagram Girls", "Attitude Captions in Hindi", "One-Word Attitude Captions"], h3s: ["Short Attitude Lines", "Royal Attitude Status", "Savage Caption Ideas"], sampleItems: ["I am not a second option, either you choose me or lose me. 👑", "Silent moves, loud success. Let them wonder. ⚡", "हथियार तो सिर्फ शौक के लिए रखते हैं, खौफ के लिए तो बस नाम ही काफी है। 🔥", "Born to express, never to impress. ✨"] },
      { type: "captions", slug: "love", title: "Best Love Captions for Instagram [2026] — Romantic Lines", subheading: "Heart-touching couple captions, romantic reel lines, and cute captions for your soulmate.", h2s: ["Romantic Couple Captions", "Cute Love Captions for Her", "Deep Love Captions for Him", "Love Captions in Hindi"], h3s: ["Short Romantic Lines", "Soulmate Quotes", "Anniversary Captions"], sampleItems: ["In your smile, I found my favorite view. ❤️", "Every love story is beautiful, but ours is my favorite. 🌿", "तेरी एक मुस्कान ही काफी है मेरी पूरी दुनिया महकाने के लिए। 🌸"] },
      { type: "captions", slug: "sad", title: "Sad & Heartbreak Captions for Instagram [2026]", subheading: "Deep emotional lines, broken heart status, and lonely aesthetic quotes for dark moods.", h2s: ["Emotional Heartbreak Captions", "Silent Pain Captions", "Sad Captions in Hindi", "Deep Aesthetic Melancholy"], h3s: ["Short Sad Lines", "Alone Quotes", "Heartache Verses"], sampleItems: ["The silence speaks when words lose their worth. 💔", "Smiling outside, healing inside. 🌧️", "कुछ दर्द ऐसे होते हैं जो आंसुओं में भी बयां नहीं होते।"] },
      { type: "captions", slug: "funny", title: "Funny Captions for Instagram [2026] — Sarcastic & Witty", subheading: "Humorous lines, funny selfie quotes, and witty sarcasm to make your friends laugh in comments.", h2s: ["Hilarious Selfie Captions", "Sarcastic Caption Ideas", "Funny Captions for Best Friends", "Food & Weekend Humor"], h3s: ["Short Funny Lines", "Witty Comebacks", "Relatable Memes"], sampleItems: ["I need a six-month vacation, twice a year. 😂", "My bed and I are in a serious relationship, but my alarm is jealous. ⏰", "वजन तो कम कर लूं, पर मेरे अंदर का खाने वाला बच्चा नहीं मानता! 🍕"] },
      { type: "captions", slug: "motivational", title: "Motivational Captions for Instagram [2026] — Hustle & Grind", subheading: "Inspiring gym quotes, success mindset lines, and ambitious daily affirmations.", h2s: ["Daily Grind & Hustle Captions", "Gym & Fitness Motivation", "Success Mindset Quotes", "Motivational Lines in Hindi"], h3s: ["Short Power Quotes", "Discipline Affirmations", "Morning Motivation"], sampleItems: ["Don't stop when you're tired, stop when you're done. ⚡", "Discipline is choosing between what you want now and what you want most. 🏆", "सपनों को सच करने के लिए नींद नहीं, जिद्द चाहिए। 💥"] },
      { type: "captions", slug: "selfie", title: "Best Selfie Captions for Instagram [2026]", subheading: "Aesthetic, confident, and golden hour captions for your selfie and portrait photos.", h2s: ["Golden Hour Selfie Captions", "Confidence & Self Love Captions", "Short Selfie Lines", "Cute & Sassy Selfie Ideas"], h3s: ["Minimalist Selfie Quotes", "Mirror Selfie Lines", "Sun-Kissed Vibes"], sampleItems: ["Golden hour glow & peaceful mind. ✨", "Confidence level: Selfie with no filter. 📸", "Be a voice, not an echo. 🌿"] },
      { type: "captions", slug: "hindi", title: "Best Instagram Captions in Hindi [2026] — हिंदी स्टेटस", subheading: "Authentic Devanagari Hindi captions for attitude, dosti, pyar, and motivation.", h2s: ["हिंदी एटीट्यूड कैप्शन्स", "प्यार और मोहब्बत कैप्शन्स", "दोस्ती और यारी स्टेटस", "जिंदगी और मोटिवेशन"], h3s: ["रॉयल तेवर", "दिल छू लेने वाली बातें", "शायराना अंदाज"], sampleItems: ["किस्मत की लकीरों पर नहीं, अपनी मेहनत के पसीने पर भरोसा है। 🔥", "दिलों पर राज वही करते हैं जिनके लफ़्ज़ों में सच्चाई होती है। ❤️"] },
      { type: "captions", slug: "for-boys", title: "Instagram Captions for Boys [2026] — Royal Swag & Attitude", subheading: "Desi king attitude, handsome styling, and boss boy captions for Instagram.", h2s: ["Royal Attitude Captions for Boys", "Gentleman & Boss Mindset", "Gym & Hustle Boys Captions", "Desi Swag & Tevar"], h3s: ["Short Boys Lines", "King Mindset", "Biker & Car Captions"], sampleItems: ["A real king makes his queen feel like royalty, not rival. 👑", "Never chase what wants to run. Build your worth. ⚡"] },
      { type: "captions", slug: "for-girls", title: "Instagram Captions for Girls [2026] — Queen Energy & Sassy", subheading: "Aesthetic, sassy, cute, and boss babe captions for girls' photos and reels.", h2s: ["Queen Energy & Boss Babe Captions", "Sassy & Classy Captions", "Cute & Soft Era Aesthetic", "Traditional & Saree Captions"], h3s: ["Short Girls Quotes", "Princess Swag", "Smile Captions"], sampleItems: ["She remembered who she was and the game changed. 👑✨", "Sweet as sugar, hard as ice, hurt me once, I’ll break you twice. 💅"] },
      { type: "bio", slug: "attitude", title: "Best Attitude Bio for Instagram [2026] — Copy-Paste Ready", subheading: "Royal, VIP, and badmashi bios for Instagram with cool font styling and emojis.", h2s: ["Attitude Bio for Instagram Boys", "Attitude Bio for Instagram Girls", "Attitude Bio in Hindi", "VIP Account Bio Ideas"], h3s: ["Royal Swag Bios", "One-Line Bio", "Symbol Formatted Bio"], sampleItems: ["👑 King of My Own Rules\n⚡ Simple Living, High Thinking\n🎂 Wish Me on 12th Jan\n🔥 Attitude Depends on How You Treat Me"] },
      { type: "bio", slug: "love", title: "Romantic & Couple Instagram Bio Ideas [2026]", subheading: "Cute relationship bios, aesthetic love bios, and couple matching bio text.", h2s: ["Couple Matching Bio Ideas", "Aesthetic Love Bios", "One-Line Romantic Bio", "Romantic Bios in Hindi"], h3s: ["Initials & Heart Bios", "Love Quotes in Bio", "Soulmate Bio Lines"], sampleItems: ["❤️ Locked with @username\n🌿 Building our forever together\n✨ Dreamer & Believer"] },
      { type: "bio", slug: "funny", title: "Funny Instagram Bio Ideas [2026] — Witty & Sarcastic", subheading: "Hilarious bios that make visitors laugh and hit the follow button instantly.", h2s: ["Sarcastic Bio Ideas", "Relatable Humor Bios", "Short Funny Bio Lines", "Meme Lover Bios"], h3s: ["Self-Deprecating Humor", "Foodie Funny Bios", "Procrastinator Bios"], sampleItems: ["Professional overthinker & snack enthusiast 🍕\nProbably taking a nap right now 😴"] },
      { type: "bio", slug: "stylish", title: "Stylish Instagram Bio Ideas [2026] — Aesthetic Fonts & Emojis", subheading: "Aesthetic formatting, VIP fonts, minimalist layouts, and clean spacing for profiles.", h2s: ["VIP Stylish Account Bio", "Minimalist Aesthetic Bio", "Fancy Font Bios", "Creator & Influencer Bios"], h3s: ["Clean Bullet Bios", "Monochrome Aesthetic", "Blogger Bio Formats"], sampleItems: ["✦ Visual Storyteller 📸\n✦ Architect of my own reality\n✦ New Delhi | London ✨"] },
      { type: "bio", slug: "for-boys", title: "Instagram Bio for Boys [2026] — Royal & Swag", subheading: "King attitude, fitness enthusiast, biker, and gentleman bio ideas for boys.", h2s: ["Royal Rajputana / King Bio", "Fitness & Gym Lover Bio", "Biker & Traveler Bio for Boys", "Gentleman Swag Bio"], h3s: ["Short Boys Bios", "Khatarnak Tevar Bios", "Official Account Bios"], sampleItems: ["★》King Mindset 👑\n★》Gym Addict 🏋️‍♂️\n★》Self Made ⚡"] },
      { type: "bio", slug: "for-girls", title: "Instagram Bio for Girls [2026] — Aesthetic & Queen Vibes", subheading: "Classy, cute, aesthetic girl, and boss babe bio templates with emojis.", h2s: ["Aesthetic Girl Bio Ideas", "Cute & Classy Bios", "Boss Babe Entrepreneur Bio", "Traditional & Desi Girl Bio"], h3s: ["Minimalist Girl Bios", "Soft Aesthetic Lines", "Dream Chaser Bios"], sampleItems: ["🌸 Soft heart, strong spirit\n✨ Creating my own sunshine\n☕ Books & Coffee Lover"] },
      { type: "bio", slug: "hindi", title: "Instagram Bio in Hindi [2026] — हिंदी बायो", subheading: "Desi tevar, mahakal bhakt, and hindi shayari formatted bio templates.", h2s: ["महाकाल भक्त बायो", "रॉयल हिंदी बायो", "जिंदगी और शायरी बायो", "देसी तेवर स्टेटस बायो"], h3s: ["धार्मिक बायो", "शायराना बायो", "एक पंक्ति हिंदी बायो"], sampleItems: ["🚩 महाकाल का दीवाना\n👑 अपनी मर्जी का मालिक\n⚡ दिल साफ, तेवर सख्त"] },
      { type: "status", slug: "attitude", title: "Attitude Status for Instagram [2026] — Story & Notes", subheading: "Killer 1-line and 2-line attitude status lines for Instagram Story and Notes.", h2s: ["Instagram Notes Attitude Status", "Story Attitude Quotes", "Royal Tevar Status", "Hindi Attitude Status for Insta"], h3s: ["Short Notes Lines", "Savage Status", "Boss Quotes"], sampleItems: ["Silence is my answer to fools. ⚡", "I don't compete, I dominate. 👑"] },
      { type: "status", slug: "love", title: "Love Status for Instagram [2026] — Story & Notes", subheading: "Sweet, romantic, and soul-stirring love status lines for your partner.", h2s: ["Instagram Story Love Status", "Romantic Notes Lines", "Hindi Love Status for Instagram", "Soulmate Status Ideas"], h3s: ["Short Couple Lines", "Deep Love Notes", "Heartwarming Status"], sampleItems: ["You're my today and all of my tomorrows. ❤️", "तेरा ख्याल भी क्या खूब है, आते ही चेहरा मुस्कुरा देता है। 🌸"] },
      { type: "status", slug: "sad", title: "Sad Status for Instagram [2026] — Emotional Stories", subheading: "Dard, heartbreak, and emotional status lines for broken moments.", h2s: ["Broken Heart Instagram Status", "Silent Tears & Pain Status", "Hindi Sad Status for Instagram", "Alone & Healing Quotes"], h3s: ["Deep Melancholy Lines", "Lonely Night Notes", "Lost Love Verses"], sampleItems: ["Tired of being strong all the time. 🌧️", "कुछ लोग सिर्फ यादों में ही अच्छे लगते हैं। 💔"] },
      { type: "shayari", slug: "love", title: "Love Shayari for Instagram [2026] — Romantic Hindi Verses", subheading: "Heart-touching Mohabbat and Ishq shayari in Hindi & Hinglish for Reels and posts.", h2s: ["Best Romantic Love Shayari", "2-Line Love Shayari in Hindi", "Pyaar Mohabbat Shayari", "Cute Shayari for Crush"], h3s: ["दिल छूने वाली शायरी", "रोमांटिक शेर", "इश्क और वफा"], sampleItems: ["तेरी यादें, तेरी बातें और तेरा ही ख्याल,\nइश्क में हम तो बेहाल हो गए! ❤️", "खुशबू बनकर तेरी सांसों में समा जाएंगे,\nसकून बनकर तेरे दिल में उतर जाएंगे। 🌸"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for Instagram [2026] — रॉयल तेवर शायरी", subheading: "Khatarnak tevar, dushman jalane wali, and royal swag shayari in Hindi.", h2s: ["Royal Attitude Shayari in Hindi", "Dushman Jalane Wali Shayari", "2-Line Tevar Shayari", "Khatarnak Attitude Shayari"], h3s: ["बादशाही शायरी", "दमदार शेर", "शेर और शिकारी शायरी"], sampleItems: ["हम तो खामोशी से अपना काम करते हैं,\nचर्चा तो हमारे नाम का खुद-ब-खुद हो जाता है! 🔥", "शेर खुद अपनी ताकत से राजा कहलाता है,\nजंगल में कभी चुनाव नहीं होते! 👑"] },
      { type: "shayari", slug: "sad", title: "Sad Shayari for Instagram [2026] — दर्द भरी शायरी", subheading: "Heartbreaking dard, bewafa, and tanhai shayari for Instagram reels and stories.", h2s: ["Dard Bhari Sad Shayari", "Bewafa & Tanhai Shayari", "2-Line Emotional Shayari", "Broken Heart Shayari Hindi"], h3s: ["आंसू और तन्हाई", "टूटा हुआ दिल", "दर्द-ए-दिल"], sampleItems: ["मुस्कुराने की आदत भी कितनी अजीब है,\nसारे दर्द छुपा लेती है एक ही पल में। 💔"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for Instagram [2026] — Daily Inspiration", subheading: "High-energy hustle, discipline, and success quotes for Instagram posts and stories.", h2s: ["Daily Success Quotes", "Discipline & Hustle Quotes", "Short Power Quotes", "Hindi Motivational Quotes for Instagram"], h3s: ["Morning Motivation", "Focus Affirmations", "Overcoming Failure"], sampleItems: ["Small daily improvements over time lead to stunning results. 🏆", "Don't count the days, make the days count. ⚡"] },
      { type: "quotes", slug: "life", title: "Deep Life Quotes for Instagram [2026] — Meaningful Thoughts", subheading: "Wisdom, maturity, and perspective quotes on life, karma, and growth.", h2s: ["Wisdom & Karma Quotes", "Maturity & Growth Quotes", "Short Life Lessons", "Hindi Life Quotes for Instagram"], h3s: ["Philosophical Thoughts", "Peace of Mind Quotes", "Real Life Realities"], sampleItems: ["Life is 10% what happens to you and 90% how you react to it. 🌿", "Sometimes peace is better than proving a point. 🕊️"] },
      { type: "quotes", slug: "attitude", title: "Attitude Quotes for Instagram [2026] — King Mindset", subheading: "Self-worth, dignity, confidence, and fearless mindset quotes.", h2s: ["Confidence & Self-Worth Quotes", "Fearless Mindset Quotes", "Boss Attitude Quotes", "Hindi Attitude Quotes for Instagram"], h3s: ["Short Attitude Quotes", "King & Queen Quotes", "Unstoppable Mindset"], sampleItems: ["I survived in places where you would have quit on day one. ⚡", "My circle is small because I value quality over quantity. 👑"] },
    ],
  },

  // SECTION 3: YOUTUBE (25 Pages)
  {
    id: "youtube",
    name: "YouTube",
    section: 3,
    badge: "▶️ YouTube",
    color: "#FF0000",
    subpages: [
      { type: "captions", slug: "funny", title: "Funny YouTube Captions & Shorts Hooks [2026]", subheading: "Humorous video descriptions, funny Shorts text hooks, and comedy video captions.", h2s: ["Funny YouTube Shorts Captions", "Comedy Video Description Hooks", "Relatable Funny Lines", "Hindi Funny YouTube Captions"], h3s: ["Shorts Hooks", "Comment Magnet Captions", "Meme Captions"], sampleItems: ["Don't try this at home... try it at a friend's house! 😂", "Watch till the end to see me question all my life choices. 💀"] },
      { type: "captions", slug: "motivational", title: "Motivational YouTube Captions & Shorts Hooks [2026]", subheading: "High-impact video descriptions, podcast shorts hooks, and inspiring study/gym captions.", h2s: ["Podcast Shorts Motivational Captions", "Gym & Hustle YouTube Captions", "Success Mindset Video Descriptions", "Hindi Motivational YouTube Captions"], h3s: ["1-Line Video Hooks", "Call to Action Captions", "Mindset Quotations"], sampleItems: ["This 30-second advice will save you 5 years of regret. ⚡", "Stop waiting for the right moment. The moment is NOW. 🏆"] },
      { type: "captions", slug: "hindi", title: "Hindi YouTube Captions & Shorts Descriptions [2026]", subheading: "Devanagari and Hinglish captions for YouTube Shorts, Vlogs, and video descriptions.", h2s: ["यूट्यूब शॉर्ट्स हिंदी कैप्शन्स", "ब्लॉग और कॉमेडी वीडियो विवरण", "मोटिवेशनल हिंदी यूट्यूब कैप्शन्स", "सब्सक्राइब कॉल टू एक्शन"], h3s: ["वायरल शॉर्ट्स हुक", "देसी वीडियो कैप्शन्स", "ट्रेंडिंग हैशटैग"], sampleItems: ["अगर वीडियो पसंद आए तो लाइक और सब्सक्राइब जरूर करें! ❤️", "अंत तक देखें, क्लाइमेक्स हैरान कर देगा! ⚡"] },
      { type: "captions", slug: "attitude", title: "Attitude YouTube Captions & Shorts Hooks [2026]", subheading: "Royal swag, gaming highlights, and bold attitude video descriptions.", h2s: ["Gaming Montage Attitude Captions", "Boss Mindset Video Hooks", "Royal Swag Shorts Descriptions", "Hindi Attitude Captions for YouTube"], h3s: ["Clutch Moments Hooks", "Alpha Mindset Lines", "Shorts Attitude Taglines"], sampleItems: ["They laughed at my dreams, now they watch my videos. 👑", "One clutch to rule them all. ⚡ Drop a like if you agree! 🎮"] },
      { type: "bio", slug: "gaming", title: "Gaming YouTube Channel About Bio Ideas [2026]", subheading: "High-converting About section templates for BGMI, Free Fire, GTA, and Minecraft creators.", h2s: ["Esports & Pro Gaming Bio", "Fun & Casual Gaming Bio", "Short Gaming About Template", "Gaming Bio in Hindi"], h3s: ["Milestone Tracker Bio", "Stream Schedule Bio", "Social Links Callouts"], sampleItems: ["🎮 Welcome to the Arena! Daily High-Skill Gameplay & Clutch Montages.\n⚡ Road to 100K Soldiers!\n🔴 Live Streams: Everyday at 7 PM IST"] },
      { type: "bio", slug: "tech", title: "Tech YouTube Channel About Bio Ideas [2026]", subheading: "Professional About descriptions for gadget reviewers, coders, and tech tutorials.", h2s: ["Gadget Reviewer YouTube Bio", "Coding & AI Tutorial Bio", "Clean Minimalist Tech Bio", "Business & Sponsorship Focus"], h3s: ["Device Testing Disclaimers", "Review Schedule", "Tech Mission Statement"], sampleItems: ["🚀 Simplifying Technology, AI & Gadgets for Everyone.\n📱 Unbiased Smartphone Reviews & Hands-On Tech Guides.\n🔔 Subscribe for Weekly High-Value Tech Videos!"] },
      { type: "bio", slug: "vlog", title: "Vlog YouTube Channel About Bio Ideas [2026]", subheading: "Catchy About section text for daily vloggers, travel creators, and lifestyle channels.", h2s: ["Daily Lifestyle Vlogger Bio", "Travel & Adventure Channel Bio", "Couple / Family Vlog Bio", "Hindi Vlogging About Template"], h3s: ["Storyteller Bio", "Wanderlust Bios", "Community Focused Bios"], sampleItems: ["🌍 Living life one flight & vlog at a time.\n🎥 Join our crazy family adventures and daily stories!\n✨ New Vlogs Every Tuesday & Saturday"] },
      { type: "bio", slug: "hindi", title: "YouTube Channel Bio in Hindi [2026] — चैनल विवरण", subheading: "Authentic Devanagari About page descriptions for all Indian creators.", h2s: ["हिंदी टेक और ज्ञान चैनल बायो", "देसी ब्लॉगिंग चैनल बायो", "मोटिवेशनल और फैक्ट्स चैनल बायो", "गेमिंग हिंदी चैनल बायो"], h3s: ["चैनल परिचय", "सब्सक्राइब अनुरोध", "बिजनेस ईमेल विवरण"], sampleItems: ["नमस्ते दोस्तों! हमारे चैनल पर आपका स्वागत है। यहाँ आपको रोजाना रोचक जानकारी, मोटिवेशन और ज्ञानवर्धक वीडियो मिलेंगे। 🙏❤️"] },
      { type: "status", slug: "funny", title: "Funny YouTube Community Post Status [2026]", subheading: "Engaging community tab polls, jokes, and funny channel updates.", h2s: ["Funny Community Tab Updates", "Hilarious Viewer Polls", "Behind The Scenes Humor", "Hindi Funny YouTube Status"], h3s: ["Editing Struggles Status", "Viewer Engagement Jokes", "Channel Inside Jokes"], sampleItems: ["Me promising a video on Friday vs. Me still editing at 3 AM on Sunday 😭💀"] },
      { type: "status", slug: "attitude", title: "Attitude YouTube Community Post Status [2026]", subheading: "Bold announcements, milestone celebrations, and king attitude community posts.", h2s: ["Milestone Celebration Posts", "Hater Silencing Community Updates", "Alpha Creator Announcements", "Hindi Attitude Status for YouTube"], h3s: ["Next Big Project Teasers", "Subscriber Gratitude Posts", "Bold Declarations"], sampleItems: ["100K strong! We did it our way, with zero compromises. Love you all! 👑⚡"] },
      { type: "status", slug: "love", title: "Love & Gratitude YouTube Community Status [2026]", subheading: "Heartfelt community notes thanking subscribers and spreading positivity.", h2s: ["Subscriber Love & Thank You Status", "Festive & Holiday Greetings", "Creator Heart-to-Heart Notes", "Hindi Love Status for YouTube"], h3s: ["Family Community Messages", "Milestone Gratitude", "Positive Affirmations"], sampleItems: ["You guys aren't just subscribers, you are family. Thank you for all the love! ❤️🌿"] },
      { type: "status", slug: "sad", title: "Emotional & Hiatus YouTube Community Status [2026]", subheading: "Sincere creator hiatus announcements, vulnerability, and life update posts.", h2s: ["Creator Burnout & Hiatus Updates", "Heartfelt Personal Life Updates", "Honest Creator Reflection Notes", "Hindi Emotional Community Posts"], h3s: ["Taking a Short Break", "Mental Health Updates", "Returning Stronger Notes"], sampleItems: ["Taking a short break to recharge creative batteries. Coming back stronger! 🌿"] },
      { type: "shayari", slug: "love", title: "Love Shayari for YouTube Shorts [2026]", subheading: "Poetic 2-line verses and voiceover scripts for romantic YouTube Shorts.", h2s: ["Voiceover Love Shayari Scripts", "2-Line Mohabbat Shayari for Shorts", "Romantic BGM Shayari Lines", "Shorts Subtitles Shayari"], h3s: ["दिलकश मोहब्बत शायरी", "शॉर्ट्स ऑडियो स्क्रिप्ट", "रोमांटिक लाइन्स"], sampleItems: ["तेरी आँखों के जादू से बच न सके हम,\nखुद को खोकर तुझमें, मुकम्मल हो गए हम! ❤️"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for YouTube Shorts [2026]", subheading: "Bass-boosted background voiceover shayari for attitude shorts.", h2s: ["Viral Voiceover Attitude Shayari", "Royal Tevar 2-Line Couplets", "Dushman Jalane Wali Shorts Shayari", "Hindi Attitude Shayari YouTube"], h3s: ["बाप बाप होता है शायरी", "शेर एटीट्यूड लाइन्स", "रॉयल स्वैग वॉयसओवर"], sampleItems: ["हमारी शख्सियत का अंदाजा तुम क्या लगाओगे,\nहम तो समंदर हैं, खामोश रहते हैं तो अपनी मर्जी से! 🔥"] },
      { type: "shayari", slug: "funny", title: "Funny Shayari for YouTube Shorts [2026]", subheading: "Comedy couplets, dost mazak, and humorous rhymes for funny shorts.", h2s: ["Comedy Shayari for YouTube", "Dosti Mazakiya Shayari", "Ex & Single Life Funny Shayari", "Hindi Funny Couplets"], h3s: ["मजेदार हास्य शायरी", "दोस्तों की खिंचाई", "सिंगल लाइफ शायरी"], sampleItems: ["इश्क में हम तो यूं फना हो गए,\nवो चाय की शौकीन थी, हम बिस्कुट जैसे डूब गए! 😂☕"] },
      { type: "shayari", slug: "sad", title: "Sad & Dard Shayari for YouTube Shorts [2026]", subheading: "Touching emotional voiceover poetry for sad breakup shorts.", h2s: ["Emotional Voiceover Dard Shayari", "Breakup & Tanhai YouTube Shorts", "2-Line Sad Shayari in Hindi", "Broken Heart Shorts Lines"], h3s: ["दर्द भरी दास्तान", "टूटे दिल की आवाज", "तन्हाई शायरी"], sampleItems: ["कांच का टुकड़ा समझकर छोड़ दिया उसने,\nउसे क्या पता हम भी कभी आईना थे! 💔"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for YouTube Shorts [2026]", subheading: "Powerful podcast quotes and hustle lines for YouTube Shorts reels.", h2s: ["Podcast Quote Clips Text", "Success & Hustle Shorts Quotes", "Discipline & Alpha Mindset", "Hindi Motivational Quotes for YouTube"], h3s: ["Study Motivation Quotes", "Gym Motivation Lines", "Daily Stoic Wisdom"], sampleItems: ["If you want to live a life you've never lived, you have to do things you've never done. 🏆"] },
      { type: "quotes", slug: "success", title: "Success Quotes for YouTube [2026] — Billionaire Mindset", subheading: "Business wisdom, entrepreneurship lessons, and wealth mindset quotes.", h2s: ["Billionaire Mindset Quotes", "Business & Wealth Principles", "Financial Freedom Quotes", "Hindi Success Quotes for YouTube"], h3s: ["Entrepreneur Quotes", "Investment Wisdom", "Leadership Thoughts"], sampleItems: ["Wealth is what you don't see: the unbought cars and unbought watches. 💎"] },
      { type: "quotes", slug: "funny", title: "Funny Quotes for YouTube Shorts [2026]", subheading: "Relatable life quotes, sarcastic humor, and daily laughs for video text overlays.", h2s: ["Relatable Daily Humor Quotes", "Sarcastic Life Truths", "Office & School Funny Quotes", "Hindi Funny Quotes YouTube"], h3s: ["Short Humor Lines", "Procrastination Quotes", "Food Jokes"], sampleItems: ["My wallet is like an onion: opening it makes me cry. 🧅😂"] },
      { type: "quotes", slug: "attitude", title: "Attitude Quotes for YouTube Shorts [2026]", subheading: "King mindset, unbothered attitude, and fearless self-worth quotes.", h2s: ["Fearless Self-Worth Quotes", "Unbothered Attitude Quotes", "Alpha King Quotes for YouTube", "Hindi Attitude Quotes"], h3s: ["Silent Hustle Quotes", "Respect & Dignity Lines", "Power Quotes"], sampleItems: ["I didn't change. I just stopped letting people take advantage of my kindness. 👑"] },
    ],
  },

  // SECTION 4: TIKTOK (25 Pages)
  {
    id: "tiktok",
    name: "TikTok",
    section: 4,
    badge: "🎵 TikTok",
    color: "#000000",
    subpages: [
      { type: "captions", slug: "funny", title: "Funny TikTok Captions & FYP Hooks [2026]", subheading: "Humorous lines, trending meme captions, and viral TikTok video hooks.", h2s: ["Trending FYP Funny Captions", "Relatable Comedy TikTok Hooks", "Sarcastic Video Captions", "Hindi Funny TikTok Captions"], h3s: ["Shorts & FYP Hooks", "Storytime Comedy", "Viral Challenge Captions"], sampleItems: ["Tell me you relate without telling me you relate 😭💀", "I came for a good time, not a long time! 😂"] },
      { type: "captions", slug: "attitude", title: "Attitude TikTok Captions — Viral FYP Swag [2026]", subheading: "Bold transitions, glow up video lines, and confidence captions for TikTok.", h2s: ["Glow Up Transition Captions", "Boss Energy TikTok Hooks", "Attitude Captions in Hindi", "Short Sassy FYP Lines"], h3s: ["Transition Hooks", "Savage TikTok Lines", "Confidence Boosters"], sampleItems: ["They said I changed. I said I upgraded. 👑✨ #GlowUp", "Unbothered, moisturized, in my lane, thriving. ⚡"] },
      { type: "captions", slug: "love", title: "Love Captions for TikTok [2026] — Couple Trends", subheading: "Cute relationship goals, aesthetic couple edits, and romantic audio captions.", h2s: ["Couple Trend FYP Captions", "Aesthetic Love Video Descriptions", "Cute Crush Hooks for TikTok", "Hindi Love Captions TikTok"], h3s: ["Hopeless Romantic Lines", "Soulmate Audio Text", "Anniversary Edits"], sampleItems: ["He gave me butterflies, now he gives me peace. ❤️🌿 #CoupleGoals"] },
      { type: "captions", slug: "hindi", title: "Hindi TikTok Captions & Viral Desi Hooks [2026]", subheading: "Desi shayari, Bollywood audio hooks, and Hindi viral video captions.", h2s: ["बॉलीवुड डायलॉग्स और कैप्शन्स", "देसी स्वैग टिक-टॉक कैप्शन्स", "हिंदी शायरी वीडियो विवरण", "ट्रेंडिंग देसी हैशटैग"], h3s: ["देसी कॉमेडी हुक्स", "शायराना अंदाज", "वायरल हिंदी स्टेटस"], sampleItems: ["हम तो दिल के राजा हैं, जो चाहते हैं वही करते हैं! 👑"] },
      { type: "bio", slug: "attitude", title: "Attitude TikTok Bio Ideas [2026] — Viral Creator Bio", subheading: "Bold, aesthetic, and eye-catching bio templates for TikTok creators.", h2s: ["Viral Creator Attitude Bio", "Short Sassy TikTok Bio", "Alpha Mindset TikTok Bio", "Hindi Attitude Bio for TikTok"], h3s: ["Minimalist Bio Lines", "Emoji Formatted Bio", "Glow Up Bios"], sampleItems: ["★ Pure energy & zero apologies ⚡\n★ Hit that + button for daily vibes! 👇"] },
      { type: "bio", slug: "funny", title: "Funny TikTok Bio Ideas [2026] — Witty & Sarcastic", subheading: "Laugh-out-loud bio lines that boost your follower conversion rate.", h2s: ["Sarcastic TikTok Bio Ideas", "Relatable Comedy Bio", "Meme Lover TikTok Bio", "Short Funny Bio Lines"], h3s: ["Self-Deprecating Humor", "Food & Nap Bios", "Quirky Bios"], sampleItems: ["Here to post videos my future kids will roast me for 💀\nLiving on iced coffee & bad decisions ☕"] },
      { type: "bio", slug: "for-boys", title: "TikTok Bio for Boys [2026] — Cool & Swag", subheading: "King mindset, gym enthusiast, and video creator bios for boys on TikTok.", h2s: ["Cool Boy Creator Bio", "Gym & Fitness TikTok Bio", "Streetwear & Fashion Bio for Boys", "Hindi TikTok Bio for Boys"], h3s: ["Alpha Swag Bio", "Gamer TikTok Bio", "Short Boys Bios"], sampleItems: ["⚡ Creating vibes daily\n🏋️‍♂️ Lifting heavy, dreaming bigger\n👑 Follow the journey 🚀"] },
      { type: "bio", slug: "for-girls", title: "TikTok Bio for Girls [2026] — Aesthetic & Sassy", subheading: "Soft era, beauty, lifestyle, and queen energy bio templates for girls.", h2s: ["Aesthetic & Soft Era Bio", "Sassy Queen TikTok Bio", "Beauty & Fashion Creator Bio", "Cute & Minimalist Girl Bio"], h3s: ["Princess Vibes", "Lifestyle Vlogger Bio", "Lipgloss & Sunshine"], sampleItems: ["🌸 Soft era & big dreams\n✨ Daily aesthetic & lifestyle vlog\n💄 Tap that + button! 💕"] },
      { type: "status", slug: "attitude", title: "Attitude TikTok Story Status [2026]", subheading: "Quick 24-hour story updates with bold attitude and self-love quotes.", h2s: ["TikTok Story Attitude Quotes", "Glow Up Daily Status", "Unstoppable Mindset Lines", "Hindi Attitude Status TikTok"], h3s: ["Short Story Lines", "Bold Statements", "Queen & King Energy"], sampleItems: ["I don't look back unless it's to see how far I've come. 👑⚡"] },
      { type: "status", slug: "love", title: "Love Status for TikTok Stories [2026]", subheading: "Romantic quotes and aesthetic couple updates for TikTok stories.", h2s: ["Romantic Couple Story Status", "Aesthetic Love Notes", "Sweet Soulmate Status", "Hindi Love Status TikTok"], h3s: ["Soft Romance Lines", "Late Night Thoughts", "Forever Vibes"], sampleItems: ["Every moment with you feels like magic. ❤️🌿"] },
      { type: "status", slug: "funny", title: "Funny TikTok Story Status [2026]", subheading: "Relatable day-in-the-life humor and sarcastic thoughts for stories.", h2s: ["Relatable Daily Chaos Status", "Sarcastic Thoughts for Stories", "Weekend & Coffee Humor", "Hindi Funny Story Status"], h3s: ["Quick Chuckles", "Procrastination Status", "Meme Status"], sampleItems: ["Adulting is just looking around for a real adult to help you. 😭"] },
      { type: "status", slug: "sad", title: "Sad & Healing TikTok Story Status [2026]", subheading: "Vulnerable, emotional, and comforting thoughts for TikTok stories.", h2s: ["Healing Journey Story Status", "Emotional & Melancholy Quotes", "Late Night Thoughts Status", "Hindi Sad Status TikTok"], h3s: ["Quiet Healing", "Letting Go Lines", "Comforting Thoughts"], sampleItems: ["Healing isn't linear, but you are making progress. ❤️"] },
      { type: "shayari", slug: "love", title: "Love Shayari for TikTok Edits [2026]", subheading: "Aesthetic slow-reverb poetry verses for couple and crush edits.", h2s: ["Slowed & Reverb Love Shayari", "2-Line Aesthetic Hindi Shayari", "Romantic Audio Lip-Sync Lines", "Deep Ishq Verses for TikTok"], h3s: ["इश्क की महफिल", "धीमी शायरी ऑडियो", "दिल की धड़कन"], sampleItems: ["तुझे देखकर जो सुकून मिलता है,\nवो दुनिया की किसी दौलत में नहीं! ❤️"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for TikTok Edits [2026]", subheading: "Bass boosted and viral dialogue shayari for attitude reels on TikTok.", h2s: ["Bass Boosted Attitude Shayari", "Royal Tevar Hindi Verses", "Dushman Jalane Wali TikTok Shayari", "Short 2-Line Attitude Shayari"], h3s: ["शेर शायरी", "खतरनाक तेवर", "दमदार वॉयस"], sampleItems: ["हमसे जलने वाले भी कमाल करते हैं,\nमहफिल अपनी सजाते हैं और चर्चे हमारे करते हैं! 🔥"] },
      { type: "shayari", slug: "funny", title: "Funny Shayari for TikTok Videos [2026]", subheading: "Comedy couplets and humorous roasting poetry for funny video edits.", h2s: ["Roasting & Funny TikTok Shayari", "Single Life Funny Shayari", "Exam & Friendship Humor Shayari", "Hindi Funny Couplets"], h3s: ["मजेदार रोस्टिंग शायरी", "दोस्त की बेइज्जती", "हास्य रस"], sampleItems: ["अर्ज किया है: वो हमें भूल गए जैसे एग्जाम में आंसर भूल जाते हैं! 😂📚"] },
      { type: "shayari", slug: "sad", title: "Sad Shayari for TikTok Breakup Edits [2026]", subheading: "Heartbreak, tears, and emotional poetry for slow sad song edits.", h2s: ["Sad Breakup Video Shayari", "Slow Reverb Emotional Poetry", "2-Line Dard Shayari Hindi", "Tanhai & Bewafa TikTok Shayari"], h3s: ["टूटा हुआ दिल शायरी", "तन्हाई के पल", "दर्द भरी आवाज"], sampleItems: ["हम तो हंसते हैं दूसरों को हंसाने के लिए,\nवरना जख्म इतने हैं कि रोया भी नहीं जाता! 💔"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for TikTok [2026] — Mindset Trends", subheading: "Stoic mindset, gym grind, and 1% discipline quotes for TikTok videos.", h2s: ["Stoic Mindset Quotes for TikTok", "Gym & Body Transformation Quotes", "1% Better Every Day Quotes", "Hindi Motivational TikTok Quotes"], h3s: ["Daily Discipline", "Mindset Shift", "Rise & Grind"], sampleItems: ["You are one decision away from a completely different life. ⚡"] },
      { type: "quotes", slug: "attitude", title: "Attitude Quotes for TikTok [2026] — Confidence Boost", subheading: "Savage, classy, and unapologetic self-worth quotes.", h2s: ["Savage & Classy TikTok Quotes", "Self-Worth & Dignity Quotes", "King & Queen Energy Quotes", "Hindi Attitude Quotes TikTok"], h3s: ["Bold Confidence", "Unapologetic Lines", "Rule Your World"], sampleItems: ["I am 100% responsible for my own energy and peace. 👑"] },
      { type: "quotes", slug: "funny", title: "Funny Quotes for TikTok [2026] — Relatable Humor", subheading: "Short punchlines, relatable everyday situations, and witty text overlays.", h2s: ["Relatable Daily Chaos Quotes", "Short Punchy Sarcasm", "Foodie & Lazy Day Quotes", "Hindi Funny Quotes for TikTok"], h3s: ["Quick Laughs", "Procrastination Humor", "Life Truths"], sampleItems: ["My brain has too many tabs open at all times. 🖥️😂"] },
      { type: "quotes", slug: "life", title: "Deep Life Quotes for TikTok [2026] — Real Perspectives", subheading: "Maturity, healing, and life lesson quotes for contemplative TikToks.", h2s: ["Maturity & Growth Quotes", "Peace & Mindfulness Quotes", "Short Life Lessons for TikTok", "Hindi Deep Life Quotes"], h3s: ["Quiet Wisdom", "Soul Growth", "Perspective Shifts"], sampleItems: ["Peace is the new luxury. Protect yours at all costs. 🌿🕊️"] },
    ],
  },

  // SECTION 5: LINKEDIN (20 Pages)
  {
    id: "linkedin",
    name: "LinkedIn",
    section: 5,
    badge: "💼 LinkedIn",
    color: "#0A66C2",
    subpages: [
      { type: "captions", slug: "professional", title: "Professional LinkedIn Captions [2026] — Career & Growth", subheading: "High-engagement post hooks, storytelling frameworks, and industry leadership captions.", h2s: ["Career Milestone Post Captions", "Thought Leadership Post Hooks", "Team & Company Culture Captions", "Networking & Value Posts"], h3s: ["Storytelling Frameworks", "Promoted & New Job Hooks", "Data & Case Study Openers"], sampleItems: ["Most people overestimate what they can do in a day and underestimate what they can achieve in a year. 🚀", "I made this mistake early in my career so you don't have to: Here are 3 lessons that changed my trajectory. 📊"] },
      { type: "captions", slug: "motivational", title: "Motivational LinkedIn Captions [2026] — Work Ethic & Drive", subheading: "Inspiring workplace perseverance, founder resilience, and career motivation lines.", h2s: ["Founder & Entrepreneur Hustle", "Resilience & Overcoming Layoffs", "Monday Career Motivation", "Leadership Lessons on LinkedIn"], h3s: ["Growth Mindset Lines", "Career Comeback Stories", "Mentorship Quotes"], sampleItems: ["A setback is just a setup for an extraordinary comeback. Keep building. ⚡", "Hard skills get you the interview; emotional intelligence builds your career. 🌟"] },
      { type: "captions", slug: "job", title: "Job Announcement & Hiring LinkedIn Captions [2026]", subheading: "Standout announcement templates for new roles, promotions, hiring alerts, and job seeker updates.", h2s: ["I'm Thrilled to Announce New Role Captions", "We Are Hiring Team Expansion Posts", "Open to Work Career Transition Captions", "Internship & Graduation Announcement"], h3s: ["New Role Celebration", "Recruiter Hiring Hooks", "Networking Call to Actions"], sampleItems: ["I am thrilled to announce that I have joined [Company] as [Role]! 🚀 Huge thanks to everyone who supported my journey.", "We are growing! Our team is looking for passionate [Role] to build the future of [Industry]. Tag someone who would be great! 👇"] },
      { type: "bio", slug: "professional", title: "Professional LinkedIn Headline & Bio Ideas [2026]", subheading: "High-converting headlines and summary templates for executives, consultants, and developers.", h2s: ["Executive & Founder Headlines", "Software Engineer & Tech Lead Bio", "Sales & Marketing Growth Summary", "Consultant & Strategist Formulas"], h3s: ["Value Proposition Formula", "Keyword-Rich Headlines", "Summary Section Templates"], sampleItems: ["Helping SaaS Startups Scale from $1M to $10M ARR | Growth Strategist | Ex-Google | Angel Investor 🚀", "Senior Full Stack Engineer | Building High-Concurrency Distributed Systems | React, Node, AWS 💻"] },
      { type: "bio", slug: "fresher", title: "LinkedIn Headline & Bio for Freshers [2026]", subheading: "Standout profile headline and summary templates for new college graduates and entry-level talent.", h2s: ["Computer Science Graduate Bio", "Business & Marketing Fresher Headline", "Aspiring Data Analyst Summary", "Internship Seeker Bio Formula"], h3s: ["Showcasing Projects", "Skill Highlight Headlines", "Eager to Learn Statements"], sampleItems: ["Aspiring Software Engineer | CS Graduate '26 | Skilled in Java, Python, React | Actively Seeking Full-Time Opportunities 🎓", "Passionate Digital Marketer | Certified in SEO & Social Media Growth | Open to Entry-Level Roles 📈"] },
      { type: "bio", slug: "student", title: "LinkedIn Bio & Headline for Students [2026]", subheading: "Professional student headlines for securing top internships, research roles, and mentorship.", h2s: ["Engineering Student Headline", "MBA & Business Student Bio", "Pre-Med & Science Student Summary", "Student Club Leader Headline"], h3s: ["Academic Achievements", "Internship Seeking Headlines", "Leadership & Extracurriculars"], sampleItems: ["Computer Science Undergrad @ [University] | President @ AI Club | Building Open Source Projects | Incoming SWE Intern 💡", "Finance & Economics Student | CFA Level 1 Candidate | Passionate about Equity Research & Valuation 📊"] },
      { type: "status", slug: "motivational", title: "Motivational LinkedIn Status Updates [2026]", subheading: "Short punchy thoughts and career philosophy for daily feed presence.", h2s: ["Daily Career Philosophy", "Resilience & Focus Status", "Work-Life Harmony Thoughts", "Leadership Micro-Lessons"], h3s: ["1-Line Growth Thoughts", "Monday Morning Pep Talks", "Habit Building Status"], sampleItems: ["Your network is your net worth, but your reputation is your currency. 🤝", "Don't wish it were easier; work to become better. 🏆"] },
      { type: "status", slug: "professional", title: "Professional LinkedIn Status Updates [2026]", subheading: "Thoughtful industry commentary, productivity observations, and business insights.", h2s: ["Productivity Hacks & Insights", "Remote Work & Future of Work", "Team Leadership Observations", "Industry Trend Commentary"], h3s: ["Short Workplace Insights", "Team Culture Notes", "Skill Development Thoughts"], sampleItems: ["The best meetings are the ones that could have been an email, resolved in 3 sentences. 💼", "Culture is not free snacks; culture is how decisions are made when things get tough. 🏢"] },
      { type: "status", slug: "success", title: "Success & Achievement LinkedIn Status [2026]", subheading: "Celebratory updates for closing deals, product launches, and team milestones.", h2s: ["Product Launch Status", "Funding & Revenue Milestones", "Certification & Learning Win", "Team Recognition Status"], h3s: ["Milestone Shoutouts", "Deal Closing Notes", "Gratitude & Next Goals"], sampleItems: ["Proud to share that our team just crossed 100,000 active users! 🚀 Milestone unlocked. On to the next!", "Officially certified in AWS Solutions Architecture. Never stop learning! 📜⚡"] },
      { type: "shayari", slug: "motivational", title: "Motivational Shayari for LinkedIn [2026] — हौसलों की शायरी", subheading: "Dignified and inspiring Hindi couplets on hard work, grit, and vision.", h2s: ["कामयाबी और मेहनत की शायरी", "हौसले और जिद्द के शेर", "कर्म और लक्ष्य शायरी", "सफलता के प्रेरणादायक दोहे"], h3s: ["मेहनत का फल", "मंजिल की तलाश", "संघर्ष की राह"], sampleItems: ["मंजिल उन्हीं को मिलती है जिनके सपनों में जान होती है,\nपंख से कुछ नहीं होता, हौसलों से उड़ान होती है! 🏆", "लहरों से डर कर नौका पार नहीं होती,\nकोशिश करने वालों की कभी हार नहीं होती! ⚡"] },
      { type: "shayari", slug: "success", title: "Success Shayari for LinkedIn [2026] — मुकद्दर और मुकाम", subheading: "Poetic wisdom on creating your own destiny and achieving great milestones.", h2s: ["सफलता और मुकाम शायरी", "आत्मविश्वास के शेर", "महान नेतृत्व शायरी", "विजय और परिश्रम"], h3s: ["शीर्ष पर पहुंचना", "धैर्य और लगन", "विजेता का अंदाज"], sampleItems: ["खुद ही को कर बुलंद इतना कि हर तकदीर से पहले,\nखुदा बन्दे से खुद पूछे बता तेरी रज़ा क्या है! 👑", "रास्ते कहां खत्म होते हैं जिंदगी के सफर में,\nमंजिल तो वहां है जहां ख्वाहिशें थम जाएं। ✨"] },
      { type: "quotes", slug: "success", title: "Success Quotes for LinkedIn [2026] — Business Wisdom", subheading: "Quotes from iconic founders, CEOs, and economists on building sustainable wealth.", h2s: ["Iconic CEO Success Quotes", "Building Lasting Companies", "Innovation & Risk Taking", "Compound Growth Principles"], h3s: ["Warren Buffett Quotes", "Steve Jobs Principles", "Satya Nadella Thoughts"], sampleItems: ["Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill 🏆", "Price is what you pay. Value is what you get. — Warren Buffett 💎"] },
      { type: "quotes", slug: "leadership", title: "Leadership Quotes for LinkedIn [2026] — Management Mastery", subheading: "Profound quotes on team empathy, strategic vision, and high-performance culture.", h2s: ["Empathy in Management", "Visionary Leadership Quotes", "Serving Your Team First", "Integrity & Decision Making"], h3s: ["Simon Sinek Quotes", "Peter Drucker Principles", "Servant Leadership"], sampleItems: ["Leadership is not about being in charge. It is about taking care of those in your charge. — Simon Sinek 🌟", "Management is doing things right; leadership is doing the right things. — Peter Drucker 🎯"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for LinkedIn [2026] — Daily Drive", subheading: "Short energizing quotes to spark productivity and purpose in your workday.", h2s: ["Morning Productivity Quotes", "Overcoming Procrastination", "Excellence & Focus", "Career Discipline Affirmations"], h3s: ["Daily Spark", "Action Over Words", "Consistent Effort"], sampleItems: ["Action is the foundational key to all success. — Pablo Picasso ⚡", "You don't have to be great to start, but you have to start to be great. — Zig Ziglar 🚀"] },
      { type: "quotes", slug: "business", title: "Business Quotes for LinkedIn [2026] — Strategy & Scale", subheading: "Timeless business philosophy on marketing, customer obsession, and moats.", h2s: ["Customer Obsession Quotes", "Competitive Moat Principles", "Scaling & Execution Quotes", "Disruption & Tech Strategy"], h3s: ["Jeff Bezos Principles", "Peter Thiel Zero to One", "Clayton Christensen Insights"], sampleItems: ["Your brand is what other people say about you when you're not in the room. — Jeff Bezos 🏢", "Competition is for losers. Build a monopoly through unique value. — Peter Thiel 💡"] },
    ],
  },

  // SECTION 6: TWITTER / X (20 Pages)
  {
    id: "twitter",
    name: "Twitter",
    section: 6,
    badge: "🐦 Twitter / X",
    color: "#1DA1F2",
    subpages: [
      { type: "captions", slug: "attitude", title: "Attitude Twitter Captions & Tweets [2026]", subheading: "Short, punchy, unapologetic tweets and captions that command attention.", h2s: ["Punchy Alpha Tweets", "Savage Comebacks & One-Liners", "Unapologetic Mindset Tweets", "Hindi Attitude Tweets"], h3s: ["Short 1-Line Tweets", "King Swag Lines", "Zero Filter Quotes"], sampleItems: ["My silence isn't weakness. It's the restraint of a king. 👑⚡", "I don't hold grudges. I disconnect and forget. 🌿", "हमारी बराबरी करने की कोशिश मत करो, तुम्हारी उम्र निकल जाएगी! 🔥"] },
      { type: "captions", slug: "funny", title: "Funny Twitter Captions & Meme Tweets [2026]", subheading: "Relatable humor, viral sarcasm, and everyday observations primed for retweets.", h2s: ["Viral Sarcastic Tweets", "Everyday Relatable Chaos", "Sleep, Coffee & Procrastination Humor", "Dating & Single Life Jokes"], h3s: ["Short Punchlines", "Meme Tweet Formats", "Workplace Humor"], sampleItems: ["I have the memory of a goldfish until someone owes me $10. 🐟😂", "My diet plan: Make all my friends cupcakes. The fatter they get, the thinner I look. 🧁💀"] },
      { type: "captions", slug: "trending", title: "Trending Twitter Captions & Viral Hooks [2026]", subheading: "High-CTR tweet hooks, thread starters, and viral commentary formats.", h2s: ["Viral Thread Starter Hooks", "Hot Takes & Controversial Opinions", "Tech & AI Commentary Hooks", "Cultural Trend Reactions"], h3s: ["Thread Hooks (1/10)", "Curiosity Gaps", "Data & Insight Hooks"], sampleItems: ["99% of people are using ChatGPT wrong. Here are 5 prompts that will save you 10 hours this week: 🧵👇", "Unpopular opinion: Being busy is not a badge of honor. It is a sign of poor prioritization. ⚡"] },
      { type: "bio", slug: "attitude", title: "Attitude Twitter Bio Ideas [2026] — Bold & Savage", subheading: "Sharp, memorable, and minimalist bio templates for your X/Twitter profile.", h2s: ["Savage & Bold Twitter Bios", "Minimalist Tech & Founder Bio", "Short Alpha Bios", "Aesthetic Dark Mode Bios"], h3s: ["Single Line Bios", "No-BS Bio Formulas", "Bold Statements"], sampleItems: ["⚡ Unapologetic & Unfiltered.\nBuilding empires, breaking conventions.\n📍 Everywhere that matters.", "Silence > Explanations. 👑\nDoing what they said I couldn't."] },
      { type: "bio", slug: "funny", title: "Funny Twitter Bio Ideas [2026] — Witty & Sarcastic", subheading: "Self-deprecating humor and clever one-liners that win instant follow backs.", h2s: ["Self-Deprecating Humor Bios", "Witty One-Liner Bios", "Professional Procrastinator Bios", "Satirical Persona Bios"], h3s: ["Food & Nap Bios", "Pop Culture References", "Clever Wordplay"], sampleItems: ["I'm not saying I'm Batman, but have you ever seen me and Batman in the same room? 🦇\nTweets are my own, unfortunately.", "Born at a very young age. Currently figuring out how taxes work. ☕"] },
      { type: "bio", slug: "for-boys", title: "Twitter Bio for Boys [2026] — Swag & Alpha", subheading: "King mindset, crypto/finance builder, and stylish bio ideas for boys on X.", h2s: ["Builder & Hustler Bio", "King Swag Twitter Bio", "Minimalist Gentleman Bio", "Hindi Bio for Boys on X"], h3s: ["Hustle & Code", "Fitness & Wealth", "Bold Taglines"], sampleItems: ["👑 King Mindset | Silent Hustler\n📈 Markets, Code & Cold Coffee\n⚡ Building in Public"] },
      { type: "status", slug: "attitude", title: "Attitude Twitter / X Status Tweets [2026]", subheading: "Unbothered, calm confidence, and savage daily status updates on X.", h2s: ["Unbothered King Status", "Savage Boundary Setting Tweets", "Calm Confidence Thoughts", "Hindi Attitude Status X"], h3s: ["Short Status", "No Drama Lines", "Dignity & Pride"], sampleItems: ["Not everyone deserves access to you. Learn the power of disappearing. ⚡", "I let people assume whatever they want. My peace is not up for debate. 👑"] },
      { type: "status", slug: "love", title: "Love Twitter / X Status Tweets [2026]", subheading: "Poetic, romantic, and thoughtful tweets about love and companionship.", h2s: ["Soft Romantic Tweets", "Soulmate & Forever Thoughts", "Late Night Love Musings", "Hindi Love Status on X"], h3s: ["Poetic Musings", "Cute Appreciation", "Deep Bonds"], sampleItems: ["To be known deeply and loved anyway is a rare human blessing. ❤️🌿", "Your presence is my favorite sanctuary in this loud world. ✨"] },
      { type: "status", slug: "sad", title: "Sad & Melancholy Twitter Status [2026]", subheading: "Vulnerable late night thoughts, heartbreak realizations, and quiet pain.", h2s: ["Late Night Vulnerability Tweets", "Silent Heartbreak Realizations", "Letting Go & Moving On", "Hindi Sad Status X"], h3s: ["Short Pain Lines", "Healing Thoughts", "Melancholy Notes"], sampleItems: ["Heavy hearts don't make noise. They just go quiet. 🌧️", "You can miss someone and still not want them back in your life. 💔"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for Twitter / X [2026]", subheading: "2-line royal tevar and bold shayari crafted for maximum retweets.", h2s: ["2-Line Tevar Shayari on X", "Dushman Jalane Wali Twitter Shayari", "Royal Swag Couplets", "Hindi Attitude Verses"], h3s: ["दहाड़ते शेर", "अंदाज-ए-खास", "रॉयल तेवर"], sampleItems: ["हमसे उलझने से पहले अपना इतिहास जान लेना,\nहम वो हैं जो मुकद्दर भी अपनी मर्जी से लिखते हैं! 🔥", "चर्चा उन्हीं की होती है, जिनमें कोई बात होती है! 👑"] },
      { type: "shayari", slug: "love", title: "Love Shayari for Twitter / X [2026]", subheading: "Lyrical romance, ghazal couplets, and sweet Urdu/Hindi verses for tweets.", h2s: ["Romantic Urdu/Hindi Couplets", "2-Line Mohabbat Shayari for X", "Heartfelt Ishq Verses", "Hindi Love Shayari Twitter"], h3s: ["गुलजार अंदाज", "इश्क और खामोशी", "नाजुक अहसास"], sampleItems: ["तेरी खामोशी भी बोलती है जब तू पास होता है,\nइश्क का यही सबसे खूबसूरत अहसास होता है। ❤️", "एक उम्र बीत चली है तुझे चाहते हुए,\nतू आज भी बेखबर है कल की तरह। 🌸"] },
      { type: "quotes", slug: "attitude", title: "Attitude Quotes for Twitter / X [2026]", subheading: "King mindset, high standards, and fierce self-reliance quotes.", h2s: ["High Standards & Self Respect", "Fierce Self-Reliance Quotes", "Unshakable Confidence", "Hindi Attitude Quotes for X"], h3s: ["Alpha Quotes", "Dignity First", "Unstoppable"], sampleItems: ["Never lower your standards to keep someone comfortable. ⚡", "I am not here to fit into your world. I am here to build my own. 👑"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for Twitter / X [2026]", subheading: "Daily fire, relentless consistency, and stoic discipline quotes for X.", h2s: ["Relentless Consistency Quotes", "Stoic Focus & Willpower", "Morning Fire Affirmations", "Hindi Motivational Quotes on X"], h3s: ["1-Line Sparks", "Discipline Over Mood", "Long Term Vision"], sampleItems: ["Do it afraid. Do it tired. Do it alone. Just get it done. 🏆", "The secret of getting ahead is getting started. ⚡"] },
      { type: "quotes", slug: "funny", title: "Funny Quotes for Twitter / X [2026]", subheading: "Sarcastic truth bombs, coffee jokes, and absurd daily reality quotes.", h2s: ["Sarcastic Truth Bombs", "Coffee & Procrastination Wit", "Adulting Reality Quotes", "Hindi Funny Quotes for X"], h3s: ["Laugh Out Loud", "Relatable Truths", "Office Wit"], sampleItems: ["I am currently experiencing life at 15 FPS. Please send coffee. ☕💀", "Common sense is like deodorant. The people who need it most never use it. 😂"] },
      { type: "quotes", slug: "life", title: "Deep Life Quotes for Twitter / X [2026]", subheading: "Perspective altering thoughts on human nature, time, and solitude.", h2s: ["Human Nature & Psychology", "The Value of Time & Solitude", "Letting Go of Outcomes", "Hindi Life Quotes for X"], h3s: ["Philosophical Sparks", "Solitude & Peace", "Maturity Insights"], sampleItems: ["You don't need a hundred friends. You need four quarters instead of a hundred pennies. 🌿", "Life gets so much simpler when you stop explaining yourself to people who are committed to misunderstanding you. ✨"] },
    ],
  },

  // SECTION 7: FACEBOOK (20 Pages)
  {
    id: "facebook",
    name: "Facebook",
    section: 7,
    badge: "📘 Facebook",
    color: "#1877F2",
    subpages: [
      { type: "captions", slug: "attitude", title: "Attitude Facebook Captions [2026] — Photo & Profile DP", subheading: "Royal swag, handsome DP captions, and bold status for Facebook posts.", h2s: ["Facebook DP Attitude Captions", "Royal Swag Captions for Men", "Queen Attitude Captions for Women", "Hindi Facebook Attitude Captions"], h3s: ["New Profile Picture Captions", "Desi Tevar", "Savage Status"], sampleItems: ["Smile in front of people who hate you... it kills them! 🔥👑", "DP change kiya hai, tevar wahi purane hain! ⚡", "हमारा नाम ही काफी है तुम्हारी महफिल में खौफ पैदा करने के लिए! 💥"] },
      { type: "captions", slug: "funny", title: "Funny Facebook Captions [2026] — Family & Friends Humor", subheading: "Lighthearted family vacation jokes, friend photo roasts, and witty captions.", h2s: ["Vacation & Photo Dump Humor", "Friends Group Photo Jokes", "Family Gathering Funny Captions", "Hindi Funny FB Captions"], h3s: ["Group Photo Roasts", "Sunday Mood Captions", "Food & Party Humor"], sampleItems: ["We don't need filters, we need a miracle! 😂📸", "Friends who eat together, stay together... and steal each other's fries! 🍟", "भगवान ने मुझे बहुत खूबसूरत बनाया है, बस नजर लगाने वालों से बचाए! 😜"] },
      { type: "captions", slug: "love", title: "Love Facebook Captions [2026] — Couple Photos & Anniversaries", subheading: "Heartfelt milestone posts, wedding album captions, and romantic declarations.", h2s: ["Anniversary & Wedding Album Captions", "Couple Photo Captions for Facebook", "Romantic Appreciation Posts", "Hindi Love Captions FB"], h3s: ["Husband & Wife Captions", "Soulmate Love", "Family Milestone Captions"], sampleItems: ["Together is my favorite place to be. ❤️ Happy Anniversary to my forever person!", "In a world full of trends, I want to remain a timeless classic with you. 🌿✨"] },
      { type: "bio", slug: "attitude", title: "Attitude Facebook Bio & Intro Ideas [2026]", subheading: "Royal, VIP, and stylish Facebook profile bio templates with featured line styling.", h2s: ["VIP Facebook Account Bio", "Royal King Intro for FB", "Queen Swag Bio for Girls", "Hindi Attitude FB Bio"], h3s: ["Featured Work & Bio", "Bold Intro Quotes", "Royal Symbols"], sampleItems: ["★》King of Hearts 👑\n★》Royal Blood ⚡\n★》Living on My Own Terms 🔥\n★》Welcome to My Profile! 🌟"] },
      { type: "bio", slug: "funny", title: "Funny Facebook Bio & Intro Ideas [2026]", subheading: "Charming, humorous intro lines that showcase a welcoming and fun personality.", h2s: ["Witty Profile Intros", "Foodie & Lazy Bio Lines", "Friendly Humor Templates", "Hindi Funny FB Bio"], h3s: ["Lighthearted Bios", "Coffee Addict Intros", "Humorous Warnings"], sampleItems: ["Official page of someone who is 90% dry humor and 10% pizza 🍕😂", "I’m here to avoid talking to people in real life. Welcome! ☕"] },
      { type: "bio", slug: "hindi", title: "Facebook Bio in Hindi [2026] — हिंदी फेसबुक बायो", subheading: "Desi tevar, sanskari, and royal hindi bio templates for Facebook profiles.", h2s: ["देसी रॉयल फेसबुक बायो", "संस्कारी और शरीफ बायो", "महाकाल और भक्ति बायो", "शायराना फेसबुक बायो"], h3s: ["रॉयल अंदाज", "माता-पिता का लाडला", "सच्ची दोस्ती बायो"], sampleItems: ["👑 अपनी मर्जी का मालिक\n🚩 जय श्री महाकाल\n❤️ माँ-बापू का दुलारा\n⚡ दोस्ती जान से भी प्यारी"] },
      { type: "status", slug: "attitude", title: "Attitude Facebook Status Updates [2026]", subheading: "King tevar, silent hustle, and self-respect status updates for Facebook wall.", h2s: ["Facebook Wall Attitude Status", "Silent Hustle & Power Status", "Dignity & Royal Swag Status", "Hindi Attitude Status Facebook"], h3s: ["Short Status", "Tevar Couplets", "Bold Mindset"], sampleItems: ["जलने वाले जलते रहेंगे, हम अपना मुकाम बनाते रहेंगे! 🔥👑", "Respect is earned, honesty is appreciated, trust is gained, loyalty is returned. ⚡"] },
      { type: "status", slug: "love", title: "Love Facebook Status Updates [2026]", subheading: "Romantic thoughts, anniversary celebrations, and partner appreciation status.", h2s: ["Romantic Status for Facebook", "Relationship Milestones Status", "Soulmate Love Notes", "Hindi Love Status FB"], h3s: ["Sweet Romance", "Heartfelt Gratitude", "Forever Love"], sampleItems: ["Being someone's first love may be great, but being their last is beyond perfect. ❤️🌿", "तेरी बाहों में जो सुकून है, वो दुनिया के किसी कोने में नहीं। 🌸"] },
      { type: "status", slug: "sad", title: "Sad Facebook Status Updates [2026] — Emotional Lines", subheading: "Heartbreak, family grief, and quiet reflections for difficult days.", h2s: ["Emotional Heartbreak Status", "Quiet Reflection & Healing", "Grief & Remembrance Status", "Hindi Sad Status FB"], h3s: ["Healing Days", "Silent Tears", "Deep Loss Lines"], sampleItems: ["Sometimes memories sneak out of your eyes and roll down your cheeks. 🌧️💔", "कुछ लोग जिंदगी में सिर्फ सीख देने आते हैं, साथ निभाने नहीं।"] },
      { type: "shayari", slug: "love", title: "Love Shayari for Facebook Posts [2026]", subheading: "Classic romantic couplets and Urdu poetry ready to share with friends and family.", h2s: ["Romantic Shayari for Facebook", "2-Line Ishq Shayari in Hindi", "Dil Chhoo Lene Wali Mohabbat Shayari", "Couples Shayari for FB"], h3s: ["प्यार का अहसास", "सच्ची मोहब्बत", "दिल की बात"], sampleItems: ["न जाने क्या कशिश है तेरी बातों में,\nहर वक्त बस तेरा ही ख्याल रहता है। ❤️", "खुदा से जब भी कोई दुआ मांगी है,\nतेरी सलामती और तेरा साथ मांगा है। 🌸"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for Facebook Posts [2026]", subheading: "Desi swag, royal dabang tevar, and lion attitude shayari in Hindi.", h2s: ["Royal Dabang Shayari Facebook", "Lion Swag & Tevar Couplets", "Dushman Jalane Wali FB Shayari", "Hindi Attitude Shayari"], h3s: ["शेर की दहाड़", "दमदार रुतबा", "शानदार शख्सियत"], sampleItems: ["हम वो हैं जो कभी किसी के आगे नहीं झुकते,\nहमारे तेवर हमारी विरासत हैं! 🔥👑", "शौक अपने दम पर पाले जाते हैं,\nदूसरों के कंधों पर तो सिर्फ जनाजे उठते हैं! ⚡"] },
      { type: "quotes", slug: "attitude", title: "Attitude Quotes for Facebook [2026]", subheading: "Self-worth, resilience, and unapologetic character quotes.", h2s: ["Character & Integrity Quotes", "Resilience & Self-Worth", "Bold Stand Quotes for FB", "Hindi Attitude Quotes FB"], h3s: ["Unshakable Values", "King Mindset", "Strength Lines"], sampleItems: ["Never apologize for having high standards. The right people will rise to meet them. 👑⚡", "खामोशी से अपनी पहचान बनाओ, तुम्हारी कामयाबी खुद शोर मचाएगी! 🔥"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for Facebook [2026]", subheading: "Encouraging family, students, and professionals to pursue excellence.", h2s: ["Excellence & Hard Work Quotes", "Overcoming Hardships", "Morning Encouragement Quotes", "Hindi Motivational Quotes Facebook"], h3s: ["Daily Inspiration", "Courage to Grow", "Victory Affirmations"], sampleItems: ["The only limit to our realization of tomorrow will be our doubts of today. 🏆", "मुश्किलें हमेशा बेहतरीन लोगों के हिस्से में आती हैं, क्योंकि वही उन्हें हल करने की ताकत रखते हैं! ⚡"] },
      { type: "quotes", slug: "funny", title: "Funny Quotes for Facebook [2026]", subheading: "Humorous observations on marriage, parenting, bills, and everyday life.", h2s: ["Marriage & Relationship Humor", "Parenting & Family Truths", "Aging & Diet Jokes", "Hindi Funny Quotes FB"], h3s: ["Everyday Comedy", "Weekend Wit", "Chuckles"], sampleItems: ["I’m on a seafood diet. I see food and I eat it! 🍕😂", "My wife told me to stop impersonating a flamingo. I had to put my foot down. 🦩💀"] },
      { type: "quotes", slug: "life", title: "Deep Life Quotes for Facebook [2026]", subheading: "Meaningful life lessons on aging gracefully, forgiveness, and family values.", h2s: ["Family & Bond Life Quotes", "Forgiveness & Grace", "Aging Gracefully & Peace", "Hindi Life Lessons Facebook"], h3s: ["Grandparents Wisdom", "Peaceful Living", "Inner Calm"], sampleItems: ["In the end, it's not the years in your life that count. It's the life in your years. 🌿✨", "रिश्ते खून के नहीं, अहसास के होते हैं। अगर अहसास है तो अनजाने भी अपने हैं। ❤️"] },
    ],
  },

  // SECTION 8: SNAPCHAT (15 Pages)
  {
    id: "snapchat",
    name: "Snapchat",
    section: 8,
    badge: "👻 Snapchat",
    color: "#FFFC00",
    subpages: [
      { type: "captions", slug: "funny", title: "Funny Snapchat Captions [2026] — Streaks & Selfies", subheading: "Quick goofy filters, awkward selfies, and streak caption lines.", h2s: ["Streak Saver Captions", "Goofy Filter Captions", "Late Night Snaps Humor", "Hindi Funny Snapchat Captions"], h3s: ["🔥 Streak Captions", "Filter Roasts", "Snack Snaps"], sampleItems: ["Send me food or don't snap me 🍕👻", "Keeping the streak alive with minimal effort 🔥😂", "Filter doing 99% of the heavy lifting today! 💀"] },
      { type: "captions", slug: "attitude", title: "Attitude Snapchat Captions [2026] — Snap Story Swag", subheading: "Sassy mirror selfies, car rides, and king attitude snap story captions.", h2s: ["Mirror Selfie Attitude Captions", "Late Night Car Drive Captions", "Sassy Snap Story Lines", "Hindi Attitude Captions Snapchat"], h3s: ["Night Drive Vibez", "Savage Snaps", "Golden Hour Glow"], sampleItems: ["No GPS needed, I'm already in my own lane. ⚡🚗", "Look at me thriving in silence 👑✨", "हमसे मुकाबला करने की हिम्मत नहीं तो जलना बंद करो! 🔥"] },
      { type: "bio", slug: "attitude", title: "Attitude Snapchat Bio Ideas [2026]", subheading: "Quick, witty, and bold bio text for your Snapchat profile and Bitmoji.", h2s: ["Short Attitude Snap Bios", "Savage Snap Intros", "Bitmoji Matching Bios", "Hindi Attitude Snap Bio"], h3s: ["Single Line Snap Bios", "Direct & Sassy", "Mystery Bios"], sampleItems: ["🔥 Streaks Only | Don't Spam\n⚡ Living unapologetically\n👻 Add for good vibes"] },
      { type: "bio", slug: "funny", title: "Funny Snapchat Bio Ideas [2026]", subheading: "Hilarious one-liners and goofy bios that make friends smile.", h2s: ["Goofy One-Liner Bios", "Streak Obsessed Bios", "Sarcastic Snap Intros", "Foodie Snap Bios"], h3s: ["Streak Alerts", "Filter Addicts", "Coffee Snaps"], sampleItems: ["I snap therefore I am 👻🍕\nKeeping 100+ streaks alive through sheer panic 🔥"] },
      { type: "status", slug: "attitude", title: "Attitude Snapchat Story Status [2026]", subheading: "Bold 24-hour snap story text overlays for confidence and self-worth.", h2s: ["Confidence Story Overlays", "Unbothered Attitude Stories", "Glow Up Snap Updates", "Hindi Attitude Story Status"], h3s: ["Boss Moves", "Quiet Power", "Savage Overlay"], sampleItems: ["They watch my story to see what they missed out on. 👑⚡", "Silent moves, loud glow up. ✨"] },
      { type: "status", slug: "love", title: "Love Snapchat Story Status [2026]", subheading: "Cute relationship snaps, sweet appreciation, and crush story lines.", h2s: ["Crush Appreciation Snaps", "Aesthetic Relationship Stories", "Cute Snap Captions for Partner", "Hindi Love Snap Status"], h3s: ["Sweet Snaps", "Soft Hearts", "Crush Hints"], sampleItems: ["You make my ordinary days feel magical. ❤️🌿", "My favorite notification is always you. ✨👻"] },
      { type: "shayari", slug: "funny", title: "Funny Shayari for Snapchat [2026]", subheading: "Quick 2-line comedy rhymes and funny couplets for snap stories.", h2s: ["Streaks & Friends Funny Shayari", "Exam & Single Life Rhymes", "Food & Tea Comedy Couplets", "Hindi Funny Snap Shayari"], h3s: ["चाय और समोसा शायरी", "स्ट्रिक्स शायरी", "मजेदार दोहे"], sampleItems: ["दिन भर सोते हैं, रात भर जगते हैं,\nहम स्नैपचैट की स्ट्रीक्स बड़े चाव से रखते हैं! 😂🔥", "इश्क विश्क सब धोखा है,\nस्ट्रीक बचा लो अभी मौका है! 👻"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for Snapchat [2026]", subheading: "Dabang, tevar, and royal swag shayari for snap photos.", h2s: ["Royal Tevar Snap Shayari", "Dushman Jalane Wali Shayari", "Short 2-Line Attitude Verses", "Hindi Snap Shayari"], h3s: ["रॉयल तेवर", "शेर शायरी", "शानदार अंदाज"], sampleItems: ["हम अपनी अदाओं से दिलों पर राज करते हैं,\nदुश्मनों की महफिल में भी अपने अंदाज से रहते हैं! 🔥👑", "तेवर हमारे वही हैं जो कल थे,\nबस आज औकात कुछ और बड़ी हो गई है! ⚡"] },
      { type: "quotes", slug: "funny", title: "Funny Quotes for Snapchat [2026]", subheading: "Short hilarious truth bombs and meme quotes for snap overlays.", h2s: ["Meme Truth Overlays", "Late Night Absurd Humor", "Relatable Laziness Quotes", "Hindi Funny Snap Quotes"], h3s: ["Late Night Wit", "Filter Quotes", "Snack Logic"], sampleItems: ["I followed my heart and it led me to the fridge. 🍕😋", "My bed is a magical place where I suddenly remember everything I forgot to do. 😴💀"] },
      { type: "quotes", slug: "attitude", title: "Attitude Quotes for Snapchat [2026]", subheading: "Unapologetic independence and fierce confidence quotes for snaps.", h2s: ["Fierce Independence Quotes", "Confidence Snap Quotes", "Unbothered Vibe Overlays", "Hindi Attitude Quotes Snap"], h3s: ["Self Respect First", "Alpha Vibe", "Unstoppable"], sampleItems: ["I am who I am. Your approval is not required. 👑⚡", "Built for the storm, not the gentle breeze. 💥"] },
    ],
  },

  // SECTION 9: THREADS (15 Pages)
  {
    id: "threads",
    name: "Threads",
    section: 9,
    badge: "🧵 Threads",
    color: "#000000",
    subpages: [
      { type: "captions", slug: "attitude", title: "Attitude Threads Captions & Posts [2026]", subheading: "Conversational, witty, and unapologetic text posts for the Threads algorithm.", h2s: ["Unapologetic Text Posts", "Conversational Attitude Hooks", "Boundary Setting Threads", "Hindi Attitude Threads"], h3s: ["Text-First Hooks", "Hot Takes", "Savage Statements"], sampleItems: ["Unfollow me if you want, my peace of mind is not up for negotiation. ⚡", "I don't need a table where I have to beg for a seat. I'll build my own room. 👑"] },
      { type: "captions", slug: "funny", title: "Funny Threads Captions & Relatable Posts [2026]", subheading: "Casual conversational humor, daily absurdity, and viral Threads thoughts.", h2s: ["Viral Relatable Threads", "Daily Coffee & Chaos Humor", "Social Commentary Sarcasm", "Hindi Funny Threads"], h3s: ["Casual Observational Humor", "Late Night Thoughts", "Relatable Rants"], sampleItems: ["Why do we say 'slept like a baby' when babies wake up crying every 2 hours? I want to sleep like a cat in a sunbeam. 🐱💤", "I need a delete button for yesterday's late-night impulse purchases. 😭🛒"] },
      { type: "bio", slug: "attitude", title: "Attitude Threads Bio Ideas [2026]", subheading: "Minimalist, bold, and conversational bio templates tailored for Threads.", h2s: ["Conversational Attitude Bios", "Minimalist Creator Threads Bio", "Witty Persona Intros", "Hindi Threads Bio"], h3s: ["Casual Cool", "Thoughtful Rebel", "Sharp Bios"], sampleItems: ["Thinking out loud. Agree, disagree, or take notes. 🧵⚡\nUnapologetically me."] },
      { type: "bio", slug: "funny", title: "Funny Threads Bio Ideas [2026]", subheading: "Hilarious, self-aware intro text that fits the casual Threads culture.", h2s: ["Self-Aware Sarcastic Bios", "Casual Meme Lover Intros", "Relatable Human Bios", "Hindi Funny Threads Bio"], h3s: ["Lighthearted Wit", "Internet Enthusiast", "Coffee Humor"], sampleItems: ["Here to overshare thoughts that belong in a therapist's office. 🛋️😂\nFollow for daily chaos."] },
      { type: "status", slug: "attitude", title: "Attitude Status Updates for Threads [2026]", subheading: "Sharp, thought-provoking statements on self-reliance and ambition.", h2s: ["Self-Reliance Statements", "Ambition & Focus Thoughts", "No-Nonsense Status", "Hindi Attitude Status Threads"], h3s: ["Direct Truths", "Focus Quotes", "Silent Winning"], sampleItems: ["The biggest flex is staying calm when everything around you tries to shake you. 👑🌿", "Work until your signature becomes an autograph. ⚡"] },
      { type: "status", slug: "love", title: "Love Status & Micro-Essays for Threads [2026]", subheading: "Vulnerable, tender, and poetic observations on modern relationships.", h2s: ["Modern Relationship Reflections", "Tender Love Micro-Essays", "Gentle Companionship Notes", "Hindi Love Status Threads"], h3s: ["Soft Era Love", "Safe Spaces", "Real Intimacy"], sampleItems: ["True love is having someone who gives you peace, not constant anxiety. Find your safe harbor. ❤️🌿", "The right person makes you fall in love with yourself all over again. ✨"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for Threads [2026]", subheading: "Deep poetic tevar and meaningful couplets formatted for Threads readers.", h2s: ["Poetic Tevar Couplets", "Dignified Hindi Shayari", "Self-Worth Urdu Verses", "Hindi Attitude Shayari Threads"], h3s: ["शायराना तेवर", "खुद्दारी के शेर", "बेबाक लफ़्ज़"], sampleItems: ["हमसे मुक़ाबला करने की सोच भी मत रखना,\nहम वो हैं जो हारे हुए खेल को भी जीत में बदल देते हैं! 🔥👑", "अपनी खुद्दारी को कभी बिकने न दिया हमने,\nभूखे रहे मगर किसी के आगे हाथ न फैलाया! ⚡"] },
      { type: "shayari", slug: "love", title: "Love Shayari for Threads [2026]", subheading: "Soulful, delicate, and touching Hindi poetry verses for text posts.", h2s: ["Soulful Hindi Ghazal Couplets", "Delicate Ishq Poetry", "Heartfelt Nazm Lines for Threads", "Hindi Romantic Shayari"], h3s: ["नाजुक अहसास", "इश्क और खामोशी", "रूहानी मोहब्बत"], sampleItems: ["तेरी यादों का भी अपना एक अलग मौसम है,\nजब भी आती हैं, दिल में बहार छा जाती है। ❤️🌸", "इश्क वो नहीं जो चेहरे से हो,\nइश्क वो है जो रूह को छू जाए। 🌿"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for Threads [2026]", subheading: "Nuanced, high-signal inspiration for creatives, founders, and seekers.", h2s: ["Creative Resilience Quotes", "Founder Long-Term Thinking", "Daily Mental Clarity", "Hindi Motivational Quotes Threads"], h3s: ["Clarity Over Speed", "Daily Discipline", "Mindset Expansion"], sampleItems: ["Consistency is the rarest form of genius. Show up even when you don't feel like it. 🏆⚡", "Your direction is more important than your speed. 🌿"] },
      { type: "quotes", slug: "attitude", title: "Attitude Quotes for Threads [2026]", subheading: "Unapologetic boundary setting, self-validation, and calm power.", h2s: ["Calm Power & Poise", "Boundary Setting Quotes", "Validation From Within", "Hindi Attitude Quotes Threads"], h3s: ["Self Validation", "Unbothered Stance", "Inner Strength"], sampleItems: ["I stopped explaining myself when I realized people only understand from their level of perception. 👑", "Walk like you own the room, or walk like you don't care who does. ⚡"] },
    ],
  },

  // SECTION 10: PINTEREST (15 Pages)
  {
    id: "pinterest",
    name: "Pinterest",
    section: 10,
    badge: "📌 Pinterest",
    color: "#E60023",
    subpages: [
      { type: "captions", slug: "aesthetic", title: "Aesthetic Pinterest Captions & Pin Descriptions [2026]", subheading: "Cozy vibes, moodboards, golden hour photos, and aesthetic pin text.", h2s: ["Cozy & Autumn Pin Descriptions", "Golden Hour & Moodboard Captions", "Minimalist Aesthetic Pin Text", "Hindi Aesthetic Captions"], h3s: ["Soft Era Aesthetics", "Coffee & Books Vibes", "Dreamy Living"], sampleItems: ["Romancing the quiet, slow moments of life ✨☕ #Aesthetic #SoftLiving", "Golden hours and gentle powers. Building a home within myself. 🌿🕯️", "Lost in the magic of pastel sunsets and cozy bookshops. 🌸📖"] },
      { type: "captions", slug: "motivational", title: "Motivational Pinterest Pin Quotes & Captions [2026]", subheading: "Vision board affirmations, goal setting, and female empowerment pins.", h2s: ["Vision Board Pin Captions", "Dream Life & Goal Setting", "Daily Self-Love Affirmations", "Hindi Motivational Pinterest Pins"], h3s: ["Manifestation Quotes", "That Girl Routine", "Abundance Mindset"], sampleItems: ["Becoming the woman of my own dreams: disciplined, glowing, and at peace. 👑🌿 #Manifestation", "What you seek is seeking you. Trust the timing of your life. ✨🏆"] },
      { type: "bio", slug: "aesthetic", title: "Aesthetic Pinterest Bio Ideas [2026] — Board Curator", subheading: "Dreamy, artistic, and evocative profile bio templates for Pinterest curators.", h2s: ["Moodboard Curator Bio", "Soft Aesthetic & Cozy Living Bio", "Art & Fashion Lover Bio", "Hindi Aesthetic Pinterest Bio"], h3s: ["Dreamer & Collector", "Vintage Soul", "Pastel & Minimalist"], sampleItems: ["✦ Curator of cozy corners & soft aesthetics 🕯️\n✦ Finding poetry in everyday light ✨\n✦ Pinning my dream reality 📌"] },
      { type: "bio", slug: "creative", title: "Creative Pinterest Bio Ideas [2026] — Design & DIY", subheading: "Inspirational bios for home decor enthusiasts, DIY creators, and artists.", h2s: ["Interior Design & Home Decor Bio", "DIY & Craft Lover Bio", "Graphic Design & Color Palette Bio", "Creative Maker Intros"], h3s: ["Design Inspo", "Home Stylist", "Craft Explorer"], sampleItems: ["🎨 Designing joyful spaces & daily inspiration\n🌿 DIY projects, plant therapy & vintage finds\n📌 Save my boards for your next dream makeover! ✨"] },
      { type: "status", slug: "motivational", title: "Motivational Vision Board Quotes for Pinterest [2026]", subheading: "Empowering typography quotes for vision boards and lockscreens.", h2s: ["Lockscreen Vision Board Quotes", "Abundance & Success Affirmations", "Morning Reset Quotes", "Hindi Motivational Pin Status"], h3s: ["Daily Affirmation", "Glow Up Goal", "Future Self"], sampleItems: ["I am attracting peace, prosperity, and people who bring out the absolute best in me. 🌟🌿", "She believed she could, so she did. 🏆✨"] },
      { type: "status", slug: "aesthetic", title: "Aesthetic Daily Quotes for Pinterest [2026]", subheading: "Minimalist, pastel, and poetic daily quotes for aesthetic boards.", h2s: ["Pastel & Neutral Aesthetic Quotes", "Poetry in Everyday Living", "Slow Morning Musings", "Hindi Aesthetic Quotes Pinterest"], h3s: ["Soft Moments", "Warm Chai Thoughts", "Gentle Rain Lines"], sampleItems: ["Let life happen softly. You don't need to force what is naturally meant to bloom. 🌸☕", "Find beauty in the quiet chapters of your journey. 🌿✨"] },
      { type: "shayari", slug: "love", title: "Love Shayari for Pinterest Moodboards [2026]", subheading: "Beautiful calligraphy verses and romantic poetry in Hindi & Urdu.", h2s: ["Calligraphy Love Shayari Pins", "Romantic Urdu Aesthetic Verses", "2-Line Mohabbat Shayari for Boards", "Hindi Romantic Pinterest Shayari"], h3s: ["खूबसूरत एहसास", "इश्क और सादगी", "गुलजार की कलम से"], sampleItems: ["तेरे होने से ही मुकम्मल है मेरी हर एक सुबह,\nतू जो मिल जाए तो कायनात मिल जाए। ❤️🌸", "सादगी में भी जो कयामत ढाए,\nउसे किसी बनावट की जरूरत नहीं होती। ✨"] },
      { type: "shayari", slug: "motivational", title: "Motivational Shayari for Pinterest Vision Pins [2026]", subheading: "Uplifting Hindi couplets on dreams, destiny, and hard work for board pins.", h2s: ["सपनों और हौसलों की शायरी", "मेहनत और तकदीर के शेर", "दृढ़ संकल्प शायरी पिंस", "हिंदी मोटिवेशनल शायरी"], h3s: ["मंजिल के रास्ते", "हौसलों की उड़ान", "कर्म की शक्ति"], sampleItems: ["सफर में मुश्किलें आएं तो जुर्रत और बढ़ती है,\nकोई जब रास्ता रोके तो हिम्मत और बढ़ती है! 🏆⚡", "तू खुद की खोज में निकल, तू किसलिए हताश है,\nतू चल तेरे वजूद की समय को भी तलाश है! 🌟"] },
      { type: "quotes", slug: "aesthetic", title: "Aesthetic Quotes for Pinterest [2026] — Minimalist Typography", subheading: "Clean typography quotes on self-care, mindfulness, and gentle living.", h2s: ["Mindfulness & Self-Care Quotes", "Minimalist Typography Aesthetic", "Gentle Living Affirmations", "Hindi Aesthetic Quotes"], h3s: ["Soft Era Wisdom", "Peace & Solitude", "Morning Calm"], sampleItems: ["Bloom where you are planted, but never stop reaching for the light. 🌿🌸", "Create a life that feels good on the inside, not just one that looks good on the outside. ✨"] },
      { type: "quotes", slug: "motivational", title: "Motivational Quotes for Pinterest [2026] — Empowering Minds", subheading: "Empowering mindset quotes for women, entrepreneurs, and dreamers.", h2s: ["Empowering Female Mindset", "Building Wealth & Freedom", "Daily Resilience Quotes", "Hindi Motivational Quotes Pinterest"], h3s: ["Unstoppable Energy", "Goal Smasher", "Own Your Power"], sampleItems: ["The universe is not outside of you. Look inside yourself; everything that you want, you already are. — Rumi 🌟", "Success isn't about the destination; it's about the woman you become on the way. 👑🏆"] },
    ],
  },

  // SECTION 11: WHATSAPP (20 Pages)
  {
    id: "whatsapp",
    name: "WhatsApp",
    section: 11,
    badge: "💬 WhatsApp",
    color: "#25D366",
    subpages: [
      { type: "captions", slug: "attitude", title: "Attitude WhatsApp Captions [2026] — About & Status", subheading: "Royal swag, king attitude, and sharp 1-line quotes for WhatsApp.", h2s: ["WhatsApp About Attitude Captions", "Royal Swag Status for Boys", "Queen Energy Status for Girls", "Hindi WhatsApp Attitude Lines"], h3s: ["Short 1-Line About", "Tevar Status", "Badmashi Lines"], sampleItems: ["Attitude is my signature, and I don't give it to everyone. 👑⚡", "खामोशी मेरी आदत है, कमजोरी नहीं! 🔥", "Born to rule, not to follow. 💥"] },
      { type: "captions", slug: "funny", title: "Funny WhatsApp Captions [2026] — About & Group Chat", subheading: "Hilarious one-liners, group chat bios, and sarcastic profile about lines.", h2s: ["Funny WhatsApp About Lines", "Group Chat Bio & Rules", "Relatable Sarcastic Lines", "Hindi Funny WhatsApp Captions"], h3s: ["Short Funny About", "Group Admin Jokes", "Single Life Humor"], sampleItems: ["Available only when wifi is connected 📶🍕", "Status: Eating snacks and minding my own business 😴", "ग्रुप में सिर्फ वो लोग बोलें जिनकी घर में चलती हो! 😂💀"] },
      { type: "captions", slug: "love", title: "Love WhatsApp Captions [2026] — Romantic About & Status", subheading: "Heartfelt love couplets, partner initials, and romantic profile about lines.", h2s: ["Romantic WhatsApp About Lines", "Couple Heart Initials About", "Sweet Soulmate Captions", "Hindi Love WhatsApp Lines"], h3s: ["Cute Relationship About", "2-Line Love Couplets", "Heartwarming Lines"], sampleItems: ["Living my happily ever after with you ❤️🌿", "तेरी मुस्कान ही मेरी दुनिया का सबसे खूबसूरत नजारा है। 🌸", "Locked in love forever 💍✨"] },
      { type: "bio", slug: "attitude", title: "Attitude WhatsApp Bio & About Lines [2026]", subheading: "Royal, VIP, and badmashi About text templates for your WhatsApp profile.", h2s: ["Royal VIP About Lines", "Short Tevar Profile About", "Boys Swag WhatsApp About", "Hindi Attitude WhatsApp Bio"], h3s: ["Single Line VIP About", "Symbols & Emojis", "King Mindset"], sampleItems: ["👑 King of My Own World\n⚡ Silent Hustler\n🚫 Don't copy my style!"] },
      { type: "bio", slug: "funny", title: "Funny WhatsApp Bio & About Lines [2026]", subheading: "Funny and witty About section lines for lighthearted personalities.", h2s: ["Witty Profile About Text", "Sarcastic Status Lines", "Foodie & Lazy Bio Lines", "Hindi Funny About Lines"], h3s: ["Snack Lover", "Do Not Disturb", "Humorous Intro"], sampleItems: ["I’m not lazy, I’m on energy saving mode 🔋😴", "Warning: Spontaneous coffee outbursts ahead ☕"] },
      { type: "bio", slug: "hindi", title: "WhatsApp Bio in Hindi [2026] — हिंदी व्हाट्सएप्प बायो", subheading: "Desi tevar, mahakal bhakt, and sanskari hindi about lines for WhatsApp.", h2s: ["महाकाल भक्त व्हाट्सएप्प बायो", "रॉयल देसी तेवर बायो", "माता-पिता का सम्मान बायो", "शायराना हिंदी अबाउट"], h3s: ["धार्मिक बायो", "देसी अंदाज", "संस्कारी बोल"], sampleItems: ["🚩 महाकाल के भक्त\n👑 अपनी मर्जी से जीने वाले\n❤️ माँ-बापू की सेवा ही धर्म है"] },
      { type: "status", slug: "attitude", title: "Attitude WhatsApp Status [2026] — Best Collection", subheading: "Royal tevar, 2-line swag, and dushman jalane wale status lines for WhatsApp.", h2s: ["Short Attitude Status for WhatsApp", "2-Line Attitude Status in Hindi", "Royal Attitude Status for Boys", "Savage Status for Girls"], h3s: ["Attitude in Hindi", "Attitude in English", "Royal Tevar"], sampleItems: ["हथियार तो शौक के लिए रखते हैं, खौफ के लिए तो बस हमारी आंखें ही काफी हैं! 🔥👑", "I am not here to please everyone. I am here to live my life on my own terms. ⚡"] },
      { type: "status", slug: "love", title: "Love WhatsApp Status [2026] — Romantic Hindi & English", subheading: "Touching romantic status lines with 1-click share ready for your partner.", h2s: ["Romantic Status in Hindi", "Short Love Status in English", "Soulmate & Couple Status", "Emotional Pyar Status"], h3s: ["दिल छूने वाले स्टेटस", "रोमांटिक लाइन्स", "सच्ची मोहब्बत"], sampleItems: ["तेरा साथ ही मेरी जिंदगी की सबसे खूबसूरत दौलत है। ❤️🌿", "You are the reason my smile stays so bright. ✨"] },
      { type: "status", slug: "sad", title: "Sad WhatsApp Status [2026] — दर्द और तन्हाई स्टेटस", subheading: "Heartbreak, tears, loneliness, and emotional pain status lines.", h2s: ["Dard Bhara WhatsApp Status", "Tanhai & Breakup Status", "Emotional 2-Line Status in Hindi", "Silent Pain Quotes"], h3s: ["टूटा हुआ दिल", "आंसू और खामोशी", "दर्द-ए-जिंदगी"], sampleItems: ["खामोशियां ही बयां करती हैं वो दर्द जो लफ्जों में नहीं आ पाता। 💔🌧️", "Tired of putting on a fake smile when everything hurts inside."] },
      { type: "status", slug: "funny", title: "Funny WhatsApp Status [2026] — हँसी-मज़ाक स्टेटस", subheading: "Laugh-out-loud jokes, desi humor, and funny status quotes for WhatsApp.", h2s: ["Desi Funny WhatsApp Status", "Relatable Comedy Lines", "Friends Roasting Status", "Hindi Funny Status"], h3s: ["मजेदार चुटकुले", "दोस्ती मजाक", "संडे कॉमेडी"], sampleItems: ["अगर नींद एक ओलंपिक खेल होती, तो हम गोल्ड मेडल जीत चुके होते! 😂🥇", "चाय और हमसफ़र दोनों कड़क होने चाहिए, वरना मजा नहीं आता! ☕😜"] },
      { type: "shayari", slug: "love", title: "Love Shayari for WhatsApp Status [2026]", subheading: "2-line and 4-line romantic shayari in Hindi with instant copy and share.", h2s: ["2-Line Romantic Shayari for Status", "4-Line Pyar Mohabbat Shayari", "Dil Chhoo Lene Wali Love Shayari", "Hindi Romantic Couplets"], h3s: ["इश्क की मीठी बातें", "रोमांटिक शेर", "दिलबर के नाम"], sampleItems: ["तेरी आँखों की कशिश दिल में उतर जाती है,\nतू जब मुस्कुराती है तो जिंदगी संवर जाती है। ❤️🌸", "दुआ है रब से कि हर जनम में तेरा ही साथ मिले,\nतेरे बिना तो ये जिंदगी भी अधूरी लगती है। 🌿"] },
      { type: "shayari", slug: "attitude", title: "Attitude Shayari for WhatsApp Status [2026]", subheading: "Royal swag, dabang tevar, and lion attitude shayari in Hindi.", h2s: ["Royal Swag Shayari in Hindi", "Dabang Tevar 2-Line Couplets", "Dushman Jalane Wali Shayari", "Khatarnak Attitude Shayari"], h3s: ["शेर का अंदाज", "रॉयल तेवर", "दमदार शायरी"], sampleItems: ["हमसे मुकाबला करने की औकात नहीं तुम्हारी,\nहम तो वो हैं जो समंदर का रुख भी मोड़ देते हैं! 🔥👑", "हमारी खामोशी पर मत जाना,\nजब हम बोलेंगे तो इतिहास बदल देंगे! ⚡"] },
      { type: "shayari", slug: "sad", title: "Sad Shayari for WhatsApp Status [2026]", subheading: "Emotional dard, bewafa, and broken heart shayari for WhatsApp status.", h2s: ["Broken Heart Shayari in Hindi", "Tanhai & Dard Bhari Shayari", "2-Line Sad Couplets for Status", "Bewafa Shayari Hindi"], h3s: ["दर्द भरे आंसू", "टूटे दिल की दास्तान", "तन्हा रातें"], sampleItems: ["दिल के टुकड़े समेटे भी तो कैसे,\nहर टुकड़े पर तेरा ही नाम लिखा है। 💔🌧️", "बहुत चाहा तुझे मगर पा न सके,\nकिस्मत में ही नहीं था तेरा साथ।"] },
      { type: "quotes", slug: "motivational", title: "Motivational WhatsApp Quotes [2026] — प्रेरणादायक विचार", subheading: "Morning motivation, success mindset, and wisdom quotes for status sharing.", h2s: ["Daily Morning Motivation Quotes", "Success & Hustle Status Quotes", "Inspirational Thoughts in Hindi", "Short Discipline Quotes"], h3s: ["सफलता के नियम", "हौसले की उड़ान", "कर्म और विश्वास"], sampleItems: ["जिंदगी में कभी हार मत मानो, क्या पता तुम्हारी अगली कोशिश ही तुम्हारी कामयाबी बन जाए! 🏆⚡", "Success comes to those who are too busy looking for it to worry about failing. 💥"] },
      { type: "quotes", slug: "funny", title: "Funny WhatsApp Quotes [2026]", subheading: "Everyday life comedy, marriage jokes, and sarcastic status quotes.", h2s: ["Hilarious Life Quotes", "Sarcastic Status Quotes", "Friendship Comedy Quotes", "Hindi Funny Quotes"], h3s: ["मजेदार विचार", "दोस्त की चुटकी", "हंसी के ठहाके"], sampleItems: ["My wallet and I are currently not on speaking terms. 💸😂", "इंसान का सबसे बड़ा दुश्मन उसका अपना अलार्म घड़ी है! ⏰💀"] },
    ],
  },
];

// Helper functions for dynamic lookup
export function getMasterSeoPageByRoute(route: string): MasterSeoPage | undefined {
  const clean = route.startsWith("/") ? route : `/${route}`;

  // Check Core Pages
  const core = CORE_PAGES.find((p) => p.route === clean);
  if (core) return core;

  // Check Platform Subpages
  for (const plat of ALL_PLATFORM_BLUEPRINTS) {
    for (const sub of plat.subpages) {
      const expectedRoute = `/${plat.id}-${sub.type}/${sub.slug}`;
      if (expectedRoute === clean) {
        return {
          id: `${plat.id}-${sub.type}-${sub.slug}`,
          route: expectedRoute,
          section: plat.section,
          sectionName: `${plat.name} Pages`,
          platform: plat.id,
          contentType: sub.type,
          subCategory: sub.slug,
          h1: sub.title,
          h2s: sub.h2s,
          h3s: sub.h3s,
          metaTitle: `${sub.title.slice(0, 55)} | Unitoolkit`,
          metaDescription: `${sub.subheading} Copy-paste instantly! Updated 2026.`,
          primaryKeyword: `${plat.name.toLowerCase()} ${sub.slug} ${sub.type}`,
          secondaryKeywords: [
            `best ${plat.name.toLowerCase()} ${sub.slug} ${sub.type}`,
            `${sub.slug} ${sub.type} for ${plat.name.toLowerCase()}`,
            `${sub.slug} ${sub.type} in hindi`,
          ],
          badge: `${plat.name} ${sub.slug.toUpperCase()}`,
          subheading: sub.subheading,
          sampleItems: sub.sampleItems,
          faqs: [
            {
              question: `How do I copy these ${plat.name} ${sub.slug} lines?`,
              answer: `Click on any card to copy instantly to your clipboard, or tap the AI button to generate customized variations.`,
            },
            {
              question: `Are these lines updated for 2026?`,
              answer: `Yes, all lines are curated daily for maximum social reach and viral potential.`,
            },
          ],
        };
      }
    }
  }

  // Parse long-tail route format: `/${platformId}-${contentType}/${subslug}`
  const match = clean.match(/^\/([a-z]+)-([a-z]+)\/([a-z0-9-]+)$/);
  if (match) {
    const [, platformId, contentType, subslug] = match;
    const plat = ALL_PLATFORM_BLUEPRINTS.find((p) => p.id === platformId);
    const platName = plat ? plat.name : platformId.charAt(0).toUpperCase() + platformId.slice(1);
    const subTitle = subslug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const typeTitle = contentType.charAt(0).toUpperCase() + contentType.slice(1);

    return {
      id: `${platformId}-${contentType}-${subslug}`,
      route: clean,
      section: plat ? plat.section : 2,
      sectionName: `${platName} Pages`,
      platform: platformId,
      contentType: contentType as MasterSeoPage["contentType"],
      subCategory: subslug,
      h1: `Best ${subTitle} ${typeTitle} for ${platName} [2026]`,
      h2s: [
        `Top Trending ${subTitle} ${typeTitle}`,
        `1-Click Copy Ready ${subTitle} Lines`,
        `Short & Viral ${platName} ${typeTitle}`,
        `AI ${platName} ${typeTitle} Generator`,
      ],
      h3s: [`${subTitle} for Photos`, `${subTitle} for Reels`, `${subTitle} for Stories`],
      metaTitle: `${subTitle} ${platName} ${typeTitle} [2026] | UniToolkit`,
      metaDescription: `Best ${subslug} ${contentType} for ${platName}. 1-click copy with instant AI variation generator. Updated for 2026.`,
      primaryKeyword: `${subslug} ${contentType} for ${platformId}`,
      secondaryKeywords: [
        `best ${subslug} ${platformId} ${contentType}`,
        `${platformId} ${subslug} lines`,
        `${subslug} ${contentType} in hindi`,
      ],
      badge: `${platName} ${subTitle}`,
      subheading: `Discover curated ${subslug} ${contentType} engineered for high engagement and viral reach on ${platName}.`,
      sampleItems: [
        `Silent moves, loud results. ⚡ Living in my own chapter on ${platName}.`,
        `Aesthetic mind, chaotic soul ✨ Coffee in one hand, dreams in another.`,
        `जो खामोशी समझ ले, वही सच्चा हमसफ़र है। ❤️🌿`,
        `Building my empire in silence. Let success make the noise. 👑`,
      ],
      faqs: [
        {
          question: `How do I copy these ${subTitle} ${typeTitle} for ${platName}?`,
          answer: `Click any card or the copy button to copy directly to your clipboard, or remix it with our free AI tool.`,
        },
        {
          question: `Are these lines updated for 2026?`,
          answer: `Yes, all ${platName} ${subslug} lines are curated daily for maximum social reach and viral potential.`,
        },
      ],
    };
  }

  return undefined;
}
