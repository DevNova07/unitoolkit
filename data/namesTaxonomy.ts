// =========================================================================
// 🌍 UniToolkit Global Names — Master Taxonomy & Route Definitions (135 Pages)
// =========================================================================

export interface NameCategoryMeta {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  intro: string;
  type: "core" | "origin" | "religion" | "style" | "meaning" | "letter" | "popularity" | "ai" | "utility";
  filterKey?: string;
  filterValue?: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

// -------------------------------------------------------------
// 1. CORE NAME HUBS (6 Pages)
// -------------------------------------------------------------
export const CORE_NAME_HUBS: NameCategoryMeta[] = [
  {
    slug: "boy",
    name: "Boy Names",
    h1: "Top Baby Boy Names with Meanings & Origins [2026]",
    metaTitle: "Best Baby Boy Names [2026] — Meanings, Origins & Trends | UniToolkit",
    metaDescription: "Discover thousands of popular, modern, royal, and unique baby boy names with detailed meanings, cultural origins, and pronunciation guides.",
    badge: "👦 Boy Names Collection",
    intro: "Explore timeless, powerful, and modern boy names across all global traditions and cultures. Find the perfect name with verified meanings and origins.",
    type: "core",
    filterKey: "gender",
    filterValue: "boy",
    faqs: [
      { question: "What are the most popular baby boy names in 2026?", answer: "Top trending boy names globally include Liam, Noah, Aarav, Muhammad, Oliver, Leo, Lucas, and Zayn, combining modern rhythm with strong historical roots." },
      { question: "How do I choose a strong boy name?", answer: "Look for names with meanings symbolizing courage, wisdom, light, or honor, and check how naturally the name flows with your family last name." },
    ],
    relatedSlugs: ["girl", "unisex", "baby", "unique", "modern", "royal"],
  },
  {
    slug: "girl",
    name: "Girl Names",
    h1: "Beautiful Baby Girl Names with Meanings & Origins [2026]",
    metaTitle: "Best Baby Girl Names [2026] — Aesthetic, Unique & Meaningful | UniToolkit",
    metaDescription: "Browse thousands of beautiful, modern, aesthetic, and classic baby girl names with authentic meanings, cultural heritage, and origins.",
    badge: "👧 Girl Names Collection",
    intro: "Find lovely, elegant, and melodious girl names that inspire grace, wisdom, and beauty. Curated across international and regional heritages.",
    type: "core",
    filterKey: "gender",
    filterValue: "girl",
    faqs: [
      { question: "What are the most popular baby girl names in 2026?", answer: "Top trending girl names include Olivia, Emma, Amelia, Aisha, Sophia, Ananya, Mia, and Luna, beloved for their soft phonetics and uplifting meanings." },
      { question: "What makes a baby girl name timeless?", answer: "Names that carry deep historical or cultural meaning (like Grace, Zara, Sophia, Maya) remain elegant and memorable across generations." },
    ],
    relatedSlugs: ["boy", "unisex", "baby", "cute", "elegant", "beautiful"],
  },
  {
    slug: "unisex",
    name: "Unisex & Gender-Neutral Names",
    h1: "Modern Unisex & Gender-Neutral Names [2026]",
    metaTitle: "Best Unisex & Gender-Neutral Names [2026] | UniToolkit",
    metaDescription: "Explore chic, modern, and versatile gender-neutral names suitable for boys and girls across all cultures and languages.",
    badge: "⚡ Unisex Collection",
    intro: "Discover stylish, versatile, and forward-thinking unisex names that offer timeless balance and modern flair.",
    type: "core",
    filterKey: "gender",
    filterValue: "unisex",
    faqs: [
      { question: "Why are gender-neutral names trending in 2026?", answer: "Unisex names offer flexibility, modern aesthetics, and equal versatility across personal and professional identities." },
      { question: "What are popular examples of unisex names?", answer: "Kai, Rowan, Jordan, Avery, Riley, Taylor, Sasha, and Morgan are internationally acclaimed gender-neutral favorites." },
    ],
    relatedSlugs: ["modern", "unique", "short", "cool", "boy", "girl"],
  },
  {
    slug: "baby",
    name: "Baby Names Directory",
    h1: "Complete Global Baby Names Directory [2026]",
    metaTitle: "Baby Names Directory [2026] — Meanings, Origins & Styler | UniToolkit",
    metaDescription: "The ultimate global baby names directory with over 10,000 verified names, origins, spiritual traditions, and pronunciation guides.",
    badge: "👶 Baby Names Directory",
    intro: "Your comprehensive portal to finding meaningful names for your newborn child, organized by heritage, meaning, letter, and popularity.",
    type: "core",
    faqs: [
      { question: "How should parents start their baby naming journey?", answer: "Start by shortlisting heritages, preferred starting letters, or core meanings (like blessing, happiness, light) and use our AI tools to match your combined tastes." },
      { question: "Can I save my favorite baby names privately?", answer: "Yes! Use the heart icon on any card to save names to your private offline collection without needing an account." },
    ],
    relatedSlugs: ["boy", "girl", "unisex", "twin", "popular", "modern"],
  },
  {
    slug: "twin",
    name: "Twin & Sibling Names",
    h1: "Charming Twin & Sibling Name Combinations [2026]",
    metaTitle: "Twin & Sibling Names [2026] — Harmonious Boy/Girl Pairs | UniToolkit",
    metaDescription: "Find perfectly paired twin and sibling name ideas for boy-boy, girl-girl, and boy-girl sets with matching meanings and rhythm.",
    badge: "👯 Twin Combinations",
    intro: "Curated harmonious twin and sibling names that sound melodious together without being excessively identical.",
    type: "core",
    faqs: [
      { question: "How to choose great twin names?", answer: "Choose names with complementary syllable counts, subtle thematic connections (like Sun & Moon or Faith & Hope), and distinct starting letters for easy everyday distinction." },
    ],
    relatedSlugs: ["baby", "boy", "girl", "cute", "unique", "modern"],
  },
];

// -------------------------------------------------------------
// 2. ORIGIN & CULTURE (30 Pages)
// -------------------------------------------------------------
export const ORIGIN_CULTURE_LIST = [
  { slug: "indian", name: "Indian", region: "South Asia" },
  { slug: "arabic", name: "Arabic", region: "Middle East & North Africa" },
  { slug: "persian", name: "Persian", region: "Iran & Central Asia" },
  { slug: "sanskrit", name: "Sanskrit", region: "Ancient India" },
  { slug: "english", name: "English", region: "United Kingdom" },
  { slug: "american", name: "American", region: "North America" },
  { slug: "british", name: "British", region: "United Kingdom" },
  { slug: "irish", name: "Irish", region: "Ireland & Celtic" },
  { slug: "scandinavian", name: "Scandinavian", region: "Nordic" },
  { slug: "french", name: "French", region: "Europe" },
  { slug: "spanish", name: "Spanish", region: "Spain & Latin America" },
  { slug: "italian", name: "Italian", region: "Southern Europe" },
  { slug: "german", name: "German", region: "Central Europe" },
  { slug: "greek", name: "Greek", region: "Mediterranean" },
  { slug: "hebrew", name: "Hebrew", region: "Levant" },
  { slug: "latin", name: "Latin", region: "Ancient Rome" },
  { slug: "japanese", name: "Japanese", region: "East Asia" },
  { slug: "korean", name: "Korean", region: "East Asia" },
  { slug: "chinese", name: "Chinese", region: "East Asia" },
  { slug: "turkish", name: "Turkish", region: "Eurasia" },
  { slug: "russian", name: "Russian", region: "Eastern Europe & Slavic" },
  { slug: "african", name: "African", region: "Pan-African" },
  { slug: "nigerian", name: "Nigerian", region: "West Africa" },
  { slug: "south-african", name: "South African", region: "Southern Africa" },
  { slug: "pakistani", name: "Pakistani", region: "South Asia" },
  { slug: "bangladeshi", name: "Bangladeshi", region: "South Asia" },
  { slug: "indonesian", name: "Indonesian", region: "Southeast Asia" },
  { slug: "filipino", name: "Filipino", region: "Southeast Asia" },
  { slug: "malaysian", name: "Malaysian", region: "Southeast Asia" },
  { slug: "brazilian", name: "Brazilian", region: "South America" },
];

// -------------------------------------------------------------
// 3. RELIGION & TRADITION (10 Pages)
// -------------------------------------------------------------
export const RELIGION_TRADITION_LIST = [
  { slug: "muslim", name: "Muslim", badge: "Islamic Names" },
  { slug: "islamic", name: "Islamic", badge: "Quranic & Islamic Names" },
  { slug: "hindu", name: "Hindu", badge: "Vedic & Hindu Names" },
  { slug: "christian", name: "Christian", badge: "Christian Names" },
  { slug: "biblical", name: "Biblical", badge: "Old & New Testament Names" },
  { slug: "jewish", name: "Jewish", badge: "Hebrew & Jewish Names" },
  { slug: "sikh", name: "Sikh", badge: "Gurbani & Sikh Names" },
  { slug: "buddhist", name: "Buddhist", badge: "Buddhist Names" },
  { slug: "celtic", name: "Celtic", badge: "Gaelic & Celtic Tradition" },
  { slug: "mythology", name: "Mythology", badge: "Mythological Gods & Legends" },
];

// -------------------------------------------------------------
// 4. STYLE & PREFERENCE (20 Pages)
// -------------------------------------------------------------
export const STYLE_PREFERENCE_LIST = [
  { slug: "unique", name: "Unique", desc: "Rare, distinctive names that stand out positively." },
  { slug: "modern", name: "Modern", desc: "Contemporary, chic names popular in the 2020s." },
  { slug: "rare", name: "Rare", desc: "Uncommon treasures with timeless historical depth." },
  { slug: "short", name: "Short & Punchy", desc: "1 to 2 syllable concise names easy to spell." },
  { slug: "cute", name: "Cute & Sweet", desc: "Endearing, soft-sounding melodious names." },
  { slug: "classic", name: "Classic", desc: "Timeless names that have remained beloved for centuries." },
  { slug: "traditional", name: "Traditional", desc: "Names rooted in rich ancestral heritage and heritage." },
  { slug: "elegant", name: "Elegant", desc: "Sophisticated, noble names with graceful phonetics." },
  { slug: "strong", name: "Strong & Powerful", desc: "Resilient names evoking fortitude and victory." },
  { slug: "cool", name: "Cool & Trendy", desc: "Modern aesthetic names with charisma and swagger." },
  { slug: "beautiful", name: "Beautiful", desc: "Lyrical names celebrating charm, beauty, and grace." },
  { slug: "simple", name: "Simple", desc: "Clean, effortless names that never go out of style." },
  { slug: "trendy", name: "Trending", desc: "The fastest-rising viral names of 2026." },
  { slug: "vintage", name: "Vintage", desc: "Charming antique names from the 19th & early 20th century." },
  { slug: "nature", name: "Nature-Inspired", desc: "Earthy names inspired by oceans, forests, flora & fauna." },
  { slug: "royal", name: "Royal & Aristocratic", desc: "Regal names borne by kings, queens, and leaders." },
  { slug: "powerful", name: "Powerful", desc: "Commanding names representing leadership and triumph." },
  { slug: "creative", name: "Creative", desc: "Artistic, poetic names full of imagination." },
  { slug: "exotic", name: "Exotic", desc: "Enchanting names with unique global resonance." },
  { slug: "uncommon", name: "Uncommon", desc: "Fresh alternatives to overcrowded top-10 lists." },
];

// -------------------------------------------------------------
// 5. MEANINGS (20 Pages)
// -------------------------------------------------------------
export const MEANING_THEMES_LIST = [
  { slug: "love", name: "Love & Affection", emoji: "❤️", theme: "love" },
  { slug: "strength", name: "Strength & Power", emoji: "💪", theme: "strength" },
  { slug: "wisdom", name: "Wisdom & Knowledge", emoji: "🧠", theme: "wisdom" },
  { slug: "peace", name: "Peace & Serenity", emoji: "🕊️", theme: "peace" },
  { slug: "light", name: "Light & Radiance", emoji: "✨", theme: "light" },
  { slug: "moon", name: "Moon & Celestial", emoji: "🌙", theme: "moon" },
  { slug: "star", name: "Star & Cosmos", emoji: "⭐", theme: "star" },
  { slug: "sun", name: "Sun & Dawn", emoji: "☀️", theme: "sun" },
  { slug: "hope", name: "Hope & Faith", emoji: "🌱", theme: "hope" },
  { slug: "joy", name: "Joy & Celebration", emoji: "🎉", theme: "joy" },
  { slug: "grace", name: "Grace & Elegance", emoji: "🌸", theme: "grace" },
  { slug: "courage", name: "Courage & Bravery", emoji: "🦁", theme: "courage" },
  { slug: "success", name: "Success & Victory", emoji: "🏆", theme: "success" },
  { slug: "blessing", name: "Blessing & Miracle", emoji: "🙏", theme: "blessing" },
  { slug: "gift", name: "Gift of God", emoji: "🎁", theme: "gift" },
  { slug: "beauty", name: "Beauty & Radiance", emoji: "🌺", theme: "beauty" },
  { slug: "freedom", name: "Freedom & Liberty", emoji: "🦅", theme: "freedom" },
  { slug: "happiness", name: "Happiness & Bliss", emoji: "😊", theme: "happiness" },
  { slug: "warrior", name: "Warrior & Defender", emoji: "⚔️", theme: "warrior" },
  { slug: "nature", name: "Nature & Elements", emoji: "🌿", theme: "nature" },
];

// -------------------------------------------------------------
// 6. POPULARITY & TRENDS (12 Pages)
// -------------------------------------------------------------
export const POPULARITY_LIST = [
  { slug: "popular", name: "Most Popular Names Globally", region: "Global" },
  { slug: "trending", name: "Fastest Rising Trending Names", region: "Global" },
  { slug: "boy", name: "Top Boy Names Ranking", region: "Global", sub: true },
  { slug: "girl", name: "Top Girl Names Ranking", region: "Global", sub: true },
  { slug: "unisex", name: "Top Unisex Names Ranking", region: "Global", sub: true },
  { slug: "world", name: "Top Names in the World", region: "Global", sub: true },
  { slug: "india", name: "Top Baby Names in India", region: "India", sub: true },
  { slug: "usa", name: "Top Baby Names in USA (SSA Verified)", region: "USA", sub: true },
  { slug: "uk", name: "Top Baby Names in UK (ONS Verified)", region: "UK", sub: true },
  { slug: "canada", name: "Top Baby Names in Canada", region: "Canada", sub: true },
  { slug: "australia", name: "Top Baby Names in Australia", region: "Australia", sub: true },
  { slug: "2026", name: "Official Baby Names Forecast 2026", region: "Global", sub: true },
];

// -------------------------------------------------------------
// 7. AI NAME STUDIOS (6 Standalone Tools)
// -------------------------------------------------------------
export const AI_NAME_STUDIOS = [
  {
    slug: "ai-name-generator",
    title: "AI Name Generator",
    desc: "Generate personalized names across all origins, tones, and cultural backgrounds.",
    route: "/ai-name-generator",
  },
  {
    slug: "ai-baby-name-generator",
    title: "AI Baby Name Generator",
    desc: "Personalized newborn name suggestions based on parent heritage, values, and sound rhythm.",
    route: "/ai-baby-name-generator",
  },
  {
    slug: "ai-name-finder",
    title: "AI Name Finder by Description",
    desc: "Describe your ideal vibe in natural language to find hand-crafted name matches.",
    route: "/ai-name-finder",
  },
  {
    slug: "ai-name-by-meaning",
    title: "AI Name by Meaning Finder",
    desc: "Enter any word or virtue (e.g. 'morning light', 'courageous soul') to discover fitting names.",
    route: "/ai-name-by-meaning",
  },
  {
    slug: "ai-sibling-name-generator",
    title: "AI Sibling & Twin Name Matcher",
    desc: "Find sibling names that harmonize with your existing children's names.",
    route: "/ai-sibling-name-generator",
  },
  {
    slug: "ai-name-combiner",
    title: "AI Name Combiner & Blender",
    desc: "Blend two parent or family names into unique, melodious modern baby names.",
    route: "/ai-name-combiner",
  },
];
