export interface WhatsAppStatusItem {
  id: string;
  text: string;
  category: string;
  language?: "en" | "hinglish" | "hi";
  likes: number;
}

export interface WhatsAppStatusSection {
  id: string;
  title: string;
  badge: string;
  count: string;
  intro: string;
  statuses: WhatsAppStatusItem[];
}

export const WHATSAPP_STATUS_SECTIONS: WhatsAppStatusSection[] = [
  {
    id: "cool-status",
    title: "Cool WhatsApp Status Quotes",
    badge: "Trending & Fresh",
    count: "25+ Quotes",
    intro:
      "Do you want to look cool among your WhatsApp friends and family members? Create cool WhatsApp status quotes that resonate with your current state of mind. Also, it is a creative way to express your mood, personality, and thoughts. Therefore, underneath are some cool quotes that you can share on WhatsApp status to show yourself cool:",
    statuses: [
      { id: "c-1", text: "Strive for big dreams, maintain focus, and succeed through quiet hard work. 🚀✨", category: "cool", likes: 24500 },
      { id: "c-2", text: "Embrace life’s brevity; smile now before your teeth retire. 😄✌️", category: "cool", likes: 19800 },
      { id: "c-3", text: "Originality is key; everyone else is already taken. 🕶️", category: "cool", likes: 27100 },
      { id: "c-4", text: "Stars only shine in the absence of darkness. 🌌💫", category: "cool", likes: 22400 },
      { id: "c-5", text: "Engage in activities that make you forget to glance at your phone. 🌿☕", category: "cool", likes: 18900 },
      { id: "c-6", text: "Kindness is a priceless gift; spread it generously. 🤍🌸", category: "cool", likes: 21300 },
      { id: "c-7", text: "Life is an unavoidable journey, regardless of the road’s challenges. 🛣️", category: "cool", likes: 17600 },
      { id: "c-8", text: "Amid choices, choose kindness in a world of endless possibilities. ✨", category: "cool", likes: 19500 },
      { id: "c-9", text: "Maintain optimism, exert effort, and manifest your highest aspirations. 🌟", category: "cool", likes: 23100 },
      { id: "c-10", text: "Each sunrise presents a brand new chance for a powerful beginning. 🌅", category: "cool", likes: 20400 },
      { id: "c-11", text: "Be a distinctive voice, not a mere repetition. 🎙️🔥", category: "cool", likes: 25800 },
      { id: "c-12", text: "Life unfolds in unplanned moments amidst our busy other intentions. 🕊️", category: "cool", likes: 16900 },
      { id: "c-13", text: "Focus on making moments count, not on counting them. ⏳💛", category: "cool", likes: 18400 },
      { id: "c-14", text: "Persist until detractors inquire about your opportunities. 📈💼", category: "cool", likes: 26200 },
      { id: "c-15", text: "Shape your destiny by actively creating the future you envision. 🔮✨", category: "cool", likes: 21700 },
      { id: "c-16", text: "I’m not a player, I’m the game. 👑🕶️", category: "cool", likes: 31200 },
      { id: "c-17", text: "Life is what happens when you’re busy making other plans. 🗺️", category: "cool", likes: 19100 },
    ],
  },
  {
    id: "attitude-status",
    title: "Attitude & Royal Swag WhatsApp Status",
    badge: "High Swag",
    count: "40+ Quotes",
    intro:
      "Looking to make a powerful statement? These high-attitude, bold, and royal swag quotes are crafted to establish your presence and command respect on your WhatsApp status without saying a single word.",
    statuses: [
      { id: "att-1", text: "Hum wahan nahi khade hote jahan shor ho, hum wahan khade hote hain jahan khamoshi cha jaye. 👑🔥", category: "attitude", language: "hinglish", likes: 38900 },
      { id: "att-2", text: "Silence is my response to fools; my success will be the explanation. ⚡🕶️", category: "attitude", likes: 34200 },
      { id: "att-3", text: "Meri personality ko samajhna sabke bas ki baat nahi, aukaat lagti hai. 🦁", category: "attitude", language: "hinglish", likes: 36700 },
      { id: "att-4", text: "I am who I am, your approval is neither required nor desired. 💅👑", category: "attitude", likes: 29800 },
      { id: "att-5", text: "Apna time aayega nahi, apna time hum khud layenge. 🚀🔥", category: "attitude", language: "hinglish", likes: 41200 },
      { id: "att-6", text: "They talk behind my back because they are strictly behind me. 🚶‍♂️💨", category: "attitude", likes: 28400 },
      { id: "att-7", text: "Rule number 1: Never be number 2. 🥇", category: "attitude", likes: 32100 },
      { id: "att-8", text: "Sher khud shikaar karta hai, bheed ka hissa nahi banta. 👑", category: "attitude", language: "hinglish", likes: 37500 },
      { id: "att-9", text: "Confidence is quiet. Insecurities are loud. 🛡️✨", category: "attitude", likes: 26900 },
      { id: "att-10", text: "Born to express, definitely not to impress you. 💯", category: "attitude", likes: 29500 },
      { id: "att-11", text: "Kamyabi itni khamoshi se paao ki tumhari gaadi ki aawaz hi kafi ho. 🏎️💼", category: "attitude", language: "hinglish", likes: 42100 },
      { id: "att-12", text: "I don't hold grudges, I simply disconnect and elevate. 🕊️⚡", category: "attitude", likes: 35800 },
      { id: "att-13", text: "Badshah banne ka shauk nahi, bas kisi ka ghulam nahi banna. 👑👊", category: "attitude", language: "hinglish", likes: 45600 },
    ],
  },
  {
    id: "love-romantic",
    title: "Love & Romantic WhatsApp Status",
    badge: "Heartfelt Love",
    count: "35+ Quotes",
    intro:
      "Express your love, romantic feelings, and heartfelt affection for your partner or crush. Share these sweet, emotional, and timeless WhatsApp status lines to make their day unforgettable.",
    statuses: [
      { id: "lov-1", text: "Tum meri wo khushi ho jo har kisi ko naseeb nahi hoti. ❤️✨", category: "love", language: "hinglish", likes: 39400 },
      { id: "lov-2", text: "In a world full of temporary trends, you are my permanent classic. 🌹🤍", category: "love", likes: 35100 },
      { id: "lov-3", text: "Tere sath guzaara har ek pal sukoon ban jata hai. 🕊️💑", category: "love", language: "hinglish", likes: 37800 },
      { id: "lov-4", text: "My favorite place in the whole wide universe is wrapped right in your arms. 🤍", category: "love", likes: 31200 },
      { id: "lov-5", text: "Dil to pehle bhi tha mere paas, lekin dhadakna tumse milkar seekha. 💖", category: "love", language: "hinglish", likes: 36400 },
      { id: "lov-6", text: "Every love story is beautiful, but ours is my absolute favorite chapter. 📖🥂", category: "love", likes: 28900 },
      { id: "lov-7", text: "Chehre par muskurahat ki wajah jab tum bante ho, to din ban jata hai. 🌸", category: "love", language: "hinglish", likes: 33200 },
      { id: "lov-8", text: "You are the sweetest notification my heart ever received. 📲❤️", category: "love", likes: 29700 },
      { id: "lov-9", text: "Mohabbat me jhukna koi ajeeb baat nahi, chamakta sooraj bhi dhal jata hai chaand ke liye. 🌙🌹", category: "love", language: "hinglish", likes: 41500 },
      { id: "lov-10", text: "You are my today and all of my tomorrows. Forever yours. 💍✨", category: "love", likes: 38200 },
      { id: "lov-11", text: "Bas ek tera sath chahiye, baki poori duniya se lad lenge. 🤍👫", category: "love", language: "hinglish", likes: 44300 },
    ],
  },
  {
    id: "sad-heartbreak",
    title: "Sad & Heartbreak WhatsApp Status",
    badge: "Deep Feelings",
    count: "30+ Quotes",
    intro:
      "When the heart feels heavy and words fail, quiet status quotes help express unsaid pain, late-night thoughts, and the healing journey. Here are deep, emotional status lines for when you are feeling low.",
    statuses: [
      { id: "sad-1", text: "Khamoshi behtar hai, lafz to aksar log bhool jate hain. 🖤🌧️", category: "sad", language: "hinglish", likes: 34100 },
      { id: "sad-2", text: "Silence is the heaviest sound when the heart is full of unsaid words. 🥀", category: "sad", likes: 28900 },
      { id: "sad-3", text: "Sab kuch theek hone ka intezar karte karte, khud ko badalna seekh liya. 🕊️", category: "sad", language: "hinglish", likes: 31500 },
      { id: "sad-4", text: "Some people stay in your heart, but not in your life. 💔", category: "sad", likes: 27800 },
      { id: "sad-5", text: "Waqt sab theek kar deta hai, bas khud par bharosa rakho. 🌧️✨", category: "sad", language: "hinglish", likes: 32600 },
      { id: "sad-6", text: "Behind every fake smile is a heart that fought thousands of silent battles. 🤍", category: "sad", likes: 26400 },
      { id: "sad-7", text: "Log kehte hain waqt ke sath dard kam ho jata hai, par sach yeh hai ki aadat pad jati hai. 🥀🖤", category: "sad", language: "hinglish", likes: 39100 },
      { id: "sad-8", text: "Crying alone at 2 AM teaches you the true meaning of inner strength. 🌧️🕊️", category: "sad", likes: 36700 },
    ],
  },
  {
    id: "funny-relatable",
    title: "Funny & Relatable WhatsApp Status Quotes",
    badge: "Pure Humor",
    count: "30+ Quotes",
    intro:
      "Add humor to your friends' daily scrolls! These witty, relatable, and funny WhatsApp status quotes are guaranteed to trigger laughs, replies, and emojis in your chat box.",
    statuses: [
      { id: "fun-1", text: "Diet plan day 1: I followed my heart and it led me straight to the fridge. 🍕🤤", category: "funny", likes: 35600 },
      { id: "fun-2", text: "My bed and I have a special relationship: we are totally perfect for each other. 🛌😴", category: "funny", likes: 31200 },
      { id: "fun-3", text: "I'm not lazy, I'm just on energy-saving mode. 🔋⚡", category: "funny", likes: 29800 },
      { id: "fun-4", text: "Zindagi me itna busy hona hai ki 'online' hone ka time na mile. 📱😂", category: "funny", language: "hinglish", likes: 34500 },
      { id: "fun-5", text: "Running away from my responsibilities counts as cardio, right? 🏃‍♂️💨", category: "funny", likes: 27900 },
      { id: "fun-6", text: "Common sense is like deodorant: those who need it most never use it. 🤦‍♂️", category: "funny", likes: 32100 },
      { id: "fun-7", text: "My wallet is like an onion: opening it makes me cry. 💸🧅", category: "funny", likes: 38200 },
      { id: "fun-8", text: "I told myself I should stop drinking coffee, but I am not a quitter. ☕😂", category: "funny", likes: 33900 },
    ],
  },
  {
    id: "motivational-hustle",
    title: "Motivational & Hustle Mindset Status",
    badge: "Success Mindset",
    count: "25+ Quotes",
    intro:
      "Fuel your day and inspire your network with high-energy motivational WhatsApp status quotes. Perfect for entrepreneurs, students, athletes, and anyone building their legacy.",
    statuses: [
      { id: "mot-1", text: "Work in silence, let your success make the deafening noise. 🚀📈", category: "motivational", likes: 38200 },
      { id: "mot-2", text: "Discipline will take you places where motivation simply cannot. ⚡🛡️", category: "motivational", likes: 34900 },
      { id: "mot-3", text: "Kismat badalni hai to mehnat ko aadat banana padega. 🔥💼", category: "motivational", language: "hinglish", likes: 37100 },
      { id: "mot-4", text: "Don't stop when you are tired; stop when you are proudly done. 🏆", category: "motivational", likes: 31800 },
      { id: "mot-5", text: "Small daily improvements over time lead to stunning results. 🌿✨", category: "motivational", likes: 28400 },
      { id: "mot-6", text: "Your only limit is the mindset you choose to accept. Break the boundaries. 💥", category: "motivational", likes: 33500 },
    ],
  },
  {
    id: "good-morning-energy",
    title: "Good Morning Positive Vibes Status",
    badge: "Daily Sunrise",
    count: "20+ Quotes",
    intro:
      "Start the day by spreading sunshine, warm prayers, and positive morning vibes to all your family, colleagues, and friends on WhatsApp.",
    statuses: [
      { id: "gm-1", text: "Subah ki taazi hawa aur nayi umeed: Aaj ka din behtareen banayein! ☕🌅", category: "morning", language: "hinglish", likes: 36400 },
      { id: "gm-2", text: "Rise and shine! Today is another beautiful canvas waiting for your bright colors. ✨🌿", category: "morning", likes: 31900 },
      { id: "gm-3", text: "Good morning! May your coffee be strong and your day be productive. ☕💪", category: "morning", likes: 29500 },
      { id: "gm-4", text: "Har nayi subah ek nayi shuruwat ka mauka deti hai. Muskuraiye! 😊💛", category: "morning", language: "hinglish", likes: 34200 },
      { id: "gm-5", text: "Count your blessings, breathe deeply, and step boldly into today. 🌅🕊️", category: "morning", likes: 27800 },
    ],
  },
  {
    id: "good-night-peace",
    title: "Good Night & Sukoon Status",
    badge: "Night Calm",
    count: "15+ Quotes",
    intro:
      "End the day peacefully with cozy, relaxing, and soothing Good Night WhatsApp status messages that bring calmness to your mind before sleeping.",
    statuses: [
      { id: "gn-1", text: "Stars cannot shine without darkness. Rest well and recharge tonight. 🌌🌙", category: "night", likes: 31200 },
      { id: "gn-2", text: "Din bhar ki thakan ko bhoolkar, sukoon bhari neend lijiye. Shubh Ratri! 🌙🕊️", category: "night", language: "hinglish", likes: 34800 },
      { id: "gn-3", text: "Leave your worries in the hands of the universe and sleep peacefully. ✨😴", category: "night", likes: 28900 },
      { id: "gn-4", text: "Tomorrow is another opportunity. Rest your mind tonight. 🛌💫", category: "night", likes: 26500 },
    ],
  },
  {
    id: "islamic-duas",
    title: "Islamic, Duas & Jummah Mubarak Status",
    badge: "Spiritual Blessings",
    count: "25+ Quotes",
    intro:
      "Share spiritual reminders, heartfelt Quranic quotes, daily gratitude, and Jummah Mubarak greetings with your family and loved ones on WhatsApp status.",
    statuses: [
      { id: "isl-1", text: "Alhamdulillah for everything. Sabr and Shukr in every heartbeat. 🌙🤲", category: "islamic", likes: 44200 },
      { id: "isl-2", text: "Jab Allah sath ho to koi mushkil badi nahi hoti. Beshak! 🤍🕌", category: "islamic", language: "hinglish", likes: 41800 },
      { id: "isl-3", text: "Never lose hope in the mercy of Allah; He knows what your heart conceals. 📖✨", category: "islamic", likes: 37900 },
      { id: "isl-4", text: "Jummah Mubarak! May this blessed day bring peace, health, and barakah to all. 🥻🤲", category: "islamic", likes: 39500 },
      { id: "isl-5", text: "Dua can change destiny. Keep praying, keep believing. 🤲🕊️", category: "islamic", likes: 35400 },
      { id: "isl-6", text: "Sukoon sirf Allah ke zikr me hai. SubhanAllah. 🌙🤍", category: "islamic", language: "hinglish", likes: 38100 },
    ],
  },
  {
    id: "friendship-yaari",
    title: "Friendship & Dosti Yaari Status",
    badge: "Squad Bonds",
    count: "20+ Quotes",
    intro:
      "Celebrate your permanent partner-in-crime and true friends! These heartfelt friendship status quotes capture the bond of true yaari and brotherhood.",
    statuses: [
      { id: "frn-1", text: "Bhai jaisa yaar ho to poori duniya se lad sakte hain. 🤝🔥", category: "friendship", language: "hinglish", likes: 39800 },
      { id: "frn-2", text: "True friends don't judge each other, they judge everyone else together. 😂🥂", category: "friendship", likes: 33400 },
      { id: "frn-3", text: "Dosti wo nahi jo jaan deti hai, dosti wo hai jo hasi deti hai. 🌸🤜🤛", category: "friendship", language: "hinglish", likes: 36200 },
      { id: "frn-4", text: "A sweet friendship refreshes the soul. Grateful for my crew. 🤍✨", category: "friendship", likes: 28900 },
      { id: "frn-5", text: "Through thick and thin, coffee spills and big wins: Forever my squad. ☕🏆", category: "friendship", likes: 31200 },
    ],
  },
  {
    id: "birthday-wishes",
    title: "Birthday Celebration & Self-Birthday Status",
    badge: "Celebration",
    count: "20+ Quotes",
    intro:
      "Whether it is your own birthday or you are wishing your best friend, mother, father, or partner, these birthday WhatsApp status lines capture the celebration perfectly.",
    statuses: [
      { id: "bdy-1", text: "Leveling up today! Cheers to page 1 of my new personal year. 🎂🥂✨", category: "birthday", likes: 38400 },
      { id: "bdy-2", text: "Another year older, wiser, and deeply grateful for all life's blessings. 🎉👑", category: "birthday", likes: 34100 },
      { id: "bdy-3", text: "Happy Birthday to my favorite human on the planet! Keep shining. 💖🎈", category: "birthday", likes: 31900 },
      { id: "bdy-4", text: "Eating cake for breakfast because it's officially my birthday! 🍰🥳", category: "birthday", likes: 28700 },
    ],
  },
  {
    id: "life-karma",
    title: "Deep Life & Karma Wisdom Status",
    badge: "Deep Thoughts",
    count: "20+ Quotes",
    intro:
      "Thoughtful and mature reflections about karma, destiny, resilience, and emotional intelligence for your WhatsApp status updates.",
    statuses: [
      { id: "lif-1", text: "Karma never loses an address. Do good and it will find its way back. 🌿🕊️", category: "life", likes: 36800 },
      { id: "lif-2", text: "Life is 10% what happens to you and 90% how you choose to respond. 🛡️✨", category: "life", likes: 32400 },
      { id: "lif-3", text: "Zindagi me agar sukoon chahiye to logon ki baaton ko dil pe lena chhod do. 🕊️", category: "life", language: "hinglish", likes: 38900 },
      { id: "lif-4", text: "Maturity is learning to walk away from people and situations that threaten your peace. 🌸", category: "life", likes: 31500 },
    ],
  },
  {
    id: "breakup-moving-on",
    title: "Breakup, Healing & Moving On Status",
    badge: "Self Growth",
    count: "15+ Quotes",
    intro:
      "Quotes to help you heal, find strength, and step into your unapologetic self-worth era after a breakup or disappointment.",
    statuses: [
      { id: "brk-1", text: "Some endings are just necessary for your best chapter to begin. 🤍🕊️", category: "breakup", likes: 33800 },
      { id: "brk-2", text: "Choosing my own self-respect and peace over toxic drama, always. 🛡️👑", category: "breakup", likes: 36200 },
      { id: "brk-3", text: "Glow up season activated: Thank you for the painful lesson. 💅✨", category: "breakup", likes: 31900 },
      { id: "brk-4", text: "Healing takes time, but one day you will look back and smile at your strength. 🌸", category: "breakup", likes: 29400 },
    ],
  },
];

