import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("snapchat", "quotes");

export default function SnapchatQuotesHubPage() {
  return renderPlatformPage("snapchat", "quotes");
}
