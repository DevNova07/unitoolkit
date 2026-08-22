export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
  category: "success" | "life" | "karma" | "confidence" | "hustle" | "love" | "deep" | "stoic";
  likes: number;
  tags: string[];
}

export interface QuoteCategorySection {
  id: string;
  slug: string;
  title: string;
  badge: string;
  count: string;
  intro: string;
  items: QuoteItem[];
}

export const QUOTE_SECTIONS: QuoteCategorySection[] = [
  {
    id: "success-quotes",
    slug: "success",
    title: "🏆 Success & Hustle Quotes",
    badge: "High Motivation",
    count: "30+ Quotes",
    intro:
      "Timeless quotes on discipline, relentless ambition, overcoming failure, and building extraordinary success from iconic leaders and thinkers.",
    items: [
      {
        id: "sq-1",
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "success",
        likes: 54200,
        tags: ["Leadership", "Courage", "Persistence"],
      },
      {
        id: "sq-2",
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: "success",
        likes: 48900,
        tags: ["Consistency", "Hustle"],
      },
      {
        id: "sq-3",
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi",
        category: "success",
        likes: 46700,
        tags: ["Wisdom", "Action"],
      },
      {
        id: "sq-4",
        quote: "Work hard in silence, let your success make the noise.",
        author: "Frank Ocean",
        category: "success",
        likes: 61200,
        tags: ["Silent Hustle", "Ambition"],
      },
      {
        id: "sq-5",
        quote: "If you want to shine like a sun, first burn like a sun.",
        author: "Dr. A.P.J. Abdul Kalam",
        category: "success",
        likes: 58300,
        tags: ["Inspiration", "Greatness"],
      },
      {
        id: "sq-6",
        quote: "The man who moves a mountain begins by carrying away small stones.",
        author: "Confucius",
        category: "success",
        likes: 51200,
        tags: ["Patience", "Consistency"],
      },
      {
        id: "sq-7",
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
        category: "success",
        likes: 47800,
        tags: ["Hustle", "Action"],
      },
    ],
  },
  {
    id: "life-quotes",
    slug: "life",
    title: "🌿 Deep Life & Wisdom Quotes",
    badge: "Philosophical",
    count: "35+ Quotes",
    intro:
      "Reflective, calm, and perspective-shifting quotes about the journey of life, gratitude, mindfulness, and inner peace.",
    items: [
      {
        id: "lq-1",
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "life",
        likes: 49100,
        tags: ["Mindset", "Hope"],
      },
      {
        id: "lq-2",
        quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius",
        category: "stoic",
        likes: 52400,
        tags: ["Stoicism", "Inner Peace"],
      },
      {
        id: "lq-3",
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "life",
        likes: 41800,
        tags: ["Mindfulness", "Present"],
      },
      {
        id: "lq-4",
        quote: "Do not let the behavior of others destroy your inner peace.",
        author: "Dalai Lama",
        category: "life",
        likes: 47600,
        tags: ["Peace", "Calm"],
      },
      {
        id: "lq-5",
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
        category: "life",
        likes: 43200,
        tags: ["Philosophy", "Wisdom"],
      },
      {
        id: "lq-6",
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        category: "life",
        likes: 48900,
        tags: ["Simplicity", "ArtOfLiving"],
      },
    ],
  },
  {
    id: "karma-quotes",
    slug: "karma",
    title: "⚖️ Karma & Destiny Quotes",
    badge: "Universal Law",
    count: "25+ Quotes",
    intro:
      "Powerful quotes on cause and effect, integrity, moral clarity, and the universal law of karma.",
    items: [
      {
        id: "kq-1",
        quote: "How people treat you is their karma; how you react is yours.",
        author: "Wayne Dyer",
        category: "karma",
        likes: 53100,
        tags: ["Karma", "Self-Control"],
      },
      {
        id: "kq-2",
        quote: "When you plant seeds of kindness, love, and truth, your harvest will be abundance and peace.",
        author: "Universal Wisdom",
        category: "karma",
        likes: 44300,
        tags: ["Good Deeds", "Integrity"],
      },
      {
        id: "kq-3",
        quote: "Karma has no deadline. Everything you put out comes back multiplied.",
        author: "Ancient Proverb",
        category: "karma",
        likes: 49800,
        tags: ["Destiny", "Truth"],
      },
      {
        id: "kq-4",
        quote: "Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.",
        author: "Oprah Winfrey",
        category: "karma",
        likes: 46100,
        tags: ["Integrity", "Character"],
      },
    ],
  },
  {
    id: "confidence-quotes",
    slug: "confidence",
    title: "🦁 Self-Confidence & Attitude Quotes",
    badge: "Fearless",
    count: "30+ Quotes",
    intro:
      "High-energy quotes on self-belief, owning your story, and walking with unapologetic confidence.",
    items: [
      {
        id: "cq-1",
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "confidence",
        likes: 47200,
        tags: ["Self-Belief", "Courage"],
      },
      {
        id: "cq-2",
        quote: "Never apologize for having high standards. People who really want to be in your life will rise to meet them.",
        author: "Ziad K. Abdelnour",
        category: "confidence",
        likes: 51600,
        tags: ["Standards", "Attitude"],
      },
      {
        id: "cq-3",
        quote: "I am not what happened to me, I am what I choose to become.",
        author: "Carl Jung",
        category: "confidence",
        likes: 45900,
        tags: ["Reinvention", "Power"],
      },
      {
        id: "cq-4",
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        category: "confidence",
        likes: 48300,
        tags: ["SelfWorth", "Boldness"],
      },
    ],
  },
];

