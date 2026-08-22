import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Quote, Sparkles, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AIQuotesGenerator } from "@/components/generator/AIQuotesGenerator";
import { AI_ENGINES_MAP } from "@/data/master300Architecture";

const SUBPAGES = AI_ENGINES_MAP["ai-quotes-generator"];

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
    title: `AI ${name} Quote Generator — Mindset & Wisdom with Viral Tags | UniToolkit`,
    description: `Generate high-conviction ${name.toLowerCase()} quotes, stoic wisdom lessons, and viral matching hashtags with Gemini AI.`,
    alternates: {
      canonical: `/ai-quotes-generator/${slug}`,
    },
    openGraph: {
      title: `AI ${name} Quote Generator | UniToolkit`,
      description: `Generate ${name.toLowerCase()} quotes with free AI.`,
      url: `https://unitoolkit.com/ai-quotes-generator/${slug}`,
      type: "website",
    },
  };
}

export default async function AiQuotesSubPage({ params }: PageProps) {
  const { slug } = await params;
  if (!SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  const faqs = [
    {
      question: `How does the AI ${name} Quote Generator work?`,
      answer: `Enter your theme and our AI creates high-impact ${name.toLowerCase()} quotes with matching viral hashtags.`,
    },
    {
      question: `Can I download quote cards for stories?`,
      answer: `Yes, 1-click export to 9:16 Story and 1:1 Square visual graphics is available for each quote.`,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`AI ${name} Quote Generator`}
        description={`Free AI ${name} quote generator creating viral mindset quotes.`}
        url={`https://unitoolkit.com/ai-quotes-generator/${slug}`}
      />

      <div className="flex justify-center sm:justify-start">
        <Breadcrumbs
          items={[
            { label: "AI Quotes Generator", href: "/ai-quotes-generator" },
            { label: `${name} AI` },
          ]}
        />
      </div>

      <Suspense fallback={<div className="h-[400px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />}>
        <AIQuotesGenerator />
      </Suspense>

      {/* Related AI Quotes Pages */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More AI Quote Engines
        </h3>
        <div className="flex flex-wrap gap-2">
          {SUBPAGES.filter((p) => p !== slug).map((p) => (
            <Link
              key={p}
              href={`/ai-quotes-generator/${p}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-yellow-500 hover:text-yellow-600 transition-all capitalize"
            >
              AI {p} Quotes
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
