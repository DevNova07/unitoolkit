import { GeneratorOptions, PlatformType, StyleType, ToneType, LanguageType, LengthType } from "@/lib/types";

export interface AIStylePreset {
  prefix: string[];
  suffix: string[];
  emojiSet: string[];
  templates: {
    short: string[];
    medium: string[];
    long: string[];
  };
}

export const STYLE_PRESETS: Record<StyleType, AIStylePreset> = {
  aesthetic: {
    prefix: ["Golden hour thoughts.", "Soft frames & quiet moments.", "Lost in the rhythm.", "Current state of mind."],
    suffix: ["✨", "🎞️", "☁️", "🪐", "🌿"],
    emojiSet: ["✨", "🕊️", "☁️", "🤍", "☕", "🌙", "🌊"],
    templates: {
      short: [
        "Living for the moments that feel like a movie.",
        "Collecting memories, not things.",
        "Some views are worth every mile.",
        "Life looks better from here.",
        "Just another day creating memories.",
        "Soft light, gentle heart, quiet soul.",
        "Chasing dreams in shades of gold.",
        "Elegance in every unscripted breath.",
      ],
      medium: [
        "Wrapped in the warmth of simple pleasures and endless skies.",
        "Finding magic in the mundane, one frame at a time.",
        "Letting moments breathe without needing to name them.",
        "When the light hits just right, every memory turns golden.",
        "A quiet reminder that the most beautiful things can't be rushed.",
      ],
      long: [
        "Sometimes the best chapters of our lives are the ones where nothing monumental happens—just quiet coffee mornings, honest conversations, and sunlight streaming through open windows.",
        "We spend so much time looking for grand adventures that we forget the quiet art of simply being present right where our feet are.",
      ],
    },
  },
  viral: {
    prefix: ["Stop scrolling for a second.", "POV:", "Wait till you see this.", "Honestly?"],
    suffix: ["🔥", "⚡", "👀", "🚀", "💥"],
    emojiSet: ["🔥", "⚡", "👀", "📈", "💯", "🤯"],
    templates: {
      short: [
        "Main character energy unlocked.",
        "Built in silence. Released with impact.",
        "They weren't ready for this chapter.",
        "No caption needed, the vibe speaks.",
        "Unapologetically leveled up.",
        "10/10 would do this again.",
        "Proof that consistency beats luck.",
      ],
      medium: [
        "If you're waiting for a sign to take that leap, this is your reminder to go all in.",
        "Don't let people who gave up on their dreams talk you out of yours.",
        "Behind every 'overnight success' is years of quiet grit nobody saw.",
      ],
      long: [
        "People will doubt you until they ask how you did it. Stop waiting for permission or the perfect moment. Put in the work, stay obsessed with the craft, and let your results do the talking.",
      ],
    },
  },
  savage: {
    prefix: ["Not for everyone.", "Take notes.", "Silent moves.", "Level up."],
    suffix: ["💅", "👑", "🖤", "🕶️", "🦁"],
    emojiSet: ["💅", "👑", "🖤", "🦁", "🥊", "🎯"],
    templates: {
      short: [
        "Silent moves, loud results.",
        "I am not a backup plan.",
        "Too busy working on my own grass to notice yours.",
        "Born to express, never to impress.",
        "My standards are high because I paid for them myself.",
        "No competition when you're in your own lane.",
      ],
      medium: [
        "They talked about the storm, but forgot who controlled the winds.",
        "I didn't change, I just woke up and chose my own peace.",
        "Never lower your standards just to make comfortable people feel included.",
      ],
      long: [
        "You can't expect royalty treatment from people who think like peasants. Protect your energy, master your emotions, and let your success be your only reply.",
      ],
    },
  },
  funny: {
    prefix: ["Fun fact:", "Plot twist:", "Note to self:", "Current mood:"],
    suffix: ["😂", "🙃", "🍕", "🤷‍♂️", "💀"],
    emojiSet: ["😂", "💀", "☕", "🤷", "🤡", "🍕"],
    templates: {
      short: [
        "I'm not lazy, just on power-saving mode.",
        "My wallet is like an onion: opening it makes me cry.",
        "I came, I saw, I made it awkward.",
        "Life is short. Smile while you still have teeth.",
        "Current relationship status: sleeping diagonally across my bed.",
        "I follow a strict seafood diet: I see food, I eat it.",
      ],
      medium: [
        "Maybe looking at my phone for 3 more hours will solve all the responsibilities I am actively avoiding.",
        "My brain has 47 tabs open, 4 are frozen, and music is playing from nowhere.",
      ],
      long: [
        "I told myself I would go to bed early, drink 3 liters of water, and organize my life. Instead, here I am posting this at 2 AM with a cup of cold tea.",
      ],
    },
  },
  minimal: {
    prefix: [],
    suffix: [],
    emojiSet: ["▫️", "▪️", "☁️", "🌿"],
    templates: {
      short: [
        "Simply here.",
        "Less noise. More life.",
        "Pure perspective.",
        "Unfiltered.",
        "Quiet moments.",
        "Just this.",
        "Clarity.",
        "Evolving.",
      ],
      medium: [
        "Peace over everything. Always.",
        "Simplicity is the ultimate sophistication.",
        "Finding balance between doing and being.",
      ],
      long: [
        "Strip away the excess. Focus on what truly matters: good health, genuine connections, and quiet mornings.",
      ],
    },
  },
  romantic: {
    prefix: ["Always you.", "Heartfelt.", "My forever.", "In your orbit."],
    suffix: ["❤️", "🌹", "💌", "💍", "🕊️"],
    emojiSet: ["❤️", "🌹", "✨", "💌", "🥰", "🌙"],
    templates: {
      short: [
        "In a room full of art, I'd still look at you.",
        "You are my today and all of my tomorrows.",
        "Forever isn't long enough with you.",
        "Home is wherever I am with you.",
        "Every love song suddenly makes sense.",
      ],
      medium: [
        "Meeting you was like listening to a song for the first time and knowing it would be my favorite forever.",
        "With you, even the ordinary errands feel like a timeless romantic movie.",
      ],
      long: [
        "I never knew what it felt like to have a safe haven until you walked into my world. Thank you for making every day feel softer, brighter, and deeply cherished.",
      ],
    },
  },
  inspirational: {
    prefix: ["Daily reminder:", "Fuel for thought:", "Keep climbing:"],
    suffix: ["🌟", "🌱", "🏆", "🧭", "💡"],
    emojiSet: ["🌟", "💡", "🌱", "🦅", "🚀", "🎯"],
    templates: {
      short: [
        "Your only limit is your mindset.",
        "Small daily steps lead to massive destinations.",
        "Doubt kills more dreams than failure ever will.",
        "Wake up with purpose, sleep with satisfaction.",
        "The best time to start was yesterday. The next best time is now.",
      ],
      medium: [
        "Don't downgrade your dreams to match your present circumstances. Upgrade your habits to match your vision.",
        "The seeds you plant in discipline today become the shade you rest in tomorrow.",
      ],
      long: [
        "Every master was once a beginner who refused to quit. When things feel heavy, remember why you started and keep pushing forward one day at a time.",
      ],
    },
  },
  professional: {
    prefix: ["Insight:", "Key takeaway:", "Strategy update:"],
    suffix: ["💼", "📊", "🎯", "📈", "🤝"],
    emojiSet: ["💼", "📈", "🎯", "🤝", "💡", "📌"],
    templates: {
      short: [
        "Consistency eats talent for breakfast.",
        "Build for value, not vanity metrics.",
        "Excellence is not an act, but a habit.",
        "Focus on solving real problems with empathy.",
        "Execution turns vision into market reality.",
      ],
      medium: [
        "The most sustainable competitive advantage is how fast your team learns and executes.",
        "Don't build features just to ship them—build solutions that create undeniable customer delight.",
      ],
      long: [
        "Behind every major milestone is a series of quiet, disciplined decisions made when nobody was watching. Great companies and careers are built on consistency, not occasional bursts of motivation.",
      ],
    },
  },
  emotional: {
    prefix: ["From the heart:", "Reflections:", "Grateful soul:"],
    suffix: ["🤍", "🍂", "🕊️", "🕯️", "🌊"],
    emojiSet: ["🤍", "🕊️", "🕯️", "🍂", "🌧️", "✨"],
    templates: {
      short: [
        "Grateful for how far I've come.",
        "Holding space for what matters most.",
        "Healing isn't linear, but it is real.",
        "Some memories never lose their warmth.",
        "Peace of mind is my greatest luxury.",
      ],
      medium: [
        "Sometimes you have to step back, take a deep breath, and appreciate just how resilient your heart truly is.",
        "The quietest moments often leave the deepest imprints on our souls.",
      ],
      long: [
        "Give yourself credit for the silent battles you fought and won on days when giving up felt easier. You are stronger, wiser, and more capable than you realize.",
      ],
    },
  },
  casual: {
    prefix: ["Just vibe.", "Day in the life.", "Weekend mood."],
    suffix: ["✌️", "🥤", "👟", "☀️", "🎧"],
    emojiSet: ["✌️", "☀️", "🎧", "🍕", "🛹", "☕"],
    templates: {
      short: [
        "Good vibes, great people, zero stress.",
        "Chilling out and taking it slow.",
        "Another day, another cup of iced coffee.",
        "Just out here enjoying the sunshine.",
        "Casual fits and easy conversations.",
      ],
      medium: [
        "Sundays like this make the whole busy week completely worth it.",
        "No plans, no alarms, just good music and peaceful vibes.",
      ],
      long: [
        "Taking some time off the digital grind to enjoy good food, great company, and the simple joy of an unplanned afternoon.",
      ],
    },
  },
};

