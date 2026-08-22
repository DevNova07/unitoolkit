import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("threads", "status");

export default function ThreadsStatusHubPage() {
  return renderPlatformPage("threads", "status");
}
