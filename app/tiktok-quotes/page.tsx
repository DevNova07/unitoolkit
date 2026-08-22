import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("tiktok", "quotes");

export default function TikTokQuotesHubPage() {
  return renderPlatformPage("tiktok", "quotes");
}
