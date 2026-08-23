export interface HowToStep {
  stepNumber: number;
  title: string;
  shortAction: string;
  description: string;
  proTip?: string;
  iconName?: "filter" | "sparkles" | "copy" | "share" | "hash" | "music" | "sliders" | "search" | "heart" | "type" | "clock" | "zap";
}

export interface HowToGuideConfig {
  id: string;
  badge: string;
  heading: string;
  subheading: string;
  steps: HowToStep[];
}

export const HOW_TO_GUIDES: Record<string, HowToGuideConfig> = {
  // ==========================================
  // AI TOOLS & GENERATORS
  // ==========================================
  "ai-caption-generator": {
    id: "ai-caption-generator",
    badge: "AI Studio Workflow",
    heading: "How to Generate Viral Captions with AI in 4 Steps",
    subheading: "Create high-engagement social copy engineered for maximum reach, dwell time, and likes.",
    steps: [
      {
        stepNumber: 1,
        title: "Input Post Vibe & Topic",
        shortAction: "Topic & Mood",
        description: "Enter a few keywords about your photo or reel (e.g., 'Sunset in Jaipur', 'Heavy gym leg workout', or 'Friends reunion night').",
        proTip: "Use the 🪄 Auto-Enhance button to instantly expand your prompt with sensory details.",
        iconName: "sliders",
      },
      {
        stepNumber: 2,
        title: "Select Tone & Language",
        shortAction: "Tone & Script",
        description: "Choose your target vibe (Attitude, Aesthetic, Savage, Romantic, or Funny) and toggle language between Hinglish, Hindi, or English.",
        proTip: "Hinglish is proven to get 2.4x higher comment engagement on Indian Reels & TikTok.",
        iconName: "filter",
      },
      {
        stepNumber: 3,
        title: "AI Crafts 10+ Retention Hooks",
        shortAction: "Instant Generation",
        description: "Our AI evaluates scroll-stopping triggers, hashtag relevance, and character truncation limits to generate 10+ distinct variations.",
        proTip: "Look for lines marked with ⭐ High CTR for maximum algorithmic reach.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy or Story Card",
        shortAction: "Copy & Export",
        description: "Click the 1-click copy button, or click the Image icon to render a ready-to-post 9:16 Visual Quote Card for your Instagram Story.",
        proTip: "Post within 15 minutes of copying to capture fresh peak-hour engagement.",
        iconName: "copy",
      },
    ],
  },

  "ai-hashtag-generator": {
    id: "ai-hashtag-generator",
    badge: "3-Tier Ladder Strategy",
    heading: "How to Generate High-Velocity Hashtags in 4 Steps",
    subheading: "Balance High, Medium, and Low competition tags to maximize both viral lottery and niche explore ranking.",
    steps: [
      {
        stepNumber: 1,
        title: "Enter Core Niche Keyword",
        shortAction: "Niche Search",
        description: "Type your main video or photo subject (e.g., 'fitness transformation', 'aesthetic cafe', 'street photography').",
        proTip: "Be specific: 'delhi street food' ranks faster than generic 'food'.",
        iconName: "search",
      },
      {
        stepNumber: 2,
        title: "Select Ladder Distribution",
        shortAction: "Competition Ratio",
        description: "Select 3-Tier Viral Ladder mode: 10 Mega tags (1M+ posts), 10 Mid tags (100k-1M posts), and 10 Low-Comp tags (10k-100k posts).",
        proTip: "Low-competition tags help you trend in 'Recent' feeds within the first 30 minutes.",
        iconName: "sliders",
      },
      {
        stepNumber: 3,
        title: "Choose Copy Formatting",
        shortAction: "Spacing & Layout",
        description: "Pick your preferred paste style: standard `#tag`, clean space-separated tags, or 5-dot spaced format for caption cleanliness.",
        proTip: "Space-separated tags blend seamlessly into post captions without looking spammy.",
        iconName: "hash",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy to Caption",
        shortAction: "1-Click Paste",
        description: "Copy all 30 balanced tags in a single click and paste directly into the bottom of your post caption before hitting publish.",
        proTip: "Instagram indexes tags inside captions faster than comments in 2026.",
        iconName: "copy",
      },
    ],
  },

  "ai-bio-generator": {
    id: "ai-bio-generator",
    badge: "Profile Optimization",
    heading: "How to Build a High-Conversion Bio in 4 Steps",
    subheading: "Hook new profile visitors in 2 seconds and convert profile views into loyal followers.",
    steps: [
      {
        stepNumber: 1,
        title: "Choose Profile Persona",
        shortAction: "Select Persona",
        description: "Pick your category: Creator, Entrepreneur, Fitness Athlete, Gamer, Aesthetic Personal, or Business Brand.",
        proTip: "Your persona sets the vocabulary and emoji tone for the entire bio.",
        iconName: "sliders",
      },
      {
        stepNumber: 2,
        title: "Enter Standout Details & Hobbies",
        shortAction: "Key Information",
        description: "Add your key credentials, city, quirky habit, or unique value proposition (e.g. 'Coffee addict • Solo trekker • Building SaaS').",
        proTip: "Include a strong curiosity line to make visitors tap your profile link.",
        iconName: "type",
      },
      {
        stepNumber: 3,
        title: "Choose Typography & Aesthetic Symbols",
        shortAction: "Font & Emojis",
        description: "Apply clean unicode fonts (Bold Sans, Italic Script, Minimalist Spacing) and aesthetic separator symbols (⚡, ✦, 📍).",
        proTip: "Avoid illegible fonts; clean minimalist fonts convert 35% better.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "Copy 150-Char Verified Bio",
        shortAction: "150-Char Safe Copy",
        description: "Ensure your bio stays strictly within Instagram's 150-character limit with line breaks preserved, then paste into your profile.",
        proTip: "Add a clear Call-To-Action pointing to your link (e.g. '👇 Latest drop below').",
        iconName: "copy",
      },
    ],
  },

  "ai-baby-name-generator": {
    id: "ai-baby-name-generator",
    badge: "Heritage & Meaning Finder",
    heading: "How to Find the Perfect Baby Name in 4 Steps",
    subheading: "Discover auspicious, harmonious, and modern names matched with verified cultural meanings.",
    steps: [
      {
        stepNumber: 1,
        title: "Select Heritage & Tradition",
        shortAction: "Origin & Culture",
        description: "Choose from Hindu (Vedic), Islamic (Quranic), Sikh, Christian, Modern Indian, or Global multicultural traditions.",
        proTip: "You can select dual heritages to find harmonious cross-cultural names.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Set Meaning, Syllable & Rashi Letters",
        shortAction: "Meaning & Letters",
        description: "Filter by auspicious attributes (e.g., 'Light', 'Brave', 'Pure', 'Grace') or select specific starting astrological nakshatra letters.",
        proTip: "2-syllable names are universally easier to pronounce across languages.",
        iconName: "search",
      },
      {
        stepNumber: 3,
        title: "Check Syllable Cadence with Surname",
        shortAction: "Surname Harmony",
        description: "Test how the full name flows phonetically with your family surname to ensure smooth rhythmic balance.",
        proTip: "Pair a short first name (e.g. Aarav) with longer surnames for elegance.",
        iconName: "sliders",
      },
      {
        stepNumber: 4,
        title: "Shortlist & Copy Meaning Card",
        shortAction: "Save & Shortlist",
        description: "Bookmark your top choices, copy root etymology details, and export an aesthetic digital announcement card.",
        proTip: "Share your shortlisted top 3 names with family via 1-click WhatsApp share.",
        iconName: "heart",
      },
    ],
  },

  "ai-name-combiner": {
    id: "ai-name-combiner",
    badge: "Couple & Syllable Blend",
    heading: "How to Combine Names into a Unique Baby/Couple Name",
    subheading: "Blend parents' names using linguistic syllable harmony and phonetic balancing.",
    steps: [
      {
        stepNumber: 1,
        title: "Enter Both Starting Names",
        shortAction: "Input Parents' Names",
        description: "Type Mother's name and Father's name (e.g., 'Pooja' + 'Rahul' or 'Sara' + 'Ali') into the syllable input boxes.",
        proTip: "You can also input nicknames or middle names for creative variation.",
        iconName: "type",
      },
      {
        stepNumber: 2,
        title: "Choose Syllable Blend Ratio",
        shortAction: "Blend Style",
        description: "Select whether you want 50-50 syllable fusion, Prefix-focused blending, or Suffix-rhyme harmony.",
        proTip: "Prefix blending keeps the first parent's core initial intact.",
        iconName: "sliders",
      },
      {
        stepNumber: 3,
        title: "Verify Linguistic Meaning",
        shortAction: "Meaning Verification",
        description: "AI filters out meaningless gibberish and matches created combinations against real Sanskrit, Arabic, and Latin root dictionaries.",
        proTip: "Always pick combinations with verified positive etymological definitions.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy & Share Shortlist",
        shortAction: "Copy & Export",
        description: "Save your favorite generated couple or baby name blends and share the list directly with friends and family on WhatsApp.",
        proTip: "Say the combination aloud 5 times to confirm smooth natural pronunciation.",
        iconName: "share",
      },
    ],
  },

  "ai-quotes-generator": {
    id: "ai-quotes-generator",
    badge: "Wisdom & Aesthetic Engine",
    heading: "How to Generate Soul-Stirring Quotes in 4 Steps",
    subheading: "Craft memorable philosophical, motivational, and deep aesthetic lines for daily inspiration.",
    steps: [
      {
        stepNumber: 1,
        title: "Pick Your Theme & Emotion",
        shortAction: "Theme Selection",
        description: "Select your subject: Self-Discipline, Hustle, Deep Love, Healing, Solitude, Stoicism, or Karma.",
        proTip: "Stoic & Discipline quotes generate the highest save rates on Instagram.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Select Writing Style",
        shortAction: "Author Style",
        description: "Choose classical poetic prose, modern brutal honesty, minimalist one-liner, or philosophical perspective.",
        proTip: "Short one-line quotes under 12 words fit perfectly into Instagram Notes & WhatsApp About.",
        iconName: "type",
      },
      {
        stepNumber: 3,
        title: "AI Generates Curated Thoughts",
        shortAction: "Instant Quotes",
        description: "Receive 10 unique, non-cliché thoughts formatted with proper punctuation and thought-provoking depth.",
        proTip: "Check the emotional resonance score next to each generated quote.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy or Generate Story Card",
        shortAction: "Copy & Story Card",
        description: "Copy text instantly with 1-click or open the Story Card Maker to download a 9:16 minimalist dark wallpaper.",
        proTip: "Dark mode quote cards have an 80% higher completion rate on Stories.",
        iconName: "copy",
      },
    ],
  },

  "ai-shayari-generator": {
    id: "ai-shayari-generator",
    badge: "Urdu & Hindi Poetic Engine",
    heading: "How to Create Authentic 2-Line Shayari in 4 Steps",
    subheading: "Generate rhythmic Sher and Ghazal couplets with authentic wazn, radif, and emotional ras.",
    steps: [
      {
        stepNumber: 1,
        title: "Select Emotional Ras (Vibe)",
        shortAction: "Select Ras / Emotion",
        description: "Choose your mood: Mohabbat (Love), Tevar (Attitude/Swag), Dard (Heartbreak/Sad), Dosti (Friendship), or Zindagi (Philosophy).",
        proTip: "Tevar and Attitude shayari perform best for trending slow-motion Reels.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Choose Script (Hindi / Hinglish)",
        shortAction: "Toggle Script",
        description: "Switch between authentic Devanagari Hindi (हिंदी) and Roman Hinglish font for effortless social sharing.",
        proTip: "Hinglish is ideal for reels text overlays; Devanagari is best for WhatsApp status images.",
        iconName: "type",
      },
      {
        stepNumber: 3,
        title: "Review Meter & 2-Line Rhythm",
        shortAction: "Meter & Rhyme",
        description: "Our poetic AI aligns Matla, Kafiya, and Radif to ensure the couplet flows musically when spoken or paired with BGM.",
        proTip: "Pair with slowed + reverb flute or lofi acoustic tracks on Instagram Reels.",
        iconName: "music",
      },
      {
        stepNumber: 4,
        title: "1-Click WhatsApp & Social Share",
        shortAction: "Share Couplet",
        description: "Copy with verified emojis or tap the direct WhatsApp button to set as your status in 1 second.",
        proTip: "Add 2-3 line breaks between the couplet lines for maximum readability.",
        iconName: "share",
      },
    ],
  },

  "ai-status-generator": {
    id: "ai-status-generator",
    badge: "Status & Story Suite",
    heading: "How to Generate Catchy Social Status in 4 Steps",
    subheading: "Create punchy, screenshot-worthy status updates for WhatsApp, Instagram Notes, and Facebook.",
    steps: [
      {
        stepNumber: 1,
        title: "Choose Platform & Length",
        shortAction: "Platform & Length",
        description: "Select target destination: WhatsApp Status, Instagram Notes (60 chars), Facebook Story, or Telegram Bio.",
        proTip: "Instagram Notes have a 60-character ceiling; keep it under 8 words.",
        iconName: "sliders",
      },
      {
        stepNumber: 2,
        title: "Input Daily Mood or Situation",
        shortAction: "Mood & Situation",
        description: "Enter your current scenario (e.g. 'Monday grind', 'Late night thoughts', 'Unbothered king vibe').",
        proTip: "Authentic, slightly mysterious lines trigger the highest DM responses.",
        iconName: "search",
      },
      {
        stepNumber: 3,
        title: "Apply Smart Formatting",
        shortAction: "Formatting & Style",
        description: "AI formats status with WhatsApp font markdown (*bold*, _italics_) and curated aesthetic emojis.",
        proTip: "Bold text draws 40% faster visual attention in WhatsApp status lists.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "1-Click Direct Status Share",
        shortAction: "1-Click Status",
        description: "Copy to clipboard or tap the direct share button to open WhatsApp Status update immediately.",
        proTip: "Post during lunch (1-2 PM) or evening (8-10 PM) for peak view count.",
        iconName: "share",
      },
    ],
  },

  // ==========================================
  // CONTENT TYPES (Vaults & Hubs)
  // ==========================================
  "captions-vault": {
    id: "captions-vault",
    badge: "Caption Vault Guide",
    heading: "How to Choose & Use the Best Captions in 4 Steps",
    subheading: "Pick viral, high-retention lines tailored to your exact photo vibe and audience.",
    steps: [
      {
        stepNumber: 1,
        title: "Filter by Vibe & Emotion",
        shortAction: "Filter Vibe",
        description: "Browse curated categories: Attitude & Savage, Aesthetic, Golden Hour, Gym PR, Mirror Selfie, Travel, or Love.",
        proTip: "Match your caption's tone to the lighting and energy of your photo.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Check 3-Second Hook Rule",
        shortAction: "Hook Length",
        description: "Ensure the first 5 words create intense curiosity before Instagram's '...more' button cut-off.",
        proTip: "Lines with a strong opening statement boost Reel dwell time by over 45%.",
        iconName: "clock",
      },
      {
        stepNumber: 3,
        title: "1-Click Visual Quote Card",
        shortAction: "Story Card",
        description: "Click the image icon on any caption card to export a clean 9:16 graphic ready for Instagram Stories.",
        proTip: "Use high contrast dark backgrounds for text-only story updates.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "Copy & Post with Matching Tags",
        shortAction: "1-Click Copy",
        description: "Click any card to copy verified text with emojis and pair with 3-5 niche hashtags from our generator.",
        proTip: "Pin a witty comment under your own post within 5 minutes to spark discussion.",
        iconName: "copy",
      },
    ],
  },

  "shayari-vault": {
    id: "shayari-vault",
    badge: "Shayari Masterclass",
    heading: "How to Share 2-Line Shayari Online in 4 Steps",
    subheading: "Pair emotional couplets with Reels audio, WhatsApp status, and aesthetic story cards.",
    steps: [
      {
        stepNumber: 1,
        title: "Select Your Emotional Mood (Ras)",
        shortAction: "Select Emotion",
        description: "Filter by Mohabbat (Romantic), Tevar (Attitude), Dard (Heartbreak), Yaari (Friendship), or Zindagi (Life).",
        proTip: "Tevar shayari paired with bold slow-motion video generates viral saves.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Switch Script (Hindi / Hinglish)",
        shortAction: "Toggle Language",
        description: "Choose Devanagari (हिंदी) for classic authentic elegance or Roman Hinglish for easy reading on Reels.",
        proTip: "Hinglish font ensures non-Hindi readers can also read and share effortlessly.",
        iconName: "type",
      },
      {
        stepNumber: 3,
        title: "Pair with Reel BGM & Slow-Mo",
        shortAction: "Audio & BGM",
        description: "Pair the couplet with trending flute, acoustic sarangi, or lofi beats to create an immersive audio-visual mood.",
        proTip: "Time the second line (Sher) of your couplet with the beat drop of the music.",
        iconName: "music",
      },
      {
        stepNumber: 4,
        title: "1-Click WhatsApp & Social Share",
        shortAction: "Share Couplet",
        description: "Use the 1-click WhatsApp share button to post directly as your status with zero manual typing.",
        proTip: "Post couplets late evening (9 PM - 11 PM) when emotional status views peak.",
        iconName: "share",
      },
    ],
  },

  "bio-vault": {
    id: "bio-vault",
    badge: "Profile Optimization",
    heading: "How to Customize & Set Your Social Bio in 4 Steps",
    subheading: "Format an eye-catching bio within character limits that boosts profile conversion.",
    steps: [
      {
        stepNumber: 1,
        title: "Choose Profile Category",
        shortAction: "Select Style",
        description: "Browse Attitude, VIP Stylish, Aesthetic Girl, Fitness King, Creative Entrepreneur, or Gamer profiles.",
        proTip: "Choose a theme that aligns with your top 3 pinned posts.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Verify 150-Character Limit",
        shortAction: "Char Check",
        description: "All our curated bios are pre-tested to strictly fit Instagram's 150-character and 4-line limit.",
        proTip: "Avoid excessive special symbols that break on Android or older iOS devices.",
        iconName: "clock",
      },
      {
        stepNumber: 3,
        title: "Add Custom Highlights & City",
        shortAction: "Personalize",
        description: "Replace placeholder names and dates with your own city (📍), birth date (🎂), and primary passion (⚡).",
        proTip: "Keep your city and passion in line 2 for instant local relatability.",
        iconName: "sliders",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy & Paste to Profile",
        shortAction: "Copy to Bio",
        description: "Copy formatted text with exact line-breaks intact and paste directly into Edit Profile > Bio field.",
        proTip: "Pair your new bio with aesthetic matching Story Highlight Covers.",
        iconName: "copy",
      },
    ],
  },

  "status-vault": {
    id: "status-vault",
    badge: "Status & Stories Guide",
    heading: "How to Pick & Post Catchy Status Lines in 4 Steps",
    subheading: "Short, punchy status updates crafted for WhatsApp, Facebook Stories, and Instagram Notes.",
    steps: [
      {
        stepNumber: 1,
        title: "Browse by Daily Mood",
        shortAction: "Choose Mood",
        description: "Select Attitude, Motivation, Heartfelt Love, Savage Clapback, or Chill Weekend vibes.",
        proTip: "Morning motivation lines get high forwarding activity on WhatsApp groups.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Keep It Under 2 Lines",
        shortAction: "2-Line Format",
        description: "Mobile viewers glance at status updates for under 3 seconds; keep your message punchy and tight.",
        proTip: "Use bold text (*word*) in WhatsApp to highlight key punchlines.",
        iconName: "type",
      },
      {
        stepNumber: 3,
        title: "Preview Status Card Layout",
        shortAction: "Layout Preview",
        description: "Check how the status renders in dark mode card preview with clean emoji accents.",
        proTip: "A single meaningful emoji at the end creates visual balance.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "1-Click WhatsApp Share",
        shortAction: "Instant Share",
        description: "Tap the direct WhatsApp Share button or copy to clipboard for instant posting.",
        proTip: "Post status updates between 8:00 AM - 10:00 AM for maximum daytime views.",
        iconName: "share",
      },
    ],
  },

  "quotes-vault": {
    id: "quotes-vault",
    badge: "Quotes & Wisdom Guide",
    heading: "How to Share Daily Wisdom & Quotes in 4 Steps",
    subheading: "Inspiring quotes for self-growth, daily motivation, and aesthetic social posts.",
    steps: [
      {
        stepNumber: 1,
        title: "Filter by Life Category",
        shortAction: "Filter Category",
        description: "Browse Success, Solitude, Mindset, Stoic Philosophy, Karma, Fitness Discipline, or Deep Love.",
        proTip: "Discipline and mindset quotes achieve the highest bookmark rate on Instagram.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Select Author & Style",
        shortAction: "Author Style",
        description: "Choose classical philosophical quotes or modern brutal self-accountability statements.",
        proTip: "Short quotes under 100 characters work best for Instagram Notes and Twitter reposts.",
        iconName: "type",
      },
      {
        stepNumber: 3,
        title: "Export 9:16 Minimalist Graphic",
        shortAction: "Graphic Export",
        description: "Open the Visual Quote Maker to create an elegant dark typography card ready for Story posting.",
        proTip: "High contrast monochrome quote cards get 2x more story reposts.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy & Save to Favorites",
        shortAction: "Save & Copy",
        description: "Copy quote to clipboard with 1-click or save to your browser favorites list for daily reference.",
        proTip: "Use as your daily lock-screen reminder or social media thought-of-the-day.",
        iconName: "copy",
      },
    ],
  },

  // ==========================================
  // SOCIAL PLATFORMS (Instagram, WhatsApp, TikTok, etc.)
  // ==========================================
  "platform-instagram": {
    id: "platform-instagram",
    badge: "Instagram Growth Guide",
    heading: "How to Use Instagram Captions & Tools for Max Reach",
    subheading: "Leverage Reels 3-second hook mechanics, carousel formatting, and hashtag ladders.",
    steps: [
      {
        stepNumber: 1,
        title: "Write Above-The-Fold Hook",
        shortAction: "3-Sec Hook",
        description: "Put your most intriguing words in line 1 before the '...more' button cutoff (approx 70-125 characters).",
        proTip: "Reels that prompt users to tap '...more' receive a strong algorithmic boost.",
        iconName: "clock",
      },
      {
        stepNumber: 2,
        title: "Pair with 3-Tier Hashtag Ladder",
        shortAction: "30-Tag Ladder",
        description: "Generate 20-30 balanced tags (10 high, 10 medium, 10 niche) directly inside the caption body.",
        proTip: "Do not place tags in the comments; Instagram search indexes caption tags faster in 2026.",
        iconName: "hash",
      },
      {
        stepNumber: 3,
        title: "Include Interactive CTA",
        shortAction: "Comment CTA",
        description: "Ask a binary question (e.g. '1 or 2?', 'Agree or disagree?') to multiply comment velocity.",
        proTip: "Reply to all comments in the first 30 minutes to trigger explore page momentum.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "Post During Peak Traffic Windows",
        shortAction: "Best Timing",
        description: "Schedule posts between 6:00 PM – 9:00 PM on weekdays and 11:00 AM – 2:00 PM on weekends.",
        proTip: "Use our 1-click Visual Quote maker for daily story teasers.",
        iconName: "zap",
      },
    ],
  },

  "platform-whatsapp": {
    id: "platform-whatsapp",
    badge: "WhatsApp Status Guide",
    heading: "How to Format & Share WhatsApp Status in 4 Steps",
    subheading: "Optimize readability, font formatting, and timing for 100% status engagement.",
    steps: [
      {
        stepNumber: 1,
        title: "Choose Short Punchy Couplets",
        shortAction: "2-Line Format",
        description: "Keep status updates within 2 to 3 lines so contacts can comfortably read before the 5-second timer ends.",
        proTip: "Punchy emotional shayari and savage attitude lines get the highest screenshots.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Use WhatsApp Font Markdown",
        shortAction: "Font Styling",
        description: "Add `*` for *bold*, `_` for _italics_, and `~` for ~strikethrough~ to make punchlines pop.",
        proTip: "Put *bold* around the main keyword to capture instant attention.",
        iconName: "type",
      },
      {
        stepNumber: 3,
        title: "Tap Direct 1-Click Share Button",
        shortAction: "Direct Share",
        description: "Click the green WhatsApp button on any line to launch WhatsApp with the text already formatted.",
        proTip: "No copy-pasting required; jumps directly to your 'My Status' screen.",
        iconName: "share",
      },
      {
        stepNumber: 4,
        title: "Post at Morning & Evening Peak Hours",
        shortAction: "Peak Timing",
        description: "Post morning thoughts at 8:00 AM – 9:30 AM and evening shayari at 8:30 PM – 10:30 PM.",
        proTip: "Leave 2-3 hours between consecutive status updates for maximum view retention.",
        iconName: "clock",
      },
    ],
  },

  "platform-tiktok": {
    id: "platform-tiktok",
    badge: "TikTok FYP Guide",
    heading: "How to Optimize TikTok Captions for FYP Algorithm",
    subheading: "Boost video completion rate and search rankings on the TikTok FYP feed.",
    steps: [
      {
        stepNumber: 1,
        title: "Match On-Screen Text with Caption Hook",
        shortAction: "Text Synchronization",
        description: "Align your video's 1-second text hook with the first 5 words of your caption for cognitive clarity.",
        proTip: "Looping captions ('Watch till end for secret') double video completion rates.",
        iconName: "clock",
      },
      {
        stepNumber: 2,
        title: "Use 4 to 8 Hyper-Targeted Niche Tags",
        shortAction: "Niche FYP Tags",
        description: "TikTok algorithm prefers 4-8 precise niche tags rather than 30 generic tags (e.g. #gymtok #delhifoodie).",
        proTip: "Avoid stuffing unrelated trending hashtags like #fyp #viral.",
        iconName: "hash",
      },
      {
        stepNumber: 3,
        title: "Add Trending Sound Reference",
        shortAction: "Audio Harmony",
        description: "Reference the trending sound or dialogue in your caption to ride current audio search momentum.",
        proTip: "Pair with relatable observational humor or raw behind-the-scenes thoughts.",
        iconName: "music",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy & Schedule",
        shortAction: "Copy & Post",
        description: "Copy with 1-click and publish during high-traffic commute windows (7 PM - 10 PM).",
        proTip: "Pin your own question comment to start the discussion thread.",
        iconName: "copy",
      },
    ],
  },

  "platform-youtube": {
    id: "platform-youtube",
    badge: "YouTube Shorts & Video SEO",
    heading: "How to Craft High-CTR YouTube Shorts Captions",
    subheading: "Rank in YouTube Search and the Shorts algorithmic recommendation shelf.",
    steps: [
      {
        stepNumber: 1,
        title: "Write High-Curiosity Title Hook",
        shortAction: "Curiosity Title",
        description: "Front-load your Shorts title with strong emotional triggers (e.g. 'I didn't expect this...', 'The 1 mistake...').",
        proTip: "Keep title under 55 characters to prevent truncation on mobile feeds.",
        iconName: "type",
      },
      {
        stepNumber: 2,
        title: "Include Keyword-Rich Description",
        shortAction: "Search SEO",
        description: "Write 2-3 sentences explaining the video using primary search keywords to rank in Google & YouTube Search.",
        proTip: "YouTube indexes full descriptions for suggested video placement.",
        iconName: "search",
      },
      {
        stepNumber: 3,
        title: "Pair 3 Core #Shorts Hashtags",
        shortAction: "Shorts Tags",
        description: "Add #Shorts along with 2 primary niche tags in the title/description.",
        proTip: "Always include #Shorts to ensure placement in the vertical feed.",
        iconName: "hash",
      },
      {
        stepNumber: 4,
        title: "Pin Call-to-Action in Comments",
        shortAction: "Comment Pin",
        description: "Pin a comment prompting viewers to subscribe or check your playlist link.",
        proTip: "Pinned comments convert 3x more subscribers than in-video mentions.",
        iconName: "sparkles",
      },
    ],
  },

  "platform-linkedin": {
    id: "platform-linkedin",
    badge: "LinkedIn Thought Leadership",
    heading: "How to Format High-Engagement LinkedIn Posts",
    subheading: "Professional hook structures, clean white-space formatting, and B2B engagement.",
    steps: [
      {
        stepNumber: 1,
        title: "Write a Counter-Intuitive Opening Line",
        shortAction: "B2B Hook",
        description: "Open with a bold industry observation or career lesson that stops the professional feed scroll.",
        proTip: "Line 1 must create suspense before the '...see more' button.",
        iconName: "type",
      },
      {
        stepNumber: 2,
        title: "Use 1-Sentence Paragraph Spacing",
        shortAction: "Clean Formatting",
        description: "Break thoughts into 1-2 sentence lines with comfortable white space for effortless mobile scanning.",
        proTip: "Never post giant walls of text; mobile readability determines dwell time.",
        iconName: "sliders",
      },
      {
        stepNumber: 3,
        title: "Deliver 3 Actionable Takeaways",
        shortAction: "Actionable Value",
        description: "Format the core lesson with clean bullet points (• or 1, 2, 3) to deliver practical value.",
        proTip: "Readers bookmark and repost content they can immediately apply in their career.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "End with Open Professional Question",
        shortAction: "Discussion CTA",
        description: "Ask for peer perspectives (e.g., 'What's your take on this framework?') to drive algorithmic comments.",
        proTip: "Post between 8:00 AM – 10:30 AM on Tuesday, Wednesday, and Thursday.",
        iconName: "clock",
      },
    ],
  },

  "platform-snapchat": {
    id: "platform-snapchat",
    badge: "Snapchat Spotlight & Stories",
    heading: "How to Create Punchy Snapchat Captions & Stories",
    subheading: "Aesthetic font overlays, streak quotes, and high-retention Spotlight lines.",
    steps: [
      {
        stepNumber: 1,
        title: "Keep It Under 7 Words",
        shortAction: "Micro-Caption",
        description: "Snapchat users view snaps for 1 to 3 seconds; keep the caption ultra-short, witty, and punchy.",
        proTip: "One-word aesthetic captions (e.g., 'Euphoria ✨', 'Unbothered 👑') perform best.",
        iconName: "clock",
      },
      {
        stepNumber: 2,
        title: "Match Overlay Text with Filter",
        shortAction: "Visual Filter",
        description: "Pair our aesthetic captions with clean monochrome, film grain, or golden hour lenses.",
        proTip: "Center-aligned white text with subtle shadow ensures readability across all camera backgrounds.",
        iconName: "sparkles",
      },
      {
        stepNumber: 3,
        title: "Daily Streak Quotes & Reminders",
        shortAction: "Streak Quotes",
        description: "Use our dedicated daily streak quotes to keep friends engaged without sending blank snaps.",
        proTip: "Good morning streak quotes maintain consistency effortlessly.",
        iconName: "type",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy & Paste to Snap",
        shortAction: "Copy & Paste",
        description: "Copy with 1-click and paste directly onto your snap photo or Spotlight submission.",
        proTip: "Add relevant topic stickers on Spotlight to expand discovery.",
        iconName: "copy",
      },
    ],
  },
};