// --- 1. WhatsApp About / Profile Bio Quotes (139 Chars Limit) ---
export interface WhatsAppAboutBio {
  id: string;
  category: "attitude" | "aesthetic" | "vip" | "minimal" | "islamic";
  text: string;
  badge: string;
}

export const WHATSAPP_ABOUT_BIOS: WhatsAppAboutBio[] = [
  { id: "ab-1", category: "vip", text: "★》King of my own world 👑《★", badge: "VIP Royal" },
  { id: "ab-2", category: "attitude", text: "Silent moves, loud success. Don't judge my chapter 🕶️⚡", badge: "Attitude" },
  { id: "ab-3", category: "aesthetic", text: "Creating my own sunshine in a world of storms 🌸✨", badge: "Aesthetic" },
  { id: "ab-4", category: "minimal", text: "Living quietly. Loving deeply. Evolving daily 🕊️", badge: "Minimal" },
  { id: "ab-5", category: "islamic", text: "Alhamdulillah for every blessing seen and unseen 🌙🤲", badge: "Islamic" },
  { id: "ab-6", category: "vip", text: "♚ VIP Account ♚ | Focused on my goals, not gossip 🚀", badge: "VIP Pro" },
  { id: "ab-7", category: "attitude", text: "I don't compete with anyone; I am my only rival 🔥", badge: "Confidence" },
  { id: "ab-8", category: "aesthetic", text: "Soft heart, strong mind, unstoppable soul 🤍🌿", badge: "Soft Aesthetic" },
  { id: "ab-9", category: "minimal", text: "Unbothered. Moisturized. In my lane. Happy 💅", badge: "Gen Z" },
  { id: "ab-10", category: "islamic", text: "Hasbunallahu wa ni'mal wakeel 🤍📖", badge: "Dua" },
  { id: "ab-11", category: "attitude", text: "Apna time aayega nahi, apna time hum layenge 🦁👑", badge: "Desi Swag" },
  { id: "ab-12", category: "aesthetic", text: "Coffee in hand, big dreams in mind ☕🌅", badge: "Cafe Vibe" },
];

