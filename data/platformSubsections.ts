import { Caption } from "@/lib/types";
import { CAPTIONS_DATA } from "./captionsData";

export interface SubcategorySection {
  id: string;
  title: string;
  count: number;
  desc: string;
  captions: Caption[];
}

export const INSTAGRAM_SUBSECTIONS: SubcategorySection[] = [
  {
    id: "short-instagram-captions",
    title: "short Instagram captions",
    count: 35,
    desc: "Short, punchy, and aesthetic one-liners for quick posts and photo dumps.",
    captions: [
      { id: "ig-s-1", text: "Less perfection, more authenticity.", category: "life", platform: "instagram", language: "en", style: "minimal", tone: "chill", length: "short" },
      { id: "ig-s-2", text: "Silent moves, loud results.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "confident", length: "short" },
      { id: "ig-s-3", text: "Golden hour glow never lies.", category: "fashion", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-s-4", text: "Living in the moment, forever.", category: "travel", platform: "instagram", language: "en", style: "aesthetic", tone: "emotional", length: "short" },
      { id: "ig-s-5", text: "Proof of life & good vibes.", category: "life", platform: "instagram", language: "en", style: "minimal", tone: "chill", length: "short" },
      { id: "ig-s-6", text: "Main character energy activated.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "confident", length: "short" },
      { id: "ig-s-7", text: "Simplicity is the ultimate luxury.", category: "life", platform: "instagram", language: "en", style: "minimal", tone: "chill", length: "short" },
      { id: "ig-s-8", text: "Unbothered, moisturized, in my lane.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "chill", length: "short" },
      { id: "ig-s-9", text: "Life is better when you're laughing.", category: "funny", platform: "instagram", language: "en", style: "aesthetic", tone: "friendly", length: "short" },
      { id: "ig-s-10", text: "Catch flights, not feelings.", category: "travel", platform: "instagram", language: "en", style: "viral", tone: "confident", length: "short" },
      { id: "ig-s-11", text: "Coffee in hand, confidence in soul.", category: "motivation", platform: "instagram", language: "en", style: "aesthetic", tone: "confident", length: "short" },
      { id: "ig-s-12", text: "Soft heart, fierce mind.", category: "attitude", platform: "instagram", language: "en", style: "aesthetic", tone: "confident", length: "short" },
      { id: "ig-s-13", text: "Just a camera roll dump.", category: "life", platform: "instagram", language: "en", style: "minimal", tone: "chill", length: "short" },
      { id: "ig-s-14", text: "Sunsets and sweet memories.", category: "travel", platform: "instagram", language: "en", style: "aesthetic", tone: "emotional", length: "short" },
      { id: "ig-s-15", text: "Creating my own sunshine.", category: "motivation", platform: "instagram", language: "en", style: "aesthetic", tone: "friendly", length: "short" },
    ],
  },
  {
    id: "birthday-instagram-captions",
    title: "birthday Instagram captions",
    count: 20,
    desc: "Celebrate your special day or your bestie's birthday with high-engagement lines.",
    captions: [
      { id: "ig-b-1", text: "Leveling up today. Cheers to another trip around the sun! 🎂✨", category: "birthday", platform: "instagram", language: "en", style: "viral", tone: "friendly", length: "short" },
      { id: "ig-b-2", text: "Older, wiser, and definitely hotter.", category: "birthday", platform: "instagram", language: "en", style: "savage", tone: "confident", length: "short" },
      { id: "ig-b-3", text: "Making my birthday wish count this year.", category: "birthday", platform: "instagram", language: "en", style: "aesthetic", tone: "emotional", length: "short" },
      { id: "ig-b-4", text: "Another year bolder, brighter, and more unstoppable.", category: "birthday", platform: "instagram", language: "en", style: "inspirational", tone: "confident", length: "short" },
      { id: "ig-b-5", text: "Keep calm and eat the whole birthday cake.", category: "birthday", platform: "instagram", language: "en", style: "funny", tone: "friendly", length: "short" },
      { id: "ig-b-6", text: "Chapter [Age]: Let the adventures begin.", category: "birthday", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-b-7", text: "Officially [Age] and thriving.", category: "birthday", platform: "instagram", language: "en", style: "viral", tone: "confident", length: "short" },
      { id: "ig-b-8", text: "Count your age by friends, not years. Count your life by smiles, not tears.", category: "birthday", platform: "instagram", language: "en", style: "inspirational", tone: "emotional", length: "medium" },
    ],
  },
  {
    id: "motivational-instagram-captions",
    title: "motivational Instagram captions",
    count: 44,
    desc: "Fuel ambition and inspire your community with powerful mindset quotes.",
    captions: [
      { id: "ig-m-1", text: "Dream big, work hard, stay humble, make it happen.", category: "motivation", platform: "instagram", language: "en", style: "inspirational", tone: "confident", length: "short" },
      { id: "ig-m-2", text: "Your only limit is your mindset. Break the barrier.", category: "motivation", platform: "instagram", language: "en", style: "inspirational", tone: "confident", length: "short" },
      { id: "ig-m-3", text: "Small daily improvements over time lead to stunning results.", category: "motivation", platform: "instagram", language: "en", style: "inspirational", tone: "professional", length: "medium" },
      { id: "ig-m-4", text: "Turn your pain into power and your doubts into fuel.", category: "motivation", platform: "instagram", language: "en", style: "inspirational", tone: "confident", length: "short" },
      { id: "ig-m-5", text: "Don't stop until you're proud of who you've become.", category: "motivation", platform: "instagram", language: "en", style: "inspirational", tone: "confident", length: "short" },
      { id: "ig-m-6", text: "Comfort is the enemy of progress. Step outside your box.", category: "motivation", platform: "instagram", language: "en", style: "inspirational", tone: "bold", length: "short" },
      { id: "ig-m-7", text: "One day or Day One. You decide.", category: "motivation", platform: "instagram", language: "en", style: "minimal", tone: "confident", length: "short" },
    ],
  },
  {
    id: "small-business-captions",
    title: "Instagram captions for small businesses",
    count: 38,
    desc: "Showcase behind-the-scenes, product launches, and brand stories.",
    captions: [
      { id: "ig-biz-1", text: "Behind every small business is a family with big dreams. Thank you for supporting us!", category: "business", platform: "instagram", language: "en", style: "casual", tone: "friendly", length: "medium" },
      { id: "ig-biz-2", text: "Crafted with love, shipped with care. What's your favorite piece?", category: "business", platform: "instagram", language: "en", style: "aesthetic", tone: "friendly", length: "short" },
      { id: "ig-biz-3", text: "Packed your orders with extra gratitude today ✨📦", category: "business", platform: "instagram", language: "en", style: "aesthetic", tone: "friendly", length: "short" },
      { id: "ig-biz-4", text: "When you buy from a small business, an actual person does a happy dance.", category: "business", platform: "instagram", language: "en", style: "funny", tone: "friendly", length: "short" },
      { id: "ig-biz-5", text: "New drop alert! Link in bio to snag yours before they're gone.", category: "business", platform: "instagram", language: "en", style: "viral", tone: "confident", length: "short" },
    ],
  },
  {
    id: "quotes-instagram-captions",
    title: "quotes for Instagram captions",
    count: 20,
    desc: "Timeless quotes from literature, icons, and viral creators.",
    captions: [
      { id: "ig-q-1", text: "“The best way to predict the future is to create it.” — Peter Drucker", category: "life", platform: "instagram", language: "en", style: "inspirational", tone: "professional", length: "short" },
      { id: "ig-q-2", text: "“She remembered who she was and the game changed.” — Lalah Delia", category: "attitude", platform: "instagram", language: "en", style: "inspirational", tone: "confident", length: "short" },
      { id: "ig-q-3", text: "“To live is the rarest thing in the world. Most people exist, that is all.” — Oscar Wilde", category: "life", platform: "instagram", language: "en", style: "inspirational", tone: "emotional", length: "medium" },
      { id: "ig-q-4", text: "“Everything you can imagine is real.” — Pablo Picasso", category: "life", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
    ],
  },
  {
    id: "selfies-instagram-captions",
    title: "Instagram captions for selfies",
    count: 10,
    desc: "Confident, cute, and flattering captions for front-camera snapshots.",
    captions: [
      { id: "ig-slf-1", text: "Confidence level: Selfie with no filter.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "confident", length: "short" },
      { id: "ig-slf-2", text: "Catching the golden hour in all its glory.", category: "selfie", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-slf-3", text: "Felt cute, won't delete later.", category: "funny", platform: "instagram", language: "en", style: "viral", tone: "friendly", length: "short" },
      { id: "ig-slf-4", text: "Eyes speak louder than words ever could.", category: "love", platform: "instagram", language: "en", style: "aesthetic", tone: "emotional", length: "short" },
      { id: "ig-slf-5", text: "Serving looks, not excuses.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "bold", length: "short" },
    ],
  },
  {
    id: "funny-instagram-captions",
    title: "funny Instagram caption ideas",
    count: 30,
    desc: "Hilarious and relatable lines that drive comment section interactions.",
    captions: [
      { id: "ig-fun-1", text: "I followed my heart, and it led me into the fridge.", category: "funny", platform: "instagram", language: "en", style: "funny", tone: "friendly", length: "short" },
      { id: "ig-fun-2", text: "My bed and I are in a committed relationship. We're very happy together.", category: "funny", platform: "instagram", language: "en", style: "funny", tone: "chill", length: "short" },
      { id: "ig-fun-3", text: "I'm not lazy, I'm just on energy-saving mode.", category: "funny", platform: "instagram", language: "en", style: "funny", tone: "chill", length: "short" },
      { id: "ig-fun-4", text: "There is no 'we' in food.", category: "funny", platform: "instagram", language: "en", style: "funny", tone: "bold", length: "short" },
      { id: "ig-fun-5", text: "I need a six-month vacation, twice a year.", category: "funny", platform: "instagram", language: "en", style: "funny", tone: "chill", length: "short" },
    ],
  },
  {
    id: "sassy-instagram-captions",
    title: "Instagram sassy captions",
    count: 35,
    desc: "Bold, savage, and witty remarks for unapologetic posts.",
    captions: [
      { id: "ig-sas-1", text: "I am not a backup plan, and definitely not a second choice.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "bold", length: "medium" },
      { id: "ig-sas-2", text: "They told me I couldn't, so I did it twice and took pictures.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "bold", length: "medium" },
      { id: "ig-sas-3", text: "Throwing shade won't help you shine.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "bold", length: "short" },
      { id: "ig-sas-4", text: "Too glam to give a damn.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "confident", length: "short" },
      { id: "ig-sas-5", text: "My circle is small because I'm into quality, not quantity.", category: "attitude", platform: "instagram", language: "en", style: "savage", tone: "confident", length: "short" },
    ],
  },
  {
    id: "cute-instagram-captions",
    title: "cute Instagram captions",
    count: 30,
    desc: "Sweet, charming, and wholesome captions for everyday smiles.",
    captions: [
      { id: "ig-cut-1", text: "Collect beautiful moments like wildflowers.", category: "nature", platform: "instagram", language: "en", style: "aesthetic", tone: "emotional", length: "short" },
      { id: "ig-cut-2", text: "Smiles are free, but they're worth a fortune.", category: "love", platform: "instagram", language: "en", style: "aesthetic", tone: "friendly", length: "short" },
      { id: "ig-cut-3", text: "Wrapped up in warmth and cozy sweaters.", category: "fashion", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-cut-4", text: "You make my heart do little happy dances.", category: "love", platform: "instagram", language: "en", style: "aesthetic", tone: "emotional", length: "short" },
    ],
  },
  {
    id: "beach-instagram-captions",
    title: "beach Instagram captions",
    count: 23,
    desc: "Sun, sea, salt, and sand captions for coastal getaways.",
    captions: [
      { id: "ig-bch-1", text: "High tides and good vibes only.", category: "travel", platform: "instagram", language: "en", style: "viral", tone: "chill", length: "short" },
      { id: "ig-bch-2", text: "Salt in the air, sand in my hair, peace in my mind.", category: "travel", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-bch-3", text: "Tropic like it's hot 🌴🌊", category: "travel", platform: "instagram", language: "en", style: "funny", tone: "friendly", length: "short" },
      { id: "ig-bch-4", text: "Sky above, sand below, peace within.", category: "travel", platform: "instagram", language: "en", style: "minimal", tone: "chill", length: "short" },
    ],
  },
  {
    id: "summer-instagram-captions",
    title: "summer Instagram caption ideas",
    count: 28,
    desc: "Sunshine, pool days, road trips, and endless summer vibes.",
    captions: [
      { id: "ig-sum-1", text: "Living on island time all summer long.", category: "travel", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-sum-2", text: "Sun-kissed skin and golden hour smiles.", category: "fashion", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-sum-3", text: "Summer state of mind: Activated.", category: "travel", platform: "instagram", language: "en", style: "viral", tone: "confident", length: "short" },
      { id: "ig-sum-4", text: "Popsicles, pool floats, and endless daylight.", category: "nature", platform: "instagram", language: "en", style: "aesthetic", tone: "friendly", length: "short" },
    ],
  },
  {
    id: "fall-instagram-captions",
    title: "fall Instagram caption ideas",
    count: 40,
    desc: "Cozy knits, pumpkin spice, crisp air, and autumn foliage.",
    captions: [
      { id: "ig-fal-1", text: "Leaves are falling, autumn is calling 🍂☕", category: "nature", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-fal-2", text: "Sweater weather is my love language.", category: "fashion", platform: "instagram", language: "en", style: "aesthetic", tone: "friendly", length: "short" },
      { id: "ig-fal-3", text: "Pumpkin spice and everything nice.", category: "food", platform: "instagram", language: "en", style: "viral", tone: "friendly", length: "short" },
      { id: "ig-fal-4", text: "Autumn shows us how beautiful it is to let things go.", category: "life", platform: "instagram", language: "en", style: "inspirational", tone: "emotional", length: "short" },
    ],
  },
  {
    id: "winter-instagram-captions",
    title: "winter Instagram captions",
    count: 20,
    desc: "Snowy days, hot cocoa, holiday sparkle, and winter wonderlands.",
    captions: [
      { id: "ig-win-1", text: "Walking in a winter wonderland ❄️✨", category: "nature", platform: "instagram", language: "en", style: "aesthetic", tone: "emotional", length: "short" },
      { id: "ig-win-2", text: "Hot cocoa, fuzzy socks, and cozy fires.", category: "food", platform: "instagram", language: "en", style: "aesthetic", tone: "chill", length: "short" },
      { id: "ig-win-3", text: "Cold hands, warm heart.", category: "love", platform: "instagram", language: "en", style: "minimal", tone: "emotional", length: "short" },
      { id: "ig-win-4", text: "'Tis the season to sparkle.", category: "fashion", platform: "instagram", language: "en", style: "viral", tone: "friendly", length: "short" },
    ],
  },
];

export function getPlatformSections(platformId: string, platformName: string): SubcategorySection[] {
  if (platformId === "instagram") {
    return INSTAGRAM_SUBSECTIONS;
  }

  // Filter captions for this platform or general
  const platformCaps = CAPTIONS_DATA.filter(
    (c) => c.platform === platformId || c.platform === "all"
  );

  const sections: SubcategorySection[] = [
    {
      id: "short-one-liners",
      title: `short & punchy ${platformName} captions`,
      count: 35,
      desc: `High-impact, concise ${platformName} captions built to stop the scroll.`,
      captions: platformCaps.slice(0, 15),
    },
    {
      id: "funny-clever",
      title: `funny & clever ${platformName} lines`,
      count: 40,
      desc: `Humorous, witty lines that trigger high comment engagement.`,
      captions: platformCaps.slice(15, 30),
    },
    {
      id: "viral-trending",
      title: `viral & trending ${platformName} captions`,
      count: 30,
      desc: `Current trending hooks and formats tailored for maximum algorithmic reach.`,
      captions: platformCaps.slice(30, 45),
    },
    {
      id: "aesthetic-deep",
      title: `aesthetic & inspiring ${platformName} quotes`,
      count: 25,
      desc: `Meaningful and deep quotes to elevate your video or post aesthetic.`,
      captions: platformCaps.slice(45, 60),
    },
    {
      id: "bold-attitude",
      title: `bold & sassy ${platformName} lines`,
      count: 30,
      desc: `Confident and unapologetic lines to make your presence felt.`,
      captions: platformCaps.slice(60, 75),
    },
  ].filter((s) => s.captions.length > 0);

  if (sections.length === 0) {
    sections.push({
      id: "all-captions",
      title: `all ${platformName} captions`,
      count: platformCaps.length,
      desc: `Curated collection of top captions for ${platformName}.`,
      captions: platformCaps,
    });
  }

  return sections;
}
