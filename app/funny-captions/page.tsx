import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("funny", "captions");

export default function FunnyCaptionsPage() {
  return renderTopicPage("funny", "captions");
}
