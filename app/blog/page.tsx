import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blogData";
import { Sparkles, Clock, ArrowRight, BookOpen } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: "Blog & Creator Guides — Social Media Caption Strategies",
  description:
    "Actionable social media copywriting strategies, viral caption formulas, and growth tips for creators and founders.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ label: "Blog & Guides" }]} />

      {/* Header */}
      <div className="space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Creator Academy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Social Media Copywriting Guides
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
          Learn how to craft high-retention hooks, write engaging Instagram captions, and build a magnetic personal brand.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-6 text-left"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors leading-snug">
                  {post.title}
                </h2>
              </Link>

              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {post.author.name}
                </span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <CTASection />
    </div>
  );
}
