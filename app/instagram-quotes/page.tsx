import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("instagram", "quotes");

export default function InstagramQuotesHubPage() {
  return renderPlatformPage("instagram", "quotes");
}
