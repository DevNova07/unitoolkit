import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("attitude", "status");

export default function AttitudeStatusPage() {
  return renderTopicPage("attitude", "status");
}
