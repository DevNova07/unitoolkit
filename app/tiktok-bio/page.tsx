import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("tiktok", "bio");

export default function TikTokBioHubPage() {
  return renderPlatformPage("tiktok", "bio");
}
