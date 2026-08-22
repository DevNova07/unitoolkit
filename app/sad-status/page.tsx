import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("sad", "status");

export default function SadStatusPage() {
  return renderTopicPage("sad", "status");
}
