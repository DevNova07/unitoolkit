import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("attitude", "shayari");

export default function AttitudeShayariPage() {
  return renderTopicPage("attitude", "shayari");
}
