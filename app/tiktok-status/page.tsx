import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("tiktok", "status");

export default function TikTokStatusHubPage() {
  return renderPlatformPage("tiktok", "status");
}