/**
 * Helper to dynamically resolve the best tailored How-To Guide config
 * for any given route, content type, platform, or tool.
 */
export function getHowToGuide(
  identifier: string,
  options?: {
    contentType?: string;
    platform?: string;
    categoryName?: string;
    title?: string;
  }
): HowToGuideConfig {
  // 1. Direct key match
  if (HOW_TO_GUIDES[identifier]) {
    return HOW_TO_GUIDES[identifier];
  }

  // 2. AI Tools match
  if (identifier.startsWith("ai-")) {
    if (identifier.includes("hashtag")) return HOW_TO_GUIDES["ai-hashtag-generator"];
    if (identifier.includes("bio")) return HOW_TO_GUIDES["ai-bio-generator"];
    if (identifier.includes("baby") || identifier.includes("name")) return HOW_TO_GUIDES["ai-baby-name-generator"];
    if (identifier.includes("quote")) return HOW_TO_GUIDES["ai-quotes-generator"];
    if (identifier.includes("shayari")) return HOW_TO_GUIDES["ai-shayari-generator"];
    if (identifier.includes("status")) return HOW_TO_GUIDES["ai-status-generator"];
    return HOW_TO_GUIDES["ai-caption-generator"];
  }

  // 3. Platform match
  if (options?.platform && HOW_TO_GUIDES[`platform-${options.platform}`]) {
    return HOW_TO_GUIDES[`platform-${options.platform}`];
  }

  // 4. Content Type match
  if (options?.contentType) {
    const cType = options.contentType.toLowerCase();
    if (cType.includes("shayari")) return HOW_TO_GUIDES["shayari-vault"];
    if (cType.includes("bio")) return HOW_TO_GUIDES["bio-vault"];
    if (cType.includes("status")) return HOW_TO_GUIDES["status-vault"];
    if (cType.includes("quote")) return HOW_TO_GUIDES["quotes-vault"];
    return HOW_TO_GUIDES["captions-vault"];
  }

  // 5. Fallback customized to the category / page
  const name = options?.categoryName || options?.title || "Curated Content";
  return {
    id: "default-guide",
    badge: "Step-by-Step Guide",
    heading: `How to Use ${name} for Maximum Impact`,
    subheading: `4 practical steps to find, customize, and post high-converting ${name.toLowerCase()} lines.`,
    steps: [
      {
        stepNumber: 1,
        title: "Filter by Your Specific Mood",
        shortAction: "Filter Mood",
        description: `Explore our handpicked collection of verified ${name.toLowerCase()} tailored for attitude, aesthetic, and viral reels.`,
        proTip: "Use the filter chips at the top to narrow down by language and tone.",
        iconName: "filter",
      },
      {
        stepNumber: 2,
        title: "Check Line Readability & Dwell",
        shortAction: "Check Dwell Time",
        description: "Preview how each line looks in our mobile card simulation before sharing.",
        proTip: "Short, punchy lines get 2x more screenshot saves on social media.",
        iconName: "clock",
      },
      {
        stepNumber: 3,
        title: "Create 9:16 Story Quote Card",
        shortAction: "Visual Card Maker",
        description: "Convert any text into an aesthetic image quote card with 1 click for your Instagram Story.",
        proTip: "Dark mode background cards have an 80% higher completion rate.",
        iconName: "sparkles",
      },
      {
        stepNumber: 4,
        title: "1-Click Copy & Direct Share",
        shortAction: "1-Click Copy",
        description: "Copy with formatted emojis or share directly to WhatsApp Status with single-touch convenience.",
        proTip: "Post during peak hours (6 PM - 9 PM) for maximum algorithmic reach.",
        iconName: "copy",
      },
    ],
  };
}
