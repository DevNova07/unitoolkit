import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  className?: string;
}

export function CTASection({
  title = "Need a caption made for your next post?",
  subtitle,
  description,
  primaryBtnText = "Generate Caption with AI",
  primaryBtnHref = "/ai-caption-generator",
  secondaryBtnText = "Explore Caption Library",
  secondaryBtnHref = "/captions",
  className = "",
}: CTASectionProps) {
  const displaySubtitle =
    description ||
    subtitle ||
    "Stop overthinking what to write. Find the perfect ready-to-use lines or synthesize custom AI captions in seconds.";

  return (
    <section className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl text-center space-y-6">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Free & Unlimited</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Link
            href={primaryBtnHref}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{primaryBtnText}</span>
          </Link>

          <Link
            href={secondaryBtnHref}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all flex items-center gap-2"
          >
            <span>{secondaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
