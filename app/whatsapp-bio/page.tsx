import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("whatsapp", "bio");

export default function WhatsAppBioHubPage() {
  return renderPlatformPage("whatsapp", "bio");
}
