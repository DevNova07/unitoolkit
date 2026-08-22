import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("snapchat", "status");

export default function SnapchatStatusHubPage() {
  return renderPlatformPage("snapchat", "status");
}
