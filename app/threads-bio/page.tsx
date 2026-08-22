import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("threads", "bio");

export default function ThreadsBioHubPage() {
  return renderPlatformPage("threads", "bio");
}
