export interface WishItem {
  id: string;
  text: string;
  hindi?: string;
  hinglish?: string;
  occasion: string;
  categorySlug: string;
  section: string;
  recipient?: string;
  tone?: "emotional" | "funny" | "romantic" | "formal" | "short" | "inspirational";
  likes: number;
  featured?: boolean;
}

export interface WishOccasionHub {
  slug: string;
  name: string;
  cluster: "milestones" | "islamic" | "indian-festivals" | "global-festivals" | "daily" | "career" | "relationships";
  badge: string;
  emoji: string;
  tagline: string;
  description: string;
  sections: { id: string; label: string; subtitle?: string }[];
  popularRecipients: string[];
  eventDate2026?: string;
  trendingHashtags?: string[];
  faqs: { question: string; answer: string }[];
}

export const WISH_CLUSTERS = [
  { id: "milestones", name: "Life Milestones & Events", icon: "🎂", count: "10 Occasions" },
  { id: "islamic", name: "Islamic & Spiritual Occasions", icon: "🌙", count: "10 Occasions" },
  { id: "indian-festivals", name: "Indian Festivals & Celebrations", icon: "🪔", count: "15 Occasions" },
  { id: "global-festivals", name: "Global & Seasonal Holidays", icon: "🎄", count: "10 Occasions" },
  { id: "daily", name: "Daily Greetings & Caring Messages", icon: "☀️", count: "8 Occasions" },
  { id: "career", name: "Career & Success Milestones", icon: "💼", count: "8 Occasions" },
  { id: "relationships", name: "Special Relationship Days", icon: "👨‍👩‍👧", count: "9 Occasions" },
];

