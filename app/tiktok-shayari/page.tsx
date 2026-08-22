import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("tiktok", "shayari");

export default function TikTokShayariHubPage() {
  return renderPlatformPage("tiktok", "shayari");
}
