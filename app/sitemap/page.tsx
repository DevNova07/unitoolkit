import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, MapPin, Grid, Layers, ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { ALL_PLATFORM_BLUEPRINTS, CORE_PAGES } from "@/data/masterSeo300Data";
import { BLOG_POSTS } from "@/data/blogData";
import { TOOLS_LIST } from "@/data/toolsData";

export const metadata: Metadata = {
  title: "Website Sitemap — All 300+ Pages & Creator Tools [2026] | Unitoolkit",
  description:
    "Explore the complete visual sitemap of Unitoolkit. Browse 300+ pages of Instagram captions, WhatsApp status, TikTok hooks, AI generators, and blog guides.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function VisualSitemapPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 text-left">
      <JsonLdSchema
        type="WebSite"
        title="Unitoolkit Complete 300+ Pages Sitemap"
        description="Comprehensive directory of social media captions, bios, shayari, quotes, and AI tools."
        url="https://unitoolkit.com/sitemap"
      />

      <Breadcrumbs items={[{ label: "Sitemap" }]} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Complete 300+ Pages Index</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Website Sitemap & Directory
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Quickly navigate to any platform hub, AI generator, special topic collection, or copywriting guide.
        </p>
      </div>

      {/* Section 1: Core Pages */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-pink-500" />
          <span>1. Core & Essential Pages</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {CORE_PAGES.map((p) => (
            <Link
              key={p.route}
              href={p.route}
              className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:border-pink-500 hover:text-pink-600 transition flex items-center justify-between"
            >
              <span>{p.badge}</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* Sections 2 to 11: Platform Hubs & Subpages */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <Grid className="w-5 h-5 text-pink-500" />
          <span>2. Social Media Platform Directories (10 Platforms)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_PLATFORM_BLUEPRINTS.map((plat) => (
            <div
              key={plat.id}
              className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span>{plat.badge}</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                  {plat.subpages.length} Pages
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {plat.subpages.map((sub) => (
                  <Link
                    key={`${plat.id}-${sub.type}-${sub.slug}`}
                    href={`/${plat.id}-${sub.type}/${sub.slug}`}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:border-pink-500 hover:text-pink-600 transition"
                  >
                    {sub.slug.toUpperCase()} {sub.type}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 12: AI Content Generators */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-pink-500" />
          <span>3. Free AI Content Generators</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: "AI Caption Generator", href: "/ai-caption-generator" },
            { label: "AI Bio Generator", href: "/ai-bio-generator" },
            { label: "AI Status Generator", href: "/ai-status-generator" },
            { label: "AI Shayari Generator", href: "/ai-shayari-generator" },
            { label: "AI Quote Generator", href: "/ai-quotes-generator" },
            { label: "AI Hashtag Generator", href: "/hashtag-generator" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:border-pink-500 hover:text-pink-600 transition text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Section 13: Special Topics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <MapPin className="w-5 h-5 text-pink-500" />
          <span>4. Special Topic Hubs</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: "👑 Attitude Hub", href: "/attitude-captions" },
            { label: "❤️ Love Hub", href: "/love-captions" },
            { label: "💔 Sad Hub", href: "/sad-captions" },
            { label: "😂 Funny Hub", href: "/funny-captions" },
            { label: "🇮🇳 Hindi Hub", href: "/hindi-captions" },
            { label: "🌍 English Hub", href: "/english-captions" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:border-pink-500 hover:text-pink-600 transition text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Section 14: Blog Articles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-pink-500" />
          <span>5. Creator Blog & Guides ({BLOG_POSTS.length} Articles)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:border-pink-500 hover:text-pink-600 transition flex items-center justify-between"
            >
              <span className="line-clamp-1">{post.title}</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400 shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
