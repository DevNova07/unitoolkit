import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("youtube", "bio");

export default function YouTubeBioHubPage() {
  return renderPlatformPage("youtube", "bio");
}
