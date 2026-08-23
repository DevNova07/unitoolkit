import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Copy,
  Wand2,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Hash,
  Flame,
  Camera,
  Heart,
  Smile,
  Compass,
  Trophy,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AIGeneratorStudio } from "@/components/generator/AIGeneratorStudio";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import {
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
  LinkedInIcon,
} from "@/components/common/BrandIcons";

export const metadata: Metadata = {
  title: "AI Caption Generator Free — Create 10+ Viral Captions for Instagram & TikTok | Unitoolkit",
  description:
    "Generate 10+ viral, aesthetic, attitude, and Hinglish captions in seconds with Unitoolkit free AI Caption Generator. 100% free, no sign-up, with 1-click copy and story quote cards.",
  keywords: [
    "AI caption generator",
    "free AI reel caption generator",
    "Instagram caption generator AI",
    "AI photo caption generator online",
    "Hinglish AI caption generator",
    "TikTok viral hook generator",
    "aesthetic caption generator",
  ],
  alternates: {
    canonical: "/ai-caption-generator",
  },
  openGraph: {
    title: "AI Caption Generator Free — Unitoolkit",
    description: "Generate 10+ viral, aesthetic, and attitude captions in seconds with AI. 100% free without sign-up.",
    url: "https://unitoolkit.com/ai-caption-generator",
    type: "website",
  },
};

const AI_GENERATOR_FAQS = [
  {
    question: "Is the Unitoolkit AI Caption Generator completely free to use?",
    answer:
      "Yes! Unitoolkit AI Caption Generator is 100% free with unlimited generations. You do not need to enter a credit card, create an account, or log in. Generate as many captions as you need.",
  },
  {
    question: "Can I generate Hinglish and Hindi captions with this AI?",
    answer:
      "Yes! Our AI engine understands Hinglish (Desi English) and Hindi prompts. You can type prompts like 'Dosti swag reel' or 'Sukoon late night drive' and get authentic, relatable Indian captions.",
  },
  {
    question: "How does the AI generate viral captions for Instagram Reels & TikTok?",
    answer:
      "The AI analyzes your topic and crafts high-retention hooks designed to stop the scroll in the first 3 seconds, paired with engaging storytelling and relevant emojis optimized for social algorithms.",
  },
  {
    question: "Can I use these AI captions for commercial posts and business brands?",
    answer:
      "Yes! All generated captions are royalty-free. You can use them for personal reels, business accounts, sponsored posts, YouTube Shorts, and brand advertising.",
  },
  {
    question: "Can I download visual quote cards for Instagram Stories?",
    answer:
      "Yes! Next to every generated caption, click the Image icon to open the 1-Click Visual Quote Card generator and export a clean 9:16 Story or 1:1 Square graphic ready to post.",
  },
  {
    question: "What platforms are supported by Unitoolkit?",
    answer:
      "Captions are optimized for Instagram, TikTok, YouTube Shorts, Threads, LinkedIn, Facebook, X (Twitter), Pinterest, and WhatsApp status.",
  },
];

const TRENDING_CATEGORIES = [
  { slug: "boys", name: "Captions for Boys", icon: "👦", count: "120+" },
  { slug: "girls", name: "Captions for Girls", icon: "👧", count: "140+" },
  { slug: "attitude", name: "Attitude & Savage", icon: "👑", count: "150+" },
  { slug: "aesthetic", name: "Aesthetic Vibes", icon: "✨", count: "130+" },
  { slug: "mirror-selfie", name: "Mirror Selfies", icon: "🪞", count: "95+" },
  { slug: "photo-dump", name: "Photo Dumps", icon: "📸", count: "110+" },
  { slug: "golden-hour", name: "Golden Hour & Sunset", icon: "🌅", count: "85+" },
  { slug: "one-word", name: "One-Word Captions", icon: "⚡", count: "70+" },
  { slug: "travel", name: "Travel & Wanderlust", icon: "🏔️", count: "115+" },
  { slug: "love", name: "Love & Romantic", icon: "❤️", count: "125+" },
  { slug: "gym", name: "Gym & Fitness PR", icon: "💪", count: "90+" },
  { slug: "hinglish", name: "Hinglish & Desi Swag", icon: "🇮🇳", count: "105+" },
];

