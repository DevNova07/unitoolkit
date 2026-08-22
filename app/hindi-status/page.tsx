import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("hindi", "status");

export default function HindiStatusPage() {
  return renderTopicPage("hindi", "status");
}
