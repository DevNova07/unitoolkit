import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers, Wand2, BookOpen, Sliders, TrendingUp, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import {
  InstagramIcon,
  YoutubeIcon,
  TikTokIcon,
  ThreadsIcon,
  LinkedInIcon,
  XIcon,
  PinterestIcon,
  FacebookIcon,
  SnapchatIcon,
  WhatsAppIcon,
} from "@/components/common/BrandIcons";

export const metadata: Metadata = {
  title: "Free AI & Social Media Tools for Creators (Create, Discover, Optimize) [2026] | UniToolkit",
  description:
    "Explore 15+ creator tools across 4 pillars: CREATE (AI Generators), DISCOVER (Content Vaults), OPTIMIZE (Formatters), and GROW across 10 major social platforms.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Free AI & Social Media Tools for Creators | UniToolkit",
    description: "Create captions, bios, hashtags, quotes, scripts and more — instantly with 1-click copy.",
    url: "https://unitoolkit.com/tools",
    type: "website",
  },
};

const TOOLS_FAQS = [
  {
    question: "What are the 4 main pillars of the UniToolkit Creator Suite?",
    answer:
      "UniToolkit is organized into 4 strategic pillars: 1) CREATE (AI Caption, Bio, Hashtag, Shayari, Quote, Status, and Name generators), 2) DISCOVER (15,000+ handpicked captions, shayari couplets, and status quotes), 3) OPTIMIZE (Fancy Font styler, line-break formatters, and username tools), and 4) GROW (10 platform-specific algorithm engines).",
  },
  {
    question: "Are all tools and AI studios 100% free with unlimited usage?",
    answer:
      "Yes! Every AI generator, content vault, and formatter on UniToolkit is completely free with no account registration, no credit cards, and no usage limits.",
  },
  {
    question: "How does the AI Caption Generator create custom viral hooks?",
    answer:
      "Our AI is fine-tuned on top 1% performing short-form video hooks. It analyzes your photo or topic description, adapts to your target audience, and outputs 10+ high-CTR lines with viral hashtags.",
  },
  {
    question: "How do I format multi-line bios so line breaks don't collapse on mobile?",
    answer:
      "Use our VIP Bio Styler or Fancy Font Generator. Our tools embed invisible Unicode spacing characters so your line breaks stay clean and formatted when pasted into Instagram or TikTok.",
  },
  {
    question: "Can I copy and share directly to WhatsApp or social platforms?",
    answer:
      "Yes! Every caption, shayari, bio, and quote includes 1-click clipboard copy and a direct WhatsApp share button for effortless posting.",
  },
  {
    question: "Which 10 social platforms are supported on UniToolkit?",
    answer:
      "We provide tailored tools and character-optimized formatting for Instagram, TikTok, YouTube, WhatsApp, Facebook, LinkedIn, X (Twitter), Threads, Pinterest, and Snapchat.",
  },
  {
    question: "Are generated captions royalty-free for commercial client accounts?",
    answer:
      "100% yes. You have full commercial rights to publish, modify, and monetize all generated copy across personal influencer profiles, agency clients, and brand marketing campaigns.",
  },
];

