import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("hindi", "quotes");

export default function HindiQuotesPage() {
  return renderTopicPage("hindi", "quotes");
}
