import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const schemaList = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://captionpro.app",
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: item.label,
      item: item.href ? `https://captionpro.app${item.href}` : undefined,
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaList,
          }),
        }}
      />

      <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-zinc-500 dark:text-zinc-400 ${className}`}>
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li className="flex items-center gap-1">
            <Link
              href="/"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                {isLast || !item.href ? (
                  <span className="font-semibold text-zinc-900 dark:text-white truncate max-w-[200px]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
