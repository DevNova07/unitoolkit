import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("threads", "quotes");

export default function ThreadsQuotesHubPage() {
  return renderPlatformPage("threads", "quotes");
}
