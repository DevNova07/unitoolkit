import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("pinterest", "status");

export default function PinterestStatusHubPage() {
  return renderPlatformPage("pinterest", "status");
}