export interface QuoteIntentSubpage {
  slug: string;
  title: string;
  badge: string;
  heading: string;
  description: string;
  relatedSectionId: string;
  faqs: { question: string; answer: string }[];
}

export const QUOTE_INTENT_SUBPAGES: QuoteIntentSubpage[] = [
  {
    slug: "success",
    title: "100+ Best Success & Motivational Quotes to Inspire Greatness (2026)",
    badge: "🏆 Success Quotes",
    heading: "100+ Best Success & Hustle Quotes for High Achievers",
    description: "Discover timeless quotes on hard work, discipline, persistence, and leadership from history's greatest leaders.",
    relatedSectionId: "success-quotes",
    faqs: [
      { question: "What is the most famous success quote?", answer: "'Success is not final, failure is not fatal: it is the courage to continue that counts' by Winston Churchill." },
      { question: "How to use success quotes on social media?", answer: "Pair a powerful 1-line quote with your morning workout, office photo, or LinkedIn career milestone post." },
    ],
  },
  {
    slug: "life",
    title: "100+ Deep Life Quotes & Philosophical Wisdom for Inner Peace",
    badge: "🌿 Life Quotes",
    heading: "100+ Deep Life Wisdom Quotes & Perspective Reminders",
    description: "Calm, thoughtful, and perspective-shifting quotes about gratitude, life journey, and presence.",
    relatedSectionId: "life-quotes",
    faqs: [
      { question: "How do life quotes help mental clarity?", answer: "Short philosophical reminders help reframe daily stress into positive long-term perspective." },
    ],
  },
  {
    slug: "karma",
    title: "Karma Quotes: 100+ Powerful Quotes on Destiny, Truth & Reaping What You Sow",
    badge: "⚖️ Karma Quotes",
    heading: "100+ Powerful Karma Quotes & Universal Laws",
    description: "Deep quotes on moral integrity, life balance, actions and reactions.",
    relatedSectionId: "karma-quotes",
    faqs: [
      { question: "What is the core law of karma?", answer: "Every intentional action creates an equal energetic reaction in our life experience." },
    ],
  },
  {
    slug: "confidence",
    title: "Self-Confidence Quotes: 100+ Fearless & High-Value Attitude Quotes",
    badge: "🦁 Confidence Quotes",
    heading: "100+ Fearless Self-Confidence & Attitude Quotes",
    description: "Boost your self-worth, unapologetic mindset, and bold personal standards.",
    relatedSectionId: "confidence-quotes",
    faqs: [
      { question: "How to build daily self confidence?", answer: "Start your morning by reviewing bold mindset principles and taking action on your goals." },
    ],
  },
];
