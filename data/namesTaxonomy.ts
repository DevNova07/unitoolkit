// =========================================================================
// 🌍 UniToolkit Global Names — Master Taxonomy & SEO Customization Engine
// Generates 100% unique H1, H2s, Intros, Tips, and FAQs for EVERY category!
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
  bannerTitle?: string;
  bannerSubtitle?: string;
  tipsTitle?: string;
  tips?: { title: string; desc: string }[];
  overviewSections?: { heading: string; body: string }[];
  letterHeadingPrefix?: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs?: string[];
}

export function capitalize(s: string): string {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// -------------------------------------------------------------
// 1. CORE NAME HUBS (6 Pages)
// -------------------------------------------------------------
export const CORE_NAME_HUBS: NameCategoryMeta[] = [
  {
    slug: "boy",
    name: "Baby Boy Names",
    h1: "100+ Modern Baby Boy Names with Strong & Royal Meanings (A to Z) - 2026",
    metaTitle: "100+ Best Baby Boy Names [2026] — Meanings, Origins & Trends | UniToolkit",
    metaDescription: "Discover 100+ unique, royal, modern, and traditional baby boy names organized alphabetically from A to Z with verified meanings, pronunciation, and origins.",
    badge: "👦 Boy Names Vault",
    intro: "Explore timeless, powerful, and modern baby boy names across all global traditions and cultures. Find the perfect name with verified meanings, strong cadence, and audio pronunciations.",
    type: "core",
    filterKey: "gender",
    filterValue: "boy",
    bannerTitle: "Baby Boy Name Ideas",
    bannerSubtitle: "A to Z Curated Boy Names • 2026 Edition",
    tipsTitle: "How to choose a baby boy name (quick tips)",
    tips: [
      { title: "Meaning & Strength", desc: "Choose names representing courage, wisdom, honor, or natural elements like sun and mountains." },
      { title: "Syllable Flow", desc: "Pair 1 or 2 syllable first names with longer surnames for smooth cadence." },
      { title: "Nickname Potential", desc: "Check what short nicknames friends and family might naturally adopt." },
      { title: "Timeless Sound", desc: "Pick a name that fits an adorable baby as comfortably as a respected professional adult." },
      { title: "Shortlist Strategy", desc: "Keep a narrow shortlist of 3–5 names to test with close family before birth." },
    ],
    overviewSections: [
      { heading: "Boy Naming Trends in 2026", body: "Modern boy names are shifting toward crisp 2-syllable phonetics with deep historical virtue meanings like bravery, dawn, and light." },
    ],
    letterHeadingPrefix: "Baby boy names starting with",
    faqs: [
      { question: "What are the most popular baby boy names in 2026?", answer: "Top trending boy names globally include Aarav, Liam, Noah, Ayaan, Arjun, Oliver, Leo, Lucas, and Zayn, combining modern rhythm with strong historical roots." },
      { question: "How do I choose a strong and meaningful boy name?", answer: "Look for names with meanings symbolizing courage, wisdom, light, or victory, and test how effortlessly it pairs with your family last name." },
    ],
    relatedSlugs: ["girl", "unisex", "baby", "unique", "modern", "royal"],
  },
  {
    slug: "girl",
    name: "Baby Girl Names",
    h1: "100+ Sweet & Aesthetic Baby Girl Names with Beautiful Meanings (A to Z) - 2026",
    metaTitle: "100+ Best Baby Girl Names [2026] — Aesthetic, Unique & Meaningful | UniToolkit",
    metaDescription: "Browse 100+ beautiful, aesthetic, modern, and melodious baby girl names organized alphabetically from A to Z with authentic meanings and origins.",
    badge: "👧 Girl Names Vault",
    intro: "Find lovely, elegant, and melodious baby girl names that inspire grace, wisdom, and beauty. Curated across international and regional heritages with instant 1-tap audio pronunciation.",
    type: "core",
    filterKey: "gender",
    filterValue: "girl",
    bannerTitle: "Baby Girl Name Ideas",
    bannerSubtitle: "A to Z Curated Girl Names • 2026 Edition",
    tipsTitle: "How to choose a baby girl name (quick tips)",
    tips: [
      { title: "Melodious Cadence", desc: "Opt for names with gentle vowel endings (like -a, -i, -ya) for sweet phonetic flow." },
      { title: "Inspiring Virtues", desc: "Look for meanings evoking grace, wisdom, celestial stars, or blooming nature." },
      { title: "Global Adaptability", desc: "Select names that are effortless to pronounce across schools and international borders." },
      { title: "Cultural Elegance", desc: "Honor your ancestral roots with modern short variations of classic deities and heroines." },
      { title: "Family Harmony", desc: "Check how the name sounds alongside elder siblings' names." },
    ],
    overviewSections: [
      { heading: "Girl Naming Trends in 2026", body: "Lyrical, nature-inspired, and botanical names like Saanvi, Kiara, Maya, and Freya lead modern preferences." },
    ],
    letterHeadingPrefix: "Baby girl names starting with",
    faqs: [
      { question: "What are the top trending baby girl names for 2026?", answer: "Leading girl names worldwide include Saanvi, Olivia, Kiara, Aisha, Sophia, Ananya, Mia, Freya, and Luna, celebrated for lyrical sweetness." },
      { question: "What makes a baby girl name timeless and memorable?", answer: "Names that carry deep historical or spiritual virtues (like Maya, Grace, Zara, Tara) remain fresh and elegant across all generations." },
    ],
    relatedSlugs: ["boy", "unisex", "baby", "cute", "elegant", "beautiful"],
  },
  {
    slug: "unisex",
    name: "Unisex & Gender-Neutral Names",
    h1: "100+ Modern Unisex & Gender-Neutral Baby Names with Meanings (A to Z) [2026]",
    metaTitle: "100+ Best Unisex Baby Names [2026] — Gender-Neutral & Modern | UniToolkit",
    metaDescription: "Explore 100+ chic, versatile, and modern gender-neutral baby names from A to Z with verified meanings, origins, and pronunciation guides.",
    badge: "⚡ Unisex Names Vault",
    intro: "Discover stylish, versatile, and forward-thinking gender-neutral names that offer timeless balance, modern flair, and equal appeal for boys and girls.",
    type: "core",
    filterKey: "gender",
    filterValue: "unisex",
    bannerTitle: "Unisex Name Ideas",
    bannerSubtitle: "A to Z Gender-Neutral Guide • 2026 Edition",
    tipsTitle: "How to choose a gender-neutral name (quick tips)",
    tips: [
      { title: "Natural Balance", desc: "Choose names inspired by celestial bodies, oceans, trees, and virtuous ideals." },
      { title: "Cross-Cultural Versatility", desc: "Pick names that work smoothly across multiple languages and countries." },
      { title: "Short & Punchy", desc: "1 to 2 syllable names like Kai, Bodhi, Noor, and Quinn provide punchy, modern charisma." },
      { title: "Spelling Clarity", desc: "Stick to recognized spellings to prevent lifelong bureaucratic confusion." },
      { title: "Test with Surname", desc: "Ensure the gender-neutral first name creates a memorable, balanced full signature." },
    ],
    letterHeadingPrefix: "Unisex baby names starting with",
    faqs: [
      { question: "Why are gender-neutral names trending in 2026?", answer: "Unisex names offer modern flexibility, artistic flair, and international adaptability without traditional gender stereotyping." },
      { question: "What are famous examples of unisex baby names?", answer: "Bodhi, Kai, Noor, Rowan, Quinn, Falak, Sasha, and Xiao are globally celebrated gender-neutral choices." },
    ],
    relatedSlugs: ["modern", "unique", "short", "cool", "boy", "girl"],
  },
  {
    slug: "baby",
    name: "Baby Names Directory",
    h1: "100+ Unique Global Baby Names with Meanings & Origins (A to Z) [2026]",
    metaTitle: "100+ Unique Baby Names [2026] — Complete A to Z Guide | UniToolkit",
    metaDescription: "The ultimate global baby names directory with over 10,000 verified names, origins, spiritual traditions, and pronunciation guides.",
    badge: "👶 Baby Names Directory",
    intro: "Your comprehensive portal to finding meaningful names for your newborn child, organized alphabetically from A to Z across 30+ heritages and spiritual traditions.",
    type: "core",
    bannerTitle: "Baby Name Ideas",
    bannerSubtitle: "A to Z Curated List • 2026 Edition",
    tipsTitle: "How to choose a baby name (quick tips)",
    tips: [
      { title: "Meaning first", desc: "Pick a quality you wish for your child: peace, courage, wisdom, or light." },
      { title: "Say it out loud", desc: "Pair the name with your surname; check nicknames family might use." },
      { title: "Astrology letter", desc: "Many families choose from the alphabet suggested at birth, use the sections below by letter." },
      { title: "Spelling", desc: "One clear spelling avoids school-form confusion later." },
      { title: "Keep a short list", desc: "Three to five names are easier to decide than thirty." },
    ],
    letterHeadingPrefix: "Baby names starting with",
    faqs: [
      { question: "How should parents start their baby naming journey?", answer: "Start by shortlisting cultural heritages, preferred starting letters, or core virtues and verify syllable harmony with your surname." },
      { question: "Can I save my favorite baby names privately?", answer: "Yes! Click the heart icon on any name to save it to your private offline collection without needing an account." },
    ],
    relatedSlugs: ["boy", "girl", "unisex", "twin", "popular", "modern"],
  },
  {
    slug: "twin",
    name: "Twin & Sibling Names",
    h1: "100+ Harmonic Twin & Sibling Baby Names with Meanings (A to Z) [2026]",
    metaTitle: "100+ Twin Baby Names [2026] — Harmonious Boy & Girl Pairs | UniToolkit",
    metaDescription: "Find perfectly paired twin and sibling name combinations for boy-boy, girl-girl, and boy-girl sets with matching meanings and rhythm.",
    badge: "👯 Twin Combinations",
    intro: "Curated harmonious twin and sibling names that sound melodious together without being excessively identical. Organized from A to Z with verified meanings.",
    type: "core",
    bannerTitle: "Twin & Sibling Names",
    bannerSubtitle: "Harmonious Pairs • 2026 Edition",
    tipsTitle: "How to choose twin baby names (quick tips)",
    tips: [
      { title: "Subtle Thematic Link", desc: "Pair complementary virtues like Sun & Moon (Surya & Chandra) or Faith & Hope." },
      { title: "Distinct Starting Letters", desc: "Different initials make school paperwork, monogramming, and mail sorting easier." },
      { title: "Matching Syllables", desc: "Keep syllable lengths balanced (e.g. 2 syllables each: Aarav & Vihaan)." },
      { title: "Avoid Rhyming Traps", desc: "Overly matching names like Tim & Jim can cause confusion when calling out at home." },
      { title: "Individual Identity", desc: "Ensure each twin has a distinctive name they will love independently as adults." },
    ],
    letterHeadingPrefix: "Twin baby names starting with",
    faqs: [
      { question: "How do I choose great twin baby names?", answer: "Choose names with complementary syllable counts, subtle thematic connections, and distinct sounds for easy everyday communication." },
    ],
    relatedSlugs: ["baby", "boy", "girl", "cute", "unique", "modern"],
  },
];

// -------------------------------------------------------------
// 2. ORIGINS & CULTURES (30 Hubs)
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
// 3. RELIGIONS & TRADITIONS (10 Hubs)
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
// 4. STYLES & PREFERENCES (20 Hubs)
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
  { slug: "spiritual", name: "Spiritual", desc: "Sacred names that inspire inner peace and divinity." },
];

