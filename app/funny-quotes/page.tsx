import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("funny", "quotes");

export default function FunnyQuotesPage() {
  return renderTopicPage("funny", "quotes");
}
