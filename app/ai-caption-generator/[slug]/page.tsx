import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AIGeneratorStudio } from "@/components/generator/AIGeneratorStudio";
import { AI_ENGINES_MAP } from "@/data/master300Architecture";

const SUBPAGES = AI_ENGINES_MAP["ai-caption-generator"];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SUBPAGES.map((slug) => ({ slug }));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!SUBPAGES.includes(slug)) return { title: "Page Not Found" };

  const name = capitalize(slug);
  return {
    title: `AI ${name} Caption Generator Free — Viral Hooks & Tags | UniToolkit`,
    description: `Generate 10+ viral ${name} captions, reels hooks, and matching hashtags with free AI. 1-click copy without login.`,
    alternates: {
      canonical: `/ai-caption-generator/${slug}`,
    },
    openGraph: {
      title: `AI ${name} Caption Generator | UniToolkit`,
      description: `Generate viral ${name} captions with free AI.`,
      url: `https://unitoolkit.com/ai-caption-generator/${slug}`,
      type: "website",
    },
  };
}

export default async function AiCaptionSubPage({ params }: PageProps) {
  const { slug } = await params;
  if (!SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  const faqs = [
    {
      question: `How does the AI ${name} Caption Generator work?`,
      answer: `Enter your ${name} photo or video concept, select your tone, and our AI crafts 10+ scroll-stopping captions tailored to the platform algorithm.`,
    },
    {
      question: `Are these captions royalty-free for commercial posts?`,
      answer: `Yes, all generated captions are 100% royalty-free for personal and brand accounts.`,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="WebApplication"
        title={`AI ${name} Caption Generator Free — UniToolkit`}
        description={`Generate 10+ viral ${name} captions, reels hooks, and matching hashtags with free AI.`}
        url={`https://unitoolkit.com/ai-caption-generator/${slug}`}
      />
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`AI ${name} Caption Generator`}
        description={`Free AI ${name} caption generator creating viral posts and hooks.`}
        url={`https://unitoolkit.com/ai-caption-generator/${slug}`}
      />

      <div className="flex justify-center sm:justify-start">
        <Breadcrumbs
          items={[
            { label: "AI Caption Generator", href: "/ai-caption-generator" },
            { label: `${name} AI` },
          ]}
        />
      </div>

      {/* Main Interactive AI Generator Studio */}
      <Suspense fallback={<div className="h-[400px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />}>
        <AIGeneratorStudio initialTopic={`viral ${name} caption`} />
      </Suspense>

      {/* Ready-Made Caption Vault Links */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Prefer Hand-Curated Collections?</span>
          </h3>
          <Link
            href="/captions"
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>View All 20 Categories</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { label: "Attitude Captions", href: "/captions/attitude" },
            { label: "Love Captions", href: "/captions/love" },
            { label: "Short One-Liners", href: "/captions/short" },
            { label: "Aesthetic Lines", href: "/captions/aesthetic" },
            { label: "Funny Captions", href: "/captions/funny" },
            { label: "Travel Moments", href: "/captions/travel" },
            { label: "Gym & Fitness", href: "/captions/gym" },
            { label: `${name} Hub`, href: `/${slug.toLowerCase()}-captions` },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Related AI Caption Pages */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More AI Caption Engines
        </h3>
        <div className="flex flex-wrap gap-2">
          {SUBPAGES.filter((p) => p !== slug).map((p) => (
            <Link
              key={p}
              href={`/ai-caption-generator/${p}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all capitalize"
            >
              AI {p} Captions
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
