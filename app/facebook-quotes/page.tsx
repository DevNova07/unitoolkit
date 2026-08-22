import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("facebook", "quotes");

export default function FacebookQuotesHubPage() {
  return renderPlatformPage("facebook", "quotes");
}