// --- 4. One-Word Minimal Statuses ---
export interface OneWordStatus {
  word: string;
  emoji: string;
  meaning: string;
}

export const ONE_WORD_STATUSES: OneWordStatus[] = [
  { word: "Unbothered", emoji: "🕊️", meaning: "At total peace with myself" },
  { word: "Evolving", emoji: "🦋", meaning: "Constantly growing into better" },
  { word: "Sukoon", emoji: "☕", meaning: "Pure soul peace and calmness" },
  { word: "Savage", emoji: "👑", meaning: "Bold, fearless, and unapologetic" },
  { word: "Grateful", emoji: "🤍", meaning: "Thankful for every breath" },
  { word: "Focused", emoji: "🎯", meaning: "Locked into my goals" },
  { word: "Blessed", emoji: "✨", meaning: "Surrounded by divine goodness" },
  { word: "Limitless", emoji: "🚀", meaning: "No boundaries can stop me" },
  { word: "Silence", emoji: "🌙", meaning: "Listening more than speaking" },
  { word: "Hustle", emoji: "⚡", meaning: "Discipline over motivation" },
  { word: "Untamed", emoji: "🦁", meaning: "Wild and completely authentic" },
  { word: "Radiant", emoji: "🌸", meaning: "Shining from the inside out" },
];

