import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { WhatsAppStatusStudio } from "@/components/whatsapp/WhatsAppStatusStudio";
import { AI_ENGINES_MAP } from "@/data/master300Architecture";

const SUBPAGES = AI_ENGINES_MAP["ai-status-generator"];

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
    title: `AI ${name} Status Generator — WhatsApp & Social Media [2026] | UniToolkit`,
    description: `Generate authentic 2-line ${name.toLowerCase()} status lines with free AI. Live mobile preview and 1-click WhatsApp share.`,
    alternates: {
      canonical: `/ai-status-generator/${slug}`,
    },
    openGraph: {
      title: `AI ${name} Status Generator | UniToolkit`,
      description: `Generate ${name.toLowerCase()} status with free AI.`,
      url: `https://unitoolkit.com/ai-status-generator/${slug}`,
      type: "website",
    },
  };
}

export default async function AiStatusSubPage({ params }: PageProps) {
  const { slug } = await params;
  if (!SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  const faqs = [
    {
      question: `How do I share generated ${name} status lines?`,
      answer: `Click the WhatsApp button to open WhatsApp directly with pre-filled text, or use the 1-click copy button.`,
    },
    {
      question: `Does the AI generate Hindi and Hinglish status?`,
      answer: `Yes, our AI understands authentic Hindi script, Hinglish, and English prompts.`,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`AI ${name} Status Generator`}
        description={`Free AI ${name} status generator creating WhatsApp quotes.`}
        url={`https://unitoolkit.com/ai-status-generator/${slug}`}
      />

      <div className="flex justify-center sm:justify-start">
        <Breadcrumbs
          items={[
            { label: "AI Status Generator", href: "/ai-status-generator" },
            { label: `${name} AI` },
          ]}
        />
      </div>

      <Suspense fallback={<div className="h-[400px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />}>
        <WhatsAppStatusStudio />
      </Suspense>

      {/* Related AI Status Pages */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More AI Status Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {SUBPAGES.filter((p) => p !== slug).map((p) => (
            <Link
              key={p}
              href={`/ai-status-generator/${p}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all capitalize"
            >
              AI {p} Status
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
