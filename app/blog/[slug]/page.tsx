import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blogData";
import { Clock, Calendar, ArrowLeft, Sparkles } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "CaptionPro",
      url: "https://captionpro.app",
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 text-left border-b border-zinc-100 dark:border-zinc-900 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
          <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishedAt}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.2]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author info */}
        <div className="flex items-center gap-3 pt-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
          />
          <div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">
              {post.author.name}
            </div>
            <div className="text-xs text-zinc-400">{post.author.role}</div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none text-left space-y-6 text-zinc-800 dark:text-zinc-200 leading-relaxed text-sm sm:text-base">
        {post.content.split("\n\n").map((block, idx) => {
          if (block.startsWith("## ")) {
            return (
              <h2
                key={idx}
                className="text-2xl font-bold text-zinc-900 dark:text-white pt-4 pb-1 border-b border-zinc-100 dark:border-zinc-900"
              >
                {block.replace("## ", "")}
              </h2>
            );
          }
          if (block.startsWith("### ")) {
            return (
              <h3 key={idx} className="text-lg font-bold text-zinc-900 dark:text-white pt-2">
                {block.replace("### ", "")}
              </h3>
            );
          }
          if (block.startsWith("- ")) {
            const items = block.split("\n").map((line) => line.replace("- ", ""));
            return (
              <ul key={idx} className="space-y-2 list-disc pl-5">
                {items.map((item, iIdx) => (
                  <li key={iIdx} className="text-zinc-700 dark:text-zinc-300">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return <p key={idx}>{block}</p>;
        })}
      </div>

      {/* Tags */}
      <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-zinc-400">Tags:</span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      <CTASection />
    </div>
  );
}
