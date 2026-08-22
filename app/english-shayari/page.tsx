import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("english", "shayari");

export default function EnglishShayariPage() {
  return renderTopicPage("english", "shayari");
}
