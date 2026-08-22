import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("instagram", "status");

export default function InstagramStatusHubPage() {
  return renderPlatformPage("instagram", "status");
}
