import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export interface TocItem {
  id: string;
  label: string;
}

export interface EditorialHeroProps {
  platformName?: string;
  badge?: string;
  date?: string;
  title?: string;
  description?: string;
  aiSummary?: string;
  readTime?: string;
  authorName?: string;
  authorRole?: string;
  heroImage?: string;
  photoCreditName?: string;
  photoCreditSource?: string;
  breadcrumbs?: { label: string; href?: string }[];
  ctaHref?: string;
  ctaText?: string;
  tocItems?: TocItem[];
}

export function EditorialHero({
  platformName = "Instagram",
  badge,
  date = "Feb 20, 2026",
  title = "350+ Caption Ideas to Make Your Own",
  description = "Curated aesthetic, viral, and savage caption ideas ready to copy in 1-click.",
  heroImage,
  readTime = "10 min read",
  authorName = "UniToolkit Editorial",
  breadcrumbs = [
    { label: "Content", href: "/#explore-content" },
    { label: platformName },
  ],
  ctaHref,
  ctaText,
  tocItems,
}: EditorialHeroProps) {
  // Map specific hubs to their dedicated banners if not provided
  let resolvedImage = heroImage || "/images/hero-creator.jpg";
  const lowerBadge = (badge || platformName || "").toLowerCase();
  if (!heroImage) {
    if (lowerBadge.includes("whatsapp") || lowerBadge.includes("status")) {
      resolvedImage = "/images/whatsapp-status-banner.jpg";
    } else if (lowerBadge.includes("shayari")) {
      resolvedImage = "/images/shayari-hub-banner.jpg";
    } else if (lowerBadge.includes("quote")) {
      resolvedImage = "/images/quotes-hub-banner.jpg";
    } else if (lowerBadge.includes("bio")) {
      resolvedImage = "/images/bio-hub-banner.jpg";
    }
  }

  return (
    <div className="w-full text-left space-y-6">
      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (lg: and up): Side-by-side hero card with right banner     */}
      {/* ========================================================================= */}
      <div className="hidden lg:block w-full rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 p-8 xl:p-10 shadow-xs">
        <div className="grid grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column */}
          <div className="col-span-7 space-y-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {breadcrumbs.map((item, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <span className="text-zinc-400 dark:text-zinc-600">›</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-zinc-900 dark:text-white font-medium">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>

            {/* Badge & Title */}
            <div className="space-y-2.5">
              {badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>{badge}</span>
                </div>
              )}

              <h1 className="text-3xl xl:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.18]">
                {title}
              </h1>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            {/* Optional Fast CTA Link */}
            {ctaHref && (
              <div className="pt-1">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>{ctaText || "Try AI Generator"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Hero Visual Banner Image */}
          <div className="col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md group">
              <Image
                src={resolvedImage}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE LAYOUT (< lg:): Title -> Meta -> Full Image -> Table of Contents   */}
      {/* ========================================================================= */}
      <div className="block lg:hidden w-full space-y-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          {breadcrumbs.map((item, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              {idx > 0 && <span className="text-zinc-400 dark:text-zinc-600">›</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-zinc-900 dark:text-white font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* H1 Title */}
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.18]">
          {title}
        </h1>

        {/* Author Meta Line */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <div className="w-5 h-5 rounded-full overflow-hidden bg-zinc-800 shrink-0 relative">
            <Image
              src="/images/hero-creator.jpg"
              alt={authorName}
              width={20}
              height={20}
              className="w-full h-full object-cover"
            />
          </div>
          <span>{authorName}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        {/* Full-width Banner Image */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-sm">
          <Image
            src={resolvedImage}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Description Text */}
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* ========================================================================= */}
      {/* TABLE OF CONTENTS (Both Mobile & Desktop)                                 */}
      {/* ========================================================================= */}
      {tocItems && tocItems.length > 0 && (
        <nav aria-label="Table of Contents" className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Table of Contents
          </h2>
          <ul className="space-y-2 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:underline transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
