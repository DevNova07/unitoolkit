import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PLATFORMS } from "@/data/platformsData";
import {
  InstagramIcon,
  YoutubeIcon,
  TikTokIcon,
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  ThreadsIcon,
  PinterestIcon,
  SnapchatIcon,
  WhatsAppIcon,
} from "@/components/common/BrandIcons";

interface PlatformGridProps {
  limit?: number;
  className?: string;
}

export function PlatformGrid({ limit, className = "" }: PlatformGridProps) {
  const list = limit ? PLATFORMS.slice(0, limit) : PLATFORMS;

  const renderIcon = (id: string) => {
    switch (id) {
      case "instagram":
        return <InstagramIcon size={22} />;
      case "youtube":
        return <YoutubeIcon size={22} />;
      case "tiktok":
        return <TikTokIcon size={22} />;
      case "facebook":
        return <FacebookIcon size={22} />;
      case "linkedin":
        return <LinkedInIcon size={22} />;
      case "x":
        return <XIcon size={20} />;
      case "threads":
        return <ThreadsIcon size={20} />;
      case "pinterest":
        return <PinterestIcon size={22} />;
      case "snapchat":
        return <SnapchatIcon size={22} />;
      case "whatsapp":
        return <WhatsAppIcon size={22} />;
      default:
        return <InstagramIcon size={22} />;
    }
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {list.map((plat) => (
        <Link
          key={plat.id}
          href={plat.path}
          className="group relative p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-5 text-left"
        >
          <div className="flex items-start justify-between">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: plat.color }}
            >
              {renderIcon(plat.id)}
            </div>

            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">
              {plat.badge}
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {plat.name} Captions
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
              {plat.description}
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-xs font-semibold">
            <span className="text-zinc-400">{plat.count} captions</span>
            <span className="text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Browse <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
