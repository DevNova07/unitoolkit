import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("english", "status");

export default function EnglishStatusPage() {
  return renderTopicPage("english", "status");
}
