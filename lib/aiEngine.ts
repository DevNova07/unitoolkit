import { GeneratorOptions, PlatformType, StyleType, ToneType, LanguageType, LengthType } from "@/lib/types";
import { STYLE_PRESETS, HINGLISH_TEMPLATES } from "@/data/aiPresets";

interface TopicIdea {
  keywords: string[];
  captions: {
    aesthetic: string[];
    viral: string[];
    savage: string[];
    funny: string[];
    minimal: string[];
    romantic: string[];
    inspirational: string[];
    professional: string[];
    emotional: string[];
    casual: string[];
  };
}

const TOPIC_KNOWLEDGE: TopicIdea[] = [
  {
    keywords: ["sunset", "jaipur", "sunrise", "sky", "evening", "dusk", "golden hour", "orange sky", "clouds"],
    captions: {
      aesthetic: [
        "Chasing golden hues painted across royal skies.",
        "When the sun dips low, Jaipur breathes pure gold.",
        "Sky above, calm within. The magic of golden hour.",
        "Painted skies and whispered dreams as daylight fades.",
        "Golden moments that feel frozen in timeless beauty.",
        "Soft amber light washing over ancient stone.",
        "Watching the sky blush pink and gold over the pink city.",
        "Even the sunset leaves behind a promise of a new dawn.",
      ],
      viral: [
        "Proof that Jaipur sunsets hit differently than anywhere else on earth.",
        "Unfiltered golden hour magic. Rate this view 1-10.",
        "Stop scrolling and take in this view for 5 seconds.",
        "If you haven't seen a sunset here, add it to your bucket list ASAP.",
      ],
      savage: [
        "The sun may set, but my glow never dims.",
        "Not everyone deserves to share this view with me.",
        "High standards, higher views.",
      ],
      funny: [
        "Staring at the sunset pretending I have my entire life figured out.",
        "50 photos later and the sunset still looked better in person.",
        "Came for the sunset, stayed because my legs gave up.",
      ],
      minimal: [
        "Golden hour.",
        "Amber skies.",
        "Pure peace.",
        "Just sunset things.",
      ],
      romantic: [
        "The sky is full of colors, but my eyes are only on you.",
        "Sunsets are always better when hand in hand with you.",
      ],
      inspirational: [
        "Every sunset is an opportunity to reset and rise stronger tomorrow.",
        "Endings can be breathtaking too. Keep believing in new beginnings.",
      ],
      professional: [
        "Reflecting on today's milestones as the sun sets on another productive week.",
        "Taking time to step back, recalibrate, and prepare for tomorrow's execution.",
      ],
      emotional: [
        "Quiet moments like this heal parts of you that words never could.",
        "Grateful for the peace found in the fading daylight.",
      ],
      casual: [
        "Catching the sunset breeze before dinner.",
        "Good vibes and golden skies.",
      ],
    },
  },
  {
    keywords: ["gym", "workout", "fitness", "transformation", "gains", "muscle", "lifting", "cardio", "shredded", "weights", "pr", "sweat"],
    captions: {
      aesthetic: [
        "Sculpting strength in the quiet hours.",
        "Iron and intention. One rep at a time.",
        "Progress over perfection, every single day.",
        "Where discipline meets devotion.",
      ],
      viral: [
        "They doubted the process. The results speak for themselves.",
        "6 months of pure consistency vs a lifetime of excuses. Choose your hard.",
        "Don't wish for it. Work for it. Let's get these gains!",
      ],
      savage: [
        "Sweat is just weakness leaving the body.",
        "I'm competing with the person in the mirror, and they're losing.",
        "No shortcuts, no excuses, no mercy on the weights.",
      ],
      funny: [
        "I do gym so I can eat pizza without guilt.",
        "My relationship with the gym is complicated: I love it, my legs hate it.",
        "Everything hurts and I'm dying, but look at the pump.",
      ],
      minimal: [
        "Day by day.",
        "Iron therapy.",
        "Consistency.",
        "Work done.",
      ],
      romantic: [
        "Couples that lift together, stay strong together.",
        "My favorite workout partner in life.",
      ],
      inspirational: [
        "The pain you feel today will be the strength you feel tomorrow.",
        "Discipline is choosing between what you want now and what you want most.",
      ],
      professional: [
        "Physical stamina builds mental clarity. Leadership begins with self-discipline.",
        "Applying the same consistency in the gym to building scalable systems.",
      ],
      emotional: [
        "The gym became my sanctuary when everything else was chaos.",
        "Proud of the silent battles fought and the resilience forged in here.",
      ],
      casual: [
        "Quick sweat session before the weekend begins.",
        "Just another day putting in the reps.",
      ],
    },
  },
  {
    keywords: ["birthday", "bday", "celebration", "party", "cake", "cheers", "another year", "turning", "age", "candle"],
    captions: {
      aesthetic: [
        "Another trip around the sun, wrapped in gratitude and light.",
        "Stepping into this new chapter with grace, warmth, and open arms.",
        "To more laughter, deeper peace, and timeless memories.",
      ],
      viral: [
        "Level unlocked! Officially another year bolder and unstoppable.",
        "Main character was born on this day. Happy Birthday to me!",
        "Cheers to another 365 days of being iconic.",
      ],
      savage: [
        "Aging like fine wine while you stay the same.",
        "Not getting older, just getting too expensive to maintain.",
        "My birthday, my rules, zero apologies.",
      ],
      funny: [
        "Officially old enough to know better, but still young enough to do it anyway.",
        "I'm just here for the cake and attention.",
        "Another year closer to becoming an eccentric rich aunty/uncle.",
      ],
      minimal: [
        "Chapter +1.",
        "Grateful 365.",
        "Birthday energy.",
        "New age.",
      ],
      romantic: [
        "Celebrating the best human in the world today. Happy Birthday my love.",
        "Another year of loving you more than words can describe.",
      ],
      inspirational: [
        "Grateful for every single high and low that shaped who I am today.",
        "Here's to stepping fearlessly into my highest potential this year.",
      ],
      professional: [
        "Reflecting on a year of immense growth, new partnerships, and big lessons.",
      ],
      emotional: [
        "Grateful for the gift of life and the beautiful souls who walk alongside me.",
      ],
      casual: [
        "Cake, friends, and good music. Best birthday ever.",
      ],
    },
  },
  {
    keywords: ["coffee", "cafe", "espresso", "latte", "cappuccino", "morning", "brew", "caffeine"],
    captions: {
      aesthetic: [
        "Steaming cup, slow morning, peaceful soul.",
        "Warm ceramic cups and quiet morning thoughts.",
        "Coffee: my favorite form of poetry.",
      ],
      viral: [
        "Powered by caffeine and big ambition.",
        "First coffee, then I conquer the universe.",
      ],
      savage: [
        "I like my coffee like my boundaries: dark and strong.",
        "Don't speak to me until the cup is empty.",
      ],
      funny: [
        "My blood type is essentially 98% iced Americano.",
        "Behind every successful person is a substantial amount of coffee.",
      ],
      minimal: [
        "Morning brew.",
        "Coffee first.",
        "Warm cup.",
      ],
      romantic: [
        "Coffee dates with you are my favorite love language.",
      ],
      inspirational: [
        "Brew your dreams with the same heat and focus as your morning cup.",
      ],
      professional: [
        "Fueling up for a high-impact week of building and delivering results.",
      ],
      emotional: [
        "There is deep comfort in holding a warm mug on a chilly morning.",
      ],
      casual: [
        "Just a casual cafe run to kickstart the day.",
      ],
    },
  },
];

