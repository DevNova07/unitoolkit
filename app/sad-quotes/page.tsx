import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("sad", "quotes");

export default function SadQuotesPage() {
  return renderTopicPage("sad", "quotes");
}
