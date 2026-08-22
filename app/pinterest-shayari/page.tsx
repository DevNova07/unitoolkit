import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("pinterest", "shayari");

export default function PinterestShayariHubPage() {
  return renderPlatformPage("pinterest", "shayari");
}
