import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("love", "shayari");

export default function LoveShayariPage() {
  return renderTopicPage("love", "shayari");
}
