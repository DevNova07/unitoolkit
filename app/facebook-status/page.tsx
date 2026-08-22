import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("facebook", "status");

export default function FacebookStatusHubPage() {
  return renderPlatformPage("facebook", "status");
}
