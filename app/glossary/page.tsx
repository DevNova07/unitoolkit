import { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import { CTASection } from "@/components/common/CTASection";
import { Sparkles, BookOpen, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Glossary [2026] — A to Z Creator Terms, Slang & Metrics | UniToolkit",
  description:
    "Comprehensive A to Z dictionary of social media terminology, algorithm metrics, creator slang, Hindi cultural terms, and copywriting formulas.",
  alternates: {
    canonical: "/glossary",
  },
  openGraph: {
    title: "Social Media Glossary [2026] — A to Z Creator Terms, Slang & Metrics | UniToolkit",
    description: "Master the essential vocabulary, algorithm mechanics, and creator slang across Instagram, TikTok, and YouTube.",
    url: "https://unitoolkit.com/glossary",
    type: "website",
  },
};

const GLOSSARY_TERMS = [
  { term: "Algorithm Hook", letter: "A", def: "The first 3 seconds of a video or initial line of caption text designed to stop users from scrolling past." },
  { term: "Aesthetic Feed", letter: "A", def: "A curated profile layout adhering to a cohesive color palette, typography style, and visual mood." },
  { term: "Audio Dwell", letter: "A", def: "A metric measuring how long users stay on a post while a trending sound plays, boosting algorithmic push." },
  { term: "Bio Line Break", letter: "B", def: "Invisible Unicode spacing characters used to force clean multi-line layouts in social media bios without collapsing." },
  { term: "Batch Creating", letter: "B", def: "The creator workflow of writing 20–30 captions or filming multiple videos in a single dedicated focus session." },
  { term: "Click-Through Rate (CTR)", letter: "C", def: "The percentage of users who click a link, call-to-action, or profile handle after viewing your content." },
  { term: "Carousel Post", letter: "C", def: "A multi-slide post format (up to 20 slides) designed to maximize user swipe dwell-time." },
  { term: "Comment Velocity", letter: "C", def: "The speed at which comments are posted in the first 30 minutes, heavily triggering viral explore distribution." },
  { term: "Dwell Time", letter: "D", def: "The total number of seconds a user spends viewing, reading, or replaying your post before continuing to scroll." },
  { term: "Desi Swag", letter: "D", def: "Culturally rooted Indian attitude and royal confidence expressed in Hindi and Hinglish social media lines." },
  { term: "Engagement Rate", letter: "E", def: "Total interactions (Likes + Comments + Saves + Shares) divided by Impressions or Total Followers, multiplied by 100." },
  { term: "E-E-A-T", letter: "E", def: "Google's quality standard evaluating Experience, Expertise, Authoritativeness, and Trustworthiness in digital content." },
  { term: "FYP (For You Page)", letter: "F", def: "The algorithmic recommendation feed on TikTok and Instagram Reels that serves content to non-followers based on viewing history." },
  { term: "First 3-Second Rule", letter: "F", def: "The critical window where a viewer decides whether to watch or skip your Reel or TikTok." },
  { term: "Golden Hour", letter: "G", def: "The period of daytime shortly after sunrise or before sunset with warm, diffuse, flattering natural sunlight." },
  { term: "Ghazal & Wazn", letter: "G", def: "Classical Urdu/Hindi poetic meter balancing rhythmic syllables in couplets (Shers) for authentic emotional resonance." },
  { term: "Hashtag Ladder", letter: "H", def: "A 3-tier strategy combining broad high-competition tags (500K+ posts), medium tags (50K–500K), and niche community tags (<50K)." },
  { term: "Helpful Content Update (HCU)", letter: "H", def: "Google's search engine algorithm designed to reward original, deeply helpful content and penalize thin, auto-scraped spam." },
  { term: "Impression", letter: "I", def: "The total number of times your content was displayed on screen, regardless of whether it was clicked or read." },
  { term: "Ishq & Sukoon", letter: "I", def: "Classic poetic terms expressing soulful devotion and deep inner peace, frequently used in romantic shayari." },
  { term: "Key Performance Indicator (KPI)", letter: "K", def: "Specific metrics (e.g. Save ratio, Shares, Link Clicks) used to evaluate social content campaign success." },
  { term: "Link in Bio", letter: "L", def: "A single clickable URL hosted on a creator profile directing followers to external websites, storefronts, or tools." },
  { term: "Micro-Influencer", letter: "M", def: "A creator with 10K to 100K highly engaged niche followers, often yielding 2–3x higher engagement than macro accounts." },
  { term: "Nazar (Evil Eye)", letter: "N", def: "A popular cultural concept reflected in aesthetic captions with the 🧿 talisman emoji to protect cherished moments." },
  { term: "Organic Reach", letter: "O", def: "The number of unique people who discover your content naturally without paid advertising or sponsored boosts." },
  { term: "Photo Dump", letter: "P", def: "A carousel post featuring a casual, uncurated collection of raw photos depicting recent daily life moments." },
  { term: "POV (Point of View)", letter: "P", def: "A storytelling format framing video or caption copy from the direct first-person perspective of the audience." },
  { term: "Quiet Luxury", letter: "Q", def: "An aesthetic movement prioritizing understated elegance, calm energy, and private sophistication over flashy logos." },
  { term: "Reels Save Ratio", letter: "R", def: "The percentage of viewers who bookmark a post for later reference—weighted 5x more heavily than simple likes by Instagram." },
  { term: "Royal Attitude (Tevar)", letter: "R", def: "Hindi slang defining uncompromising self-respect, sovereign pride, and fearless independence." },
  { term: "Shadowban", letter: "S", def: "A platform penalty reducing a user's organic visibility on Explore or hashtag feeds due to policy violations or spam behavior." },
  { term: "Soft Era", letter: "S", def: "An aesthetic lifestyle prioritizing emotional calm, mental peace, minimal drama, and intentional gentle living." },
  { term: "Trending Audio", letter: "T", def: "A sound clip on Reels or TikTok currently experiencing exponential usage, signaling algorithmic promotion." },
  { term: "User-Generated Content (UGC)", letter: "U", def: "Original brand-specific content created by consumers and creators rather than by the company itself." },
  { term: "VIP Bio", letter: "V", def: "A stylized social profile bio utilizing Unicode fonts, symbols, crowns, and invisible line spacing for premium impact." },
  { term: "Zero-Click Search", letter: "Z", def: "A search query answered directly in Google's Featured Snippet without requiring the user to click through to a webpage." },
];

const GLOSSARY_FAQS = [
  {
    question: "What are the most important social media metrics to track in 2026?",
    answer:
      "In 2026, social algorithms prioritize Saves (Bookmarks) and Direct Message Shares over simple Likes. High saves indicate evergreen value, prompting platforms to distribute your post to wider explore feeds.",
  },
  {
    question: "How does 'Dwell Time' affect my post rankings on Instagram and TikTok?",
    answer:
      "Dwell time measures the exact seconds a user pauses on your post. Rich micro-blog captions and multi-slide carousels naturally increase dwell time, signaling high content quality to algorithmic recommendation engines.",
  },
  {
    question: "What is the 3-Tier Hashtag Ladder strategy?",
    answer:
      "The 3-tier strategy pairs 1 broad category tag (e.g. #InstagramMarketing), 2 medium community tags (e.g. #CreatorEconomy2026), and 1-2 ultra-targeted micro tags (e.g. #ReelsCaptionIdeas) to rank across both high and low-competition search feeds.",
  },
  {
    question: "What is an 'Algorithm Hook' and why does it matter?",
    answer:
      "An algorithm hook is the opening 1–3 words of your caption or first 3 seconds of video. It creates an open curiosity loop that stops viewers from swiping away.",
  },
  {
    question: "How do I avoid getting shadowbanned when using hashtags?",
    answer:
      "Avoid repeating the exact same 30 hashtags on every post, never use banned or flagged tags, and keep your total hashtag count between 3 and 5 relevant tags.",
  },
  {
    question: "What does 'E-E-A-T' mean for creator websites and social brands?",
    answer:
      "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Demonstrating verified creator credentials, editorial standards, and real human testing ensures strong search rankings during Google core updates.",
  },
  {
    question: "Can I copy definitions from this glossary for my educational guides?",
    answer:
      "Yes! You are welcome to reference these creator terms with attribution to UniToolkit.",
  },
];

export default function GlossaryPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={GLOSSARY_FAQS}
        title="Social Media Terms Glossary 2026 — UniToolkit"
        description="Comprehensive dictionary of creator slang, algorithm metrics, and copywriting definitions."
        url="https://unitoolkit.com/glossary"
      />

      <Breadcrumbs items={[{ label: "Glossary" }]} />

      {/* Hero Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>36+ Verified Creator Terms • A to Z</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight flex items-center gap-3">
          <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 shrink-0" />
          <span>Social Media Terms Glossary [2026]</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Master essential creator vocabulary, algorithm mechanics, Hindi cultural slang, and copywriting formulas used across Instagram, TikTok, YouTube, and WhatsApp.
        </p>
      </div>

      {/* Dictionary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GLOSSARY_TERMS.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 shadow-xs hover:border-pink-300 dark:hover:border-pink-800 transition-all"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 font-bold text-xs flex items-center justify-center">
                  {item.letter}
                </span>
                <span>{item.term}</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.def}
            </p>
          </div>
        ))}
      </div>

      {/* How To Use Guide */}
      <HowToUseGuide
        guideId="caption-selection"
        categoryName="Creator Education"
        title="How to Apply Social Algorithm Vocabulary to Grow Your Account"
        pageUrl="https://unitoolkit.com/glossary"
      />

      {/* Topic Cluster Silo Cloud */}
      <TopicClusterSiloCloud
        topic="Instagram"
        contentType="captions"
        currentRoute="/glossary"
      />

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Social Media Education" topic="Creator Lexicon" />

      {/* 7 Structured FAQs */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About Social Media Terminology"
          subtitle="Everything you need to know about algorithm metrics, viral hooks, and hashtag ladders."
          faqs={GLOSSARY_FAQS}
        />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to put these strategies into practice?"
        subtitle="Launch our free AI tools to generate viral captions, 3-tier hashtag ladders, and VIP bios in seconds."
      />
    </div>
  );
}
