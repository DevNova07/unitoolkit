import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("linkedin", "status");

export default function LinkedInStatusHubPage() {
  return renderPlatformPage("linkedin", "status");
}
