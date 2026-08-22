import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("attitude", "quotes");

export default function AttitudeQuotesPage() {
  return renderTopicPage("attitude", "quotes");
}