export function generateCaptions(options: GeneratorOptions): string[] {
  const { prompt, platform, style, tone, length, language, count, includeHashtags, includeEmojis } = options;
  const lowerPrompt = prompt.toLowerCase().trim();

  // Find topic matches
  let matchedTopic: TopicIdea | undefined;
  for (const topic of TOPIC_KNOWLEDGE) {
    if (topic.keywords.some((kw) => lowerPrompt.includes(kw))) {
      matchedTopic = topic;
      break;
    }
  }

  const results: string[] = [];
  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.aesthetic;
  const styleTemplates = preset.templates[length] || preset.templates.short;

  // 1. Language Handling (Hinglish / Hindi)
  if (language === "hinglish" || language === "hi") {
    const hinglishCategory = (style === "savage" ? "attitude" : style === "funny" ? "funny" : style === "romantic" ? "love" : "attitude") as keyof typeof HINGLISH_TEMPLATES;
    const hTemplates = HINGLISH_TEMPLATES[hinglishCategory] || HINGLISH_TEMPLATES.attitude;
    hTemplates.forEach((t) => {
      if (results.length < count) {
        results.push(t);
      }
    });
  }

  // 2. Topic-specific generation if matched
  if (matchedTopic) {
    const topicStyleList = matchedTopic.captions[style] || matchedTopic.captions.aesthetic;
    topicStyleList.forEach((c) => {
      if (results.length < count && !results.includes(c)) {
        results.push(c);
      }
    });
  }

  // 3. Dynamic synthesis based on user's custom prompt
  if (prompt && prompt.length > 2) {
    const cleanSubject = prompt.replace(/[^\w\s]/gi, "").trim();
    const dynamicSyntheses: string[] = [];

    if (style === "aesthetic") {
      dynamicSyntheses.push(
        `Living for the quiet moments wrapped around ${cleanSubject}.`,
        `Lost in the aesthetic beauty of ${cleanSubject}.`,
        `Soft light, deep peace, and the magic of ${cleanSubject}.`,
        `When life gives you ${cleanSubject}, make it unforgettable.`,
        `Chasing pure serenity through ${cleanSubject}.`,
        `Simple joys and timeless memories with ${cleanSubject}.`
      );
    } else if (style === "viral") {
      dynamicSyntheses.push(
        `This is your sign to experience ${cleanSubject} before it's too late.`,
        `Not over this ${cleanSubject} vibe. 10/10 recommendation!`,
        `Stop everything and check out this ${cleanSubject}.`,
        `The ${cleanSubject} glow up nobody saw coming.`,
        `POV: You finally unlocked the ultimate ${cleanSubject}.`
      );
    } else if (style === "savage") {
      dynamicSyntheses.push(
        `Mastering ${cleanSubject} while they're still talking.`,
        `Too busy owning my ${cleanSubject} to care about opinions.`,
        `They watched me build this ${cleanSubject} in silence.`,
        `My ${cleanSubject}, my rules. No comparisons.`
      );
    } else if (style === "funny") {
      dynamicSyntheses.push(
        `If ${cleanSubject} was an Olympic sport, I'd have a gold medal by now.`,
        `My brain at 3 AM thinking about ${cleanSubject}.`,
        `100% powered by iced coffee and ${cleanSubject}.`,
        `Came for the ${cleanSubject}, stayed because I lost my car keys.`
      );
    } else if (style === "romantic") {
      dynamicSyntheses.push(
        `Every moment with ${cleanSubject} feels like a dream with you.`,
        `You make ${cleanSubject} look so much more magical.`,
        `Forever grateful for days filled with love and ${cleanSubject}.`
      );
    } else if (style === "professional") {
      dynamicSyntheses.push(
        `Key takeaways on scaling ${cleanSubject} with consistency and purpose.`,
        `Focusing on high-leverage execution in ${cleanSubject}.`,
        `Why consistency in ${cleanSubject} delivers undeniable compounding returns.`
      );
    } else {
      dynamicSyntheses.push(
        `Embracing the energy of ${cleanSubject}.`,
        `Finding genuine inspiration in ${cleanSubject}.`,
        `Grateful for new chapters with ${cleanSubject}.`,
        `Making memories and celebrating ${cleanSubject}.`
      );
    }

    dynamicSyntheses.forEach((item) => {
      if (results.length < count && !results.includes(item)) {
        results.push(item);
      }
    });
  }

  // 4. Fallback from curated style presets to reach target count
  for (const t of styleTemplates) {
    if (results.length >= count) break;
    if (!results.includes(t)) {
      results.push(t);
    }
  }

  // 5. If still need more, use backup pool
  const backupList = [
    "Living for the moments that feel like a movie.",
    "Collecting memories, not things.",
    "Some views are worth every mile.",
    "Life looks better from here.",
    "Just another day creating memories.",
    "Silent moves, loud results.",
    "Main character energy. No understudy needed.",
    "Peace over drama, growth over comfort.",
    "Proof that consistency beats luck every time.",
    "Trust the timing of your life.",
  ];

  for (const item of backupList) {
    if (results.length >= count) break;
    if (!results.includes(item)) {
      results.push(item);
    }
  }

  // Post-processing: Emojis and Hashtags if enabled
  return results.slice(0, count).map((caption) => {
    let finalCaption = caption;

    if (includeEmojis && preset.emojiSet.length > 0) {
      const emoji = preset.emojiSet[Math.floor(Math.random() * preset.emojiSet.length)];
      if (!finalCaption.includes(emoji)) {
        finalCaption = `${finalCaption} ${emoji}`;
      }
    }

    if (includeHashtags) {
      const tags = getRelevantHashtags(options);
      finalCaption = `${finalCaption}\n\n${tags}`;
    }

    return finalCaption;
  });
}

function getRelevantHashtags(options: GeneratorOptions): string {
  const { platform, style } = options;
  const platformTags: Record<PlatformType, string[]> = {
    instagram: ["#instadaily", "#explorepage", "#viralpost", "#photooftheday"],
    tiktok: ["#fyp", "#foryoupage", "#trending", "#viral"],
    youtube: ["#shorts", "#creator", "#youtubeshorts", "#trending"],
    facebook: ["#trending", "#viral", "#lifestyle"],
    linkedin: ["#leadership", "#growth", "#innovation", "#career"],
    x: ["#trending", "#mindset", "#thoughts"],
    threads: ["#threads", "#creators", "#dailyvibes"],
    pinterest: ["#aesthetic", "#moodboard", "#inspiration"],
    snapchat: ["#spotlight", "#streaks", "#snaps"],
    whatsapp: ["#status", "#quotes", "#vibes"],
  };

  const list = platformTags[platform] || platformTags.instagram;
  return list.slice(0, 3).join(" ");
}
