import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("youtube", "status");

export default function YouTubeStatusHubPage() {
  return renderPlatformPage("youtube", "status");
}
