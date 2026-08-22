import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Quote, Sparkles, ArrowRight, Copy } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { PILLAR_QUOTES_SUBPAGES } from "@/data/master300Architecture";
import { QUOTE_SECTIONS } from "@/data/quotesData";

interface PageProps {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return PILLAR_QUOTES_SUBPAGES.map((subslug) => ({ subslug }));
}

function capitalize(s: string) {
  return s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subslug } = await params;
  if (!PILLAR_QUOTES_SUBPAGES.includes(subslug)) {
    return { title: "Quotes Not Found" };
  }

  const name = capitalize(subslug);
  return {
    title: `${name} Quotes for Inspiration & Mindset [2026] | UniToolkit`,
    description: `Discover 50+ best ${name.toLowerCase()} quotes for Instagram, LinkedIn, and personal growth with 1-click copy.`,
    alternates: {
      canonical: `/quotes/${subslug}`,
    },
    openGraph: {
      title: `${name} Quotes | UniToolkit`,
      description: `Best ${name.toLowerCase()} quotes and mindset lessons.`,
      url: `https://unitoolkit.com/quotes/${subslug}`,
      type: "article",
    },
  };
}

export default async function QuoteSubpage({ params }: PageProps) {
  const { subslug } = await params;
  if (!PILLAR_QUOTES_SUBPAGES.includes(subslug)) {
    notFound();
  }

  const name = capitalize(subslug);
  const allQuotes = QUOTE_SECTIONS.flatMap((s) => s.items);
  const matchingQuotes = allQuotes.filter((q) => {
    return (
      q.category.toLowerCase().includes(subslug.toLowerCase()) ||
      q.quote.toLowerCase().includes(subslug.toLowerCase())
    );
  }).slice(0, 25).map((q) => ({ id: q.id, text: q.quote, author: q.author }));

  const fallbackQuotes = [
    { id: "q1", text: "Silence is the best answer to those who don't value your words.", author: "Marcus Aurelius" },
    { id: "q2", text: "Do not pray for an easy life, pray for the strength to endure a difficult one.", author: "Bruce Lee" },
    { id: "q3", text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
    { id: "q4", text: "Work in silence, let your success be your noise.", author: "Frank Ocean" },
  ];

  const items = matchingQuotes.length > 0 ? matchingQuotes : fallbackQuotes;

  const faqs = [
    {
      question: `How do I copy these ${name} quotes?`,
      answer: `Click any card to copy the quote text directly to your clipboard.`,
    },
    {
      question: `Can I generate custom quotes with AI?`,
      answer: `Yes, click 'Generate with AI' to compose unique mindset and wisdom quotes.`,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`${name} Quotes for Inspiration`}
        description={`Best ${name.toLowerCase()} quotes for social media.`}
        url={`https://unitoolkit.com/quotes/${subslug}`}
      />

      <Breadcrumbs
        items={[
          { label: "Quotes Vault", href: "/quotes" },
          { label: `${name} Quotes` },
        ]}
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-950/60 border border-yellow-200/60 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400 text-xs font-bold shadow-2xs">
          <Quote className="w-3.5 h-3.5 fill-current" />
          <span>{name} • Mindset & Wisdom</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Best {name} Quotes for Inspiration
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Curated {name.toLowerCase()} quotes and mindset lessons for social media creators and daily focus.
        </p>
      </div>

      {/* AI Action Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-yellow-500/10 via-amber-500/10 to-transparent border border-yellow-200/80 dark:border-yellow-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Quote className="w-4 h-4 text-yellow-500" />
            <span>Generate custom {name} quotes with AI?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Create high-conviction mindset and philosophy quotes in seconds.
          </p>
        </div>
        <Link
          href={`/ai-quotes-generator?topic=${encodeURIComponent(name + " quotes")}`}
          className="px-5 py-2.5 rounded-xl bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Generate with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Quotes Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Top {name} Quotes
          </h2>
          <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">1-Click Copy Ready</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((quote, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between gap-3 text-sm text-zinc-800 dark:text-zinc-200 font-medium hover:border-yellow-500/50 transition-all shadow-xs"
            >
              <p className="leading-relaxed">&ldquo;{quote.text}&rdquo;</p>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50 text-xs text-zinc-400">
                <span>— {quote.author || "Anonymous"}</span>
                <span className="text-yellow-600 dark:text-yellow-400 font-bold">#Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Categories */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More Quote Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {PILLAR_QUOTES_SUBPAGES.filter((s) => s !== subslug).map((item) => (
            <Link
              key={item}
              href={`/quotes/${item}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-yellow-500 hover:text-yellow-600 transition-all capitalize"
            >
              {capitalize(item)} Quotes
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
