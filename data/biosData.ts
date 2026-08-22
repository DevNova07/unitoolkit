export interface BioItem {
  id: string;
  category: string;
  text: string;
  tags: string[];
  likes: number;
}

export interface BioCategorySection {
  id: string;
  slug: string;
  title: string;
  badge: string;
  count: string;
  intro: string;
  items: BioItem[];
}

export const BIOS_DATA: BioItem[] = [
  // Attitude & Swag
  {
    id: "bio-att-1",
    category: "attitude",
    text: `👑 King in my own realm\n⚡ Silent moves • Loud success\n🕶️ Rule breaker & Game changer\n📍 Mumbai | Founder 🚀\n🔥 Follow or regret later`,
    tags: ["Attitude", "Royal", "Swag"],
    likes: 45200,
  },
  {
    id: "bio-att-2",
    category: "attitude",
    text: `🦁 Born to rule, not to fit in\n💣 Zero competition • Only progress\n♟️ Playing the long game\n🚫 No drama, just hustle`,
    tags: ["Alpha", "Attitude", "Boss"],
    likes: 41800,
  },
  {
    id: "bio-att-3",
    category: "attitude",
    text: `🖤 Unapologetically myself\n📈 Chasing vision, not validation\n💎 Self-made • Relentless focus\n✉️ DMs for business only`,
    tags: ["Attitude", "SelfMade"],
    likes: 38900,
  },
  {
    id: "bio-att-4",
    category: "attitude",
    text: `★》VIP Account 🎖️\n★》Royal Blood 👑\n★》Gym Freak 💪\n★》Single & Focused 🎯\n★》Checkmate is coming ♟️`,
    tags: ["VIP", "Attitude"],
    likes: 49100,
  },

  // Aesthetic & Soft
  {
    id: "bio-aes-1",
    category: "aesthetic",
    text: `🌸 Soft heart • Fierce mind\n✨ Living in my main character era\n🎨 Coffee, sunsets & poetry\n🌙 Manifesting pure magic\n💌 PR/Collabs: DM`,
    tags: ["Aesthetic", "Soft Girl", "Queen"],
    likes: 46700,
  },
  {
    id: "bio-aes-2",
    category: "aesthetic",
    text: `🌿 Slow living & warm lattes\n📷 Film archives & uncurated life\n🕊️ Protecting my peace\n🤍 90s soul with modern goals`,
    tags: ["Minimalist", "Cozy", "Vibes"],
    likes: 42300,
  },
  {
    id: "bio-aes-3",
    category: "aesthetic",
    text: `🕊️ Whispers of daylight\n🎞️ Capturing moments in 35mm\n☕ Matcha lattes & vintage books\n☁️ Existing softly`,
    tags: ["Aesthetic", "Vintage"],
    likes: 39500,
  },

  // Boys
  {
    id: "bio-boy-1",
    category: "boys",
    text: `🔱 Mahakal Ke Bhakt 🔱\n👔 Dapper Gentleman\n🚀 Building my empire in silence\n🎯 Wish me on 18th Oct 🎂`,
    tags: ["Boys", "Desi Swag", "Royal"],
    likes: 47800,
  },
  {
    id: "bio-boy-2",
    category: "boys",
    text: `👑 Official Account 👑\n💎 Classy & Savage\n🏎️ Horsepower & Late Night Drives\n❌ Trust Nobody ❌`,
    tags: ["Boys", "Savage", "Alpha"],
    likes: 43600,
  },
  {
    id: "bio-boy-3",
    category: "boys",
    text: `🏋️ Gym addict | PR: 180kg\n💼 Code by day • Code by night\n🎧 Lo-fi beats on loop\n🔥 Driven by purpose`,
    tags: ["Boys", "Fitness", "Tech"],
    likes: 38200,
  },

  // Girls
  {
    id: "bio-girl-1",
    category: "girls",
    text: `👑 Queen with her own crown\n💅 Too glam to give a damn\n🥻 Saree lover • Chai enthusiast\n✨ Creating sunshine on rainy days`,
    tags: ["Girls", "Desi Glam", "Queen"],
    likes: 48900,
  },
  {
    id: "bio-girl-2",
    category: "girls",
    text: `💄 Lipgloss & Big Dreams\n✈️ Passport always stamped\n🎀 Living life in pastel pink\n🌸 Unstoppable & blessed`,
    tags: ["Girls", "Fashion", "Travel"],
    likes: 44100,
  },
  {
    id: "bio-girl-3",
    category: "girls",
    text: `🦋 Beautiful chaos\n☕ Espresso over everything\n📚 Medical Student 🩺\n✨ Radiating high frequencies`,
    tags: ["Girls", "Student", "Aesthetic"],
    likes: 41200,
  },

  // VIP & Symbols
  {
    id: "bio-vip-1",
    category: "vip",
    text: `◢ 👑 Royal Entry 👑 ◣\n◢ 🎯 Billionaire Mindset ◣\n◢ 🏎️ Fast Lane Living ◣\n◢ ⚡ Unapologetic Standards ◣`,
    tags: ["VIP Borders", "Luxury"],
    likes: 52100,
  },
  {
    id: "bio-vip-2",
    category: "vip",
    text: `★━━━━━━━━★\n👑 The Untamed King 👑\n⚡ In a league of my own\n🏆 Winner by default\n★━━━━━━━━★`,
    tags: ["VIP Style", "Borders"],
    likes: 49800,
  },

  // Minimal
  {
    id: "bio-min-1",
    category: "minimal",
    text: `creating my own light.\nvisual diary & thoughts.\nbased in new delhi.`,
    tags: ["Minimal", "Clean"],
    likes: 36500,
  },
  {
    id: "bio-min-2",
    category: "minimal",
    text: `less noise, more focus.\narchitect of my own destiny.\n🕊️`,
    tags: ["Minimal", "Deep"],
    likes: 38700,
  },

  // Gym & Fitness
  {
    id: "bio-gym-1",
    category: "gym",
    text: `🏋️ Dedicated to the iron\n🥗 Nutrition • Recovery • PRs\n💪 In the gym building my future self\n🔥 No excuses • Daily grind`,
    tags: ["Gym", "Fitness", "Beast"],
    likes: 46200,
  },
  {
    id: "bio-gym-2",
    category: "fitness",
    text: `⚡ Certified Fitness Coach\n🏆 500+ Transformations\n📈 High performance lifestyle\n👇 Free workout splits:`,
    tags: ["Coach", "Transformation"],
    likes: 43100,
  },

  // Business & Creator
  {
    id: "bio-biz-1",
    category: "business",
    text: `🚀 Helping creators scale to $10K/mo\n📈 500K+ community across socials\n🎙️ Host of The Creator Growth Show\n👇 Free viral hook templates:`,
    tags: ["Business", "Growth", "Coach"],
    likes: 47900,
  },
  {
    id: "bio-biz-2",
    category: "business",
    text: `✨ Visual Storyteller & Filmmaker\n🎬 4K Cinematic Reels & Travels\n📩 Work: hello@creative.studio\n📍 Worldwide nomad ✈️`,
    tags: ["Creator", "Filmmaker"],
    likes: 44800,
  },

  // Funny
  {
    id: "bio-fun-1",
    category: "funny",
    text: `🍕 Currently holding it all together with one bobby pin\n😴 Professional overthinker & napper\n☕ Fueled by iced coffee and sarcasm\n📉 Zero days without a minor inconvenience`,
    tags: ["Funny", "Relatable", "Sarcasm"],
    likes: 45600,
  },
  {
    id: "bio-fun-2",
    category: "funny",
    text: `🤷‍♂️ Born at a very young age\n🥑 I put the 'pro' in procrastinate\n🔋 Battery percentage is my mood\n🤫 Following back if you bring snacks`,
    tags: ["Humor", "Relatable"],
    likes: 42900,
  },

  // Travel
  {
    id: "bio-trv-1",
    category: "travel",
    text: `✈️ 24 countries & counting\n🏔️ Mountains are calling • I must go\n📸 Catching sunrises around the globe\n🎒 Wandering where Wi-Fi is weak`,
    tags: ["Travel", "Wanderlust", "Nomad"],
    likes: 46300,
  },

  // Love
  {
    id: "bio-lov-1",
    category: "love",
    text: `💍 Taken by my best friend\n❤️ Writing our forever chapter\n🌸 You are my favorite hello\n🏡 Building our dream life together`,
    tags: ["Love", "Couple", "Relationship"],
    likes: 44500,
  },

  // Sad
  {
    id: "bio-sad-1",
    category: "sad",
    text: `🥀 Healing in silence\n🌧️ Heavy heart with kind words\n🕊️ Letting go of what wasn't meant\n🖤 Music saves what words destroy`,
    tags: ["Sad", "Healing", "Deep"],
    likes: 39800,
  },
];
