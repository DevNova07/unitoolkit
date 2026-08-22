import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("love", "quotes");

export default function LoveQuotesPage() {
  return renderTopicPage("love", "quotes");
}
