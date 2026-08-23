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
  Crown,
  Type,
  AlignLeft,
  Smartphone,
  Eye,
} from "lucide-react";
import { AIBioGenerator } from "@/components/generator/AIBioGenerator";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";

export const metadata: Metadata = {
  title: "AI Bio Generator Free — Aesthetic & VIP Attitude Bios for Instagram & TikTok [2026] | UniToolkit",
  description:
    "Generate 10+ aesthetic, VIP attitude, boys swag, and professional profile bios with our free AI Bio Generator. Clean line breaks, unicode stylish fonts, and 1-click copy.",
  keywords: [
    "AI bio generator",
    "Instagram bio generator AI",
    "VIP attitude bio for Instagram",
    "aesthetic bio styler",
    "boys swag bio copy paste",
    "TikTok bio generator",
    "professional LinkedIn bio AI",
  ],
  alternates: {
    canonical: "/ai-bio-generator",
  },
  openGraph: {
    title: "AI Bio Generator Free — Aesthetic & VIP Profile Bios [2026]",
    description: "Generate 10+ aesthetic, VIP attitude, and professional profile bios with clean line breaks and fonts.",
    url: "https://unitoolkit.com/ai-bio-generator",
    type: "website",
  },
};

const BIO_FAQS = [
  {
    question: "How does the AI Bio Generator format multi-line bios with clean line breaks?",
    answer:
      "Our AI uses invisible non-breaking Unicode line spacers that prevent Instagram, TikTok, and Twitter from collapsing your bio lines into an unreadable single paragraph. You can copy and paste directly into your profile.",
  },
  {
    question: "Can I generate VIP attitude bios with stylish fonts and emojis?",
    answer:
      "Yes! You can choose the VIP Attitude preset or type keywords like 'Royal attitude boy from Delhi' or 'Aesthetic pastel girl'. The AI automatically formats aesthetic bullet points (👑, ⚡, 📍, 🎯, 🖤) and stylish typography.",
  },
  {
    question: "What is the maximum character limit for Instagram and TikTok bios?",
    answer:
      "Instagram bios allow up to 150 characters, TikTok allows 80 characters, and Twitter (X) allows 160 characters. Our AI optimizes your bio to fit within these limits while maximizing visual impact.",
  },
  {
    question: "Can I use these bios for business and creator profiles?",
    answer:
      "Yes! All generated bios are 100% royalty-free and can be used for personal accounts, startup founders, digital creators, agency pages, and influencer profiles.",
  },
  {
    question: "Is the AI Bio Generator completely free?",
    answer:
      "Yes! UniToolkit AI Bio Generator is 100% free with unlimited generations. No credit card, account registration, or subscription is required.",
  },
];