export default function ToolsHubPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={TOOLS_FAQS}
        title="Creator Tools Directory — UniToolkit"
        description="Comprehensive directory of AI generators, content vaults, and formatters."
        url="https://unitoolkit.com/tools"
      />

      <Breadcrumbs items={[{ label: "Creator Tools" }]} />

      {/* Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>4 Core Pillars • 15+ Creator Tools • 10 Platforms</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Free AI & Social Media Tools for Creators
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          Create captions, bios, hashtags, quotes, scripts and more — instantly. Built for modern storytellers, influencers, and digital marketers.
        </p>
      </div>

      {/* ======================================================== */}
      {/* PILLAR 1: CREATE (AI Generators) */}
      {/* ======================================================== */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Wand2 className="w-4 h-4" />
            <span>1. CREATE — AI Studio Generators</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Instant AI Engines (Free & Unlimited)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href="/ai-caption-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/60 hover:shadow-lg transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-2xl flex items-center justify-center shadow-xs">
              ✨
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              AI Caption Studio
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Describe your photo or video to generate 10+ viral hooks, captions, and hashtags tailored for Reels & TikTok.
            </p>
          </Link>

          <Link
            href="/ai-bio-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/60 hover:shadow-lg transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 font-bold text-2xl flex items-center justify-center shadow-xs">
              👑
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              AI Bio Generator & Styler
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Craft 150-character VIP, Aesthetic, Founder, and Minimal profile bios with pre-formatted invisible line breaks.
            </p>
          </Link>

          <Link
            href="/ai-hashtag-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/60 hover:shadow-lg transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-bold text-2xl flex items-center justify-center shadow-xs">
              #️⃣
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              AI 3-Tier Hashtag Generator
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Generate 30 balanced tags structured into Top, Medium, and Micro competition tiers to maximize Explore reach.
            </p>
          </Link>

          <Link
            href="/ai-shayari-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:shadow-lg transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 font-bold text-2xl flex items-center justify-center shadow-xs">
              📜
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              AI Hindi Shayari Generator
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Authentic Ghazals and Shers crafted with poetic meter (Wazn) in Devanagari Hindi and Romanized Hinglish.
            </p>
          </Link>

          <Link
            href="/ai-status-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 hover:shadow-lg transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold text-2xl flex items-center justify-center shadow-xs">
              🟢
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              AI WhatsApp Status Generator
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              2-line punchy status quotes with emojis and direct 1-tap WhatsApp broadcast sharing.
            </p>
          </Link>

          <Link
            href="/ai-baby-name-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/60 hover:shadow-lg transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 font-bold text-2xl flex items-center justify-center shadow-xs">
              👶
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              AI Baby Name Studio
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Filter by origin, spiritual virtue, and starting letter with verified meanings and audio pronunciation.
            </p>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PILLAR 2: DISCOVER (Ready Content Vaults) */}
      {/* ======================================================== */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <BookOpen className="w-4 h-4" />
            <span>2. DISCOVER — Ready Content Vaults (15,000+ Lines)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Curated 1-Click Copy Libraries
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link
            href="/captions"
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/60 text-center space-y-2 group transition-all"
          >
            <span className="text-2xl block">🔥</span>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Captions</h3>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">15K+ Lines</span>
          </Link>

          <Link
            href="/shayari"
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 text-center space-y-2 group transition-all"
          >
            <span className="text-2xl block">📜</span>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400">Shayari</h3>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">Ghalib & Tevar</span>
          </Link>

          <Link
            href="/whatsapp-status"
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 text-center space-y-2 group transition-all"
          >
            <span className="text-2xl block">🟢</span>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Status</h3>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">2-Liners</span>
          </Link>

          <Link
            href="/bios"
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/60 text-center space-y-2 group transition-all"
          >
            <span className="text-2xl block">👑</span>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Bios</h3>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">VIP & Aesthetic</span>
          </Link>

          <Link
            href="/quotes"
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/60 text-center space-y-2 group transition-all"
          >
            <span className="text-2xl block">💡</span>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">Quotes</h3>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">Mindset & Stoic</span>
          </Link>

          <Link
            href="/names"
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/60 text-center space-y-2 group transition-all"
          >
            <span className="text-2xl block">👶</span>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400">Names</h3>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">A to Z Meanings</span>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PILLAR 3: OPTIMIZE (Creator Utilities & Formatters) */}
      {/* ======================================================== */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Sliders className="w-4 h-4" />
            <span>3. OPTIMIZE — Formatters & Styler Utilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Text Formatters & Visual Styler Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link
            href="/tools/fancy-font-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 hover:shadow-lg transition-all space-y-2.5 group"
          >
            <span className="text-2xl">𝔉</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Fancy Unicode Font Generator
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Convert plain text into 30+ VIP Unicode stylish fonts for Instagram bios, Discord handles, and WhatsApp status.
            </p>
          </Link>

          <Link
            href="/tools/username-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 hover:shadow-lg transition-all space-y-2.5 group"
          >
            <span className="text-2xl">⚡</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Social Username Generator
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Generate rare, aesthetic, and professional social handles for Instagram, TikTok, YouTube, and X.
            </p>
          </Link>

          <Link
            href="/tools/hashtag-generator"
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 hover:shadow-lg transition-all space-y-2.5 group"
          >
            <span className="text-2xl">📈</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Hashtag Ladder Generator
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Build high-engagement 30-tag viral sets with 1-click clean copy.
            </p>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PILLAR 4: GROW (10 Platform Specific Engines) */}
      {/* ======================================================== */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <TrendingUp className="w-4 h-4" />
            <span>4. GROW — 10 Platform Specific Engines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Tailored for Every Social Media Algorithm
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          <Link
            href="/instagram-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-rose-500"><InstagramIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">Instagram</h3>
          </Link>

          <Link
            href="/tiktok-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center"><TikTokIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">TikTok</h3>
          </Link>

          <Link
            href="/youtube-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-red-500 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-red-500"><YoutubeIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">YouTube</h3>
          </Link>

          <Link
            href="/whatsapp-status"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-emerald-500"><WhatsAppIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">WhatsApp</h3>
          </Link>

          <Link
            href="/linkedin-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-600 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-blue-600"><LinkedInIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">LinkedIn</h3>
          </Link>

          <Link
            href="/twitter-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center"><XIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">X / Twitter</h3>
          </Link>

          <Link
            href="/threads-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-purple-500"><ThreadsIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">Threads</h3>
          </Link>

          <Link
            href="/facebook-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-blue-500"><FacebookIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">Facebook</h3>
          </Link>

          <Link
            href="/pinterest-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-600 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-rose-600"><PinterestIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">Pinterest</h3>
          </Link>

          <Link
            href="/snapchat-captions"
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-400 text-center space-y-2 group transition-all"
          >
            <div className="flex justify-center text-amber-400"><SnapchatIcon size={24} /></div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white">Snapchat</h3>
          </Link>
        </div>
      </section>

      {/* How To Use Guide */}
      <HowToUseGuide
        guideId="caption-selection"
        categoryName="Creator Suite"
        title="How to Maximize Your Workflow Across the 4 Creator Pillars"
        pageUrl="https://unitoolkit.com/tools"
      />

      {/* Topic Cluster Silo Cloud */}
      <TopicClusterSiloCloud
        topic="Tools"
        contentType="captions"
        currentRoute="/tools"
      />

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Creator Engineering" topic="Tool Architecture & AI Studios" />

      {/* 7 Structured FAQs */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About UniToolkit Creator Suite"
          subtitle="Everything you need to know about the 4 pillars, AI generation engines, and commercial licensing."
          faqs={TOOLS_FAQS}
        />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to supercharge your social presence?"
        subtitle="Explore our free AI generators above or copy hand-curated lines with 1-click."
      />
    </div>
  );
}
