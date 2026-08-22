import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Copy } from "lucide-react";
import { CaptionCard } from "@/components/captions/CaptionCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { INSTAGRAM_CAPTIONS_SUBPAGES, getSeoBlueprintPage } from "@/data/seoBlueprintData";
import { CAPTIONS_DATA } from "@/data/captionsData";
import { LONG_TAIL_45_MAP } from "@/data/master300Architecture";

interface PageProps {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return LONG_TAIL_45_MAP["instagram-captions"].map((slug) => ({
    subslug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subslug } = await params;
  const pageInfo = getSeoBlueprintPage("instagram", subslug);

  if (!pageInfo) {
    return { title: "Page Not Found" };
  }

  return {
    title: pageInfo.metaTitle,
    description: pageInfo.metaDescription,
    alternates: {
      canonical: `/instagram-captions/${pageInfo.slug}`,
    },
    openGraph: {
      title: `${pageInfo.title} | Unitoolkit`,
      description: pageInfo.metaDescription,
      url: `https://unitoolkit.com/instagram-captions/${pageInfo.slug}`,
      type: "article",
    },
  };
}

export default async function InstagramIntentSubPage({ params }: PageProps) {
  const { subslug } = await params;
  const pageInfo = getSeoBlueprintPage("instagram", subslug);

  if (!pageInfo) {
    notFound();
  }

  // Filter matching captions or fallback to samples
  const matchedCaptions = CAPTIONS_DATA.filter((c) => {
    if (pageInfo.categoryFilter) {
      return (
        c.category.toLowerCase() === pageInfo.categoryFilter.toLowerCase() ||
        c.category.toLowerCase().includes(subslug.toLowerCase()) ||
        c.hashtags?.some((h) => h.toLowerCase().includes(subslug.toLowerCase()))
      );
    }
    return (
      c.platform === "instagram" ||
      c.category.toLowerCase().includes(subslug.toLowerCase()) ||
      c.hashtags?.some((h) => h.toLowerCase().includes(subslug.toLowerCase()))
    );
  }).slice(0, 30);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={pageInfo.faqs}
        title={pageInfo.title}
        description={pageInfo.metaDescription}
        url={`https://unitoolkit.com/instagram-captions/${pageInfo.slug}`}
      />

      <Breadcrumbs
        items={[
          { label: "Instagram Captions", href: "/instagram-captions" },
          { label: pageInfo.badge },
        ]}
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{pageInfo.badge} • Curated Collection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          {pageInfo.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {pageInfo.subheading}
        </p>
      </div>

      {/* Quick AI Action Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-pink-500/10 via-rose-500/10 to-transparent border border-pink-200/80 dark:border-pink-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Need a custom {pageInfo.badge} caption?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Generate customized, viral Instagram lines with our free AI tool.
          </p>
        </div>
        <Link
          href={`/ai-caption-generator?topic=${encodeURIComponent(pageInfo.primaryKeyword)}`}
          className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Generate with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Featured Highlighted Samples */}
      {pageInfo.sampleItems && pageInfo.sampleItems.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              Handpicked {pageInfo.badge} Quotes
            </h2>
            <span className="text-xs font-bold text-pink-600 dark:text-pink-400">1-Click Copy</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pageInfo.sampleItems.map((sample, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed"
              >
                {sample}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Captions Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            All Curated {pageInfo.badge} Captions
          </h2>
          <span className="text-xs text-zinc-500">
            {matchedCaptions.length} Lines Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matchedCaptions.map((caption) => (
            <CaptionCard key={caption.id} caption={caption} />
          ))}
        </div>
      </section>

      {/* Related Instagram Clusters */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Related Instagram Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {INSTAGRAM_CAPTIONS_SUBPAGES.filter((p) => p.slug !== pageInfo.slug).map((item) => (
            <Link
              key={item.slug}
              href={`/instagram-captions/${item.slug}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-pink-500 hover:text-pink-600 transition-all"
            >
              {item.badge}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={pageInfo.faqs} />

      <CTASection />
    </div>
  );
}