// -------------------------------------------------------------
// 5. MEANINGS & THEMES (20 Hubs)
// -------------------------------------------------------------
export const MEANING_THEMES_LIST = [
  { slug: "love", name: "Love & Affection", emoji: "❤️", desc: "Names celebrating deep compassion, love, and devotion." },
  { slug: "strength", name: "Strength & Power", emoji: "💪", desc: "Names representing courage, resilience, and triumph." },
  { slug: "wisdom", name: "Wisdom & Intellect", emoji: "🧠", desc: "Names honoring deep knowledge, insight, and learning." },
  { slug: "peace", name: "Peace & Serenity", emoji: "🕊️", desc: "Calm, tranquil names that invoke harmony and solace." },
  { slug: "light", name: "Light & Radiance", emoji: "✨", desc: "Luminous names symbolizing sunshine, dawn, and glow." },
  { slug: "moon", name: "Moon & Celestial", emoji: "🌙", desc: "Enchanting names associated with lunar beauty and stars." },
  { slug: "star", name: "Star & Sky", emoji: "⭐", desc: "Cosmic names representing guiding lights and constellations." },
  { slug: "hope", name: "Hope & Aspiration", emoji: "🌱", desc: "Inspiring names that signify optimism and new beginnings." },
  { slug: "joy", name: "Joy & Happiness", emoji: "😄", desc: "Delightful names meaning smiles, laughter, and bliss." },
  { slug: "grace", name: "Grace & Blessing", emoji: "🌸", desc: "Virtuous names reflecting divine elegance and kindness." },
  { slug: "courage", name: "Courage & Valor", emoji: "🦁", desc: "Heroic names honoring brave warriors and fearless souls." },
  { slug: "success", name: "Success & Victory", emoji: "🏆", desc: "Auspicious names linked to achievement, fame, and triumph." },
  { slug: "blessing", name: "Blessing & Gift of God", emoji: "🎁", desc: "Precious names given to long-awaited answered prayers." },
  { slug: "beauty", name: "Beauty & Splendor", emoji: "🌺", desc: "Charming names evoking aesthetic allure and elegance." },
  { slug: "purity", name: "Purity & Innocence", emoji: "💧", desc: "Sacred names representing pristine waters and clean souls." },
  { slug: "nature", name: "Nature & Earth", emoji: "🌿", desc: "Organic names inspired by mountains, rivers, and trees." },
  { slug: "freedom", name: "Freedom & Spirit", emoji: "🦅", desc: "Independent names celebrating liberty and free will." },
  { slug: "sun", name: "Sun & Fire", emoji: "☀️", desc: "Fiery, radiant names celebrating solar warmth and power." },
  { slug: "faith", name: "Faith & Devotion", emoji: "🙏", desc: "Devout names reflecting spiritual surrender and trust." },
  { slug: "life", name: "Life & Vitality", emoji: "🌟", desc: "Energetic names signifying eternal life and blossoming." },
];

