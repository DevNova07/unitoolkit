import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("sad", "shayari");

export default function SadShayariPage() {
  return renderTopicPage("sad", "shayari");
}