// --- 5. Daily Status of the Day ---
export const STATUS_OF_THE_DAY = {
  quote: "Work quietly in silence, let your undeniable success make the noise 🚀✨",
  author: "Creator Daily Pick",
  vibe: "Success & Mindset",
  date: "Today's Featured Status",
  copyCount: "42.8K Copies Today",
};

// --- 7. WhatsApp Long-Tail Intent Subpages ---
export interface WhatsAppIntentPage {
  slug: string;
  title: string;
  badge: string;
  heading: string;
  description: string;
  relatedSectionId: string;
  faqs: { question: string; answer: string }[];
}

export const WHATSAPP_INTENT_SUBPAGES: WhatsAppIntentPage[] = [
  {
    slug: "attitude",
    title: "Attitude WhatsApp Status: 100+ Bold & Royal Swag Quotes (2026)",
    badge: "Attitude & Swag",
    heading: "100+ Best Attitude WhatsApp Status Quotes for Boys & Girls",
    description: "Discover 100+ high-attitude, bold, and royal swag WhatsApp status quotes. 1-click copy or share directly to your WhatsApp status.",
    relatedSectionId: "attitude-status",
    faqs: [
      { question: "What are the best attitude quotes for WhatsApp?", answer: "Quotes that reflect quiet confidence, high self-worth, and unapologetic presence work best." },
      { question: "Can I share these attitude statuses directly to WhatsApp?", answer: "Yes! Click the green '📲 WhatsApp' button to post instantly." },
    ],
  },
  {
    slug: "love",
    title: "Love WhatsApp Status: 100+ Romantic & Sweet Quotes",
    badge: "Romantic Love",
    heading: "100+ Heart-Touching Love WhatsApp Status Lines",
    description: "Express your feelings with the sweetest, most romantic WhatsApp status quotes in English and Hinglish.",
    relatedSectionId: "love-romantic",
    faqs: [
      { question: "How to set a romantic WhatsApp status?", answer: "Choose a 1-line quote that expresses genuine emotion and click 'WhatsApp' to share." },
    ],
  },
  {
    slug: "cool",
    title: "Cool WhatsApp Status: 100+ Trendy & Aesthetic Lines",
    badge: "Cool Vibes",
    heading: "100+ Cool WhatsApp Status Quotes to Impress Friends",
    description: "Trending cool status quotes that resonate with your current mood and aesthetic lifestyle.",
    relatedSectionId: "cool-status",
    faqs: [
      { question: "What makes a WhatsApp status look cool?", answer: "A punchy one-liner paired with minimal emojis and clear thought." },
    ],
  },
  {
    slug: "sad",
    title: "Sad WhatsApp Status: 100+ Deep Emotional & Heartbreak Quotes",
    badge: "Deep Emotions",
    heading: "100+ Sad & Emotional WhatsApp Status Quotes",
    description: "Express silent pain, late-night thoughts, and healing with these heartfelt emotional quotes.",
    relatedSectionId: "sad-heartbreak",
    faqs: [
      { question: "Why do people share sad quotes on WhatsApp status?", answer: "It allows quiet expression of feelings and inner emotional healing without direct confrontation." },
    ],
  },
  {
    slug: "motivational",
    title: "Motivational WhatsApp Status: 100+ Success & Hustle Quotes",
    badge: "Hustle Mindset",
    heading: "100+ Powerful Motivational WhatsApp Status Quotes",
    description: "Start your day with high-energy discipline, focus, and success quotes for WhatsApp status.",
    relatedSectionId: "motivational-hustle",
    faqs: [
      { question: "When is the best time to post a motivational status?", answer: "Between 6:00 AM and 9:00 AM when people check their phones to start their workday." },
    ],
  },
  {
    slug: "funny",
    title: "Funny WhatsApp Status: 100+ Sarcastic & Hilarious Quotes",
    badge: "Pure Humor",
    heading: "100+ Funny WhatsApp Status Quotes Guaranteed to Make Friends Laugh",
    description: "Hilarious and relatable one-liners to bring laughter and funny replies into your WhatsApp chats.",
    relatedSectionId: "funny-relatable",
    faqs: [
      { question: "Do funny statuses get more replies?", answer: "Yes, humorous quotes trigger 3x more emoji reactions and chat replies." },
    ],
  },
  {
    slug: "good-morning",
    title: "Good Morning WhatsApp Status: 100+ Positive Sunrise Quotes",
    badge: "Morning Sunshine",
    heading: "100+ Warm Good Morning WhatsApp Status Quotes",
    description: "Spread morning positivity, coffee smiles, and warm wishes to all your contacts on WhatsApp.",
    relatedSectionId: "good-morning-energy",
    faqs: [
      { question: "What should I write in a morning status?", answer: "A short blessing, an inspiring thought, or a warm greeting paired with a coffee or sunrise emoji." },
    ],
  },
  {
    slug: "good-night",
    title: "Good Night WhatsApp Status: 100+ Peaceful Sukoon Quotes",
    badge: "Night Calm",
    heading: "100+ Peaceful Good Night WhatsApp Status Quotes",
    description: "End the day peacefully with cozy, soothing, and relaxing Good Night status lines.",
    relatedSectionId: "good-night-peace",
    faqs: [
      { question: "How to wish good night on status?", answer: "Post a gentle reflection about rest, gratitude, and stars." },
    ],
  },
  {
    slug: "islamic",
    title: "Islamic WhatsApp Status: 100+ Duas, Quranic & Jummah Quotes",
    badge: "Spiritual Blessings",
    heading: "100+ Beautiful Islamic WhatsApp Status Quotes & Daily Duas",
    description: "Share daily Duas, Quranic reminders, Alhamdulillah quotes, and Jummah Mubarak blessings.",
    relatedSectionId: "islamic-duas",
    faqs: [
      { question: "When to post Jummah Mubarak status?", answer: "Every Friday morning from sunrise until after Jummah prayers." },
    ],
  },
  {
    slug: "friendship",
    title: "Friendship WhatsApp Status: 100+ Yaari & Best Friend Quotes",
    badge: "Best Friends",
    heading: "100+ Heartfelt Friendship WhatsApp Status Quotes",
    description: "Celebrate your true squad, brothers, and partner-in-crime with these loyalty and yaari quotes.",
    relatedSectionId: "friendship-yaari",
    faqs: [
      { question: "How to celebrate a best friend on WhatsApp?", answer: "Share a fun, relatable friendship status tagging your mutual inside jokes." },
    ],
  },
  {
    slug: "birthday",
    title: "Birthday WhatsApp Status: 100+ Celebration & Self-Birthday Quotes",
    badge: "Birthday Cheers",
    heading: "100+ Birthday WhatsApp Status Wishes & Self-Love Quotes",
    description: "Wish your loved ones or announce your own special day with these celebratory birthday status lines.",
    relatedSectionId: "birthday-wishes",
    faqs: [
      { question: "What is a good self-birthday status?", answer: "'Cheers to page 1 of my new personal chapter! Grateful for another year of growth 🎂🥂'" },
    ],
  },
  {
    slug: "life",
    title: "Deep Life WhatsApp Status: 100+ Karma & Wisdom Reflections",
    badge: "Life Wisdom",
    heading: "100+ Deep Life & Karma WhatsApp Status Quotes",
    description: "Thoughtful and mature reflections about karma, destiny, and emotional intelligence for WhatsApp.",
    relatedSectionId: "life-karma",
    faqs: [
      { question: "Why post life wisdom on WhatsApp?", answer: "It projects maturity, calm mindset, and thoughtful perspective." },
    ],
  },
  {
    slug: "breakup",
    title: "Breakup WhatsApp Status: 100+ Healing & Moving On Quotes",
    badge: "Healing & Growth",
    heading: "100+ Breakup & Healing WhatsApp Status Quotes",
    description: "Quotes to help you heal, find strength, and step into your self-worth era after a breakup.",
    relatedSectionId: "breakup-moving-on",
    faqs: [
      { question: "How to express moving on on status?", answer: "Focus on self-respect, growth, and looking forward to better chapters." },
    ],
  },
  {
    slug: "mahakal",
    title: "Mahakal WhatsApp Status: 100+ Har Har Mahadev & Shiva Quotes (2026)",
    badge: "🔱 Mahakal Bhakti",
    heading: "100+ Powerful Mahakal & Lord Shiva WhatsApp Status Quotes",
    description: "Express your devotion to Mahadev with powerful Bhole Nath, Mahakal attitude, and Shiva Tandav status quotes in Hindi.",
    relatedSectionId: "attitude-status",
    faqs: [
      { question: "What is a good Mahakal status in Hindi?", answer: "'Kaal bhi uska kya bigade jo bhakt ho Mahakal ka! Har Har Mahadev 🔱🔥'" },
    ],
  },
  {
    slug: "krishna",
    title: "Radha Krishna WhatsApp Status: 100+ Geeta Saar & Divine Love Quotes",
    badge: "🪈 Radha Krishna",
    heading: "100+ Divine Radha Krishna & Bhagavad Gita WhatsApp Status Lines",
    description: "Spiritual quotes, Bhagavad Gita life wisdom, and pure Radha Krishna prem status lines for daily peace and blessings.",
    relatedSectionId: "love-romantic",
    faqs: [
      { question: "When to share Krishna quotes?", answer: "Daily morning status or during festivals like Janmashtami and Holi." },
    ],
  },
  {
    slug: "alone",
    title: "Alone WhatsApp Status: 100+ Solitude, Sukoon & Single Life Quotes",
    badge: "🕊️ Sukoon & Alone",
    heading: "100+ Deep Alone & Solitude WhatsApp Status Quotes",
    description: "Find peace in solitude. Deep reflections on enjoying your own company, self-growth, and calm mind.",
    relatedSectionId: "sad-heartbreak",
    faqs: [
      { question: "Why is being alone empowering?", answer: "Solitude allows deep self-reflection, creative clarity, and unmatched inner peace." },
    ],
  },
  {
    slug: "brothers",
    title: "Brother WhatsApp Status: 100+ Bhai Yaari & Brother Bond Quotes",
    badge: "👑 Brother Bond",
    heading: "100+ Brother WhatsApp Status Quotes & Bhai Hood Lines",
    description: "Celebrate your real brother, partner in crime, and life protector with these strong brotherhood quotes.",
    relatedSectionId: "friendship-yaari",
    faqs: [
      { question: "What is a good brother status?", answer: "'Brothers by blood, best friends by choice. Having a brother means having a personal bodyguard for life 🤜🤛'" },
    ],
  },
  {
    slug: "sisters",
    title: "Sister WhatsApp Status: 100+ Sweet & Cute Sister Quotes",
    badge: "🌸 Sister Love",
    heading: "100+ Cute Sister WhatsApp Status Quotes & Sibling Banter",
    description: "Show love for your sister with sweet, funny, and protective sibling bond status quotes.",
    relatedSectionId: "friendship-yaari",
    faqs: [
      { question: "How to wish your sister on WhatsApp?", answer: "Tag her with a funny memory or a sweet message about how she brightens up the family." },
    ],
  },
  {
    slug: "family",
    title: "Family WhatsApp Status: 100+ Parents Respect & Ghar Ka Pyar Quotes",
    badge: "🏡 Family First",
    heading: "100+ Heartfelt Family & Parents WhatsApp Status Quotes",
    description: "Respect, love, and gratitude for Maa, Baap, and family unity quotes for WhatsApp status.",
    relatedSectionId: "life-karma",
    faqs: [
      { question: "Why post family status?", answer: "It expresses respect and gratitude for the unconditional support of parents and family." },
    ],
  },
  {
    slug: "boys-attitude",
    title: "Boys Attitude WhatsApp Status: 100+ Royal Swag & Sigma Lines",
    badge: "🔥 Boys Attitude",
    heading: "100+ Royal Swag & Sigma Attitude WhatsApp Status for Boys",
    description: "High-value, dangerous tevar, and sigma mindset status lines designed for boys on WhatsApp.",
    relatedSectionId: "attitude-status",
    faqs: [
      { question: "What is a killer attitude status for boys?", answer: "'Hum wahan khade hote hain jahan faisle hote hain, kisse nahi! 🦁👑'" },
    ],
  },
  {
    slug: "morning-suvichar",
    title: "Good Morning Suvichar WhatsApp Status: 100+ Prernadayak Thoughts",
    badge: "🌅 Morning Suvichar",
    heading: "100+ Positive Good Morning Suvichar & Anmol Vachan in Hindi",
    description: "Start the day with inspiring Hindi Suvichar, positivity, and Anmol Vachan for friends and family.",
    relatedSectionId: "good-morning-energy",
    faqs: [
      { question: "What is an impactful morning suvichar?", answer: "'Jeevan me safalta unhi ko milti hai jo suraj se pehle jaagte hain aur apne lakshya par date rehte hain. Shubh Prabhat! 🌅✨'" },
    ],
  },
];