// -------------------------------------------------------------
// 6. POPULARITY HUBS (10 Pages)
// -------------------------------------------------------------
export const POPULARITY_LIST = [
  { slug: "trending", name: "Trending Names 2026" },
  { slug: "popular", name: "Top 100 Popular Names" },
  { slug: "top-100", name: "Top 100 Baby Names" },
  { slug: "india", name: "Top Names in India" },
  { slug: "usa", name: "Top Names in USA" },
  { slug: "uk", name: "Top Names in UK" },
  { slug: "canada", name: "Top Names in Canada" },
  { slug: "australia", name: "Top Names in Australia" },
  { slug: "world", name: "Top Global Names" },
  { slug: "viral", name: "Viral Names" },
];

// -------------------------------------------------------------
// 7. AI NAME STUDIOS (6 Tools)
// -------------------------------------------------------------
export const AI_NAME_STUDIOS = [
  { slug: "ai-name-generator", title: "AI Name Generator", desc: "Generate custom names based on origin, letters, and meaning preferences.", route: "/ai-name-generator" },
  { slug: "ai-baby-name-generator", title: "AI Baby Name Studio", desc: "Intelligent baby name finder combining mother + father heritage and astrology.", route: "/ai-baby-name-generator" },
  { slug: "ai-name-finder", title: "AI Name Finder", desc: "Describe personality traits or future aspirations to discover matching names.", route: "/ai-name-finder" },
  { slug: "ai-name-by-meaning", title: "AI Name by Meaning", desc: "Type any wish or concept to discover linguistic equivalents across 30+ cultures.", route: "/ai-name-by-meaning" },
  { slug: "ai-sibling-name-generator", title: "AI Sibling & Twin Matcher", desc: "Harmonize new baby names with elder sibling or twin brother/sister names.", route: "/ai-sibling-name-generator" },
  { slug: "ai-name-combiner", title: "AI Mom + Dad Name Blender", desc: "Fuse parents' names into melodious, meaningful baby names seamlessly.", route: "/ai-name-combiner" },
];

