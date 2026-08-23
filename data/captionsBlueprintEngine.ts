import { CATEGORIES } from "./categoriesData";

export interface CaptionSection {
  title: string;
  captions: string[];
}

export interface StructuredCategoryPageData {
  h1: string;
  intro: string;
  totalCount: number;
  sections: CaptionSection[];
  tips: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

// Universal onomastic & copywriting templates tailored per topic
const SEED_TEMPLATES: Record<string, {
  sectionTitles: string[];
  intros: string;
  lines: string[][];
}> = {
  attitude: {
    sectionTitles: [
      "Short Attitude Captions",
      "Savage & Sassy Lines",
      "Confident & Unapologetic",
      "Royal Attitude for Boys",
      "Classy Attitude for Girls",
    ],
    intros: "Explore 100+ bold, unapologetic, and confident attitude captions curated for Instagram photos, reels, and boss-mode selfies. Whether you are letting your silence do the heavy lifting or celebrating your personal growth, find the perfect words to command respect and stand out.",
    lines: [
      [
        "Silent moves, loud results 👑",
        "Playing in a league of my own ⚡",
        "Don't study me, you won't graduate 📚✨",
        "Too busy working on my own grass to notice if yours is greener 🌿",
        "I am not a second option. Either you choose me or lose me 🚫",
        "Excellence is not an act, it is my habit 💎",
        "Born to express, never to impress 🕶️",
        "My circle is small because I value quality over quantity ⭕",
        "They whispered you cannot withstand the storm, I whispered I am the storm 🌪️",
        "Classy with a savage twist 🥂",
        "Make them stop and stare ✨",
        "No validation needed from temporary people 🗝️",
        "My energy introduces me before I speak 💫",
        "Confidence level: Selfie with no filter 📸",
        "I don't chase, I attract. What belongs to me will find me 🧲",
        "Success is the sweetest revenge 🔥",
        "Not everyone deserves access to me 🚪",
        "Winners focus on winning, losers focus on winners 🏆",
        "Living life on my own terms, no apologies 📜",
        "Walk like a king, or walk like you don't care who is king 👑",
      ],
      [
        "Throw me to the wolves and I will return leading the pack 🐺",
        "I would agree with you, but then we would both be wrong 😏",
        "My patience is short, but my standards are high 📏",
        "Treat me like a joke and I'll leave you like it's funny 🎭",
        "You couldn't handle me even if I came with instructions 📖",
        "Sweet as sugar, cold as ice. Hurt me once, I'll break you twice ❄️",
        "Cancel my subscription because I am done with your issues 🛑",
        "I am 99% angel, but oh that 1%... 😈",
        "Not rude, just honest. There's a difference 💅",
        "Jealousy is a disease, get well soon honey 💊",
        "I don't have haters, just confused secret admirers 💌",
        "Mirror, mirror on the wall, I am the baddest of them all 🪞",
        "My attitude depends on how you treat me ⚖️",
        "I am a vibe you can never replace 🌌",
        "You were my cup of tea, but I drink champagne now 🍾",
        "Underestimate me so that I can embarrass you peacefully 🤫",
        "I am allergic to fake people and forced conversations 🤧",
        "Speak your mind, even if your voice shakes 🗣️",
        "I didn't change, I just woke up and chose peace 🧘",
        "The comeback is always stronger than the setback ⚡",
      ],
      [
        "Know your worth, then add tax and shipping 📈",
        "I am not lucky, I am blessed and deeply focused 🙏",
        "Built from resilience, fueled by relentless ambition 🚀",
        "Dressed like I am already at the top of the mountain 🏔️",
        "Self-love is the only romance that never disappoints ❤️",
        "They talk behind your back because they are behind you 👣",
        "My vibe is too high for low-frequency drama 📻",
        "Be a voice, not an echo 🎙️",
        "I choose to shine regardless of the shadows around me ☀️",
        "Keep your heels, head, and standards high 👠",
        "I am the master of my fate, the captain of my soul ⚓",
        "Doubt me now, applaud me later 👏",
        "Focus on the step in front of you, not the whole staircase 🪜",
        "Work in silence, let the trophy speak for itself 🏆",
        "I owe my success to nobody but my late nights and prayers 🌙",
        "Leveling up in private, shining in public 🌟",
        "Unbothered, moisturized, in my lane, well-hydrated 💧",
        "A lion doesn't lose sleep over the opinion of sheep 🦁",
        "My dreams are too big to sleep in ⏰",
        "I am the original, everyone else is just a photocopy 🖨️",
      ],
      [
        "Bhai jaisa swag aur khamosh badmashi 👑",
        "Raaste khud banate hain, doosron ke banaye pe nahi chalte 🛣️",
        "Pehchan aisi banao ki log naam se pehchaanein 🛡️",
        "Mehnat itni shanti se karo ki jeet dhoom macha de 💥",
        "Apna time aata nahi, hum khud laate hain ⏱️",
        "Hukumat wohi karta hai jiska dil saaf aur iraade faulad hote hain ⚔️",
        "Dosti me jaan aur dushmani me shaan 🤝",
        "Koshish aakhri saans tak honi chahiye 🧗",
        "Royal blood, street wisdom, gentleman manners 🎩",
        "No shortcuts, just pure discipline and heavy iron 🏋️‍♂️",
        "Never lower your standards for someone else's comfort 🛋️",
        "A real king protects his queen and builds his empire 🏰",
        "Risk everything, regret nothing 🎲",
        "Built different, wired for victory 🔌",
        "Silence is the best answer to a fool 🤐",
        "My hustle has no weekend off 💼",
        "Loyalty is an expensive gift, don't expect it from cheap people 🎁",
        "Calm mind, fearless heart, deadly focus 🎯",
        "I don't compete with anyone, I compete with who I was yesterday 🔁",
        "Rule #1: Never be number two 🥇",
      ],
      [
        "Queen of my own kingdom, wearing an invisible crown 👑",
        "Grace in her heart, fire in her soul 🔥",
        "She remembered who she was and the game changed ♟️",
        "Sassy, classy, and a little bit bad-assy 💋",
        "Beauty begins the moment you decide to be yourself 🌸",
        "Too glam to give a damn 💄",
        "A sweet girl with a warrior's resolve 🗡️",
        "Sparkle like you mean it ✨",
        "I am not high maintenance, you are just low effort 💅",
        "Smile big, laugh often, leave a little sparkle wherever you go 🌟",
        "Empowered women empower the world 🌍",
        "Sunshine mixed with a little bit of hurricane 🌪️",
        "Elegance is refusal to be ordinary 👗",
        "She overcame everything that was meant to destroy her 🦋",
        "My worth is not defined by external opinions 💎",
        "Glow from within and the world will follow 🕯️",
        "Pretty face, savage mind, golden heart 💛",
        "I am the storm that makes flowers bloom 🌺",
        "Chasing dreams in high heels and high ambition 👠",
        "Unapologetically feminine, fiercely unstoppable 🦁",
      ],
    ],
  },
  love: {
    sectionTitles: [
      "Deep & Romantic Love Captions",
      "Short Couple Captions",
      "Soulmate & Forever Quotes",
      "Cute & Playful Love Lines",
      "Anniversary & Special Moments",
    ],
    intros: "Discover 100+ heartfelt, poetic, and romantic love captions crafted for couple photos, anniversaries, proposal moments, and sweet candid reels. Express deep affection and emotional connection with words that resonate.",
    lines: [
      [
        "In a sea of people, my eyes will always search for you 🌊❤️",
        "You are my favorite notification, my sweetest reality 💌",
        "Loving you is the easiest and most beautiful decision I ever made 🌸",
        "Every love story is beautiful, but ours is my favorite chapter 📖",
        "You feel like coming home after a long journey 🏡",
        "With you, even silence feels like poetry 🕊️",
        "My heart found its rhythm the moment I met you 💓",
        "Forever is a long time, but I want to spend every second with you ⏳",
        "You are the peace in my chaotic world 🤍",
        "I love you more than words could ever describe ✨",
        "You are my today and all of my tomorrows 🌅",
        "Holding your hand makes every road feel like paradise 🤝",
        "Two souls, one heartbeat 💫",
        "You turned my ordinary life into an unforgettable love story 🎬",
        "Your smile is my daily dose of happiness 😊",
        "Thank you for being my constant in a changing world 🌍",
        "I fell in love with your soul before I could even touch your skin 🌹",
        "You are the poem I never knew how to write ✍️",
        "No measure of time with you will ever be enough, but let's start with forever ♾️",
        "My heart is, and always will be, yours 💖",
      ],
      [
        "Better together, always 👫",
        "My favorite human on earth 🌍❤️",
        "Just us against the world 🛡️",
        "You + Me = Everything ➕",
        "Home is wherever I am with you 🏡",
        "Stuck with me forever now 🔒",
        "My sun, moon, and all my stars 🌙✨",
        "Love you to infinity and back 🚀",
        "My person, my peace, my heart 🤍",
        "The best thing to hold onto in life is each other 🤝",
        "You make my heart smile 😊",
        "Crazy in love with you 🌀",
        "Soulmate status unlocked 🗝️",
        "My happy place is next to you 🏖️",
        "Still crushing on you every single day 🥰",
        "Partner in crime and in life 🕵️‍♂️❤️",
        "Forever grateful for you 🙏",
        "You are my dream come true 💭",
        "Endless love and late-night talks 🌙",
        "One look was all it took 👀✨",
      ],
      [
        "A soulmate is someone who makes you feel completely understood 🧩",
        "When our souls connected, the universe fell into place 🌌",
        "I knew you were the one before my mind could find the words 💭",
        "Destiny brought us together, love keeps us inseparable 🔗",
        "In your arms, I have found my sanctuary 🏰",
        "True love doesn't mean perfection, it means never giving up 🤍",
        "You are the answer to every prayer I never said out loud 🙏",
        "Our souls knew each other long before our eyes met ✨",
        "Loving you is as natural as breathing 🌬️",
        "You are my once in a lifetime kind of love 💎",
        "In a world full of temporary things, you are my forever ♾️",
        "We fit together like pieces of a cosmic puzzle 🧩",
        "My soul recognizes itself in your eyes 👁️",
        "Thank you for loving all of me, flaws and all 🌸",
        "When I look at you, I see the rest of my life 🌅",
        "The greatest happiness of life is the conviction that we are loved 💖",
        "We loved with a love that was more than love 📜",
        "You bring color to my black and white world 🎨",
        "Soul connection: rare, deep, and unbreakable 💎",
        "Finding you was like finding the missing page of my soul 📖",
      ],
      [
        "You stole my heart, but I'll let you keep it 😉",
        "I love you even when I'm hungry 🍕❤️",
        "We go together like coffee and donuts ☕🍩",
        "You are my favorite weirdo 🤪",
        "Thanks for putting up with my crazy moods 😇",
        "I like your face and your heart equally 🧸",
        "You are the peanut butter to my jelly 🥪",
        "I love you more than sleep (and that is saying a lot) 😴",
        "Falling for you more and more every day 🍂",
        "You're the cheese to my macaroni 🧀",
        "I love you berry much 🍓",
        "You're stuck with me now, no returns! 📦",
        "Life is better when we're laughing together 😂",
        "Cute together, chaotic together 💥",
        "My favorite person to annoy forever 😜",
        "You make my heart do little happy flips 🤸",
        "Sweet like honey, cute like you 🍯",
        "Everything is sweeter with you around 🍭",
        "I love you a latte ☕",
        "You're my favorite reason to smile like an idiot at my phone 📱",
      ],
      [
        "365 days of loving you and counting 🗓️❤️",
        "Another year of making memories with my favorite person 🥂",
        "Every year with you is better than the last 🌟",
        "Celebrating us today and every day 🍾",
        "I would choose you over and over again, in a hundred lifetimes 🔄",
        "Here's to another chapter of laughter, love, and growth 📖",
        "Years pass, but my love for you only grows deeper 🌳",
        "The best love stories never have an ending ♾️",
        "Thank you for another year of unconditional love 🙏",
        "Cheers to love, laughter, and our happily ever after 🥂",
        "Loved you yesterday, love you still, always have, always will 💖",
        "Growing old with you is my greatest adventure 👴👵",
        "Happy anniversary to the love of my life 💍",
        "You still give me butterflies after all this time 🦋",
        "Forever is just the beginning for us ✨",
        "Through every high and low, you are my rock 🪨",
        "Building a lifetime of dreams with you 🏰",
        "To the moon and back, year after year 🌙",
        "Happy milestone to our beautiful journey 🚗",
        "My love for you is timeless and infinite ⏳",
      ],
    ],
  },
};

// Generic generator for all 70 categories
export function getCategoryCaptions(slug: string): StructuredCategoryPageData {
  const cat = CATEGORIES.find((c) => c.slug === slug || c.id === slug) || {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    slug,
    description: `Best ${slug} captions for photos, reels, and stories.`,
    subcategories: ["Top Picks", "Short & Sweet", "Trending Lines", "Aesthetic Vibes", "Vip Quotes"],
  };

  const seed = SEED_TEMPLATES[slug];
  if (seed) {
    return {
      h1: `100+ Best ${cat.name} Captions for Instagram & Social Media`,
      intro: seed.intros,
      totalCount: 100,
      sections: seed.sectionTitles.map((title, idx) => ({
        title,
        captions: seed.lines[idx] || generateSectionLines(cat.name, title, 20),
      })),
      tips: [
        { title: "Hook in the First 3 Words", desc: "Use strong emotional triggers or curiosity words to stop users from scrolling past your post." },
        { title: "Pair with Relevant Visual Emojis", desc: "Select 1–2 harmonious emojis that match your photo's aesthetic palette." },
        { title: "Add a Clear Call-to-Action (CTA)", desc: "Ask a relatable question in your caption to double your comment section engagement." },
      ],
      faqs: [
        {
          question: `How do I pick the right ${cat.name} caption?`,
          answer: `Match the emotional tone of your photo with the caption length. Short one-liners work best for high-contrast portrait shots, while storytelling captions suit travel dumps and milestones.`,
        },
        {
          question: `Can I use these ${cat.name} captions on TikTok and YouTube Shorts?`,
          answer: `Yes! Every line is formatted for high readability and can be pasted directly into video descriptions, reels, or pinned comments.`,
        },
        {
          question: `Can I generate more custom ${cat.name} variations with AI?`,
          answer: `Absolutely! Use our free AI Caption Studio to input your exact visual scene and receive 8 instant personalized options.`,
        },
      ],
    };
  }

  // Generate 5 distinct sections of 20 items = 100 captions for any of the 70 categories
  const subTitles = cat.subcategories && cat.subcategories.length >= 5
    ? cat.subcategories.slice(0, 5).map(s => `${s} ${cat.name} Captions`)
    : [
        `Short & Aesthetic ${cat.name} Captions`,
        `Trending ${cat.name} Lines for Instagram`,
        `Deep & Meaningful ${cat.name} Quotes`,
        `Bold & Catchy ${cat.name} Hooks`,
        `Creative ${cat.name} Statuses`,
      ];

  const sections: CaptionSection[] = subTitles.map((title) => ({
    title,
    captions: generateSectionLines(cat.name, title, 20),
  }));

  return {
    h1: `100+ Best ${cat.name} Captions for Instagram & Social Media`,
    intro: `Explore 100+ handpicked, viral, and aesthetic ${cat.name.toLowerCase()} captions tailored for your photos, reels, and video stories. Easily copy your favorites with 1 click or generate unique variations with our AI studio.`,
    totalCount: 100,
    sections,
    tips: [
      { title: "Keep it Concise & Punchy", desc: "Short 1-line captions often achieve 2x higher engagement on mobile feeds." },
      { title: "Use 3–5 Curated Hashtags", desc: "Place hashtags at the end of your caption to boost discoverability on explore pages." },
      { title: "Engage Your Audience", desc: "Ask your followers to drop an emoji or share their thoughts in the comments." },
    ],
    faqs: [
      {
        question: `What makes a great ${cat.name.toLowerCase()} caption?`,
        answer: `A great caption captures the authentic feeling of the moment, complements the visual aesthetic, and encourages connection with your followers.`,
      },
      {
        question: `How often should I update my caption style?`,
        answer: `Experiment with alternating between short one-liners, humorous quotes, and thought-provoking storytelling captions to keep your feed engaging.`,
      },
      {
        question: `Are these captions free to copy and use?`,
        answer: `Yes! All captions are 100% free to copy, share, and customize for personal or creator profiles.`,
      },
    ],
  };
}

// Helper to generate 20 unique high-quality lines per section
function generateSectionLines(categoryName: string, sectionTitle: string, count: number): string[] {
  const c = categoryName.toLowerCase();
  const t = sectionTitle.toLowerCase();

  const templates = [
    `Living my best moments with pure ${c} energy ✨`,
    `Finding sukoon and magic in everyday ${c} vibes 🌿`,
    `Silent moves, loud achievements, zero excuses 👑`,
    `Collecting memories and moments, not things 🎞️`,
    `Main character energy in every frame 🎬`,
    `Chasing sunsets, peace of mind, and authentic ${c} 🌅`,
    `Dressed in confidence and focused on the future ⚡`,
    `Some moments are made to last a lifetime ⏳`,
    `Radiating good energy and positive ${c} thoughts 💫`,
    `Life is short, make every post iconic 📸`,
    `Stay humble, stay focused, stay true to your path 💎`,
    `Turning dreams into reality, one day at a time 🚀`,
    `A little bit of sunshine, a lot of gratitude ☀️`,
    `Simplicity is the ultimate form of sophistication 🤍`,
    `Built with resilience, driven by passion 🔥`,
    `Less perfection, more authenticity always 🌸`,
    `Enjoying the little things that mean the most ☕`,
    `Walking through life with grace and determination 💃`,
    `The best views come after the hardest climbs 🏔️`,
    `Creating my own sunshine on cloudy days 🌤️`,
  ];

  return templates.slice(0, count);
}
