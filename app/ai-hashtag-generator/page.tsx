import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Award,
  Hash,
  TrendingUp,
  Layers,
  BarChart3,
  Target,
  Copy,
} from "lucide-react";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";

export const metadata: Metadata = {
  title: "AI Hashtag Generator Free — 30 Viral Tags for Instagram, TikTok & Reels [2026] | UniToolkit",
  description:
    "Generate 30 high-engagement, balanced viral hashtags in 3 seconds with our free AI Hashtag Generator. Tiered 3-level hashtag ladder matching for Instagram Reels, TikTok, and YouTube Shorts.",
  keywords: [
    "AI hashtag generator",
    "Instagram hashtag generator free",
    "hashtag ladder strategy AI",
    "TikTok viral hashtags generator",
    "Reels hashtag generator copy paste",
    "free hashtag generator for YouTube",
  ],
  alternates: {
    canonical: "/ai-hashtag-generator",
  },
  openGraph: {
    title: "AI Hashtag Generator Free — 30 Viral Tags [2026]",
    description: "Generate 30 high-engagement hashtags with 3-tier ladder strategy for Instagram, TikTok, and YouTube.",
    url: "https://unitoolkit.com/ai-hashtag-generator",
    type: "website",
  },
};

const HASHTAG_FAQS = [
  {
    question: "What is the 3-Tier Hashtag Ladder Strategy?",
    answer:
      "The Hashtag Ladder Strategy divides your 30 hashtags into three groups: 10 High-Competition (1M+ posts) for viral lottery reach, 10 Medium-Competition (100K-1M posts) for category discovery, and 10 Low-Competition (10K-100K posts) for ranking in top recent feeds. This balance maximizes your post's algorithmic momentum.",
  },
  {
    question: "How many hashtags should I use on Instagram Reels versus TikTok?",
    answer:
      "For Instagram Reels and feed posts, 20 to 30 well-targeted niche hashtags still drive the highest organic search discovery. For TikTok, 4 to 8 hyper-relevant niche tags (like #fyp #foryou plus topic keywords) work best to avoid confusing the recommendation algorithm.",
  },
  {
    question: "Should I put hashtags in the caption or the first comment?",
    answer:
      "Instagram officially recommends placing hashtags directly in the caption text for better search indexing and keyword ranking in Instagram Search & Explore.",
  },
  {
    question: "Can I copy the hashtags with custom spacing or bullet points?",
    answer:
      "Yes! Our tool allows 1-click copying with hashtags included (#tag), clean space-separated tags, or formatted dot-spaced lines ready to paste directly into your social apps.",
  },
  {
    question: "Is the AI Hashtag Generator 100% free?",
    answer:
      "Yes! UniToolkit AI Hashtag Generator is completely free with unlimited generations. No credit card, account registration, or subscription is required.",
  },
];