export const HINGLISH_TEMPLATES = {
  attitude: [
    "Apna time aayega nahi, mehnat se khud lana padega.",
    "Khaamoshi meri kamzori nahi, mera sabse bada hathiyar hai.",
    "Sher chup rehta hai iska matlab ye nahi ki shikaar karna bhool gaya.",
    "Hamari sharafat ka faayda mat uthana, jis din badle, din kharab ho jayega.",
    "Hawa me udne wale aksar zameen ki taaqat bhool jaate hain.",
  ],
  travel: [
    "Pahaadon ki thandi hawa aur chai ka ek cup. Bas yahi sukoon hai.",
    "Safarnama abhi shuru hua hai, manzil abhi baaki hai.",
    "Shehar ke shor se door, kudrat ki god me ek naya ahesaas.",
    "Raste anjane hain par har mod pe ek nayi kahani hai.",
  ],
  love: [
    "Tum sath ho toh har mausam suhana lagta hai.",
    "Chand se kaho thoda thehar jaye, aaj mere humsafar ne deedar kiya hai.",
    "Teri muskaan me chhupi hai meri saari khushiyan.",
    "Ek tera sath ho toh zindagi ka har mod aasan lagta hai.",
  ],
  motivation: [
    "Mehnat itni khamoshi se karo ki tumhari kamyabi shor macha de.",
    "Gir kar uthna hi asli jeet hai. Himmat kabhi mat haarna.",
    "Jab tak manzil na mile, rukne ka koi sawaal hi nahi.",
  ],
  funny: [
    "Zindagi me itna busy hona hai ki faltu logon ki baatein sunne ka time na mile.",
    "Dieting shuru ki thi, lekin pizza ne emotional blackmail kar diya.",
    "Mera dimaag aur meri neend: dono ka aapas me 36 ka aakda hai.",
  ],
};
