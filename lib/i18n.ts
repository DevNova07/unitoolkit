export type LocaleCode = "en";

export interface LocaleConfig {
  code: LocaleCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
  hasShayariPillar: boolean;
  tiktokActive: boolean;
  whatsappPriority: "high" | "standard";
  region: string;
}

export const SUPPORTED_LOCALES: Record<LocaleCode, LocaleConfig> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🌐",
    dir: "ltr",
    hasShayariPillar: true,
    tiktokActive: true,
    whatsappPriority: "high",
    region: "Global",
  },
};

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALE_TRANSLATIONS: Record<LocaleCode, Record<string, string>> = {
  en: {
    captions: "Captions",
    shayari: "Shayari",
    status: "Status",
    bios: "Bio",
    quotes: "Quotes",
    aiStudio: "AI Studio",
    aiTools: "AI Tools",
    platforms: "Platforms",
    search: "Search...",
    exploreByPlatform: "Explore by Platform",
    allTools: "View All 5 Tools",
    allPlatforms: "View All 10 Hubs",
    freeForever: "100% Free Forever",
    noLogin: "No Login Required",
    quickTakeaway: "AI Overview • Key Creator Takeaway",
    generate: "Generate",
    copy: "Copy",
    copied: "Copied!",
  },
};
