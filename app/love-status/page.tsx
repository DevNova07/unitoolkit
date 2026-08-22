import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("love", "status");

export default function LoveStatusPage() {
  return renderTopicPage("love", "status");
}
