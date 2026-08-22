import { MetadataRoute } from "next";
import { getAllMaster300Urls } from "@/data/master300Architecture";
import {
  CORE_NAME_HUBS,
  ORIGIN_CULTURE_LIST,
  RELIGION_TRADITION_LIST,
  STYLE_PREFERENCE_LIST,
  MEANING_THEMES_LIST,
  POPULARITY_LIST,
  AI_NAME_STUDIOS,
} from "@/data/namesTaxonomy";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unitoolkit.com";
  const master300Urls = getAllMaster300Urls();

  const nameUrls = [
    "/names",
    ...CORE_NAME_HUBS.map((c) => `/names/${c.slug}`),
    ...ORIGIN_CULTURE_LIST.map((o) => `/names/${o.slug}`),
    ...RELIGION_TRADITION_LIST.map((r) => `/names/${r.slug}`),
    ...STYLE_PREFERENCE_LIST.map((s) => `/names/${s.slug}`),
    ...MEANING_THEMES_LIST.map((m) => `/names/meaning/${m.slug}`),
    ..."abcdefghijklmnopqrstuvwxyz".split("").map((l) => `/names/starting-with/${l}`),
    ...POPULARITY_LIST.map((p) => `/names/popular/${p.slug}`),
    ...AI_NAME_STUDIOS.map((a) => a.route),
    "/names/name-meaning",
    "/names/name-pronunciation",
    "/names/name-matcher",
    "/names/name-game",
    "/names/name-combiner",
  ];

  const allUrls = Array.from(new Set([...master300Urls, ...nameUrls]));

  return allUrls.map((path) => {
    let priority = 0.85;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (path === "/") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (
      path.startsWith("/ai-") ||
      path === "/captions" ||
      path === "/bios" ||
      path === "/status" ||
      path === "/shayari" ||
      path === "/quotes" ||
      path === "/names"
    ) {
      priority = 0.95;
      changeFrequency = "daily";
    } else if (path.startsWith("/names")) {
      priority = 0.88;
      changeFrequency = "weekly";
    } else if (path.startsWith("/blog")) {
      priority = 0.8;
      changeFrequency = "monthly";
    } else if (
      path === "/privacy-policy" ||
      path === "/terms-of-service" ||
      path === "/disclaimer"
    ) {
      priority = 0.4;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