export default function AIGeneratorPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 space-y-10 sm:space-y-16">
      {/* Google Schema.org Rich Snippets */}
      <JsonLdSchema
        type="FAQPage"
        faqs={AI_GENERATOR_FAQS}
        title="Unitoolkit AI Caption Generator"
        description="Free AI-powered caption generator creating 10+ viral, aesthetic, and attitude captions for Instagram, TikTok, and YouTube."
        url="https://unitoolkit.com/ai-caption-generator"
      />
      <JsonLdSchema
        type="SoftwareApplication"
        title="Unitoolkit AI Caption Generator"
        description="Free AI tool to write Instagram, TikTok, and social media captions with 1-click."
        url="https://unitoolkit.com/ai-caption-generator"
      />

      {/* Top Breadcrumbs & Generator Container */}
      <div className="space-y-3 sm:space-y-6">
        <Breadcrumbs items={[{ label: "AI Caption Generator" }]} />

        {/* Main AI Studio Tool */}
        <Suspense fallback={<div className="h-[400px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />}>
          <AIGeneratorStudio />
        </Suspense>
      </div>

      {/* ======================================================== */}
      {/* SECTION 1: HOW IT WORKS IN 4 STEPS (Google HowTo Schema) */}
      {/* ======================================================== */}
      <HowToUseGuide
        guideId="ai-caption-generator"
        pageUrl="https://unitoolkit.com/ai-caption-generator"
      />

      {/* ======================================================== */}
      {/* SECTION 2: PLATFORM CAPABILITIES KEYWORD GRID */}
      {/* ======================================================== */}
      <section className="pt-10 border-t border-zinc-100 dark:border-zinc-900 space-y-8 text-left">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-xs font-bold shadow-2xs">
            <Layers className="w-3.5 h-3.5 fill-current" />
            <span>Algorithm-Optimized</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
            Tailored for Every Social Platform
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Get platform-native copy engineered to maximize reach, saves, and comments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Instagram */}
          <Link
            href="/instagram-captions"
            className="group p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/90 hover:border-pink-500/50 hover:shadow-md transition-all space-y-2.5"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs">
              <InstagramIcon size={18} />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 transition-colors">
              Instagram Reels & Posts
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Aesthetic one-liners, attitude captions, photo dump quotes, and carousel descriptions.
            </p>
          </Link>

          {/* Card 2: TikTok */}
          <Link
            href="/tiktok-captions"
            className="group p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/90 hover:border-cyan-500/50 hover:shadow-md transition-all space-y-2.5"
          >
            <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-xs border border-zinc-800">
              <TikTokIcon size={18} />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors">
              TikTok Viral Hooks
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              3-second hook captions and relatable trend commentary that boost video watch time.
            </p>
          </Link>

          {/* Card 3: YouTube Shorts */}
          <Link
            href="/youtube-captions"
            className="group p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/90 hover:border-red-500/50 hover:shadow-md transition-all space-y-2.5"
          >
            <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-xs">
              <YoutubeIcon size={18} />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors">
              YouTube Shorts
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Search-optimized titles, quick punchy descriptions, and high CTR video hooks.
            </p>
          </Link>

          {/* Card 4: Hinglish & Desi */}
          <Link
            href="/categories/hinglish"
            className="group p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/90 hover:border-amber-500/50 hover:shadow-md transition-all space-y-2.5"
          >
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white font-bold text-base flex items-center justify-center shadow-xs">
              🇮🇳
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
              Hinglish & Desi Vibe
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Desi attitude lines, Bollywood dialogues, sukoon quotes, and relatable desi humor.
            </p>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: TRENDING CAPTION CATEGORIES CLOUD (SEO Links) */}
      {/* ======================================================== */}
      <section className="pt-10 border-t border-zinc-100 dark:border-zinc-900 space-y-6 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white">
              Explore Popular Caption Categories
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Browse 1,000+ handpicked captions ready to copy right away.
            </p>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>View All 30+ Niches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {TRENDING_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="p-3.5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center justify-between shadow-2xs group"
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="text-lg">{cat.icon}</span>
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                  {cat.name}
                </span>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 shrink-0">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Deep Silo Topic Interlinking (Pillar 5) */}
      <TopicClusterSiloCloud
        topic="Viral"
        contentType="captions"
        currentRoute="/ai-caption-generator"
      />

      {/* ======================================================== */}
      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS (FAQ) */}
      {/* ======================================================== */}
      <section className="pt-10 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="AI Caption Generator FAQ"
          subtitle="Everything you need to know about Unitoolkit's free AI caption writer."
          faqs={AI_GENERATOR_FAQS}
        />
      </section>
    </div>
  );
}
