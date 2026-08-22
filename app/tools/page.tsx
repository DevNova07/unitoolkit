import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers, Wand2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { getCore5Tools, getToolsByCategory } from "@/data/toolsRegistry";
import { ToolCard } from "@/components/common/ToolCard";

export const metadata: Metadata = {
  title: "5 Creator Tools & 10 Platform Hubs | UniToolkit",
  description:
    "Explore 5 powerful creator engines: AI Captions, Hindi Shayari, WhatsApp Status, VIP Bio Generator, and Quotes Hub across 10 major social platforms.",
  alternates: {
    canonical: "/tools",
  },
};

const TOOLS_FAQS = [
  {
    question: "Which 5 tools are included on UniToolkit?",
    answer:
      "UniToolkit focuses on 5 core flagship tools: 1) Captions Studio & 15K+ Vault, 2) Hindi Shayari Vault, 3) WhatsApp Status & Quotes, 4) VIP Bio Generator & Styler, and 5) Quotes & Mindset Wisdom Hub.",
  },
  {
    question: "Are all 5 tools 100% free with unlimited uses?",
    answer:
      "Yes! Every tool and library on UniToolkit is completely free to use with no account registration, no credit cards, and no limits.",
  },
  {
    question: "Which 10 social platforms are supported?",
    answer:
      "We provide platform-specific hubs and formatting for Instagram, TikTok, YouTube, Facebook, LinkedIn, X (Twitter), Threads, Pinterest, Snapchat, and WhatsApp.",
  },
  {
    question: "Can I copy and share directly to WhatsApp?",
    answer:
      "Yes! Every caption, shayari, bio, and quote includes 1-click clipboard copy and a direct WhatsApp share button.",
  },
];

export default function ToolsHubPage() {
  const core5Tools = getCore5Tools();
  const platformTools = getToolsByCategory("platform");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 text-left">
      <Breadcrumbs items={[{ label: "Creator Tools" }]} />

      {/* Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>5 Core Engines • 10 Platforms</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          UniToolkit Creator Suite
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          High-performance utilities designed to generate, style, and share captions, shayari, status, bios, and quotes across 10 major platforms. 100% free with no sign-up required.
        </p>
      </div>

      {/* 1. THE 5 CORE TOOLS SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Wand2 className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                5 Flagship Creator Tools
              </h2>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Shayari, Status, Bio, Quotes, and Captions — engineered for viral engagement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {core5Tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* 2. THE 10 PLATFORMS SECTION */}
      <section className="space-y-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                10 Dedicated Platform Hubs
              </h2>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Captions and hooks tailored for each algorithm and audience.
            </p>
          </div>

          <Link
            href="/platforms"
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>View Platform Grids</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {platformTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} variant="compact" />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About Creator Tools"
          subtitle="Everything you need to know about using our free creator utilities."
          faqs={TOOLS_FAQS}
        />
      </section>

      <JsonLdSchema type="FAQPage" faqs={TOOLS_FAQS} />

      <CTASection />
    </div>
  );
}
