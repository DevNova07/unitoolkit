"use client";

import Link from "next/link";
import { ArrowRight, Layers, Smartphone } from "lucide-react";
import { PLATFORM_TAXONOMY } from "@/data/platformTaxonomy";
import { useLocale } from "@/components/common/LocaleProvider";
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

export function PlatformsClusterSection() {
  const { config, t } = useLocale();
  const rawPlatforms = Object.values(PLATFORM_TAXONOMY);

  // Regionally order platforms:
  // For India locale, place WhatsApp, Instagram, YouTube, Facebook, LinkedIn at top; move TikTok to end.
  const platforms = [...rawPlatforms].sort((a, b) => {
    if (!config.tiktokActive) {
      if (a.id === "tiktok") return 1;
      if (b.id === "tiktok") return -1;
    }
    if (config.whatsappPriority === "high") {
      if (a.id === "whatsapp" && b.id !== "instagram") return -1;
    }
    return 0;
  });

  const renderIcon = (id: string) => {
    switch (id) {
      case "instagram":
        return <InstagramIcon size={22} />;
      case "youtube":
        return <YoutubeIcon size={22} />;
      case "tiktok":
        return <TikTokIcon size={20} />;
      case "facebook":
        return <FacebookIcon size={22} />;
      case "linkedin":
        return <LinkedInIcon size={22} />;
      case "x":
        return <XIcon size={20} />;
      case "threads":
        return <ThreadsIcon size={22} />;
      case "pinterest":
        return <PinterestIcon size={22} />;
      case "snapchat":
        return <SnapchatIcon size={22} />;
      case "whatsapp":
        return <WhatsAppIcon size={22} />;
      default:
        return <Smartphone size={22} />;
    }
  };

  return (
    <section className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-[11px] font-bold text-rose-600 dark:text-rose-400">
            <Layers className="w-3 h-3" />
            <span>{config.flag} {t("exploreByPlatform")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t("exploreByPlatform")}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Tailored creator toolkits, hooks, and formats for all 10 major social networks.
          </p>
        </div>

        <Link
          href="/platforms"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <span>{t("allPlatforms")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid of 10 Platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {platforms.map((plat) => (
          <Link
            key={plat.id}
            href={plat.route}
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group text-left"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${plat.gradient} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}
                >
                  {renderIcon(plat.id)}
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                  {plat.count}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {plat.name}
                </h3>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug line-clamp-2">
                  {plat.tagline}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Open Hub</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
