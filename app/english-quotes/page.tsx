import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("english", "quotes");

export default function EnglishQuotesPage() {
  return renderTopicPage("english", "quotes");
}
