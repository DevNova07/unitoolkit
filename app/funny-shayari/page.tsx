import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("funny", "shayari");

export default function FunnyShayariPage() {
  return renderTopicPage("funny", "shayari");
}
