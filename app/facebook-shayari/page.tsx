import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("facebook", "shayari");

export default function FacebookShayariHubPage() {
  return renderPlatformPage("facebook", "shayari");
}
