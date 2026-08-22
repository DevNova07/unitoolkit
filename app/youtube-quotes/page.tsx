import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("youtube", "quotes");

export default function YouTubeQuotesHubPage() {
  return renderPlatformPage("youtube", "quotes");
}
