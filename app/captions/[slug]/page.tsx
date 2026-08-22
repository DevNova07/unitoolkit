import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { CaptionCard } from "@/components/captions/CaptionCard";
import { SearchIntentGuide } from "@/components/common/SearchIntentGuide";
import { CAPTIONS_DATA } from "@/data/captionsData";
import { PILLAR_CAPTIONS_SUBPAGES } from "@/data/master300Architecture";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PILLAR_CAPTIONS_SUBPAGES.map((slug) => ({ slug }));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!PILLAR_CAPTIONS_SUBPAGES.includes(slug)) {
    return { title: "Captions Not Found" };
  }

  const name = capitalize(slug);
  return {
    title: `${name} Captions for Social Media [2026] | UniToolkit`,
    description: `Explore 50+ best ${name.toLowerCase()} captions for Instagram, TikTok, and YouTube with 1-click copy and instant AI variations.`,
    alternates: {
      canonical: `/captions/${slug}`,
    },
    openGraph: {
      title: `${name} Captions for Instagram & Social Media | UniToolkit`,
      description: `Best ${name.toLowerCase()} captions for photos, reels, and stories.`,
      url: `https://unitoolkit.com/captions/${slug}`,
      type: "article",
    },
  };
}

export default async function CaptionsSubpage({ params }: PageProps) {
  const { slug } = await params;
  if (!PILLAR_CAPTIONS_SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  let matchingCaptions = CAPTIONS_DATA.filter((c) => {
    return (
      c.category.toLowerCase().includes(slug.toLowerCase()) ||
      c.style.toLowerCase().includes(slug.toLowerCase()) ||
      c.text.toLowerCase().includes(slug.toLowerCase())
    );
  }).slice(0, 30);

  if (matchingCaptions.length < 8) {
    const additional = CAPTIONS_DATA.slice(0, 15 - matchingCaptions.length);
    matchingCaptions = [...matchingCaptions, ...additional];
  }

  const faqs = [
    {
      question: `How do I use these ${name} captions for maximum engagement?`,
      answer: `Click any card or the copy button to copy directly to your clipboard. Pair it with 3-5 relevant hashtags and post during peak activity hours for your audience.`,
    },
    {
      question: `Are these captions optimized for Instagram Reels and TikTok?`,
      answer: `Yes, each line is crafted with strong curiosity hooks and formatted to stop thumbs from scrolling past your post.`,
    },
    {
      question: `Can I generate custom ${name} captions with AI?`,
      answer: `Yes! Click 'Generate with AI' to open our free AI Caption Studio and describe your exact visual scene for unique 1-of-a-kind variations.`,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`50+ Best ${name} Captions for Social Media`}
        description={`Best ${name.toLowerCase()} captions for Instagram, TikTok, and social media.`}
        url={`https://unitoolkit.com/captions/${slug}`}
      />

      <Breadcrumbs
        items={[
          { label: "Captions", href: "/captions" },
          { label: `${name} Captions` },
        ]}
      />

      {/* Header with Semantic H1 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{name} • 2026 Curated Collection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          50+ Best {name} Captions for Social Media [2026]
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Curated {name.toLowerCase()} lines, one-liners, and viral hooks designed to make your photos, reels, and stories stand out in crowded feeds.
        </p>
      </div>

      {/* AI Action Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-200/80 dark:border-indigo-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Need Custom {name} Captions?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Describe your photo or video to generate unique {name.toLowerCase()} lines in seconds.
          </p>
        </div>
        <Link
          href={`/ai-caption-generator?topic=${encodeURIComponent(name + " caption")}`}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Generate with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Caption Cards with H2 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              Trending {name} Captions
            </h2>
            <p className="text-xs text-zinc-500 pt-0.5">
              1-click instant copy ready for Instagram, Reels, TikTok & Snapchat.
            </p>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">1-Click Copy Ready</span>
        </div>

        <div className="space-y-2">
          {matchingCaptions.map((cap, i) => (
            <CaptionCard key={cap.id} caption={cap} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Search Intent Guide (Posting times, hashtags, photo ideas, 3-sec hook) */}
      <SearchIntentGuide categoryName={name} type="caption" />

      {/* Related Categories */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More Caption Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {PILLAR_CAPTIONS_SUBPAGES.filter((s) => s !== slug).map((item) => (
            <Link
              key={item}
              href={`/captions/${item}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all capitalize"
            >
              {item} Captions
            </Link>
          ))}
        </div>
      </section>

      {/* E-E-A-T Author & Research Review Box */}
      <AuthorBioBox categoryType="Social Captions" topic={`${name} Captions`} />

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