// -------------------------------------------------------------
// 🌟 DYNAMIC CUSTOMIZATION FACTORY (Unique intent per slug)
// -------------------------------------------------------------
export function getCategoryCustomization(slug: string): NameCategoryMeta {
  const s = slug.toLowerCase();

  // 1. Core Hubs
  const coreMatch = CORE_NAME_HUBS.find((c) => c.slug === s);
  if (coreMatch) return coreMatch;

  // 2. Hindu Religious Names (Namakarana, Rashi, Vedic Deities)
  if (s === "hindu") {
    return {
      slug: s,
      name: "Hindu Baby Names",
      h1: "Hindu Baby Names: 100+ Vedic & Modern Sanskrit Names with Meanings (A to Z) [2026]",
      metaTitle: "Hindu Baby Names [2026] — 100+ Vedic, Sanskrit & Modern Names | UniToolkit",
      metaDescription: "Explore 100+ authentic Hindu baby boy and girl names from A to Z with Vedic roots, Sanskrit meanings, Janm Nakshatra guidance, and audio pronunciations.",
      badge: "🕉️ Vedic & Hindu Names Vault",
      intro: "Discover timeless Vedic and contemporary Hindu baby names derived from ancient Sanskrit scriptures, sacred mantras, and revered deities. Organized alphabetically from A to Z with verified meanings.",
      type: "religion",
      bannerTitle: "Hindu Baby Name Ideas",
      bannerSubtitle: "Vedic Sanskrit & Rashi Guide • 2026 Edition",
      tipsTitle: "How to choose a Hindu baby name (Vedic tips)",
      tips: [
        { title: "Janm Rashi & Nakshatra", desc: "Check the birth star (Nakshatra Pada) recommended letters for astrological harmony." },
        { title: "Sanskrit Root Virtues", desc: "Choose names rooted in Satya (truth), Shanti (peace), Tejas (radiance), or Anand (bliss)." },
        { title: "Modern Deities", desc: "Modern short avatars of Shiva (Dev, Eshan, Rudra) and Krishna (Aarav, Madhav) blend tradition with trendy cadence." },
        { title: "Syllable Flow", desc: "Test the name with your family Gotra and surname to ensure pleasant recitation." },
        { title: "Easy Global Spelling", desc: "Opt for spellings that prevent mispronunciation across international schools and records." },
      ],
      overviewSections: [
        { heading: "Vedic Naming Tradition (Namakarana)", body: "In Sanatana Dharma, the Namakarana ceremony on the 11th or 12th day assigns a sacred name reflecting the child's astrological Nakshatra and spiritual destiny." },
      ],
      letterHeadingPrefix: "Hindu baby names starting with",
      faqs: [
        { question: "How are Hindu baby names chosen according to birth star (Nakshatra)?", answer: "In Hindu tradition (Namakarana ceremony), the moon's position at birth determines the Janm Nakshatra, which gives 4 auspicious sound syllables (Padas) to name the newborn." },
        { question: "Which Sanskrit Hindu baby names are trending in 2026?", answer: "Top trending Sanskrit names include Aarav, Advik, Vihaan, Saanvi, Reyansh, Ishaan, Ananya, and Kiara, offering deep Vedic meanings with modern 2-syllable brevity." },
      ],
    };
  }

  // 3. Sanskrit Linguistic Names (Dhatupatha, Grammar, Epics)
  if (s === "sanskrit") {
    return {
      slug: s,
      name: "Sanskrit Baby Names",
      h1: "Sanskrit Baby Names: 100+ Ancient & Classical Root Names with Meanings (A to Z) [2026]",
      metaTitle: "Sanskrit Baby Names [2026] — 100+ Classical Vedic Root Names | UniToolkit",
      metaDescription: "Discover 100+ authentic Sanskrit baby names derived from ancient classical roots, Upanishads, and epics with verified grammatical meanings.",
      badge: "📜 Classical Sanskrit Vault",
      intro: "Explore pure Sanskrit baby names celebrated for phonetic elegance, compound harmony (Samasa), and philosophical depth. Organized alphabetically from A to Z with linguistic roots.",
      type: "origin",
      bannerTitle: "Sanskrit Baby Name Ideas",
      bannerSubtitle: "Classical Root & Etymology Guide • 2026 Edition",
      tipsTitle: "How to choose a Sanskrit baby name (etymology tips)",
      tips: [
        { title: "Dhatu (Root) Verification", desc: "Understand the core Sanskrit verb root giving life to the word." },
        { title: "Sandhi & Euphonic Harmony", desc: "Select compound words that blend naturally without harsh consonant clusters." },
        { title: "Philosophical Depth", desc: "Choose concepts celebrating consciousness (Chaitanya), radiance (Tejas), or devotion (Bhakti)." },
        { title: "Crisp Modern Spellings", desc: "Use phonetic English transcriptions that preserve pure pronunciation." },
        { title: "Short Syllable Cadence", desc: "2-syllable Sanskrit gems like Dev, Avi, and Ira provide international appeal." },
      ],
      overviewSections: [
        { heading: "The Linguistic Science of Sanskrit Names", body: "Sanskrit is known as Deva-bhasha (the language of the gods), where sound vibrations are directly linked to the metaphysical essence of the word." },
      ],
      letterHeadingPrefix: "Sanskrit baby names starting with",
      faqs: [
        { question: "What makes Sanskrit baby names uniquely special?", answer: "Sanskrit names are mathematically and grammatically derived from pure roots (Dhatus), meaning every name carries an exact philosophical virtue." },
      ],
    };
  }

  // 4. Muslim Religious Names (Quranic, Hadith, Sunnah Etiquette)
  if (s === "muslim") {
    return {
      slug: s,
      name: "Muslim Baby Names",
      h1: "Muslim Baby Names: 100+ Quranic, Arabic & Prophetic Names with Meanings (A to Z) [2026]",
      metaTitle: "Muslim Baby Names [2026] — 100+ Quranic, Arabic & Prophetic Names | UniToolkit",
      metaDescription: "Discover 100+ unique Islamic baby boy and girl names from A to Z with authentic Quranic references, Arabic meanings, and audio pronunciation guides.",
      badge: "🌙 Quranic & Islamic Names Vault",
      intro: "Explore beautiful, blessed Islamic baby names rooted in the Holy Quran, Sunnah traditions, and Arabic linguistic heritage. Arranged alphabetically from A to Z with verified virtuous meanings.",
      type: "religion",
      bannerTitle: "Islamic Baby Name Ideas",
      bannerSubtitle: "Quranic & Arabic Names Guide • 2026 Edition",
      tipsTitle: "How to choose an Islamic baby name (Sunnah tips)",
      tips: [
        { title: "Virtuous Meaning First", desc: "The Prophet (PBUH) emphasized choosing names with uplifting, righteous meanings that honor the child." },
        { title: "Asma-ul-Husna & Prophets", desc: "Names honoring Allah's attributes (prefixed with Abdul) and revered Prophets (Ibrahim, Yusuf, Musa) carry perpetual blessings." },
        { title: "Sahaba & Sahabiyat Heritage", desc: "Drawing inspiration from courageous companions like Hamza, Zayd, Fatima, Aisha, and Maryam." },
        { title: "Pronunciation Clarity", desc: "Ensure the Arabic pronunciation remains accurate and easy to articulate in everyday life." },
        { title: "Aqeeqah Timetable", desc: "Finalize your top 3 picks before the 7th-day Sunnah naming and Aqeeqah ceremony." },
      ],
      overviewSections: [
        { heading: "Sunnah Naming Etiquette & Aqeeqah", body: "According to Sunnah, naming a newborn on the 7th day with an honorable virtue establishes blessings and identity for life." },
      ],
      letterHeadingPrefix: "Muslim baby names starting with",
      faqs: [
        { question: "What are the most recommended Islamic baby names according to Hadith?", answer: "The Prophet Muhammad (PBUH) stated that the most beloved names to Allah are Abdullah and Abdur-Rahman, alongside names of righteous Prophets." },
        { question: "Which modern Arabic baby names are popular in 2026?", answer: "Trending Islamic names globally include Ayaan, Rayan, Zayn, Inaya, Zayd, Noor, Hamza, Layla, and Farhan." },
      ],
    };
  }

  // 5. Arabic Cultural Names (Language, Levantine, Gulf & North Africa)
  if (s === "arabic") {
    return {
      slug: s,
      name: "Arabic Baby Names",
      h1: "Arabic Baby Names: 100+ Lyrical & Traditional Names with Meanings (A to Z) [2026]",
      metaTitle: "Arabic Baby Names [2026] — 100+ Lyrical, Modern & Classic Names | UniToolkit",
      metaDescription: "Explore 100+ authentic Arabic baby names across Middle Eastern and North African traditions with verified meanings and clear pronunciation.",
      badge: "🌴 Arabic Names Vault",
      intro: "Browse the rich tapestry of Arabic names celebrating eloquence, natural beauty, desert stars, and noble ancestry. Organized from A to Z with phonetic guidance.",
      type: "origin",
      bannerTitle: "Arabic Baby Name Ideas",
      bannerSubtitle: "Arabic Heritage & Lyrical Guide • 2026 Edition",
      tipsTitle: "How to choose an Arabic baby name (quick tips)",
      tips: [
        { title: "Tri-consonantal Roots", desc: "Appreciate the 3-letter Arabic root conveying deep layers of meaning." },
        { title: "Poetic & Natural Metaphors", desc: "Names like Layla (night beauty), Tariq (morning star), and Yasmin (jasmine) carry rich imagery." },
        { title: "Pronunciation in English", desc: "Choose transliterations that prevent mispronunciation across international schools." },
        { title: "Family Lineage Cadence", desc: "Test the flow of first name with father's name and family surname." },
        { title: "Contemporary Brevity", desc: "Short modern names like Zayn, Rayan, and Zara are globally popular." },
      ],
      overviewSections: [
        { heading: "The Poetic Beauty of Arabic Nomenclature", body: "Arabic names are renowned for eloquence (Balagha), drawing from celestial navigation, desert flora, and regal hospitality." },
      ],
      letterHeadingPrefix: "Arabic baby names starting with",
      faqs: [
        { question: "Why are Arabic baby names popular globally?", answer: "Arabic names are cherished worldwide for their melodic vowels, deep poetic imagery, and timeless spiritual resonance." },
      ],
    };
  }

  // 6. Indian Cultural Names (Pan-Indian, Multi-lingual)
  if (s === "indian") {
    return {
      slug: s,
      name: "Indian Baby Names",
      h1: "Trending Indian Baby Names: 100+ Traditional & Modern Names with Meanings (A to Z) [2026]",
      metaTitle: "Indian Baby Names [2026] — 100+ Modern, Cute & Traditional Names | UniToolkit",
      metaDescription: "Explore 100+ trending Indian baby boy, girl, and unisex names from A to Z with verified Hindi, Sanskrit, and regional meanings with audio pronunciation.",
      badge: "🇮🇳 Indian Names Directory",
      intro: "Browse the ultimate directory of Indian baby names combining timeless heritage with fresh 21st-century appeal. Organized alphabetically from A to Z with verified meanings.",
      type: "origin",
      bannerTitle: "Indian Baby Name Ideas",
      bannerSubtitle: "Modern Indian & Cultural Guide • 2026 Edition",
      tipsTitle: "How to choose an Indian baby name (quick tips)",
      tips: [
        { title: "Pan-Indian Appeal", desc: "Select names that sound melodious across Northern, Southern, Eastern, and Western Indian languages." },
        { title: "Short & Global", desc: "2-syllable names like Avi, Dev, Ria, and Kabir work effortlessly both in India and abroad." },
        { title: "Cultural Root", desc: "Pair traditional Sanskrit virtues with modern, crisp phonetic spellings." },
        { title: "Family Surname Match", desc: "Recite the full name out loud to verify rhythmic flow." },
        { title: "Astrology Initial", desc: "Use the A–Z letter sections below to find names matching your family's birth letter." },
      ],
      overviewSections: [
        { heading: "The Diversity of Indian Naming Traditions", body: "From Vedic Sanskrit classics to modern contemporary Hindi gems, Indian baby names celebrate family honor and auspicious blessings." },
      ],
      letterHeadingPrefix: "Indian baby names starting with",
      faqs: [
        { question: "What are the fastest rising Indian baby names for 2026?", answer: "Fastest rising Indian names include Aarav, Advik, Reyansh, Saanvi, Ishaan, Ananya, Kiara, and Vivaan." },
      ],
    };
  }

  // 7. Popular vs Trending (Distinct Intent)
  if (s === "popular") {
    return {
      slug: s,
      name: "Top Popular Baby Names",
      h1: "Top 100 Most Popular Baby Names Globally [2026 Official Rankings]",
      metaTitle: "Top 100 Most Popular Baby Names [2026] — Official Global Rankings | UniToolkit",
      metaDescription: "Discover the top 100 most popular baby boy and girl names worldwide with verified rank data, country popularity, and meanings.",
      badge: "🏆 Global Popularity Rankings",
      intro: "Explore the most cherished and widely registered baby names worldwide. Verified through national registry databases with complete ranking and phonetic guidance.",
      type: "popularity",
      bannerTitle: "Most Popular Baby Names",
      bannerSubtitle: "Global 2026 Official Rankings",
      tipsTitle: "Why choose a popular baby name (quick tips)",
      tips: [
        { title: "Universal Recognition", desc: "Top names are instantly recognized, easily spelled, and widely loved across cultures." },
        { title: "Proven Timelessness", desc: "Established popular names remain stylish across decades of life." },
        { title: "Check Local Density", desc: "Check if the name is #1 in your specific city or school district if you prefer moderate uniqueness." },
        { title: "Pair with Unique Middle Name", desc: "Balance a chart-topping first name with a distinctive cultural middle name." },
        { title: "Pronunciation Ease", desc: "Popular names have standardized phonetic spellings worldwide." },
      ],
      overviewSections: [
        { heading: "Global Popularity Methodology", body: "Our popular names index aggregates official civil registration records from the US SSA, UK ONS, and international demographic registries." },
      ],
      letterHeadingPrefix: "Popular baby names starting with",
      faqs: [
        { question: "What is the #1 baby girl and boy name in the world?", answer: "Liam and Noah lead global boy registrations, while Olivia and Emma dominate girl registrations worldwide." },
      ],
    };
  }

  if (s === "trending") {
    return {
      slug: s,
      name: "Trending Baby Names 2026",
      h1: "Fastest-Rising Trending Baby Names of 2026 [High-Velocity Viral Picks]",
      metaTitle: "Trending Baby Names [2026] — Fastest-Rising Viral Names | UniToolkit",
      metaDescription: "Discover the fastest-rising viral baby names of 2026 with high growth velocity, fresh aesthetic vibes, and modern charm.",
      badge: "🚀 High-Velocity Trending Names",
      intro: "Discover the freshest, fastest-rising baby names making waves in 2026. Curated for modern parents seeking forward-thinking, creative, and rising stars.",
      type: "popularity",
      bannerTitle: "Trending Baby Names 2026",
      bannerSubtitle: "Fastest-Rising High Velocity Picks",
      tipsTitle: "How to spot a rising trend name (quick tips)",
      tips: [
        { title: "Rising Velocity", desc: "Look for names jumping 50+ spots in annual registration statistics." },
        { title: "Cultural Crossover", desc: "Names like Kai, Bodhi, and Kiara cross borders effortlessly." },
        { title: "Nature & Celestial Vibe", desc: "Botanical and star names are experiencing the fastest modern growth." },
        { title: "Avoid Over-Saturation", desc: "Pick a rising name before it reaches peak saturation in your peer circle." },
        { title: "Check Longevity", desc: "Ensure the trendy name has substantive meaning and dignity for adulthood." },
      ],
      overviewSections: [
        { heading: "What Drives 2026 Name Trends?", body: "Contemporary naming trends are driven by digital storytelling, global travel, short 1-2 syllable sounds, and inspiring celestial themes." },
      ],
      letterHeadingPrefix: "Trending baby names starting with",
      faqs: [
        { question: "What distinguishes trending names from popular names?", answer: "Popular names have high total registrations over decades, while trending names have the highest percentage growth and viral momentum in the current year." },
      ],
    };
  }

  // 8. Meaning Categories
  const meaningMatch = MEANING_THEMES_LIST.find((m) => m.slug === s);
  if (meaningMatch) {
    return {
      slug: s,
      name: `${meaningMatch.name} Names`,
      h1: `Baby Names That Mean '${meaningMatch.name}': 100+ Beautiful Global Names (A to Z) [2026]`,
      metaTitle: `Baby Names Meaning '${meaningMatch.name}' [2026] — Unique Global Names | UniToolkit`,
      metaDescription: `Discover 100+ baby boy, girl, and unisex names meaning ${meaningMatch.name.toLowerCase()} across global cultures, organized from A to Z with audio pronunciation.`,
      badge: `${meaningMatch.emoji} ${meaningMatch.name} Collection`,
      intro: `Explore inspiring baby names that carry the profound meaning of ${meaningMatch.name.toLowerCase()}. Curated across Sanskrit, Arabic, Latin, Greek, and modern traditions from A to Z.`,
      type: "meaning",
      bannerTitle: `${meaningMatch.name} Baby Names`,
      bannerSubtitle: `Meaning & Virtue Vault • 2026 Edition`,
      tipsTitle: `How to choose a name meaning ${meaningMatch.name.toLowerCase()} (quick tips)`,
      tips: [
        { title: "Virtue Association", desc: `A name meaning ${meaningMatch.name.toLowerCase()} instills lifelong positive energy and character.` },
        { title: "Cross-Cultural Variations", desc: `Compare how ${meaningMatch.name.toLowerCase()} is expressed in Sanskrit, Arabic, Latin, and Japanese.` },
        { title: "Phonetic Rhythm", desc: "Select a melody that feels uplifting every time you call your child's name." },
        { title: "Uniqueness Level", desc: "Choose between widely cherished classics and rare hidden gems." },
        { title: "Family Alignment", desc: "Ensure both parents resonate deeply with the spirit of the meaning." },
      ],
      overviewSections: [
        { heading: `The Symbolism of Names Meaning ${meaningMatch.name}`, body: `Throughout history, naming a child after ${meaningMatch.name.toLowerCase()} acts as a daily blessing and guiding compass for their lifelong character.` },
      ],
      letterHeadingPrefix: `Names meaning '${meaningMatch.name.toLowerCase()}' starting with`,
      faqs: [
        { question: `What are the most famous baby names meaning '${meaningMatch.name.toLowerCase()}'?`, answer: `Celebrated names in this collection include diverse cross-cultural favorites embodying ${meaningMatch.name.toLowerCase()} with lyrical elegance.` },
      ],
    };
  }

  // 9. Generic Fallback Customization
  const formattedName = capitalize(s);
  return {
    slug: s,
    name: `${formattedName} Baby Names`,
    h1: `100+ Unique ${formattedName} Baby Names with Meanings & Origins (A to Z) [2026]`,
    metaTitle: `100+ Unique ${formattedName} Baby Names [2026] — Meanings & A–Z Guide | UniToolkit`,
    metaDescription: `Discover 100+ unique, verified ${formattedName.toLowerCase()} baby boy, girl, and unisex names organized from A to Z with detailed meanings and audio pronunciation.`,
    badge: `✨ ${formattedName} Names Vault`,
    intro: `Explore curated ${formattedName.toLowerCase()} baby names organized alphabetically from A to Z. Find authentic meanings, historical origins, and 1-tap audio pronunciation assistance.`,
    type: "origin",
    bannerTitle: `${formattedName} Baby Name Ideas`,
    bannerSubtitle: `A to Z Curated Guide • 2026 Edition`,
    tipsTitle: `How to choose a ${formattedName.toLowerCase()} baby name (quick tips)`,
    tips: [
      { title: "Authentic Meaning", desc: `Verify the native linguistic roots and traditional context of ${formattedName.toLowerCase()} names.` },
      { title: "Pronunciation & Cadence", desc: "Use our audio player to check correct syllable stress and rhythm." },
      { title: "Surname Harmony", desc: "Test how smoothly the first name pairs with your family last name." },
      { title: "Spelling Simplicity", desc: "Choose clear spellings that prevent confusion on school and official documents." },
      { title: "Shortlist Curation", desc: "Keep a narrow list of your top 3–5 favorite options to decide peacefully." },
    ],
    letterHeadingPrefix: `${formattedName} baby names starting with`,
    faqs: [
      { question: `What makes a great ${formattedName.toLowerCase()} baby name in 2026?`, answer: `A great ${formattedName.toLowerCase()} name pairs cultural resonance with positive virtues, easy global spelling, and melodious pronunciation.` },
      { question: `How are these ${formattedName.toLowerCase()} names verified?`, answer: `Each name is checked against verified linguistic dictionaries and cultural historical records.` },
    ],
  };
}
