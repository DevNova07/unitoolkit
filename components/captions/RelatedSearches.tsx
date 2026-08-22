import Link from "next/link";
import { Search, Sparkles } from "lucide-react";

interface RelatedSearchesProps {
  currentTopic?: string;
  tags?: { label: string; href: string }[];
}

export function RelatedSearches({
  currentTopic = "Captions",
  tags,
}: RelatedSearchesProps) {
  const defaultTags = [
    { label: `${currentTopic} for boys`, href: `/captions?q=${encodeURIComponent(currentTopic + " boys")}` },
    { label: `${currentTopic} for girls`, href: `/captions?q=${encodeURIComponent(currentTopic + " girls")}` },
    { label: `Short 1-line ${currentTopic.toLowerCase()}`, href: `/captions?q=${encodeURIComponent("short " + currentTopic)}` },
    { label: `Aesthetic ${currentTopic.toLowerCase()} bio`, href: `/tools/aesthetic-font-generator` },
    { label: `Savage ${currentTopic.toLowerCase()} attitude`, href: `/categories/attitude` },
    { label: `Funny ${currentTopic.toLowerCase()} one liners`, href: `/categories/funny` },
    { label: `Viral hashtags for ${currentTopic.toLowerCase()}`, href: `/tools/hashtag-generator` },
    { label: `AI ${currentTopic.toLowerCase()} writer`, href: `/ai-caption-generator?topic=${encodeURIComponent(currentTopic)}` },
  ];

  const searchPills = tags || defaultTags;

  return (
    <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 space-y-4 text-left">
      <div className="flex items-center gap-2">
        <Search className="w-4 h-4 text-zinc-400" />
        <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
          People Also Search For
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {searchPills.map((pill, idx) => (
          <Link
            key={idx}
            href={pill.href}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-2xs"
          >
            <Sparkles className="w-3 h-3 text-indigo-500 opacity-60" />
            <span>{pill.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
