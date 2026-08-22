import { MetadataRoute } from "next";
import { getAllMaster300Urls } from "@/data/master300Architecture";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unitoolkit.com";
  const allUrls = getAllMaster300Urls();

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
      path === "/quotes"
    ) {
      priority = 0.95;
      changeFrequency = "daily";
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
