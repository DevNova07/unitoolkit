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
  Heart,
  Flame,
  BookOpen,
  Feather,
  Music,
  Share2,
} from "lucide-react";
import { AIShayariGenerator } from "@/components/generator/AIShayariGenerator";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";

export const metadata: Metadata = {
  title: "AI Hindi Shayari Generator Free — 2-Line & 4-Line Couplets in Devanagari & Hinglish [2026] | UniToolkit",
  description:
    "Generate authentic 2-line & 4-line Hindi Shayari in Devanagari script and Hinglish with our free AI Shayari Generator. Romantic Ishq, Dard, Royal Attitude & Dosti couplets with 1-click WhatsApp share.",
  keywords: [
    "AI Hindi shayari generator",
    "2 line shayari in Hindi AI",
    "love shayari generator online",
    "royal attitude shayari in Hindi",
    "dard bhari shayari AI",
    "Hinglish shayari generator free",
    "WhatsApp shayari 1 click share",
  ],
  alternates: {
    canonical: "/ai-shayari-generator",
  },
  openGraph: {
    title: "AI Hindi Shayari Generator Free — 2-Line Couplets [2026]",
    description: "Generate authentic 2-line & 4-line Hindi Shayari in Devanagari script and Hinglish with 1-click WhatsApp share.",
    url: "https://unitoolkit.com/ai-shayari-generator",
    type: "website",
  },
};

const SHAYARI_FAQS = [
  {
    question: "How does the AI generate rhyming Hindi poetry and Sher?",
    answer:
      "Our AI is trained on classical Urdu & Hindi meter (Bahr, Radif, and Qafiya). When you give a prompt like 'Pehle ishq ki khubsurat yaadein', it crafts couplets that follow authentic rhythmic cadence and emotional depth.",
  },
  {
    question: "Can I generate Shayari in both Devanagari Hindi (हिंदी) and Hinglish?",
    answer:
      "Yes! You can toggle between हिंदी (Devanagari) and Hinglish (Roman English) above the prompt box. The AI adapts the script without losing the poetic emotion.",
  },
  {
    question: "How do I share the generated Shayari to WhatsApp Status or Instagram Stories?",
    answer:
      "Click the green '🟢 WhatsApp' button below any shayari to immediately open WhatsApp with your lines pre-formatted, or click 'Copy' to paste into Instagram Reels, Story overlays, or Facebook posts.",
  },
  {
    question: "What categories of Shayari are available?",
    answer:
      "You can generate Mohabbat & Ishq (Love), Dard & Tanhai (Sad), Royal Attitude (Badmashi), Yaari & Dosti (Friendship), and Zindagi & Sukoon (Philosophical) couplets.",
  },
  {
    question: "Is the AI Shayari Generator 100% free with unlimited generation?",
    answer:
      "Yes! UniToolkit AI Shayari Studio is completely free forever with no limits, no login required, and no subscription fees.",
  },
];

export default function AIShayariPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12 sm:space-y-16 text-left">
      {/* 1. Google Schema.org JSON-LD Structured Data */}
      <JsonLdSchema
        type="WebApplication"
        title="AI Hindi Shayari Generator & Ghazal Studio"
        description="Free AI poetry generator crafting authentic 2-line and 4-line Hindi & Hinglish Shayari with 1-click WhatsApp sharing."
        url="https://unitoolkit.com/ai-shayari-generator"
      />
      <JsonLdSchema
        type="FAQPage"
        faqs={SHAYARI_FAQS}
        title="AI Hindi Shayari Generator FAQ"
        description="Frequently asked questions about creating authentic Hindi and Hinglish rhyming poetry."
        url="https://unitoolkit.com/ai-shayari-generator"
      />

      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "Shayari", href: "/shayari" },
          { label: "AI Hindi Shayari" },
        ]}
      />

      {/* 2. Main Hero & Interactive AI Generator Studio Tool */}
      <AIShayariGenerator />

      {/* 3. Section: How to Create Authentic 2-Line Shayari (Google HowTo Schema) */}
      <HowToUseGuide
        guideId="ai-shayari-generator"
        pageUrl="https://unitoolkit.com/ai-shayari-generator"
      />

      {/* 4. Section: 6 AI Poetry Features */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-xs font-bold text-red-600 dark:text-red-400">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Poetic Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Why Poetry Lovers Choose UniToolkit AI Shayari Studio
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Designed to preserve classical poetic harmony while creating relatable contemporary couplets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {/* Feature 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-amber-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Authentic Rhyme & Meter
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every couplet follows traditional rhythmic rules with proper end-rhymes (Radif & Qafiya) for smooth reading cadence.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Mohabbat & Ishq Romance
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Deep romantic feelings, sweet compliments, and heartfelt couplets crafted for anniversaries and love expressions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-red-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Royal Attitude & Badmashi
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Bold, unapologetic couplets for boss moves, fierce self-respect, and commanding status updates.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-blue-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Reels Voiceover Ready
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Formatted with natural pauses, making them perfect for voiceover recordings and slowed + reverb acoustic reels.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-emerald-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              1-Click Direct WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              One tap opens your WhatsApp app with your shayari pre-loaded, ready to send as your 24-hour status or direct message.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-cyan-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              100% Free & Unlimited
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Generate as many couplets as you desire without registration, credit cards, or paywalls.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Section: Browse Ready-Made Shayari Collections */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Explore 1,500+ Curated Hindi & Urdu Shayari
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Browse our ready-made poetry vaults organized by mood, sentiment, and occasion.
            </p>
          </div>
          <Link
            href="/shayari"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline"
          >
            <span>View All Shayari Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: "Mohabbat & Ishq", href: "/shayari/love", count: "350+ lines" },
            { label: "Dard & Tanhai", href: "/shayari/sad", count: "280+ lines" },
            { label: "Royal Attitude Sher", href: "/shayari/attitude", count: "310+ lines" },
            { label: "Dosti Yaari Shayari", href: "/shayari/dosti", count: "240+ lines" },
            { label: "Romantic 2-Liners", href: "/shayari/romantic", count: "290+ lines" },
            { label: "Bewafa & Breakup", href: "/shayari/bewafa", count: "190+ lines" },
            { label: "Hindi Status Quotes", href: "/hindi-status", count: "220+ lines" },
            { label: "WhatsApp Shayari Hub", href: "/whatsapp-shayari", count: "180+ lines" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all flex items-center justify-between shadow-2xs group"
            >
              <div className="space-y-0.5 truncate">
                <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                  {item.label}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.count}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
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
            href="/ai-status-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">🟢</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI WhatsApp Status</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">2-line viral status quotes with 1-click WhatsApp share.</p>
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
            href="/ai-bio-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">👑</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Bio Generator</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Aesthetic VIP attitude bios with clean line breaks and fonts.</p>
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
      <AuthorBioBox categoryType="Hindi & Urdu Literature" topic="Shayari & Poetic Couplets" />

      {/* 8. FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions (FAQ)"
        subtitle="Common questions about our AI shayari generator, poetic meter, and WhatsApp sharing."
        faqs={SHAYARI_FAQS}
      />

      {/* 9. Final Call to Action */}
      <CTASection
        title="Ready to create heartfelt poetry?"
        subtitle="Use our free AI studio above to generate unlimited rhyming couplets in Hindi & Hinglish."
      />
    </div>
  );
}
