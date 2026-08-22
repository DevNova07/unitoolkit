import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categoriesData";

interface CategoryGridProps {
  limit?: number;
  className?: string;
}

export function CategoryGrid({ limit, className = "" }: CategoryGridProps) {
  const list = limit ? CATEGORIES.slice(0, limit) : CATEGORIES;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 ${className}`}>
      {list.map((cat) => (
        <Link
          key={cat.id}
          href={`/categories/${cat.slug}`}
          className="group relative p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-4 text-left"
        >
          <div className="flex items-start justify-between gap-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-lg shadow-sm"
              style={{ backgroundColor: cat.accentColor }}
            >
              <span>{cat.name.charAt(0)}</span>
            </div>

            <span className="p-1.5 rounded-full text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {cat.name}
              </h3>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
              {cat.description}
            </p>
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[11px] font-semibold text-zinc-400">
            <span>{cat.count} captions</span>
            <span className="text-indigo-600 dark:text-indigo-400">Explore →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