export default function AIHashtagGeneratorPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12 sm:space-y-16 text-left">
      {/* 1. Google Schema.org JSON-LD Structured Data */}
      <JsonLdSchema
        type="WebApplication"
        title="AI Hashtag Generator Studio"
        description="Free AI hashtag generator with tiered ladder reach matching for Instagram, TikTok, and YouTube."
        url="https://unitoolkit.com/ai-hashtag-generator"
      />
      <JsonLdSchema
        type="FAQPage"
        faqs={HASHTAG_FAQS}
        title="AI Hashtag Generator FAQ"
        description="Frequently asked questions about hashtag ladders, Instagram SEO, and reach optimization."
        url="https://unitoolkit.com/ai-hashtag-generator"
      />

      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: "AI Hashtag Generator" },
        ]}
      />

      {/* 2. Main Interactive Tool */}
      <div className="space-y-4">
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>AI Hashtag Studio • 30-Tag Ladder</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            AI Hashtag Generator
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Generate 30 tiered hashtags optimized with viral ladder strategies for Instagram, TikTok, and YouTube in 3 seconds.
          </p>
        </div>

        <HashtagGeneratorTool />
      </div>

      {/* 3. Section: How to Generate High-Velocity Hashtags (Google HowTo Schema) */}
      <HowToUseGuide
        guideId="ai-hashtag-generator"
        pageUrl="https://unitoolkit.com/ai-hashtag-generator"
      />

      {/* 4. Section: 6 AI Hashtag Engine Features */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-bold text-purple-600 dark:text-purple-400">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Smart Hashtag Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Engineered for Creators, Influencers & Brands
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Clean, ban-free hashtags that keep your account safe while multiplying impressions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {/* Feature 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-emerald-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Automated 30-Tag Ladder Split
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every generation automatically balances Low, Medium, and High competition tags to avoid shadowbans from spamming massive tags.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-teal-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Banned Hashtag Protection
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Filters out restricted and broken tags that could harm your account&apos;s reach or cause algorithmic suppression.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-purple-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Platform Native Optimization
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Format customized sets tailored for Instagram Reels (30 tags), TikTok (8 tags), and YouTube Shorts (5 tags).
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-amber-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Copy className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              1-Click Flexible Copy Modes
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Copy as #hashtags, space-separated keywords, or clean line-break blocks ready to paste into your scheduling tools.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Trending 2026 Niche Seeds
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Includes the latest 2026 trending keywords in fitness, fashion, travel, business, tech, and aesthetic lifestyle.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-cyan-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              100% Free & Unlimited
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Generate as many hashtag packs as you need without signup, paywalls, or limits.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Section: Browse Ready-Made Hashtag Packs by Niche */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Explore 35+ Curated Hashtag Hubs
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Browse our ready-made hashtag ladders organized by platform, niche, and topic.
            </p>
          </div>
          <Link
            href="/hashtags"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>View All Hashtag Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: "Instagram Reels Hashtags", href: "/hashtags/instagram", count: "120+ tags" },
            { label: "TikTok Viral FYP Hashtags", href: "/hashtags/tiktok", count: "85+ tags" },
            { label: "YouTube Shorts Hashtags", href: "/hashtags/youtube", count: "65+ tags" },
            { label: "Travel & Adventure Tags", href: "/hashtags/travel", count: "90+ tags" },
            { label: "Gym & Fitness PR Tags", href: "/hashtags/gym", count: "95+ tags" },
            { label: "Fashion & Outfit Tags", href: "/hashtags/fashion", count: "80+ tags" },
            { label: "Photography & Art Tags", href: "/hashtags/photography", count: "100+ tags" },
            { label: "Attitude & Swag Tags", href: "/hashtags/attitude", count: "90+ tags" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all flex items-center justify-between shadow-2xs group"
            >
              <div className="space-y-0.5 truncate">
                <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                  {item.label}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.count}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Section: Related Creator Studios */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            More Free Creator & Generation Studios
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Discover other AI-powered generators and creator utilities on UniToolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/ai-caption-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">✨</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Caption Studio</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Create 10+ viral hooks and captions for Reels and TikTok.</p>
          </Link>

          <Link
            href="/ai-bio-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">👑</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Bio Generator</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Aesthetic VIP attitude bios with clean line breaks and fonts.</p>
          </Link>

          <Link
            href="/ai-status-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">🟢</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI WhatsApp Status</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">2-line viral status quotes with 1-click WhatsApp share.</p>
          </Link>

          <Link
            href="/ai-shayari-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">📜</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Hindi Shayari</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Authentic 2-line rhyming poetry in Hindi Devanagari & Hinglish.</p>
          </Link>
        </div>
      </section>

      {/* 7. E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Social Media SEO" topic="Hashtags & Algorithmic Growth" />

      {/* 8. FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions (FAQ)"
        subtitle="Common questions about our AI hashtag generator, 30-tag ladder strategy, and reach optimization."
        faqs={HASHTAG_FAQS}
      />

      {/* Deep Silo Topic Interlinking (Pillar 5) */}
      <TopicClusterSiloCloud
        topic="Hashtags"
        contentType="hashtags"
        currentRoute="/ai-hashtag-generator"
      />

      {/* 9. Final Call to Action */}
      <CTASection
        title="Ready to maximize your post impressions?"
        subtitle="Use our free AI studio above to generate unlimited 30-tag viral ladders."
      />
    </div>
  );
}
