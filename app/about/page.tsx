import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Sparkles, Heart, Users, Zap, ShieldCheck, Globe, CheckCircle2, Award, Target, BookOpen } from "lucide-react";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "About Us — Our Mission, Editorial Standards & Story | UniToolkit",
  description:
    "Discover the mission behind UniToolkit: empowering 100,000+ creators worldwide with 15,000+ hand-curated captions, viral status ideas, and ultra-fast AI generation tools.",
  alternates: {
    canonical: "/about",
  },
};

const ABOUT_FAQS = [
  {
    question: "What is UniToolkit and who is it built for?",
    answer:
      "UniToolkit is an all-in-one content creation suite built for social media creators, digital marketers, small business owners, and everyday storytellers. We combine a curated library of 15,000+ viral captions, WhatsApp statuses, and Hindi shayari with intelligent AI generation utilities, profile stylers, and hashtag builders.",
  },
  {
    question: "How are the captions and shayari on UniToolkit curated?",
    answer:
      "Every piece of content in our library goes through a multi-stage editorial review process. Our editors verify cultural relevance, emotional resonance, typography formatting, and line-break readability across Instagram, TikTok, WhatsApp, and LinkedIn.",
  },
  {
    question: "Is UniToolkit completely free to use?",
    answer:
      "Yes! 100% of our curated caption vaults, bio stylers, font converters, line-break formatters, and AI generation tools are completely free to use without requiring sign-up or credit card details.",
  },
  {
    question: "Do you store my personal data or prompts?",
    answer:
      "No. We respect creator privacy. Your prompts and generated text are processed in real-time in memory and never stored, indexed, or sold to third-party advertisers.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14 text-left">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Intro */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Vision & Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
          Empowering Creators to Speak Their Truth & Go Viral Faster.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          Posting great content on social media shouldn&apos;t come with 45 minutes of caption writer&apos;s block. UniToolkit was founded to solve a universal creative bottleneck: giving creators instant access to the world&apos;s most poetic, witty, savage, and aesthetic captions alongside lightning-fast AI generation tools.
        </p>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">15,000+</div>
          <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">Curated Captions & Lines</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">100K+</div>
          <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">Monthly Active Creators</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">22+</div>
          <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">Free Creator Engines</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">3 Languages</div>
          <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">English, Hinglish & Hindi</div>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            The 4 Pillars Behind UniToolkit
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            How we design every tool, dataset, and algorithm to serve modern storytellers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">1. Zero-Friction Speed</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No mandatory accounts, no captcha puzzles, and no gated paywalls. You find what you need and copy it with 1-click in under 3 seconds.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">2. High-Caliber Editorial Standards</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We reject bland generic quotes. Every caption, status, and Hindi couplet is filtered for punchy delivery, authentic emotion, and high engagement potential.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">3. Multi-Cultural & Multilingual Depth</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              From international aesthetic lines for Instagram and TikTok to soulful Devanagari Hindi Shayari and Romanized Hinglish statuses for WhatsApp, we celebrate cultural nuance.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">4. Absolute Creator Privacy</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We do not track your clipboard or store your personal prompt history. What you create on UniToolkit remains strictly yours.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Process & Quality Assurance */}
      <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Editorial Integrity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
            How We Curate & Train Our AI Engines
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Unlike auto-scraped spam websites, UniToolkit follows a strict human-in-the-loop curation and AI fine-tuning protocol:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>1. Trend Analysis</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We monitor emerging audio trends, meme formats, and cultural shifts across Instagram Reels, TikTok, and X to identify high-performing caption patterns.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>2. Formatting & Typography</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every item is tested for invisible line-break compatibility, emoji harmony, and mobile screen padding to ensure seamless copy-pasting.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>3. Continuous Updates</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Our content vault is updated weekly with fresh season-specific lines, festival wishes, motivation drops, and attitude status updates.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section with JSON-LD Schema */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About UniToolkit"
          subtitle="Everything you need to know about our platform, technology, and creator mission."
          faqs={ABOUT_FAQS}
        />
      </section>

      <JsonLdSchema type="FAQPage" faqs={ABOUT_FAQS} />

      <CTASection />
    </div>
  );
}