export const OCCASION_HUBS: WishOccasionHub[] = [
  // 1. Milestones
  {
    slug: "birthday-wishes",
    name: "Birthday Wishes",
    cluster: "milestones",
    badge: "Most Popular",
    emoji: "🎂",
    tagline: "Heartfelt, Funny & Milestone Birthday Wishes",
    description: "Discover 150+ best birthday wishes, quotes, and messages for best friends, family, love, and milestone ages (18th, 21st, 50th) with 1-click copy & photo cards.",
    sections: [
      { id: "all", label: "🌟 All Wishes", subtitle: "Complete collection of 50+ curated birthday messages." },
      { id: "friend", label: "👫 Best Friend", subtitle: "Emotional & joyful birthday messages for your closest ride-or-die companions." },
      { id: "love", label: "❤️ Romantic / Love", subtitle: "Sweet, touching, and deeply romantic wishes for your partner, spouse, or crush." },
      { id: "funny", label: "😂 Funny & Roasts", subtitle: "Hilarious roasts, playful banter, and age jokes to make them laugh out loud." },
      { id: "family", label: "👨‍👩‍👧 Mom / Dad / Sibling", subtitle: "Heartfelt appreciation for Mom, Dad, brothers, sisters, and family pillars." },
      { id: "short", label: "⚡ Short 1-Liners", subtitle: "Quick, punchy 1-liners perfect for Instagram captions and WhatsApp status." },
      { id: "milestone", label: "🎉 18th / 21st / 50th", subtitle: "Special celebratory blessings for turning 18, 21, 30, 50, and golden jubilee ages." },
    ],
    popularRecipients: ["Best Friend", "Sister", "Brother", "Boyfriend", "Girlfriend", "Mother", "Father", "Colleague"],
    faqs: [
      {
        question: "How do I write a memorable birthday wish for my best friend?",
        answer: "Combine a warm compliment, an inside joke or shared memory, and a genuine wish for their health, wealth, and dream vacations in the coming year.",
      },
      {
        question: "What are good short birthday wishes for Instagram captions and stories?",
        answer: "Short punchy lines work best: 'Cheers to another year of radiating pure sunshine! 🥂✨', 'Happy Level 25 unlocked! 🎂🎮', or 'Aging like fine wine and pure trouble! 🍷🔥'.",
      },
      {
        question: "Can I download birthday wishes as 9:16 greeting cards for WhatsApp status?",
        answer: "Yes! Click the 🖼️ Photo Card button on any birthday wish to generate instant high-resolution story cards with custom color themes.",
      },
      {
        question: "Are these birthday wishes available in Hindi and Hinglish?",
        answer: "Yes! Use our script switcher to copy in authentic Devanagari Hindi or conversational Roman Hinglish.",
      },
    ],
  },
  {
    slug: "wedding-wishes",
    name: "Wedding & Marriage Wishes",
    cluster: "milestones",
    badge: "Pure Romance",
    emoji: "💍",
    tagline: "Blessings & Congratulations for the Newlyweds",
    description: "Thoughtful wedding wishes, marriage blessings, and congratulations messages for bride, groom, friends, and family couples.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "friends", label: "👫 For Close Friends" },
      { id: "formal", label: "📜 Elegant & Formal" },
      { id: "funny", label: "😂 Playful & Funny" },
      { id: "religious", label: "🙏 Spiritual Blessings" },
    ],
    popularRecipients: ["Newlywed Couple", "Best Friend Bride", "Groom", "Brother", "Sister", "Colleague"],
    faqs: [
      { question: "What to write in a wedding card for a close friend?", answer: "Express joy for their union, reminisce on how happy they look together, and wish them a lifetime of laughter and shared adventures." },
    ],
  },
  {
    slug: "anniversary-wishes",
    name: "Anniversary Wishes",
    cluster: "milestones",
    badge: "Milestone Love",
    emoji: "🥂",
    tagline: "Romantic & Milestone Wedding Anniversary Quotes",
    description: "Celebrate enduring love with 1st, 5th, 10th, 25th Silver, and 50th Golden jubilee wedding anniversary wishes for husband, wife, and parents.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "spouse", label: "❤️ Husband / Wife" },
      { id: "parents", label: "👨‍👩‍👧 For Parents" },
      { id: "silver", label: "🥈 25th Silver Jubilee" },
      { id: "golden", label: "🥇 50th Golden Jubilee" },
    ],
    popularRecipients: ["Husband", "Wife", "Parents", "Sister & Jiju", "Friends"],
    faqs: [
      { question: "What is a good 25th anniversary wish for parents?", answer: "'25 years of unconditional partnership, patience, and pure love. Thank you for showing us what true marriage looks like. Happy Silver Jubilee! 🥈🥂✨'" },
    ],
  },
  {
    slug: "engagement-wishes",
    name: "Engagement Wishes",
    cluster: "milestones",
    badge: "Ring Ceremony",
    emoji: "💎",
    tagline: "Joyful Congratulations on Getting Engaged",
    description: "Warm engagement greetings, ring ceremony wishes, and congratulations messages for couples starting their journey to marriage.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "friends", label: "👫 Best Friends" },
      { id: "siblings", label: "👨‍👩‍👧 Siblings" },
      { id: "funny", label: "😂 Playful" },
    ],
    popularRecipients: ["Fiancé", "Fiancée", "Best Friend", "Sister", "Brother"],
    faqs: [{ question: "What to say on an engagement announcement?", answer: "'So thrilled for you both! May your engagement be the start of a lifetime filled with laughter, deep friendship, and endless love. 💍🥂'" }],
  },
  {
    slug: "baby-shower-wishes",
    name: "Baby Shower Wishes",
    cluster: "milestones",
    badge: "New Chapter",
    emoji: "🍼",
    tagline: "Blessings & Love for the Expectant Parents",
    description: "Sweet baby shower wishes, godh bharai messages, and blessings for mother-to-be and the arriving bundle of joy.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "mom", label: "🤰 Mother-to-Be" },
      { id: "parents", label: "👶 Expectant Parents" },
      { id: "blessings", label: "🙏 Cultural Blessings" },
    ],
    popularRecipients: ["Mom-to-be", "Sister", "Best Friend", "Colleague"],
    faqs: [{ question: "What is a sweet baby shower card message?", answer: "'Wishing you easy final weeks of pregnancy and a lifetime of sweet baby giggles, tiny socks, and deep joy! 🍼✨'" }],
  },
  {
    slug: "new-born-baby-wishes",
    name: "New Born Baby Wishes",
    cluster: "milestones",
    badge: "Little Miracle",
    emoji: "👶",
    tagline: "Welcome Baby Boy & Baby Girl Greetings",
    description: "Heartwarming congratulations messages for welcoming a new baby boy, baby girl, or twins into the family.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "boy", label: "👦 Baby Boy" },
      { id: "girl", label: "👧 Baby Girl" },
      { id: "twins", label: "👶👶 Twins" },
    ],
    popularRecipients: ["New Parents", "New Mom", "New Dad", "Grandparents"],
    faqs: [{ question: "What is the best new baby greeting?", answer: "'Welcome to the world, little angel! Congratulations to the proud parents on this precious miracle. 🌸👶🤍'" }],
  },

  // 2. Islamic & Spiritual Occasions
  {
    slug: "eid-mubarak-wishes",
    name: "Eid Mubarak Wishes",
    cluster: "islamic",
    badge: "Festive Joy",
    emoji: "🌙",
    tagline: "Eid-ul-Fitr & Eid-ul-Adha Duas and Greetings",
    description: "Spiritual and festive Eid Mubarak wishes, Chand Raat messages, and Bakra Eid greetings in English, Urdu, and Hindi.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "fitr", label: "🌙 Eid-ul-Fitr" },
      { id: "adha", label: "🐑 Eid-ul-Adha (Bakra Eid)" },
      { id: "chand-raat", label: "✨ Chand Raat" },
      { id: "dua", label: "🤲 Special Duas" },
    ],
    popularRecipients: ["Family", "Friends", "Colleagues", "Relatives Across Borders"],
    faqs: [{ question: "What is the traditional Eid Mubarak wish?", answer: "'Taqabbal Allahu minna wa minkum (May Allah accept from us and from you). Wishing you and your loved ones a blessed Eid full of peace, barakah, and happiness! 🌙🤲✨'" }],
  },
  {
    slug: "ramadan-kareem-wishes",
    name: "Ramadan Kareem Wishes",
    cluster: "islamic",
    badge: "Holy Month",
    emoji: "🕌",
    tagline: "Ramadan Mubarak Duas, Sehri & Iftar Messages",
    description: "Blessings for the holy month of fasting, forgiveness, Laylatul Qadr, Sehri greetings, and Iftar party invitations.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "mubarak", label: "🌙 Ramadan Mubarak" },
      { id: "sehri-iftar", label: "🍲 Sehri & Iftar" },
      { id: "qadr", label: "✨ Laylatul Qadr" },
    ],
    popularRecipients: ["Friends", "Family", "Muslim Community"],
    faqs: [{ question: "How to wish someone Ramadan Kareem?", answer: "'May this holy month of Ramadan illuminate your soul with faith, wash away sins, and fill your home with peace and boundless barakah. Ramadan Mubarak! 🕌✨'" }],
  },
  {
    slug: "jummah-mubarak-wishes",
    name: "Jummah Mubarak Wishes",
    cluster: "islamic",
    badge: "Weekly Blessing",
    emoji: "🤲",
    tagline: "Friday Duas, Hadith Quotes & Status Messages",
    description: "Soul-soothing Friday Jummah Mubarak status lines, Quranic verses, and prayers for family and WhatsApp broadcasts.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "duas", label: "🤲 Friday Duas" },
      { id: "hadith", label: "📖 Hadith Reflections" },
      { id: "short", label: "⚡ 2-Line Status" },
    ],
    popularRecipients: ["WhatsApp Groups", "Family", "Friends"],
    faqs: [{ question: "What is a good Jummah Mubarak message?", answer: "'May the blessings of this auspicious Friday bring tranquility to your heart, answers to your silent prayers, and forgiveness to your soul. Jummah Mubarak! 🕊️🤲'" }],
  },

  // 3. Indian Festivals
  {
    slug: "diwali-wishes",
    name: "Diwali Wishes (दीपावली शुभकामनाएँ)",
    cluster: "indian-festivals",
    badge: "Festival of Lights",
    emoji: "🪔",
    tagline: "Shubh Deepavali, Dhanteras & Bhai Dooj Wishes",
    description: "Brighten the festival of lights with auspicious Diwali wishes, Lakshmi Puja mantras, Dhanteras greetings, and corporate holiday messages.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "deepavali", label: "🪔 Shubh Deepavali" },
      { id: "dhanteras", label: "🪙 Dhanteras Wealth" },
      { id: "corporate", label: "💼 Professional & Clients" },
      { id: "family", label: "👨‍👩‍👧 Family & Friends" },
    ],
    popularRecipients: ["Family", "Clients", "Colleagues", "Neighbours", "Friends"],
    faqs: [{ question: "What is a classic Diwali wish in Hindi and English?", answer: "'दीयों की रोशनी से झिलमिलाता रहे आपका घर, सुख, समृद्धि और शांति का हो आपके जीवन में बसर! Happy Diwali to you and your family! 🪔✨'" }],
  },
  {
    slug: "holi-wishes",
    name: "Holi Wishes (होली की शुभकामनाएँ)",
    cluster: "indian-festivals",
    badge: "Festival of Colors",
    emoji: "🎨",
    tagline: "Vibrant Colors, Gujiya & Radha-Krishna Wishes",
    description: "Splash joyful colors with festive Holi wishes, funny pichkari quotes, romantic love lines, and poetic Brij Holi couplets.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "vibrant", label: "🎨 Colors of Joy" },
      { id: "funny", label: "😂 Funny & Masti" },
      { id: "romantic", label: "❤️ Radha-Krishna Love" },
    ],
    popularRecipients: ["Friends", "Colleagues", "Crush", "Family"],
    faqs: [{ question: "What is a fun Holi wish for friends?", answer: "'Gulal ka rang, apno ka sang, aur meethi gujiya ki mithas! Wishing you a super joyful, safe and vibrant Holi! 🎨💦🎉'" }],
  },
  {
    slug: "raksha-bandhan-wishes",
    name: "Raksha Bandhan Wishes",
    cluster: "indian-festivals",
    badge: "Sibling Bond",
    emoji: "🧵",
    tagline: "Sweet & Emotional Brother-Sister Bond Messages",
    description: "Celebrate the eternal sacred bond of brother and sister with protective promises, emotional Rakhi quotes, and playful sibling banter.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "brother", label: "👦 For Brother" },
      { id: "sister", label: "👧 For Sister" },
      { id: "funny", label: "😂 Playful Fights" },
    ],
    popularRecipients: ["Brother", "Sister", "Cousins"],
    faqs: [{ question: "What is an emotional Rakhi wish for a sister?", answer: "'No matter how much we fight for the TV remote, you will always be my forever protector and best friend. Happy Raksha Bandhan, behna! 🧵🤍✨'" }],
  },

  // 4. Global Festivals
  {
    slug: "new-year-wishes",
    name: "New Year Wishes",
    cluster: "global-festivals",
    badge: "Fresh Start",
    emoji: "🎆",
    tagline: "Inspirational & Cheerful Happy New Year 2026 Messages",
    description: "Welcome 2026 with inspiring resolutions, midnight toasts, cheerful New Year quotes, and professional well wishes for colleagues.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "inspirational", label: "🚀 Success & Growth" },
      { id: "romantic", label: "❤️ Midnight Love" },
      { id: "funny", label: "😂 Resolution Jokes" },
      { id: "professional", label: "💼 Clients & Boss" },
    ],
    popularRecipients: ["Friends", "Clients", "Family", "Significant Other"],
    faqs: [{ question: "What is an uplifting New Year message?", answer: "'May 2026 be the year your quiet efforts turn into undeniable breakthroughs, deep peace, and unforgettable adventures. Happy New Year! 🎆🥂✨'" }],
  },
  {
    slug: "christmas-wishes",
    name: "Christmas Wishes",
    cluster: "global-festivals",
    badge: "Winter Warmth",
    emoji: "🎄",
    tagline: "Merry Christmas Blessings, Peace & Joy",
    description: "Warm holiday greetings, Merry Christmas wishes, Santa quotes, and festive blessings for holiday cards and WhatsApp.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "cozy", label: "❄️ Warm & Cozy" },
      { id: "blessings", label: "🙏 Holy Peace" },
      { id: "corporate", label: "💼 Season's Greetings" },
    ],
    popularRecipients: ["Family", "Clients", "Friends", "Neighbors"],
    faqs: [{ question: "What is a heartfelt Christmas greeting?", answer: "'May the melody and spirit of Christmas fill your home with love, peace, and warmth this holiday season. Merry Christmas to you and your family! 🎄❄️✨'" }],
  },
  {
    slug: "valentines-day-wishes",
    name: "Valentine's Day Wishes",
    cluster: "global-festivals",
    badge: "Eternal Romance",
    emoji: "💖",
    tagline: "Romantic Love Quotes for 7 Days of Valentine Week",
    description: "Express your heart with Rose Day, Propose Day, Chocolate Day, Teddy Day, Promise Day, Hug Day, Kiss Day, and Valentine's Day love messages.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "valentines", label: "💖 Valentine's Day" },
      { id: "rose-day", label: "🌹 Rose Day" },
      { id: "propose-day", label: "💍 Propose Day" },
      { id: "promise-day", label: "🤝 Promise Day" },
    ],
    popularRecipients: ["Girlfriend", "Boyfriend", "Wife", "Husband", "Crush"],
    faqs: [{ question: "What is a deeply romantic Valentine wish?", answer: "'In a world full of temporary trends, you are my forever home. Happy Valentine's Day to the one who makes my heart skip a beat every single day. 💖🌹'" }],
  },

  // 5. Daily Greetings
  {
    slug: "good-morning-wishes",
    name: "Good Morning Wishes",
    cluster: "daily",
    badge: "Daily Energy",
    emoji: "☀️",
    tagline: "Motivational & Peaceful Suprabhat Messages",
    description: "Start every day with positive mindset quotes, spiritual morning prayers, romantic good morning texts, and chai quotes.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "motivation", label: "⚡ Hustle & Mindset" },
      { id: "romantic", label: "☕ Chai & Love" },
      { id: "spiritual", label: "🌸 Peace & Suprabhat" },
    ],
    popularRecipients: ["WhatsApp Groups", "Crush", "Parents", "Friends"],
    faqs: [{ question: "What is an uplifting Good Morning message?", answer: "'Every morning gives you two choices: continue to sleep with your dreams, or wake up and chase them. Make today count! Good Morning! ☀️☕✨'" }],
  },
  {
    slug: "good-night-wishes",
    name: "Good Night Wishes",
    cluster: "daily",
    badge: "Sweet Dreams",
    emoji: "🌙",
    tagline: "Peaceful Slumber, Starry Skies & Sweet Dreams",
    description: "Soothing good night wishes, bedtime quotes, and calming prayers to send before resting for the night.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "peaceful", label: "🌙 Calm & Sleep" },
      { id: "romantic", label: "🤍 Late Night Love" },
    ],
    popularRecipients: ["Loved Ones", "Bestie", "Family"],
    faqs: [{ question: "What to text someone before sleeping?", answer: "'Let go of today's worries and rest your soul under the quiet stars. Tomorrow brings fresh light and new miracles. Good Night & Sweet Dreams! 🌙🤍'" }],
  },

  // 6. Career & Professional
  {
    slug: "congratulations-wishes",
    name: "Congratulations Wishes",
    cluster: "career",
    badge: "Proud Moments",
    emoji: "🏆",
    tagline: "Celebrate Big Wins, Achievements & Victories",
    description: "Proud congratulations messages for competitive exam success, awards, promotions, closing deals, and major life accomplishments.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "success", label: "🎯 Big Achievements" },
      { id: "professional", label: "💼 Career Milestones" },
    ],
    popularRecipients: ["Colleague", "Student", "Friend", "Team Member"],
    faqs: [{ question: "How to congratulate someone professionally?", answer: "'Huge congratulations on this well-deserved milestone! Your dedication, work ethic, and vision make you an inspiration. Wishing you continued success! 🏆🚀'" }],
  },
  {
    slug: "promotion-wishes",
    name: "Job Promotion Wishes",
    cluster: "career",
    badge: "Career Ladder",
    emoji: "📈",
    tagline: "Leadership, New Roles & Career Advancement",
    description: "Congratulate colleagues, bosses, mentors, and friends stepping into higher leadership roles with thoughtful promotion greetings.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "colleague", label: "🤝 Teammates" },
      { id: "boss", label: "👔 Boss & Mentor" },
    ],
    popularRecipients: ["Colleague", "Manager", "Friend", "Spouse"],
    faqs: [{ question: "What to say for someone getting promoted?", answer: "'So proud to see your hard work recognized at the highest level! You're going to lead this new role with tremendous impact. Congratulations on the promotion! 📈💼'" }],
  },

  // 7. Relationship Days
  {
    slug: "mothers-day-wishes",
    name: "Mother's Day Wishes",
    cluster: "relationships",
    badge: "Purest Love",
    emoji: "🤱",
    tagline: "Gratitude, Love & Sweet Quotes for Mom",
    description: "Express heartfelt gratitude for maternal sacrifices, unconditional love, and warmth with touching Mother's Day messages.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "emotional", label: "❤️ Deep Gratitude" },
      { id: "sweet", label: "🌸 Sweet & Loving" },
    ],
    popularRecipients: ["Mom", "Grandmother", "Mother-in-law", "Wife as a Mother"],
    faqs: [{ question: "What is a touching Mother's Day quote?", answer: "'To the world you might just be one person, but to our family you are the entire world. Thank you for your endless love, Maa. Happy Mother's Day! 🤱🤍✨'" }],
  },
  {
    slug: "fathers-day-wishes",
    name: "Father's Day Wishes",
    cluster: "relationships",
    badge: "Silent Pillar",
    emoji: "👨‍👧",
    tagline: "Honor, Respect & Gratitude for Dad",
    description: "Celebrate the silent strength, wisdom, and selfless sacrifices of fathers with meaningful Father's Day quotes.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "hero", label: "🛡️ My Hero" },
      { id: "respect", label: "👑 Silent Strength" },
    ],
    popularRecipients: ["Dad", "Grandfather", "Husband as a Dad"],
    faqs: [{ question: "What is a meaningful Father's Day message?", answer: "'Dad, you gave me the wings to dream and the roots to stay grounded. Thank you for being my constant rock. Happy Father's Day! 👨‍👧👑'" }],
  },
  {
    slug: "friendship-day-wishes",
    name: "Friendship Day Wishes",
    cluster: "relationships",
    badge: "Forever Bond",
    emoji: "🤝",
    tagline: "Banter, Loyalty & Forever Bestie Messages",
    description: "Celebrate childhood companions, late-night squad memories, and partner-in-crime friendships with fun Friendship Day greetings.",
    sections: [
      { id: "all", label: "🌟 All Wishes" },
      { id: "bestie", label: "👭 Forever Besties" },
      { id: "funny", label: "😂 Partner in Crime" },
    ],
    popularRecipients: ["Best Friend", "Squad", "Childhood Friend"],
    faqs: [{ question: "What is a funny friendship day wish?", answer: "'We will always be best friends because you already know too many embarrassing secrets to be allowed in the wild! Happy Friendship Day, yaar! 🤝😂🍕'" }],
  },
];
