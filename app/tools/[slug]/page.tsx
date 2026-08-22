import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, Wrench, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { TOOLS_LIST, getToolBySlug } from "@/data/toolsData";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { FontStyler } from "@/components/tools/FontStyler";
import { InstagramBioGenerator } from "@/components/tools/InstagramBioGenerator";
import { AIGeneratorStudio } from "@/components/generator/AIGeneratorStudio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS_LIST.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) return { title: "Tool Not Found" };

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.title} | Unitoolkit`,
      description: tool.metaDescription,
      url: `https://unitoolkit.com/tools/${tool.slug}`,
      type: "website",
    },
  };
}

export default async function ToolDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="SoftwareApplication"
        title={tool.title}
        description={tool.metaDescription}
        url={`https://unitoolkit.com/tools/${tool.slug}`}
      />

      <div className="flex justify-center sm:justify-start">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools" },
            { label: tool.badge },
          ]}
        />
      </div>

      {/* Render specialized tool based on category */}
      <Suspense fallback={<div className="h-[350px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />}>
        {tool.category === "hashtag" && <HashtagGeneratorTool />}
        {tool.category === "font" && <FontStyler />}
        {tool.category === "bio" && <InstagramBioGenerator />}
        {tool.category === "utility" && (
          <AIGeneratorStudio initialTopic={tool.title} />
        )}
      </Suspense>

      {/* Related Tools Directory */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More Free Creator Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {TOOLS_LIST.filter((t) => t.slug !== tool.slug).map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all"
            >
              {t.badge}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={tool.faqs} />

      <CTASection />
    </div>
  );
}
