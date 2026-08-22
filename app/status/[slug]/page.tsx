import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { WhatsAppStatusStudio } from "@/components/whatsapp/WhatsAppStatusStudio";
import { PILLAR_STATUS_SUBPAGES } from "@/data/master300Architecture";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PILLAR_STATUS_SUBPAGES.map((slug) => ({ slug }));
}

function capitalize(s: string) {
  return s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!PILLAR_STATUS_SUBPAGES.includes(slug)) {
    return { title: "Status Not Found" };
  }

  const name = capitalize(slug);
  return {
    title: `${name} Status for WhatsApp & Social Media [2026] | UniToolkit`,
    description: `Best ${name.toLowerCase()} status lines and 2-line quotes with live mobile preview and 1-click WhatsApp share.`,
    alternates: {
      canonical: `/status/${slug}`,
    },
    openGraph: {
      title: `${name} Status | UniToolkit`,
      description: `Best ${name.toLowerCase()} status quotes for WhatsApp.`,
      url: `https://unitoolkit.com/status/${slug}`,
      type: "article",
    },
  };
}

export default async function StatusSlugPage({ params }: PageProps) {
  const { slug } = await params;
  if (!PILLAR_STATUS_SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  const faqs = [
    {
      question: `How do I share these ${name} status lines to WhatsApp?`,
      answer: `Click the green WhatsApp button next to any line to open WhatsApp directly with pre-filled text.`,
    },
    {
      question: `Can I generate custom ${name} status with AI?`,
      answer: `Yes, click 'Create Status with AI' to generate personalized 2-line status couplets.`,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`${name} Status for WhatsApp`}
        description={`Best ${name.toLowerCase()} status lines with 1-click sharing.`}
        url={`https://unitoolkit.com/status/${slug}`}
      />

      <Breadcrumbs
        items={[
          { label: "Status Studio", href: "/status" },
          { label: `${name} Status` },
        ]}
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-2xs">
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>{name} • Daily Status Quotes</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Best {name} Status for WhatsApp
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Curated 2-line {name.toLowerCase()} quotes and thoughts with instant copy and WhatsApp status sharing.
        </p>
      </div>

      {/* Quick AI Action Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-200/80 dark:border-emerald-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Generate custom {name} status with AI?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Create fresh 2-line status couplets in Hindi and English.
          </p>
        </div>
        <Link
          href={`/ai-status-generator?topic=${encodeURIComponent(name + " status")}`}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Create Status with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Main Studio */}
      <WhatsAppStatusStudio />

      {/* Related Status Categories */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More Status Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {PILLAR_STATUS_SUBPAGES.filter((s) => s !== slug).map((item) => (
            <Link
              key={item}
              href={`/status/${item}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all capitalize"
            >
              {capitalize(item)} Status
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
