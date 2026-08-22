import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("linkedin", "quotes");

export default function LinkedInQuotesHubPage() {
  return renderPlatformPage("linkedin", "quotes");
}