export default function AIBioPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12 sm:space-y-16 text-left">
      {/* 1. Google Schema.org JSON-LD Structured Data */}
      <JsonLdSchema
        type="WebApplication"
        title="AI Bio Generator & VIP Font Styler"
        description="Free AI bio generator crafting aesthetic, VIP attitude, and professional profile bios with clean line breaks."
        url="https://unitoolkit.com/ai-bio-generator"
      />
      <JsonLdSchema
        type="FAQPage"
        faqs={BIO_FAQS}
        title="AI Bio Generator FAQ"
        description="Frequently asked questions about creating aesthetic, VIP, and professional social media profile bios."
        url="https://unitoolkit.com/ai-bio-generator"
      />

      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "Bios", href: "/bios" },
          { label: "AI Bio Generator" },
        ]}
      />

      {/* 2. Main Hero & Interactive AI Generator Studio Tool */}
      <AIBioGenerator />

      {/* 3. Section: How to Build a High-Conversion Bio (Google HowTo Schema) */}
      <HowToUseGuide
        guideId="ai-bio-generator"
        pageUrl="https://unitoolkit.com/ai-bio-generator"
      />

      {/* 4. Section: 6 AI-Powered Bio Features */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-bold text-purple-600 dark:text-purple-400">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Profile Styling Features</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Why Creators Choose UniToolkit AI Bio Generator
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Everything you need to turn casual profile visitors into loyal followers with professional typography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {/* Feature 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-pink-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center">
              <AlignLeft className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Permanent Line-Break Preservation
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our specialized formatting ensures that every line break and aesthetic spacing is preserved without collapsing on mobile apps.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-purple-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Crown className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              VIP Attitude & Royal Bullet Points
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Curated symbols (👑, ⚡, 📍, 🎯, 🖤, 🕊️) placed strategically to give your profile an elite, commanding presence.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-amber-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Type className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Unicode Aesthetic Font Styling
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Seamlessly blends readable cursive, bold, and minimal font variations that render smoothly across iOS and Android.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-emerald-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Character-Limit Adherence
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Generates copy perfectly proportioned to Instagram&apos;s 150-char limit and TikTok&apos;s 80-char limit to prevent cutoffs.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              High-CTR Profile Hook Structure
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Follows the proven 3-tier bio architecture: Who you are → What makes you unique → Compelling Call to Action.
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
              Generate as many bio variations as you need without signup, paywalls, or limits.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Section: The 2026 Profile Bio Optimization Checklist */}
      <section className="p-6 sm:p-10 rounded-3xl bg-linear-to-br from-pink-50/50 via-purple-50/30 to-white dark:from-zinc-900 dark:via-zinc-900/60 dark:to-zinc-950 border border-pink-100 dark:border-zinc-800 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/60 text-pink-700 dark:text-pink-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>Profile Optimization Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white">
            The 4-Step Social Media Bio Checklist for 2026
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Before setting your bio, make sure your profile includes these four high-converting elements:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>1. Clear One-Line Value Proposition</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Tell visitors immediately who you are and why they should follow you (e.g. <em>&quot;Building startups in public&quot;</em> or <em>&quot;Daily mindset & fitness routines&quot;</em>).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>2. Visual Hierarchy with Emojis</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Use at most 3 to 4 tasteful emojis at the start of each line to guide the reader&apos;s eyes downward without visual clutter.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>3. Location / Credibility Anchor</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Add your city, college, brand, or current obsession (e.g. 📍 Mumbai | Tech Founder 🚀) to establish instant relatability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>4. Clear Call to Action (CTA)</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              End with an invitation: <em>&quot;✉️ DMs open for collabs&quot;</em>, <em>&quot;👇 Latest YouTube drop below&quot;</em>, or <em>&quot;✨ Join our creator community&quot;</em>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Section: Browse Ready-Made Bio Collections */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Explore 500+ Curated Social Media Bios
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Browse our ready-made bio vaults organized by style, audience, and platform.
            </p>
          </div>
          <Link
            href="/bios"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pink-600 dark:text-pink-400 hover:underline"
          >
            <span>View All Bio Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: "VIP Attitude Bios", href: "/bios/attitude", count: "180+ lines" },
            { label: "Aesthetic Bios", href: "/bios/aesthetic", count: "150+ lines" },
            { label: "Boys Swag Bios", href: "/bios/boys", count: "200+ lines" },
            { label: "Girls Aesthetic Bios", href: "/bios/girls", count: "160+ lines" },
            { label: "Professional Bios", href: "/bios/professional", count: "95+ lines" },
            { label: "Short 1-Line Bios", href: "/bios/short", count: "110+ lines" },
            { label: "Instagram Bio Styler", href: "/instagram-bio", count: "140+ lines" },
            { label: "WhatsApp About Quotes", href: "/whatsapp-bio", count: "120+ lines" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all flex items-center justify-between shadow-2xs group"
            >
              <div className="space-y-0.5 truncate">
                <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors truncate">
                  {item.label}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.count}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Section: Related Creator Studios */}
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
            href="/tools/fancy-font-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">𝔉</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Fancy Font Generator</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Convert plain text into 30+ VIP Unicode stylish fonts.</p>
          </Link>

          <Link
            href="/tools/username-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">⚡</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Username Generator</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Rare, aesthetic handles for Instagram and TikTok.</p>
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
            href="/ai-status-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">🟢</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI WhatsApp Status</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">2-line viral status quotes with 1-click WhatsApp share.</p>
          </Link>
        </div>
      </section>

      {/* 8. E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Social Media Copywriting" topic="Profile Bios & Typography" />

      {/* Deep Topic Cluster Silo Linking (Pillar 5) */}
      <TopicClusterSiloCloud
        topic="Bios"
        contentType="bio"
        currentRoute="/ai-bio-generator"
      />

      {/* 9. FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions (FAQ)"
        subtitle="Common questions about our AI bio generator, line breaks, and Instagram character limits."
        faqs={BIO_FAQS}
      />

      {/* 10. Final Call to Action */}
      <CTASection
        title="Ready to transform your social profile?"
        subtitle="Use our free AI studio above to generate unlimited aesthetic, VIP, and professional bios."
      />
    </div>
  );
}
