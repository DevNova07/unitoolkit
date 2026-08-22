import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { User, Sparkles, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AIBioGenerator } from "@/components/generator/AIBioGenerator";
import { AI_ENGINES_MAP } from "@/data/master300Architecture";

const SUBPAGES = AI_ENGINES_MAP["ai-bio-generator"];

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
    title: `AI ${name} Bio Generator — Aesthetic & VIP Profile Bios | UniToolkit`,
    description: `Generate aesthetic, VIP attitude, and professional ${name} profile bios with Gemini AI. Includes clean line breaks and 1-click copy.`,
    alternates: {
      canonical: `/ai-bio-generator/${slug}`,
    },
    openGraph: {
      title: `AI ${name} Bio Generator | UniToolkit`,
      description: `Generate aesthetic ${name} bios with free AI.`,
      url: `https://unitoolkit.com/ai-bio-generator/${slug}`,
      type: "website",
    },
  };
}

export default async function AiBioSubPage({ params }: PageProps) {
  const { slug } = await params;
  if (!SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  const faqs = [
    {
      question: `How does the AI ${name} Bio Generator work?`,
      answer: `Enter your niche and desired vibe to generate 10+ personalized ${name} bios formatted with clean line breaks and emojis.`,
    },
    {
      question: `Do these bios fit the ${name} character limit?`,
      answer: `Yes, each generated bio is strictly checked against ${name} profile constraints.`,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`AI ${name} Bio Generator`}
        description={`Free AI ${name} bio generator creating aesthetic profiles.`}
        url={`https://unitoolkit.com/ai-bio-generator/${slug}`}
      />

      <div className="flex justify-center sm:justify-start">
        <Breadcrumbs
          items={[
            { label: "AI Bio Generator", href: "/ai-bio-generator" },
            { label: `${name} AI` },
          ]}
        />
      </div>

      <Suspense fallback={<div className="h-[400px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />}>
        <AIBioGenerator />
      </Suspense>

      {/* Related AI Bio Pages */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More AI Bio Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {SUBPAGES.filter((p) => p !== slug).map((p) => (
            <Link
              key={p}
              href={`/ai-bio-generator/${p}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-pink-500 hover:text-pink-600 transition-all capitalize"
            >
              AI {p} Bio
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
