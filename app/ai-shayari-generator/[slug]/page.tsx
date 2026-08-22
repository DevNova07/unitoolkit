import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AIShayariGenerator } from "@/components/generator/AIShayariGenerator";
import { AI_ENGINES_MAP } from "@/data/master300Architecture";

const SUBPAGES = AI_ENGINES_MAP["ai-shayari-generator"];

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
    title: `AI ${name} Shayari Generator — Hindi & Hinglish Couplets | UniToolkit`,
    description: `Generate authentic rhyming ${name.toLowerCase()} shayari, 2-line sher, and emotional couplets in Hindi and Hinglish with free AI.`,
    alternates: {
      canonical: `/ai-shayari-generator/${slug}`,
    },
    openGraph: {
      title: `AI ${name} Shayari Generator | UniToolkit`,
      description: `Generate ${name.toLowerCase()} shayari with free AI.`,
      url: `https://unitoolkit.com/ai-shayari-generator/${slug}`,
      type: "website",
    },
  };
}

export default async function AiShayariSubPage({ params }: PageProps) {
  const { slug } = await params;
  if (!SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  const faqs = [
    {
      question: `Does the AI maintain rhyming meter (Kaafiya & Radeef)?`,
      answer: `Yes, our AI engine understands traditional Urdu & Hindi poetry rules to craft proper rhyming couplets.`,
    },
    {
      question: `Can I copy and share generated couplets to WhatsApp?`,
      answer: `Yes, 1-click WhatsApp share and clipboard copy buttons are built-in.`,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`AI ${name} Shayari Generator`}
        description={`Free AI ${name} shayari generator creating rhyming Hindi couplets.`}
        url={`https://unitoolkit.com/ai-shayari-generator/${slug}`}
      />

      <div className="flex justify-center sm:justify-start">
        <Breadcrumbs
          items={[
            { label: "AI Shayari Generator", href: "/ai-shayari-generator" },
            { label: `${name} AI` },
          ]}
        />
      </div>

      <Suspense fallback={<div className="h-[400px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />}>
        <AIShayariGenerator />
      </Suspense>

      {/* Related AI Shayari Pages */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More AI Shayari Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {SUBPAGES.filter((p) => p !== slug).map((p) => (
            <Link
              key={p}
              href={`/ai-shayari-generator/${p}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-amber-500 hover:text-amber-600 transition-all capitalize"
            >
              AI {p} Shayari
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
