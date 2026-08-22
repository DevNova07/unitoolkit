import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("pinterest", "quotes");

export default function PinterestQuotesHubPage() {
  return renderPlatformPage("pinterest", "quotes");
}
