import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("hindi", "shayari");

export default function HindiShayariPage() {
  return renderTopicPage("hindi", "shayari");
}
