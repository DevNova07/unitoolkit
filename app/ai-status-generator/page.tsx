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
  MessageCircle,
  Share2,
  Heart,
  Flame,
  Moon,
  Sun,
} from "lucide-react";
import { AIStatusGenerator } from "@/components/generator/AIStatusGenerator";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";

export const metadata: Metadata = {
  title: "AI WhatsApp Status Generator Free — Attitude, Love, Sad & Sukoon Quotes [2026] | UniToolkit",
  description:
    "Generate 10+ viral 2-line WhatsApp status quotes in Hindi & English with our free AI Status Generator. Direct 1-click WhatsApp share, attitude, love, and sukoon lines.",
  keywords: [
    "AI WhatsApp status generator",
    "Hindi WhatsApp status AI",
    "2 line attitude status generator",
    "love status generator for WhatsApp",
    "Hinglish status quotes AI",
    "sad emotional status 1 click share",
  ],
  alternates: {
    canonical: "/ai-status-generator",
  },
  openGraph: {
    title: "AI WhatsApp Status Generator Free — 2-Line Quotes [2026]",
    description: "Generate viral 2-line WhatsApp status quotes in Hindi & English with 1-click WhatsApp share.",
    url: "https://unitoolkit.com/ai-status-generator",
    type: "website",
  },
};

const STATUS_FAQS = [
  {
    question: "How do I post an AI generated status directly to my WhatsApp?",
    answer:
      "Click the green '🟢 WhatsApp' button below any generated line. It will immediately open your WhatsApp app with the quote pre-formatted, so you can share it directly to 'My Status' or send to any chat in one tap.",
  },
  {
    question: "Can I generate WhatsApp status in Hindi Devanagari and Hinglish?",
    answer:
      "Yes! Our AI supports authentic Hindi (हिंदी देवनागरी), Hinglish (Roman English), and pure English. Select your preferred language option above the input bar.",
  },
  {
    question: "What types of WhatsApp status moods are supported?",
    answer:
      "You can generate Royal Attitude, Deep Love & Romance, Sad & Alone, Morning Sukoon, Motivational Hustle, and Late Night Thoughts status lines.",
  },
  {
    question: "Is there any limit to how many status lines I can generate?",
    answer:
      "No! UniToolkit AI WhatsApp Status Studio is 100% free with unlimited generations and no account needed.",
  },
];

export default function AIStatusPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12 sm:space-y-16 text-left">
      {/* 1. Google Schema.org JSON-LD Structured Data */}
      <JsonLdSchema
        type="WebApplication"
        title="AI WhatsApp Status Generator & Studio"
        description="Free AI status generator crafting viral 2-line quotes with direct 1-click WhatsApp sharing."
        url="https://unitoolkit.com/ai-status-generator"
      />
      <JsonLdSchema
        type="FAQPage"
        faqs={STATUS_FAQS}
        title="AI WhatsApp Status Generator FAQ"
        description="Frequently asked questions about creating and sharing 2-line WhatsApp status quotes."
        url="https://unitoolkit.com/ai-status-generator"
      />

      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "Status", href: "/status" },
          { label: "AI WhatsApp Status" },
        ]}
      />

      {/* 2. Main Hero & Interactive AI Generator Studio Tool */}
      <AIStatusGenerator />

      {/* 3. Section: How to Generate & Post WhatsApp Status (Google HowTo Schema) */}
      <HowToUseGuide
        guideId="ai-status-generator"
        pageUrl="https://unitoolkit.com/ai-status-generator"
      />

      {/* 4. Section: 6 Core WhatsApp Status Features */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-xs font-bold text-teal-600 dark:text-teal-400">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Engine Features</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Engineered for Daily WhatsApp & Story Sharing
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Clean 2-line couplets that capture deep emotions without taking up your entire phone screen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {/* Feature 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-emerald-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Instant 1-Click WhatsApp Send
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No need to copy-paste manually. The direct WhatsApp API protocol loads your status directly into the app.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-teal-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Hindi Devanagari & Hinglish
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Authentic Indian linguistic expressions crafted in both classic Devanagari and modern Roman Hinglish.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-amber-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Royal Attitude & Savage Lines
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Punchy badmashi lines, silent moves, and boss-mode status thoughts that command respect.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Romantic & Emotional Couplets
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Touch hearts with deep love quotes, late-night missing you feelings, and poetic romance.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-cyan-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <Moon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Late Night Sukoon & Zindagi
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Philosophical thoughts about peace, solitude, mountains, and life lessons for thoughtful nights.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-emerald-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              100% Free Forever
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Generate as many status updates as you want with zero limits, zero ads, and no sign-up.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Section: Browse Ready-Made WhatsApp Status Collections */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Explore 1,000+ Curated WhatsApp Status Quotes
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Browse our ready-made status vaults organized by mood, emotion, and language.
            </p>
          </div>
          <Link
            href="/status"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>View All Status Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: "Attitude Status", href: "/status/attitude", count: "250+ lines" },
            { label: "Love Status", href: "/status/love", count: "220+ lines" },
            { label: "Sad & Alone Status", href: "/status/sad", count: "190+ lines" },
            { label: "Morning Motivation", href: "/status/motivational", count: "140+ lines" },
            { label: "Romantic 2-Line Status", href: "/status/romantic", count: "180+ lines" },
            { label: "Life & Sukoon Status", href: "/status/life", count: "130+ lines" },
            { label: "WhatsApp Captions Hub", href: "/whatsapp-captions", count: "150+ lines" },
            { label: "Hindi 2-Line Status", href: "/hindi-status", count: "200+ lines" },
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
            href="/ai-shayari-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">📜</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Hindi Shayari</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Authentic 2-line rhyming poetry in Hindi Devanagari & Hinglish.</p>
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
            href="/ai-caption-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">✨</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Caption Studio</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Create 10+ viral hooks and captions for Reels and TikTok.</p>
          </Link>

          <Link
            href="/ai-baby-name-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">👶</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Baby Name Studio</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Modern auspicious baby names with audio pronunciation.</p>
          </Link>
        </div>
      </section>

      {/* 7. E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Status & Social Quotes" topic="WhatsApp Daily Quotes & Couplets" />

      {/* 8. FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions (FAQ)"
        subtitle="Common questions about our AI status generator, WhatsApp 1-click sharing, and Hindi support."
        faqs={STATUS_FAQS}
      />

      {/* 9. Final Call to Action */}
      <CTASection
        title="Ready to share a fresh status today?"
        subtitle="Use our free AI studio above to generate unlimited attitude, love, and sukoon quotes."
      />
    </div>
  );
}
