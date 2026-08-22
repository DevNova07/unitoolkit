import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("youtube", "shayari");

export default function YouTubeShayariHubPage() {
  return renderPlatformPage("youtube", "shayari");
}
