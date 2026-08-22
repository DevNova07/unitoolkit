import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("twitter", "quotes");

export default function TwitterQuotesHubPage() {
  return renderPlatformPage("twitter", "quotes");
}
