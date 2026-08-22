import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("funny", "status");

export default function FunnyStatusPage() {
  return renderTopicPage("funny", "status");
}
