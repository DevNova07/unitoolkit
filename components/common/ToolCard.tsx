"use client";

import Link from "next/link";
import {
  Sparkles,
  MessageCircle,
  User,
  Hash,
  Anchor,
  FileCode,
  LayoutGrid,
  Clock,
  Terminal,
  AtSign,
  FolderOpen,
  Compass,
  BookOpen,
  Quote,
  Gift,
  Flame,
  MessageSquare,
  Layers,
  Smile,
  FileText,
  Type,
  Calendar,
  ArrowRight,
  Video,
} from "lucide-react";
import { ToolItem } from "@/data/toolsRegistry";
import {
  InstagramIcon,
  WhatsAppIcon,
  YoutubeIcon,
  TikTokIcon,
  LinkedInIcon,
  XIcon,
  PinterestIcon,
  ThreadsIcon,
  FacebookIcon,
  SnapchatIcon,
} from "@/components/common/BrandIcons";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number; color?: string }>> = {
  Sparkles,
  MessageCircle,
  User,
  Hash,
  Anchor,
  FileCode,
  LayoutGrid,
  Clock,
  Terminal,
  AtSign,
  FolderOpen,
  Compass,
  BookOpen,
  Quote,
  Gift,
  Flame,
  MessageSquare,
  Layers,
  Smile,
  FileText,
  Type,
  Calendar,
  Instagram: InstagramIcon,
  Video: TikTokIcon,
  Youtube: YoutubeIcon,
  Facebook: FacebookIcon,
  Linkedin: LinkedInIcon,
  Twitter: XIcon,
  AtSignBrand: ThreadsIcon,
  Pin: PinterestIcon,
  Ghost: SnapchatIcon,
};

interface ToolCardProps {
  tool: ToolItem;
  variant?: "default" | "compact" | "featured";
  showCategoryBadge?: boolean;
}

export function ToolCard({
  tool,
  variant = "default",
  showCategoryBadge = true,
}: ToolCardProps) {
  const Icon = ICON_MAP[tool.iconName] || Sparkles;

  const getCategoryBadge = () => {
    switch (tool.category) {
      case "create":
        return {
          label: tool.isAI ? "✨ AI Generate" : "💡 Creator Tool",
          classes: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/80",
        };
      case "ready":
        return {
          label: "📚 Ready to Copy",
          classes: "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/80",
        };
      case "platform":
        return {
          label: "📱 Platform Hub",
          classes: "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/80",
        };
    }
  };

  const badgeInfo = getCategoryBadge();

  if (variant === "compact") {
    return (
      <Link href={tool.route} className="group">
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-zinc-50/50 dark:hover:bg-zinc-900 transition-all flex items-start gap-3.5 h-full">
          <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
            <Icon className="w-5 h-5" />
          </div>

          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tool.name}
              </h3>
              {tool.badge && (
                <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded-md font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {tool.badge}
                </span>
              )}
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
              {tool.description}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={tool.route}
      className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 group text-left relative overflow-hidden"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${
              tool.color || "from-indigo-500 to-purple-600"
            } text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:rotate-3 transition-transform`}
          >
            <Icon className="w-6 h-6" />
          </div>

          {showCategoryBadge && (
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${badgeInfo.classes}`}
            >
              {tool.badge || badgeInfo.label}
            </span>
          )}
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
            <span>{tool.name}</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-xs">
        <span className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500">
          {tool.countLabel || "100% Free"}
        </span>

        <div className="inline-flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
          <span>{tool.type === "library" ? "Explore" : "Open Tool"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
